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


const OMADESIGN_COVER =
  "/blog/omadesign-native-linux-studio-13-days/cover.png";

const OMADESIGN_CONTENT = `![omadesign welcome screen — Make something, 52 templates, New document presets](https://raw.githubusercontent.com/michaelmonetized/omadesign/master/media/design.jpg)

## Who

I design on Linux now. Omarchy. Asahi. The camera hole has Naarchy. The creative suite did not make the move.

Adobe stayed on the other OS. Affinity is partial. Browser tools are tabs that die when the laptop sleeps. Electron "studios" burn RAM and still feel like a website with a window chrome.

omadesign is for the operator who already lives in a themed Linux desktop and refuses to open four apps to finish one mark. Designers leaving macOS. Photographers who want LibRaw without leaving the seat. Brand freelancers who carry palettes and type roles as files, not screenshots in Slack.

If you build MarTech, ship local tools, or just want \`cargo\` and a tarball instead of a Creative Cloud invoice — that is the room.

## What

I built a native Rust studio. \`eframe\` / egui. Not GTK. Not Electron.

Four personas share one document and one layer stack: **Design** (vector), **Pixel** (paint/retouch), **Photo** (RAW develop), **Motion** (timeline → animated SVG / Lottie). Geometry is defined once. Drawn for the live canvas and for PNG/SVG export. Mutations go through \`Cmd\` + \`History\`.

![Design persona — Block Party poster, rotated color block at 19°, Inspect panel](https://michaelmonetized.github.io/omadesign/media/showcase/design.webp)

Current version is **0.0.4-alpha** — "The handles got the memo." aarch64 and x86_64 \`*-unknown-linux-gnu\` tarballs on GitHub Releases. Linked against **glibc 2.35**. Phosphor Light icons. Omarchy theme colors and \`fontconfig\` / \`omarchy font current\`. Max as the default face.

Fifty-two editable vector templates. Brand kits travel as \`.omacolors\`, \`.omatype\`, \`.omabrand/\`. Photo side: LibRaw for DNG/CR2/CR3/NEF/ARW/RAF, 16-bit linear source, \`.omaphoto\` sidecars, \`.omapreset\` looks, folder batch. Motion: thirteen presets, Lottie JSON with unsupported-feature reporting.

Interop is boring on purpose — PSD/PSB, PDF, AI-compatible PDF, OpenRaster, SVG/SVGZ, optional Affinity bridge, native \`.oma\`. CLI \`--inspect\` / \`--convert\`. MIT. Copyright 2026 Michael C Hurley.

![Photo persona — Coast at golden hour, Develop Color panel, Place in Design](https://michaelmonetized.github.io/omadesign/media/showcase/photo.webp)

## Where

It runs where I run: Asahi Omarchy, Arch-class ARM, anything glibc 2.35 or newer. Same binary story on x86_64 via zig cross-compile — local release builds, uploaded by hand. No GitHub Actions bill.

Repo: [michaelmonetized/omadesign](https://github.com/michaelmonetized/omadesign). Studio site on Pages: [michaelmonetized.github.io/omadesign](https://michaelmonetized.github.io/omadesign/). Manual under \`/docs/manual/\`.

![Repo layout — assets, docs, examples, media, remotion, scripts](https://raw.githubusercontent.com/michaelmonetized/omadesign/master/media/mark.png)

On this machine the binary is \`~/.local/bin/omadesign\` → \`omadesign 0.0.4-alpha\`. Install one-liner lives in \`scripts/install-remote.sh\`. The audience sits next to the Omarchy / Asahi tribe and the indie builders who already read Cargo.toml before they read the landing page.

![Motion persona — After Hours listening room, timeline keyframes, Make it move presets](https://michaelmonetized.github.io/omadesign/media/showcase/motion.webp)

## When

**2026-08-26.** Spike as "Atelier v0.1" — Rust + egui all-in-one. Prove the canvas before naming the product.

**2026-08-28.** Rename to omadesign. glibc 2.35 link. Canvas handles, pen, live type, zoom-to-box. Phosphor + desktop theme. First lander and docs.

**2026-08-29.** fontconfig enumeration, Google Fonts on demand, Max default. Palettes. Compound paths. Shape and asset browsers. Zig cross-compile for x86_64. Remotion hero. GPU texture reuse. First alpha-rc tags.

**2026-09-02–03.** Motion timeline, Lottie, welcome that fits. QA pass on the early user-test list.

**2026-09-05.** Precision guides, masks, healing. Fifty-two templates. Shortcut HUD. Portable brand libraries. Pen/type/logo film. Website rebuild — Catppuccin, studio tour, real recordings.

**2026-09-06.** v0.0.1-alpha packages verified. Layered interop. Camera RAW. v0.0.2-alpha same day.

**2026-09-07.** Selection and layer QA. Photo batch + presets → v0.0.3-alpha. Rotated node editing and context-menu flips → v0.0.4-alpha.

**2026-09-08.** Sixty-eight commits from init. Four tagged alphas. Same-day docs experiment: a scoped First-File Setup offer went up and came back down; CHANGELOG keeps the record, app and license never changed.

Thirteen days. That is the clock.

![omadesign mark — geometric design wordmark](https://raw.githubusercontent.com/michaelmonetized/omadesign/master/media/mark.png)

## Why

Linux got my daily driver. The design suite did not. That gap is the whole reason.

I wanted one seat: vector precision, paint, RAW, light motion — without renting four subscriptions or babysitting an Electron process. I wanted the chrome to follow *my* desktop colors and fonts, not a baked orange skin. I wanted releases I can rebuild on the machine that ships them.

So I linked glibc 2.35, zig-cross-compiled x86_64, uploaded tarballs with SHA-256, and kept shipping alphas until the handles behaved on rotated nodes. Operator stack. Own the toolchain. Build in public.

omadesign is still alpha — advanced text layout, symbols, collab, PDF/X + CMYK are on the roadmap, not in the tarball. Affinity write is not there. RAW varies by camera. That is fine. The document model works. The personas share a layer stack. The downloads exist for ARM64 and x86_64 today.

If you moved to Linux and your creative suite stayed behind, you already know the hole I was staring at.

What would you put in the first \`.oma\` file if you sat down on a fresh Omarchy box tonight?
`;

const NAARCHY_04_COVER =
  "/blog/naarchy-0-4-preferences-privacy/cover.png";

const NAARCHY_04_CONTENT = `After the [Sep 3 island post](https://www.michaelchurley.com/blog/naarchy-linux-dynamic-island), I hardened Naarchy locally to **0.4.0** — native Preferences, \`naarchy doctor\`, atomic stores, travel opt-in, IPC cleanup. Validated on three machines. **Not pushed / not tagged yet.** GitHub tip remains **v0.3.3**.

![Naarchy 0.4 Home — Focus Timer and Now Playing, gear for Preferences](/blog/naarchy-0-4-preferences-privacy/screenshots/home.png)

## Who

This one is for people already living in the island — Omarchy / Hyprland operators who installed Naarchy after the Sep 3 post and started trusting it with clipboard history, file drops, and calendar feeds.

If you care whether state files are written atomically, whether the socket is mode 0600, whether travel estimates ask before they phone Nominatim, and whether \`doctor\` can tell you the session is sane without opening a GUI — you are the audience.

Builders who ship local-first GTK tools. Multi-machine QA types who refuse to call a release “done” until it runs on more than the laptop that authored it.

Not for anyone still deciding whether Linux needs a notch overlay. That story is already live. This post assumes you know what Naarchy is.

## What

Local tip is **0.4.0**. GitHub tip is still **v0.3.3**. Say that out loud before anything else.

0.4 is the overhaul I validated on September 5 and have been running since — Preferences window, reduced motion, \`naarchy --version\`, read-only \`naarchy doctor\`, stricter CLI rejection, atomic clipboard/Inbox/Home state, feature-gated services, travel estimates behind an explicit opt-in, IPC/CLI cleanup, CI that drafts releases with checksums. Roughly fifty-one files, +4937/−4096 against \`origin/main\` @ \`ef9cf87\`. Uncommitted. Unpushed. No \`v0.4.0\` tag.

![Clipboard 0.4 — newest-first history, pin, Clear history, gear for Preferences](/blog/naarchy-0-4-preferences-privacy/screenshots/clipboard.png)

Concrete deltas that matter day-to-day:

- **Native Preferences.** Gear opens a bounded floating window for appearance, motion, behavior, and feature controls. Advanced bits stay in \`~/.config/naarchy/config.toml\`. Appearance reloads live; feature flags and calendar feeds still want a restart.
- **\`naarchy doctor\`.** Read-only desktop check — Wayland, Hyprland, session bus, daemon, config, timer sound, volume/brightness HUD detection. On this box it prints nine OKs and points at the config path.
- **IPC honesty.** Second process talks JSON over \`$XDG_RUNTIME_DIR/naarchy.sock\` (mode 0600), waits for a bounded ack that the command entered the queue — not that the UI finished. Single-instance lock. Malformed durations exit 2.
- **Privacy pass.** No telemetry (unchanged). Clipboard + shelf stay owner-only on disk; history is still **not encrypted** while capture is on — disabling Clipboard stops the watcher. Travel estimates (Nominatim / IPinfo|ipapi / OSRM) require opt-in. Clear Inbox does not delete originals. Duplicate drops rejected. Corrupt JSON gets a backup instead of a silent wipe.
- **Atomic stores.** Clipboard, Inbox, and Home preferences write privately and atomically. Failed write keeps previous state.
- **Perf sample (directional, 8s):** collapsed CPU 0.125% → below sample; expanded 0.625% → 0.375%; RSS roughly flat (~82→84 MiB collapsed, ~102→101 MiB expanded) vs installed 0.3.3.
- **86 Rust tests.** fmt, Clippy \`-D warnings\`, debug + opt builds, smoke. Fixed a GTK 4.22.4 crash disposing a never-realized hidden window during monitor hotplug / prefs rebuild.

Battery widget is already gone as of 0.3.3 — bar shows %, \`hud battery\` remains. 0.4 does not bring it back.

![Inbox 0.4](/blog/naarchy-0-4-preferences-privacy/screenshots/inbox.png)

![Widgets 0.4](/blog/naarchy-0-4-preferences-privacy/screenshots/widgets.png)

![Calendar 0.4](/blog/naarchy-0-4-preferences-privacy/screenshots/calendar.png)

## Where

Same seat: Asahi Omarchy / Hyprland on the 16" M1 Pro (\`m1pro16\`), plus QA on \`hpeliteclient\` and \`intelpro\`. Local binary: \`naarchy 0.4.0\` via \`~/.cargo/bin\`. Local aarch64 dist archive exists under \`target/release/dist/\` with SHA256SUMS; that archive wants **glibc 2.39+**. Public GitHub Releases are still the 0.3.3 tarballs until push + remote CI succeed.

Repo: [michaelmonetized/naarchy](https://github.com/michaelmonetized/naarchy). Origin story (Sep 3): [Naarchy: a Dynamic Island for Linux that owns the notch](https://www.michaelchurley.com/blog/naarchy-linux-dynamic-island).

\`doctor\` on the machine that wrote this draft:

\`\`\`
Naarchy 0.4.0 · desktop check

OK    Wayland session
OK    Hyprland integration
OK    Session bus
OK    Daemon
OK    Configuration
OK    File opening
OK    Timer sound
OK    Volume HUD detection
OK    Brightness HUD detection
\`\`\`

## When

**2026-09-03.** Shipped 0.3.0–0.3.3 and published the island post. GitHub tip froze at \`ef9cf87\` / tag \`v0.3.3\`.

**2026-09-05 (local).** 0.4.0 overhaul + \`docs/VALIDATION.md\`. Native prefs, doctor, atomic state, travel opt-in, IPC/CLI refactor. Desktop checks: calendar nav, 48h timer, prefs rebuild, 3× monitor hotplug, fullscreen hide/restore, notification queue. Three-machine QA: m1pro16, hpeliteclient, intelpro.

**2026-09-08.** Still running 0.4.0 locally. Still dirty vs \`origin/main\`. Still no public release. This EXTEND draft is the trail for when that push lands — or for saying “RC on my boxes” if the story publishes first.

## Why

The Sep 3 post proved the island. 0.4 is about trusting it with operator data.

I did not want Preferences buried in a TOML file only. I did not want a second process that could hang forever waiting for UI. I did not want travel estimates quietly enriching a calendar event. I did not want a crash when a hidden GTK window got disposed during hotplug. I wanted \`doctor\` to answer “is this session actually wired?” without expanding the panel.

So I hardened the stores, gated the network, measured CPU against 0.3.3, ran eighty-six tests, and installed the same binary on three machines before calling the overhaul validated. Release gates that remain: push, remote GHA with Rust 1.92 pin, sustained everyday use, physical multi-monitor on the targets that matter.

0.4.0 is real on my desktops. It is not on GitHub until I push it. That gap is the whole reason this post exists as an EXTEND, not a rewrite.

If your island already sits in the camera hole — what should \`naarchy doctor\` check next that it does not check today?`;

export const staticPosts: StaticPost[] = [
  {
    _id: "static:naarchy-0-4-preferences-privacy",
    title: "Naarchy 0.4.0: Preferences, doctor, and the privacy pass",
    slug: "naarchy-0-4-preferences-privacy",
    excerpt:
      "After the Sep 3 island post, I hardened Naarchy locally to 0.4.0 — native Preferences, naarchy doctor, atomic stores, travel opt-in, IPC cleanup. Validated on three machines. Not pushed yet.",
    content: NAARCHY_04_CONTENT,
    coverImage: NAARCHY_04_COVER,
    tags: [
      "naarchy",
      "linux",
      "hyprland",
      "omarchy",
      "gtk4",
      "rust",
      "privacy",
      "preferences",
      "clipboard",
      "open-source",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T12:00:00Z"),
    readingTime: 5,
  },
  {
    _id: "static:omadesign-native-linux-studio-13-days",
    title: "omadesign: I shipped a native Linux design suite in 13 days",
    slug: "omadesign-native-linux-studio-13-days",
    excerpt:
      "I built omadesign in Rust + egui — vector, paint, RAW, and motion in one document. glibc 2.35. No Electron. Four alphas. MIT.",
    content: OMADESIGN_CONTENT,
    coverImage: OMADESIGN_COVER,
    tags: [
      "omadesign",
      "rust",
      "linux",
      "egui",
      "asahi",
      "omarchy",
      "design",
      "photography",
      "motion",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T00:00:00Z"),
    readingTime: 4,
  },
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
