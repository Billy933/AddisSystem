import assert from 'node:assert/strict';
const base = process.env.CHECK_BASE_URL || 'http://127.0.0.1:3000';
const routes = ['/', '/products/hex-erp', '/products/shelf', '/products/e-invoice', '/about', '/products', '/blog', '/contact', '/contact?product=e-invoice&plan=Business&cycle=annual'];
for (const route of routes) {
  const response = await fetch(base+route,{signal:AbortSignal.timeout(10000)});
  assert.equal(response.status,200,route);
  const html = await response.text();
  assert.match(html, /id="main"/);
  assert.doesNotMatch(html, /href="\/privacy"/);
  const nav = html.match(/<nav id="main-nav"[\s\S]*?<\/nav>/)?.[0];
  assert.ok(nav, 'Main navigation exists');
  assert.deepEqual([...nav.matchAll(/href="([^"]+)"/g)].map(m => m[1]), ['/', '/about', '/products', '/blog', '/contact']);
  for (const label of ['Home', 'About Us', 'Products and Service', 'Blog', 'Contact Us']) assert.ok(nav.includes(label), label);
  if (route === '/about') for (const text of ['OUR MISSION', 'OUR VISION', 'Trust', 'Responsiveness', 'Transparency']) assert.ok(html.includes(text), text);
  if (route === '/products') for (const text of ['Bizfyspot', 'DirLink', 'Solution configuration', 'Training &amp; support']) assert.ok(html.includes(text), text);
  if (route === '/contact') { assert.match(html, /mailto:support@addissystems.et/); assert.match(html, /City Mole building/); }
  if (route === '/') {
    assert.match(html, /Your business/);
    assert.match(html, /Better connected/);
    assert.match(html, /main-banner.webp/);
    const banner = html.match(/<section class="main-banner"[\s\S]*?<\/section>/)?.[0];
    assert.ok(banner);
    assert.match(banner, /href="\/contact"/);
    assert.doesNotMatch(html, /THE RIGHT TOOLS|FOR YOUR NEXT STEP/);
    assert.match(html, /Our Partners &amp; Clients/);
    assert.match(html, /aria-label="Selected clients"/);
    for (const name of ['Elon Travel Service', 'Rose Travel Agency', 'Bridge Tech PLC', 'Addis Pay', 'Addis Transformer and Switch Gears PLC']) assert.ok(html.includes(name), name);
  }
  if (route.includes('product=e-invoice')) {
    assert.match(html, /value="e-invoice" selected/);
    assert.match(html, /<option selected="">Business<\/option>/);
    assert.match(html, /value="annual" selected/);
  }
  if (route === '/products/e-invoice' && !process.env.CHECK_PREVIEW_RATES) assert.doesNotMatch(html, /35,900|51,900|61,900|3,200|4,900|6,500|35900|51900|61900/);
  console.log(`200 ${route}`);
}
for (const [legacy,destination] of [['/erp','/products/hex-erp'],['/Shelf','/products/shelf'],['/products/erp','/products/hex-erp'],['/insights','/blog'],['/solutions','/products'],['/electronic','/products/e-invoice']]) {
  const response = await fetch(base+legacy,{redirect:'manual',signal:AbortSignal.timeout(10000)});
  assert.equal(response.status,308); assert.equal(response.headers.get('location'),destination); console.log(`308 ${legacy} → ${destination}`);
}
for (const route of ['/privacy','/products/unknown','/does-not-exist']) { const response=await fetch(base+route,{signal:AbortSignal.timeout(10000)}); assert.equal(response.status,404,route); console.log(`404 ${route}`); }
for (const image of ['addis-color','addis-white','erp-color','shelf-color']) { const response=await fetch(`${base}/brand/${image}.webp`,{signal:AbortSignal.timeout(10000)}); assert.equal(response.status,200); assert.match(response.headers.get('content-type'),/image\/webp/); }
for (const route of ['/resources/internal/E-Invoice-Pricing-Strategy-and-Financial-Projection.pdf','/resources/previews/Addis-Systems-Website-Preview.html']) { const response=await fetch(base+route,{signal:AbortSignal.timeout(10000)}); assert.equal(response.status,404); }
console.log('Brand assets serve correctly; internal resources are not public.');
