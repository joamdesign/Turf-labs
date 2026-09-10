// Sample pixel colors from the 2x reference at CSS-px coordinates (x*2, y*2).
import sharp from 'sharp';
const src = 'Sections/01 Hero + proof strip.png';
const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
const px = (x, y) => { const i = (y * 2 * info.width + x * 2) * info.channels; return '#' + [0,1,2].map(k => data[i+k].toString(16).padStart(2,'0')).join(''); };
const pts = {
  announcement: [700, 20], headerBg: [700, 80], heroBgTop: [700, 200], heroBgMid: [1300, 400], heroBgBottom: [200, 1420],
  eyebrowDot: [45, 279], eyebrowText: [130, 281], headline: [120, 350], cta: [90, 800], ctaCircle: [219, 815],
  pillLeft: [60, 1244], pillRight: [1050, 1244], pillText: [1069, 1245], bodyText: [1100, 740], cart: [1327, 100], navText: [65,100]
};
for (const [k, [x, y]] of Object.entries(pts)) console.log(k.padEnd(14), x, y, px(x, y));
// find vertical bounds of announcement bar / header by scanning column x=700
let prev = null; const changes = [];
for (let y = 0; y < 1471; y++) { const c = px(700, y); if (c !== prev) { changes.push([y, c]); prev = c; } }
console.log('col700 changes (first 12):', changes.slice(0, 12));
// row scan at y=1244 (pill row) for pill edges
prev = null; const row = [];
for (let x = 0; x < 1440; x++) { const c = px(x, 1244); const isPill = c !== '#f7f8fa' && c !== '#f8f8f9'; const key = isPill ? 'P' : '-'; if (key !== prev) { row.push([x, key, c]); prev = key; } }
console.log('row1244:', row.slice(0, 40));
