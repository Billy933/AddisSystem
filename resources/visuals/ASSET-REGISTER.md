# Asset register

## Supplied client logos — 18 November 2026

User supplied Addis-Systems-Logos/ and requested its use in the partners section. Eight visually inspected, identifiable original logos now use local WebP derivatives under public/clients/, replacing remote logo references. Original artwork, aspect ratio, and transparency are preserved. The strip has no tile backgrounds, outlines, or shadows. See [client-logos.json](client-logos.json) for source paths, dimensions, rights/approval, alt text, output files, and route. Rebuild with `node scripts/prepare-client-logos.mjs`.

The supplied ethiopic-wordmark.png is not displayed because its company name has not been confirmed. Rose Travel Agency remains a sourced testimonial but is omitted from the logo strip because no matching logo was supplied. These local files supersede the earlier remote-logo availability limitation.

## Existing-site client logos — 17 November 2026

User explicitly requested reusing the current website's real company logos. The indexed homepage maps these original image URLs to the names below. They are linked directly without modification; a failed image is hidden while the company name remains. Source image dimensions and visual identity could not be verified because the origin image requests failed. Each is displayed inside a 140 × 64 px contain box. Local archival copies remain pending origin availability.

| Company / alt text | Original image URL | Intended use |
|---|---|---|
| Elon Travel Service logo | https://addissystems.et/parners/parners-2.png | Homepage client strip |
| Rose Travel Agency logo | https://addissystems.et/parners/parners-3.jpg | Homepage client strip |
| Bridge Tech PLC logo | https://addissystems.et/parners/parners-4.png | Homepage client strip |
| Addis Pay logo | https://addissystems.et/parners/parners-5.png | Homepage client strip |
| Addis Transformer and Switch Gears PLC logo | https://addissystems.et/parners/parners-6.png | Homepage client strip |

Source: https://addissystems.et/?trk=public_post_reshare-text. No substitute logos were generated. Existing uploaded product images are reused for homepage product cards and blog topic cards; business scenes now lead their respective product-page banners. Blog cards introduce topics and link to the blog listing, without invented article metadata.

| File | Source | Intended use | Alt text | Status |
|---|---|---|---|---|
| ../brand/addis-white.png | Supplied approval preview | Dark background company wordmark | Addis Systems | Supplied master |
| ../brand/addis-color.png | Supplied approval preview | Light background company wordmark | Addis Systems | Supplied master |
| ../brand/erp-color.png | Supplied approval preview | HEX ERP product page | HEX ERP | Supplied master |
| ../brand/shelf-color.png | Supplied approval preview | Shelf product page | Shelf App | Supplied master |

Add approval owner, licence or usage terms, dimensions, crop, and date to an asset's row as it is prepared for publishing.

## First website build — 16 November 2026

Original brand art was inspected and resized proportionally into WebP derivatives in public/brand/. The user authorized use of the supplied logos for the website. Full source/output dimensions, transformation, rights, alt text, and routes are recorded in [brand-derivatives.json](brand-derivatives.json). Recreate with `node scripts/prepare-assets.mjs`.

The HTML product illustrations in src/components/product-visual.tsx were created for this project. They use synthetic figures and are labeled as concept UI, not production screenshots. They are temporary while the user prepares artwork. No third-party template images or customer proof are used.

See [WEBSITE-ARTWORK-BRIEF.md](WEBSITE-ARTWORK-BRIEF.md) for banner and mockup handoff sizes. Do not publish user artwork until its source, dimensions, rights, and alt text are registered.

The refined homepage uses client names as ordinary text because client/partner logos have not been supplied. These names are sourced from the existing company homepage; no substitute marks were drawn. The HEX workflow diagram and Shelf/E-Invoice editorial illustrations are original HTML/CSS compositions created for this project, carry synthetic sample labels where figures appear, and include no customer data. Existing wordmarks remain the registered WebP derivatives above. User-supplied banner and exact product mockups remain pending.

## Supplied main banner — 16 November 2026

| Source | Dimensions | Website file | Rights / approval | Alt text | Route |
|---|---|---|---|---|---|
| ../../ERP E-Invoice Dashboard Across Three Screens.png | 1585 × 992 px | public/media/main-banner.webp (1585 × 992 px) | User supplied and explicitly requested website use, 16 November 2026 | Illustrative business software dashboards displayed across a desktop monitor, phone, and tablet. | Homepage hero `/` |

The original is preserved in the workspace root. WebP optimization preserves the composition without cropping, redrawing, or retouching. A 900 × 563 derivative is also available for future use; Next Image currently generates responsive delivery sizes from the full derivative. Rebuild with `node scripts/prepare-banner.mjs`. Full metadata is in [main-banner.json](main-banner.json).

Screens are presented as illustrative product mockups. The supplied artwork's sample names, figures, and interface labels are not used as product, compliance, customer, or pricing claims in website copy. Desktop copy uses the empty left portion; mobile copy appears above the complete image. The headline is live HTML and the Contact Us button links to `/contact`.

## Uploaded product artwork � 17 November 2026

All seven files in Images/ were visually inspected and approved for website use by the user's request to add them. Optimized WebP copies are used for the homepage banner, product hero mockups, and corresponding product business scenes. The warehouse scene also appears on the homepage. Originals remain unchanged. Product screens and business scenes are labeled illustrative.

See [uploaded-images.json](uploaded-images.json) for each source, dimensions, output file, user authorization, route, and alt text. Recreate with `node scripts/prepare-uploaded-images.mjs`.
