# Rego Park Counseling — Pending notes

Running list, updated after every page. Each item stands on its own: what we have, what's missing, where it shows.
Status: ☐ open · ◐ partly answered · ☑ resolved (kept for the record, with the answer and date).
Owner: **E** = Emmanuel (via Julian) · **J** = Julian · **P** = Pavel (content) · **O** = Oriana (CTM) · **Jh** = Jhonatan · **C** = Cristofer (local SEO).

Last update: 2026-09-30 (after Locations section).

---

## 1. Clinic facts (block several pages)

| # | Question | What we have now | Where it shows | Owner | Status |
|---|---|---|---|---|---|
| 1.1 | Hours for each clinic | "Hours coming soon. Call us to book." / "[Hours: confirm]" | Home, Contact, every service page, footer, schema `openingHours` | E | ☐ |
| 1.2 | Exact Fresh Meadows address format ("Blvd" or "Boulevard"? "71-82" or "7182"?) | Site uses "71-82 Parsons Blvd" everywhere (brand manual). Locations/Contact briefs write "71-82 Parsons Boulevard"; current site says "7182 Parsons blvd". Must match the Google profile character for character | Everywhere (NAP) | E / C | ☐ Tip: C can read it off the GBP once created |
| 1.3 | Does Fresh Meadows have its own phone? | Uses (718) 459-2558 | Contact, cards, footer | E | ☐ |
| 1.4 | Fresh Meadows map pin | Approximate (Parsons Blvd at 71st Ave) | Maps on Home, Contact | C | ☐ Take coordinates from the GBP |
| 1.5 | Yonkers address, opening month, planned services | "Opening soon"; sub says "[in early 2027 / month — confirm]"; 4 planned services "[confirm]"; no clinic schema | Home, Contact, /locations/yonkers/ | E | ☐ |
| 1.6 | Neighborhoods + trains/buses to name | Proposed: Rego Park near Forest Hills, Elmhurst, Middle Village, Kew Gardens, M/R at 63rd Drive; Fresh Meadows near Flushing, Hillcrest, Bayside, Jamaica Estates. Bus lines and parking unknown | Home "Getting here", About "Who we serve", Contact | E | ☐ |
| 1.7 | "Now welcoming new (mental health) patients" label for Fresh Meadows | Shown as "Now welcoming new patients"; hub shows "…new mental health patients [confirm]" | Cards, footer, MH hub | E | ☐ |
| 1.8 | Callback promise | "usually the same business day" used everywhere (brand manual). About brief says "within one business day — confirm" | Forms, hero copy | E | ☐ |
| 1.9 | Referral contact for courts / case managers (email or fax) | "[referral email or fax, confirm]" | Contact | E | ☐ |
| 1.10 | Show license / certificate numbers on About? | Not shown | About "Licensed and Accountable" | E | ☐ |
| 1.11 | Services offered at each clinic | Comparison table on /locations/ shows "✓ [confirm]" / "[ ]"; Rego Park 8 service cards "[confirm the list]"; Fresh Meadows "Other services [confirm which apply]" | /locations/, clinic pages, schema `availableService` | E | ☐ |
| 1.12 | Transit, parking and accessibility per clinic | Brackets: subway walk time, bus lines (Q38/Q72?), parking, elevator/step-free | Clinic pages "Getting here" | E | ☐ |
| 1.13 | Nearest cross street for Rego Park | "[near the corner of 63rd Drive — confirm]" | Rego Park FAQ | E | ☐ |
| 1.14 | Languages spoken at each clinic | Fresh Meadows "Counseling in Your Language" block is **hidden** until confirmed (Mandarin/Cantonese/Korean/Spanish would be a big local differentiator) | Fresh Meadows | E | ☐ |
| 1.15 | Is telehealth available statewide or only for Queens residents? | "[confirm]" on /locations/ | /locations/, Telehealth page | E | ☐ |
| 1.16 | Can evaluations be done at Rego Park? (and Fresh Meadows?) | Rego Park FAQ "[Confirm.] Yes…" | Rego Park FAQ, table | E | ☐ |

## 2. Services and clinical claims (compliance gates)

| # | Question | Now | Where | Owner | Status |
|---|---|---|---|---|---|
| 2.1 | Is psychiatry / medication management offered? | Psychiatry page not built, not in menu. Medication line: "We can coordinate with your doctor or psychiatrist [confirm]" | Anxiety FAQ, Bipolar, Schizophrenia, menu | E | ☐ |
| 2.2 | Which therapy approaches do clinicians use? (CBT, DBT, trauma-focused CBT, EMDR, MI, family therapy) | "such as CBT [confirm]", "trauma-focused CBT [confirm; EMDR only if trained]" | Anxiety, Depression, PTSD | E | ☐ |
| 2.3 | Is a referral needed? | "[Confirm.] Most people call us directly…" | MH hub FAQ | E | ☐ |
| 2.4 | Typical wait for a first appointment | "[Confirm typical wait.]" | MH hub FAQ | E | ☐ |
| 2.5 | Typical session frequency | "usually once a week [confirm]" | MH hub steps | E | ☐ |
| 2.6 | Group therapy for depression/anxiety, or only substance use? | Depression FAQ about group therapy is **hidden** until confirmed | Depression FAQ | E | ☐ |
| 2.7 | Court-referred anger management? Format (class, group, individual)? | Court section **hidden**; meta description without "court-referred"; FAQ answers carry "[Confirm]" | Anger Management | E | ☐ |
| 2.8 | Is IOP offered? | Never mentioned (outpatient only) | Substance Use pages (next) | E | ☐ |
| 2.9 | Couples counseling real? | Page not built, not in menu | Therapies | E | ☐ |
| 2.10 | LGBTQ+ affirming care can be featured? | Page not built, not in menu | Who We Serve | E | ☐ |
| 2.11 | Is ATI (Alternatives to Incarceration) an actual program? | Not named | Court-Involved (next) | E | ☐ |

## 3. Team and authors

| # | Question | Now | Where | Owner | Status |
|---|---|---|---|---|---|
| 3.1 | Staff list: name, credential (as on license), role, clinic, languages, 2–3 sentence bio, headshot, **written consent** | 4 placeholder cards; /our-team/ is noindex + out of sitemap until real | Home "Meet Our Counselors", /our-team/ | E | ☐ |
| 3.2 | Emmanuel's last name + title; Clinical Director name + credential | Placeholders | /our-team/ Leadership | E | ☐ |
| 3.3 | Languages spoken by the team | "[add languages]" | Home "Why", MH hub "Why", /our-team/ | E | ☐ |
| 3.4 | Who authors and reviews clinical articles? | Reviewer line with brackets; no `reviewedBy` schema yet | /our-team/, all MH pages (schema), blog | E | ☐ |
| 3.5 | Careers: show hiring band? where do applications go? | Band with "[confirm]" | /our-team/ | E | ☐ |

## 4. Brand and assets

| # | Question | Now | Owner | Status |
|---|---|---|---|---|
| 4.1 | Logo vector file (SVG/AI/EPS) | Using the 347×75 PNG | E | ☐ |
| 4.2 | Emblem-only crop for favicon (needs approval) | Empty favicon placeholder | E | ☐ |
| 4.3 | Team and clinic photo session. Per clinic: outside, entrance/signage, waiting area, counseling room | Only real photo: 99th Street entrance. Clinic pages show "[photo needed]" tiles; everything else is stock from the current site | E / J | ☐ |
| 4.4 | Approve "Care close to home" and the brand manual | Brand manual v1.0 is a draft for Emmanuel | E | ☐ |
| 4.5 | Brand manual says "no insurance ID" in forms; the user added Membership Policy ID + Insurance Carrier (Sunview field set) | Form has the 4 Sunview fields | J → E | ☐ Tell Julian |
| 4.6 | Google profile URLs for schema `sameAs` | Not set | C | ☐ |
| 4.7 | Current Google profile name, primary category (Rego Park: Addiction treatment center?) and NAP, so the page matches exactly | Page uses site.js NAP | C | ☐ |
| 4.8 | Create the Fresh Meadows Google profile (primary category Mental health clinic?) with the same NAP as the page | Page ready at /locations/fresh-meadows/ | C | ☐ |
| 4.9 | After launch: each profile's website link → its clinic page (not home); products → the service pages listed on each clinic page | — | C | ☐ |

## 5. Tracking and tech

| # | Question | Now | Owner | Status |
|---|---|---|---|---|
| 5.1 | Create the RPC FormReactor; map custom fields (`membership_policy_id`, `insurance_carrier`, `source_page`, `form_location`) | Form shows "not connected yet" (honest error) | O | ☐ |
| 5.2 | Clinic no longer sent with the lead (field removed by the user) | Route by CTM tracking number per clinic instead | O | ☐ |
| 5.3 | Redirect to /thank-you/ after submit to fire the conversion (Contact brief) | Inline confirmation today. Recommended | Jh (decision: user) | ☐ |
| 5.4 | CTM Marketing Pro purchase; DNI number pools per clinic | Phones are live text ready for DNI | J | ☐ |
| 5.5 | Owner of services.regoparkcounseling.com | Unknown | J | ☐ |
| 5.6 | What is /rego/ (1.1k impressions) before it redirects to /programs/core/ | Not redirected yet | Jh | ☐ |
| 5.8 | One CTM tracking number per clinic, and which number goes in the MedicalClinic schema | Schema uses the main number | O | ☐ |
| 5.7 | Map tiles: OpenStreetMap (free, fine for this traffic) | Switch to a keyed provider only if traffic grows | Jh | ☐ FYI |

## 6. Decisions made during the build (tell Julian / keep for the record)

| # | Decision | Date |
|---|---|---|
| 6.1 | One form per page: home section 2; inner pages in the banner (H1 left, form right). No second form in closing bands. | 2026-09-30 |
| 6.2 | Header has only the magenta call button; menu order About → … → Contact Us last. | 2026-09-30 |
| 6.3 | 1300px usable width (brand manual said 1180). | 2026-09-30 |
| 6.4 | Our Team at `/our-team/`, person pages `/our-team/{slug}/` (sitemap v2 said `/about/our-team/`); 301s added. | 2026-09-30 |
| 6.5 | Contact form uses the same 4 fields as every page (brief asked for clinic, need, best time). | 2026-09-30 |
| 6.6 | Reviews section skipped on Home (3.2 from 20). | 2026-09-30 |
| 6.8 | Location final bands can't "preselect the clinic" (the form has no clinic field). Each page sends its own `form_location`; Yonkers waitlist sends `yonkers-waitlist` with a "Notify Me When You Open" button (brief wanted email optional + "what can we help with": not added, one form everywhere). | 2026-09-30 |
| 6.9 | Location pages: no `openingHoursSpecification` in schema until hours are confirmed (brief: nothing in brackets ships as a guess). | 2026-09-30 |
| 6.7 | Anger Management signs list got a lead-in line the brief didn't have ("It may be time to get help if you notice:") — P to review. | 2026-09-30 |

## 7. Content to review (P)

- Home: all body copy and the 8 FAQ answers in `src/data/home.js` are working drafts.
- Hand-picked home posts (Medicaid + 2 evaluation posts) — confirm.
