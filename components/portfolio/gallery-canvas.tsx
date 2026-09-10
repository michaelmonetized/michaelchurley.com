"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { Piece } from "@/lib/portfolio/pieces";

export type Controls = {
  progress: number;
  yaw: number;
  pitch: number;
  roll: number;
  focus: number;
};

const SPACING = 2.55;

function MediaPlane({
  src,
  width,
  height,
  video,
}: {
  src: string;
  width: number;
  height: number;
  video: boolean;
}) {
  const mat = useRef<THREE.MeshBasicMaterial>(null);

  useEffect(() => {
    if (video) {
      const el = document.createElement("video");
      el.src = src;
      el.muted = true;
      el.loop = true;
      el.playsInline = true;
      el.preload = "metadata";
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
  }, [src, video]);

  return (
    <mesh>
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
  onPick,
}: {
  piece: Piece;
  index: number;
  controls: React.MutableRefObject<Controls>;
  length?: number;
  onPick: (piece: Piece) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const glow = useRef<THREE.MeshStandardMaterial>(null);
  const width = piece.aspect >= 1 ? 1.72 : 1.72 * piece.aspect;
  const height = piece.aspect >= 1 ? 1.72 / piece.aspect : 1.72;
  const angle = index * 0.82;
  const radius = 3.55 + (index % 5) * 0.28;
  const baseY = index * SPACING;

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const camY = controls.current.progress * length;
    g.position.set(
      Math.sin(angle + controls.current.yaw * 0.15) * radius,
      baseY + Math.sin(t * 0.45 + index) * 0.1,
      Math.cos(angle + controls.current.yaw * 0.15) * radius
    );
    g.lookAt(state.camera.position);
    g.rotateY(Math.PI);
    const dist = Math.abs(g.position.y - camY);
    const near = THREE.MathUtils.smoothstep(3.2, 0.2, dist);
    const s = 1 + near * 0.42;
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 6, state.delta));
    if (glow.current) {
      glow.current.opacity = 0.12 + near * 0.55;
      glow.current.emissiveIntensity = 0.4 + near * 1.8;
    }
    if (near > 0.72) controls.current.focus = index;
  });

  return (
    <group
      ref={group}
      onClick={(e) => {
        e.stopPropagation();
        onPick(piece);
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
    >
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[width + 0.08, height + 0.08]} />
        <meshStandardMaterial
          ref={glow}
          color="#94e4ff"
          emissive="#ff94bb"
          emissiveIntensity={0.6}
          transparent
          opacity={0.18}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <MediaPlane
        src={piece.src}
        width={width}
        height={height}
        video={piece.kind === "video"}
      />
    </group>
  );
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
    const y = c.progress * length;
    const tx = Math.sin(c.yaw) * 1.55;
    const tz = 6.35 + Math.cos(c.yaw) * 0.55;
    const ty = y + 0.15 + c.pitch * 1.8;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, tx, 4, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, ty, 5, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, tz, 4, delta);
    camera.lookAt(Math.sin(c.yaw) * 0.35, y - 0.15, 0);
    camera.rotation.z = THREE.MathUtils.damp(
      camera.rotation.z,
      c.roll * 0.35,
      3,
      delta
    );
  });
  return null;
}

function Interaction({
  controls,
}: {
  controls: React.MutableRefObject<Controls>;
}) {
  const { gl } = useThree();
  const drag = useRef<{
    id: number | null;
    x: number;
    y: number;
    yaw: number;
    pitch: number;
  }>({ id: null, x: 0, y: 0, yaw: 0, pitch: 0 });

  useEffect(() => {
    const el = gl.domElement;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, left: e.deltaX });
    };

    const onDown = (e: PointerEvent) => {
      drag.current = {
        id: e.pointerId,
        x: e.clientX,
        y: e.clientY,
        yaw: controls.current.yaw,
        pitch: controls.current.pitch,
      };
      el.setPointerCapture(e.pointerId);
    };

    const onMove = (e: PointerEvent) => {
      if (drag.current.id !== e.pointerId) return;
      const dx = e.clientX - drag.current.x;
      const dy = e.clientY - drag.current.y;
      controls.current.yaw = drag.current.yaw + dx * 0.0055;
      controls.current.pitch = Math.max(
        -0.75,
        Math.min(0.75, drag.current.pitch + dy * 0.0045)
      );
    };

    const onUp = (e: PointerEvent) => {
      if (drag.current.id === e.pointerId) drag.current.id = null;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [gl, controls]);

  return null;
}

function FitCanvas() {
  const { setSize, gl } = useThree();
  useEffect(() => {
    const fit = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setSize(w, h, false);
      gl.setSize(w, h, false);
      gl.domElement.style.width = "100%";
      gl.domElement.style.height = "100%";
      gl.domElement.style.display = "block";
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
      <fog attach="fog" args={["#05050c", 7, 24]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[6, length * 0.3, 8]} color="#ff94bb" intensity={18} distance={28} />
      <pointLight position={[-6, length * 0.6, 8]} color="#94e4ff" intensity={18} distance={28} />
      <Sparkles
        count={120}
        scale={[16, Math.max(length + 8, 16), 16]}
        size={4}
        speed={0.28}
        opacity={0.85}
        color="#94e4ff"
      />
    </>
  );
}

export default function GalleryCanvas({
  pieces,
  controls,
  onPick,
  onReady,
}: {
  pieces: Piece[];
  controls: React.MutableRefObject<Controls>;
  onPick: (piece: Piece) => void;
  onReady?: () => void;
}) {
  const length = Math.max((pieces.length - 1) * SPACING, SPACING);
  const items = useMemo(() => pieces, [pieces]);

  return (
    <Canvas
      style={{ width: "100%", height: "100%", display: "block" }}
      dpr={[1, 1.5]}
      resize={{ debounce: 0 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      onCreated={({ gl, setSize }) => {
        gl.setClearColor("#05050c", 1);
        const w = window.innerWidth;
        const h = window.innerHeight;
        setSize(w, h, false);
        gl.setSize(w, h, false);
        gl.domElement.id = "portfolio-gl";
        gl.domElement.style.width = "100%";
        gl.domElement.style.height = "100%";
        gl.domElement.style.display = "block";
        onReady?.();
      }}
      camera={{ position: [0, 0.2, 6.4], fov: 42, near: 0.1, far: 80 }}
    >
      <FitCanvas />
      <Field length={length} />
      <Interaction controls={controls} />
      <Rig controls={controls} length={length} />
      {items.map((piece, i) => (
        <PieceCard
          key={piece.file}
          piece={piece}
          index={i}
          controls={controls}
          onPick={onPick}
        />
      ))}
    </Canvas>
  );
}

export { SPACING };
