import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
const source = 'ERP E-Invoice Dashboard Across Three Screens.png';
await mkdir('public/media', { recursive: true });
const metadata = await sharp(source).metadata();
const outputs = [];
for (const [name, width] of [['main-banner', 1585], ['main-banner-mobile', 900]]) {
  const file = `public/media/${name}.webp`;
  const result = await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 88 }).toFile(file);
  outputs.push({ file, width: result.width, height: result.height, bytes: result.size });
}
await writeFile('resources/visuals/main-banner.json', JSON.stringify({
  source, sourceDimensions: { width: metadata.width, height: metadata.height },
  sourceOwner: 'User-supplied artwork', approvedBy: 'User request to use as the main website banner',
  approvedOn: '2026-11-16', rights: 'User-authorized website use of the supplied composition',
  alt: 'Illustrative business software dashboards displayed across a desktop monitor, phone, and tablet.',
  route: '/', transformation: 'Proportional WebP conversion; no crop, retouching, or redrawing', outputs,
}, null, 2) + '\n');
console.log('Prepared homepage banner derivatives:', outputs);
