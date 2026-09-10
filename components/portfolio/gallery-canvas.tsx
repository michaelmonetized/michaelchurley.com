"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
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
  length,
  onPick,
}: {
  piece: Piece;
  index: number;
  controls: React.MutableRefObject<Controls>;
  length: number;
  onPick: (piece: Piece) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const [load, setLoad] = useState(false);
  const armed = useRef(false);
  const width = piece.aspect >= 1 ? 1.72 : 1.72 * piece.aspect;
  const height = piece.aspect >= 1 ? 1.72 / piece.aspect : 1.72;
  const angle = index * 0.82;
  const radius = 3.55 + (index % 5) * 0.28;
  const baseY = index * SPACING;

  useFrame((state, delta) => {
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
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 6, delta));
    if (!armed.current && dist < 7) {
      armed.current = true;
      setLoad(true);
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

  useEffect(() => {
    const el = gl.domElement;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, left: e.deltaX });
    };

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / Math.max(window.innerWidth, 1) * 2 - 1;
      const ny = e.clientY / Math.max(window.innerHeight, 1) * 2 - 1;
      controls.current.yaw = nx * 0.85;
      controls.current.pitch = Math.max(-0.75, Math.min(0.75, ny * 0.5));
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointermove", onMove);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointermove", onMove);
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
      setSize(w, h);
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
      <ambientLight intensity={0.55} />
      <pointLight position={[5, length * 0.4, 8]} color="#cdd6f4" intensity={10} distance={28} />
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
        setSize(w, h);
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
          length={length}
          onPick={onPick}
        />
      ))}
    </Canvas>
  );
}

export { SPACING };
