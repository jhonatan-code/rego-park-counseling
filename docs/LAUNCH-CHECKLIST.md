# Rego Park Counseling — Launch checklist

**The single source of what blocks going live.** Consolidates `docs/PENDING.md`, `docs/AUDIT-2026-09-30.md`
and `docs/DECISIONS-2026-10-01.md`. Details stay in PENDING; this file only says what must be true before
launch, who owns it and whether it's done. When an item closes, mark it here **and** in PENDING.

Created 2026-10-01. Status: **Open** · **Done**.
Owners: **Emmanuel** (client) · **Counsel** (RPC's attorney / compliance officer) · **Oriana** (CTM / GTM) ·
**Cristofer** (local SEO) · **Jhonatan** (build).

---

## A. Legal and privacy

| # | Item | Owner | PENDING | Status |
|---|---|---|---|---|
| A1 | Counsel approves the Privacy Policy, the HIPAA Notice of Privacy Practices (incl. 42 CFR Part 2, current rule) and the Telehealth & Text Messaging Terms. If RPC already has an approved NPP, its exact text replaces the draft. Also open: Section 1557 non-discrimination notice + language taglines | Counsel (Emmanuel to arrange) | 5.13 | Open |
| A2 | After A1: set `approved: true` (with approver + date) for `PRIVACY_POLICY`, `HIPAA_NOTICE` and `TELEHEALTH_TERMS` in `src/data/legal.js`, which removes the "Draft for review" note. `ACCESSIBILITY` is already `approved: true` | Jhonatan | 5.13 | Open |
| A3 | Legal dates filled in: Privacy "Effective date: [date of launch] · Last updated: [date]", HIPAA "Effective date: [ ]", Telehealth "Last updated: [date]", Accessibility "Last reviewed: [launch date]" | Jhonatan (on launch day) | 5a.4 | Open |
| A4 | Names and contacts the legal pages need: Privacy Officer (5a.1), privacy-request email (5a.2), authority for Part 2 violation reports (5a.3, Counsel), telehealth platform details (5a.5) | Emmanuel / Counsel | 5a.1–5a.3, 5a.5 | Open |
| A5 | Signed BAA between RPC and CallTrackingMetrics. When signed, the form's privacy line becomes "Your information is private and secure." | Emmanuel / Oriana | 5.10 | Open |
| A6 | SMS consent checkbox: counsel approves the wording (`sms-v2-2026-10-01`) and Oriana confirms it matches the A2P 10DLC registration (incl. which privacy/terms URLs the registration lists, 5a.6); reactor gets `sms_opt_in` + `sms_consent_version` | Counsel / Oriana | 5.9, 5a.6 | Open |
| A7 | Call recording: are CTM calls recorded, and is it disclosed? | Emmanuel / Oriana | 5.12, 5a.8 | Open |

## B. Forms, tracking and analytics

| # | Item | Owner | PENDING | Status |
|---|---|---|---|---|
| B1 | `CTM_FORMREACTOR_ENDPOINT` and `CTM_FORMREACTOR_KEY` set in Vercel for Production and Preview | Jhonatan | 5.1, 5.18 | Open |
| B2 | One real test lead, marked as a test, client told first, record checked field by field in CTM (forms-ctm §6). Checklist a–f already verified against a fake CTM | Jhonatan / Oriana | 5.18 | Open |
| B3 | GTM container reviewed: which tags fire, any ad pixel or automatic data collection | Jhonatan (review) · Emmanuel (decides) | 5.11, 5a.7 | Open |
| B4 | Cookie / consent banner decided by client + counsel (simplest path: no ad pixels on the site) | Emmanuel / Counsel | 5.11, 7.11 | Open |
| B5 | `lead_accepted` configured in GTM as the ONLY conversion (GA4 key event + any Ads conversion); `waitlist_signup` tracked as a normal event, not a conversion; no trigger on `callback_submit` | Oriana | 5.16 | Open |
| B6 | CTM de-duplication checked for late CTM answers (8 s timeout) | Oriana | 5.17 | Open |

## C. Content that can't ship as a guess

| # | Item | Owner | PENDING | Status |
|---|---|---|---|---|
| C1 | **Referral path for MAT / detox** (who we refer to; can the primary care company be named). Marked "Launch blocker" in PENDING | Emmanuel | 2a.1 | Open |
| C2 | The rest of section 2a ("brackets here are launch blockers"): substances treated (2a.2), schedule and length (2a.3), what treatment includes (2a.4), services per clinic (2a.5), abstinence / reduction stance (2a.6), naloxone (2a.7), adolescents (2a.8) | Emmanuel | 2a.2–2a.8 | Open |
| C3 | Remaining visible brackets resolved or removed. Count on the 2026-10-01 build: **205 brackets on 35 pages** (most: /our-team/ 26, both clinic pages 18 each, SA evaluation 14, DWI 13, /locations/ 10, /insurance/ 10). Most common: "[confirm]", "[Confirm.]", "[Name]", "[Credential]", "[photo needed]". Re-count from the build before launch | Emmanuel (answers) · Jhonatan (applies / removes) | 7.1 (and the open items in §1–3) | Open |
| C4 | Clinical authorship: posts stay signed by the clinic (Organization byline) until a real person agrees and reviews. Named authorship is blocked, launch is not | Emmanuel | 3.4 | Done for launch (Organization byline) |

## D. Quality

| # | Item | Owner | PENDING | Status |
|---|---|---|---|---|
| D1 | axe (WCAG 2.0/2.1 A+AA) and Lighthouse on every template, desktop + mobile. Done so far: the 6 legal/utility pages (axe). The Accessibility Statement may only claim what the templates pass | Jhonatan | 5a.12 | Open |

## E. DNS day (in this order)

| # | Item | Owner | PENDING | Status |
|---|---|---|---|---|
| E1 | Vercel Deployment Protection back to **Standard** (`all_except_custom_domains`), or the real domain asks for a Vercel login | Jhonatan | 7.2 | Open |
| E2 | Connect `www.regoparkcounseling.com` (and the apex redirect to www) to the Vercel project | Jhonatan | 7.2 | Open |
| E3 | Verify `www.regoparkcounseling.com` has **no** noindex: `npm run test:noindex` and `npm run test:noindex -- https://www.regoparkcounseling.com/` | Jhonatan | 7.2 | Open |
| E4 | Full crawl of the redirect map against the live domain (`node scripts/crawl-redirect-map.mjs https://www.regoparkcounseling.com`), counts reconciled with `RPC_Sitemap_Redirect_Map_v2` (see `docs/REDIRECT-CRAWL.md`) | Jhonatan | DECISIONS extras, 7.2 | Open |
| E5 | New sitemap (`/sitemap-index.xml`) submitted in Search Console; old WordPress sitemaps removed | Cristofer | — | Open |
| E6 | GTM-T3S8L3WL live on production (it loads on the production host only) and firing; `lead_accepted` seen in GA4 DebugView | Oriana | 5.16 | Open |
| E7 | GoDaddy: change **only** the A record (apex) and the `www` CNAME. Do **not** touch MX, SPF or other TXT records (email and verifications) | Jhonatan | — | Open |

## F. Final go-live approval

| # | Item | Owner | PENDING | Status |
|---|---|---|---|---|
| F1 | Written go-live approval, recorded here with **who** and **when**. All items above Done, or explicitly accepted as open by the approver | Who: _to be named_ · When: _—_ | — | Open |
