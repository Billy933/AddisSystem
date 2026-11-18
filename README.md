# Addis Systems Codex workspace

## Working application

Milestone 1 now has a Next.js App Router + TypeScript implementation. Install with `npm install` and run `npm run dev`. Open http://localhost:3000. Production verification: `npm run check`, `npm run typecheck`, and `npm run build`.

Primary navigation: Home `/`, About Us `/about`, Products and Service `/products`, Blog `/blog`, Contact Us `/contact`. Dedicated `/products/hex-erp`, `/products/shelf`, and `/products/e-invoice` pages retain their pricing views. Privacy was removed at the user's request. Legacy `/erp`, `/Shelf`, `/products/erp`, `/solutions`, `/electronic`, and `/insights` redirect to their new destinations.

Company background, values, service categories, email, and office details are based on the existing website. The Products and Service page also links to the current Bizfyspot and DirLink pages. Blog topic summaries link to the original blog pending full article migration. See [content source notes](resources/COMPANY-CONTENT-SOURCES.md) for retrieval limits and unresolved claims.

The selected design reference is Niotech Home 3. This is an original Next.js implementation; no commercial template source or license has been acquired. The template demo could not be loaded in this environment, so exact visual parity has not been verified.

`PREVIEW_PRICING=true` in ignored `.env.local` enables design-review rates during local development. It only works in development or Vercel preview and is forcibly disabled for Vercel production. Production shows inquiry CTAs; Milestone 2 must replace fixtures with approved CMS revisions. Never deploy this design review as an approved commercial offer.

The contact form validates and demonstrates product/plan selection, but does not send or persist inquiries. The preview discloses this before entry and after submission. Supabase persistence, rate limits, staff authentication, CMS permissions, draft/publish controls, and articles belong to Milestone 2. Do not launch publicly before those requirements are met. All pages currently request no indexing.

The supplied company/product logos are optimized without redrawing them. Product visuals are clearly labeled synthetic concept UI. User-provided artwork will replace them using the [artwork handoff](resources/visuals/WEBSITE-ARTWORK-BRIEF.md).

Browser review is pending because browser access was unavailable. Mobile layouts, keyboard interactions, contrast, and final artwork need an actual browser pass before sign-off.

The latest homepage redesign was rolled back at the user's request. The light hero, original product strip, product cards, and previous section layouts are restored. The five-page navigation and company content updates remain. Partners/client research is retained in the content notes for future use; it is not displayed on the restored homepage.

The hero now uses the user-supplied `ERP E-Invoice Dashboard Across Three Screens.png`, optimized as `public/media/main-banner.webp`. Headline: “Your business. Better connected.” The Contact Us button links to `/contact`. Desktop text sits in the image's left-hand space; on mobile it appears above the uncropped artwork. Other restored homepage sections remain in place. Asset details are recorded in the register.

Latest adjustment: the banner is now a compact desktop hero (390–560 px high), with the complete artwork contained beside the copy. Mobile artwork height is limited to 165–235 px beneath the text. A Partners & Clients section replaces the old product strip immediately below the banner; its five sourced businesses are labeled as Clients, using text until actual logos are supplied. Other page layouts retain the previous design.

Further compactness update: banner width is capped at 1220 px with side margins and a 330–410 px desktop height. At 700 px and below, text and artwork stack within a compact rounded container; artwork is limited to 130–165 px. Client names form a horizontally scrollable, keyboard-focusable row on mobile instead of three stacked rows. No autoplay is used. Browser-based responsive inspection remains pending because browser access is unavailable.

This workspace contains the build brief for the Addis Systems PLC marketing website and its CMS. The proposed stack is Next.js + TypeScript on Vercel, with Supabase Postgres, Auth, and Storage. The design and content references live in `resources/`.

## Start in a terminal

Extract the ZIP. Open a terminal in the **Addis-Systems-Codex** folder, beside `AGENTS.md`, then run:

```sh
codex
```

Paste this as your first instruction:

> Read AGENTS.md, PRD.md, RESOURCES.md, and DEPLOYMENT.md. Inspect the bundled branding and approval preview. Build Milestone 1 in this folder with Next.js, TypeScript, and the App Router. Deliver a responsive homepage and the three dedicated product pages with polished pricing views. Use the E-Invoice preview pricing rules in the PRD. Implement the site and run its checks so I can review it locally. Keep the CMS architecture compatible with Milestone 2.

Continue with the milestone prompts in [BUILD-STEPS.md](BUILD-STEPS.md). Review the site with `npm run dev` after Codex creates the app.

| File | Purpose |
|---|---|
| [AGENTS.md](AGENTS.md) | Project instructions Codex reads in this workspace |
| [PRD.md](PRD.md) | Product, UI/UX, CMS, data, and acceptance requirements |
| [RESOURCES.md](RESOURCES.md) | Source documents, existing logos, previews, and an asset list for future generation |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Preview, Supabase setup, and custom domain cutover |
| [BUILD-STEPS.md](BUILD-STEPS.md) | Implementation milestones and prompts |

The old HTML is a design reference. Build the application in this folder using the PRD. `resources/` sits outside `public/` so the pricing strategy documents and original previews stay out of the served website. Before pushing, confirm the git exclusions using `git check-ignore`. The excluded files remain on your computer.
