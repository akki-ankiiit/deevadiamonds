/**
 * DEEVA photography manifest + build script.
 *
 * Every image is sourced from Pexels (https://www.pexels.com/license/):
 * free for commercial use, no attribution required, modification allowed.
 * These are representative campaign images, not DEEVA's own pieces. Replace
 * them with DEEVA's product photography as it becomes available — keep the
 * slug and re-run `npm run images`.
 *
 * Requires: curl, ImageMagick (`magick`), `cwebp`, and `ffmpeg` with libsvtav1.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

export const photography = {
  hero: {
    id: 13005037,
    file: "pexels-photo-13005037.jpeg",
    widths: [720, 1200, 1800, 2400],
  },
  philosophy: {
    id: 30249379,
    file: "pexels-photo-30249379/free-photo-of-elegant-woman-in-ornate-jewelry-in-profile.jpeg",
    widths: [640, 1080, 1600],
  },
  "collection-rings": {
    id: 30541171,
    file: "pexels-photo-30541171/free-photo-of-elegant-diamond-and-gold-ring-in-dramatic-light.jpeg",
    widths: [640, 1080, 1600],
  },
  "collection-earrings": {
    id: 35270159,
    file: "pexels-photo-35270159/free-photo-of-elegant-gold-earring-with-diamond-detailing.jpeg",
    widths: [640, 1080, 1600],
  },
  "collection-necklaces": {
    id: 39753062,
    file: "pexels-photo-39753062/free-photo-of-elegant-diamond-jewelry-on-woman-s-neck.jpeg",
    widths: [640, 1080, 1600],
  },
  "collection-pendants": {
    id: 34511063,
    file: "pexels-photo-34511063/free-photo-of-traditional-indian-jewelry-with-gold-and-diamond.jpeg",
    widths: [640, 1080, 1600],
  },
  "collection-bracelets": {
    id: 40523380,
    file: "pexels-photo-40523380/free-photo-of-elegant-diamond-bracelet-on-luxurious-fabric.jpeg",
    widths: [640, 1080, 1600],
  },
  "piece-pear-halo-ring": {
    id: 2735981,
    file: "pexels-photo-2735981.jpeg",
    widths: [640, 1080],
  },
  "piece-solitaire-studs": {
    id: 35961143,
    file: "pexels-photo-35961143/free-photo-of-elegant-gold-and-diamond-stud-earrings-close-up.jpeg",
    widths: [640, 1080],
  },
  "piece-tennis-bracelet": {
    id: 20141640,
    file: "pexels-photo-20141640/free-photo-of-close-up-of-a-silver-bracelet-with-shiny-rocks.jpeg",
    widths: [640, 1080],
  },
  "piece-necklace-set": {
    id: 16082501,
    file: "pexels-photo-16082501/free-photo-of-bridal-necklace-and-earrings.jpeg",
    widths: [640, 1080],
  },
  "piece-lightweight-necklace": {
    id: 7541803,
    file: "pexels-photo-7541803.jpeg",
    widths: [640, 1080],
  },
  "piece-halo-studs": {
    id: 5370644,
    file: "pexels-photo-5370644.jpeg",
    widths: [640, 1080],
  },
  "piece-drop-earrings": {
    id: 21235147,
    file: "pexels-photo-21235147/free-photo-of-close-up-of-golden-earrings.jpeg",
    widths: [640, 1080],
  },
  "piece-pendant-worn": {
    id: 39648,
    file: "lady-black-dress-jewellery-dress-39648.jpeg",
    widths: [640, 1080],
  },
  "piece-cocktail-ring": {
    id: 31087451,
    file: "pexels-photo-31087451.jpeg",
    widths: [640, 1080],
  },
  "piece-bangle-worn": {
    id: 12194323,
    file: "pexels-photo-12194323.jpeg",
    widths: [640, 1080],
  },
  campaign: {
    id: 30541174,
    file: "pexels-photo-30541174/free-photo-of-elegant-gold-and-diamond-ring-close-up.jpeg",
    widths: [720, 1200, 1800, 2400],
  },
  "story-loose-diamond": {
    id: 5362404,
    file: "pexels-photo-5362404.jpeg",
    widths: [640, 1080, 1600],
  },
  "craft-selection": {
    id: 31677627,
    file: "pexels-photo-31677627/free-photo-of-exquisite-bull-cut-diamond-in-precision-photography.jpeg",
    widths: [640, 1080],
  },
  "craft-setting": {
    id: 30541187,
    file: "pexels-photo-30541187/free-photo-of-elegant-gold-and-diamond-rings-in-minimalist-setting.jpeg",
    widths: [640, 1080],
  },
  "craft-finishing": {
    id: 30541184,
    file: "pexels-photo-30541184/free-photo-of-elegant-diamond-and-gold-ring-on-abstract-background.jpeg",
    widths: [640, 1080],
  },
  bespoke: {
    id: 34760895,
    file: "pexels-photo-34760895/free-photo-of-elegant-woman-s-hands-adorned-with-diamond-rings.jpeg",
    widths: [640, 1080, 1600],
  },
  "final-necklace": {
    id: 20594286,
    file: "pexels-photo-20594286/free-photo-of-close-up-of-woman-earring-and-necklace.jpeg",
    widths: [640, 1080, 1600],
  },
  "final-bridal": {
    id: 38799282,
    file: "pexels-photo-38799282/free-photo-of-elegant-woman-in-bridal-dress-with-jewelry.jpeg",
    widths: [640, 1080, 1600],
  },
  "world-earring": {
    id: 39164372,
    file: "pexels-photo-39164372/free-photo-of-close-up-of-elegant-earring-and-necklace-on-woman.jpeg",
    widths: [640, 1080, 1600],
  },
  "world-cascade": {
    id: 15264139,
    file: "pexels-photo-15264139/free-photo-of-woman-with-diamond-earrings-and-a-necklace.jpeg",
    widths: [640, 1080],
  },
  "world-bridal": {
    id: 19331171,
    file: "pexels-photo-19331171/free-photo-of-woman-in-traditional-clothing-and-with-silver-jewelry.jpeg",
    widths: [640, 1080, 1600],
  },
  "world-hands": {
    id: 34311632,
    file: "pexels-photo-34311632/free-photo-of-elegant-jewelry-display-on-manicured-hands.jpeg",
    widths: [640, 1080],
  },
  "world-rings": {
    id: 30720972,
    file: "pexels-photo-30720972/free-photo-of-elegant-diamond-ring-collection-in-hand.jpeg",
    widths: [640, 1080],
  },
  "world-emerald": {
    id: 13923715,
    file: "pexels-photo-13923715.jpeg",
    widths: [640, 1080],
  },
  "world-lace": {
    id: 29080968,
    file: "pexels-photo-29080968/free-photo-of-elegant-bridal-necklace-with-floral-design.jpeg",
    widths: [640, 1080],
  },
  "world-tennis": {
    id: 40550736,
    file: "pexels-photo-40550736.jpeg",
    widths: [640, 1080],
  },
  "contact-box": {
    id: 19525067,
    file: "pexels-photo-19525067/free-photo-of-engagement-ring-in-a-box.jpeg",
    widths: [640, 1080, 1600],
  },
};

const out = join(process.cwd(), "public/images/deeva");
const scratch = join(tmpdir(), "deeva-photography");

if (process.argv[1]?.endsWith("photography.mjs")) {
  mkdirSync(out, { recursive: true });
  mkdirSync(scratch, { recursive: true });
  const sizes = {};
  for (const [slug, { id, file, widths }] of Object.entries(photography)) {
    const src = join(scratch, `${id}.jpg`);
    const max = Math.max(...widths);
    if (!existsSync(src))
      execFileSync("curl", [
        "-sfL",
        "--retry",
        "4",
        "--retry-all-errors",
        `https://images.pexels.com/photos/${id}/${file}?auto=compress&cs=tinysrgb&w=${max}`,
        "-o",
        src,
      ]);
    const [w, h] = execFileSync("magick", ["identify", "-format", "%w %h", src])
      .toString()
      .split(" ")
      .map(Number);
    sizes[slug] = { width: w, height: h };
    for (const width of widths) {
      const target = Math.min(width, w);
      const resized = join(scratch, `${slug}-${width}.png`);
      execFileSync("magick", [src, "-resize", `${target}x`, "-strip", resized]);
      const base = join(out, `${slug}-${width}`);
      if (!existsSync(`${base}.webp`))
        execFileSync("cwebp", [
          "-quiet",
          "-q",
          "80",
          "-m",
          "6",
          "-sharp_yuv",
          resized,
          "-o",
          `${base}.webp`,
        ]);
      if (!existsSync(`${base}.avif`))
        execFileSync(
          "ffmpeg",
          [
            "-loglevel",
            "error",
            "-y",
            "-i",
            resized,
            "-vf",
            "scale=trunc(iw/2)*2:trunc(ih/2)*2,format=yuv420p",
            "-c:v",
            "libsvtav1",
            "-crf",
            "30",
            "-preset",
            "6",
            "-frames:v",
            "1",
            `${base}.avif`,
          ],
          { stdio: "ignore" },
        );
      rmSync(resized);
    }
    console.log(`✓ ${slug} (${w}×${h})`);
  }
  console.log(JSON.stringify(sizes));
}
