# Rego Park Counseling — Plan to remove every [bracket] before launch

Prepared 2026-10-02 for Jhonatan (to share with Claude Code). Companion to
"Data needed to remove brackets" (same question numbers).

**Goal:** no empty or bracketed field on any public page, and no unconfirmed claim.
**Rule:** every bracket ends in one of three states:

| Tag | Meaning | What Claude Code does |
|---|---|---|
| **FILL** | Fact confirmed by RPC's own published materials or an official public source | Fill it now (cite the source in PENDING) |
| **ASK** | Public directories say something that conflicts with our rules | Do NOT publish; ask Emmanuel; use the fallback until answered |
| **FALLBACK** | Only Emmanuel can answer | Publish the fallback copy below at launch; swap in the real answer when it arrives |

Fallback copy is written so the page reads complete and claims nothing unconfirmed.
When a fallback says "remove", delete the sentence or block, not just the bracket.

---

## ⚠️ First: public directories contradict the new site

Third-party directories built from self-reported data (e.g. mentalhealthus.org, recovered.org)
list RPC with services our rules forbid us to claim. **Ask Emmanuel which are true today**, then
Cristofer cleans the listings (also a NAP problem: recovered.org shows phones (718) 814-9986 and
(718) 495-2555, not (718) 459-2558).

| Directory says | Our site today | Question for Emmanuel |
|---|---|---|
| Intensive Outpatient Program (IOP) | Outpatient only | Is IOP offered today? |
| Medication management; MAT (buprenorphine, naltrexone, acamprosate) | No medication claims; MAT is with the primary care company | Does RPC itself prescribe or manage medication today? |
| Couples counseling | On hold | Is couples counseling offered? |
| Children and adolescents (RPC's own contact page also says "children and adults") | Adults only; adolescent page redirected | What ages do you serve? |
| CBT, DBT, motivational interviewing, relapse prevention | Approaches not named | Which approaches do clinicians use today? |
| Russian and "other languages" | Not listed | Which languages are spoken, at which clinic? |
| Medicare, private insurance, self-pay, payment assistance | "Most Medicaid plans" only | Which are accepted today? |
| Joint Commission accreditation | Not claimed | Is RPC accredited by The Joint Commission? |
| Naloxone / overdose education | Bracketed | (Required by OASAS anyway, see 4.5) |

Sources: [mentalhealthus.org listing](https://www.mentalhealthus.org/facility/rego-park-counseling) ·
[recovered.org listing](https://recovered.org/rehabs/rego-park-counseling-llc-rego-park-ny) ·
[RPC current Contact page](https://www.regoparkcounseling.com/contact-us/)

---

## 1. Clinic details

| # | Status | Launch copy / instruction |
|---|---|---|
| 1.1 Hours | **FILL** (RPC's current site + directory agree) | Rego Park: **Monday–Friday 9:00 AM – 6:00 PM · Sunday 9:00 AM – 12:00 PM · Saturday closed.** Use for Rego Park only. Add `openingHoursSpecification` to the Rego Park schema. Fresh Meadows hours: FALLBACK "Call for hours." Emmanuel confirms both are still current. |
| 1.2 Fresh Meadows phone | **FALLBACK** | Use (718) 459-2558 for both clinics until a second number is confirmed. |
| 1.3a Cross street | **FALLBACK** | Remove "near the corner of …". Keep the address + map link. |
| 1.3b Walk from 63rd Drive station | **FALLBACK** | "Near the 63rd Drive–Rego Park station (M and R trains)." No minutes. |
| 1.3c Buses | **FALLBACK** | "Several bus lines stop nearby. Use the map for directions." (Verify routes in MTA Trip Planner before naming any.) |
| 1.3d Parking | **FALLBACK** | Remove the line. |
| 1.3e / 1.4d Accessibility | **FALLBACK** | "If you need help getting into the building or another accommodation, tell us when you call." |
| 1.4a–c Fresh Meadows transit/parking | **FALLBACK** | "Close to Flushing. Use the map for directions." Remove bus names, ride times and parking. |
| Fresh Meadows address | **ASK Cristofer** | RPC's site shows "7182 Parsons Blvd". Use exactly what the Google Business Profile shows (likely "71-82 Parsons Blvd"). Same string everywhere. |
| 1.5 Neighborhoods | **FALLBACK** | Keep the lists (they are geography, not a claim), but phrase as "Serving Rego Park and nearby neighborhoods, including …". |
| 1.6 Services per clinic | **FALLBACK** | Remove the per-clinic comparison table. On each clinic page say "Ask us which services are available at this clinic" and link the main service hubs. |
| 1.7 Wait time | **FALLBACK** | "Call to check availability." |
| 1.8 Yonkers | **FALLBACK** | "Opening soon. Join the list to hear when we open." Remove month and service list. |
| 1.9 Clinic photos | **FALLBACK** | Rego Park: use the real 99th Street entrance photo already on site. Fresh Meadows: map embed in place of photos. Never "[photo needed]". |

## 2. Team

| # | Status | Launch copy / instruction |
|---|---|---|
| 2.1–2.2 Director and staff | **FALLBACK** | Keep /our-team/ noindex with "Coming soon". On Home, Rego Park and Fresh Meadows, remove the team block entirely (no "Coming soon" on commercial pages). |
| 2.3 License mix | **FALLBACK** | "Our team includes licensed mental health and substance use professionals." |
| 2.4 Languages | **FALLBACK** | Remove every languages line. (Directory lead: Russian — ASK.) |

## 3. How care works

| # | Status | Launch copy / instruction |
|---|---|---|
| 3.1 Referral | **FALLBACK** | "You can call us directly. If a doctor, case manager or court referred you, let us know when you call." |
| 3.2 Frequency/length | **FALLBACK** | "Your counselor sets a schedule with you." Remove numbers. |
| 3.3 Choose counselor | **FALLBACK** | "Tell us if you have a preference, and we'll do our best to match you." |
| 3.4 Approaches | **ASK** | Directories list CBT, DBT, MI. Until confirmed: "evidence-based talk therapy". |
| 3.5 Age range | **ASK** | Until confirmed: "We serve adults." Remove any age number. (RPC's own old site says children too — conflict.) |
| 3.6a–c Telehealth platform/account/recording | **FALLBACK** | "Sessions use a secure video platform. We'll send you a link." Remove platform name, account and recording lines. |
| 3.6d Location rule | **FALLBACK** | "Telehealth is available for many services. Ask us if it's right for you." |
| 3.6e–f Telehealth services / phone sessions | **FALLBACK** | Remove the list; keep the sentence above. |
| 3.7 Groups | **FALLBACK** | Remove group names, size and length. "We offer counselor-led groups. Ask us which groups are running now." |
| 3.8 Family sessions | **FALLBACK** | Keep "Family members can be part of care." Remove the minors and telehealth FAQs. Keep "You can call us first if you're worried about a loved one." |
| 3.9 Anger management | **FALLBACK** | Remove the court-referred block and FAQ. Keep "individual and group support" only if 3.7 confirms groups; otherwise "counseling". |

## 4. Substance use (launch blockers)

| # | Status | Launch copy / instruction |
|---|---|---|
| 4.1 MAT / detox referral | **ASK — blocker** | Until answered: "If medication or detox may help you, we'll talk with you about next steps and where to go." Never name a provider without approval. (Directories claim RPC offers MAT itself — conflict.) |
| 4.2 Substances | **FALLBACK** | Keep the general list (alcohol, marijuana, cocaine, opioids, prescription pills) as "We help with alcohol and drug use, including …". Remove anything more specific. |
| 4.3 Reduction vs abstinence | **FALLBACK** | Answer the FAQ: "Your counselor will talk with you about your goals and your safety." |
| 4.4 Schedule | **FALLBACK** | Same as 3.2. |
| 4.5 Naloxone | **FILL** | OASAS requires its certified programs to keep naloxone on site and make training and kits available to patients and families. Copy: "We can show you how to use naloxone and help you get a kit. In New York you can also get naloxone at many pharmacies without your own prescription, and a state program covers co-pays of up to $40." Emmanuel confirms RPC is following the OASAS rule. Sources: [OASAS naloxone in OASAS settings](https://oasas.ny.gov/naloxone-administration-and-availability-oasas-settings) · [NYSDOH pharmacy standing order / N-CAP](https://www.health.ny.gov/diseases/aids/general/opioid_overdose_prevention/pharmacy_standing_order.htm) |

## 5. Evaluations

| # | Status | Launch copy / instruction |
|---|---|---|
| 5.1 Speed / evenings | **FALLBACK** | "Call to check the next available appointment." |
| 5.2 Length | **FALLBACK** | Remove. |
| 5.3 Drug test | **FALLBACK** | FAQ answer: "Ask us when you book. It depends on what your court or employer requires." Link the existing blog post. |
| 5.4 What to bring | **FALLBACK** | "Bring photo ID and any letter or paperwork from the court, lawyer or employer." (generic, safe) |
| 5.5 Report | **FALLBACK** | "We'll explain your results and how you receive your report." |
| 5.6 Telehealth evaluations | **FALLBACK** | "Ask us whether your evaluation can be done by telehealth. Check that your court or the DMV accepts it." |
| 5.7 Location | **FALLBACK** | Show the Rego Park card only, with "Call to confirm the location for your evaluation." |
| 5.8 Cost / Medicaid | **FALLBACK** | "Call us for current pricing and payment options." |
| 5.9 DDP | **FALLBACK** | Remove the DDP FAQ until answered. |
| 5.10 Workplace / schools / boards | **FALLBACK** | Remove those bullets; keep courts/probation and personal reasons. |
| 5.11 Letters | **FALLBACK** | Remove until confirmed. |

## 6. Insurance and cost

| # | Status | Launch copy / instruction |
|---|---|---|
| 6.1 Copay | **FALLBACK** | "We'll explain any costs when we check your coverage." |
| 6.2 Medicare / commercial | **ASK** | Directories say both are accepted. Until confirmed: remove the Medicare FAQ; "Other insurance: call us and we'll check." |
| 6.3 Services covered | **FALLBACK** | "Coverage depends on your plan and the service. We check before your first visit." Remove the per-service list. |
| 6.4 Speed | **FALLBACK** | Remove "in minutes". |
| 6.5 Medicaid applications | **FALLBACK** | "We can point you to where to apply." |
| 6.6 Transportation | **FALLBACK** | "Many Medicaid members can get rides to appointments at no cost. Ask us how." Keep the link to the blog post when it publishes. |
| 6.7 Self-pay | **ASK** | Directory says self-pay and payment assistance exist. Until confirmed: remove. |

## 7. Programs

| # | Status | Launch copy / instruction |
|---|---|---|
| 7.1 CORE services list | **FILL (the four official names)** | List the four official CORE services by name, but frame as "CORE includes …" not "we offer …": Community Psychiatric Support and Treatment (CPST), Psychosocial Rehabilitation (PSR), Family Support and Training (FST), Empowerment Services – Peer Support. Emmanuel confirms which RPC is designated for; then switch to "We offer …". |
| 7.2 CORE eligibility / intake | **FILL** | "CORE is for adults 21 and older enrolled in a HARP, HIV-SNP or MAP plan who meet New York's behavioral health high-risk criteria. A licensed practitioner recommends CORE services. You can also ask your plan or NY Medicaid Choice (1-800-505-5678)." Source: [NYS OMH CORE overview](https://omh.ny.gov/omhweb/bho/core/) |
| 7.3 CORE + counseling | **FALLBACK** | "Ask us how CORE can work alongside your other care." (OMH limits duplicate services.) |
| 7.4 Social Care Network | **FALLBACK** | "If you have Medicaid, we can help connect you with support for needs like food, housing or transportation." Remove cost, eligibility and role details. |

## 8. Court-involved

| # | Status | Launch copy / instruction |
|---|---|---|
| 8.1 Start speed | **FALLBACK** | "Call to check availability." |
| 8.2 Missed sessions | **FALLBACK** | Remove the FAQ. |
| 8.3 Letters | **FALLBACK** | "With your written consent, we can share information with your court or program." (consent-based, safe) Remove "progress and completion letters" until confirmed. |
| 8.4 Referral contact | **FILL (fax only)** | "Referrals: fax (718) 770-7676 or call (718) 459-2558." (Fax is published on RPC's current site.) |

## 9. Privacy, legal, accessibility

| # | Status | Launch copy / instruction |
|---|---|---|
| 9.1 Privacy Officer | **ASK — blocker** | Required by the HIPAA Notice. No fallback: counsel approval (9.5) blocks launch anyway. |
| 9.2 Contact email | **FILL (provisional)** | management@regoparkcounseling.com is the email RPC publishes in directories. Use it for privacy, telehealth terms and accessibility; Emmanuel confirms. |
| 9.3 Call recording | **ASK (Oriana can answer)** | CTM settings show whether recording is on. Until confirmed: remove the recording sentence. |
| 9.4 Accessibility response | **FALLBACK** | "We'll respond as soon as we can." Remove "2 business days". |
| 9.5 Legal approval | **Blocker** | Unchanged. |

---

## Instructions for Claude Code

```
Apply docs/BRACKETS-FILL-PLAN-2026-10-02.md:
1) For every row tagged FILL: fill the value as written and record the source in PENDING.
2) For every row tagged FALLBACK or ASK: publish the fallback copy exactly as written now;
   where it says "remove", delete the whole sentence/block/FAQ (and its FAQ schema entry).
   Keep each original question open in PENDING so the real answer can replace the fallback.
3) Do not publish anything from the "directories say" table.
4) Rego Park hours: add to page, footer and MedicalClinic schema (openingHoursSpecification).
   Fresh Meadows hours stay "Call for hours" and out of schema.
5) Remove the team block from Home, Rego Park and Fresh Meadows. /our-team/ keeps
   "Coming soon" and noindex.
6) Exclude from the scope: the 3 legal pages' Draft banner and the Privacy Officer (blocked by
   counsel), and the 2 blog posts that use brackets as examples (rewrite without brackets).
7) When done, search the built site for "[" in visible text and report every remaining
   occurrence with its page. Target: zero outside the legal drafts.
8) Rebuild llms.txt validation and re-run axe on changed templates. Commit, push, report.
```
