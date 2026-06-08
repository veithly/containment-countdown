import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseURL = process.env.DEPLOYED_URL || "https://containment-countdown.veithly.workers.dev";

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function shot(page, route, file, viewport = { width: 1920, height: 1200 }, setup) {
  await page.setViewportSize(viewport);
  await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle" });
  if (setup) await setup(page);
  await page.screenshot({ path: file, fullPage: false });
}

async function main() {
  await ensureDir("pitch/screenshots");
  await ensureDir("docs/screenshots");

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1200 }, deviceScaleFactor: 1 });

  await shot(page, "/", "pitch/screenshots/01-hero.png");
  await shot(page, "/mission", "pitch/screenshots/02-mission-threshold.png", { width: 1920, height: 1200 }, async (p) => {
    await p.getByTestId("threshold-slider").fill("70");
    await p.waitForTimeout(500);
  });
  await shot(page, "/decision", "pitch/screenshots/03-decision.png");
  await shot(page, "/architecture", "pitch/screenshots/04-architecture.png");
  await shot(page, "/dossier/demo", "pitch/screenshots/05-mobile-dossier.png", { width: 390, height: 844 });

  await browser.close();

  const copies = [
    ["pitch/screenshots/01-hero.png", "docs/screenshots/hero.png"],
    ["pitch/screenshots/02-mission-threshold.png", "docs/screenshots/flow.png"],
    ["pitch/screenshots/05-mobile-dossier.png", "docs/screenshots/mobile.png"],
    ["pitch/screenshots/04-architecture.png", "docs/screenshots/architecture.png"],
  ];
  for (const [from, to] of copies) await fs.copyFile(from, to);

  console.log(`screenshots written from ${baseURL}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
