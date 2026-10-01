// Favicons from the high-res emblem (assets/brand/rego-park-counseling-emblem.png, 807×805, sent by the user
// 2026-09-30). The logo is never redrawn or recolored (brand manual 02); only two production edits:
// - ≤48px: the ribbon's text is covered with the ribbon's own magenta (unreadable at that size) and the stem tail
//   under the ribbon is cropped, so the mark reads as wings + disc + ribbon.
// - 180px+ (home screen): the full emblem with its text, on a white plate (iOS/Android need an opaque icon).
//   node scripts/favicons.mjs   → public/favicon.ico, favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const SRC = 'assets/brand/rego-park-counseling-emblem.png';
const MAGENTA = '#ec008c'; // sampled from the ribbon
const { width: W, height: H } = await sharp(SRC).metadata();

// Small mark: plain ribbon, no tail, padded to a square
const cover = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="730"><rect x="8" y="621" width="792" height="102" rx="30" fill="${MAGENTA}"/></svg>`);
const plain = await sharp(SRC).composite([{ input: cover, top: 0, left: 0 }]).extract({ left: 0, top: 0, width: W, height: 730 }).png().toBuffer();
const small = await sharp(plain)
  .extend({ top: (W - 730) >> 1, bottom: W - 730 - ((W - 730) >> 1), left: 0, right: 0, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png().toBuffer();
const smallAt = (px) => sharp(small).resize(px, px, { kernel: 'lanczos3' }).png().toBuffer();

// Home-screen icon: full emblem on white with breathing room
const fullAt = async (px) => {
  const inner = Math.round(px * 0.84);
  const mark = await sharp(SRC).resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: px, height: px, channels: 4, background: '#ffffff' } }).composite([{ input: mark, gravity: 'center' }]).png().toBuffer();
};

// ICO with PNG entries (16, 32, 48)
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map(smallAt));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(s, e); header.writeUInt8(s, e + 1); header.writeUInt8(0, e + 2); header.writeUInt8(0, e + 3);
  header.writeUInt16LE(1, e + 4); header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(pngs[i].length, e + 8); header.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, ...pngs]));
await writeFile('public/favicon-32.png', pngs[1]);
await writeFile('public/apple-touch-icon.png', await fullAt(180));
await writeFile('public/icon-192.png', await fullAt(192));
await writeFile('public/icon-512.png', await fullAt(512));
console.log('favicons written');
