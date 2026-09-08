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

export const staticPosts: StaticPost[] = [
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
