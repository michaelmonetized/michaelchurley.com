export type StaticPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  publishedAt: number;
  readingTime: number;
};

const NAARCHY_COVER =
  "https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/panel-home.jpg";

const NAARCHY_CONTENT = `# I put a Dynamic Island on Linux

Droppy is Mac-only. NotchNook is Mac-only. My 16" M1 Pro is running Omarchy. The camera hole was sitting there doing nothing.

So I built **[Naarchy](https://github.com/michaelmonetized/naarchy)**. Native GTK4. Hyprland layer-shell. MIT. Not Electron.

The idle island is **370×67** because that is the hole, measured on 3456×2234 at scale 1. When a timer is running it hangs **72px** with ears so the countdown sits on the glass, not in the webcam.

![Timer wrapping the camera](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/strip-timer-live.jpg)

## The island is the product

Hover the top edge. A black glass card grows out of the notch. Timer on the left, media on the right, a dock underneath. Clicks only land on the capsule and the dock. Everything else at the top of the screen stays yours. That is \`set_input_region\`, not a slogan.

![Home](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/panel-home.jpg)

The timer is a ruler. Scrub it. Let go. It starts. Click to pause. Click again to resume. When it hits zero the whole display strobes and an alarm loops until you click the flash, hit a key, or dismiss. The first version of that fire check was \`remaining == 0 && running()\`. \`running()\` requires remaining > 0. Dead code. It fires now.

## Drop a file anywhere on it

GTK4 file managers send \`GdkFileList\`, not a \`text/uri-list\` string. We were listening for the string. Drops felt like they only worked on Inbox because that's the only tab that *looked* like a drop zone.

Every tab accepts files now. Hold a file over the island and a dotted **Drop to Inbox** overlay fades in. Release and it jumps you to Inbox with a thumbnail grid.

![Inbox](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/panel-inbox.jpg)

Collapsed, you get a stacked pile of the latest thumbs and a count. Timer still wins if one is running.

![Collapsed file pile](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/strip-files.jpg)

## The rest

Clipboard history with search and pin. Calendar with ICS feeds, Meet/Zoom join, and "leave at 9:23." Volume and brightness HUDs. Omarchy theme follow.

No telemetry. Socket is \`$XDG_RUNTIME_DIR/naarchy.sock\`, mode 600.

## Install

\`\`\`bash
sudo pacman -S --needed gtk4 gtk4-layer-shell rust
git clone https://github.com/michaelmonetized/naarchy
cd naarchy
cargo install --path . --locked
systemctl --user enable --now naarchy.service
\`\`\`

Source, screenshots, and a 10-second recording: **[github.com/michaelmonetized/naarchy](https://github.com/michaelmonetized/naarchy)**.

If you are still staring at a dead strip of pixels above your display, you already know what to do.

— Michael C. Hurley`;

export const staticPosts: StaticPost[] = [
  {
    _id: "static:naarchy-linux-dynamic-island",
    title: "Naarchy: a Dynamic Island for Linux that owns the notch",
    slug: "naarchy-linux-dynamic-island",
    excerpt:
      "I built a native GTK4 Dynamic Island for Omarchy and Hyprland. It fills the 16\" M1 Pro camera hole, grows ears for a live timer, and takes over the screen when the countdown hits zero.",
    content: NAARCHY_CONTENT,
    coverImage: NAARCHY_COVER,
    tags: ["naarchy", "linux", "omarchy", "hyprland", "open-source"],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-03T00:00:00Z"),
    readingTime: 3,
  },
];

export function getStaticPosts(tag?: string) {
  const posts = staticPosts.filter((p) => p.published);
  if (!tag) return posts;
  return posts.filter((p) => p.tags.includes(tag));
}

export function getStaticPostBySlug(slug: string) {
  return staticPosts.find((p) => p.slug === slug && p.published) ?? null;
}

export function getStaticTags() {
  return Array.from(new Set(staticPosts.flatMap((p) => p.tags))).sort();
}
