// Feature graphics for the blog (Elev8 SOP Blog/Post/Author §1 "Card anatomy"): one branded 1200×630 graphic per post,
// used as the card image and the post's og:image. Generated brand graphics, not photos, not stock.
//
//   PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs node scripts/generate-post-graphics.mjs            # every post
//   PLAYWRIGHT_MODULE=… node scripts/generate-post-graphics.mjs <slug>...                                    # only these
//
// Output (commit these): public/images/blog/cards/{slug}.webp (card) · public/images/blog/og/{slug}.jpg (og:image)
//
// Design: category ground from CATEGORY_COLORS (src/data/posts.js), the Nearby Ring (brand manual 06: 4 rings + the
// Harbor "home" dot) cropped off the top-right corner, the category label, the title in Nunito 800 (≤4 lines, shrunk
// until it fits) and the logo, on a white plate when the ground is dark (logo never recolored, brand manual 02).
// Rendered in headless Chromium so Nunito wraps exactly like the site; sharp encodes. Chromium: Playwright's cached
// build (~/Library/Caches/ms-playwright) or CHROMIUM_PATH.
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import { existsSync } from 'node:fs';
import sharp from 'sharp';
import { posts, categoryColor } from '../src/data/posts.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(path.resolve(process.env.PLAYWRIGHT_MODULE)).href : 'playwright-core');
const cached = path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing');
const executablePath = process.env.CHROMIUM_PATH || (existsSync(cached) ? cached : undefined);

const b64 = async (p) => (await readFile(path.join(root, p))).toString('base64');
const nunito = await b64('node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2');
const logo = await b64('public/images/brand/rego-park-counseling-logo.png');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const isLight = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 160;
};

// Nearby Ring, centered past the top-right corner so the rings sweep across the right side
function ring(c, light) {
  const cx = 1080, cy = 150;
  const rings = [
    [92, c.accent, 0.95], [184, c.accent, 0.6], [276, light ? '#bfe7f8' : c.accent, light ? 1 : 0.35], [368, light ? '#bfe7f8' : c.accent, light ? 0.8 : 0.2],
  ].map(([r, col, o]) => `<circle cx="${cx}" cy="${cy}" r="${r}" stroke="${col}" stroke-opacity="${o}" stroke-width="3"/>`).join('');
  const dot = `<circle cx="${cx}" cy="${cy}" r="16" fill="${light ? '#0a5577' : '#ffffff'}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none"><rect width="${W}" height="${H}" fill="${c.bg}"/>${rings}${dot}</svg>`;
}

function html(post) {
  const c = categoryColor(post.category);
  const light = isLight(c.bg);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: 'NU'; src: url(data:font/woff2;base64,${nunito}) format('woff2'); font-weight: 200 1000; }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
  .g { position: relative; width: ${W}px; height: ${H}px; }
  .g > svg { position: absolute; inset: 0; }
  .label { position: absolute; left: 80px; top: 72px; display: inline-flex; align-items: center; gap: 14px;
    font: 800 22px/1 'NU'; letter-spacing: .14em; text-transform: uppercase; color: ${c.ink}; }
  .label::before { content: ''; width: 44px; height: 5px; border-radius: 5px; background: ${light ? '#00aeef' : c.accent}; }
  .title { position: absolute; left: 80px; top: 118px; width: 860px; height: 330px; display: flex; align-items: center; }
  .title h1 { font-family: 'NU'; font-weight: 800; color: ${c.ink}; line-height: 1.12; letter-spacing: -0.01em; text-wrap: balance; }
  .plate { position: absolute; left: 80px; bottom: 64px; display: inline-flex; padding: ${light ? '0' : '14px 20px'};
    border-radius: 14px; background: ${light ? 'transparent' : '#ffffff'}; }
  .plate img { width: 250px; height: auto; display: block; }
  </style></head><body><div class="g">${ring(c, light)}
  <span class="label">${esc(post.category)}</span>
  <div class="title"><h1 id="t">${esc(post.title)}</h1></div>
  <span class="plate"><img src="data:image/png;base64,${logo}" alt=""></span>
  </div></body></html>`;
}

const only = process.argv.slice(2);
const list = only.length ? posts.filter((p) => only.includes(p.slug)) : posts;
await mkdir(path.join(root, 'public/images/blog/og'), { recursive: true });
await mkdir(path.join(root, 'public/images/blog/cards'), { recursive: true });

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
for (const post of list) {
  await page.setContent(html(post), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // Largest size (68 → 38px) at which the title fits in ≤4 lines inside the title box
  const fit = await page.evaluate(() => {
    const h = document.getElementById('t');
    const box = h.parentElement.getBoundingClientRect();
    for (let size = 68; size >= 38; size -= 2) {
      h.style.fontSize = size + 'px';
      const r = h.getBoundingClientRect();
      if (Math.round(r.height / (size * 1.12)) <= 4 && r.height <= box.height && h.scrollWidth <= box.width) return size;
    }
    return -1;
  });
  const png = await page.screenshot({ type: 'png' });
  await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(root, `public/images/blog/og/${post.slug}.jpg`));
  await sharp(png).resize(800).webp({ quality: 80 }).toFile(path.join(root, `public/images/blog/cards/${post.slug}.webp`));
  if (fit < 0) console.warn(`${post.slug}: title does not fit in 4 lines`);
}
await browser.close();
console.log(`${list.length} graphics written`);
