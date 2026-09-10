/**
 * Builds the wrap-around label texture for the 3D bottle from the print dieline
 * "Product images/full label.jpg".
 *
 * The dieline is 18.375in x 5in (back panel left, front panel right, seam under the handle).
 * We crop the printed area, paint over the 1/4in clear zones that carry dieline annotations,
 * and resize to a GPU-friendly 4096px width.
 *
 *   node scripts/build-label-texture.mjs
 */
import sharp from 'sharp';

const SRC = 'Product images/full label.jpg';
const OUT = 'public/products/odorrx-label.jpg';

// Measured with scripts/measure-label.mjs
const rect = { left: 558, top: 807, width: 5488, height: 1543 };
// 1/4in clear zone on every edge; padded a little so the dashed safe-area guides go too.
const clearZone = Math.round((rect.width * 0.25) / 18.375) + 8;
const ink = { r: 6, g: 46, b: 45 }; // label background sampled at the edges

const outWidth = 4096;
const outHeight = Math.round((outWidth * rect.height) / rect.width);

const patch = (w, h) => ({
  input: { create: { width: w, height: h, channels: 3, background: ink } },
});

// sharp resizes before compositing inside one pipeline, so patch at full size first.
const patched = await sharp(SRC)
  .extract(rect)
  .composite([
    { ...patch(clearZone, rect.height), left: 0, top: 0 },
    { ...patch(clearZone, rect.height), left: rect.width - clearZone, top: 0 },
    { ...patch(rect.width, clearZone), left: 0, top: 0 },
    { ...patch(rect.width, clearZone), left: 0, top: rect.height - clearZone },
  ])
  .png()
  .toBuffer();

await sharp(patched)
  .resize(outWidth, outHeight, { kernel: 'lanczos3' })
  .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: '4:4:4' })
  .toFile(OUT);

console.log(`wrote ${OUT} (${outWidth}x${outHeight})`);
