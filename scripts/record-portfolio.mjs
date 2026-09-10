import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import { mkdirSync, existsSync, readdirSync, renameSync } from "node:fs";
import { join } from "node:path";

const DEST = join(process.cwd(), "public/portfolio");
const RAW = "/tmp/portfolio-recordings";
mkdirSync(DEST, { recursive: true });
mkdirSync(RAW, { recursive: true });

const SITES = [
  { id: "web-macksbbqshack", url: "https://www.macksbbqshack.com" },
  { id: "web-getatme", url: "https://getat.me" },
  { id: "web-getatme-michaelhurley", url: "https://getat.me/michaelhurley" },
  { id: "web-hustlelaunch", url: "https://www.hustlelaunch.com" },
  { id: "web-bestwnc", url: "https://www.bestwnc.com" },
  { id: "web-michaelchurley", url: "https://www.michaelchurley.com" },
  { id: "web-glass-design-system", url: "https://glass-design-system.vercel.app" },
  { id: "web-twelveux", url: "https://twelveux.vercel.app" },
  { id: "web-mockup-gallery", url: "https://mockup-gallery-nu.vercel.app" },
  { id: "web-kingsroofing", url: "https://kingsroofingnc.com" },
  { id: "web-hurleyus", url: "https://www.hurleyus.com" },
  { id: "web-djsidethree", url: "https://www.djsidethree.com" },
  { id: "web-jennings", url: "https://www.jenningscustomhomes.com" },
  { id: "web-monarch", url: "https://www.monarchmountainfoundations.com" },
  { id: "web-bestjeepdecals", url: "https://www.bestjeepdecals.com" },
  { id: "web-barbquewagon", url: "https://www.barbquewagon.com" },
  { id: "web-hustlepay", url: "https://hustlepay.com" },
  { id: "web-hustlechat", url: "https://hustlechat.com" },
  { id: "web-hustleforms", url: "https://hustleforms.com" },
  { id: "web-uncap", url: "https://uncap.us" },
  { id: "web-delaterrestore", url: "https://www.delaterrestore.com" },
  { id: "web-appestatesales", url: "https://www.appestatesales.com" },
  { id: "web-waynesville-zaxbys", url: "https://waynesville.yourzaxbys.com" },
  { id: "web-mybathroomconversion", url: "https://www.mybathroomconversion.com" },
  { id: "web-santabox", url: "https://www.santabox.org" },
  { id: "web-thenationalnc", url: "https://www.thenationalnc.com" },
  { id: "web-modern-design-playground", url: "https://mdp-seven.vercel.app" },
];

function transcode(input, output) {
  const r = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      input,
      "-t",
      "12",
      "-vf",
      "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,fps=30",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "-crf",
      "26",
      "-movflags",
      "+faststart",
      "-an",
      output,
    ],
    { stdio: "inherit" }
  );
  return r.status === 0;
}

async function recordOne(browser, site) {
  const out = join(DEST, `${site.id}.mp4`);
  if (existsSync(out)) {
    console.log("skip", site.id);
    return;
  }
  console.log("REC", site.id, site.url);
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
    recordVideo: { dir: RAW, size: { width: 1280, height: 720 } },
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  page.setDefaultTimeout(25000);
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 25000 });
    await page.waitForTimeout(1800);
    for (let i = 0; i < 10; i++) {
      await page.mouse.wheel(0, 420);
      await page.waitForTimeout(380);
    }
    await page.mouse.move(200, 200);
    await page.waitForTimeout(400);
    await page.mouse.move(900, 400);
    await page.waitForTimeout(800);
  } catch (err) {
    console.error("nav fail", site.id, err.message);
  }
  const video = page.video();
  await context.close();
  if (!video) {
    console.error("no video", site.id);
    return;
  }
  const rawPath = await video.path();
  const ok = transcode(rawPath, out);
  console.log(ok ? "OK" : "FFMPEG FAIL", site.id, out);
}

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--autoplay-policy=no-user-gesture-required"],
});

for (const site of SITES) {
  try {
    await recordOne(browser, site);
  } catch (err) {
    console.error("fatal", site.id, err);
  }
}

await browser.close();
console.log("done", readdirSync(DEST).filter((f) => f.startsWith("web-") && f.endsWith(".mp4")).length);
