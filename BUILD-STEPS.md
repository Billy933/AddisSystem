# Build steps

## Milestone 1 — Frontend and design system

> Implement the public website in the PRD. Build Home, About Us, Products and Service, Blog, and Contact Us, with dedicated HEX ERP, Shelf App, and E-Invoice pages and responsive layouts. Create reusable product modules, pricing controls and comparison tables, and a prominent per-product demo CTA. Start with the real brand assets and clearly labeled product screens. Give me a local review and test mobile, keyboard, and route navigation.

Review the homepage and a dedicated product page side by side before polishing the rest. Check a narrow phone viewport, an average laptop viewport, and reduced motion. Identify any products for which approved screenshots are still needed.

## Milestone 2 — Backend and CMS

> Read the CMS and data requirements in PRD.md. Implement Supabase migrations, auth, roles, draft/published revisions, media, pricing approval, and inquiry capture. Build the CMS with the same typography and accessible components as the public site. Test from a public visitor, editor, and admin account. Show how to update a product page, preview a draft post, publish it, and find a demo inquiry.

Keep staging fixtures separate from approved release content. Use a persistent test database and verify privileged operations using actual account roles.

## Milestone 3 — Production readiness

> Follow DEPLOYMENT.md to prepare a Vercel staging build. Run the launch checklist, verify metadata and old-page redirects, verify content and prices against the approval list, and document the exact DNS records Vercel gives this project. Keep production DNS and publication pending until I request the cutover.

Review the staging site with sales and content owners. Record the last known good deployment and applicable DNS records before cutover.
