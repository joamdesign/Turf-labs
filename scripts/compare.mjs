// Side-by-side: reference (left) vs build (right), both at 2x, for QA review.
import sharp from 'sharp';
const [ref, out, dest] = process.argv.slice(2);
const a = sharp(ref), b = sharp(out);
const [ma, mb] = await Promise.all([a.metadata(), b.metadata()]);
const h = Math.max(ma.height, mb.height);
const gap = 40;
await sharp({ create: { width: ma.width + mb.width + gap, height: h, channels: 3, background: '#ff00ff' } })
  .composite([{ input: await a.toBuffer(), left: 0, top: 0 }, { input: await b.toBuffer(), left: ma.width + gap, top: 0 }])
  .png().toFile(dest);
console.log('wrote', dest, ma.width, ma.height, '|', mb.width, mb.height);
