import sharp from 'sharp';
const src = 'Product images/full label.jpg';
const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, C = info.channels;
const get = (x, y) => { const i = (y * W + x) * C; return [data[i], data[i + 1], data[i + 2]]; };
const isDark = ([r, g, b]) => r < 40 && g < 80 && b < 70 && g > r;
// scan the middle row/column for the dark green rect bounds
const midY = Math.round(H * 0.5), midX = Math.round(W * 0.5);
let x0 = -1, x1 = -1;
for (let x = 0; x < W; x++) if (isDark(get(x, midY))) { x0 = x; break; }
for (let x = W - 1; x >= 0; x--) if (isDark(get(x, midY))) { x1 = x; break; }
let y0 = -1, y1 = -1;
for (let y = 0; y < H; y++) if (isDark(get(midX + 600, y))) { y0 = y; break; }
for (let y = H - 1; y >= 0; y--) if (isDark(get(midX + 600, y))) { y1 = y; break; }
console.log('dark rect', { x0, x1, y0, y1, w: x1 - x0 + 1, h: y1 - y0 + 1, aspect: ((x1 - x0 + 1) / (y1 - y0 + 1)).toFixed(3), target: (18.375 / 5).toFixed(3) });
// sample dark colour at a few quiet spots
for (const [x, y] of [[x0 + 30, y0 + 30], [x0 + 30, y1 - 30], [x1 - 30, y0 + 30], [x1 - 30, y1 - 30], [midX, y0 + 20]]) console.log('sample', x, y, get(x, y));
// check where the clear zones (1/4in) fall: 0.25/18.375 of width
const cz = Math.round((x1 - x0 + 1) * 0.25 / 18.375);
console.log('clear zone px', cz);
