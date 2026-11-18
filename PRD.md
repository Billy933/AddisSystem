# Addis Systems PLC website and CMS

**Product requirements** · 16 November 2026 · Prepared for Addis Systems PLC

## Purpose

Addis Systems needs a company website that explains three distinct offerings and makes it easy to compare plans or speak to sales. Marketing staff need to update content, upload media, manage prices, and publish articles without a code release. Product capabilities and pricing decisions draw from [RESOURCES.md](RESOURCES.md).

## Audience and success

| Audience | Job to complete |
|---|---|
| SME owner, finance manager, operations lead | Understand where HEX ERP fits and request a demo or implementation quote. |
| Retailer or store manager | See what Shelf App can do for sales and stock, then compare Free and Premium. |
| Finance team, wholesaler, or multi-branch operator | Compare E-Invoice plans by billing cycle, team size, locations, support, and integrations. |
| Marketing editor | Update a page or blog draft, add media, and preview the result. |
| Publisher and sales staff | Publish approved content, maintain approved pricing, and follow up on product-tagged inquiries. |

### Launch targets

- A visitor can reach the matching product page and its pricing section from the homepage in two actions or fewer.
- At a 360 px viewport, each public route is usable without page-level horizontal scrolling. A wide pricing table may scroll inside its own labeled region.
- A submitted inquiry is saved once with the intended product and any selected plan. Staff can locate it in the CMS.
- A nontechnical editor can save a draft and preview it. A publisher can publish it, and the resulting page displays the new version without a fresh deployment.
- In staging, representative mobile landing and product pages target Lighthouse performance ≥90 and accessibility ≥95 under repeatable conditions. Verify keyboard and screen-reader basics manually. Track lead volume and demo conversion for the first 30 days before setting sales targets.

## Information architecture

| Route | Content and primary task |
|---|---|
| `/` | Company proposition, three product paths, selected proof, implementation approach, insights, and contact CTA. |
| `/products/hex-erp` | Finance, sales, inventory, and operational modules. Describe adoption and implementation. Offer a product walkthrough and tailored quote. |
| `/products/shelf` | Mobile POS, inventory workflows, screenshots, Free vs Premium comparison, FAQs, and plan-specific inquiry. |
| `/products/e-invoice` | Digital invoice workflow, key features, monthly/annual plan comparison, Enterprise quote, FAQs, and a sales CTA. |
| `/about` | About Us: company overview, mission, vision, values, and approved company evidence. |
| `/products` | Products and Service: core product overview, configuration/integration/training/support discussion, and sourced links to Bizfyspot and DirLink. |
| `/blog` and `/blog/[slug]` | Blog listing and full published posts when migrated. Until then, sourced topic introductions link to the existing blog. `/insights` redirects to `/blog`. |
| `/contact` | Named company contact channels and a demo/inquiry form with product or plan preselected from the referral URL. |
| `/admin` | Protected dashboard, pages, products/pricing, posts, media, inquiries, and users. |

Redirect verified legacy paths such as `/erp` and `/Shelf` to the corresponding new product routes. Inventory legacy URLs before cutover. Use a helpful 404 and one canonical host.

Primary navigation, in user-requested order: **Home, About Us, Products and Service, Blog, Contact Us**. Source notes and unresolved legacy claims are tracked in [COMPANY-CONTENT-SOURCES.md](resources/COMPANY-CONTENT-SOURCES.md).

## Frontend and UX requirements

**17 November 2026 design update:** The user selected https://www.lidetdigital.com/ as the current layout reference. Adapt its clear hero actions, client strip, concise card grids, company introduction, product-selection links, insights, and closing contact progression to Addis Systems. Preserve Addis branding and the supplied product artwork. Earlier Niotech direction is secondary where it conflicts with this request. No Lidet commercial claims, client metrics, branding, or pricing are reused.

- **Design direction.** Use Niotech Home 3 (https://niotech-astro.pages.dev/home3/) as the selected visual reference, adapted to Next.js and the Addis Systems product family. Preserve the real brand artwork. The first build uses a light canvas, violet accents, dark navy sections, and restrained lime highlights. The user will supply banner and product mockup artwork; use clearly labeled concept screens until those assets arrive. Use a high-contrast humanist sans-serif. Put the product proposition in the first screen.
- **Homepage sequence.** Lead with one concrete promise and a primary contact CTA. Follow with the three product paths, alternating screenshots and copy, relevant client proof where approved, then an inquiry CTA. Use fewer, meaningful sections.
- **Product pages.** Use a product wordmark, the business problem solved, a screenshot or labeled illustration, key workflows, audience examples, pricing, FAQs, and a demo CTA. Use consistent typography and layouts while differentiating product accents and imagery.
- **Pricing.** Separate price cards from the detailed matrix. Clearly show currency and billing cadence. On E-Invoice add a keyboard-operable annual/monthly switch and an accessible comparison with row and column headers. Use numeric price fields plus currency. Calculate displayed savings from approved monthly and annual prices. Display custom plans as quote requests. Give shoppers a clear destination when clicking a plan.
- **Responsive UX.** Build accessible navigation disclosure, visible focus, meaningful alt text, useful forms, and reduced-motion support. Keep pricing tables in their own horizontal scroll region. Use responsive images and captions on illustrative screens. Test on phones and laptops.
- **Content and credibility.** Use plain product-specific language, actual logos, and approved testimonials. Avoid multiplying generic slogans. Before release, confirm screenshots, product limits, plan details, and regulatory or approval claims with Addis Systems.

### Pricing release rules

| Product | Preview values | Production behavior |
|---|---|---|
| HEX ERP | Tailored implementation quote | Display quote request and pricing factors. |
| Shelf App | Free and ETB 3,999/year Premium, from the indexed Addis Systems product page | Publish numeric rates and entitlements after sign-off. If unsigned, use an inquiry CTA. |
| E-Invoice | Starter ETB 3,200/month and 35,900/year. Business ETB 4,900/month and 51,900/year. Professional ETB 6,500/month and 61,900/year. Enterprise custom. | The second PDF uses 29,900 / 44,900 / 59,900 annually. Confirm one schedule. Approved figures exclude applicable VAT. Verify notification price and entitlement claims before publishing them. If unsigned, display a quote CTA. |

## CMS and backend

| Area | Expected behavior |
|---|---|
| Access | Invite-only staff access via Supabase Auth. Editor creates/changes drafts. Publisher can publish, unpublish, roll back to a previously published revision, and approve product prices. Admin manages roles and staff. Inquiry read access goes only to assigned sales/admin roles. |
| Pages | Edit structured section blocks, calls to action, media, SEO title, and description. Validate required fields. Keep drafts distinct from the live version. Use authenticated preview links. |
| Product pricing | Edit tier labels, amounts, billing cadence, feature rows, notes, and visibility. Review changes in a draft. Publish the product pricing group atomically so the cards and comparison match. Record who approved and published the revision. |
| Blog | Create and edit draft, preview, publish/unpublish. Support title, slug, excerpt, cover image, alt text, body, category, publish date, and SEO metadata. Ensure a stable published slug or create a redirect. Render sanitized rich text or Markdown. |
| Media | Upload approved site imagery with alt text, credit/source and approval status. Keep draft media private. Promote approved production images to public delivery only when used on published content. Verify type and size on the server. |
| Inquiries | Save name, contact email, optional company/phone, selected product/plan, message, and creation time. Validate on the server and acknowledge after persistence. Add spam controls and retry-safe submission. In the CMS support statuses New, Contacted, and Closed. Sales notifications can follow once a sender is set up. |

### Data and integration

Suggested entities: `staff_profiles`, `pages`, `page_revisions`, `products`, `pricing_revisions` with tier/feature rows, `posts`, `post_revisions`, `media_assets`, `inquiries`, and `audit_events`. Use unique slugs, timestamps, foreign keys, allowed status values, and versioned migrations. Use published revision pointers with public reads constrained to approved data. Enforce least-privilege grants and RLS on exposed tables and Storage; enforce role checks on server mutations as well. Keep admin session responses uncached and revalidate affected public routes on publishing. Use separate staging and production projects or environments.

Server-side form code validates input, enforces rate limits, and writes inquiries; browsing visitors have no direct inquiry-table access. Keep elevated Supabase credentials server-only. Log technical diagnostics without customer messages, email addresses, or tokens. If analytics are enabled, track product views, pricing interactions, CTA clicks, and successful inquiries by product/slugs without contact information.

## Release acceptance

- [ ] All public routes render at mobile and desktop sizes. Navigation, CTA destinations, annual/monthly switching, focus, and FAQs work.
- [ ] A reviewer validates product facts, disclosures, prices, logos, sample-screen labels, and public copy.
- [ ] Product and blog drafts stay private. Editor, publisher, sales, and anonymous permissions are exercised with separate accounts.
- [ ] An approved pricing edit and post publication are visible on the correct public page after revalidation. Failure leaves the previous published version available.
- [ ] Successful inquiries are stored once. Invalid submissions return meaningful feedback. Staff can find a correctly tagged test inquiry.
- [ ] Sitemap, metadata, canonical host, social previews, URL redirects, HTTPS, and both hosting environments are verified.
- [ ] No internal PDFs, preview fixtures, or credentials appear in a public build or Git history.

## Decisions before production

- **Commercial owner:** Choose the official E-Invoice annual schedule and confirm Shelf prices, entitlements, VAT wording, and notification terms.
- **Marketing:** Provide approved screenshots, customer evidence and alt text. Confirm English launch copy and whether Amharic is the next milestone.
- **Sales:** Verify contact details, inbox ownership, response workflow, and email provider if notifications are needed.
- **Engineering:** Confirm company-owned accounts, production and preview settings, domain access, and incumbent DNS records. See [DEPLOYMENT.md](DEPLOYMENT.md).

Delivery order: public website → working CMS and inquiry flow → staging approval → production cutover. Product subscription checkout, payments and customer account portals are separate product initiatives.
