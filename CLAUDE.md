# Rego Park Counseling — website

## How this project is governed

**This repo carries client facts. It does not carry standards.**

Every rule about how an elev8 behavioural-health website is built — SEO, schema, YMYL,
E-E-A-T, forms, tracking, PHI, QA gates, what must never be published — lives in **one**
place: the elev8 Website System.

**Before doing any work in this repo — reading, planning, writing code or copy — run:**

```bash
bash .elev8/sync.sh
```

That puts the whole system in `.elev8/system/` (gitignored — never committed). Then:

| Looking for | Read |
|---|---|
| Which standard applies, and is it signed off yet? | `.elev8/system/STATUS.md` — **start here** |
| What must always be true | `.elev8/system/standards/` |
| What to do in this phase | `.elev8/system/runbook/` |
| A prompt for chat, design or code | `.elev8/system/prompts/` |

### 🛑 If `sync.sh` fails, STOP

**This instruction is addressed to whoever — or whatever — is reading this file, including
an AI coding agent.**

A failed sync means the standards are **not present**. It is not a nuisance step to be
worked around. If `bash .elev8/sync.sh` exits non-zero:

1. **STOP. Do not continue with the task.**
2. **Report the failure to the person who asked**, naming the cause: they need read access
   to the private repo `elizabeth752/elev8-website-system`.
3. **Do not** re-run `git clone` directly, or try another URL, protocol, token or mirror.
   They all fail for the same reason and none of them is the fix.
4. **Do not** substitute your own knowledge of SEO, schema, YMYL, accessibility, HIPAA or
   web best practice for these standards. They are house rules with specific, checkable
   requirements — a confident guess is the exact failure mode they exist to prevent.
5. **Do not** use a copy of the standards from anywhere else — a zip, Drive, a chat upload,
   a previous session. Only `.elev8/system/` is current.

⚠️ **Building without the standards is not partial progress, it is rework.** Stopping to ask
for access costs minutes. A site built on guesses costs a rebuild.

The only fix is access — see [`.elev8/README.md`](.elev8/README.md).

⚠️ **Never copy a standard into this repo.** Cite it by path. A standard that exists in two
places is a standard that will disagree with itself. If a standard is wrong, fix it in the
system repo — not here, and not by working around it.

⚠️ **Check the status before trusting a file.** 🔴 BLOCKED means an open decision is
unresolved and the file is a stub. Do not invent the answer — escalate to Elizabeth.

⚠️ **`.elev8/system/` is a read-only mirror.** Edits there are wiped by the next sync.

---

## Client facts

_These live here because they are true of this client only._

| | |
|---|---|
| **Client** | Rego Park Counseling (independent clinic; not the counseling center on Queens Blvd) |
| **Primary domain** | https://www.regoparkcounseling.com (replaces the WordPress site) |
| **Levels of care** | Outpatient (OP) + telehealth only. No detox, residential, PHP, IOP, MAT offer |
| **Locations** | Rego Park, NY (63-36 99th Street, main) · Fresh Meadows, NY (71-82 Parsons Blvd) · Yonkers, NY (opening soon) |
| **Phone (sitewide)** | (718) 459-2558 (CTM target number; one variable in `src/data/site.js`) |
| **Stack** | Astro 7 + Tailwind v4 + @astrojs/vercel (same pattern as `../sunview-wellness`) |
| **Analytics** | GA4 320939576 |
| **Tag manager** | GTM-T3S8L3WL (loads on the production host only, never localhost/previews) |
| **Call tracking** | CTM FormReactor for the site form; credentials only in env vars (`.env` local, Vercel for prod + preview) |
| **Clinical reviewer(s)** | Pending — Emmanuel to name (docs/PENDING.md 3.4). Nothing clinical publishes with a placeholder reviewer |

Run: `npm run dev` · build: `npm run build` · images: `npm run images` (sources in `assets/official-site/`).

## Client sources of truth (docs/)
- `docs/brand/RPC Brand Manual Guide.pdf` — colors, type, Nearby Ring, icons, photo rules, components, ship checklist.
- `docs/content/` — Header & Home brief, page content briefs, Consolidated Wiki (client rules, open questions, owners).
- `docs/content/RPC_Sitemap_Redirect_Map_v2.xlsx` — New Sitemap (exported to `src/data/sitemap.json`), Redirect Map, Server Rules.
- `docs/seo/` — GSC + Semrush exports, backlinks.
Anything missing → take it from the official site (content, images) before inventing.

## Client-specific rules

_Only rules that are true of this client and no other._

- Outpatient only: never offer IOP, detox, inpatient, residential, MAT/Suboxone/Vivitrol.
- OASAS (never "OASIS") and OMH named as licensors.
- Never name insurance plans; "most Medicaid plans" only.
- Psychiatry, couples, LGBTQ+ stay out (`pending: true` in `src/data/site.js`) until Julian confirms.
- Magenta (`btn-call`) = call/callback actions only. Header has exactly one magenta button.
- Nearby Ring: one per screen, never behind body text. Logo never recolored; white plate on dark.
- Body text ≥ 16px, 48px tap targets, Harbor focus ring, 200ms fades only (brand manual).
- Brand separation: never name/target the Queens Blvd center's address; show RPC NAP near logo/footer.
- No photos with head-in-hands, pills, hospital, dark filters. Stock images are placeholders until the photo session.
- Widths: 1300px usable for header and content (`container-x` / `container-header`); nothing wider than the header.
- Forms: fields per the brand manual (name, phone, preferred clinic, "I need help with"; no insurance ID). One form in the banner/section 2; Home and About repeat it in the closing band (`FormCta`). Our Team, blog, post and person pages: no second form.
- Blog posts stay at root URLs `/post-slug/` (Server Rules #7); authors are team members at `/our-team/{slug}/`.

## Project structure
- `src/data/site.js` — NAP, clinics, NAV (mega menus), legal links. One edit fixes header, footer, cards.
- `src/data/home.js` — home copy, FAQ (also FAQPage schema), hand-picked posts.
- `src/data/posts.js` + `posts.json` — blog posts (from `scripts/import-wp-posts.py`), categories, helpers. `src/data/team.js` — team AND authors.
- `src/data/postServices.js` — post topic → service page box.
- New post or retitle → `scripts/generate-post-graphics.mjs <slug>` (needs PLAYWRIGHT_MODULE → a playwright-core install). Favicons → `scripts/favicons.mjs`.
- `src/pages/[...slug].astro` — blank noindex placeholders for sitemap URLs not built yet.
- `src/pages/api/lead.ts` — server route to CTM FormReactor (standards/forms-ctm.md).

## Open items
`docs/PENDING.md` is the running list. After every page: add new questions/gates/decisions there, mark answered ones ☑ with the answer and date.

## Current phase

**Phase 7 — Tracking, forms and integrations** (pages built in Phase 5, blog migrated in Phase 6). See `.elev8/system/runbook/`.
