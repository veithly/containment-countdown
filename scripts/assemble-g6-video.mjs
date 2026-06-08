import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";

function run(cmd, args, options = {}) {
  const result = spawnSync(cmd, args, { stdio: "inherit", ...options });
  if (result.status !== 0) throw new Error(`${cmd} ${args.join(" ")} failed`);
}

async function exists(file) {
  return fs.access(file).then(() => true).catch(() => false);
}

async function copyNarrationAssets() {
  await fs.mkdir("pitch/polish-combined/assets", { recursive: true });
  const manifest = JSON.parse(await fs.readFile("artifacts/narration.json", "utf8"));
  for (let i = 0; i < manifest.scenes.length; i++) {
    const scene = manifest.scenes[i];
    const src = scene.audio_path;
    const target = `pitch/polish-combined/assets/pitch-narration-${String(i + 1).padStart(2, "0")}-${scene.id}.mp3`;
    if (!src) continue;
    if (src.endsWith(".mp3")) await fs.copyFile(src, target);
    else run("ffmpeg", ["-y", "-i", src, "-codec:a", "libmp3lame", "-q:a", "2", target]);
  }

  const voMp3 = (await exists("artifacts/vo.mp3")) ? "artifacts/vo.mp3" : null;
  const voWav = (await exists("artifacts/vo.wav")) ? "artifacts/vo.wav" : null;
  if (!voMp3 && voWav) {
    run("ffmpeg", ["-y", "-i", voWav, "-codec:a", "libmp3lame", "-q:a", "2", "pitch/polish-combined/assets/narration-tight.mp3"]);
  } else if (voMp3) {
    await fs.copyFile(voMp3, "pitch/polish-combined/assets/narration-tight.mp3");
  }
}

async function pickBgm() {
  const dirs = ["assets/music", "/Users/rick/Documents/MySkill/hackathonhunter-skill/assets/music"];
  for (const dir of dirs) {
    const files = await fs.readdir(dir).catch(() => []);
    const mp3 = files.find((file) => file.toLowerCase().endsWith(".mp3"));
    if (mp3) return path.join(dir, mp3);
  }
  throw new Error("No BGM MP3 found in project or HackathonHunter assets");
}

function parseSrtTime(value) {
  const match = value.trim().match(/^(\d\d):(\d\d):(\d\d),(\d\d\d)$/);
  if (!match) throw new Error(`Invalid SRT timestamp: ${value}`);
  const [, hours, minutes, seconds, millis] = match;
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds) + Number(millis) / 1000;
}

async function parseSrt(file) {
  const text = await fs.readFile(file, "utf8");
  return text
    .trim()
    .split(/\n\s*\n/g)
    .map((block) => {
      const lines = block.split(/\r?\n/).filter(Boolean);
      const timing = lines.find((line) => line.includes("-->"));
      if (!timing) return null;
      const [start, end] = timing.split("-->").map((part) => part.trim());
      return {
        start: parseSrtTime(start),
        end: parseSrtTime(end),
        text: lines.slice(lines.indexOf(timing) + 1).join(" ").replace(/\s+/g, " ").trim(),
      };
    })
    .filter(Boolean);
}

function splitSubtitleText(text) {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks = [];
  let current = [];
  let length = 0;
  for (const word of words) {
    const nextLength = length + word.length + (current.length ? 1 : 0);
    if (current.length >= 12 || nextLength > 78) {
      chunks.push(current.join(" "));
      current = [];
      length = 0;
    }
    current.push(word);
    length += word.length + (current.length > 1 ? 1 : 0);
  }
  if (current.length) chunks.push(current.join(" "));
  return chunks;
}

function subtitleSegments(captions) {
  return captions.flatMap((caption) => {
    const chunks = splitSubtitleText(caption.text);
    const totalWords = chunks.reduce((sum, chunk) => sum + chunk.split(/\s+/).length, 0);
    let cursor = caption.start;
    return chunks.map((chunk, index) => {
      const isLast = index === chunks.length - 1;
      const wordShare = chunk.split(/\s+/).length / Math.max(1, totalWords);
      const duration = isLast ? caption.end - cursor : Math.max(1.8, (caption.end - caption.start) * wordShare);
      const start = cursor;
      const end = isLast ? caption.end : Math.min(caption.end, start + duration);
      cursor = end;
      return { start, end, text: chunk };
    });
  });
}

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapLines(text, maxChars = 48) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

async function renderSubtitlePng(segment, target) {
  const width = 1920;
  const height = 1200;
  const lines = wrapLines(segment.text);
  const fontSize = 34;
  const lineHeight = 46;
  const paddingX = 34;
  const paddingY = 24;
  const boxWidth = 1480;
  const boxHeight = paddingY * 2 + lineHeight * lines.length;
  const x = (width - boxWidth) / 2;
  const y = height - boxHeight - 54;
  const textStartY = y + paddingY + fontSize;
  const tspans = lines
    .map((line, index) => `<tspan x="${width / 2}" y="${textStartY + index * lineHeight}">${xmlEscape(line)}</tspan>`)
    .join("");
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="${x}" y="${y}" width="${boxWidth}" height="${boxHeight}" rx="18" fill="rgba(8,12,18,0.78)" stroke="rgba(255,255,255,0.20)" stroke-width="1"/>
      <text font-family="Inter, Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" fill="#f8fbff" text-anchor="middle">${tspans}</text>
    </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(target);
}

async function burnSubtitlesWithOverlays(input, srt, output) {
  const captions = await parseSrt(srt);
  const segments = subtitleSegments(captions);
  const duration = Math.max(...segments.map((segment) => segment.end));
  const overlayDir = "pitch/polish-combined/subtitle-overlays";
  await fs.rm(overlayDir, { recursive: true, force: true });
  await fs.mkdir(overlayDir, { recursive: true });

  const images = [];
  for (let i = 0; i < segments.length; i++) {
    const file = path.join(overlayDir, `${String(i + 1).padStart(2, "0")}.png`);
    await renderSubtitlePng(segments[i], file);
    images.push(file);
  }

  const args = ["-y", "-i", input];
  for (const image of images) args.push("-loop", "1", "-i", image);

  let previous = "[0:v]";
  const filters = segments.map((segment, index) => {
    const next = `[v${index + 1}]`;
    const inputLabel = `[${index + 1}:v]`;
    const start = segment.start.toFixed(3);
    const end = segment.end.toFixed(3);
    const filter = `${previous}${inputLabel}overlay=0:0:enable='between(t,${start},${end})'${next}`;
    previous = next;
    return filter;
  });

  run("ffmpeg", [
    ...args,
    "-filter_complex",
    filters.join(";"),
    "-map",
    previous,
    "-map",
    "0:a:0",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "18",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-c:a",
    "copy",
    "-t",
    duration.toFixed(3),
    "-shortest",
    output,
  ]);
}

async function main() {
  await fs.mkdir("pitch/recording", { recursive: true });
  await fs.mkdir("pitch/polish-combined/qa", { recursive: true });
  await copyNarrationAssets();

  run("ffmpeg", [
    "-y",
    "-i",
    "pitch/recording/raw.webm",
    "-vf",
    "scale=1920:1200:flags=lanczos,unsharp=5:5:0.6,eq=contrast=1.04:saturation=1.08",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "17",
    "-pix_fmt",
    "yuv420p",
    "-an",
    "pitch/recording/tight.mp4",
  ]);

  const voice = (await exists("artifacts/vo.mp3")) ? "artifacts/vo.mp3" : "artifacts/vo.wav";
  const bgm = await pickBgm();
  run("ffmpeg", [
    "-y",
    "-i",
    "pitch/recording/tight.mp4",
    "-i",
    voice,
    "-stream_loop",
    "-1",
    "-i",
    bgm,
    "-filter_complex",
    "[1:a]aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo,loudnorm=I=-16:TP=-1.5:LRA=11[voice];[2:a]aformat=sample_fmts=fltp:sample_rates=48000:channel_layouts=stereo,volume=0.14[bed];[voice][bed]amix=inputs=2:duration=first:dropout_transition=2,loudnorm=I=-14:TP=-1.5:LRA=11[aout]",
    "-map",
    "0:v:0",
    "-map",
    "[aout]",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "20",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-c:a",
    "aac",
    "-b:a",
    "192k",
    "-shortest",
    "pitch/recording/pitch-demo-combined.mp4",
  ]);

  await burnSubtitlesWithOverlays(
    "pitch/recording/pitch-demo-combined.mp4",
    "artifacts/captions.srt",
    "pitch/recording/pitch-demo-combined-final.mp4",
  );

  for (const [i, second] of [2, 8, 15, 22, 30, 38].entries()) {
    run("ffmpeg", [
      "-y",
      "-ss",
      String(second),
      "-i",
      "pitch/recording/pitch-demo-combined-final.mp4",
      "-frames:v",
      "1",
      "-update",
      "1",
      "-vf",
      "scale=960:-1",
      `pitch/polish-combined/qa/${String(i + 1).padStart(2, "0")}-qa.png`,
    ]);
  }

  run("ffmpeg", [
    "-y",
    "-ss",
    "8",
    "-t",
    "12",
    "-i",
    "pitch/recording/pitch-demo-combined-final.mp4",
    "-vf",
    "fps=12,scale=960:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=192:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3:diff_mode=rectangle",
    "-loop",
    "0",
    "pitch/recording/trailer.gif",
  ]);

  console.log("assembled pitch/recording/pitch-demo-combined-final.mp4");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
