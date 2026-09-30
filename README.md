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
- About Us, Our Team, Contact (About Section Content brief): banner with H1/paragraph left and the form right (user rule for inner pages). Our Team stays noindex + out of the sitemap while staff entries are placeholders (`src/data/team.js`).
- Every other sitemap URL is a blank noindex placeholder (`src/data/built.js` lists the real ones).

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
- About/Team/Contact brackets: license numbers, neighborhoods list, licenses mix + languages, leadership names/bios, staff list with consent, reviewers, careers contact, Fresh Meadows own phone, hours, transit/bus lines, referral email/fax, callback promise ("usually the same business day" used everywhere; brief says "within one business day — confirm").
- Contact brief asked for extra fields (clinic, need, best time) and a /thank-you/ redirect: not applied (user's one-form decision). Recommend the /thank-you/ redirect for the conversion once CTM is live.
- /contact-us/ and /contact-us-2/ 301 in vercel.json; the full Redirect Map goes in at launch.
