export type Category = "sites" | "interfaces" | "marks";

export type Piece = {
  id: string;
  file: string;
  src: string;
  title: string;
  category: Category;
  href?: string;
  aspect: number;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "marks", label: "Marks" },
  { id: "sites", label: "Sites" },
  { id: "interfaces", label: "Interfaces" },
];

const FILES = [
  "art-barbquewagon.png",
  "art-delaterre.png",
  "art-bestwnc-icon-alive.mp4",
  "art-bestwnc-logo-alive.mp4",
  "art-hurley-shield-alive.mp4",
  "art-hustle-launch-script.webp",
  "art-hustle-launch-star-alive.mp4",
  "art-kings-lion-alive.mp4",
  "art-monarch-logo-alive.mp4",
  "art-omadesign.png",
  "art-wicked-fresh-truck-alive.mp4",
  "art-wicked-fresh-sign-alive.mp4",
  "art-mountain-heritage-alive.mp4",
  "art-lilly-linen-alive.mp4",
  "art-m-splash-alive.mp4",
  "art-everything-monetized-alive.mp4",
  "ui-book-slots-alive.mp4",
  "ui-naarchy-home-alive.mp4",
  "ui-naarchy-clipboard-alive.mp4",
  "web-appestatesales.mp4",
  "web-bestjeepdecals.mp4",
  "web-bestwnc.mp4",
  "web-delaterrestore.mp4",
  "web-djsidethree.mp4",
  "web-getatme.mp4",
  "web-glass-design-system.mp4",
  "web-hurleyus.mp4",
  "web-hustlelaunch-showreel.mp4",
  "web-hustlelaunch-tvads.mp4",
  "web-hustlelaunch.mp4",
  "web-kingsroofing.mp4",
  "web-macksbbqshack.mp4",
  "web-michaelchurley.mp4",
  "web-modern-design-playground.mp4",
  "web-monarch.mp4",
  "web-santabox.mp4",
  "web-thenationalnc.mp4",
  "web-twelveux.mp4",
  "web-uncap.mp4",
  "web-jennings.mp4",
  "webstill-Go-Metal-alive.mp4",
  "webstill-Realay-alive.mp4",
  "webstill-Sales-Promis-alive.mp4",
] as const;

const LIVE: Record<string, string> = {
  "web-appestatesales": "https://www.appestatesales.com",
  "web-bestjeepdecals": "https://www.bestjeepdecals.com",
  "web-bestwnc": "https://www.bestwnc.com",
  "web-delaterrestore": "https://www.delaterrestore.com",
  "web-djsidethree": "https://www.djsidethree.com",
  "web-getatme": "https://getat.me",
  "web-glass-design-system": "https://glass-design-system.vercel.app",
  "web-hurleyus": "https://www.hurleyus.com",
  "web-hustlelaunch": "https://www.hustlelaunch.com",
  "web-hustlelaunch-showreel": "https://www.hustlelaunch.com",
  "web-hustlelaunch-tvads": "https://www.hustlelaunch.com",
  "web-kingsroofing": "https://kingsroofingnc.com",
  "web-macksbbqshack": "https://www.macksbbqshack.com",
  "web-michaelchurley": "https://www.michaelchurley.com",
  "web-modern-design-playground": "https://mdp-seven.vercel.app",
  "web-monarch": "https://www.monarchmountainfoundations.com",
  "web-santabox": "https://www.santabox.org",
  "web-thenationalnc": "https://www.thenationalnc.com",
  "web-twelveux": "https://twelveux.vercel.app",
  "web-uncap": "https://uncap.us",
  "web-jennings": "https://www.jenningscustomhomes.com",
  "art-hustle-launch-script": "https://www.hustlelaunch.com",
  "art-hustle-launch-star-alive": "https://www.hustlelaunch.com",
  "art-hurley-shield-alive": "https://www.hurleyus.com",
  "art-omadesign": "https://www.michaelchurley.com/omadesign",
  "art-barbquewagon": "https://www.barbquewagon.com",
  "art-delaterre": "https://www.delaterrestore.com",
  "art-kings-lion-alive": "https://kingsroofingnc.com",
  "art-bestwnc-logo-alive": "https://www.bestwnc.com",
  "art-monarch-logo-alive": "https://www.monarchmountainfoundations.com",
};

const TITLES: Record<string, string> = {
  "art-barbquewagon": "Bar-B-Que Wagon",
  "art-delaterre": "de la Terre",
  "art-bestwnc-icon-alive": "Best of WNC Icon",
  "art-bestwnc-logo-alive": "Best of WNC Logo",
  "art-hurley-shield-alive": "Hurley US",
  "art-hustle-launch-script": "Hustle Launch",
  "art-hustle-launch-star-alive": "Hustle Launch Star",
  "art-kings-lion-alive": "Kings Lion",
  "art-monarch-logo-alive": "Monarch Logo",
  "art-omadesign": "omadesign",
  "art-wicked-fresh-truck-alive": "Wicked Fresh Truck",
  "art-wicked-fresh-sign-alive": "Wicked Fresh Sign",
  "art-mountain-heritage-alive": "Mountain Heritage Builders",
  "art-lilly-linen-alive": "Lilly & Linen",
  "art-m-splash-alive": "M Splash",
  "art-everything-monetized-alive": "Everything Monetized",
  "ui-book-slots-alive": "Book Slots",
  "ui-naarchy-home-alive": "Naarchy Home",
  "ui-naarchy-clipboard-alive": "Naarchy Clipboard",
  "web-appestatesales": "Appalachian Estate Sales",
  "web-bestjeepdecals": "Best Jeep Decals",
  "web-bestwnc": "Best of WNC",
  "web-delaterrestore": "de la Terre",
  "web-djsidethree": "DJ Side Three",
  "web-getatme": "Get At Me",
  "web-glass-design-system": "Glass Design System",
  "web-hurleyus": "Hurley US",
  "web-hustlelaunch": "Hustle Launch",
  "web-hustlelaunch-showreel": "Hustle Launch Showreel",
  "web-hustlelaunch-tvads": "Hustle Launch TV Ads",
  "web-kingsroofing": "Kings Roofing",
  "web-macksbbqshack": "Mack's BBQ Shack",
  "web-michaelchurley": "michaelchurley.com",
  "web-modern-design-playground": "Modern Design Playground",
  "web-monarch": "Monarch Mountain Foundations",
  "web-santabox": "SantaBox",
  "web-thenationalnc": "The National NC",
  "web-twelveux": "Twelve UX",
  "web-uncap": "Uncap",
  "webstill-Go-Metal-alive": "Go Metal",
  "web-jennings": "Jennings Custom Homes",
  "webstill-Realay-alive": "Realay",
  "webstill-Sales-Promis-alive": "SalesPromis",
};

export function parseKind(value: string | undefined): Category | "all" {
  if (value === "sites" || value === "interfaces" || value === "marks") return value;
  return "all";
}

function categoryFor(id: string): Category {
  if (id.startsWith("art-")) return "marks";
  if (id.startsWith("ui-")) return "interfaces";
  return "sites";
}

function aspectFor(id: string) {
  if (id.includes("-app-")) return 9 / 16;
  if (
    id.includes("script") ||
    id.includes("wordmark") ||
    id.includes("truck") ||
    id.includes("sign") ||
    id.includes("monetized") ||
    id.startsWith("ui-")
  ) {
    return 16 / 9;
  }
  if (id.startsWith("art-")) return 1;
  return 16 / 9;
}

function fromFile(file: string): Piece {
  const id = file.replace(/\.[^.]+$/, "");
  return {
    id,
    file,
    src: `/work/${file}`,
    title: TITLES[id] ?? id,
    category: categoryFor(id),
    href: LIVE[id],
    aspect: aspectFor(id),
  };
}

export function listPieces(): Piece[] {
  return FILES.map(fromFile);
}
