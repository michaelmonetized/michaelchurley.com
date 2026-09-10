"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { Piece } from "@/lib/portfolio/pieces";

export type Controls = {
  progress: number;
  mouseYaw: number;
  mousePitch: number;
  touchYaw: number;
  gyroYaw: number;
  gyroPitch: number;
  focus: number;
};

export function emptyControls(): Controls {
  return {
    progress: 0,
    mouseYaw: 0,
    mousePitch: 0,
    touchYaw: 0,
    gyroYaw: 0,
    gyroPitch: 0,
    focus: 0,
  };
}

const SPACING = 2.55;
const ANGLE_STEP = 0.82;
const ORBIT = 6.35;

export function pieceAngle(index: number) {
  return index * ANGLE_STEP;
}

function MediaPlane({
  src,
  width,
  height,
  video,
  load,
}: {
  src: string;
  width: number;
  height: number;
  video: boolean;
  load: boolean;
}) {
  const mat = useRef<THREE.MeshBasicMaterial>(null);

  useEffect(() => {
    if (!load) return;

    if (video) {
      const el = document.createElement("video");
      el.src = src;
      el.muted = true;
      el.loop = true;
      el.playsInline = true;
      el.setAttribute("webkit-playsinline", "true");
      el.preload = "none";
      el.crossOrigin = "anonymous";
      const tex = new THREE.VideoTexture(el);
      tex.minFilter = THREE.LinearFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
      const apply = () => {
        if (mat.current) {
          mat.current.map = tex;
          mat.current.needsUpdate = true;
        }
        el.play().catch(() => {});
      };
      el.addEventListener("canplay", apply);
      el.load();
      return () => {
        el.removeEventListener("canplay", apply);
        el.pause();
        el.src = "";
        tex.dispose();
      };
    }

    const loader = new THREE.TextureLoader();
    let tex: THREE.Texture | null = null;
    loader.load(src, (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.minFilter = THREE.LinearFilter;
      tex = t;
      if (mat.current) {
        mat.current.map = t;
        mat.current.needsUpdate = true;
      }
    });
    return () => {
      tex?.dispose();
    };
  }, [src, video, load]);

  return (
    <mesh userData={{ pickable: true }}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        ref={mat}
        color="#1a1a24"
        toneMapped={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function PieceCard({
  piece,
  index,
  controls,
  length,
}: {
  piece: Piece;
  index: number;
  controls: React.MutableRefObject<Controls>;
  length: number;
}) {
  const group = useRef<THREE.Group>(null);
  const [load, setLoad] = useState(index < 2);
  const armed = useRef(index < 2);
  const width = piece.aspect >= 1 ? 1.72 : 1.72 * piece.aspect;
  const height = piece.aspect >= 1 ? 1.72 / piece.aspect : 1.72;
  const angle = pieceAngle(index);
  const radius = 3.55 + (index % 5) * 0.28;
  const baseY = index * SPACING;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const camY = controls.current.progress * length;
    g.position.set(
      Math.sin(angle) * radius,
      baseY + Math.sin(t * 0.45 + index) * 0.08,
      Math.cos(angle) * radius
    );
    g.lookAt(0, g.position.y, 0);
    g.rotateY(Math.PI);
    const dist = Math.abs(g.position.y - camY);
    const near = THREE.MathUtils.smoothstep(3.2, 0.2, dist);
    const s = 1 + near * 0.42;
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 6, delta));
    if (!armed.current && dist < 8) {
      armed.current = true;
      setLoad(true);
    }
    if (near > 0.72) controls.current.focus = index;
  });

  return (
    <group ref={group} userData={{ piece, index }}>
      <MediaPlane
        src={piece.src}
        width={width}
        height={height}
        video={piece.kind === "video"}
        load={load}
      />
    </group>
  );
}

function yawOf(c: Controls) {
  return c.mouseYaw + c.touchYaw + c.gyroYaw;
}

function pitchOf(c: Controls) {
  return THREE.MathUtils.clamp(c.mousePitch + c.gyroPitch, -0.95, 0.95);
}

function Rig({
  controls,
  length,
}: {
  controls: React.MutableRefObject<Controls>;
  length: number;
}) {
  useFrame(({ camera }, delta) => {
    const c = controls.current;
    const yaw = yawOf(c);
    const pitch = pitchOf(c);
    const y = c.progress * length;
    const tx = Math.sin(yaw) * ORBIT;
    const tz = Math.cos(yaw) * ORBIT;
    const ty = y + pitch * 2.4;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, tx, 8, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, ty, 8, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, tz, 8, delta);
    camera.lookAt(0, y, 0);
  });
  return null;
}

function headingFrom(ev: DeviceOrientationEvent) {
  const wk = (ev as DeviceOrientationEvent & { webkitCompassHeading?: number })
    .webkitCompassHeading;
  if (typeof wk === "number" && Number.isFinite(wk)) return wk;
  if (typeof ev.alpha === "number" && Number.isFinite(ev.alpha)) {
    return (360 - ev.alpha) % 360;
  }
  return null;
}

function Interaction({
  controls,
  length,
  count,
  onPick,
  onGyro,
}: {
  controls: React.MutableRefObject<Controls>;
  length: number;
  count: number;
  onPick: (piece: Piece) => void;
  onGyro?: () => void;
}) {
  const { gl, camera, scene } = useThree();
  const ray = useMemo(() => new THREE.Raycaster(), []);
  const ndc = useMemo(() => new THREE.Vector2(), []);

  useEffect(() => {
    const el = gl.domElement;
    el.style.touchAction = "none";
    el.style.setProperty("-webkit-user-select", "none");
    el.style.setProperty("-webkit-touch-callout", "none");
    el.style.userSelect = "none";

    const tap = { x: 0, y: 0, moved: false };
    let last: { x: number; y: number } | null = null;
    let lastTouchAt = 0;
    let gyroOrigin: number | null = null;
    let gyroOn = false;

    const startGyro = async () => {
      if (gyroOn) return;
      try {
        const Doe = DeviceOrientationEvent as unknown as {
          requestPermission?: () => Promise<string>;
        };
        if (typeof Doe.requestPermission === "function") {
          const perm = await Doe.requestPermission();
          if (perm !== "granted") return;
        }
        gyroOn = true;
        onGyro?.();
        const onOrient = (ev: DeviceOrientationEvent) => {
          const heading = headingFrom(ev);
          if (heading != null) {
            if (gyroOrigin == null) gyroOrigin = heading;
            let d = heading - gyroOrigin;
            while (d > 180) d -= 360;
            while (d < -180) d += 360;
            controls.current.gyroYaw = THREE.MathUtils.degToRad(d);
          }
          if (typeof ev.beta === "number") {
            controls.current.gyroPitch = THREE.MathUtils.clamp(
              (ev.beta - 50) / 40,
              -0.95,
              0.95
            );
          }
        };
        window.addEventListener("deviceorientation", onOrient, true);
        window.addEventListener(
          "deviceorientationabsolute",
          onOrient as EventListener,
          true
        );
      } catch {
        /* denied */
      }
    };

    const pickAt = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      ndc.x = ((clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      ndc.y = -((clientY - rect.top) / Math.max(rect.height, 1)) * 2 + 1;
      ray.setFromCamera(ndc, camera);
      const hits = ray.intersectObjects(scene.children, true);
      for (const hit of hits) {
        let obj: THREE.Object3D | null = hit.object;
        while (obj) {
          const piece = obj.userData?.piece as Piece | undefined;
          const index = obj.userData?.index as number | undefined;
          if (piece && typeof index === "number") {
            const max = Math.max(count - 1, 1);
            controls.current.progress = index / max;
            const angle = pieceAngle(index);
            controls.current.touchYaw =
              angle - controls.current.gyroYaw - controls.current.mouseYaw;
            const sc = document.scrollingElement;
            if (sc) {
              const span = Math.max(sc.scrollHeight - sc.clientHeight, 1);
              sc.scrollTop = (index / max) * span;
            }
            onPick(piece);
            return;
          }
          obj = obj.parent;
        }
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, left: 0 });
    };

    const onMouseMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      const nx = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      const ny = (e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;
      controls.current.mouseYaw = nx * 0.9;
      controls.current.mousePitch = ny * 0.5;
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      last = { x: t.clientX, y: t.clientY };
      tap.x = t.clientX;
      tap.y = t.clientY;
      tap.moved = false;
      void startGyro();
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t || !last) return;
      e.preventDefault();
      const dx = t.clientX - last.x;
      const dy = t.clientY - last.y;
      last = { x: t.clientX, y: t.clientY };
      if (Math.hypot(t.clientX - tap.x, t.clientY - tap.y) > 12) tap.moved = true;
      controls.current.touchYaw -= dx * 0.012;
      window.scrollBy(0, -dy);
    };

    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      last = null;
      if (tap.moved) return;
      lastTouchAt = Date.now();
      if (e.changedTouches[0]) {
        pickAt(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    };

    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (Date.now() - lastTouchAt < 700) return;
      pickAt(e.clientX, e.clientY);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("pointermove", onMouseMove);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: false });
    el.addEventListener("click", onClick);
    const onGyroReq = () => {
      void startGyro();
    };
    window.addEventListener("portfolio-request-gyro", onGyroReq);

    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointermove", onMouseMove);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("click", onClick);
      window.removeEventListener("portfolio-request-gyro", onGyroReq);
    };
  }, [gl, camera, scene, controls, ray, ndc, length, count, onPick, onGyro]);

  return null;
}

function FitCanvas() {
  const { setSize, gl } = useThree();
  useEffect(() => {
    const fit = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setSize(w, h);
      gl.setSize(w, h, false);
      gl.domElement.style.width = "100%";
      gl.domElement.style.height = "100%";
      gl.domElement.style.display = "block";
      gl.domElement.style.touchAction = "none";
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [setSize, gl]);
  return null;
}

function Field({ length }: { length: number }) {
  return (
    <>
      <color attach="background" args={["#05050c"]} />
      <fog attach="fog" args={["#05050c", 8, 26]} />
      <ambientLight intensity={0.55} />
      <pointLight
        position={[5, length * 0.4, 8]}
        color="#cdd6f4"
        intensity={10}
        distance={28}
      />
      <Sparkles
        count={80}
        scale={[16, Math.max(length + 8, 16), 16]}
        size={3}
        speed={0.2}
        opacity={0.45}
        color="#bac2de"
      />
    </>
  );
}

export default function GalleryCanvas({
  pieces,
  controls,
  onPick,
  onReady,
  onGyro,
}: {
  pieces: Piece[];
  controls: React.MutableRefObject<Controls>;
  onPick: (piece: Piece) => void;
  onReady?: () => void;
  onGyro?: () => void;
}) {
  const length = Math.max((pieces.length - 1) * SPACING, SPACING);
  const items = useMemo(() => pieces, [pieces]);

  return (
    <Canvas
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
      dpr={[1, 1.5]}
      resize={{ debounce: 0 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      onCreated={({ gl, setSize }) => {
        gl.setClearColor("#05050c", 1);
        const w = window.innerWidth;
        const h = window.innerHeight;
        setSize(w, h);
        gl.setSize(w, h, false);
        gl.domElement.id = "portfolio-gl";
        gl.domElement.style.width = "100%";
        gl.domElement.style.height = "100%";
        gl.domElement.style.display = "block";
        gl.domElement.style.touchAction = "none";
        onReady?.();
      }}
      camera={{ position: [0, 0.2, ORBIT], fov: 48, near: 0.1, far: 80 }}
    >
      <FitCanvas />
      <Field length={length} />
      <Interaction
        controls={controls}
        length={length}
        count={items.length}
        onPick={onPick}
        onGyro={onGyro}
      />
      <Rig controls={controls} length={length} />
      {items.map((piece, i) => (
        <PieceCard
          key={piece.file}
          piece={piece}
          index={i}
          controls={controls}
          length={length}
        />
      ))}
    </Canvas>
  );
}

export { SPACING };
