/**
 * QA helper: captures the live (animated) hero at a few scroll offsets so the scroll-driven
 * bottle turn and the proof-strip reveal can be reviewed. Not part of the deliverable set.
 *   node scripts/motion-check.mjs   (expects dist/ to exist)
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { preview } from 'vite';
import { chromium } from 'playwright';

const outDir = path.resolve(process.env.MOTION_OUT ?? 'qa-screenshots');
await mkdir(outDir, { recursive: true });
const server = await preview({ root: path.resolve('.'), preview: { port: 4175, strictPort: true, host: '127.0.0.1' }, logLevel: 'warn' });
const url = server.resolvedUrls?.local?.[0] ?? 'http://127.0.0.1:4175/';
const browser = await chromium.launch({
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
try {
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  for (const y of [0, 300, 600, 900]) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
    await page.waitForTimeout(1400);
    const file = path.join(outDir, `motion-scroll-${y}.png`);
    await page.screenshot({ path: file });
    const p = await page.$eval('.hero', (el) => getComputedStyle(el).getPropertyValue('--scroll-progress'));
    const pills = await page.$$eval('.proof__pill', (els) => els.slice(0, 5).map((el) => getComputedStyle(el).opacity));
    const track = await page.$eval('.proof__track', (el) => getComputedStyle(el).transform);
    console.log(`scroll ${y}: progress=${p.trim()} pills=${pills.join(',')} track=${track}`);
  }
} finally {
  await browser.close();
  await new Promise((r) => server.httpServer.close(r));
}
