/**
 * Batch-converts all event images to .webp format using sharp.
 * - Processes every jpg/jpeg/png/JPG/JPEG/PNG in src/assets/Event/
 * - Creates .webp alongside the original
 * - Deletes the original after successful conversion
 * - Quality: 80 (good balance of quality vs file size)
 */

import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const EVENT_DIR = "src/assets/Event";
const QUALITY = 80;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

let totalConverted = 0;
let totalSavedKB = 0;

async function processFolder(folderPath) {
  const entries = await readdir(folderPath);

  for (const entry of entries) {
    const fullPath = join(folderPath, entry);
    const s = await stat(fullPath);

    if (s.isDirectory()) {
      await processFolder(fullPath);
      continue;
    }

    const ext = extname(entry).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;

    const nameNoExt = basename(entry, extname(entry));
    const webpPath = join(folderPath, `${nameNoExt}.webp`);
    const originalSize = s.size;

    try {
      await sharp(fullPath)
        .webp({ quality: QUALITY })
        .toFile(webpPath);

      const webpStat = await stat(webpPath);
      const savedKB = ((originalSize - webpStat.size) / 1024).toFixed(1);
      totalSavedKB += (originalSize - webpStat.size) / 1024;
      totalConverted++;

      // Delete original
      await unlink(fullPath);

      console.log(
        `✔ ${entry} → ${nameNoExt}.webp  (${(originalSize / 1024).toFixed(0)}KB → ${(webpStat.size / 1024).toFixed(0)}KB, saved ${savedKB}KB)`
      );
    } catch (err) {
      console.error(`✖ Failed: ${entry} — ${err.message}`);
    }
  }
}

console.log("🔄 Converting event images to .webp...\n");
await processFolder(EVENT_DIR);
console.log(`\n✅ Done! Converted ${totalConverted} images. Total saved: ${totalSavedKB.toFixed(0)}KB (${(totalSavedKB / 1024).toFixed(1)}MB)`);
