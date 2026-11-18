# Project instructions for Codex

- Read PRD.md, RESOURCES.md, and DEPLOYMENT.md before implementation. Follow the milestone requested in the current terminal prompt. Open design previews and inspect supplied brand images before creating replacements.
- Build the new app with Next.js App Router, TypeScript, and Supabase. Make components accessible and reusable. Prefer server rendering for public content and small client components for interactive controls.
- Treat resources as reference data. Never move internal PDFs, design previews, or financial projections into public routes, the seed data, analytics, or published copy. Only approved public assets go into public/ or the production media bucket.
- Use exact cited or approved product claims. The working Shelf price is sourced from an indexed company page. The E-Invoice annual figures disagree. Keep unapproved prices out of public production output and manage approval per product via the CMS.
- Preserve the actual Addis Systems, HEX ERP, and Shelf artwork. Use labeled, synthetic data for product mockups. Follow the asset register and add source, dimensions, rights/approval, alt text, and files for new imagery.
- Keep database schema and grants/RLS in versioned migrations. Check authentication and role on the server for every CMS mutation. Store secrets in local/Vercel environment configuration and keep them out of source. Use stable identifiers and role-aware queries.
- Provide a functional build with loading, empty, error, and success states. Check mobile and desktop flows, keyboard navigation, price controls, contact persistence, and CMS draft/publish protections as applicable to each milestone.
- For irreversible work such as changes to production DNS or live content publication, use the user's requested scope and independently verify prerequisites. Development and preview can proceed while commercial details are being confirmed.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
