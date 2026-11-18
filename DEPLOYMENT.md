# Deployment plan

Use a company-owned Vercel team and a company-owned Supabase organization. Vercel hosts the Next.js application and its server routes. Supabase stores content, staff accounts, media, and inquiries. The domain remains registered through the current provider. Manage records where the domain's authoritative DNS is hosted. Use Vercel Pro for the commercial site because Hobby is restricted to personal and non-commercial use.

## 1. Prepare Supabase

1. Create a staging project and a production project. Apply the repository's versioned migrations in order. Verify database and Storage policies with anonymous, editor, publisher, and sales sessions.
2. Configure the approved production Site URL and exact permitted callback paths. Add only the needed preview and local callback URLs to the appropriate environment. Test the invite and password-recovery emails with the chosen sender configuration.
3. Set up a public delivery bucket for approved assets and a private working bucket for drafts. Provision the first administrator using a documented one-time procedure.
4. Use an example environment file with names and empty values. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and `NEXT_PUBLIC_SITE_URL` per environment. Keep any Supabase server secret such as `SUPABASE_SECRET_KEY` server-only, and use it only where specifically needed. Avoid sharing production keys with local or preview deployments.
5. Decide how to restore the database and media. Review available backup retention and usage limits for the chosen Supabase plan.

## 2. Deploy the Vercel preview

1. Push the application to a company-owned Git repository after checking `git status` and `git check-ignore`. The two pricing PDFs, internal notes, and site previews are workspace references.
2. Import the repo into Vercel. Use the starter repo as the project root. Apply the staging environment variables to previews and production variables only to production.
3. Test the application on the Vercel URL. Restrict preview access where available. Keep the preview out of search results. Test Supabase sign-in callbacks, price approval, blog publish/unpublish, protected drafts, inquiry submission, redirects, and public media.
4. Get sign-off on prices, screenshots, claims, and contact channels. Run the PRD release checks. Record the current production hosting and how to restore it.

## 3. Connect addissystems.et

Recommended canonical host: **www.addissystems.et**. Configure the apex **addissystems.et** to redirect to the canonical host after the two domains are connected.

| DNS entry | Action |
|---|---|
| Apex `@` | Add or update the website record using the exact type and target shown for `addissystems.et` in Vercel. Typically this is an A record. |
| `www` | Add or update the website record using the exact target shown for `www.addissystems.et` in Vercel. Typically this is a CNAME. |
| Ownership verification | Add the specific TXT record Vercel provides if prompted. |
| Email and other services | Preserve MX, SPF, DKIM, DMARC, verification records, and unrelated subdomains. Check CAA only if certificate issuance needs it. |

1. Confirm who manages the authoritative DNS using `Resolve-DnsName addissystems.et -Type NS` in PowerShell or `dig NS addissystems.et`. If Ethio telecom hosts that zone, make the changes through its DNS management or authorized support. If the nameservers point elsewhere, edit the zone at that provider.
2. Export or record the full DNS zone and existing web-record values. If practical, lower the website-record TTL ahead of cutover. Add both domains in **Vercel → Project → Domains** and copy the exact records shown.
3. Change only the web records and any requested ownership verification. Resolve conflicting records on those exact hosts after confirming their purpose. The nameserver configuration can stay where it is.
4. Verify DNS from multiple resolvers, Vercel’s domain status, certificates for both hosts, canonical redirect, auth callbacks, pricing, and a real inquiry. Verify company email still sends and receives. Update the production sitemap and canonical URLs, then submit the sitemap in Search Console.
5. If the application fails, roll back to the last healthy Vercel deployment when practical. If the cutover itself needs reversal, restore the previous website DNS records and verify the former site over HTTPS. Keep the old host available during the transition.

## Official documentation

- [Vercel custom domain setup](https://vercel.com/docs/domains/set-up-custom-domain)
- [Vercel Hobby plan restrictions](https://vercel.com/docs/plans/hobby)
- [Supabase server-side auth](https://supabase.com/docs/guides/auth/server-side)
- [Supabase redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls)
- [Supabase Postgres row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase Storage access control](https://supabase.com/docs/guides/storage/security/access-control)
- [IANA .et registry information](https://www.iana.org/domains/root/db/et.html)
