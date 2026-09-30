# Rego Park Counseling — Pending notes

Running list, updated after every page. Each item stands on its own: what we have, what's missing, where it shows.
Status: ☐ open · ◐ partly answered · ☑ resolved (kept for the record, with the answer and date).
Owner: **E** = Emmanuel (via Julian) · **J** = Julian · **P** = Pavel (content) · **O** = Oriana (CTM) · **Jh** = Jhonatan · **C** = Cristofer (local SEO).

Last update: 2026-09-30 (after Programs, Who We Serve & Therapies).

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
| 2.8 | Is IOP offered? | Never mentioned (outpatient only). If yes, a new page could target "intensive outpatient programs in nyc" (1,000/mo) | Substance Use | E | ☐ |
| 2.9 | Couples counseling real? | Page not built, not in menu. /addiction-treatments-for-couples/ 301s to Family Therapy (the map's fallback) until confirmed | Therapies | E | ☐ |
| 2.10 | LGBTQ+ affirming care can be featured? | Page not built, not in menu | Who We Serve | E | ☐ |
| 2.11 | Is ATI (Alternatives to Incarceration) an actual program? | Not named | Court-Involved (next) | E | ☐ |

## 2a. Substance Use (medication and referrals are the riskiest claims: brackets here are launch blockers)

| # | Question | Now | Where | Owner | Status |
|---|---|---|---|---|---|
| 2a.1 | Referral path when someone needs medication for addiction (MAT) or detox: who do we refer to? Can we name the primary care company? | "[confirm referral path]" in the required opioid line and the Suboxone/methadone FAQ | Drug Use Treatment | E | ☐ **Launch blocker** |
| 2a.2 | Which substances does the team treat? | 7 chips "[Confirm list]" | Drug Use Treatment | E | ☐ |
| 2a.3 | Typical schedule: sessions per week, typical length of treatment | "[Confirm typical schedule.]" | SU hub FAQ | E | ☐ |
| 2a.4 | What treatment can include (individual, group, family, relapse prevention, telehealth) | List marked "[confirm]" | SU hub | E | ☐ |
| 2a.5 | Which services run at which clinic (group therapy, family sessions, substance use at Fresh Meadows?) | See 1.11 | SU pages, locations | E | ☐ |
| 2a.6 | Clinical stance on goals: abstinence only, or reduction also supported? | "[Confirm clinical stance.]" | Alcohol FAQ | E | ☐ |
| 2a.7 | Naloxone: does the clinic give it out or train on it? Current NY program wording? | "[confirm current program wording]" | Drug Use Treatment | E | ☐ |
| 2a.8 | Is adolescent care truly not offered? (confirms the /adolescent-substance-use-treatment/ → /substance-use/ redirect) | Redirect in place | vercel.json | E | ☐ |

## 2c. Insurance

| # | Question | Now | Where | Owner | Status |
|---|---|---|---|---|---|
| 2c.1 | Internal list of Medicaid plans each clinic is contracted with (**never published**; keeps copy accurate + feeds Cristofer's health plan directory listings in November) | — | internal / C | E | ☐ |
| 2c.2 | Medicare accepted? Commercial plans? Self-pay rates? | "[fill once confirmed]" rows | /insurance/ "Other insurance", FAQ | E | ☐ |
| 2c.3 | Typical Medicaid copay for outpatient counseling | "[Confirm…]" | /insurance/ FAQ | E | ☐ |
| 2c.4 | Are evaluations covered by Medicaid, or self-pay only? | "usually self-pay [confirm]" | /insurance/, Evaluations (see 2b.2) | E | ☐ |
| 2c.5 | How fast staff can confirm coverage on a call ("in minutes"?) | "we'll confirm in minutes [confirm]" | /insurance/ FAQ | E | ☐ |
| 2c.6 | Do staff help people apply for Medicaid, or connect them to someone who does? | "[confirm if staff help with applications]" | /insurance/ "Don't have Medicaid yet?" | E | ☐ |
| 2c.7 | Medicaid transportation wording accurate for RPC patients? | "[confirm wording]" | /insurance/ "Free rides" | E | ☐ |
| 2c.8 | Which services are covered at which clinic (so the bullet list is exact) | "[confirm each]" | /insurance/ | E | ☐ |

## 2d. Programs, Who We Serve, Therapies (CORE and SCN rules are specific: a wrong claim can mislead Medicaid members)

| # | Question | Now | Where | Owner | Status |
|---|---|---|---|---|---|
| 2d.1 | Which CORE services is RPC designated for (PSR, CPST, FST, Peer Support), and at which clinic? | 4 cards "[Confirm which ones RPC is designated for]"; location block "[Confirm which clinics deliver CORE]" | /programs/core/ | E | ☐ |
| 2d.2 | Current CORE eligibility wording and intake steps | "[confirm current eligibility wording]", steps "[confirm process]" | /programs/, /programs/core/ | E | ☐ |
| 2d.3 | Can someone get CORE and counseling at the same time? | "[Confirm.]" | CORE FAQ | E | ☐ |
| 2d.4 | RPC's exact role in the Social Care Network (screening, referral, services) and what help is available | "[Confirm RPC's role…]", help list "[Confirm list]", FAQ who qualifies / cost / need to be a patient "[Confirm]" | /programs/social-care-network/ | E | ☐ |
| 2d.5 | Telehealth: which services, which platform, statewide or Queens only, phone sessions? | "[confirm]" in hero, list, steps, FAQ | /programs/telehealth/, Older Adults FAQ | E | ☐ (see 1.15, 2b.5) |
| 2d.6 | Progress/completion letters and missed-session policy for court clients | "[confirm]" | /who-we-serve/court-involved/ | E | ☐ (ATI section **hidden**, see 2.11; meta description drops "ATI programs" and "progress letters" until confirmed) |
| 2d.7 | Group list, size, length; in person, online or both? | Chips "[Confirm list]"; "What a group session is like: [confirm]" | /therapies/group-therapy/ | E | ☐ |
| 2d.8 | Individual therapy session length and frequency; can clients choose a counselor? | "[Confirm]" | /therapies/individual-therapy/ | E | ☐ |
| 2d.9 | Can minors attend family sessions? Are family-only sessions offered (loved one not a patient)? Family sessions by telehealth? | "[Confirm…]" | /therapies/family-therapy/ | E | ☐ |
| 2d.10 | Age range served (adults only? from what age?) | Draft FAQ "We provide outpatient care for adults [confirm age range]" | /who-we-serve/ | E | ☐ |

## 2b. Evaluations (price, speed and approvals decide the booking — highest priority here)

| # | Question | Now | Where | Owner | Status |
|---|---|---|---|---|---|
| 2b.1 | Price of each evaluation (show it, or "call for pricing")? Payment methods? | FAQ: "Call us for current pricing… [Or show the price — confirm]"; cost block in brackets | Evaluations hub, SA, DWI | E | ☐ |
| 2b.2 | Does Medicaid cover evaluations? | "[Confirm.]" | Hub FAQ, cost blocks | E | ☐ |
| 2b.3 | How fast can a new person be seen? How fast is the report ready? | Trust chips "[Seen within X days]", "[Report in X days]" in the banner | All 3 pages | E | ☐ |
| 2b.4 | Appointment length; evenings or Saturdays? | "[confirm length, e.g. 60 to 90 minutes]" | All 3 pages | E | ☐ |
| 2b.5 | In person only, or telehealth evaluations too? Accepted by courts / DMV? | "[Confirm]" | Hub + both FAQs | E | ☐ |
| 2b.6 | Is a drug test part of the evaluation? | "[Confirm policy.]" | SA steps + FAQ | E | ☐ |
| 2b.7 | Screening tools to name (AUDIT, DAST…) — only if he wants them listed | Bracket | SA steps | E | ☐ |
| 2b.8 | What the report includes, who receives it, how it's sent | Bracket | All 3 pages | E | ☐ |
| 2b.9 | Exact approvals held: OASAS; any DMV or Drinking Driver Program relationship | Only "OASAS-licensed" is claimed. DWI "After a DDP referral" line is **hidden**; DDP FAQ has "[Confirm how RPC relates to DDP]" | DWI | E | ☐ |
| 2b.10 | Evaluations at Rego Park only, or Fresh Meadows too? | Rego Park card as "Main evaluations site" + "[confirm Fresh Meadows]" | SA, DWI, locations table | E | ☐ |
| 2b.11 | Evaluations for employers, schools or licensing boards: yes or no? | Cards with "[confirm]" | SA "Who needs one" | E | ☐ |
| 2b.12 | Progress and completion letters for people who continue into treatment | "[confirm]" | DWI "If treatment is recommended" | E | ☐ |

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
| 5.6 | What is /rego/ (1.1k impressions) before it redirects to /programs/core/ | ◐ Checked 2026-09-30: it's a general landing ("A Safe Space for Healing…", mission, values) that presents BOTH CORE and the Social Care Network, not a CORE page. **Recommendation: 301 to /programs/ (hub) instead of /programs/core/.** Not added to vercel.json until the user decides | Jh (user decides) | ◐ |
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
| 6.10 | Evaluation pages: banner form reads "Book an Evaluation / Book My Evaluation" and sends `form_location` = `evaluation-hub`, `evaluation-substance-abuse-evaluation` or `evaluation-dwi-evaluation` (brief wanted an "Evaluation" preset; the form has no "help with" field). | 2026-09-30 |
| 6.11 | Old posts /substance-abuse-evaluation/ and /drug-and-alcohol-evaluation/ 301 into /evaluations/substance-abuse-evaluation/ (redirect map v2 + brief "Old URLs merged in"). P: keep their strongest wording on the page. | 2026-09-30 |
| 6.12 | FAQ answers that are only a [bracket] stay visible on the page but are left out of the FAQPage schema until answered. | 2026-09-30 |
| 6.13 | Mental Health and Substance Use condition pages share one component (`components/ServiceTemplate.astro`); a design fix lands on all 9 pages. | 2026-09-30 |
| 6.14 | "Outpatient rehab" used only where the brief puts it (SU hub H2 + FAQ, alcohol FAQ); never "rehab" alone. | 2026-09-30 |
| 6.15 | Alcohol and Drug signs lists got a lead-in line the brief didn't have ("It may be time to talk to someone if you notice:", "Reach out if you notice:") — P to review. | 2026-09-30 |
| 6.16 | SU crisis note adds the SAMHSA helpline 1-800-662-4357; Drug page adds the overdose/naloxone line. | 2026-09-30 |
| 6.17 | Programs, Who We Serve and Therapies use a block-based page (`components/BlockPage.astro`, data in `src/data/programs.js`): each page composes its own blocks so they don't look alike. Hubs stay indexable (brief). | 2026-09-30 |
| 6.18 | Older Adults page uses larger body text (brief design note: larger type, high contrast, older adults in photos). | 2026-09-30 |
| 6.19 | Decorative rings are hidden on phones wherever they could sit behind text (brand manual: never behind body text). | 2026-09-30 |
| 6.7 | Anger Management signs list got a lead-in line the brief didn't have ("It may be time to get help if you notice:") — P to review. | 2026-09-30 |

## 7. Content to review (P)

- **Draft FAQ answers written during the build** (the brief listed the question only): marked `draft: true` in `src/data/programs.js` — Programs hub (telehealth/Medicaid), CORE (What is a HARP?), SCN (Who qualifies?), Telehealth (all 4), Who We Serve hub (2 new questions), Older Adults (3), Court-Involved (2), Therapies hub (2 new questions), Individual (2), Group (3), Family (3). Hub card descriptions (2 sentences each) were also written from the brief's one-liners.
- "What Is HARP?" (Nov 16) joins CORE's related links once published.

- /insurance/ "Helpful reading" gets: How to Get Free Medicaid Transportation to Therapy (Oct 5, also the "Free rides" card), What Is HARP? (Nov 16, also the HARP card), How to Apply for Medicaid in New York (Jan 4, also "Don't have Medicaid yet?") once published.

- New posts to add to "Helpful Reading" once published: How to Help Someone With a Drinking Problem (Nov 2, also linked from the Alcohol "Worried about someone" block), Why Do I Feel Depressed After Drinking? (Dec 7, Alcohol + Dual Diagnosis), Signs Someone Is Using Drugs (Feb 1, Drug Use).

- Evaluation posts need the "Need an evaluation in New York? Book at our Queens clinic" box near the top (blog phase), linking to the matching page.
- DWI "Learn more" gets First DWI in NY (Oct 19), Aggravated DWI (Jan 18), Ignition Interlock (Mar 1) once published.

- Home: all body copy and the 8 FAQ answers in `src/data/home.js` are working drafts.
- Hand-picked home posts (Medicaid + 2 evaluation posts) — confirm.
