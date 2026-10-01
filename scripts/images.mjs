// Converts the images pulled from regoparkcounseling.com (assets/official-site) into web-ready WebP
// with descriptive file names (brief: WebP, ≤120KB hero, ≤80KB cards, descriptive names).
// Stock photos from the current site are PLACEHOLDERS until the team & clinic photo session (brand manual 08).
import sharp from 'sharp';
import { statSync } from 'node:fs';

const SRC = 'assets/official-site/';
const OUT = 'public/images/';
const jobs = [
  // [source, output, width, height (crop), quality]
  ['8980546d96fae977dfc0d17a52180c45l-b716375834rd-w960-h720.webp', 'clinics/rego-park-counseling-clinic-63-36-99th-street.webp', 960, 720, 72],
  ['8980546d96fae977dfc0d17a52180c45l-b716375834rd-w960-h720.webp', 'clinics/rego-park-counseling-clinic-card.webp', 640, 420, 70],
  ['core-2.webp', 'home/counselor-talking-with-adult-client.webp', 800, 560, 68],
  ['d-484x322-1.webp', 'home/counselor-taking-notes-evaluation.webp', 484, 322, 72],
  ['2155724.webp', 'home/group-counseling-session.webp', 800, 560, 66],
  ['socialwork.webp', 'home/group-therapy-circle.webp', 800, 560, 66],
  // community-support-table.webp removed 2026-10-01 (looked AI-generated, showed a child): no stock stand-in
  ['contact-1452x761-1.webp', 'home/front-desk-callback.webp', 800, 560, 68],
  ['NYC.jpg', 'home/queens-skyline-evening.webp', 1600, 900, 60],
  ['Do-You-Get-Drug-Tested-at-a-Substance-Abuse-Evaluation.jpg', 'blog/do-you-get-drug-tested-at-a-substance-abuse-evaluation.webp', 720, 450, 66],
  ['What-Happens-During-a-Court-Ordered-Substance-Use-Evaluation-scaled.jpg', 'blog/where-can-i-get-a-substance-abuse-evaluation.webp', 720, 450, 66],
  ['Title-and-Blog-format-pics-2025-04-11T094037.075.jpg', 'blog/does-medicaid-cover-substance-abuse-treatment.webp', 720, 450, 66],
];
for (const [src, out, w, h, q] of jobs) {
  await sharp(SRC + src).resize(w, h, { fit: 'cover', position: 'attention' }).webp({ quality: q }).toFile(OUT + out);
  console.log(out, Math.round(statSync(OUT + out).size / 1024) + 'KB');
}
// Logo: kept exactly as supplied (347×75 PNG). Vector file still pending from Emmanuel.
await sharp('docs/brand/rego-park-counseling logo.png').toFile(OUT + 'brand/rego-park-counseling-logo.png');
