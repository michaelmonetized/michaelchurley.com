"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Piece } from "@/lib/portfolio/pieces";
import type { Controls } from "./gallery-canvas";

const GalleryCanvas = dynamic(() => import("./gallery-canvas"), {
  ssr: false,
});

function posterFor(piece: Piece) {
  if (piece.kind !== "video") return undefined;
  return piece.src.replace(/\.(mp4|webm|mov)$/i, ".jpg");
}

function Media({
  piece,
  className,
  eager = false,
}: {
  piece: Piece;
  className?: string;
  eager?: boolean;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(eager);

  useEffect(() => {
    if (eager || load) return;
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setLoad(true);
        io.disconnect();
      },
      { rootMargin: "240px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, load]);

  const poster = posterFor(piece);

  return (
    <div
      ref={host}
      className={`relative w-full overflow-hidden bg-[#12121a] ${className ?? ""}`}
      style={{ aspectRatio: String(piece.aspect) }}
    >
      {load && piece.kind === "video" ? (
        <video
          src={piece.src}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="none"
        />
      ) : load ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={piece.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
  );
}

export default function Gallery({ pieces }: { pieces: Piece[] }) {
  const controls = useRef<Controls>({
    progress: 0,
    yaw: 0,
    pitch: 0,
    roll: 0,
    focus: 0,
  });
  const [picked, setPicked] = useState<Piece | null>(null);
  const [gyroOn, setGyroOn] = useState(false);
  const [webgl, setWebgl] = useState(false);
  const [wantWebgl, setWantWebgl] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let later = 0;
    const paint = requestAnimationFrame(() => {
      later = window.setTimeout(() => setWantWebgl(true), 80);
    });
    return () => {
      cancelAnimationFrame(paint);
      window.clearTimeout(later);
    };
  }, []);

  const onScroll = useCallback(() => {
    const el = document.scrollingElement;
    if (!el) return;
    const max = Math.max(el.scrollHeight - el.clientHeight, 1);
    controls.current.progress = Math.min(1, Math.max(0, el.scrollTop / max));
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const enableGyro = async () => {
    try {
      const Doe = DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<string>;
      };
      if (typeof Doe.requestPermission === "function") {
        const perm = await Doe.requestPermission();
        if (perm !== "granted") return;
      }
      window.addEventListener("deviceorientation", (ev) => {
        const beta = ev.beta ?? 0;
        const gamma = ev.gamma ?? 0;
        controls.current.pitch = Math.max(
          -0.7,
          Math.min(0.7, (beta - 50) * 0.012)
        );
        controls.current.roll = Math.max(-0.8, Math.min(0.8, gamma * 0.012));
        controls.current.yaw += gamma * 0.00035;
      });
      setGyroOn(true);
    } catch {
      /* permission denied */
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPicked(null);
      if (e.key === "ArrowRight") controls.current.yaw += 0.12;
      if (e.key === "ArrowLeft") controls.current.yaw -= 0.12;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (pieces.length === 0) {
    return (
      <div className="portfolio-gallery flex min-h-[70dvh] items-center justify-center bg-[#05050c] text-sm text-white/60">
        The gallery is being hung.
      </div>
    );
  }

  const trackHeight = Math.max(pieces.length * 88, 220);

  return (
    <div className="portfolio-gallery relative bg-[#05050c] text-white">
      <div
        className={
          webgl
            ? "pointer-events-none columns-1 gap-4 p-4 opacity-0 sm:columns-2 lg:columns-3"
            : "relative z-10 columns-1 gap-4 p-4 pt-24 sm:columns-2 lg:columns-3"
        }
      >
        {pieces.map((p, i) => (
          <button
            key={p.file}
            type="button"
            onClick={() => setPicked(p)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-md border border-white/10 bg-black/40"
            style={{
              transform: webgl ? undefined : `rotate(${((i % 5) - 2) * 0.6}deg)`,
            }}
          >
            <Media piece={p} />
          </button>
        ))}
      </div>

      {wantWebgl && (
        <div
          className="bg-[#05050c]"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: webgl ? 0 : -1,
            width: "100vw",
            height: "100dvh",
          }}
        >
          <GalleryCanvas
            pieces={pieces}
            controls={controls}
            onPick={setPicked}
            onReady={() => setWebgl(true)}
          />
        </div>
      )}

      {webgl && (
        <div
          aria-hidden
          className="pointer-events-none"
          style={{ height: `${trackHeight}vh` }}
        />
      )}

      <div className="pointer-events-none fixed inset-x-0 bottom-3 z-20 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/50">
        <span>{webgl ? "scroll" : "look"}</span>
        <span>{webgl ? "move" : ""}</span>
        <span>{webgl ? "tilt" : ""}</span>
      </div>

      {wantWebgl && !gyroOn && (
        <button
          type="button"
          onClick={enableGyro}
          className="fixed bottom-10 right-4 z-30 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-md md:hidden"
        >
          Enable tilt
        </button>
      )}

      {picked && (
        <button
          type="button"
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPicked(null)}
          aria-label="Close piece"
        >
          <div
            className="relative max-h-[88dvh] max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Media
              piece={picked}
              eager
              className="max-h-[88dvh] max-w-[92vw] rounded-lg shadow-2xl"
            />
            {picked.href && (
              <a
                href={picked.href}
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-10 left-0 text-xs text-cyan-100 underline-offset-4 hover:underline"
              >
                {picked.href.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        </button>
      )}
    </div>
  );
}
