# Rego Park Counseling — website

Local build of the new www.regoparkcounseling.com. See `CLAUDE.md` for sources and rules.

```
npm install
npm run dev      # http://localhost:4321 (this session runs it on :4330)
npm run build
```

## Built (2026-09-30)
- Header: utility bar, logo, 8 items (About first, Contact Us last) with mega panels (hover + keyboard, Escape closes), ONE magenta call button. Mobile: full-screen accordion menu + sticky Call | Request a Callback bar. One form per page (home section 2, inner pages in the banner); "Request a Callback" links scroll to it.
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
- Logo vector (PNG is 347×75) and emblem crop for favicon (empty favicon placeholder until then).
- CTM: create the RPC FormReactor, map custom fields (Oriana), set env vars. Until then the form shows "not connected yet".
- Google Business Profile URLs for schema `sameAs`.
- Pavel: refine home copy and FAQ answers in `src/data/home.js`.
- The brief's speed notes mention Elementor/NitroPack; this build is Astro, so those don't apply.
- About/Team/Contact brackets: license numbers, neighborhoods list, licenses mix + languages, leadership names/bios, staff list with consent, reviewers, careers contact, Fresh Meadows own phone, hours, transit/bus lines, referral email/fax, callback promise ("usually the same business day" used everywhere; brief says "within one business day — confirm").
- Contact brief asked for extra fields (clinic, need, best time) and a /thank-you/ redirect: not applied (user's one-form decision). Recommend the /thank-you/ redirect for the conversion once CTM is live.
- /contact-us/ and /contact-us-2/ 301 in vercel.json; the full Redirect Map goes in at launch.
- Deviation from sitemap v2 (user, 2026-09-30): Our Team lives at `/our-team/` (not `/about/our-team/`), person pages at `/our-team/{slug}/` (Elev8 SOP; max two levels). Still in the About menu. `/about/our-team/*` 301s in vercel.json. Tell Julian.
- Mental Health (hub + 6 condition pages, `src/data/mental-health.js`): brackets for Emmanuel = therapy approaches (CBT/DBT/EMDR…), psychiatry/medication line, referral needed?, typical wait, session frequency, languages, Fresh Meadows "new mental health patients" label, clinical reviewer (reviewedBy schema). Gated (not shown until confirmed): group therapy for depression FAQ, court-referred anger management section; anger meta description drops "court-referred" until then. Psychiatry page not built. 12 old URLs 301 in vercel.json.
