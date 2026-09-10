import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export type PieceKind = "video" | "image";

export type Piece = {
  id: string;
  file: string;
  src: string;
  kind: PieceKind;
  aspect: number;
  href?: string;
};

const VIDEO_EXT = new Set(["mp4", "webm", "mov"]);
const IMAGE_EXT = new Set(["jpg", "jpeg", "png", "webp", "gif", "avif"]);

const LIVE: Record<string, string> = {
  "web-macksbbqshack": "https://www.macksbbqshack.com",
  "web-getatme": "https://getat.me",
  "web-getatme-michaelhurley": "https://getat.me/michaelhurley",
  "web-hustlelaunch": "https://www.hustlelaunch.com",
  "web-hustlelaunch-showreel": "https://www.hustlelaunch.com",
  "web-hustlelaunch-tvads": "https://www.hustlelaunch.com",
  "web-bestwnc": "https://www.bestwnc.com",
  "web-michaelchurley": "https://www.michaelchurley.com",
  "web-glass-design-system": "https://glass-design-system.vercel.app",
  "web-twelveux": "https://twelveux.vercel.app",
  "web-mockup-gallery": "https://mockup-gallery-nu.vercel.app",
  "web-kingsroofing": "https://kingsroofingnc.com",
  "web-hurleyus": "https://www.hurleyus.com",
  "web-djsidethree": "https://www.djsidethree.com",
  "web-jennings": "https://www.jenningscustomhomes.com",
  "web-monarch": "https://www.monarchmountainfoundations.com",
  "web-bestjeepdecals": "https://www.bestjeepdecals.com",
  "web-barbquewagon": "https://www.barbquewagon.com",
  "web-hustlepay": "https://hustlepay.com",
  "web-hustlechat": "https://hustlechat.com",
  "web-hustleforms": "https://hustleforms.com",
  "web-uncap": "https://uncap.us",
  "web-delaterrestore": "https://www.delaterrestore.com",
  "web-appestatesales": "https://www.appestatesales.com",
  "web-waynesville-zaxbys": "https://waynesville.yourzaxbys.com",
  "web-mybathroomconversion": "https://www.mybathroomconversion.com",
  "web-santabox": "https://www.santabox.org",
  "web-thenationalnc": "https://www.thenationalnc.com",
  "web-modern-design-playground": "https://mdp-seven.vercel.app",
  "ui-glass-hero": "https://glass-design-system.vercel.app",
};

function extOf(file: string) {
  return file.split(".").pop()?.toLowerCase() ?? "";
}

function aspectFor(id: string, kind: PieceKind) {
  if (id.includes("app-") || id.includes("-app-")) return 9 / 16;
  if (id.startsWith("art-") && !id.includes("bestwnc-logo") && !id.includes("hustle-launch-wordmark") && !id.includes("hustle-launch-palette")) {
    return 1;
  }
  if (kind === "video") return 16 / 9;
  if (id.startsWith("web") || id.startsWith("ui-glass") || id.startsWith("webstill")) return 16 / 9;
  return 4 / 3;
}

function hrefFor(id: string) {
  if (LIVE[id]) return LIVE[id];
  if (id.startsWith("webstill-")) return undefined;
  return undefined;
}

export function parsePiece(file: string): Piece | null {
  const ext = extOf(file);
  const kind: PieceKind | null = VIDEO_EXT.has(ext)
    ? "video"
    : IMAGE_EXT.has(ext)
      ? "image"
      : null;
  if (!kind) return null;
  const id = file.slice(0, file.length - ext.length - 1);
  return {
    id,
    file,
    src: `/work/${file}`,
    kind,
    aspect: aspectFor(id, kind),
    href: hrefFor(id),
  };
}

export async function listPieces(): Promise<Piece[]> {
  const dir = path.join(process.cwd(), "public/work");
  let files: string[] = [];
  try {
    files = await readdir(dir);
  } catch {
    return [];
  }

  const usable: string[] = [];
  for (const f of files) {
    if (f.startsWith(".")) continue;
    try {
      const s = await stat(path.join(dir, f));
      if (s.size < 20_000) continue;
      usable.push(f);
    } catch {
      /* skip */
    }
  }

  const parsed = usable
    .map(parsePiece)
    .filter((p): p is Piece => p !== null);

  const ids = new Set(parsed.map((p) => p.id));
  const videos = new Set(
    parsed.filter((p) => p.kind === "video").map((p) => p.id)
  );

  // Prefer a living video over its still twin; keep original marks.
  const filtered = parsed.filter((p) => {
    if (p.kind === "image" && videos.has(p.id)) {
      return false;
    }
    if (p.id.startsWith("webstill-")) {
      const slug = p.id.replace(/^webstill-/, "").toLowerCase();
      for (const id of ids) {
        if (id.startsWith("web-") && id.toLowerCase().includes(slug.slice(0, 8))) {
          if (videos.has(id)) return false;
        }
      }
    }
    return true;
  });

  const rank = (p: Piece) => {
    if (p.kind === "video" && p.id.endsWith("-alive")) return 0;
    if (p.kind === "video" && p.id.startsWith("web-")) return 1;
    if (p.id.startsWith("art-") && p.id.endsWith("-alive")) return 2;
    if (p.id.startsWith("art-")) return 3;
    if (p.id.startsWith("ui-")) return 4;
    if (p.kind === "video") return 5;
    return 6;
  };

  return filtered.sort((a, b) => {
    const d = rank(a) - rank(b);
    if (d !== 0) return d;
    return a.id.localeCompare(b.id);
  });
}
