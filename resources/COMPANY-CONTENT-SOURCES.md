# Company content references

## User-supplied references — 18 November 2026

Reviewed both JPGs in `Testimony/` and extracted the text of `content/referance content.docx`. These are private working references and have not been copied into public assets. The homepage now summarizes clearly legible project workflows for Elon Travel Service (CRM and HR management), Rose Travel Agency (CRM), Bridge Tech PLC (HR, CRM, sales, inventory, purchasing, projects), and Addis Transformer and Switch Gears PLC (finance, HR, sales, projects, purchasing, inventory). Handwritten dates and uncertain/crossed-out details are omitted. These are project scope summaries, not quotations or measured outcomes. Existing sourced testimonial quotations remain separately attributed.

The Word reference supports the company’s Ethiopia-focused ERP, retail, invoicing, implementation, and support positioning. Its unverified regulatory, environmental, financial, and performance assertions have not been introduced as new public claims. Existing supplied brand and product images are preserved; the new decorative gradients, borders, and grid patterns are CSS, with no new image assets.

## Design reference — 17 November 2026

User selected https://www.lidetdigital.com/ as the website design reference. Its retrieved homepage informed page progression and navigation: hero actions, client strip, concise service/product cards, company introduction, selection/pricing paths, blog cards, and closing CTA. Original Addis Systems copy, branding, and user-supplied illustrations are retained. No Lidet claims, numerical results, pricing, client lists, or product descriptions were transplanted. Direct browser visual inspection was unavailable in this environment; implementation follows the retrieved page structure rather than claiming a pixel-matched reproduction.

## Homepage refresh — 17 November 2026

The user requested real existing-site client logos and testimonials. The indexed homepage at https://addissystems.et/?trk=public_post_reshare-text was read again. Three short testimonial headings are reproduced verbatim with the original company attribution: “Exceptional Service!” (Elon Travel Service), “Truly Outstanding!” (Rose Travel Agency), and “A Seamless Experience!” (Bridge Tech PLC). No performance claims, dates, star ratings, or individual identities were added. The section links to the original testimonials. This supersedes the earlier decision to omit all quotation text.

The five original logo URLs were extracted from the matching homepage entries. See the asset register for their mapping and the origin availability limitation. Names remain visible if the original image host fails.

Reviewed 16 November 2026 for the requested navigation and content update. The live homepage, About, Contact, and Solutions fetches timed out. Search-indexed copies provided the facts below; index crawl dates vary. The Blog reader returned an older snapshot, so the new Blog page provides topic introductions and links to the existing blog instead of asserting a complete/current migration.

| Source | Used in this build |
|---|---|
| https://www.addissystems.et/about | Ethiopia-focused digital tools, ERP/mobile POS/cloud positioning, local business understanding, mission and vision, five values, retail/real-estate/logistics/services audiences. Paraphrased on About Us. |
| https://www.addissystems.et/contact | support@addissystems.et and office: Megenagna, City Mole building, 5th floor, Addis Ababa. Used on Contact Us and footer. |
| https://addissystems.et/?trk=public_post_reshare-text | Customization, integration, training, troubleshooting/support themes. Used as service inquiry categories, with scope to be agreed. |
| https://www.addissystems.et/erp | Modular ERP configuration and integration context. Existing pricing and support commitments are not approved for the new site's release. |
| https://www.addissystems.et/products | Bizfyspot business networking; wider portfolio discovery. Short description links to existing page. |
| https://www.addissystems.et/dirlink | Delivery management positioning. Short description links to existing page. |
| https://www.addissystems.et/blog | Existing ERP growth, digital finance/invoicing, and Ethiopian delivery topics. Brief paraphrased topic cards link to the original blog index. No invented authors, dates, or full posts. |
| https://www.addissystems.et/solutions | Inventory of ERP/E-Invoice legacy routes and feature themes; /solutions redirects to the new overview. |
| https://www.addissystems.et/electronic | Verified legacy E-Invoice route; redirects to /products/e-invoice. |

## Keep pending

- Contact page lists a landline (+251-116-673-770), while footer variants show +251-970-555-354 and +251-913-681-013. Confirm the preferred sales/support number before adding it. The email and office are consistent.
- Do not carry across the old homepage's quantified productivity/efficiency claims, round-the-clock support promise, About page satisfaction/project counters, or regulatory assurances without company approval and evidence.
- Leadership names and titles require current confirmation before migration. No stock or replacement team portraits were introduced.
- New pricing approval rules in PRD.md still govern the site, including ERP tailored quotes. Discovering legacy published prices does not approve a new commercial schedule.
- Bizfyspot and DirLink remain linked references. Dedicated new product pages, availability, screenshots, and sales routing need their own confirmed requirements.
- Full post migration needs valid article URLs/content and editorial review. The retrieved Blog snapshot had inconsistent titles/attribution; no uncertain metadata was imported.

## Navigation decision

Home `/` → About Us `/about` → Products and Service `/products` → Blog `/blog` → Contact Us `/contact`.
Core dedicated product pages and pricing remain accessible from the overview. `/insights` redirects to `/blog`. Privacy remains removed.

## Partners and clients — homepage refinement

Current status: after rolling back the broader redesign, the user requested the Partners & Clients section again beneath the supplied banner. The active `partners-clients.tsx` component displays the five sourced names below as Clients. Partner-specific classifications and actual logo artwork remain pending.

The indexed company homepage at https://addissystems.et/?trk=public_post_reshare-text names five businesses in its client testimonials: Elon Travel Service, Rose Travel Agency, Bridge Tech PLC, Addis Pay, and Addis Transformer and Switch Gears PLC. The redesign presents these as client names in ordinary text. No testimonial quotations, performance results, relationship dates, or invented logos are reproduced. The data is in `src/lib/relationships.ts`.

The section uses the user-requested “Our Partners & Clients” heading, with each currently sourced entry explicitly labeled Client. Additional partner names/classifications and company-supplied logo files are pending the user's response. Public search did not identify a reliable separate partner list. Do not infer an Odoo, bank, or other technology partnership from integration/product references.
