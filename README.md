# Rego Park Counseling — website

Local build of the new www.regoparkcounseling.com. See `CLAUDE.md` for sources and rules.

```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Built (2026-09-30)
- Header: utility bar, logo, 7 items with mega panels (hover + keyboard, Escape closes), phone, one magenta "Request a Callback" (opens a dialog on every page). Mobile: full-screen accordion menu + sticky Call | Request a Callback bar.
- Footer: NAP per clinic, 5 link columns, licensing, independent-clinic line, legal links.
- Home: all brief sections except 12 (Reviews, skipped at launch: 3.2 from 20). Organization + MedicalClinic ×2 + WebSite + FAQPage schema.
- Every other sitemap URL is a blank noindex placeholder.

## Pending (from Emmanuel via Julian unless noted)
- Clinic hours (cards show "Hours coming soon"), Yonkers address + date.
- Fresh Meadows address format: brand manual/brief say "71-82 Parsons Blvd", current site shows "7182". Map pin is approximate.
- Neighborhoods + transit lines in section 6 (brief marks them "proposed").
- Team photos, names, credentials, languages (team section shows placeholders; "A team that reflects Queens" waits for languages).
- Real clinic/team photos: every image except the 99th Street entrance is stock from the current site.
- Logo vector (PNG is 347×75) and emblem crop for favicon (no favicon yet → 404 in console).
- CTM: create the RPC FormReactor, map custom fields (Oriana), set env vars. Until then the form shows "not connected yet".
- Google Business Profile URLs for schema `sameAs`.
- Pavel: refine home copy and FAQ answers in `src/data/home.js`.
- The brief's speed notes mention Elementor/NitroPack; this build is Astro, so those don't apply.
