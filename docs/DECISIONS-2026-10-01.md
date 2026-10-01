# Rego Park Counseling — Decisions for the build (2026-10-01)

Source: "Rego Park Counseling – Pendientes y notas (2026-10-01)", section 7.
Owner: Jhonatan. Put this file in `docs/` and update `docs/PENDING.md` to match.

---

## DECIDED — implement now

### 7.1 Internal notes visible on pages → "Coming soon"

Every internal note listed in section 1.2 comes off the public pages. Nothing visible may
contain a PENDING code, a team member's name (Emmanuel, Oriana, Pavel, counsel, ads team),
or an instruction to us. Each note stays tracked in `docs/PENDING.md`.

Rule for each note:

- **Block-level placeholder** (a whole section, card or list waiting for data) → replace with
  the text **"Coming soon"**, styled as a quiet placeholder.
- **Inline note inside a sentence** (a bracket that qualifies a claim) → delete the bracket.
  If the sentence only made sense with the unconfirmed detail, remove the unconfirmed detail
  too, so the sentence reads correctly and claims nothing unconfirmed. Do not put
  "Coming soon" in the middle of a sentence.

| Note on the page today | Pages | Action |
|---|---|---|
| `[confirm per condition, PENDING 2.6/2d.5]` | 6 Mental Health condition pages | Inline → delete |
| `[confirm, PENDING 2a.4]` | Alcohol Use, Drug Use, Dual Diagnosis | Inline → delete |
| `[Update if psychiatry is confirmed.]` | 4 Mental Health pages | Inline → delete (keep the "we can coordinate with your doctor" line) |
| `[Confirm with Oriana and the ads team whether any ad pixels run…]` | /privacy-policy/ | Inline → delete |
| `[Counsel: update this section to the current Part 2 rule.]` | /hipaa-notice/ | Inline → delete (page keeps its "Draft for review" banner) |
| `[the authority named by counsel under current Part 2 rules]` | /hipaa-notice/ | Inline → delete the clause; sentence ends after the HHS OCR contact |
| `[Pending] Real staff photos, names, credentials and languages from Emmanuel` | Home, "Meet Our Counselors" | Block → **Coming soon** |
| `[Pending: Emmanuel to confirm what each clinic offers]` | /locations/ | Block → **Coming soon** |
| `[Pending] Staff at this clinic, with photos and consent` | /locations/rego-park/, /locations/fresh-meadows/ | Block → **Coming soon** |
| `…from Emmanuel. This page stays noindex until then` | /our-team/ | Block → **Coming soon** (page stays noindex) |
| `[3 to 4 sentence bio from Emmanuel…]` | /our-team/ | Block → **Coming soon** |
| `[Careers email or link: confirm with Emmanuel]` | /our-team/ | Block → **Coming soon** |
| `[add any DMV approvals only if held]` | /evaluations/dwi-evaluation/ | Inline → delete |
| `[confirm names if you want them listed, e.g. AUDIT, DAST]` | /evaluations/substance-abuse-evaluation/ | Inline → delete (say "standard screening questionnaires") |
| `[add: "and speak X, Y and Z" once confirmed]` | Home | Inline → delete |
| `[confirm; add EMDR only if a clinician is trained]` | /mental-health/ptsd-trauma-counseling/ | Inline → delete; do not mention EMDR |

Done when: a site-wide search of the built output finds no `PENDING`, `Emmanuel`, `Oriana`,
`Pavel`, `Counsel:`, `ads team`, `Confirm with` or `Update if` in any public page.
Neutral data brackets from section 1.3 (`[confirm]`, `[Hours: confirm]`, etc.) are out of
scope for this change.

### 7.3 Repository → stays where it is

`github.com/jhonatan-code/rego-park-counseling` stays in Jhonatan's account. Jhonatan adds
collaborators as needed. No transfer to elizabeth752. Remove 7.3 from the open decisions.

---

## RECOMMENDED — do NOT implement until Jhonatan approves each one

| # | Recommendation |
|---|---|
| 7.2 | Turn on Vercel Deployment Protection, and add `noindex` on every host that is not `www.regoparkcounseling.com`. Do this before sharing the preview with anyone at the client. |
| 7.4 | `/rego/` → 301 to `/programs/` (not `/programs/core/`). |
| 7.5 | `/12-step-program/` (7 clicks, 778 impressions): migrate by hand as a post. `/withdrawal-symptoms/` (0 clicks): 301 to `/substance-use/`. `/national-mental-health-and-substance-use-statistics/` (0 clicks): 301 to `/blog/`. |
| 7.6 | Confirm the four added redirects: `/substance-use-evaluation/` → `/evaluations/substance-abuse-evaluation/`, `/alcohol-counseling/` → `/substance-use/alcohol-use-treatment/`, `/dui-dwi-treatment/` → `/evaluations/dwi-evaluation/`, `/court-ordered-treatment/` → `/who-we-serve/court-involved/`. |
| 7.7 | Keep the elev8 blog SOP (no `/author/`), but every post byline links to `/our-team/{slug}/` once real people are named. That page is the author page for E-E-A-T. |
| 7.8 | Menu down to 6 items: Mental Health · Substance Use · Evaluations · Programs · Locations · Insurance. About and Contact move to the footer and top bar; the call button covers contact. |
| 7.9 | "substance abuse evaluation queens" belongs only to `/evaluations/substance-abuse-evaluation/`. The `/evaluations/` hub targets "drug and alcohol evaluations queens". |
| 7.10 | Share the list of home copy changes with Pavel and Julian. |
| 7.11 | Client and counsel decide on the cookie banner. Simplest path: no ad pixels on the site. |
| 7.12 | Keep "Download PDF" printing the page unless counsel asks for a signed PDF. |

Extra fixes (also wait for approval):

- Replace "Now welcoming new patients" (~220 pages, footer) with "Call to check availability".
- Use one neutral callback line everywhere ("We'll call you back as soon as possible") until the real timeframe is confirmed.
- Remove `community-support-table.webp` (looks AI-generated and shows a child).
- Before DNS: crawl the full redirect map against the preview and reconcile the counts (247 redirects / 131 × 410 in the build vs 270 / 132 in RPC_Sitemap_Redirect_Map_v2).

---

## IMPLEMENTED — 2026-10-01 (all items of "RECOMMENDED" approved with conditions)

Approved by Jhonatan on 2026-10-01. Details, launch steps and how to use the bypass token: `docs/PENDING.md` §5b.

| # | Done |
|---|---|
| 7.1 | Internal notes off the public pages ("Coming soon" blocks, inline notes deleted) |
| 7.2 | Vercel protection = all (switch back to Standard at DNS launch); noindex by host in vercel.json; `npm run test:noindex`; bypass token in `.env` |
| 7.3 | Repo stays in jhonatan-code |
| 7.4 | /rego/ → /programs/ |
| 7.5 | /12-step-program/ post; /withdrawal-symptoms/ → /substance-use/; **revised:** /national-…-statistics/ → /addiction-and-mental-health-how-they-are-connected/ (not migrated) |
| 7.6 | 4 added redirects confirmed |
| 7.7 | Byline links only to a real person's /our-team/{slug}/ |
| 7.8 | **Revised:** 7-item menu, About last as a dropdown (About Us, Our Team, Blog, Contact); Contact not a menu item (footer + call button); utility bar back to trust line + clinics, "Most Medicaid plans accepted · Telehealth available" from 1280px |
| 7.9 | /evaluations/ → "drug and alcohol evaluations queens" |
| 7.12 | No change |
| Extras | "Call to check availability"; one callback line; AI image removed; lock + private line with Privacy · HIPAA links; lead logs redacted; redirect crawl (410 bug found and fixed) — `docs/REDIRECT-CRAWL.md` |
| Open | 7.10 (share home copy changes), 7.11 (cookie banner: client + counsel) |

### Later the same day

| # | Done |
|---|---|
| Conversion | ONE event: `lead_accepted` (only with `?sent=1` + the one-time marker, after CTM accepts); `callback_submit` retired. Reload / direct visit don't fire it (tested). For Oriana: PENDING 5.16 |
| Privacy | Draft Privacy Policy discloses ad click identifiers (gclid…) kept for the visit (PENDING 5.11) |
| CTM | 8 s timeout may duplicate a lead if CTM answers late: Oriana checks de-duplication (PENDING 5.17) |
