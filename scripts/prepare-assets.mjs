import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
const specs = [['addis-color',840],['addis-white',840],['erp-color',700],['shelf-color',700]];
await mkdir('public/brand', { recursive: true });
const entries = [];
for (const [name,width] of specs) {
  const source = `resources/brand/${name}.png`;
  const meta = await sharp(source).metadata();
  const result = await sharp(source).resize({width, withoutEnlargement:true}).webp({quality:90}).toFile(`public/brand/${name}.webp`);
  entries.push({source, sourceDimensions:`${meta.width} × ${meta.height}`, file:`public/brand/${name}.webp`, dimensions:`${result.width} × ${result.height}`, rights:'Company-supplied brand master; approved by user for website use, 2026-11-16', alt: name.startsWith('addis') ? 'Addis Systems' : name.startsWith('erp') ? 'HEX ERP' : 'Shelf App', transformation:'Proportional resize, WebP, original artwork preserved', routes:name.startsWith('addis') ? 'All routes' : `Homepage and product page`});
}
await writeFile('resources/visuals/brand-derivatives.json',JSON.stringify(entries,null,2)+'\n');
console.log('Prepared four original brand derivatives.');
