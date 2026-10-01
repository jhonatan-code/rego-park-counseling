# Rego Park Counseling — website data inventory

For the client's privacy policy and counsel (standards/privacy-consent.md §3, phi-data-handling). Lists every piece of
data the new website collects, every third party it loads, and where each one goes. The website stores nothing:
it is a transport layer. Last checked: 2026-09-30. Update this file whenever a form field, tag or vendor changes.

## 1. The callback form

No insurance ID, no email, no health details (brand manual). The reactor's old `membership_policy_id` / `insurance_carrier` fields receive "Not provided".

| Field | Required | Sent to | Notes |
|---|---|---|---|
| Name | yes | CTM (`caller_name`) | as typed |
| Phone number | yes | CTM (`phone_number`, E.164) | contact details alone are PHI on a treatment site |
| Preferred clinic | no (select) | CTM custom field `preferred_clinic` | Rego Park / Fresh Meadows / Telehealth / Yonkers / Not sure |
| I need help with | no (select) | CTM custom field `help_with` | Mental health / Substance use / An evaluation / Not sure (a category, no health details) |
| SMS consent (checkbox) | no, unticked | CTM custom fields `sms_opt_in` (yes/no) + `sms_consent_version` | fields must exist on the reactor to be stored (PENDING 5.9) |
| CTM visitor id | automatic | CTM (`visitor_sid`) | ties the lead to the visit's source/landing page |
| Ad click ids (gclid, gbraid, wbraid, msclkid, fbclid, campaign/ad group/creative ids) | automatic, only if present in the landing URL | CTM (`paid_attribution[…]`) | kept in the browser's sessionStorage for the visit only |

Path: browser → the site's own server route `/api/lead/` (Vercel function) → CallTrackingMetrics FormReactor.
Nothing is written to disk, a database, the repository or logs. Logs hold only CTM's status and error text.
Requires: a signed BAA between the client and CTM (PENDING 5.10).

## 2. Scripts and third parties on every page

| Vendor | What it does | Loads when | Data it receives |
|---|---|---|---|
| Google Tag Manager (GTM-T3S8L3WL) | loads the tags below | production domain only | page views; the container's tags decide the rest (**container not yet reviewed**, PENDING 5.11) |
| Google Analytics 4 (320939576) via GTM | traffic analytics | via GTM | page views; events `click_to_call`, `directions_click`, `callback_submit` with a location label only (no field values) |
| CallTrackingMetrics tracker via GTM | swaps phone numbers per traffic source, visitor session | via GTM | visit source, landing page, calls |
| OpenStreetMap tiles (Leaflet) | clinic maps | when a map scrolls into view | the visitor's IP and map area requested |
| Google / Facebook / X / LinkedIn / WhatsApp share links | plain links on blog posts | only when clicked | the post URL |

No session recording, heatmaps, chat widgets, advertising pixels or cookie banner are installed by the site code.
Anything added inside GTM must be added here first.

## 3. What the site never does
- No PHI in URLs or query strings; search on /blog/ never changes the URL.
- No form field values in analytics events.
- No email of submissions; no uploads.
