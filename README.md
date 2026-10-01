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
- Blog (Elev8 SOP Blog/Post/Author): /blog/ hub (authors row + category tabs filter in-page, 2-then-3 grid, Show more), one post template for all 179 migrated posts at their root URLs (`src/pages/[post].astro`), one person template for team members and authors (`/our-team/{slug}/`). Posts: `src/data/posts.json` from `python3 scripts/import-wp-posts.py`; card/og graphics from `scripts/generate-post-graphics.mjs`.
- Every other sitemap URL is a blank noindex placeholder (`src/data/built.js` lists the real ones).

## Pending
All open questions, gates and build decisions live in **`docs/PENDING.md`** (updated after every page).
