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

const GETAT_COVER =
  "/blog/getat-me-relationship-first-link-in-bio/cover.png";

const GETAT_CONTENT = `![GetAt.Me landing — Turn your audience into fans & customers](screenshots/landing.png)

## Who

I kept watching creators and consultants park their whole business behind a vertical stack of blue links.

Linktree-class pages are fine for “here are my URLs.” They are a dead end when someone is ready to book a call, leave a review, ask a question, or pay. That visitor opens five more tabs. Intent cools. The operator never sees the near-miss.

GetAt.Me is for the people who already have attention and need a destination that behaves like a small CRM on a single handle — consultants, service-led shops, solo brands, creators who sell time and trust, not just clicks.

If you build MarTech, ship Clerk + Convex stacks, or just hate bolting Calendly + Typeform + Intercom onto a bio link, you are in the room.

## What

I shipped an interactive landing page at [getat.me](https://getat.me). Claim a handle. Theme it. Drop links. Then unlock the relationship surfaces as you grow.

Stack facts, not pitch deck: **Next.js 16.1.6** (Turbopack) on Vercel, **Convex** for real-time data, **Clerk** for auth and billing (\`has()\` feature gates), Stripe through Clerk Billing, Resend for mail, Sentry + PostHog for the ops trail. Tailwind 4, Radix/shadcn, Phosphor icons. TipTap / markdown editor for posts. \`@dnd-kit\` for link reorder. Package version **0.1.0**. Public repo under HurleyUS.

![Features lander](screenshots/features.png)

Nine themes live in the selector: Mocha, Frappe, Macchiato, Monokai, Tokyo, Tomorrow, One, Rosepine, Dracula. Links reorder by weight. Sections group them. Owners get an analytics dashboard — page views, link clicks, bookings, messages — with PostHog and Convex events that ignore the owner so you do not inflate yourself.

Plans from \`.config/plans.ts\`: Free starter (no card). Premium at $4.99/mo ($3.99 annual). Pro at $9.99 ($7.99). ProMax at $19.99 ($14.99). Pro is where booking, referrals, live chat, and conversion analytics harden. ProMax is payments, custom availability, rich posts with likes/replies/quote reposts/threads, and the verification surfaces.

![Owner profile edit view from the repo](screenshots/profile-edit-view.jpg)

## Where

The product lives on the open web: [getat.me](https://getat.me). Profiles at \`getat.me/{handle}\`. Owner tools under \`/{handle}/dashboard\` and account routes. Marketing shell: features, pricing, FAQ, contact, privacy, terms, plus a small SEO blog cluster comparing link-in-bio options.

Code: [github.com/HurleyUS/getat.me](https://github.com/HurleyUS/getat.me). Topics: \`links\`, \`social\`. Deploy path is Vercel continuous — no GitHub Release tarballs, because this is a hosted SaaS seat, not a desktop binary.

The audience sits next to every creator tool thread that still treats a bio link like a footer.

![Pricing page](screenshots/pricing.png)

## When

**2024-10-27.** Create Next App. Three commits. Then a long quiet.

**2025-10-30.** “forming the profile.” Themes (Tomorrow Night, Mocha/Frappe/Macchiato HSL). Clerk catch-all auth routes. Unlimited links gated through Clerk billing features. Convex provider switched to \`@clerk/nextjs\` so mutations stop lying about “User not found.”

**2025-11.** Ninety-eight commits in one month. Pricing page and PricingTable styling. Centralized plans config. Free / Premium / Pro / ProMax PlanInfo ladder. Features lander. FAQ, contact, footer, privacy, terms. Homepage hero that says the product out loud.

**2026-01-31.** Posts grow a social graph — likes, replies, quote reposts, nested threads for ProMax.

**2026-02.** Analytics dashboard. Click and view tracking for visitors only. Onboarding with live handle availability. Drag-and-drop link reorder. SEO sitemap/robots/manifest. Clerk webhooks for user.updated / user.deleted. Lucide → Phosphor.

**2026-03.** Brand customization with live preview. QR and social share. Link sections. Next.js 16 and the middleware→proxy migration. Demo showcase profiles. SEO blog pages.

**2026-05.** Blacksmith CI gates. Convex/Clerk build fallbacks. Sentry project routing.

**2026-08-08.** \`X-Robots-Tag: index, follow\` on Vercel.

**2026-09-08.** One hundred seventy-seven commits on the clock. PR #43 fixes profile ownership and Clerk billing fulfillment. PR #44 puts Bun on the production build. PR #45 includes the TypeScript packages production installs actually need. HEAD \`0b96e39\`.

That is the journey from empty Next scaffold to a live relationship console with billing that fulfills.

## Why

A bio link that only lists URLs trains your audience to leave. I wanted the stay — book the slot, send the referral, open the chat, leave the rating, pay when the work is ready — without exporting the visitor to a scavenger hunt.

So I put the surfaces on the handle, gated them with Clerk plans, synced them on Convex, and kept shipping until ownership and billing fulfillment stopped being a customer-journey cliff.

It is still 0.1.0. Custom domains and deeper analytics sit on the roadmap. That is fine. The document model for a profile already holds links, bookings, messages, posts, and referrals in one place.

If your current bio link cannot take a booking without opening another product, you already know the hole I was staring at.

What would you put on \`getat.me/yourname\` first — the booking calendar, the live chat, or the three links you actually want people to hit this week?
`;

const OMNUX_COVER =
  "/blog/omnux-linux-apple-silicon-truth-table/cover.png";

const OMNUX_CONTENT = `<!-- Cover: upload og.png or screenshots/truth-table.png to Convex storage; embed storage URLs below after upload. -->

![OMNUX landing — curl install one-liner](screenshots/landing.png)

![OMNUX truth table — M1/M2 shipping, M3 experimental, M4 bring-up, M5/M6 nothing public](screenshots/truth-table.png)

## Who

I run Linux on Macs. Omarchy. Asahi. The camera hole already has Naarchy. The install story for “buy an M3 in the store and walk out on Hyprland” did not.

Upstream Asahi did the science. Caution is correct for a research project. Operators who want Omarchy-class polish still hit a wall of half-truths: installers that whisper “coming soon,” GPU claims without pixels, M4 rows that pretend ADT dumps are optional.

Omnux is for the person who already lives on Apple Silicon or is about to, and who wants the frontier packaged — with a truth table that wins when marketing loses. M1/M2 daily drivers. M3 experimental owners who will share traces. Contributors and agents grinding DCP and AGX against real metal. Builders who read STEERING before the landing page.

If you file issues with receipts and refuse vaporware, that is the room.

## What

I stood up an integration-first umbrella: **omnux**.

Not a mega-fork that absorbs the world. A monorepo that coordinates docs, steering, and component wiring. Kernel work lives in \`linux/\` on an \`omnux\` branch. Boot stack in \`m1n1/\`. Installer in the asahi-installer track. Packages in PKGBUILDs. GPU attempt in \`omnux-gpu\` under MIT — clean-room, hardware-trace driven, and honest that nothing is “working” until DRM render nodes exist on a physical M3.

![omnux monorepo layout — linux, m1n1, installer, pkgs, gpu, docs](screenshots/monorepo.png)

One sentence of north star from GOAL.md: a person walks into an Apple Store, buys an M3 MacBook, and walks out running Omnux — Omarchy’s Hyprland desktop on Asahi’s foundation — with everything working, installed without a single manual step.

That sentence is not true yet. The definition of done is a checklist: install, boot, display, GPU, power, input, connectivity, audio, desktop meta package, recovery stick. M0 Foundation is checked. M1 “M3 installs are boring” is next. GPU acceleration is the moonshot long pole.

Install today from macOS or recoveryOS:

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/michaelmonetized/asahi-installer/omnux/scripts/bootstrap-omnux.sh | sh
\`\`\`

![Install one-liner — curl bootstrap-omnux.sh](screenshots/install-command.png)

M1/M2: daily-drivable, full acceleration on the Asahi baseline. M3: experimental track, \`OMNUX_EXPERIMENTAL\`, software rendering until the GPU and proper DCP land — NVMe, WiFi, Bluetooth, keyboard/trackpad, audio paths already in the working column. M4: bring-up patches ahead of upstream; blocked on physical ADT dumps. M5/M6: nothing public exists; September 22, 2026 customer availability is the earliest realistic dump date for the August 25 lineup.

Sibling tooling: **omnux-report** — one command, offline-capable, consent + redaction, \`.tar.zst\` + SHA256. Validated on a real M1 Pro Omarchy box. SEP evidence collector added without scooping keys or biometrics. Live USB story: **omarchy-mx-mac-iso** S4 installer pipeline verified on loopback (plain + LUKS2, 51 assertions); hardware USB boot still open.

STEERING is non-negotiable: truth is a feature, upstream first, integration not fabrication, local CI on own metal, MIT where we wrote it, user owns the machine, fire with receipts.

Landing / truth table: [michaelmonetized.github.io/asahi-installer](https://michaelmonetized.github.io/asahi-installer/).

## Where

It lives where Apple Silicon owners actually sit — and where the signed boot chain forces honesty.

First install is still recoveryOS or macOS. Apple Silicon does not boot PC-style ISOs from cold. A USB stick becomes bootable after Linux is on internal storage. We track direct-USB-boot work; we do not pretend it shipped.

Repo: [michaelmonetized/omnux](https://github.com/michaelmonetized/omnux). Landing and truth table on Pages: [michaelmonetized.github.io/asahi-installer](https://michaelmonetized.github.io/asahi-installer/). GPU siege issues on [omnux-gpu](https://github.com/michaelmonetized/omnux-gpu). Diagnostics: [omnux-report](https://github.com/michaelmonetized/omnux-report).

On this machine the clone is \`/home/michael/Projects/omnux\` at \`9b5e80d\`. Builds and releases are meant to run on maintainer metal via Makefile + installer \`build-local.sh\` — no hosted Actions gatekeeper. Audience sits next to the Omarchy / Asahi tribe and anyone who already treats a SUPPORT matrix as sacred text.

## When

**2026-08-25.** Monorepo init. README, GOAL, ROADMAP, STEERING, build targets. Submodules wired: kernel, m1n1, installer, pkgs, gpu. Same day Apple announces Mac mini M6/M5 Pro and Mac Studio M5 Max/Ultra — installer gate gains explicit M6 messaging; status snapshot notes September 22 as earliest ADT dump date. MX Mac live installer S4 lands in code with the asahi mkinitcpio hook fix that would have shipped every install without WiFi/GPU firmware. M3 GPU siege plan drafted; seventeen public issues filed. Announcement drafts get the marketing language stripped out.

**2026-08-26.** omnux-report linked and validated at v0.1.0 — complete redacted bundle on M1 Pro Omarchy, ten fixture checks green. Founder rewrite of the announcement; agent-army mandate recorded in GOAL (DHH / Omarchy community: deploy agents, owners share telemetry). TouchID confirmed on Omarchy for T1-chip TouchBar Macs by @0xBOYD3 — first known Linux TouchID. SEP research program filed across omnux-gpu issues; report grows a \`sep/\` collector.

**2026-08-27.** SEP enablement frontier verified from first principles against apstrand/m2-air-touchid work: \`apple_sep\` can bind, firmware stages, and still the AP cannot start the halted SEP — \`CPU_CONTROL\` read-as-zero, write-ignored. Lever is firmware / boot-policy, not a tidy Linux driver patch. Biometric \`stac\` reverse-engineering remains the multi-year wall. Sixteen commits from init to HEAD. Progress log closed the week with receipts.

Three days of foundation. That is the clock so far.

![August 25–27 shipped snapshot](screenshots/progress-snapshot.png)

## Why

Asahi proved locked silicon is not impossible silicon. Upstream moves at the speed of caution. I needed a shipping lane that compresses time-to-user for every public patch — and a voice that refuses to call software rendering a desktop.

I wanted the truth table to beat the press release. I wanted M3 owners to install with eyes open: experimental, hot, battery-hungry until GPU and DCP land — and still useful for traces. I wanted diagnostics owners control, a live stick path rehearsed on loopback before metal, and a GPU project that stays MIT so upstream can take everything.

So the umbrella exists. The curl bootstrap exists. The seventeen-issue siege map exists. The report produces a tarball with a SHA256. TouchID on T1 is celebrated without pretending M-series SEP is solved.

Omnux is still early — M3 installs are not boring yet, Hyprland is not hardware-accelerated on M3, USB hardware boot is unverified, M4 needs ADTs nobody has dumped into our tree. That is fine. The steering holds. The receipts link. The silicon generations are labeled honestly.

If you bought the Mac for the metal and stayed for the desktop, you already know which row of the truth table you are standing on.
`;

const SLOPOPS_COVER =
  "/blog/slopops-omarchy-ops-bar-panel/cover.png";

const SLOPOPS_CONTENT = `![slopops hero — fleet tab in the ops popup beside the one-icon five-tabs card](screenshots/app.png)

## Who

I run a small fleet and a loud SaaS stack. Tailscale peers. Vercel production. Sentry unresolved. PostHog events. GitHub issues assigned to me.

That used to mean five browser tabs I leave open like a superstition. Refresh. Squint. Miss the deploy that went ERROR while I was in a terminal.

slopops is for the Omarchy operator who already lives in the bar and refuses another Electron tray for the same five APIs. Solo builders. MarTech people who ship on Vercel and still SSH into boxes. Anyone who already typed \`gh auth login\` once and does not want a sixth personal access token living in a random JSON file under \`~/Library\`.

If your morning starts with “is the fleet up, did prod deploy, what is screaming in Sentry” — that is the room.

## What

I built an Omarchy **bar-widget**. QML. Quickshell. Id \`slopops\`. Display name SlopOps. Version **0.1.0**. Category Monitoring. One instance. Default section: right.

One icon. Nerd Font server glyph. Tiny badge dot in the corner.

![Fleet tab — peers, online count, ts / 22 / 5900 / t3 status lights](screenshots/fleet.png)

Five tabs in a 620×450 popup:

**Fleet** — every device on the tailnet. Online count. TCP probes for whatever ports you configure (default \`22,5900\`). Optional \`t3Port\` (default 3773) lights green when t3 serve is reachable on that peer’s tailnet IP.

**Deploys** — Vercel projects sorted by most recent production deploy. Anything with an ERROR since the last good deploy gets pinned to the top in pink. You see the fire before you open the dashboard.

![Deploys tab — failing projects pinned above READY rows](screenshots/deploys.png)

**Sentry** — unresolved issues, last 24 hours, grouped by project, loudest first. A \`+ issue\` button runs \`promote.sh\`: open a GitHub issue in \`issueRepo\` with event count, level, culprit, and the Sentry URL, then \`notify-send\`.

**Traffic** — PostHog all-time event total, a 30-day daily series, per-project totals down the side.

**Issues** — \`gh search\` for open issues and PRs for you (or a configured \`ghOwner\`).

![Sentry tab — unresolved 24h groups with + issue promote](screenshots/sentry.png)

The badge is the whole point when the popup is closed. Red if deploy errors or Sentry events. Yellow if tokens are missing or peers are offline. Green if nominal. \`status.sh\` rolls that up. Timer defaults to 90 seconds. Right-click the icon to refresh everything.

Data plane is boring on purpose: bash scripts print JSON; QML \`Process\` parses a line. Tokens sit in \`secrets.env\` (gitignored, chmod 600). Missing a token does not crash the tab — it shows a hint and moves on. GitHub never needed a token in that file; it uses your existing \`gh\` login.

Settings are widget keys, not forks: \`omarchy bar set slopops fleetPorts "22,5900,3389"\`, \`sentryOrg\`, \`sentryUrl\` for self-hosted, \`posthogUrl\` for EU, \`vercelTeamId\`, \`issueRepo\`, \`t3Port 0\` to hide the t3 light.

![PostHog traffic tab — all-time total, 30-day bars, per-project counts](screenshots/traffic.png)

## Where

It runs where Omarchy’s bar runs — Quickshell on the desktop I already stare at. Plugin path on this machine: \`~/.config/omarchy/plugins/slopops\`. Same tree mirrored under the dotfiles-omarchy project copy.

Repo: [michaelmonetized/slopops](https://github.com/michaelmonetized/slopops). Public. Branch \`master\`. No Pages homepage. No GitHub Release tag. Linguist says mostly QML, then Shell, a little JavaScript helper for \`ago\` / \`fmt\` / \`levelColor\`.

![Repo layout — Ops.qml, tabs, scripts, secrets example](screenshots/repo-structure.png)

The audience sits next to Omarchy, Tailscale, Vercel, Sentry, and PostHog — the people who already have those CLIs and tokens, not the people who need a demo video of what a deploy is.

![Issues tab — open issues and PRs via gh search](screenshots/issues.png)

## When

**2026-08-26, 9:23 AM Eastern.** First commit. Message: \`michael.ops 0.1.0: multi-service ops bar panel for Omarchy\`. Twenty files. 1,780 lines. The whole panel lands in one shot — \`Ops.qml\`, five tabs, seven scripts, manifest, README, \`secrets.env.example\`.

**Same morning, 9:55 AM Eastern.** Second commit. \`rename plugin id to slopops\`. Manifest id and name, README, moduleName/ipcTarget. \`michael.ops\` becomes the public name that matches the repo.

**2026-08-26, 1:55 PM UTC.** Last push on GitHub. Still \`0.1.0\`. Still two commits. No LICENSE file in the tree. One star.

**2026-09-08.** Pack day. Plugin still on disk. \`omarchy bar put slopops\` puts it on the bar. \`secrets.env\` is still not created on this machine — the degrade path is the live path until tokens land.

Thirty-two minutes from first commit to rename. That is the clock.

## Why

I was paying the context-switch tax every day. Fleet health in one place. Deploys in another. Sentry in a third. PostHog for “is anyone even using this.” GitHub for the work the errors become.

The bar was already the glance surface. Omarchy already had a widget schema. So I put the stack behind one icon and made the badge tell the truth when I am too busy to open the popup.

Shell fetchers. JSON out. Tokens optional. Promote from Sentry to GitHub without leaving the seat. Ports as settings, not a new plugin fork.

That is the tool I reached for when the dashboards started feeling like chores.
`;

const BESTWNC_COVER =
  "/blog/bestwnc-honest-analytics-local-directory/cover.png";

const BESTWNC_CONTENT = `![BestWNC homepage — Find the places that make Western North Carolina feel local](screenshots/home.png)

## Who

I live in the Blue Ridge ops lane. Locals need a directory that feels like a map, not a lead-gen trap. Owners need a page they can claim without a sales call. Operators need dashboards that do not invent click-through rates.

BestWNC is for people hunting restaurants, coffee, contractors, wellness, and shops from Asheville to Boone — and for the owners of those places who will list free, claim if we already seeded them, and upgrade only when reach matters.

If you build MarTech, local SEO products, or Stripe-backed owner tools: this post is the field notes, not a pitch deck.

## What

I shipped a local business directory for Western North Carolina.

Stack on the box: **Next.js 16.2.6**, React 19, **Convex**, **Clerk**, **Stripe**, PostHog, Sentry, Resend, Tailwind v4, Bun, Phosphor icons, Vercel. Repo is private under \`HurleyUS/bestwnc.com\`. Site is public at [bestwnc.com](https://www.bestwnc.com/).

![Owners lander — Add or claim your BestWNC page in minutes](screenshots/owners.png)

Listings start free. Paid plans live in code — \`lib/billing.ts\` — not as a fragile Stripe Dashboard catalog:

- **Unlimited** — $10/mo or $80/yr — photos, video, posts, events, widgets, social links, contact, messaging
- **Featured** — $50/mo or $480/yr — Unlimited plus priority / pinned placement
- **Max** — $100/mo or $960/yr — Featured plus ad credits and the top tooling tier

Manual add-ons stay manual until fulfilled: Online Presence Analysis $8, Vetted Badge $80, Listing Sync $480. Dynamic checkout builds the price at session time.

Seed data is 101 real WNC businesses — Asheville-heavy, plus Waynesville, Brevard, Hendersonville, Black Mountain, and the rest of the corridor. Claim if we already have you. Add if we do not.

The part that matters this week: **analytics honesty**. Owner analytics used to look busier than the measurement layer could defend. On September 8 I changed the API and UI so recorded cumulative views, review count, and average rating stay; period views, clicks, conversion rates, and weekly series return **\`null\`** with an explicit \`availability\` object. README says the same thing out loud. Cumulative views include repeat, owner, and bot traffic — they are not unique visitors. \`null\` is the product.

Same two days: ownership claims and billing hardened, unsupported sales claims stripped from marketing surfaces, Stripe webhooks allowed through session middleware when signed, and honeypot fields on every public contact / newsletter form because spam was flooding Advertising and General Inquiry. Fill the hidden field → silent success, no email, no lead row.

![Owner plans — Free, Unlimited, Featured](screenshots/pricing.png)

## Where

It runs on Vercel against Convex. Auth is Clerk. Money is Stripe. Mail is Resend. Errors go to Sentry. Product events go to PostHog.

Surfaces that matter:

- Public discovery — explore, categories, cities, top-rated, trending, search, business pages
- Owner funnel — \`/owners\`, \`/claim\`, \`/add-business\`, dashboard edit / photos / reviews / analytics / upgrade
- Pricing — \`/pricing\` with the plan cards that match \`PLAN_DEFINITIONS\`

Audience sits in Western North Carolina and with builders who ship local directories instead of another generic “AI growth” wrapper.

![Explore — directory discovery surface](screenshots/explore.png)

## When

**2026-01-08.** Init. Next.js + Convex + Tailwind. Directory MVP the same day.

**January–February.** Categories, seed scripts, Mountain Modern redesign, mobile nav, instant listing (no review queue), Sentry, claim + email verification, PostHog, Schema.org, PWA, design variant lab, Phosphor icons, Stripe checkout/portal/webhook, **101 real WNC businesses**, photo upload via Convex storage, owner dashboard, admin moderation queue.

**March.** Launch-week security and reliability. Env validation that fails fast. Stripe monetization sprint. Dynamic pricing documented. Revenue-ready checklist. Owner plans, billing roles, social tables and signed-in pages.

**April–May.** Listing boosts on the owner dashboard. Real PostHog wiring passes. Blacksmith CI gates. Production deploy prep. Robots set to index, follow.

**2026-09-07.** PR #109 — secure ownership claims and billing; remove unsupported sales claims; keep purchased manual services pending until fulfillment.

**2026-09-08.** PR #110 — report only recorded business analytics (\`null\` where unmeasured). PR #111 — honeypot fields on public contact forms. HEAD \`ae65364\`. Two hundred sixty-one commits on \`main\`.

That is the clock from empty repo to an honest owner dashboard.

![About — BestWNC product story surface](screenshots/about.png)

## Why

Directories lie by default. Fake weekly charts. Fake conversion. Fake “impressions” that never existed as rows.

I refused that for BestWNC. If the counter is cumulative and polluted by owners and crawlers, say so. If period CTR is not instrumented, return \`null\` — not zero dressed as insight.

I also refused a soft claim path and a spam inbox. Claims require verified identity. Billing routes have security tests. Inquiry forms fail closed for bots without giving them a bounce they can learn from.

The product is still a directory: find a place, claim a place, pay for reach when you want it. The operator move is shipping the revenue path and then deleting the metrics theater in the same week.

If you own a shop between Asheville and Boone, what would you fix first on your BestWNC page — photos, hours, or the claim so nobody else can edit it?
`;

const MACKS_COVER =
  "/blog/macks-bbq-shack-canton-condensation-site/cover.png";

const MACKS_CONTENT = `![Mack's Shack homepage — wood nav, shield logo, chalk value prop over pit fire](https://www.macksbbqshack.com/ribs-sack.avif)

## Who

I build for operators. Sometimes that operator is me. Sometimes it is a pit crew on Main Street in Canton, North Carolina.

Mack's Shack BBQ needed a site that looked like the shack — not a generic restaurant theme with stock smoke overlays — and a catering path that dropped leads somewhere durable when Chris was on the line. Guests needed hours, address, phone, and a menu that matched the board on the wall. Planners needed “mouths to feed” and an event date without playing phone tag first.

I am the builder. Hustle Launch is on the footer. The food is theirs. The stack is mine to keep honest.

## What

I shipped a private Next.js 16 App Router site. React 19. Bun. Tailwind 4. Biome. Framer Motion on the hero. Cabin Sketch for chalk. Source Sans for the rest.

The homepage is a condensation-glass hero over looping pit video. Pointer clears fog. Mobile drops the canvas and keeps the video. Wood strip across the nav. Tomato catering CTA. Outline button into the menu board.

![Mack's Shack BBQ logo mark](https://www.macksbbqshack.com/logo.avif)

The menu is a skeuomorphic blackboard — real blackboard texture, wood dividers with inset depth, taped Polaroids for brisket, pork, sides, banana pudding. Item copy lives in one content module so the Schema.org Restaurant JSON-LD and the chalk board drink from the same list. Wings brined, smoked, fried, tossed in Bama white. Mack Sack Combo. Family packs. Pick N Choose by the pound.

Catering is a real form: name, email, phone, event date, mouths-to-feed slider, details. The API writes a Convex \`cateringLeads\` row and fires Resend from \`Mack's Shack Bbq <notify@uncap.us>\` to \`macks.shack.bbq@gmail.com\` (CC me). Contact does the same with \`contactSubmissions\` and a “Message Chris” button next to Chris Lewallen’s photo and a Maps embed. Sentry on the error boundaries. PostHog on the pageviews. Reviews via a Jotform widget that cannot take the page down with it.

![Brisket — bark and smoke ring](https://www.macksbbqshack.com/brisket.avif)

## Where

366 Main St. Canton, NC 28716. Phone 828-631-2520. Hours Fri–Sun 11–7, Monday 12–7.

Canonical URL is [www.macksbbqshack.com](https://www.macksbbqshack.com). Vercel also serves the project alias. Repo is private: [michaelmonetized/macksbbqshack-com](https://github.com/michaelmonetized/macksbbqshack-com).

Footer socials hit Yelp, Instagram, Google Maps, Facebook. Footer credit names Hustle Launch for web design and app development. The audience for *this* write-up is builders who care how a local business site actually captures a wedding headcount — and anyone in WNC who already knows the Main Street pit.

![Pulled pork plate asset from the live site](https://www.macksbbqshack.com/pork.avif)

## When

**2026-05-19.** Init. Condensation glass hero mockup. Mobile video fallback. Same day: live business copy, catering flow, hero refinements, mobile drawer, section photos.

**2026-05-20.** Blackboard background. Wood textures. Hustle Launch footer credit. Hero CTA polish until the catering button went tomato. Chris on the contact page. Maps embed. Contact form + Convex persist. Menu Polaroids. Structured data. Sentry. PostHog. Social icons.

**2026-05-22.** Merge PR #1 from \`dev\`. Deploy prod.

**2026-06-04.** Launch prep. Button fix.

**2026-06-27.** Phone update.

**2026-07-12.** Dirty rice off the board.

**2026-07-13.** SEO and custom error boundaries — twice, because the first pass lied. Google/Jotform reviews on about and the other pages. Script moved to the end of body so it stopped breaking the layout.

**2026-07-29.** Sitewide vacation dialog for the Aug 2–3 closure. Cookie dismiss. Sticky banner.

**2026-08-08.** \`X-Robots-Tag: index, follow\` locked in Vercel headers.

**2026-08-30.** Ten commits titled \`[fix] convex + resend connections\`. HEAD settled. Sixty-seven commits from init. That is the clock.

![Nutter Butter banana pudding — dessert Polaroid source](https://www.macksbbqshack.com/nana-puddin.avif)

## Why

A Main Street BBQ does not need a SaaS lander. It needs the board, the hours, the phone, and a catering form that still works when the dining room is loud.

I wanted the hero to feel wet and hot — condensation over real pit video — and the menu to feel like chalk on wood, not a CMS card grid. I wanted leads in Convex *and* in the inbox from a domain I control (\`notify@uncap.us\`), not a “we will get back to you” void. I wanted Schema.org to carry the same wings and family packs the chalkboard shows.

So I linked the textures, wired the mutations, shipped the vacation banner before the holiday, and kept fixing the Resend path until August 30 stopped yelling. Operator stack. Local business. Own the notify domain.

The repo is still private. The site is live. The Polaroids are still taped to the board.

If you were standing at 366 Main tonight, which section of that chalkboard would you photograph first?
`;

const UNCAP_COVER =
  "/blog/uncap-us-repo-native-social-layer/cover.png";

const UNCAP_CONTENT = `![uncap.us Raycast-style signed-out landing — Your shortcut to shipped work](/blog/uncap-us-repo-native-social-layer/screenshots/landing-raycast.png)

## Who

I ship software for a living. The repo is where the truth should live. It usually does not.

Code sits in GitHub. Launch posts sit in a thread that dies in three days. Design decisions live as screenshots in Slack. Hiring signal is a PDF from last year. CI cost hides in a vendor dashboard. AI review output never becomes part of the project graph.

uncap.us is for maintainers and operators who want that whole graph attached to the repository — not for people who need another place to perform. If you already think in owner/repo, org routes, and what shipped this week, you are the room.

I also wrote the manifesto out loud: open source should not mean every byte is public every minute. Commits and branches are a bad primary primitive. Worktrees as we inherited them are an abomination. Agents and humans deserve a VFS that tracks work as it happens.

## What

I built a repo-native social layer. Live site: www.uncap.us. App version in package.json: 0.2.0. Private product repo under HurleyUS.

README-first repo pages at /:owner/:repo. Organizations that own repos. Issues and PRs. Explore. Dashboard. A Lens feed for launches, releases, jobs, design updates, and links tied to the project (Lens replaced the earlier wall naming). Pricing and docs. A downloadable Uncap CLI (UnGit) with device-flow login.

![README-first repository home from launch gallery](/blog/uncap-us-repo-native-social-layer/screenshots/repo-home.png)

Origin sync connects public Git origins (GitHub, GitLab, Bitbucket, Codeberg, Forgejo, Gitea), caches shape, and reads files on demand. Native Uncap-hosted Git remotes are a separate rollout; empty states say that out loud instead of faking clone URLs.

The CLI is the manifesto as a tool. uncap watch auto-tracks. Snapshots and virtual worktrees. Visibility flags for private/staging/public artifacts. Maintainer commands cover issues, pull requests, and continuous integration.

Backend is Convex with Clerk auth.

Stack at HEAD includes TanStack Start, Vite, pnpm, React 19, Convex, Clerk. Production deploys as tanstack-start on Vercel. That replaced an earlier Next.js plus Bun era; README badges lag the real stack.

![Origin code browser from launch gallery](/blog/uncap-us-repo-native-social-layer/screenshots/repo-code.png)

## Where

Production is public even though the GitHub repo is private: www.uncap.us. Health at /api/health reports Clerk, Convex, PostHog, Resend, Sentry, and Stripe ready, with origin imports, native Git refs capability flags, and production telemetry enabled — verified 2026-09-08.

Local clone on this machine: /home/michael/Projects/uncap.us @ ce53c96. CLI install assets under /cli. Brand kit under public/ including the u mark.

The audience sits next to maintainers who already connect forges, and builders who read MANIFESTO.md before the pricing page.

![Explore — What's shipping today?](/blog/uncap-us-repo-native-social-layer/screenshots/explore.png)

## When

**2026-01-08.** Init: Next.js, Convex, Tailwind. Early product was closer to a job-seeker platform loop than a forge.

**2026-02.** Schema, Clerk auth, onboarding, job matching, then a hard security and auth hardening pass.

**2026-05-04 to 06.** Rebuild as a social forge. Real services. Auth and repository creation.

**2026-05-14 to 15.** Launch pack: screenshots, announcement drafts, runbook, health gates. Target drop May 15, 8:00 AM ET. Positioning locked.

**2026-06-09 to 12.** Full app migration across nine phases. Legacy Next tree deleted. Downloadable CLI with device auth. Origin sync and Convex file cache. GTM integrations at the code layer.

**2026-06-13 to 16.** Terminology: lens and repo. Marketing docs and signed-out home. Commit graph redesign. u mark lands in the brand set.

**2026-08-08.** X-Robots-Tag set to index, follow on Vercel.

**2026-08-30 to 31.** Signed-out landing redesigned like raycast.com. Command palette hero. Your shortcut to shipped work. Mobile signup overflow fixed. Duplicate Log in removed. AI-slop highlight pill removed. HEAD ce53c96. 338 commits from init to that tip.

![Historical May social-forge home from launch assets](/blog/uncap-us-repo-native-social-layer/screenshots/home.png)

## Why

Git hosts optimized for storing files. The work I actually do spills sideways — launches, design versions, hiring signal, review output, deploy state. I wanted the repository to be the hub that holds that graph without turning the feed into performative noise.

I also wanted source control primitives that match how I work now: auto-tracking instead of nagging myself to commit, granular visibility instead of all-or-nothing public, virtual worktrees instead of copying trees by hand for agents.

So uncap.us is live with origin-aware repo pages, Lens, orgs, and a CLI on the site. Native hosted remotes are still a rollout, not a pretend clone button. The frame under the product changed once while shipping stayed continuous.

Eight months. Three product shapes. One domain. The file cabinet was never going to grow the graph I needed.
`;

const OMARCHYSITE_COVER =
  "/blog/omarchy-site-tanstack-start-rebuild/cover.png";

const OMARCHYSITE_CONTENT = `![Omarchy hero end plate](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/bg/home/hero-end.jpeg)

## Who

I run Omarchy. Asahi. Hyprland. Quickshell draws the bar. Naarchy sits in the camera hole. The creative suite became omadesign. The public Omarchy site was still a static tree I had forked as omarchy-site.

I ship other properties in TypeScript and TanStack. When the site I point people at does not match the stack I build in, I feel the seam every time I open a PR.

This rewrite is for the operator who already lives on Omarchy and wants install, manual, news, and foundation raise inside a TanStack Start app. Also for anyone evaluating Start on a real content-heavy surface.

I did not invent Omarchy. DHH and Omacom did. I rebuilt the site shell.

## What

Repo on GitHub: michaelmonetized/omarchy-site-tanstack-start
Live vercel.app deploy named after the repo.

Stack is TanStack Start plus Router and React 19.

Also Tailwind v4 and the shadcn UI kit.

Root title stays the Omarchy brand line.

![Tokyo Night](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/tokyo-night-preview.webp)

Home plays Quattro first-boot, holds empty sky, then etches the mark.
Below that: foundation raise chart, patrons, menu, themes, Hyprland, Quickshell, plugins.

Manual: 52 chapters as typed modules. News: 16 posts. Install for PC, Intel Mac, and Apple Silicon community builds.
ISO constant is 4.0.2. Import helpers pull HTML from the sibling static site checkout.

![Quickshell bar](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/shell-bar.webp)

Deploy config turns off git auto-deploy for main and master. Ship is deliberate.

## Where

It runs on the Vercel preview URL. OS truth remains omarchy.org and omacom/omarchy.
Import sibling on this machine: Projects/omarchy-site. App clone: Projects/omarchy-site-tanstack-start at d98a362.

![Four-way tiling](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/navigation-fourway-tiling.webp)

Audience sits next to Omarchy and Asahi people and next to builders already on TanStack Router.

## When

**2026-08-31.** init scaffold.

**2026-09-01.** Landing, layout, shell. Full manual chapters. Rest of site including PC and Mac install. Hero mark and empty sky etch.

**2026-09-02.** Square patrons, 13M raise, Quickshell on home. Three commits on Safari etch. CTAs to install, manual, repo. Nav pinned right.

**2026-09-03.** README plays the desktop walkthrough. Fifteen commits. About three days from scaffold to the URL that still answers.

![Clipboard history](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/clipboard-history.webp)

## Why

I needed the Omarchy public face in the same toolchain I use for everything else I ship. Static HTML is fine for the upstream project. My working copy wanted file routes, typed content modules, and a deploy I control.

So I imported the manual and news, wired the raise chart, fixed the etch until Safari stopped lying about the canvas, and left auto-deploy off. The OS stays theirs. The Start app is mine to break and rebuild.

ISO still downloads from omarchy.org. Plugins still live at omarchyplugins.com. This repo is the site rewrite as of September 3, 2026.
`;

const OMNUXGPU_COVER =
  "/blog/omnux-gpu-mit-clean-room-m3-siege/cover.png";

const OMNUXGPU_CONTENT = `![OMNUX-GPU — MIT clean-room siege for M3 pixels](/blog/omnux-gpu-mit-clean-room-m3-siege/cover.png)

![Honest state — scaffold only; no working driver](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/honest-state.png)

## Who

I am the person who already said the quiet part on the Omnux umbrella post: M3 installs today, software-rendered, and software rendering is not a desktop.

This piece is for a narrower room.

M3 owners who will lend a machine for m1n1 proxyclient captures. Reverse engineers who already know Asahi’s AGX story on M1/M2 and want the T603x/T8122 delta wall documented without contamination. DRM and Mesa people who treat “working” as render nodes plus glmark on metal, not a README adjective. License hawks who care that MIT stays clean before \`src/\` fills. Agent operators grinding capture loops under the same agent-army mandate that sits in Omnux GOAL.

If you need an install one-liner or a diagnostics tarball, that is the sibling posts. If you need the GPU long pole named as a project with acceptance criteria, that is this room.

## What

I stood up **omnux-gpu** — a standalone MIT repo whose entire value proposition is honesty about what is missing.

It is an attempt at a clean-room GPU driver for Apple M3-series silicon. License: MIT. Upstream may take everything; that is the point. The repository holds scaffolding, a research roadmap, tooling stubs, and eventually driver code. It does **not** yet contain a working driver. Nothing here claims otherwise until pixels appear on a physical M3.

![Repo layout — docs, tools, empty src, MIT LICENSE](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/repo-layout.png)

Three reverse-engineering walls stand between scaffold and acceleration:

1. **Command processor submission model** — how macOS userspace submits work to AGX firmware on T8122/T603x (differs from M2).
2. **Shader ISA deltas** — M3 brought Dynamic Caching, mesh shaders, hardware ray tracing; instruction encoding moved vs M1/M2.
3. **Firmware interface** — version negotiation, queues, faults against shipping macOS AGX firmware (issues call 14.8.3+ as the field floor).

![Three RE walls — CP submission, ISA deltas, firmware interface](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/re-walls.png)

Each wall is only discoverable against real hardware, using m1n1’s proxyclient tracing on a machine booted into macOS with instrumentation. Code written away from the metal is fan fiction.

The method is a loop, not a vibe:

1. **Capture** — target M3 into m1n1 proxyclient from a second USB host; run macOS GPU workloads under \`agx_*\` experiments adapted for newer ABI.
2. **Diff** — compare to known M1/M2 models; land deltas in \`docs/\`.
3. **Implement** — clean-room sources in \`src/\` from documented behavior only.
4. **Validate** — kexec Omnux kernel with the driver; iterate until DRM render nodes exist and glmark runs.
5. **Publish** — every milestone upstream to Asahi first.

![Method loop — Capture Diff Implement Validate Upstream](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/method-loop.png)

Fifteen public issues map the siege. Issues #1–#8 are the GPU spine: capture harness, submission-model docs, ISA delta docs, firmware-interface docs, DRM skeleton (probe + firmware load + first render node **without** claiming acceleration), Mesa Honeykrisp/agx bring-up for G15-class, t603x power/PMP/thermal, and a local validation harness (kexec + glmark2/vkcube → signed JSON, own metal, no hosted CI theater). Issue #9 is the license immune system: \`docs/CLEANROOM.md\`, PR source disclosure, taint procedure — before any non-scaffold code lands. Issues #10–#15 park SEP/TouchID research on the same tracker so the wall is visible; the biometrics frontier and omnux-report evidence collectors are sibling stories, not this one.

\`src/\` is empty on purpose. Contaminated contribution — decompiled Apple code, NDA headers, GPL-mixed paste — poisons the MIT claim. The audit process has to exist before the directory fills.

## Where

It lives where M3 metal and a second USB host can sit on the same desk.

Repo: [michaelmonetized/omnux-gpu](https://github.com/michaelmonetized/omnux-gpu). Parent umbrella wires it as \`gpu/\` under [michaelmonetized/omnux](https://github.com/michaelmonetized/omnux). Diagnostics sibling: [omnux-report](https://github.com/michaelmonetized/omnux-report) — logs, sysinfo, ADT helper, SEP collectors with redaction; useful for evidence, not a substitute for AGX traces.

SoCs in scope: T603x / T8122 class. Capture target: shipping macOS firmware on those chips. Validation target: Omnux kernel kexec’d from m1n1 until \`/dev/dri/renderD*\` appears and the acceptance harness stops lying.

If you have hardware to lend, the README says open an issue — that is the bottleneck, full stop.

## When

**2026-08-24.** Single scaffold commit \`a3b7f74\`: MIT LICENSE, honest README, \`docs/NOTES.md\` placeholder, empty \`src/\`, stub \`tools/\`. Created the repo the day before the Omnux umbrella monorepo week. One commit. That is still the commit graph.

**2026-08-25.** Siege map lands as public issues #1 through #9 while Omnux M0 is getting wired. Capture harness called the critical path. Clean-room audit filed as blocking-by-convention and cheap — do it before code, not after a lawsuit hypothetical.

**2026-08-26 → 2026-08-27.** Issues #10–#15 add the SEP/TouchID research program to this tracker (T1 community win, T2 bridge, omnux-report SEP section, apstrand frontier notes). Useful adjacency. Still zero GPU capture artifacts under \`docs/captures/\`. Still no DRM skeleton. The calendar moved; the metal bottleneck did not.

**2026-09-08.** This pack. Still scaffold. Still fifteen open issues. Still waiting on an M3-class machine in the harness loop.

![Issue map — GPU #1–#8, clean-room #9, SEP adjacency #10–#15](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/issue-map.png)

## Why

Omnux can already tell the truth about M3 installs. Truth without a GPU project is a permanent software-render sentence dressed up as roadmap poetry.

I wanted a repo whose license Asahi can absorb without a negotiation. I wanted “working” defined as pixels and scores on metal, not a press sentence. I wanted the three RE walls named so contributors argue about captures instead of vibes. I wanted the clean-room gate written before the first real C file, because MIT is easy to claim and hard to un-poison.

The ask is not stars. The ask is hardware in the capture loop — and issue checkboxes that turn green only when the acceptance criteria say so.
`;

const HURLEYUS_COVER =
  "/blog/hurleyus-omarchy-catppuccin-rally-theme/cover.png";

const HURLEYUS_CONTENT = `![Hurleyus hero — desktop preview beside Plymouth unlock](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/hero-desktop-unlock.png)

## Who

I run Omarchy as the daily desk. Catppuccin Mocha is already the right palette — soft contrast, blue accent, pink errors, the whole mocha set.

Stock Mocha still looks like everybody else’s laptop.

Hurleyus is for the Omarchy operator who wants Mocha without anonymity. For the Hurley / quattro / rally-art orbit who want the desk to match the brand. For Asahi Mac people who care that the unlock screen and the compiled-in U-Boot splash say the same name as the bar. For theme authors who already learned that shipping Foot or Ghostty palette files inside a theme is how you get a black terminal.

If your Style menu is full of fine defaults and none of them feel like yours — that is the room.

## What

I built an Omarchy **theme package**. Id folder \`hurleyus\`. Display name **Hurleyus**. MIT. Public repo. Branch \`main\`.

![Desktop preview — Mocha chrome over rally wall](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/desktop-preview.png)

**Palette.** \`colors.toml\` is the source of truth. Background \`#1e1e2e\`. Accent \`#89b4fa\`. Omarchy expands that into Foot, Ghostty, Kitty, Alacritty, btop, Chromium, shell chrome. README is blunt: do not ship terminal palette files in the theme. Those files block the templates. You get a black terminal. I have no interest in that support thread.

**Window chrome.** \`hyprland.lua\` — 20px rounding, 20px gaps in and out, Mocha active/inactive borders. Editors: \`neovim.lua\` points LazyVim at Catppuccin; \`vscode.json\` names the Catppuccin Mocha extension. Icons: Yaru-purple.

![Repo layout — colors, lua, walls, branding, unlock](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/repo-structure.png)

**Walls.** Seven 4K JPEGs, 3840×2160, pre-darkened so the bar and terminals stay readable. Titles in the gallery: Canyon run, Hairpin, The jump, Donuts, Tunnel blast, Service park, Last light. Cycle with \`omarchy theme bg next\` or Style → Background.

![Seven pre-darkened 4K Hurleyus walls](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/walls-gallery.png)

**Boot.** \`unlock.png\` for Plymouth / SDDM — set with \`omarchy plymouth set by theme hurleyus\` (same path Lumon uses). Branding ASCII for about + screensaver. Logo PNG. And the Asahi-specific piece: \`branding/install-uboot-logo.sh\` finds the 160×160 8-bit BMP slot inside \`/usr/lib/asahi-boot/u-boot-nodtb.bin\`, writes a patched copy under cache, runs \`update-m1n1\`. The splash that ships in U-Boot becomes Hurleyus.

**Install.** Origin README still shows \`omarchy theme install <url>\`. Pack-day local note (not pushed yet): Omarchy 4.0.2+ treats a nested \`.git\` directory as a stranger theme and drops \`hyprland.lua\` on install. Keep the Lua by cloning into \`~/.local/share/themes/hurleyus\`, symlinking into \`~/.config/omarchy/themes/hurleyus\`, then \`omarchy theme set hurleyus\`. A symlink counts as yours. A submodule’s \`.git\` *file* also keeps the Lua.

![Install path that keeps hyprland.lua on Omarchy 4.0.2+](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/install-path.png)

## Where

It lives where Omarchy themes live — \`~/.config/omarchy/themes/hurleyus\` on the machine I actually use. Same tree is the git checkout of [michaelmonetized/omarchy-hurleyus-theme](https://github.com/michaelmonetized/omarchy-hurleyus-theme).

Boot path is Plymouth / SDDM for unlock, and Asahi’s \`u-boot-nodtb.bin\` for the early splash. No Pages marketing site. No GitHub Release tag. Linguist is mostly the U-Boot install shell plus a little Lua; the walls are the byte mass.

Audience sits next to Omarchy, Catppuccin, Asahi / Omnux Mac desks, and the quattro / Hurley brand lane — people who already know Style → Theme, not people who need a tutorial on what a wallpaper is.

![Boot unlock preview](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/unlock-preview.png)

## When

**2026-08-21, 7:57 PM Eastern.** First commit. \`Fork stock Omarchy Catppuccin into Hurleyus.\` Twenty files. Mocha \`colors.toml\`, hyprland/neovim/vscode/icons, six PNG walls, branding ASCII, preview, MIT, README.

**Same night, 8:09 PM Eastern.** Twelve minutes later. \`Add Hurleyus unlock screen and Asahi U-Boot splash.\` Unlock assets, BMPs, \`install-uboot-logo.sh\`.

**2026-08-22, 6:36 AM Eastern.** \`init\` — wall refresh, bigger about/screensaver ASCII, hyprland tweak.

**2026-08-26, 5:58 AM Eastern.** \`Package for distribution: 4K JPEG walls, README gallery, cleanup.\` PNG walls out. Seven JPEGs in. Gallery in the README. Fat binaries gone so \`theme install\` is not a joke.

Four commits. Still. Last push \`65f4da3\`. Zero stars. Local README has an unpushed install-path rewrite for the 4.0.2+ Lua drop — pack day tells that truth instead of pretending origin already has it.

## Why

Because Mocha was correct and still felt rental.

Because I want one \`colors.toml\` driving the terminals and the rally art carrying the identity — not a fork of every emulator config.

Because on an Asahi Mac the splash in U-Boot is part of the machine’s face, and patching a 160×160 slot is a real receipt, not a settings-app wallpaper picker.

Because Omarchy’s theme system rewards packages that respect templates, and I refuse to relearn the black-terminal lesson.

Fork Thursday night. Unlock and U-Boot twelve minutes later. Slim JPEG distribution five mornings after that. That is the clock.
`;

const REAFERAL_COVER =
  "/blog/reaferral-agent-referral-platform/cover.png";

const REAFERAL_CONTENT = `![Reaferral Inman-style landing — BREAKING referral tracking hero](/blog/reaferral-agent-referral-platform/screenshots/home.png)

## Who

I watch real estate agents make a quarter to a third of their income on referrals and still track those deals in spreadsheets, group texts, and vibes.

That is not a CRM problem. That is a **referral accountability** problem. Who sent it. What fee was agreed. What stage the deal is in. Whether the check showed up when it closed.

Reaferral is for licensed agents who are tired of losing money to ambiguity. Solo producers who want a link in the email signature that actually attributes. Team leads who need roles and a shared pipeline. Builders who already speak Next.js, Convex, and Clerk and want the vertical product without another Electron tray.

If your week includes “did that referral ever close” and a half-finished Google Sheet — that is the room.

## What

I built **Reaferral**: an agent-to-agent real estate referral platform.

Stack on the wire: **Next.js 16.1.6** (App Router, Turbopack), **Convex** for the reactive backend, **Clerk** for auth, Tailwind v4, Radix/shadcn-style UI, Recharts, PostHog, Sentry configs, Resend, Stripe Connect routes. Bun monorepo. Workspaces: \`web\` (\`reaferral-web\` 0.1.0) and \`mobile\` (Expo \`reaferral-app\` 1.0.0). Hosted at [reaferral.vercel.app](https://reaferral.vercel.app). GitHub repo private under HurleyUS.

![Features page — product surfaces and mockups](/blog/reaferral-agent-referral-platform/screenshots/features.png)

What ships in the product surface:

**Referral tracking** — create, send, receive; fee percent or flat; status through the deal.

**Trackable links** — short codes under \`/r/[code]\`, click analytics, campaign names.

**Pipeline** — lead → active → under contract → closed (and payout adjacency in schema).

**Teams** — slugs, invites, roles (owner/admin/financial/assistant/member), pending joins that survive signup.

**Messaging** — per-referral threads in Convex.

**Twelve dashboard themes** — neumorphism, gradient-wave, dark-pro, inman-style, minimal-light, plus brokerage-inspired skins (Keller Williams, RE/MAX, Zillow, eXp, Trulia), Raycast, Brutalist.

**Content engine** — **423** MDX files under \`web/content/stories/\`. Linguist says MDX is ~76% of the repo by bytes. The landing still says “66+ Expert Articles.” The filesystem disagrees in the agent’s favor.

![Stories journal index](/blog/reaferral-agent-referral-platform/screenshots/stories.png)

![Example story — 47-second setup](/blog/reaferral-agent-referral-platform/screenshots/story-47.png)

Public GTM pages: Inman-style editorial landing (orange LIVE strip, green REA**FERRAL** wordmark, navy stats band), Features, Stories, Investors. Auth: Clerk sign-in/up → \`/dashboard\`.

![Clerk sign-up](/blog/reaferral-agent-referral-platform/screenshots/sign-up.png)

![Investors page](/blog/reaferral-agent-referral-platform/screenshots/investors.png)

Positioning in the ProductHunt/HN drafts on disk: core tracking **free forever**; premium later (follow-ups, agreements, payment tracking). I am not pretending the Stripe Connect routes mean the billing story is finished.

![Illustrative pipeline mock — not a live authenticated dashboard](/blog/reaferral-agent-referral-platform/screenshots/pipeline-mock.png)

## Where

It runs on Vercel at **reaferral.vercel.app**. Clerk on the live deploy is still a **dev** instance (\`pk_test_…\`) — the marketing pages render signed-out; the dashboard sits behind auth.

Repo: [HurleyUS/reaferral](https://github.com/HurleyUS/reaferral). Private. Branch \`main\`. HEAD at pack time \`8ba157a\`. **501** commits. Zero GitHub Releases. MIT license file present (copyright line dated 2021).

![Monorepo map](/blog/reaferral-agent-referral-platform/screenshots/repo-structure.png)

The audience sits next to agent networks, Inman-shaped media, and the same Convex/Clerk/Vercel family I use elsewhere — not next to “what is a referral fee” explainers.

Chrome extension lives in a **sibling** repo (\`michaelmonetized/reaferral-chrome-extension\`). Not this pack.

## When

**2024-08-07.** \`init\`.

**2026-01-08.** Docs snap into focus: OPPORTUNITIES, PLAN, README — this is a real-estate referral platform, not a vague hustle.

**2026-02-04.** The real ship week. \`feat: complete Convex backend and core web app\`. GitHub repo created. Landing design variants. Vercel monorepo wiring. Clerk → Convex user sync.

**2026-02-05–06.** Theme system expands. Features + Stories infrastructure. Investors, privacy, terms. Shared chrome. Mobile-friendly dashboard.

**Late February through April.** The content firehose. Hundreds of \`content: add new story\` commits. 413 of them by pack count. Journal becomes the bulk of the tree.

**2026-02-27 onward.** Security passes — auth checks on mutations, collect bounds, Svix verification on Clerk webhooks, console cleanup for production.

**2026-05–06.** CI thrash (Blacksmith) then removal; promo banner overlap fix; nightly commits.

**2026-08-08, morning Eastern.** X-Robots-Tag set to \`index, follow\`, then three unblock fixes so production deploy stops choking. Last push. That is the clock stop for this pack.

**2026-09-08.** Pack day. Site up. \`og-image.png\` 404s. Draft only — no blog publish, no social blast, no git push from this task.

## Why

Because referral income is real and the tooling agents use for it is mostly improvisation.

Because I already had the Convex/Clerk/Next pattern and the missing piece was the vertical: links, fees, stages, teams, and a journal that attracts the people who feel the spreadsheet tax.

Because shipping 423 MDX stories into a private monorepo is a weird flex and also a concrete SEO loop — even when the hero still says 66+.

Because the badge of honesty here is the timeline: February MVP, spring content factory, August robots unblock — still private, still free-forever core, still no tagged release.

What dashboard or sheet are you still using to remember who owes whom on a referral?`;

const BESTJEEP_COVER =
  "/blog/best-jeep-decals-convex-stripe-storefront/cover.png";

const BESTJEEP_CONTENT = `![Best Jeep Decals — Upgrade Your Off-Road Identity](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/landing.png)

## Who

I kept seeing Jeep owners treat identity like an afterthought — a random sticker from a gas-station rack, peeling after one summer on a Wrangler hood.

The people I built for already know their JL from their JK, their Gladiator JT from an XJ Cherokee. They want hood blackouts, “rated” fender badges, side graphics that look like they belong on the trail, not clip art. They want USA vinyl that lasts 5–7 years outdoors, air-release installs, and a checkout that does not feel like 2014 Magento.

If you ship MarTech, Convex + Clerk + Stripe stacks, or local-commerce sites that have to take real money, you are in the room. This is a private HurleyUS storefront — Best Jeep Decals — not a theme demo.

## What

I shipped a dark-first e-commerce site at [bestjeepdecals.com](https://www.bestjeepdecals.com). Orange accent. Italic wordmark. Hero that says the quiet part: **Upgrade Your Off-Road Identity.** Made in the USA badge. Shop All Decals / Browse Wrangler.

![Shop filters — vehicle fitment and price range](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/shop.png)

Stack facts, not pitch deck: **Next.js 16.2.6** (Turbopack) on Vercel, **React 19**, **Convex** for products/categories/carts/orders/reviews/wishlists/discounts/subscriptions, **Clerk** for auth, **Stripe** for checkout, webhooks, portal, and promo codes, **Resend** from \`orders@bestjeepdecals.com\`, **Sentry** + **PostHog** (+ GA). Tailwind 4, Phosphor icons, Zustand cart with persist + promo, Zod + React Hook Form on checkout/admin/newsletter. Package **0.1.0**. Private repo.

Seeded catalog: **30** SKUs at **$29.99** across Hood Decals, Fender Decals, Side Graphics — Compass/Tread/Explorer/Star hood blackouts, Beach/Trail/Squatch/Rescue rated badges, Renegade mountain set, Zombie Outbreak Response Team badge, Since 1941 left/right, and the rest under \`public/products/png\`. Shop filters cover category, $0–$200 price range, and fitment checkboxes for Wrangler JL/JK/TJ, Gladiator JT, Cherokee XJ, Grand Cherokee, Renegade, Compass.

![Empty cart — trust path still on-brand](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/cart.png)

Admin lives under \`(private)/admin\` with \`requireAdmin\` — product CRUD (soft delete), orders, CSV export. Wishlist hearts persist in Convex. Reviews attach to products. Related products on PDPs. Billing defs include a **Decal of the Month Club** at **$14.99/mo** plus gift-card and rush-production add-ons. ROADMAP marks the Zod/RHF, Stripe+Resend, and Zustand modernization pass complete.

![Catalog collage from seeded PNGs](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/catalog-grid.png)

## Where

The storefront lives on the open web: [www.bestjeepdecals.com](https://www.bestjeepdecals.com) (apex redirects to www). GitHub homepage still lists the Vercel alias \`bestjeepdecalscom.vercel.app\`. Code: private [HurleyUS/bestjeepdecals.com](https://github.com/HurleyUS/bestjeepdecals.com).

Public routes: shop, product, category, cart, checkout, wishlist. Auth under Clerk catch-alls. Robots.txt allows shop/product/category and blocks admin/api/sign-in/sign-up. Aug 8 added \`X-Robots-Tag: index, follow\` on Vercel so the deploy stops whispering “please ignore me.”

Audience sits next to Jeep forums, jamborees, and every Instagram wrap account that still cannot take a Stripe payment without a third-party form.

## When

**2024-12-16.** Create Next App. Next day: shadcn init. Dec 27: a “ghostty released” commit. Three commits. Then silence through 2025.

**2026-01-08.** The product actually starts. OPPORTUNITIES.md. Homepage pass. Migrate to convex-nextfaster. **Build MVP e-commerce storefront.** Seed script and \`.env.example\` for production readiness.

**2026-02.** Superadmin email gate — then security move to a server component. Stripe webhook signature verification. Admin auth on product mutations. Cart wired with localStorage session and honest success toasts. Checkout rate limiting. Error and loading boundaries. Next.js thrash: bump to 16.1.6 for a CVE, temporary downgrade to 15.5.12 for middleware, Tailwind v3→v4, dark-first production audit.

**2026-03-09–17.** Next 15→16 for real. Delete deprecated \`middleware.ts\`. Restore Clerk on \`proxy.ts\`. Trust signals on cart. Sentry 10 for Next 16. Revenue unlock doc. Google Analytics. robots + next-sitemap. Stripe webhook + order payment flow. Admin dashboard for products and orders. Soft delete. Edit product. CSV export. Promo codes. Shop filters with category, price, Jeep model (#26). Reviews. Wishlists. Related products. Missing catalog images filled in.

**2026-05-14–15.** Blacksmith CI gates on repeat until they stick. Convex URL and Clerk key fallbacks so CI builds do not cry. Deploy health check targets fixed.

**2026-05-22–26.** Redesign commits. Package update PR #28. Sentry instrumentation. dx-maxxing PR #29. Broken images chased. UX passes. **Real catalog seeded** (\`24758dd\`).

**2026-08-08.** Four commits to finish the clock: force \`X-Robots-Tag: index, follow\`, unblock that deploy in \`next.config.ts\`, pin Stripe to package default API version for build compatibility. HEAD \`fd105bd\`. **Ninety-nine commits** from empty Next scaffold to an indexable commerce deploy.

On 2026-09-08 the live \`/\` sometimes hit the error boundary during capture while \`/shop\` and \`/cart\` still painted the dark chrome — Convex/runtime weather, not a rewrite of the journey.

## Why

A Jeep without identity graphics is fine. A checkout that cannot take money, moderate reviews, or keep a wishlist is not a store — it is a mood board.

I wanted the full path: seeded catalog, model fitment filters, Zustand cart with promos, Stripe webhooks that create orders, Resend that tells you it shipped, admin that can soft-delete a SKU and export CSV, CI that builds without secret theater, and a robots header that admits the site wants to be found.

So I kept shipping until the redesign matched the trail aesthetic and the seed matched the PNG drawer. It is still 0.1.0. Decal Club and gift-card add-ons sit in billing defs waiting for the live Stripe dial. That is fine. The document model already holds products, carts, orders, reviews, wishlists, and subscriptions in one Convex project.

If your current Jeep sticker supplier cannot show Wrangler vs Gladiator fitment without a phone call, you already know the hole I was staring at.

What would you put on a Wrangler hood first — a compass blackout, a tread pattern, or a beach-rated badge that starts arguments at the trailhead?
`;

const SONNY_COVER =
  "/blog/sonnys-shining-rubber-hose-beat-em-up/cover.png";

const SONNY_CONTENT = `![The Shining Gazette landing composite](/blog/sonnys-shining-rubber-hose-beat-em-up/screenshots/landing.png)

## Who

I kept catching myself wanting a beat-em-up that felt like Max Fleischer had a bad New Year's Eve and a bowling league problem.

Not another Unity template with a purple capsule for a hero. Not a pitch deck that says "Cuphead vibes" and then ships nothing you can read. I wanted the cast, the fatalities, the alley transitions, and the joke about Lucy's heart following the leaderboard — on disk — before I pretended an engine folder meant progress.

Sonny's Shining is for people who will sit with a Game Design Document. Indie animation nerds. Silent-film weirdos. Operators who think a Stripe Checkout and a refund policy are part of pre-production, not a later surprise. If you build MarTech by day and still care whether Bertie the bartender gets stuffed in a trash can, you are in the room.

## What

I wrote the IP as a stack of plain Markdown and a marketing site that looks like a 1935 newspaper.

The story: New Year's Eve. Bertie's Bustling Bubbles. Sonny — lanky hound dog man, Sonny Tufts energy, ball-shining towel in the back pocket — holds Lucy, a red fox with Lucille Ball danger in the smile. The bartender whispers. She leaves. Kewpie's bowling-pin limo peels out. Eight levels of Kewpie's payroll stand between a tournament bowler and a girl whose heart tracks the standings.

![Eight bosses / levels](/blog/sonnys-shining-rubber-hose-beat-em-up/screenshots/bosses.png)

Combat is bowling-native. Towel catch-and-return. Barehand bottle returns when the timing is honest. Later, a modified ball-return device becomes an over-the-shoulder launcher. Bosses are silent-film and vaudeville ghosts wearing animal suits: Bert Williams behind the bar, Chaplin as a mouse puppeteering a Fabio crab, Desi on the fire escape, Tippi in the dance school, Bessie on the decks, Snub Pollard in the hangar, Ivy Lee on the docks, Kewpie Morgan as the pig kingpin with a shipboard alley that sways on purpose.

Art bible is rubber hose / Fleischer / Roger Rabbit — noodle limbs, pie-cut eyes, four-finger gloves, springy idle. GDD.md is ~1,250 lines. NOVEL.md ~1,600. SCRIPT.md ~800. PLAY.md stages it as a tragedy in three acts. PLAN.md still says engine TBD (Unity or Godot). That sentence is accurate. There is no \`.unity\` or Godot project in this repo yet.

The web half is real software. Next.js 16.2.6, React 19, Tailwind 4, Bun lockfile, package **0.1.0**. Landing is "The Shining Gazette" — ticker tape, masthead, drop caps, classified boxes. \`PreorderButton\` collects email, hits \`POST /api/checkout\`, opens Stripe Checkout for **$8.00** (\`unit_amount: 800\`) with metadata \`sonnys-shining-preorder\` and expected release **Christmas 2026**. Privacy, terms, refunds, and success routes shipped with that checkout.

![Preorder / Stripe surface](/blog/sonnys-shining-rubber-hose-beat-em-up/screenshots/preorder.png)

## Where

Marketing lives at [sonnysshining.com](https://sonnysshining.com). Code at [github.com/michaelmonetized/Sonny-s-Shining](https://github.com/michaelmonetized/Sonny-s-Shining). Public. Empty GitHub description. Empty topics. Zero stars. That is fine — the README and the Gazette carry the pitch.

The audience sits next to every thread that wants Cuphead's lineage without Cuphead's budget, and next to every builder who knows a preorder page without a refund policy is a future apology.

## When

**2025-12-27.** Four commits in one afternoon. \`init\`. Web submodule and last names stripped from the celebrity inspo list. Novel pass. "initalize marketing website for the novel" — yes, that typo is in the commit message. Next 16.1.1 scaffold era.

**2026-01-31.** \`chore: sync all changes\` — one big dump, +1,640 / −79. Writing and early web catching up with each other.

**2026-03-17.** The money day. Privacy, terms, refunds, success. Stripe checkout route. PreorderButton. Newspaper redesign of \`page.tsx\`. PLAN.md lands. ROADMAP.md also lands — and it is wrong. It talks about a cleaning/detailing client site. I am not going to launder that into a feature. It is a stale stub sitting in the tree.

**2026-06-22.** Two \`nightly\` commits. GDD, Stripe cursor rules, fallow review hooks, dependency bump to Next 16.2.6 and \`stripe\` ^22. HEAD \`d6ae3ac\`. Still no engine.

**2026-08-16.** GitHub \`pushed_at\` moves. Main still ends at the June nightly. Eight commits on the ledger. Pack day is September 8, 2026.

That is the journey from empty repo to a design-complete tragedy with a live preorder path and an honest hole where the engine should be.

## Why

I did not want to lie to myself with a blank game project named after a feeling.

So I wrote the characters until Sonny's ears twitched in idle. I wrote the levels until the alley between Bertie and Charlie was a cut, not a load screen pitch. I put $8 and Christmas 2026 on a Stripe session so the promise had a price and a date. I left Unity/Godot as a checkbox in PLAN.md because checking a box is not the same as shipping a towel mechanic.

It is still web 0.1.0. The newsletter form on the lander is a client-side smile, not a list backend. ROADMAP.md needs to be deleted or rewritten. The game does not run. The bible does.

If your current "game idea" folder has a repo and no GDD, or a GDD and no way for someone to give you eight dollars, you already know which hole I was staring at.

Would you lock the Christmas 2026 preorder first — or open the engine folder and refuse to write another fatality until Bertie's bottle timing feels true?
`;


const HMS_COVER =
  "/blog/hms-hustle-management-system-live-editor/cover.png";

const HMS_CONTENT = `![HMS public home mock — ship the site, edit the site](/blog/hms-hustle-management-system-live-editor/screenshots/public-home.png)

## Who

I kept paying the WordPress tax.

Not the hosting bill. The other tax: Elementor for layout, Dynamic.ooo when Elementor ran out of road, WooCommerce when something had to sell, a pile of PHP templates that only one agency intern understood, and a publish button that still felt like deploying a missile.

HMS is for operators who already know that stack and are done leasing their content model from it. Marketing teams that need a revision trail and a split-test variant without forking a theme. Builders who are happier in Convex + Clerk + Vite+ than in another page-builder SaaS seat.

If you have ever opened a live URL, winced, and opened a totally different admin URL to fix one sentence — you are in the room.

## What

I shipped **HMS — Hustle Management System**. The public site is the product. Pages, posts, products, forms, and templates are **block trees** stored as JSON. Signed-in, you append \`?edit=1\` and edit in place. Visitors keep the same URL. That is the whole thesis.

Stack facts from the lockfile, not the README brochure: **Vite+** (\`vp\` for dev/build/lint/test), **React 19**, **react-router-dom 7**, **Tailwind 4**, shadcn + Base UI, **Zod 4** schemas driving **Convex** tables through \`zodToConvexFields\`, **Clerk** for auth, **Resend** as a Convex email action. Package version **0.0.0**. Public repo under michaelmonetized. Six commits. HEAD \`6f8fa73\`.

![Live editor three-panel mock](/blog/hms-hustle-management-system-live-editor/screenshots/live-editor.png)

The catalog is blunt: Basics, Media, Layout, Proof, Dynamic. Hero, CTA, features, columns, stats, testimonials, FAQ, pricing, logos, collections, menu, search, add-to-cart, cart, forms, document-body. Collections pull pages, posts, products, or media into grid, table, carousel, gallery, or list — and can paint each row with a **loop item** blueprint.

**Blueprints** are one kinded table (ADR 0001): component, form, loop-item, template. Templates carry \`appliesTo\` — header, footer, 404, search, blog archive/single, shop archive, product single. Tokens like \`{{site.name}}\`, \`{{doc.title}}\`, \`{{cart.count}}\` resolve with modifiers. Visibility groups AND/OR on field, schedule, role, referrer, cookie. Revisions snapshot on content update. Variants sit ready for split tests.

Data layer: local store with seed data for offline/dev; Convex when Clerk + Convex env are real (\`isLive\`). Cart lines live in localStorage. Commerce key fields exist on site settings and products — treat full checkout as schema-ready, not a finished money path in this window.

![Manage pages workspace mock](/blog/hms-hustle-management-system-live-editor/screenshots/manage-pages.png)

## Where

Code lives at [github.com/michaelmonetized/hms](https://github.com/michaelmonetized/hms). No homepage URL is set on the GitHub repo — this pack does not invent a marketing domain. Local path is \`vp install\` then \`vp dev\`. Manage workspace under \`/manage/*\`. Public surfaces: \`/\`, \`/blog\`, \`/shop\`, \`/search\`, plus typed entries and slugs.

Audience sits next to every thread still arguing Elementor vs Webflow while the real cost is “two URLs for one sentence.” Sibling mail default in the Resend action points at the \`uncap.us\` from-address — same operator family.

![Shop archive mock](/blog/hms-hustle-management-system-live-editor/screenshots/shop.png)

## When

**2026-08-12, 11:17 ET.** \`a62d31d\` initialize. Vite+ scaffold, Max fonts, a full shadcn dump, hero PNG. Two hours later \`07e6672\` configured.

**2026-08-13, 09:40 ET.** \`d95789a\` needs work. Convex pages, posts, products, media, sites, users. First page-builder. Manage shell routes. The CMS bones.

**That evening, 20:57 ET.** \`2404b20\` Ship public site, live editor, revisions, and manage workspace. The thesis lands: the site is the editor.

**2026-08-14, 10:34 ET.** \`12835c6\` new page builder. Catalog depth, finder, blueprints, collections, cart, theme templates. Four minutes later \`6f8fa73\` documents theme templates, search, cart, and library in the changelog. HEAD. Six commits total. Two per day for three days.

![Blueprint library mock](/blog/hms-hustle-management-system-live-editor/screenshots/library-blueprints.png)

## Why

I did not want another theme marketplace. I wanted the visitor URL to be the edit surface, with block JSON on Convex, revisions you can restore, and variants you can assign — without opening a separate Elementor canvas that lies about the front end.

So I compressed the escape into six commits: scaffold, configure, Convex bones, ship public+editor, deepen the builder, write the changelog. Version 0.0.0 on purpose. The README still talks like tanstack-start and zustand are in the room; the lockfile says Vite+ and react-router-dom. I would rather say that out loud than ship a brochure.

If your publish flow still requires a different hostname than your customers use, you already know the hole I was staring at.

What would you put on the first HMS page — the home hero, the shop archive, or the form that finally emails without a PHP plugin?
`;

const TWELVEUX_COVER =
  "/blog/twelveux-hosted-shadcn-registry-glass/cover.png";

const TWELVEUX_CONTENT = `![twelveux Glass playground — circle and NEW MATERIAL card](/blog/twelveux-hosted-shadcn-registry-glass/screenshots/playground.png)

## Who

I still install UI the shadcn way. Copy the files. Own the code. The default face is still Inter. The default kit is still New York.

That is fine for a starter. It is not the system I already run on uncap.us and hms — Max type, phi type scale, Catppuccin surfaces.

twelveux is for the operator who wants that system as a registry namespace, not a Figma moodboard. Frontend builders who already type npx shadcn add. People who remember twelve.ux from the WHATWG-era chrome. Anyone who wants liquid glass that is the actual shader, not a blur filter wearing a trench coat.

## What

I built a hosted shadcn/ui registry. Next.js 15. React 19. Tailwind 4. Package version 0.1.0.

Three installable items ship in public/r today: **max**, **theme**, **glass**.

**Max** is the typeface — local woff faces, weights 100 through 900, roman and italic.

**theme** is phi type and spacing, Catppuccin light and dark CSS variables, Max as sans. Same grammar as uncap.us and hms.

**Glass** is the first real component. Official pen.dev glass.glsl. Wrapper. Circle defaults baked in. GlassText is a second path with softer defaults for type.

The playground is the product surface. Live circle. Live card. CIRCLE PROPS sliders. Same wrapper on a shadcn button and a navbar over a photo.

![2012 twelve.ux chrome mock](https://raw.githubusercontent.com/michaelmonetized/twelveux/main/public/og/mock-full.jpg)

/og is the archive. Exact 2009-2012 twelve.ux chrome. /kit is the same chrome under glass.

![glass kit](/blog/twelveux-hosted-shadcn-registry-glass/screenshots/kit-page.png)

## Where

Live on Vercel: https://twelveux.vercel.app — playground, /og, /kit, and /r JSON.

Repo: https://github.com/michaelmonetized/twelveux

registry.json still says homepage https://twelveux.com. That name has no public DNS as of this writing. The host that answers is the Vercel app.

![scene backdrop](https://raw.githubusercontent.com/michaelmonetized/twelveux/main/public/scene.jpg)

## When

**2009-2012.** twelve.ux chrome. The mock on /og still wears that date.

**2026-08-15, 4:42 PM ET.** Initial commit — registry, Glass playground, Max fonts, og/kit mocks, built public/r.

**4:44.** Vercel install freeze fix. **4:46.** Production typecheck fix for Glass. **4:58.** Phone playground. **5:15.** Accordion panes + price ribbon. HEAD 8b9773b.

Five Production deploys the same evening. Five commits. One afternoon.

## Why

I already had a visual system. Max. Phi. Catppuccin. It lived on uncap.us and hms as CSS and fonts, not as something you could npx into a fresh app.

I wanted Glass as a file you install, with the real shader and the circle props, not a screenshot of someone else glassmorphism.

I also still have the 2012 chrome in my head. studioTWELVE. twelve.ux. Putting /og and /kit next to the 2026 playground keeps the arc honest — same operator, longer timeline.

So the registry is the portable form. The playground is the proof. The archive is the scar that stayed.
`;


const GETFARMIN_COVER =
  "/blog/getfarmin-farm-equipment-marketplace-scaffold/cover.png";

const GETFARMIN_CONTENT = `![GetFarmin home mock — Find. Buy. Farm.](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/home.png)

## Who

I got tired of watching six-figure iron move on hope and a Facebook comment thread.

Farm equipment is not a $49 SaaS seat. A 2022 John Deere 8R 370 placeholder in this repo lists at **$385,000**. A Case IH 9250 combine sits at **$425,000**. That is not "add to cart and pray." That is escrow, hours, condition enums, oversize permits, and a seller who might be a dealer with a storefront slug.

GetFarmin is for operators who want that marketplace shape on a real stack — Next, Convex, Clerk, Stripe Connect — before they pretend they have 10,000 live listings. Ag buyers and dealers who are done leasing trust from a local classifieds culture. Builders who would rather ship fee constants in a Convex mutation than wait for the perfect deploy key.

If you have ever tried to move a center pivot across state lines with a spreadsheet and a handshake, you are in the room.

## What

I built **GetFarmin** — package name \`getfarmin\`, version **0.1.0**, private under **HurleyUS/getfarmin.com**. Metadata line: *Global Farm Equipment Marketplace*. Hero line: **Find. Buy. Farm.**

Stack facts from the lockfile and tree, not the stale sitrep: **Next.js 16.2.6**, **React 19.2.6**, **Tailwind 4.3**, Bun, **Convex** schema + queries/mutations, **Clerk** auth surfaces, **Stripe** webhook route + Connect escrow scaffolding, Catppuccin Mocha default with green primary, Resend/Sentry/PostHog wired in \`.env.example\`. Thirty-six commits. HEAD \`4b5df30\`.

![Browse mock with placeholder iron](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/browse.png)

Surfaces that exist in \`app/\`: \`/\` marketing, \`/browse\` with URL \`searchParams\` filters and placeholder cards from \`lib/placeholder-data.ts\`, \`/about\`, \`/dashboard\`, \`/listing/new\` multi-step form, \`/dealers/[slug]\`, Clerk sign-in/up catch-alls, \`POST /api/shipping/estimate\`, Stripe webhook route.

Convex tables: \`listings\`, \`categories\`, \`users\`, \`dealerProfiles\`, \`messages\`, \`savedListings\`, \`payments\`. Listing tiers: basic / enhanced / dealer. Conditions: new through salvage. Escrow math in \`convex/payments.ts\`: platform **2.9% + $0.30**, escrow **1.5%**, optional buyer protection **+2%**. Comments say PaymentIntent creation is deferred — schema-ready money path, not a finished Connect onboarding wizard.

Shipping estimator in \`lib/shipping-estimate.ts\`: base **$250**, **$2.10**/mile, **$38**/1000 lb, oversize and expedite flags, honest notes about permits and long-haul variance.

![Dashboard mock — inbox + escrow](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/dashboard.png)

## Where

Code lives at [github.com/HurleyUS/getfarmin.com](https://github.com/HurleyUS/getfarmin.com) — **private**. GitHub homepage points at [getfarmin-com.vercel.app](https://getfarmin-com.vercel.app). At pack time that URL returned **HTTP 500** with \`X-Robots-Tag: index, follow\` (the Aug 8 header fix). This pack does not invent a healthy production story.

Audience sits next to MachineryTrader / TractorHouse energy, with a builder twist: Catppuccin dark-first UI, compound Convex indexes, issue-driven February feature closeout. Sibling operator furniture is present — \`.hustlemc\`, Blacksmith ship workflow, fallow REVIEW, Stripe sanity rule file.

![New listing multi-step mock](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/listing-new.png)

## When

**2026-01-08.** \`8107c34\` Initial commit: Next.js, Convex, Tailwind. Same morning \`f717dcf\` OPPORTUNITIES + homepage. Afternoon \`381035b\` PLAN improvement list. The market thesis lands day one: global farm equipment, used market, listing tiers, escrow, shipping.

**2026-01-31 / 2026-02-05.** Sync. Prod build ready.

**2026-02-06.** \`6f764f9\` upgrade to Next.js 16, React 19. Tailwind v4 globals \`@import\` fix follows.

**2026-02-13.** \`0afe002\` dark mode, Catppuccin theme system, browse/about pages, Convex schema.

**2026-02-21–22.** Standards debt burned down — error/loading/not-found, env validation, Zod validations, providers, schema foreign keys as \`v.id("users")\`, merged fix PRs.

**2026-02-23–24.** The marketplace week. Search and filtering. Clerk buyer/seller dashboard. Listing creation flow. In-app messaging. Stripe Connect + escrow scaffolding. Dealer storefronts + tiers. Convex bootstrap scripts. Heavy-equipment shipping estimate API. Issues **#1–#8** closed with matching PRs.

**2026-05-14–15.** Eleven commits of Blacksmith CI gates, Biome, preflight, deploy URL verification.

**2026-08-08, 06:54 ET.** \`4b5df30\` set X-Robots-Tag to index, follow on Vercel. HEAD. Thirty-six commits total.

**Pack day 2026-09-08.** Draft and assets only. Live preview still 500s. \`sitrep.md\` still claims purpose unclear and last commit February 5 — treat it as drift, not truth.

![Shipping estimate mock](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/shipping-estimate.png)

## Why

I did not want another "agriculture somehow" landing page with emoji tractors.

I wanted fee constants next to listing status enums. I wanted a shipping function that admits a 22-foot load needs permits. I wanted dealer slugs and message threads on the same Convex deployment shape as the browse grid — even while the browse grid still reads placeholder data and the Vercel deployment throws 500s.

So the February issue board became the product: close search, auth, listing form, chat, escrow, dealers, shipping, bootstrap. May hardened the gates. August flipped robots headers on a site that still needs a living Convex URL.

If your marketplace README promises 10,000 listings and your \`payments\` table cannot say \`in_escrow\`, you already know the hole I was staring at.

Would you price a six-figure tractor listing as free basic inventory, or charge the $49 enhanced tier before the first escrow release clears?
`;

const MERCHWINNER_COVER =
  "/blog/merchwinner-pod-course-marketplace/cover.png";

const MERCHWINNER_CONTENT = `![MerchWinner live home — Start Learning / Become an Instructor](/blog/merchwinner-pod-course-marketplace/screenshots/home.png)

## Who

I kept meeting people who wanted Amazon Merch, Etsy POD, and Shopify print-on-demand to pay rent — and who were buying theory courses from people who had not shipped a design in years.

MerchWinner is for aspiring merch sellers who want practitioners. It is for active sellers who will teach if the split and the platform are not a second job. It is for operators who want to see a full Clerk + Convex + Stripe course-marketplace shape on Next.js 16 without pretending the catalog is full.

If you have ever built the checkout before the first SKU, you are in the room.

## What

I shipped **MerchWinner.com** — a user-contributed course marketplace for learning how to sell merch online. Public surfaces: home, \`/courses\` with search/category/sort, course detail + lesson player, \`/instructors\`, \`/about\`. Instructor workspace for create/edit/publish, lesson reorder, earnings, analytics, profile. Student enrollment dashboard. Money path on Stripe: one-time course and bundle checkout, Pro/Unlimited memberships, webhook → Convex purchases/subscriptions, Resend mail for enrollment, invoice, renewal, review reminders.

Stack from the lockfile, not the stale README line: **Next.js ^16.2.6**, **React ^19.2.6**, **Convex ^1.38.0**, **Clerk**, **Stripe ^22.1.1**, **Resend**, PostHog, Sentry, Tailwind v4, Radix, Catppuccin Mocha default. Package **0.1.0**, private under HurleyUS. **86** commits. HEAD \`65c4413\`.

![Live courses page — search UI with empty catalog](/blog/merchwinner-pod-course-marketplace/screenshots/courses-live.png)

Billing facts in \`lib/billing.ts\`: \`PLATFORM_FEE_PERCENT = 20\` (creator net 80%). Plans: Pro **$29/mo** / **$278/yr** (3 courses/month) and Unlimited **$49/mo** / **$470/yr**. Homepage marketing still says “Earn 70% of every course sale.” I would rather name the mismatch than paper it over.

Convex schema covers users (student/instructor/admin), instructorProfiles, courses, lessons, enrollments with progress, subscriptions, coursePurchases, bundlePurchases, payoutRequests, reviews. Eighteen App Router pages. Fourteen API routes. Bun + Biome + ship script.

![About page — practitioner POD curriculum](/blog/merchwinner-pod-course-marketplace/screenshots/about.png)

## Where

Code lives at [github.com/HurleyUS/merchwinner.com](https://github.com/HurleyUS/merchwinner.com) (private). Live site: [www.merchwinner.com](https://www.merchwinner.com). Vercel project URL on the repo homepage field: [merchwinner-com.vercel.app](https://merchwinner-com.vercel.app). Apex redirects to www.

Audience sits next to every POD Discord still arguing Redbubble vs Merch while nobody ships curriculum. Contact in README: michael@hustlelaunch.com. Same operator family as the other HurleyUS Next/Convex products.

![Instructors page — shell loaded, no profiles yet](/blog/merchwinner-pod-course-marketplace/screenshots/instructors-live.png)

## When

**2026-01-08.** \`91c1e8e\` Initial commit: Next.js, Convex, Tailwind. Same day: opportunities doc and homepage pass.

**February.** Next 16 + React 19. Catppuccin dark mode, layout variants, stub \`/courses\` and \`/about\`. Feb 21 standards mega-fix closes a pile of issues — middleware, providers, schema, icons, fonts, email docs.

**March 20–22.** Stripe checkout patterns, instructor profile and earnings, webhook typing. Money enters the building.

**March 25.** Fourteen commits. Resend templates. Phase 2 webhook→email. Phase 3a–3c: instructor course creation, lesson manage UI, student enrollment and lesson player.

**March 26.** Nineteen commits. Phase 4 search/filters/SEO/schema markup. Phase 5 reviews UI + reminders. Phase 6a/6b earnings and analytics merges. Production-ready checklist docs.

**March 27.** Catppuccin unify across the site. Instructor and enrollment CTAs.

**May 13–15.** shipprep standards and a Blacksmith CI/deploy verification flurry.

**2026-08-08, 06:55 ET.** \`65c4413\` set X-Robots-Tag to index, follow on Vercel. HEAD. Eighty-six commits total.

On September 8, 2026 the live \`/courses\` page still reads **“No courses available yet.”** The marketplace shipped. The catalog did not.

![Illustrative instructor earnings mock — 20% platform fee math](/blog/merchwinner-pod-course-marketplace/screenshots/instructor-earnings-mock.png)

## Why

I did not want another “courses coming soon” landing page with a Mailchimp box. I wanted the boring spine: auth roles, course/lesson tables, Stripe sessions, webhooks that enroll, email that confirms, instructor earnings that know the fee, student progress that is not a Google Sheet.

So I compressed the spine across six phases and left the honesty visible: empty catalog, empty instructors grid, README still claiming Next 15.5.6 and Payments N/A while Stripe and Next 16 are in the lockfile. Version 0.1.0. Private on purpose until the first real courses earn the public launch.

If your marketplace admin is prettier than your course list, you already know the hole I was staring at.

What would you publish first on MerchWinner — Amazon Merch niche research, Etsy POD ops, or TikTok ads that actually sell shirts?
`;

const OMNUX_REPORT_COVER =
  "/blog/omnux-report-one-command-diagnostics-redaction/cover.png";

const OMNUX_REPORT_CONTENT = `<!-- Cover: upload og.png to Convex storage; embed storage URLs below after upload. Local refs for draft review. -->

![OMNUX-REPORT OG — one-command diagnostics with consent + redaction](/blog/omnux-report-one-command-diagnostics-redaction/cover.png)

![Honest state — shipped, validated, unfinished named](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/honest-state.png)

## Who

I am the person who already published the Omnux truth table and the omnux-gpu siege wall. Those posts are live. This one is a different room.

This piece is for owners who will file a bug with receipts and refuse to paste a 400 MB journal that still contains a MAC address. For operators who need backlight, WiFi, DRM, speakersafetyd, and sleep lines before the archaeology starts. For SEP/TouchID researchers who need device-tree names and module hints without biometric material. For agent operators who are supposed to produce owner telemetry under the Omnux mandate without turning consent into theater.

If you need a curl install or a truth table, that is the umbrella post. If you need M3 AGX pixels named as a project with acceptance criteria, that is the GPU post. If you need an attachable evidence bundle the owner controls, that is this room.

## What

I shipped **omnux-report** — a MIT Shell tool whose entire job is to make Apple Silicon Omnux machines comparable in an issue tracker without scooping secrets by default.

One command. Offline. Installed system or live USB. Consent summary prints exactly what will be gathered. Redaction is on unless you opt out. The output is a single \`.tar.zst\` (gzip fallback if zstd is missing) plus a SHA256 sidecar. Attach both.

![Collection pipeline — Consent Collect Cap Triage Redact Archive](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/pipeline.png)

The pipeline is boring on purpose:

1. **Consent** — list journal/sysinfo/SEP structure, optional benches, optional ADT helper; show redaction state; wait for \`y\` unless \`--yes\`.
2. **Collect** — sysinfo, severity-scoped logs, SEP structure, optional benchmarks, optional ADT instructions.
3. **Cap** — any single file over 50 MiB keeps its last 50 MiB with a TRUNCATED header so a pathological journal cannot produce an unattachable blob.
4. **Triage** — \`summary.txt\` with PASS / INFO / WARN / FAIL / SKIP per subsystem.
5. **Redact** — MACs to \`XX:XX:XX:XX:XX:XX\`; key=value secret backstops; count written to \`redaction-count.txt\`.
6. **Archive** — deterministic tar (\`--sort=name\`, fixed mtime) compressed; checksum sidecar.

![Bundle schema v1 — logs sysinfo sep benches adt skipped](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/bundle-schema.png)

The schema is documented in \`docs/SCHEMA.md\`. Logs arrive as current boot, previous boot, error, warning — full history is opt-in because long-lived installs turn “helpful” into hundreds of megabytes. Sysinfo covers identity (model, compatible, chip ids), CPU/memory/kernel, package versions and Omarchy markers, device-tree \`/chosen\` **property names only**, block devices without serials, NVMe model+firmware, displays, Type-C roles, scrubbed network, audio/speaker-safety, GPU DRM/EGL state. Benchmarks default to CPU openssl + portable dd probes; glmark2 and vulkaninfo stay opt-in and always sit next to \`benchmarks/context.txt\` so a number without a model/kernel/mesa line is treated as noise.

![Redaction rules — scrubbed, never collected, kept deliberately](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/redaction-rules.png)

Redaction is the product feature, not the apology. Serial numbers, WiFi/Bluetooth keys, NetworkManager secrets, and \`/etc/machine-id\` are never collected. Interface addresses and SSIDs are scrubbed at collection time so a global regex cannot corrupt timestamps. Secret scrubbing matches only \`key=value\` / \`key:value\` forms — journal prose like “Forward Password Requests to Wall” survives. Filesystem UUIDs stay because boot debugging needs them; hostnames stay because owners can edit a bundle before attaching if they care.

The SEP section exists for the TouchID-on-Apple-Silicon research program tracked on omnux-gpu issues #10 and #13. It captures device-tree node names and \`reg\` bytes, \`/dev\` and \`/sys\` bus matches, module and modprobe hints, and firmware identifiers. It does **not** collect enrollment data, biometric templates, keys, tickets, nonces, TSS responses, or FDR dictionaries. Structure that helps match hardware. Nothing that reproduces security state.

\`--adt\` does not dump an Apple Device Tree on the reporting machine. It writes guided instructions for a second host running m1n1’s proxyclient, pre-filled with this machine’s model, plus a scrub checklist before attach to omnux#4.

![Triage vocabulary — PASS INFO WARN FAIL SKIP](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/triage-vocab.png)

Triage is the first screen a bug reader should see: machine Apple-or-fail, DRM render node presence, backlight class, WiFi interface/soft-block, Omarchy release marker, mem_sleep states, speakersafetyd, SEP-named DT nodes. Honest and boring.

On 2026-08-26 this produced a complete redacted 3.5 MB bundle on a real MacBook Pro 16-inch M1 Pro running Omarchy. The same day, \`test/fixture-test.sh\` ran ten checks against a synthetic Apple Silicon sysroot on ordinary Linux — model identity, compatible string, journal skip in fixture mode, triage PASS, ADT helper text, size cap, MAC scrub, secret scrub, prose survival, SHA256 verify. That is the receipt that the pipeline is not “works on my journal.”

What is not done is also named: packaging into the mx-mac live image, glmark2/vulkaninfo validation on machines that actually have them installed, and an owner-facing release. Working tool. Validated. Not finished product marketing.

## Where

It lives where an Omnux or Omarchy Apple Silicon machine — or the live USB — can run a bash script without a network. Fixture mode lives anywhere Linux so CI cosplay is unnecessary for the collectors themselves.

Repo: [michaelmonetized/omnux-report](https://github.com/michaelmonetized/omnux-report). Normative feature spec still points at [omnux#2](https://github.com/michaelmonetized/omnux/issues/2). ADT collection issue: [omnux#4](https://github.com/michaelmonetized/omnux/issues/4). SEP research adjacency: omnux-gpu #10/#13. Parent ship lane: [omnux](https://github.com/michaelmonetized/omnux). GPU siege: [omnux-gpu](https://github.com/michaelmonetized/omnux-gpu).

Local clone used for this pack: \`/home/michael/Projects/omnux-report\` on m1pro16 @ \`f9729a6\`.

## When

**2026-08-26.** Scaffold commit \`1019bda\` — honest state, omnux#2 pointer, layout, offline/consent/evidence principles. Same day: \`aac9244\` lands v0.1.0 — working collectors, triage, redaction, archive. Same day validation: real M1 Pro Omarchy redacted bundle at 3.5 MB; fixture harness ten checks green.

**2026-08-27.** Commit \`f9729a6\` adds the SEP/TouchID evidence collector wired to the omnux-gpu research issues — structure only, secrets excluded by design. Last push \`2026-08-27T18:34:44Z\`.

**2026-09-08.** Content pack drafted. Live omnux and omnux-gpu posts already cover install truth and the AGX wall. This draft stays unique: diagnostics consent and redaction. Still no mx-mac packaging. Still no owner-facing release ceremony.

## Why

Owner telemetry without owner control is just surveillance with a README. I wanted a command that tells you what it will gather before it gathers it. I wanted redaction as the default path so attaching a bug is not a privacy coin-flip. I wanted numbers that only mean something next to model, kernel, and Mesa lines. I wanted SEP research to have evidence without becoming a biometric vacuum. I wanted a fixture that proves the pipeline on machines that are not Apple silicon so the tool does not only exist in folklore.

The Omnux story splits cleanly across three repos: the umbrella ships the install lane and the truth table; omnux-gpu names the driver wall without claiming pixels; omnux-report turns “please attach logs” into a consenting, redacted, checksummed artifact. That is the ask — run the command, read the triage, attach the two files.
`;

const WNC_TOURS_COVER =
  "/blog/wnc-history-tours-booking-shell-before-detail-pages/cover.png";

const WNC_TOURS_CONTENT = `![WNC History Tours homepage mock — Discover the Rich History of Western North Carolina](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/home.png)

## Who

I live in the Blue Ridge ops lane. Visitors want a walking tour, a ghost walk, a cemetery afternoon, or a Cherokee heritage day without bouncing between five operator websites and a generic Viator card. Guides want a place to list and take a booking without building their own Next app.

WNC History Tours is for people hunting history experiences from Asheville to Cherokee — and for the small companies that run those walks.

If you build MarTech, local directories, or Stripe-backed booking surfaces: this post is the field notes on what shipped and what did not.

## What

I built a tour booking platform shell for Western North Carolina history tours.

Stack on the box: **Next.js 16.2.6**, React 19, **Convex**, **Clerk**, Stripe (dependency + env slots), PostHog, Sentry, Resend, Tailwind v4, Bun, Vitest, Vercel config. Repo is private under \`HurleyUS/wnchistorytours.com\`. Package version **0.1.0**. README still says Next 15.5.6 — the lockfile moved on.

![Convex schema — companies, tours, bookings, reviews](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/schema.png)

What exists in code:

- Amber/stone homepage with search form, city chips, category cards, featured tour grid
- Convex tables for \`companies\`, \`tours\`, \`bookings\`, \`reviews\` with search indexes
- Tour queries (featured, search, by company/slug) and booking create/status mutations
- Seed mutation for three demo companies and five tours
- Clerk middleware in \`proxy.ts\` with public matchers for the routes I planned to build
- SEO (\`sitemap.ts\`, \`robots.ts\`), error boundaries, HTTP security headers, Blacksmith/shipprep CI gates

What does **not** exist as \`app/\` routes despite the nav and cards linking to them: \`/tours\`, \`/companies\`, \`/city/*\`, \`/category/*\`, \`/search\`, \`/tour/[company]/[tour]\`, \`/list-your-business\`, booking checkout. No \`components/\` folder. No Stripe checkout route.

Homepage falls back to hardcoded demo tours when Convex queries are still loading or empty. Category counts (24 walking, 12 ghost, …) are UI constants. The seed script drifts from the schema — \`rating\` vs \`averageRating\`, duration type, missing required company fields — so “production readiness” in that commit message is aspirational.

![Declared stack vs actual app tree](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/stack-gap.png)

## Where

Intended host: [wnchistorytours.com](https://wnchistorytours.com). Layout OG, sitemap, and robots all point there. On pack day the domain returned **Cloudflare 526** (origin TLS/unreachable). \`vercel.json\` also sets \`deploymentEnabled\` for \`main\`/\`master\` to **false** — auto-deploy from those branches is off.

Auth path is Clerk. Money path is declared Stripe in \`.env.example\`. Mail is Resend. Errors go to Sentry. Product events go to PostHog. Maps key slot exists for meeting points later.

Audience sits in Western North Carolina heritage tourism and with builders shipping local vertical directories next to products like BestWNC.

## When

**2026-01-08.** Init. Same day: opportunities doc, homepage pass, Convex tour booking MVP (schema + bookings + tours + provider), PLAN updates, \`.env.example\` + seed. Six January commits. The product idea and the shell landed together.

**January 31.** Chore sync.

**February.** Upgrade to Next.js 16 and React 19. Tailwind v4 CSS-first. Clerk middleware and \`cn()\`. Strict TypeScript. Error boundaries. Sitemap and robots. Security headers. Auth check on \`bookings.updateStatus\`. Query \`.take(100)\` bounds. TypeScript fix PRs.

**March.** Vitest smoke coverage. More TS cleanup. Remove GitHub Actions — Vercel called out as CI. ESLint flat config.

**May.** Densest month (15 commits). shipprep standards, Blacksmith CI gate standardization (many near-duplicate gate commits), local preflight, deploy URL and health-check fixes. Platform reliability work while detail pages stay unbuilt.

**2026-08-08 6:55 AM ET.** \`c298e54\` — set \`X-Robots-Tag\` to \`index, follow\` on Vercel. HEAD. Thirty-seven commits on \`main\`.

That is the clock from empty repo to a hardened shell with an unfinished booking funnel.

![Commit journey Jan through Aug](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/journey.png)

## Why

Directories and booking marketplaces fail two ways: vapor landers with no schema, or beautiful CI with no product routes. I did the honest middle — real Convex models and a real lander — then spent spring on Next 16, Clerk, SEO, and Blacksmith while the tour detail and Stripe checkout pages stayed on PLAN.md.

The domain is named. The robots header asks to be indexed. The origin was 526 when I checked. That gap is part of the story.

Sibling context: BestWNC is the broader WNC business directory. This repo is the narrower history-tour vertical. Same region, different job.

If you run walking tours in Asheville or Cherokee, would you list on a WNC-only history board — or is Viator still the only checkout that matters?
`;

const YOURZAXBYS_COVER =
  "/blog/yourzaxbys-franchise-management-platform/cover.png";

const YOURZAXBYS_CONTENT = `![Your ZAXBYS landing hero on Vercel](/blog/yourzaxbys-franchise-management-platform/screenshots/landing.png)

## Who

I kept catching myself watching franchise operators bounce between a POS export, a Steritech PDF, a schedule spreadsheet, and a text thread that somehow became HR.

Not another generic “restaurant dashboard” template with fake charts and a purple sidebar. Not a pitch that says multi-unit without a stores table. I wanted the above-store view and the store-level pain in the same repo family — with real auth, real email, and an honest hole where the custom domain DNS still is not answering from my network.

Your ZAXBYS is for multi-unit Zaxby's owners, above-store folks, and GMs who will sit with a CAP form. Operators who think Clerk + Convex is a product decision, not a tutorial. If you run MarTech by day and still care whether a food-safety observation has a written plan, you are in the room.

## What

I built a franchise management platform as a Next.js app with a marketing shell and a gated dashboard.

Public surface: hero lander, features, pricing, about, testimonials, blog stub, contact, privacy. Clerk sign-in / sign-up. CTAs now point at \`/signup\` — that wiring was a March 1 fix, not day-one magic. Pricing page sells **Starter $99/mo**, **Professional $199/mo**, **Enterprise Custom**, plus add-ons ($25 per extra location, analytics, integrations setup, priority support). FinalCTA still shows a placeholder \`(555) 123-ZAXBYS\`. I am not going to pretend that is a real phone bank.

![Pricing lander on Vercel](/blog/yourzaxbys-franchise-management-platform/screenshots/pricing.png)

Private surface: \`/dashboard\` with stores, employees, schedule, audits, reports, settings. Convex schema is the spine — \`employees\` (roles from \`franchise_owner\` down to \`team_member\`, \`eid\` like \`ZAX######\`, **\`ssnLast4\` only**), \`stores\`, \`schedules\` + \`shifts\`, \`caps\` (food safety / RER with observation → solution → plan), \`audits\` (Steritech, health department, internal, RER), \`salesData\`, \`feedback\`, \`notifications\`. Resend routes send confirmation, invite, and notification mail from \`notify@yourzaxbys.com\`. Invite copy still names **Zaxby's Waynesville, NC** — the sibling store product is not theoretical.

Stack on disk: Next **16.1.6**, React 19, Convex, Clerk, Radix + Tailwind, Sentry (\`hustle-launch\` / \`shipthing\`), PostHog provider, Bun lockfile, package **\`zaxbys-franchise-management-platform\` \`1.0.0\`**. \`proxy.ts\` is the Next 16 rename of middleware. Blacksmith \`ship.yml\` pulls Vercel env and Convex deploy keys.

![Illustrative dashboard composite from schema + routes](/blog/yourzaxbys-franchise-management-platform/screenshots/dashboard-composite.png)

Honesty checks: the lander brags \`500+\` locations / \`25%\` cost reduction / \`99.9%\` uptime / \`4.9★\`. Those strings live in \`app/page.tsx\`. They are not a warehouse receipt. Unauthenticated \`/dashboard\` on the Vercel alias returned 404 at pack time — no logged-in screenshot. README still tells you to clone \`michaelmonetized/www.yourzaxbys.com\`; the GitHub org is **HurleyUS**. AUTOPSY.md from February roasted a missing navbar and missing SEO files; HEAD has \`manifest.ts\`, \`sitemap.ts\`, \`robots.ts\`. Treat the autopsy as a scar, not the current build report.

## Where

Code: [github.com/HurleyUS/www.yourzaxbys.com](https://github.com/HurleyUS/www.yourzaxbys.com). Public. Empty description. Empty topics. Zero stars.

Live alias that answered HTTP 200 for this pack: [wwwyourzaxbyscom.vercel.app](https://wwwyourzaxbyscom.vercel.app). GitHub homepage field points there. Custom domain \`www.yourzaxbys.com\` did **not** resolve from the pack hosts — NXDOMAIN. Sibling store app: private [waynesville.yourzaxbys.com](https://github.com/HurleyUS/waynesville.yourzaxbys.com) with its own Vercel alias.

The audience sits next to every franchise thread that wants one login for labor, audits, and CAP follow-ups, and next to every builder who knows a SaaS pricing page without a protect() boundary is cosplay.

## When

**2025-03-07 → 03-09.** First \`init\` commits under Michael Monetized. Fonts. Style passes. The classic “we gotta push to main to see minor changes yuck” loop. Repo created on GitHub 2025-03-08.

**2025-10-02.** Another \`init\` — reboot marker on the timeline.

**2025-10-15.** The YOLO pivot. Commit message literally: letting CodeRabbit and GPT5 duke out a refactor into a new project idea. Missing deps. Bun trusts. “Updated everything YOLO.” “says ready for prod :shrug:” Accessibility vibing. That afternoon is when the franchise platform stopped being a mood and became a tree.

**2025-10-16.** Marketing pages land.

**2025-12-29.** CVE dependency passes.

**2026-01-08.** PLAN.md — multi-store dashboard, unified reporting, document library, the above-store wishlist.

**2026-01-31.** Big \`chore: sync all changes\`.

**2026-02-04.** \`Add complete franchise management dashboard\` — the product-shaped commit.

**2026-02-06 → 02-21.** Next 16 \`proxy.ts\` rename. Security: SSN off the wire, \`ssnLast4\` in schema, encrypt-at-rest notes in changelog, email domain / EID standardization (#11, #12).

**2026-02-28 → 03-09.** TypeScript fix PR. Strip thirteen console statements. Wire CTAs to \`/signup\`. Bump Next to **16.1.6** for CVEs (#21).

**2026-05-14.** Blacksmith CI gates standardized across a stack of commits. Lazy-init Resend clients. Skip Convex provider when public env is missing so the marketing shell does not die without a deployment.

**2026-08-08.** \`fix: set X-Robots-Tag to index, follow on Vercel\`. HEAD \`705473f\`. Forty-six commits on the ledger. Pack day is September 8, 2026.

That is the journey from font fiddling to a versioned franchise ops platform with a live Vercel alias and a custom domain that still needs DNS honesty.

## Why

I did not want the store and the above-store to keep living in different tabs forever.

So I put employees, stores, schedules, CAPs, and audits in one Convex schema. I put Clerk in front of the dashboard and Resend on the invite path. I left the marketing stats labeled as marketing. I left the Waynesville invite copy as a breadcrumb to the sibling store app. I set package **1.0.0** knowing “1.0” here means the platform shape shipped — not that every PLAN.md checkbox is green.

sitrep still says WIP and HIGH client priority. ROADMAP still wants owner UAT. That is fine. The repo is not empty, not a junk stub, and not a logo dump. It is a franchise ops bet with receipts in git.

If your current “franchise tool” folder has a pricing page and no \`ssnLast4\` decision, or a dashboard route and no protect middleware, you already know which hole I was staring at.

Would you fix \`www.yourzaxbys.com\` DNS and run a real owner pilot next — or delete the fake 500+ lander stats before anyone quotes them as proof?
`;

const MOCKUP_GALLERY_COVER =
  "/blog/mockup-gallery-ten-industry-cold-outreach/cover.png";

const MOCKUP_GALLERY_CONTENT = `![Web Design Portfolio chrome with Prestige luxury real estate tab](/blog/mockup-gallery-ten-industry-cold-outreach/screenshots/gallery-home.png)

## Who

I sell web design the old way sometimes. Email. Industry angle. Proof.

Prospects do not want a Figma file. They want to see what *their* kind of site could look like — real estate, HVAC, SaaS, a restaurant booker — without waiting on a custom sprint.

mockup-gallery is for that motion. Local operators. SMB owners. Anyone I can send a link and a short note. Frontend people who care how a sales kit is actually built under Next 16 and Tailwind 4. Not the twelveux registry crowd. Not a single vertical client delivery.

## What

I built a public Next.js gallery. Package name \`design-mockups\`. Version **1.0.0**. React 19. Tailwind 4. Bun lockfile. Lucide icons.

One client page. Sticky dark portfolio chrome. Ten tabs. Each tab mounts a full-page industry lander under \`app/components/mockups/\`.

The brands on the tabs: **Prestige**, **Velocity Motors**, **Nexus Consulting**, **ARIA**, **ZENITH**, **HandyPro**, **Analytics Pro**, **LearnHub**, **TableHub**, **VoyageNow**.

Roughly twenty-six hundred lines of mockup TSX. No per-mockup routes — tab state only. README ships a cold-outreach template (sign-off in-file still says “—Rusty”).

Observability landed later: Sentry, PostHog, Fallow, Blacksmith \`ship.yml\`.

![Ten industry mockup cards](/blog/mockup-gallery-ten-industry-cold-outreach/screenshots/ten-mockups-grid.png)

## Where

Live on Vercel: https://mockup-gallery-nu.vercel.app — at pack time \`X-Robots-Tag: index, follow\`.

Repo: https://github.com/HurleyUS/mockup-gallery

Contact chrome: hello@hurleyus.com · +1 (828) 593-1935

![HandyPro home services mockup](/blog/mockup-gallery-ten-industry-cold-outreach/screenshots/home-services.png)

## When

**2026-03-28, 7:21 PM ET.** Ten mockups land. Same evening Tailwind v4 / PostCSS / Vercel CSS fight through \`61dda20\`.

**2026-05-14 afternoon.** Blacksmith CI standardization + Fallow/FReview scaffolding + formatter green.

**2026-08-08, 6:55 AM ET.** HEAD \`21f44ec\` — robots \`index, follow\`. Twenty commits. Package 1.0.0.

## Why

I needed a link for industry email without a bespoke repo per vertical. Ten tabbed landers is that link.

Tailwind v4 pain is part of the truth. May CI/observability is the operator habit. August robots flip says the page is meant to be found.

What industry tab would you send first?
`;

const S12IN_COVER =
  "/blog/s12-in-url-shortener-file-hosting/cover.png";

const S12IN_CONTENT = `![s12.in landing — Short links, powerful results](/blog/s12-in-url-shortener-file-hosting/screenshots/landing.png)

## Who

I got tired of leasing short links from tools that treat a redirect like a subscription upsell.

Operators — marketers, founders, agencies, anyone pasting campaign URLs into SMS and decks — need a domain they own, a dashboard that lists what they created, and click facts that survive the redirect. Developers already on Convex and Clerk do not need a fifth SaaS login for “paste URL, get code.”

s12.in is for that seat. If you live in MarTech, ship Next.js on Vercel, or just want \`s12.in/abc\` instead of a twenty-character tracking URL, you are in the room.

## What

I shipped a URL shortener and file host at [s12.in](https://s12.in).

Stack facts, not pitch deck: **Next.js 16.1.6** (App Router, Turbopack) on Vercel, **React 19.2**, **Convex** for links/files/clicks/users plus \`_storage\` uploads, **Clerk** for auth, **Tailwind CSS v4**, Radix primitives, Resend in the lockfile, Biome + oxlint + tsgo. Package name \`s12\`, version **0.1.0**, packageManager **bun@1.3.1**. Repo is **private** under HurleyUS.

![Dashboard — shorten, upload, manage](/blog/s12-in-url-shortener-file-hosting/screenshots/dashboard.png)

Paste a long URL on the homepage or dashboard. Convex \`links.create\` issues a short code (optional \`customCode\` / \`password\` / \`expiresAt\` exist on the schema; the public form only sends \`url\` + optional \`userId\`). \`app/[code]/route.ts\` resolves the code, parses user-agent, reads Vercel geo headers, hashes the IP with SHA-256 + a salt (16 hex chars), fires \`recordClick\` without blocking, then **302**s. Files take the same path: viewable MIME types redirect to the Convex storage URL; others return an attachment stream.

Dashboard tabs list your links and files with copy/delete. Click and download counters are denormalized on the row. \`getAnalytics\` can roll up by day/country/browser/device/referrer — charts are not on the dashboard yet.

A Manifest V3 Chrome extension scaffold lives under \`extension/\` and posts to \`/api/shorten\` with CORS. Icon PNGs are still marked \`ICONS_NEEDED.md\` (SVG only in tree).

Honesty, because operators smell it: the hero still prints **10M+ / 50K+ / 99.9%** as static JSX. The live Clerk publishable key I hit was **pk_test** on \`*.clerk.accounts.dev\`. README still names PostHog and Sentry; those packages were removed Feb 21. Footer GitHub still points at \`michaelmonetized/s12.in\` while the working private remote is **HurleyUS/s12.in**. Schema \`users.plan\` free|pro|team is ahead of any billing UI.

![Redirect pipeline](/blog/s12-in-url-shortener-file-hosting/screenshots/redirect-pipeline.png)

## Where

Product: [s12.in](https://s12.in) (apex redirects toward www). Vercel project alias on the GitHub homepage field: [s12-in.vercel.app](https://s12-in.vercel.app). Routes that matter: \`/\`, \`/dashboard\`, \`/sign-in\`, \`/sign-up\`, \`/privacy\`, \`/terms\`, \`/refunds\`, \`/api/shorten\`, \`/[code]\`.

Code: [github.com/HurleyUS/s12.in](https://github.com/HurleyUS/s12.in) — private, no topics, no license file, no tagged releases. Deploy path is Vercel continuous with a Blacksmith \`ship.yml\` gate. Local path: \`bun install\`, \`bunx convex dev\`, \`bun dev\`.

Audience sits next to every “just use Bitly” thread and every Convex starter that never grew a redirect route.

![Chrome extension scaffold](/blog/s12-in-url-shortener-file-hosting/screenshots/extension.png)

## When

**2026-01-08.** Initial commit: Next.js, Convex, Tailwind. Same day: OPPORTUNITIES.md and homepage improvements; PLAN.md improvement list. Early docs still daydream about a CDN — the product that shipped is the shortener + files.

**2026-01-31 → 02-05.** Sync. Tailwind v4 \`@import\`. Prod build ready.

**2026-02-06.** The spine. Core URL shortening. Upgrade to Next.js 16 and React 19; middleware renamed toward \`proxy.ts\` (and briefly back — Next’s naming war). Convex backend configured and deployed. Clerk auth keys landed.

**2026-02-11.** Dashboard UI improvements — links/files mental model.

**2026-02-15–21.** Docs say \`proxy.ts\`. Footer gets real social URLs. Unused \`posthog-js\` and \`@sentry/nextjs\` leave the lockfile.

**2026-02-27.** Security headers in \`next.config.ts\`. \`sitemap.ts\` / \`robots.ts\`. Error boundaries. Auth checks on links and files mutations.

**2026-03-23.** PR #23 strips \`console.error\` noise.

**2026-05-14–15.** Blacksmith CI standardized. Providers tolerate missing Clerk keys so builds do not die. Deploy URL / health-check fixes.

**2026-08-08.** HEAD \`d6c074f\` — \`vercel.json\` sets \`X-Robots-Tag: index, follow\`. Thirty-eight commits on the clock.

## Why

A short link you do not control is a tax with a dashboard skin. I wanted the domain, the Convex tables, and the redirect that writes analytics before the visitor leaves — on the same Clerk identity I already use everywhere else.

So I put shortening and file hosting on \`s12.in\`, recorded clicks with geo and device fields, and kept shipping until CI and robots headers stopped being the embarrassment.

It is still 0.1.0. Custom codes, password gates, plan limits, and analytics charts sit in schema or queries waiting for UI. Clerk on the observed deploy is still test-mode. That is fine to say out loud. The redirect path and the dashboard list already do the job a rented shortener charges monthly for.

If your current short links cannot show you country and device without opening another product, you already know the hole I was staring at.

What would you put on \`s12.in/yourcode\` first — the campaign URL, the PDF, or the deck you keep resending as a thirty-line Google Drive link?
`;

const THENATIONALNC_COVER =
  "/blog/thenationalnc-live-rss-before-bias-ai/cover.png";

const THENATIONALNC_CONTENT = `![The National NC homepage — LIVE Latest NC News](/blog/thenationalnc-live-rss-before-bias-ai/screenshots/home-live.png)

## Who

I got tired of opening five tabs to see how the same North Carolina story landed in Charlotte, Raleigh, and the wire services — then pretending I had “read around.”

Most “balanced news” products either editorialize or hide the sausage. I wanted a pipe: aggregate first, label leanings when we can prove them, compare coverage when the model earns the pixel.

The National NC is for NC locals and remote watchers who want AP, Reuters, and regional headlines in one dark UI — and for builders who will tolerate an honest placeholder where the AI comparison card still says “coming.”

If you ship Next + Convex + Clerk and care about media literacy without a cable-news costume, you are in the room.

## What

Live at [thenationalnc.com](https://www.thenationalnc.com/). Private repo [HurleyUS/thenationalnc.com](https://github.com/HurleyUS/thenationalnc.com). Package **0.1.0**, Bun, Next.js **16.2.6**, React 19, Tailwind 4, Catppuccin Mocha by default.

Stack in the lockfile: Convex, Clerk, PostHog, Sentry, Resend, Radix, lucide, next-themes, Vitest. Payments README still says N/A; freemium (ad-free / advanced comparison) is in the opportunities doc, not a Stripe catalog.

![News feed — Live / Editorial](/blog/thenationalnc-live-rss-before-bias-ai/screenshots/news.png)

What actually works today:

- **\`GET /api/news\`** pulls Google News RSS — AP site query, Reuters site query, NC \`when:3d\` — parses items, filters with 30+ NC city/region/team keywords, dedupes by title similarity, caches **15 minutes** in process memory.
- Homepage embeds a **LIVE** feed with source tabs (All / AP / Reuters / NC News) and refresh.
- \`/news\` defaults to Live; Editorial tab still serves eight demo NC articles with Left / Center / Right badges.
- \`/news/[id]\` renders demo content + related sidebar + an **AI comparison placeholder** — not a live model call.
- Convex \`schema.ts\` defines articles, sources, comparisons, categories (optional embeddings). Deployment not initialized; demo data still wins.

On 2026-09-08 the live API returned **50** NC-relevant headlines in one sample (WXII, Citizen Times, Carolina Journal, WRAL, ABC11, NYT, …). AP/Reuters tabs can show zero when those fetches abort — 8s timeout per feed, independent failure.

![About — mission and L/C/R source lists](/blog/thenationalnc-live-rss-before-bias-ai/screenshots/about.png)

## Where

Public product: [www.thenationalnc.com](https://www.thenationalnc.com/). Vercel alias \`thenationalnc-com.vercel.app\`. Routes: \`/\`, \`/news\`, \`/news/[id]\`, \`/about\`, \`/api/news\`. Robots allow site, disallow \`/api/\`. Sitemap is thin (homepage-weighted) as of last deploy.

Code stays private under HurleyUS. Host Vercel; Blacksmith/prebuilt CI path; \`vercel.json\` disables git auto-deploy on \`main\` and sets \`X-Robots-Tag: index, follow\`.

## When

**2026-01-08.** Scaffold Next + Convex + Tailwind. PLAN and OPPORTUNITIES spell the bias-comparison dream before a single feed parses.

**2026-02-06–08.** Next 16.1.6, Tailwind v4 CSS import fix, wire dead homepage buttons, yank Clerk off the homepage when env keys are missing.

**2026-02-13.** The real jump: Catppuccin dark mode, shared layout, demo news + article pages, Convex schema — and **live NC feeds** through Google News RSS (\`44dfae3\`). That is when the site stopped being a brochure.

**Late February.** Clerk middleware, error boundaries, sitemap/robots, security headers, console → Sentry cleanup.

**March.** Vitest smoke coverage.

**May.** shipprep / Blacksmith CI standardization and deploy URL verification — lots of “Standardize Blacksmith CI gates,” little product surface change.

**2026-08-08.** HEAD \`bfb6723\` — robots index/follow header on Vercel. Thirty-three commits on the clock.

## Why

Bias detection without articles is a slide deck. I wanted the NC headline pipe in production first — cache, filters, source badges, dark UI — so when OpenRouter (or whatever) comparison lands, it has real URLs to argue about.

The gap is intentional and visible: leaning badges on demos, placeholder comparison card, Convex not live yet. Better than fake AI chrome.

When the comparison model finally ships, which NC story do you want side-by-side first — legislature, weather disaster, or Carolina basketball?
`;

const ILEAGUE_COVER =
  "/blog/ileague-golf-patreon-meets-18birdies/cover.png";

const ILEAGUE_CONTENT = `![iLeague.golf homepage mock — Patreon meets 18birdies, Top 54 qualify for iTour](/blog/ileague-golf-patreon-meets-18birdies/screenshots/home.png)

## Who

I build products in public for operators, not for pitch decks. Golf creators already duct-tape a scorecard app to a Patreon to a tip jar. Fans already bounce between three tabs to follow a round and pay for the good stuff.

iLeague.golf is for those creators and those fans — and for anyone shipping a Bun monorepo that has to hold a Next.js web app, an Expo companion, and a Convex backend without lying about what is finished.

If you care about creator-economy plumbing, Stripe tier math, or how a generic “influencer” scaffold gets rebranded into a sport vertical: this is the field notes.

## What

I shipped a golf creator platform under \`HurleyUS/ileague.golf\`.

The README line is blunt: **Patreon meets 18birdies**. The live lander says the same badge, then: **Where Golf Creators Build Empires**. Track rounds. Build a following. Get paid through subscriptions and tips. **Top 54** creators qualify for [iTour.golf](https://itour.golf). Winners aim at iConference.

Stack on the box: **Next.js 15.5.9**, React 18.3.1, **Convex**, **Clerk**, **Stripe**, PostHog, Sentry, Resend, Tailwind v4, Bun workspaces, Expo 52 mobile, Phosphor icons via react-icons, Vercel. Package version **1.0.0**. Repo is private. Site is public at [ileague.golf](https://ileague.golf).

![Creator profile mock — followers, subscribers, earnings, content grid](/blog/ileague-golf-patreon-meets-18birdies/screenshots/creator-profile.png)

Monetization is not a slide. It is \`apps/web/src/lib/billing.ts\`:

- Platform fee **15%**
- Tip presets **$5 / $10 / $20 / $50 / $100**
- Suggested creator tiers — Bronze $4.99, Silver $9.99, Gold $24.99 monthly (yearly suggested too)
- Real tiers live in Convex \`subscriptionTiers\` and check out through dynamic Stripe \`price_data\` (web API + Convex actions)

Content model covers video, shorts, images, links, text, and **round recaps** tied to scorecards. Visibility: public / followers / subscribers. Courses, course reviews, rounds (FIR/GIR/putts), standings, leagues, notifications — all in \`convex/schema.ts\`.

What is also true: the dashboard still says **influencers**. Explore still calls \`getInfluencers\`. The README still says **Top 36** while the live hero says **Top 54**. Production HTML still loads Clerk **\`pk_test\`** from a \`*.clerk.accounts.dev\` instance. The scorecard schema is ahead of the hole-entry UI. That is the product, not a footnote.

![Billing mock — Bronze / Silver / Gold + tip presets](/blog/ileague-golf-patreon-meets-18birdies/screenshots/billing-tiers.png)

## Where

It runs on Vercel against Convex. Auth is Clerk. Money is Stripe. Mail is Resend. Errors go to Sentry. Product events go to PostHog. Mobile is Expo with EAS configs and placeholder Apple submit IDs.

Surfaces that matter:

- Public lander — emerald/slate hero, feature grid, creator/fan columns, ecosystem footer
- Auth + onboarding — Clerk sign-in/up, role/profile setup
- App shell — dashboard, explore, leagues, notifications
- Creator profile — \`/creator/[id]\` with hero, featured courses, content grid
- Payments — \`/api/stripe/checkout\`, portal, webhook; Convex \`/stripe-webhook\`

Audience sits with golf creators, golf fans, and builders watching a sport vertical on a creator-economy stack. Sibling properties: iTour.golf and iConference.golf under the HurleyUS lane.

![Scorecard / schema mock — hole-by-hole model vs missing UI](/blog/ileague-golf-patreon-meets-18birdies/screenshots/scorecard.png)

## When

**2026-01-09.** Initial monorepo — web + mobile. Convex stubs. React 19 downgraded to 18 for Clerk/Convex. Vercel monorepo config. First production deploy on a hustle-launch Vercel URL. CHANGELOG also remembers the earlier \`michaelmonetized/ileague-app\` GitHub link.

**January 31.** Chore sync.

**February 4.** Mobile leagues pushed toward Convex. EAS config. Roadmap honesty about hardcoded mobile screens.

**February 11.** HurleyUS repo created. Golf schema and plan. Golf-focused homepage, header, footer, Convex functions. This is the rebrand day — influencer scaffold becomes iLeague.golf.

**February 12–28.** Stripe API version bump. Search indexes. Metadata rewritten for golf. Golf category. lucide → react-icons. Root \`/convex\` consolidation. CI experiments. Mobile TypeScript cleanup. Vercel as the only CI/CD.

**March.** Security headers. Middleware runtime fights. **www vs apex redirect loop** — normalize middleware, dual aliases, then disable middleware so Vercel stops bouncing. robots.txt, sitemap, trending creators carousel. Stripe checkout patterns standardized. **Creator profile page** ships. Dashboard starts showing real follower/subscriber/earnings stats. Convex package versions aligned.

**May 14–15.** Blacksmith CI gate spam, then removed.

**May 21.** Production Convex crash fix. Missing creator queries for the lander and profile pages. Stripe/Resend factories so deploy analysis does not need live keys. CSP \`worker-src\`. CHANGELOG **1.0.4**.

**June 22.** Nightly commits.

**August 8, 6:55 AM ET.** HEAD \`508df8e\` — set \`X-Robots-Tag\` to \`index, follow\` on Vercel. Fifty-four commits on \`main\`.

**September 8 pack day.** Live site returns 200. Robots tag present. Clerk still on test keys. Draft only.

![Ecosystem mock — iLeague → iTour → iConference](/blog/ileague-golf-patreon-meets-18birdies/screenshots/ecosystem.png)

## When (clock)

Fifty-four commits. January 9 to August 8. HEAD \`508df8e\`. Private monorepo. Public emerald lander.

## Why

Creator tools fail in two directions: beautiful landers with no money path, or Stripe dashboards with no sport-specific object model. I wanted both — scorecards that can become content, tiers that can become iTour qualification, tips that are not a third-party link-in-bio.

I also refused to pretend the rebrand was complete. Influencer function names, Top 36 vs Top 54, and \`pk_test\` on a real domain are operator signals. They tell you where the product still is.

The ecosystem bet is explicit: iLeague feeds iTour feeds iConference. This pack is only the first node.

If you create golf content today, what would you rather ship next on iLeague — a real hole-by-hole entry flow, or flipping Clerk to live keys so the first paying subscriber is not on test mode?
`;

export const staticPosts: StaticPost[] = [
  {
    _id: "static:yourzaxbys-franchise-management-platform",
    title: "Your ZAXBYS: I built a franchise ops platform so the store and the above-store stop living in different spreadsheets",
    slug: "yourzaxbys-franchise-management-platform",
    excerpt:
      "I shipped Your ZAXBYS as a Next.js 16 + Convex + Clerk franchise management platform — employees, stores, schedules, CAPs, audits — with a public marketing lander and a private dashboard, package 1.0.0, 46 commits, HEAD 705473f.",
    content: YOURZAXBYS_CONTENT,
    coverImage: YOURZAXBYS_COVER,
    tags: [
      "yourzaxbys",
      "zaxbys",
      "franchise",
      "nextjs",
      "convex",
      "clerk",
      "resend",
      "sentry",
      "martech",
      "ops",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T01:40:00Z"),
    readingTime: 5,
  },
  {
    _id: "static:mockup-gallery-ten-industry-cold-outreach",
    title: "mockup-gallery: I shipped 10 industry mockups as a cold-outreach portfolio",
    slug: "mockup-gallery-ten-industry-cold-outreach",
    excerpt:
      "I stood up mockup-gallery — ten conversion-focused industry landers in one tabbed Next.js 16 gallery for HurleyUS cold outreach. Live on Vercel. Tailwind v4 fight, then Blacksmith/Fallow/Sentry/PostHog, then index,follow.",
    content: MOCKUP_GALLERY_CONTENT,
    coverImage: MOCKUP_GALLERY_COVER,
    tags: [
      "mockup-gallery",
      "hurleyus",
      "cold-outreach",
      "web-design",
      "nextjs",
      "tailwind",
      "vercel",
      "portfolio",
      "martech",
      "conversion",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T01:30:00Z"),
    readingTime: 2,
  },
  {
    _id: "static:s12-in-url-shortener-file-hosting",
    title: "s12.in: I shipped a short domain that tracks clicks and hosts files",
    slug: "s12-in-url-shortener-file-hosting",
    excerpt:
      "I built s12.in — Next.js 16 + Convex + Clerk — so a four-character domain can shorten URLs, host files, and record click analytics without renting another Bitly seat.",
    content: S12IN_CONTENT,
    coverImage: S12IN_COVER,
    tags: [
      "s12.in",
      "url-shortener",
      "file-hosting",
      "convex",
      "clerk",
      "nextjs",
      "analytics",
      "vercel",
      "chrome-extension",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T01:20:00Z"),
    readingTime: 4,
  },
  {
    _id: "static:thenationalnc-live-rss-before-bias-ai",
    title: "The National NC: live NC news feeds before the bias AI ships",
    slug: "thenationalnc-live-rss-before-bias-ai",
    excerpt:
      "I shipped The National NC as a Catppuccin dark Next.js aggregator — Google News RSS for AP/Reuters/NC, 15-minute cache, leaning badges on editorial demos. Comparison AI and Convex still ahead.",
    content: THENATIONALNC_CONTENT,
    coverImage: THENATIONALNC_COVER,
    tags: [
      "thenationalnc",
      "north-carolina",
      "news-aggregator",
      "media-bias",
      "rss",
      "nextjs",
      "convex",
      "clerk",
      "catppuccin",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T01:10:00Z"),
    readingTime: 3,
  },
  {
    _id: "static:ileague-golf-patreon-meets-18birdies",
    title: "iLeague.golf: I built Patreon meets 18Birdies for golf creators — and left Clerk on pk_test",
    slug: "ileague-golf-patreon-meets-18birdies",
    excerpt:
      "iLeague.golf is my golf creator economy — Next.js 15, Convex, Clerk, Stripe, Expo. Scorecards, creator tiers, tips, Top 54 → iTour. Live domain, private HurleyUS monorepo, 54 commits, production still on Clerk test keys.",
    content: ILEAGUE_CONTENT,
    coverImage: ILEAGUE_COVER,
    tags: [
      "ileague",
      "ileague-golf",
      "golf",
      "creator-economy",
      "patreon",
      "18birdies",
      "stripe",
      "convex",
      "clerk",
      "nextjs",
      "expo",
      "itour",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T01:00:00Z"),
    readingTime: 4,
  },

  {
    _id: "static:getfarmin-farm-equipment-marketplace-scaffold",
    title: "GetFarmin: I scaffolded a farm equipment marketplace with escrow math first",
    slug: "getfarmin-farm-equipment-marketplace-scaffold",
    excerpt:
      "I built GetFarmin — a Next.js 16 + Convex + Clerk farm equipment marketplace — with listing search, Stripe Connect escrow fee math, dealer storefronts, messaging, and a heavy-equipment shipping estimator before the live Vercel deploy stopped 500ing.",
    content: GETFARMIN_CONTENT,
    coverImage: GETFARMIN_COVER,
    tags: [
      "getfarmin",
      "farm-equipment",
      "marketplace",
      "nextjs",
      "convex",
      "clerk",
      "stripe-connect",
      "escrow",
      "agriculture",
      "martech",
      "catppuccin",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T00:50:00Z"),
    readingTime: 4,
  },
  {
    _id: "static:merchwinner-pod-course-marketplace",
    title: "MerchWinner: I shipped a POD course marketplace before the catalog had courses",
    slug: "merchwinner-pod-course-marketplace",
    excerpt:
      "I built MerchWinner.com — a Next.js 16 + Convex + Clerk + Stripe course marketplace for selling merch online — through six phases and 86 commits. Live catalog still says no courses available yet.",
    content: MERCHWINNER_CONTENT,
    coverImage: MERCHWINNER_COVER,
    tags: [
      "merchwinner",
      "print-on-demand",
      "course-marketplace",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "resend",
      "catppuccin",
      "martech",
      "pod",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T00:40:00Z"),
    readingTime: 3,
  },
  {
    _id: "static:omnux-report-one-command-diagnostics-redaction",
    title: "omnux-report: I shipped one-command diagnostics that refuse to scoop your secrets",
    slug: "omnux-report-one-command-diagnostics-redaction",
    excerpt:
      "omnux-report is the offline diagnostics .tar.zst + SHA256 for Omnux on Apple Silicon — consent first, redaction default, SEP structure only. Validated on a real M1 Pro Omarchy box. Not install. Not GPU pixels.",
    content: OMNUX_REPORT_CONTENT,
    coverImage: OMNUX_REPORT_COVER,
    tags: [
      "omnux-report",
      "omnux",
      "asahi",
      "apple-silicon",
      "diagnostics",
      "redaction",
      "telemetry",
      "sep",
      "touchid",
      "linux",
      "omarchy",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T00:30:00Z"),
    readingTime: 6,
  },
  {
    _id: "static:wnc-history-tours-booking-shell-before-detail-pages",
    title: "WNC History Tours: I shipped the booking shell before the tour pages existed",
    slug: "wnc-history-tours-booking-shell-before-detail-pages",
    excerpt:
      "WNC History Tours is my Western North Carolina history-tour directory — Next.js 16, Convex, Clerk, Stripe deps. Homepage + schema + Blacksmith CI shipped; tour detail and checkout still missing. Domain answers Cloudflare 526.",
    content: WNC_TOURS_CONTENT,
    coverImage: WNC_TOURS_COVER,
    tags: [
      "wnc-history-tours",
      "western-north-carolina",
      "asheville",
      "tour-booking",
      "local-directory",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "martech",
      "heritage-tourism",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T00:20:00Z"),
    readingTime: 4,
  },

  {
    _id: "static:hms-hustle-management-system-live-editor",
    title: "HMS: I replaced WordPress + Elementor with a live site that is the editor",
    slug: "hms-hustle-management-system-live-editor",
    excerpt:
      "I built HMS — Hustle Management System — so pages, blog, shop, and blueprints are block trees on Vite+ + Convex + Clerk. Append ?edit=1. The public site is the editor.",
    content: HMS_CONTENT,
    coverImage: HMS_COVER,
    tags: [
      "hms",
      "hustle-management-system",
      "page-builder",
      "convex",
      "clerk",
      "vite-plus",
      "wordpress-alternative",
      "elementor",
      "woocommerce",
      "martech",
      "blocks",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T00:10:00Z"),
    readingTime: 4,
  },
  {
    _id: "static:twelveux-hosted-shadcn-registry-glass",
    title: "twelveux: I hosted a shadcn registry and shipped Glass in one afternoon",
    slug: "twelveux-hosted-shadcn-registry-glass",
    excerpt:
      "I stood up twelveux — a hosted shadcn registry with Max, a phi Catppuccin theme, and pen.dev Glass. Playground on Vercel. Five commits. Same day.",
    content: TWELVEUX_CONTENT,
    coverImage: TWELVEUX_COVER,
    tags: [
      "twelveux",
      "shadcn",
      "glass",
      "webgl",
      "nextjs",
      "catppuccin",
      "max",
      "martech",
      "registry",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T00:00:00Z"),
    readingTime: 3,
  },

  {
    _id: "static:best-jeep-decals-convex-stripe-storefront",
    title: "Best Jeep Decals: I shipped a dark-first vinyl storefront for Jeep identity",
    slug: "best-jeep-decals-convex-stripe-storefront",
    excerpt:
      "Private Next.js 16 Jeep vinyl e-commerce \u2014 Convex catalog, Clerk auth, Stripe checkout, wishlist, reviews. Ninety-nine commits from Create Next App to X-Robots-Tag.",
    content: BESTJEEP_CONTENT,
    coverImage: BESTJEEP_COVER,
    tags: [
      "best-jeep-decals",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "ecommerce",
      "jeep",
      "vinyl-decals",
      "martech",
      "hustle-launch",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T23:50:00Z"),
    readingTime: 6,
  },
  {
    _id: "static:sonnys-shining-rubber-hose-beat-em-up",
    title: "Sonny's Shining: I wrote a rubber-hose beat-em-up tragedy before I picked an engine",
    slug: "sonnys-shining-rubber-hose-beat-em-up",
    excerpt:
      "I shipped Sonny's Shining as a Fleischer-noir beat-em-up bible \u2014 GDD, novel, screenplay \u2014 plus a Next.js 16 newspaper site with an $8 Stripe preorder aimed at Christmas 2026.",
    content: SONNY_CONTENT,
    coverImage: SONNY_COVER,
    tags: [
      "sonnys-shining",
      "indie-game",
      "beat-em-up",
      "rubber-hose",
      "noir",
      "nextjs",
      "stripe",
      "gdd",
      "fleischer",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T23:40:00Z"),
    readingTime: 5,
  },
  {
    _id: "static:reaferral-agent-referral-platform",
    title: "reaferral: I built a free referral tracker so agents stop bleeding commissions into spreadsheets",
    slug: "reaferral-agent-referral-platform",
    excerpt:
      "I built Reaferral \u2014 a Next.js 16 + Convex + Clerk platform for agent-to-agent real estate referrals: trackable links, pipeline, teams, 12 dashboard themes, and a 423-article MDX journal. Live on Vercel. Repo private. Core pitched free forever.",
    content: REAFERAL_CONTENT,
    coverImage: REAFERAL_COVER,
    tags: [
      "reaferral",
      "real-estate",
      "referrals",
      "convex",
      "clerk",
      "nextjs",
      "martech",
      "vercel",
      "mdx",
      "saas",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T23:30:00Z"),
    readingTime: 5,
  },
{
    _id: "static:uncap-us-repo-native-social-layer",
    title: "uncap.us: I rebuilt the social layer around the repo",
    slug: "uncap-us-repo-native-social-layer",
    excerpt:
      "I spent eight months turning a file-cabinet Git host into a repo-native work hub \u2014 Lens, origin sync, CLI/UnGit, TanStack Start. Live at uncap.us.",
    content: UNCAP_CONTENT,
    coverImage: UNCAP_COVER,
    tags: [
      "uncap",
      "devtools",
      "tanstack",
      "convex",
      "clerk",
      "git",
      "cli",
      "martech",
      "opensource",
      "vercel",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T23:00:00Z"),
    readingTime: 5,
  },
  {
    _id: "static:omarchy-site-tanstack-start-rebuild",
    title: "I rebuilt the Omarchy site in TanStack Start in three days",
    slug: "omarchy-site-tanstack-start-rebuild",
    excerpt:
      "I ported the Omarchy marketing site and full manual into TanStack Start \u2014 52 chapters, 16 news posts, Quattro hero etch, Vercel URL. Not the OS. The site.",
    content: OMARCHYSITE_CONTENT,
    coverImage: OMARCHYSITE_COVER,
    tags: [
      "omarchy",
      "tanstack-start",
      "tanstack-router",
      "typescript",
      "vercel",
      "hyprland",
      "quickshell",
      "dhh",
      "linux",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T22:00:00Z"),
    readingTime: 3,
  },
  {
    _id: "static:omnux-gpu-mit-clean-room-m3-siege",
    title: "omnux-gpu: I opened an MIT siege for M3 pixels and refused to call it a driver",
    slug: "omnux-gpu-mit-clean-room-m3-siege",
    excerpt:
      "omnux-gpu is the clean-room MIT attempt at Apple M3 AGX \u2014 scaffold, fifteen public issues, capture-first method. No working driver. Hardware is the bottleneck.",
    content: OMNUXGPU_CONTENT,
    coverImage: OMNUXGPU_COVER,
    tags: [
      "omnux-gpu",
      "omnux",
      "asahi",
      "apple-silicon",
      "m3",
      "gpu",
      "agx",
      "clean-room",
      "mit",
      "linux",
      "reverse-engineering",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T21:00:00Z"),
    readingTime: 6,
  },
  {
    _id: "static:hurleyus-omarchy-catppuccin-rally-theme",
    title: "Hurleyus: I put Catppuccin Mocha in Hurley rally livery on Omarchy",
    slug: "hurleyus-omarchy-catppuccin-rally-theme",
    excerpt:
      "I forked stock Omarchy Catppuccin into Hurleyus \u2014 Mocha palette, seven pre-darkened 4K quattro walls, Plymouth unlock, and an Asahi U-Boot splash patch. colors.toml owns the terminals. The art owns the room.",
    content: HURLEYUS_CONTENT,
    coverImage: HURLEYUS_COVER,
    tags: [
      "hurleyus",
      "omarchy",
      "catppuccin",
      "mocha",
      "theme",
      "hyprland",
      "asahi",
      "u-boot",
      "plymouth",
      "linux",
      "quattro",
      "wallpaper",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T20:30:00Z"),
    readingTime: 5,
  },
  {
    _id: "static:getat-me-relationship-first-link-in-bio",
    title: "GetAt.Me: I replaced the link list with a relationship console",
    slug: "getat-me-relationship-first-link-in-bio",
    excerpt:
      "I built GetAt.Me so a bio link can book, chat, review, refer, and take payment \u2014 Next.js 16, Convex, Clerk Billing. Free starter. ProMax when you need posts and payments.",
    content: GETAT_CONTENT,
    coverImage: GETAT_COVER,
    tags: [
      "getat.me",
      "link-in-bio",
      "convex",
      "clerk",
      "nextjs",
      "martech",
      "creators",
      "consultants",
      "saas",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T20:00:00Z"),
    readingTime: 4,
  },
  {
    _id: "static:omnux-linux-apple-silicon-truth-table",
    title: "Omnux: I wired Linux for Apple silicon without lying about the GPU",
    slug: "omnux-linux-apple-silicon-truth-table",
    excerpt:
      "Omnux is the Omarchy fire on Asahi\u2019s foundation \u2014 umbrella monorepo, curl bootstrap, truth table first. M1/M2 daily-driver. M3 installs today, software-rendered. M3 GPU is the siege.",
    content: OMNUX_CONTENT,
    coverImage: OMNUX_COVER,
    tags: [
      "omnux",
      "asahi",
      "omarchy",
      "apple-silicon",
      "linux",
      "m3",
      "gpu",
      "hyprland",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T19:00:00Z"),
    readingTime: 5,
  },
  {
    _id: "static:slopops-omarchy-ops-bar-panel",
    title: "slopops: I put my whole ops stack in one Omarchy bar popup",
    slug: "slopops-omarchy-ops-bar-panel",
    excerpt:
      "I built slopops \u2014 a QML Omarchy bar widget with Fleet, Vercel, Sentry, PostHog, and GitHub Issues in one tabbed popup. Badge goes red when something is on fire.",
    content: SLOPOPS_CONTENT,
    coverImage: SLOPOPS_COVER,
    tags: [
      "slopops",
      "omarchy",
      "qml",
      "ops",
      "tailscale",
      "vercel",
      "sentry",
      "posthog",
      "github",
      "linux",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T18:00:00Z"),
    readingTime: 4,
  },
  {
    _id: "static:bestwnc-honest-analytics-local-directory",
    title: "BestWNC: I built a WNC directory that returns null instead of fake analytics",
    slug: "bestwnc-honest-analytics-local-directory",
    excerpt:
      "BestWNC is my Western North Carolina business directory \u2014 Next.js, Convex, Clerk, Stripe. Free listings, paid reach, secured claims. Owner analytics now return null where the metrics were never measured.",
    content: BESTWNC_CONTENT,
    coverImage: BESTWNC_COVER,
    tags: [
      "bestwnc",
      "local-directory",
      "western-north-carolina",
      "asheville",
      "nextjs",
      "convex",
      "stripe",
      "clerk",
      "martech",
      "analytics",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T17:00:00Z"),
    readingTime: 4,
  },
  {
    _id: "static:macks-bbq-shack-canton-condensation-site",
    title: "Mack's BBQ Shack: I built a Main Street site that still feels like the pit",
    slug: "macks-bbq-shack-canton-condensation-site",
    excerpt:
      "Private Next.js 16 build for Mack's Shack BBQ in Canton \u2014 condensation hero, chalkboard menu, Convex + Resend catering leads. Sixty-seven commits. Live on Main Street.",
    content: MACKS_CONTENT,
    coverImage: MACKS_COVER,
    tags: [
      "macks-bbq-shack",
      "nextjs",
      "convex",
      "resend",
      "catering",
      "local-business",
      "canton-nc",
      "martech",
      "hustle-launch",
      "framer-motion",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T16:00:00Z"),
    readingTime: 4,
  },

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
