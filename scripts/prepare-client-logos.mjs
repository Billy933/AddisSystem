import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
const clients = [
  ['elon-travel', 'Elon Travel Service'],
  ['bridgetech', 'Bridgetech PLC'],
  ['addispay', 'Addis Pay'],
  ['addis-transformer-switchgears', 'Addis Transformer & Switchgears PLC'],
  ['dema-hope', 'Dema Hope Real Estate'],
  ['gilando', 'Gilando Biomedical Solution PLC'],
  ['jourilabs', 'Jourilabs'],
  ['lolis-coffee', "Loli’s Coffee"],
];
await mkdir('public/clients', { recursive: true });
const assets = [];
for (const [slug, name] of clients) {
  const source = `Addis-Systems-Logos/${slug}.png`;
  const metadata = await sharp(source).metadata();
  const file = `public/clients/${slug}.webp`;
  const result = await sharp(source).webp({ quality: 95 }).toFile(file);
  assets.push({ name, source, file, sourceWidth: metadata.width, sourceHeight: metadata.height, width: result.width, height: result.height, alt: `${name} logo`, route: '/', rights: 'User-supplied logo; user requested website use on 2026-11-18', approval: 'User request to use supplied partner logos', transformation: 'WebP conversion, original proportions and artwork preserved' });
}
await writeFile('resources/visuals/client-logos.json', JSON.stringify(assets, null, 2) + '\n');
console.log(`Prepared ${assets.length} supplied client logos.`);
