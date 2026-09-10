import sharp from 'sharp';
const src = 'Sections/01 Hero + proof strip.png';
const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, C = info.channels;
const get = (x, y) => { const i = (y * W + x) * C; return [data[i], data[i+1], data[i+2]]; };
const isInk = ([r,g,b]) => r < 60 && g < 80 && b < 130;          // navy text
const isPill = ([r,g,b]) => Math.abs(r-0xcc)<8 && Math.abs(g-0xe4)<8 && Math.abs(b-0xf2)<8;
const isBlue = ([r,g,b]) => r < 60 && g > 90 && g < 150 && b > 150; // brand blue text
const isGreen = ([r,g,b]) => g > r + 40 && g > b + 20;
const isBg = ([r,g,b]) => r > 236 && g > 236 && b > 236;
// Row runs for a predicate within an x range (2x px), reported in CSS px
function rows(pred, x0, x1, y0 = 0, y1 = H) {
  const runs = []; let start = null;
  for (let y = y0; y < y1; y++) { let hit = false; for (let x = x0; x < x1; x += 2) if (pred(get(x, y))) { hit = true; break; }
    if (hit && start === null) start = y; if (!hit && start !== null) { runs.push([start/2, y/2]); start = null; } }
  return runs;
}
function cols(pred, y0, y1, x0 = 0, x1 = W) {
  const runs = []; let start = null;
  for (let x = x0; x < x1; x++) { let hit = false; for (let y = y0; y < y1; y += 2) if (pred(get(x, y))) { hit = true; break; }
    if (hit && start === null) start = x; if (!hit && start !== null) { runs.push([start/2, x/2]); start = null; } }
  return runs;
}
console.log('headline rows (x 80..1200 2x):', rows(isInk, 80, 1200, 500, 1600));
console.log('headline cols line1 :', cols(isInk, 620, 760, 60, 2400).filter(r => r[1]-r[0] > 2).slice(0,1), '...', cols(isInk, 620, 760, 60, 2400).at(-1));
console.log('eyebrow rows:', rows(isBlue, 80, 800, 480, 620), 'eyebrow cols:', cols(isBlue, 540, 590, 60, 1000).slice(0,1), cols(isBlue, 540, 590, 60, 1000).at(-1));
console.log('eyebrow dot rows:', rows(isGreen, 60, 120, 500, 620), 'cols:', cols(isGreen, 540, 600, 60, 160));
console.log('cta rows:', rows(([r,g,b]) => Math.abs(r-0x0e)<6 && Math.abs(g-0x30)<6 && Math.abs(b-0x6d)<8, 100, 600, 1500, 1800));
console.log('cta cols:', cols(([r,g,b]) => Math.abs(r-0x0e)<6 && Math.abs(g-0x30)<6 && Math.abs(b-0x6d)<8, 1620, 1700, 60, 700));
console.log('cta circle cols (green-100):', cols(([r,g,b]) => Math.abs(r-0xcc)<10 && Math.abs(g-0xe6)<10 && Math.abs(b-0xd6)<10, 1620, 1700, 300, 700));
console.log('pill rows:', rows(isPill, 0, 400, 2200, 2800));
console.log('pill cols:', cols(isPill, 2480, 2500, 0, W));
console.log('pill text cols in Ready pill:', cols(isInk, 2440, 2540, 1950, 2400));
console.log('para rows (ink, x 2000..2800):', rows(isInk, 2000, 2800, 1300, 1800));
console.log('para cols:', cols(isInk, 1440, 1720, 1900, 2880).slice(0,1), cols(isInk, 1440, 1720, 1900, 2880).at(-1));
console.log('nav rows:', rows(isInk, 60, 800, 90, 300), 'nav cols:', cols(isInk, 180, 220, 60, 900));
console.log('logo rows:', rows(isInk, 1200, 1600, 90, 300), 'logo cols:', cols(isInk, 120, 280, 1150, 1700));
console.log('cart cols (white):', cols(([r,g,b]) => r>250&&g>250&&b>250, 190, 210, 2500, W));
console.log('cart rows (white):', rows(([r,g,b]) => r>250&&g>250&&b>250, 2600, 2760, 60, 320));
console.log('announcement rows:', rows(([r,g,b]) => b > 100 && r < 40, 1300, 1500, 0, 200));
console.log('header bg rows:', rows(([r,g,b]) => r>=0xf2&&r<=0xf6&&g>=0xf2&&g<=0xf6, 1380, 1420, 0, 400));
// bottle bounds: non-bg, non-pill in x 800..2000, y 700..2900
const isBottle = (p) => !isBg(p) && !isPill(p);
console.log('bottle rows:', rows(isBottle, 1200, 2600, 700, H).filter(r=>r[1]-r[0]>4));
console.log('bottle cols:', cols(isBottle, 1500, 2300, 1000, 2800).filter(r=>r[1]-r[0]>4));
console.log('announcement text cols:', cols(([r,g,b]) => r>200&&g>200&&b>200, 20, 70, 0, W).filter(r=>r[1]-r[0]>1).slice(0,1), cols(([r,g,b]) => r>200&&g>200&&b>200, 20, 70, 0, W).at(-1));
console.log('sparkle cols:', cols(([r,g,b]) => !isBg([r,g,b]), 1100, 1300, 2300, 2700));
