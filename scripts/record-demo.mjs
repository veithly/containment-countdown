import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseURL = process.env.DEPLOYED_URL || "https://containment-countdown.veithly.workers.dev";
const narration = JSON.parse(await fs.readFile("artifacts/narration.json", "utf8"));
const sceneMs = new Map(narration.scenes.map((scene) => [scene.id, Math.max(Number(scene.duration_ms || 6000), 4500)]));
const cues = [];

function nowMs(start) {
  return Date.now() - start;
}

async function chapter(id, start, action) {
  cues.push({ id, atMs: nowMs(start) });
  await action();
  const elapsed = nowMs(start) - cues.at(-1).atMs;
  await new Promise((resolve) => setTimeout(resolve, Math.max(sceneMs.get(id) - elapsed, 800)));
}

async function main() {
  await fs.mkdir("pitch/recording", { recursive: true });
  await fs.rm("artifacts/playwright", { recursive: true, force: true });
  await fs.mkdir("artifacts/playwright", { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1200 },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: "artifacts/playwright",
      size: { width: 1920, height: 1200 },
    },
  });
  const page = await context.newPage();
  const start = Date.now();

  await chapter("01_hook", start, async () => {
    await page.goto(baseURL, { waitUntil: "networkidle" });
  });

  await chapter("02_evidence", start, async () => {
    await page.getByRole("link", { name: /open mission/i }).click();
    await page.waitForURL(/\/mission/);
    await page.getByTestId("threshold-slider").fill("70");
    await page.waitForTimeout(700);
  });

  await chapter("03_approval", start, async () => {
    await page.getByTestId("approve-containment").click();
    await page.getByText(/approval-proof-written|approval-recorded/).waitFor({ timeout: 12000 }).catch(() => {});
  });

  await chapter("04_dossier", start, async () => {
    await page.goto(`${baseURL}/dossier/demo`, { waitUntil: "networkidle" });
    await page.getByTestId("dossier-export").click();
    await page.getByText(/Stored in D1, KV, and R2|Exported in replay mode/).waitFor({ timeout: 12000 }).catch(() => {});
  });

  await chapter("05_boundary", start, async () => {
    await page.goto(`${baseURL}/architecture`, { waitUntil: "networkidle" });
  });

  await context.close();
  await browser.close();

  const videos = await fs.readdir("artifacts/playwright");
  const raw = videos.find((file) => file.endsWith(".webm"));
  if (!raw) throw new Error("Playwright did not produce a .webm recording");

  await fs.copyFile(path.join("artifacts/playwright", raw), "pitch/recording/raw.webm");
  await fs.writeFile("pitch/recording/cues.json", JSON.stringify(cues, null, 2));
  console.log("recorded pitch/recording/raw.webm");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
