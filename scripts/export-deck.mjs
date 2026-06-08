import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const deckHtml = join(root, "pitch", "deck.html");
const outDir = join(root, "pitch", "deck");
const thumbsDir = join(root, "pitch", "deck-thumbs");
const layersDir = join(root, "pitch", "deck-layers");

const slides = [
  { id: "slide-01", selector: '[data-slide="1"]' },
  { id: "slide-02", selector: '[data-slide="2"]' },
  { id: "slide-03", selector: '[data-slide="3"]' },
  { id: "slide-04", selector: '[data-slide="4"]' },
  { id: "slide-05", selector: '[data-slide="5"]' },
];

const layers = [
  {
    id: "slide-01-logo",
    slide: "slide-01",
    selector: '[data-slide="1"] .brand',
    treatment: "3D floating logo lockup on title card",
  },
  {
    id: "slide-01-artifact-app",
    slide: "slide-01",
    selector: '[data-layer="slide-01-artifact-app"]',
    treatment: "tilted product artifact",
  },
  {
    id: "slide-01-artifact-demo",
    slide: "slide-01",
    selector: '[data-layer="slide-01-artifact-demo"]',
    treatment: "stacked proof cards",
  },
  {
    id: "slide-02-pressure-card",
    slide: "slide-02",
    selector: '[data-layer="slide-02-pressure-card"]',
    treatment: "shared object transition into demo plate",
  },
  {
    id: "slide-03-demo-video",
    slide: "slide-03",
    selector: '[data-layer="slide-03-demo-video"]',
    treatment: "video plate with chapter callouts",
  },
  {
    id: "slide-04-block-signal-context",
    slide: "slide-04",
    selector: '[data-layer="slide-04-block-signal-context"]',
    treatment: "mechanism card lift",
  },
  {
    id: "slide-04-block-decision",
    slide: "slide-04",
    selector: '[data-layer="slide-04-block-decision"]',
    treatment: "mechanism card lift",
  },
  {
    id: "slide-04-block-action",
    slide: "slide-04",
    selector: '[data-layer="slide-04-block-action"]',
    treatment: "mechanism card lift",
  },
  {
    id: "slide-04-block-proof",
    slide: "slide-04",
    selector: '[data-layer="slide-04-block-proof"]',
    treatment: "mechanism card lift",
  },
  {
    id: "slide-05-proof-card",
    slide: "slide-05",
    selector: '[data-layer="slide-05-proof-card"]',
    treatment: "proof table zoom and marker sweep",
  },
];

async function waitForAssets(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", reject, { once: true });
        });
      }),
    );
    for (const video of document.querySelectorAll("video")) {
      video.pause();
      video.currentTime = 0;
    }
  });
}

async function main() {
  if (!existsSync(deckHtml)) {
    throw new Error(`Deck HTML not found: ${deckHtml}`);
  }

  await mkdir(outDir, { recursive: true });
  await mkdir(thumbsDir, { recursive: true });
  await mkdir(layersDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1200 },
    deviceScaleFactor: 1,
  });

  await page.goto(pathToFileURL(deckHtml).href, { waitUntil: "domcontentloaded" });
  await waitForAssets(page);

  const thumbManifest = [];
  for (const slide of slides) {
    const locator = page.locator(slide.selector);
    await locator.scrollIntoViewIfNeeded();
    const path = join(thumbsDir, `${slide.id}.png`);
    await locator.screenshot({ path });
    thumbManifest.push({ ...slide, path: `pitch/deck-thumbs/${slide.id}.png` });
  }

  await page.pdf({
    path: join(outDir, "containment-countdown-deck.pdf"),
    width: "1920px",
    height: "1200px",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  const layerManifest = [];
  for (const layer of layers) {
    const locator = page.locator(layer.selector).first();
    if ((await locator.count()) === 0) {
      layerManifest.push({ ...layer, exported: false, reason: "selector not found" });
      continue;
    }
    await locator.scrollIntoViewIfNeeded();
    const path = join(layersDir, `${layer.id}.png`);
    await locator.screenshot({ path, omitBackground: true });
    layerManifest.push({
      ...layer,
      exported: true,
      path: `pitch/deck-layers/${layer.id}.png`,
    });
  }

  await browser.close();

  const manifest = {
    project: "Containment Countdown",
    generated_at: new Date().toISOString(),
    source: "pitch/deck.html",
    format: "1920x1200 HTML deck exported to PDF and PNG",
    pdf: "pitch/deck/containment-countdown-deck.pdf",
    thumbnails: thumbManifest,
    layers: layerManifest,
  };

  await writeFile(join(layersDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
