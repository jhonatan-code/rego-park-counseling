// Team data for /our-team/ (About Section Content brief, §2).
// RULES: only real staff with written consent to be shown; credentials exactly as on their license;
// no patient photos; no testimonials attached to a named clinician.
// Until Emmanuel sends the staff list, entries are PLACEHOLDERS (placeholder: true). Credentials stay blank
// ("[Credential]") until the license is confirmed: never guess one (team-eeat, credential drift). While any placeholder is
// shown the page stays noindex and no Person schema is emitted.
//
// Profile fields: name, credential (e.g. "LMHC"), role, clinics[], languages[], focus[] (label + href to the
// service page; the "specialties" chips), bio (2–3 sentences, pick first OR third person for everyone), bioLong
// (120–180 words, person page), photo (real headshot, same background style for everyone; 4:5, WebP ≤ 80KB),
// leadership (true for the Leadership block), licenseLookupUrl (NYSED Office of the Professions verification link,
// only with the clinician's OK), linkedin. Blog Templates brief, "Author page template".
//
// Authors (Elev8 SOP Blog/Post/Author §0, §3): authors ARE team members. There is no separate author record and no
// /author/ page: a blog post's `author` is the `slug` of one person below, and bylines, the blog's author filter,
// cards and BlogPosting all read name, credential, role, photo and bio from here. A person with a `slug` gets a page
// at /our-team/{slug}/ (src/pages/our-team/[slug].astro); give each person a slug (first-last) once their real
// name arrives. Placeholder people keep their page noindex and out of the sitemap.

export const LEADERSHIP = [
  {
    placeholder: true,
    name: 'Emmanuel [Last name]',
    credential: '',
    role: '[Title]',
    bio: '[3 to 4 sentence bio from Emmanuel: his role, why he started Rego Park Counseling, what he wants every patient to feel.]',
    photo: null,
  },
  {
    placeholder: true,
    // Author of every migrated blog post until Emmanuel names the real authors/reviewers (PENDING 3.4).
    // Rename the slug to first-last when the name arrives, and update AUTHOR in scripts/import-wp-posts.py.
    slug: 'clinical-director',
    name: '[Clinical Director name]',
    credential: '[Credential]',
    role: 'Clinical Director',
    bio: '[3 to 4 sentence bio: years of practice, focus, approach. This also feeds the author and clinical reviewer pages for blog posts.]',
    photo: null,
  },
];

const FOCUS = {
  anxiety: { label: 'Anxiety', href: '/mental-health/anxiety-counseling/' },
  depression: { label: 'Depression', href: '/mental-health/depression-counseling/' },
  trauma: { label: 'Trauma', href: '/mental-health/ptsd-trauma-counseling/' },
  alcohol: { label: 'Alcohol use', href: '/substance-use/alcohol-use-treatment/' },
  drugs: { label: 'Drug use', href: '/substance-use/drug-use-treatment/' },
  dual: { label: 'Dual diagnosis', href: '/substance-use/dual-diagnosis/' },
  evaluations: { label: 'Evaluations', href: '/evaluations/' },
};

export const TEAM = [
  { placeholder: true, name: '[Name]', credential: '[Credential]', role: 'Counselor', clinics: ['Rego Park'], languages: ['[ ]'], focus: [FOCUS.anxiety, FOCUS.depression, FOCUS.trauma], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
  { placeholder: true, name: '[Name]', credential: '[Credential]', role: 'Substance Use Counselor', clinics: ['Rego Park', 'Telehealth'], languages: ['[ ]'], focus: [FOCUS.alcohol, FOCUS.drugs, FOCUS.evaluations], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
  { placeholder: true, name: '[Name]', credential: '[Credential]', role: 'Clinician', clinics: ['Fresh Meadows'], languages: ['[ ]'], focus: [FOCUS.dual, FOCUS.depression, FOCUS.anxiety], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
  { placeholder: true, name: '[Name]', credential: '[Credential]', role: 'Counselor', clinics: ['Fresh Meadows', 'Telehealth'], languages: ['[ ]'], focus: [FOCUS.trauma, FOCUS.alcohol, FOCUS.dual], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
];

export const PEOPLE = [...LEADERSHIP, ...TEAM];
export const personHref = (p) => `/our-team/${p.slug}/`;
export const personBySlug = (slug) => {
  const p = PEOPLE.find((x) => x.slug === slug);
  if (!p) throw new Error(`team.js: no person with slug "${slug}"`);
  return p;
};
// People with their own page (a slug); placeholders render noindex.
export const PAGED_PEOPLE = PEOPLE.filter((p) => p.slug);

export const HAS_PLACEHOLDERS = [...LEADERSHIP, ...TEAM].some((p) => p.placeholder);
