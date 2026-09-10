/**
 * Deterministic screenshots at the canonical desktop viewport.
 *
 *   node scripts/screenshots.mjs            # builds, serves, captures into ./screenshots
 *   node scripts/screenshots.mjs --no-build # reuse an existing dist/
 *
 * Output: screenshots/final-full-page.png plus one file per `[data-screenshot]` wrapper
 * (e.g. 01-hero-final.png). Captured at 1440 CSS px wide, device scale factor 2, with all
 * motion frozen via `?static=1`.
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { build, preview } from 'vite';
import { chromium } from 'playwright';
import sharp from 'sharp';

const VIEWPORT = { width: 1440, height: 900 };
const SCALE = 2;
const OUT_DIR = path.resolve('screenshots');
const root = path.resolve('.');

const args = new Set(process.argv.slice(2));
if (!args.has('--no-build')) {
  await build({ root, logLevel: 'warn' });
}

const server = await preview({ root, preview: { port: 4174, strictPort: true, host: '127.0.0.1' }, logLevel: 'warn' });
const baseUrl = server.resolvedUrls?.local?.[0] ?? 'http://127.0.0.1:4174/';

await mkdir(OUT_DIR, { recursive: true });

// Software WebGL (SwiftShader) so the three.js bottle renders identically on any machine.
const browser = await chromium.launch({
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: SCALE,
  reducedMotion: 'reduce',
  colorScheme: 'light',
  locale: 'en-US',
  timezoneId: 'UTC',
});
const page = await context.newPage();

try {
  await page.goto(`${baseUrl}?static=1`, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete ? Promise.resolve() : new Promise((resolve) => img.addEventListener('load', resolve, { once: true })),
      ),
    );
    // Loaded is not painted: large async-decoded images can still be pending in the compositor.
    await Promise.all(Array.from(document.images).map((img) => img.decode().catch(() => {})));
  });
  // Let layout settle after fonts swap in.
  await page.waitForTimeout(300);

  const sections = await page.$$eval('[data-screenshot]', (nodes) =>
    nodes.map((node) => {
      const rect = node.getBoundingClientRect();
      const fromTop = node.hasAttribute('data-screenshot-from-top');
      const top = fromTop ? 0 : Math.round(rect.top + window.scrollY);
      return {
        name: node.getAttribute('data-screenshot'),
        x: 0,
        y: top,
        width: document.documentElement.clientWidth,
        height: Math.round(rect.bottom + window.scrollY) - top,
      };
    }),
  );

  for (const section of sections) {
    // Bring the section into view and wait until every image inside it is loaded and decoded;
    // large renders can otherwise still be pending when the clip is taken.
    await page.evaluate(async (name) => {
      const el = document.querySelector(`[data-screenshot="${name}"]`);
      // The sticky header would otherwise ride into the top of every scrolled-to clip.
      const header = document.querySelector('.site-header');
      if (header) header.style.position = el?.hasAttribute('data-screenshot-from-top') ? '' : 'static';
      el?.scrollIntoView({ block: 'start', behavior: 'instant' });
      const images = Array.from(el?.querySelectorAll('img') ?? []);
      const deadline = Date.now() + 15_000;
      while (Date.now() < deadline && images.some((img) => !img.complete || img.naturalWidth === 0)) {
        await new Promise((r) => setTimeout(r, 100));
      }
      await Promise.all(images.map((img) => img.decode().catch(() => {})));
    }, section.name);
    await page.waitForTimeout(250);
    const file = path.join(OUT_DIR, `${section.name}-final.png`);
    await page.screenshot({
      path: file,
      fullPage: true,
      animations: 'disabled',
      caret: 'hide',
      clip: { x: section.x, y: section.y, width: section.width, height: section.height },
    });
    console.log(`wrote ${path.relative(root, file)}  (${section.width}x${section.height} css px @${SCALE}x)`);
  }

  // Full page: composed from the section clips at their measured offsets. Chromium's own
  // beyond-viewport capture mis-paints regions behind `backdrop-filter` (it repeats the top of
  // the document there), while the clipped captures are correct.
  const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const fullPath = path.join(OUT_DIR, 'final-full-page.png');
  await sharp({
    create: { width: VIEWPORT.width * SCALE, height: docHeight * SCALE, channels: 4, background: '#fafafb' },
  })
    .composite(
      sections.map((section) => ({
        input: path.join(OUT_DIR, `${section.name}-final.png`),
        left: section.x * SCALE,
        top: section.y * SCALE,
      })),
    )
    .png()
    .toFile(fullPath);
  console.log(`wrote ${path.relative(root, fullPath)}  (${VIEWPORT.width}x${docHeight} css px @${SCALE}x, composed)`);
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}
