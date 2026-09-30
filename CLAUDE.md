# Rego Park Counseling — website build

Astro 7 + Tailwind v4 + @astrojs/vercel (same pattern as `../sunview-wellness`). Replaces the WordPress site at www.regoparkcounseling.com.
Run: `npm run dev` · build: `npm run build` · images: `npm run images` (sources in `assets/official-site/`).

## Sources of truth (docs/)
- `docs/brand/RPC Brand Manual Guide.pdf` — colors, type, Nearby Ring, icons, photo rules, components, ship checklist.
- `docs/content/Rego Park Counseling — Header & Home Page Brief.pdf` — header, footer, home (14 sections), SEO, schema, tracking.
- `docs/content/Rego Park Counseling — Consolidated Wiki.pdf` — client rules, open questions, owners.
- `docs/content/RPC_Sitemap_Redirect_Map_v2.xlsx` — New Sitemap (43 URLs, exported to `src/data/sitemap.json`), Redirect Map, Server Rules.
- `docs/seo/` — GSC + Semrush exports, backlinks.
Anything missing → take it from the official site (content, images) before inventing.

## Hard rules (brand manual 12 + wiki)
- Outpatient only. No IOP, detox, inpatient, residential, MAT/Suboxone/Vivitrol offer.
- OASAS (never OASIS), OMH named. Never name insurance plans; "most Medicaid plans" only.
- Psychiatry, couples, LGBTQ+ stay out (`pending: true` in `src/data/site.js`) until Julian confirms.
- Magenta (`btn-call`) = call/callback actions only. Header has exactly one magenta button.
- Nearby Ring: one per screen, never behind body text. Logo never recolored; white plate on dark.
- Body text ≥ 16px, 48px tap targets, Harbor focus ring, 200ms fades only.
- Brand separation: never name/target the Queens Blvd center's address; show RPC NAP near logo/footer.
- No photos with head-in-hands, pills, hospital, dark filters. Stock images are placeholders until the photo session.
- Max widths: content 1180px (`container-x`), header 1480px (`container-header`); nothing wider than the header.
- GTM (GTM-T3S8L3WL) loads only on the regoparkcounseling.com host, never on localhost/previews.

## Structure
- `src/data/site.js` — NAP, clinics, NAV (mega menus), legal links. One edit fixes header, footer, cards.
- `src/data/home.js` — home copy (working copy for Pavel), FAQ (also FAQPage schema), hand-picked posts.
- `src/pages/[...slug].astro` — blank noindex placeholders for every sitemap URL until each brief arrives.
- `src/pages/api/lead.ts` — CTM FormReactor proxy; env `CTM_FORMREACTOR_ENDPOINT` / `CTM_FORMREACTOR_KEY`.

## Open items
See README.md "Pending".
