"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Piece } from "@/lib/portfolio/pieces";
import { emptyControls, type Controls } from "./gallery-canvas";

const GalleryCanvas = dynamic(() => import("./gallery-canvas"), {
  ssr: false,
});

function stillSrc(piece: Piece) {
  if (piece.kind === "video") {
    return piece.src.replace(/\.(mp4|webm|mov)$/i, ".jpg");
  }
  return piece.src;
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

  const poster = piece.kind === "video" ? stillSrc(piece) : undefined;

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
  const controls = useRef<Controls>(emptyControls());
  const [picked, setPicked] = useState<Piece | null>(null);
  const pickedAt = useRef(0);
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

  const enableGyro = () => {
    window.dispatchEvent(new Event("portfolio-request-gyro"));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPicked(null);
      if (e.key === "ArrowRight") controls.current.touchYaw -= 0.18;
      if (e.key === "ArrowLeft") controls.current.touchYaw += 0.18;
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
  const still = picked ? stillSrc(picked) : null;

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
            onClick={() => {
              pickedAt.current = Date.now();
              setPicked(p);
            }}
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
            zIndex: webgl ? 10 : -1,
            width: "100vw",
            height: "100dvh",
            touchAction: "none",
          }}
        >
          <GalleryCanvas
            pieces={pieces}
            controls={controls}
            onPick={(piece) => {
              pickedAt.current = Date.now();
              setPicked(piece);
            }}
            onReady={() => setWebgl(true)}
            onGyro={() => setGyroOn(true)}
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
        <span>{webgl ? "swipe" : "look"}</span>
        <span>{webgl ? "turn" : ""}</span>
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

      {picked && still && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black"
          onClick={() => {
            if (Date.now() - pickedAt.current < 500) return;
            setPicked(null);
          }}
          aria-label="Close piece"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={still}
            alt=""
            className="h-full w-full object-contain"
          />
        </button>
      )}
    </div>
  );
}
