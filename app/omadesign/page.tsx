import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "omadesign — your Linux, for making things",
  description: "Native Linux studio for design, paint, and photograph. No Electron. Type you can type into. Theme from ~/.config. Now v0.0.0.0alpha-rc with shape & asset browsers.",
  alternates: { canonical: "https://www.michaelchurley.com/omadesign" },
  openGraph: {
    title: "omadesign — your Linux, for making things",
    description: "Native Linux studio. Design, paint, photograph. 7 stacked PRs → master, glibc 2.35, no GitHub Actions.",
    url: "https://www.michaelchurley.com/omadesign",
    siteName: "Michael C. Hurley",
    images: [{ url: "https://michaelmonetized.github.io/omadesign/media/design.jpg", width: 1600, height: 900, alt: "omadesign design" }],
    type: "website",
  },
};

export default function OmadesignPage() {
  return (
    <div className="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
      {/* Minimal header for omadesign lander, keeps main site chrome out of the way */}
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between text-sm">
        <a href="https://github.com/michaelmonetized/omadesign" className="font-semibold tracking-tight text-[#cdd6f4] hover:text-white">
          omadesign
        </a>
        <div className="flex items-center gap-4 text-[#a6adc8]">
          <a href="https://github.com/michaelmonetized/omadesign/releases/tag/v0.0.0.0alpha-rc" className="hover:text-white">v0.0.0.0alpha-rc</a>
          <a href="https://michaelmonetized.github.io/omadesign/" className="hover:text-white">GitHub Pages →</a>
          <a href="/" className="hover:text-white">michaelchurley.com</a>
        </div>
      </div>

      {/* Full-bleed iframe of the single-HTML lander (served from GitHub Pages, no build step) */}
      <div className="mx-auto max-w-[1600px] px-2 md:px-6 pb-8">
        <div className="overflow-hidden rounded-3xl border border-[#313244] bg-[#181825] shadow-2xl" style={{ height: "calc(100vh - 80px)", minHeight: "720px" }}>
          <iframe
            src="https://michaelmonetized.github.io/omadesign/"
            title="omadesign lander"
            className="h-full w-full border-0"
            loading="lazy"
            allow="clipboard-read; clipboard-write"
          />
        </div>
        <p className="mt-3 text-center text-xs text-[#7f849c]">
          Single-file lander distilled to <code className="rounded bg-[#313244] px-1 py-0.5 font-mono text-xs">index.html</code> with Tailwind CDN + Catppuccin palette. Also at{" "}
          <a href="https://michaelmonetized.github.io/omadesign/" className="underline hover:text-white">
            michaelmonetized.github.io/omadesign
          </a>{" "}
          and the Vercel site build (<code className="rounded bg-[#313244] px-1 py-0.5 font-mono text-xs">site/dist/index.html</code>).
        </p>
      </div>
    </div>
  );
}
