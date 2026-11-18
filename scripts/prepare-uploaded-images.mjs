import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
const assets = [
 ['Navy hero with right-aligned device trio.png','home-banner','Illustrative HEX ERP, E-Invoice, and Shelf screens on a monitor, tablet, and phone.','/'],
 ['Graphite monitor showing the HEX ERP launcher-2.png','hex-erp','Illustrative HEX ERP launcher displayed on a desktop monitor.','/products/hex-erp'],
 ['Graphite smartphone showing Shelf inventory-4.png','shelf','Illustrative Shelf inventory screen displayed on a smartphone.','/products/shelf'],
 ['Addis E-Invoice Analytics Tablet-1.png','e-invoice','Illustrative Addis E-Invoice analytics dashboard on a tablet.','/products/e-invoice'],
 ['Ethiopian Warehouse Stock Check with HEX ERP-1.png','hex-erp-scene','Illustrative warehouse team reviewing HEX ERP on a desktop computer.','/products/hex-erp'],
 ['Addis Shopkeeper Checks Inventory on Shelf-3.png','shelf-scene','Illustrative shopkeeper checking Shelf inventory on a phone at a store counter.','/products/shelf'],
 ['Finance officer reviewing Addis E-Invoice-2.png','e-invoice-scene','Illustrative finance officer reviewing invoices alongside an E-Invoice dashboard.','/products/e-invoice'],
];
await mkdir('public/media',{recursive:true});
const register=[];
for(const [name,id,alt,route] of assets){
 const source=`Images/${name}`;const m=await sharp(source).metadata();const file=`public/media/${id}.webp`;
 const output=await sharp(source).resize({width:1944,withoutEnlargement:true}).webp({quality:88}).toFile(file);
 register.push({source,file,width:output.width,height:output.height,sourceWidth:m.width,sourceHeight:m.height,alt,route,rights:'User supplied; user authorized website use on 2026-11-17',approval:'Approved for website integration by user',transformation:'Proportional WebP conversion without cropping or retouching',bytes:output.size});
}
await writeFile('resources/visuals/uploaded-images.json',JSON.stringify(register,null,2)+'\n');
console.log(register.map(({file,bytes})=>({file,bytes})));
