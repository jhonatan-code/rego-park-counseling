// Team data for /our-team/ (About Section Content brief, §2).
// RULES: only real staff with written consent to be shown; credentials exactly as on their license;
// no patient photos; no testimonials attached to a named clinician.
// Until Emmanuel sends the staff list, entries are PLACEHOLDERS (placeholder: true). While any placeholder is
// shown the page stays noindex and no Person schema is emitted.
//
// Profile fields: name, credential (e.g. "LMHC"), role, clinics[], languages[], focus[] (label + href to the
// service page), bio (2–3 sentences, pick first OR third person for everyone), photo (real headshot, same
// background style for everyone; 4:5, WebP ≤ 80KB), leadership (true for the Leadership block).

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
  { placeholder: true, name: '[Name]', credential: 'LMHC', role: 'Counselor', clinics: ['Rego Park'], languages: ['[ ]'], focus: [FOCUS.anxiety, FOCUS.depression, FOCUS.trauma], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
  { placeholder: true, name: '[Name]', credential: 'CASAC', role: 'Substance Use Counselor', clinics: ['Rego Park', 'Telehealth'], languages: ['[ ]'], focus: [FOCUS.alcohol, FOCUS.drugs, FOCUS.evaluations], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
  { placeholder: true, name: '[Name]', credential: 'LCSW', role: 'Clinician', clinics: ['Fresh Meadows'], languages: ['[ ]'], focus: [FOCUS.dual, FOCUS.depression, FOCUS.anxiety], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
  { placeholder: true, name: '[Name]', credential: 'LMSW', role: 'Counselor', clinics: ['Fresh Meadows', 'Telehealth'], languages: ['[ ]'], focus: [FOCUS.trauma, FOCUS.alcohol, FOCUS.dual], bio: '[Name] has worked with adults in Queens for [X] years, helping people with [focus]. [One sentence of approach.]', photo: null },
];

export const HAS_PLACEHOLDERS = [...LEADERSHIP, ...TEAM].some((p) => p.placeholder);
