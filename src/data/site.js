// Single source for NAP, licensing and navigation. Every component reads from here so a fix lands everywhere.
// Sources: Header & Home Page Brief (docs/content), Brand Manual v1.0 (docs/brand), Consolidated Wiki,
// RPC_Sitemap_Redirect_Map_v2.xlsx ("New Sitemap" tab).
// NAP must match each Google Business Profile character for character: confirm before launch.

export const SITE = {
  name: 'Rego Park Counseling',
  url: 'https://www.regoparkcounseling.com',
  phone: '(718) 459-2558', // becomes CTM tracking numbers (DNI swaps the live text)
  phoneHref: 'tel:+17184592558',
  fax: '(718) 770-7676', // on the current site footer
  gtm: 'GTM-T3S8L3WL', // kept through launch (wiki, must-survive #8)
  licensing: 'Licensed by NYS OASAS and OMH',
  independentLine: 'Rego Park Counseling is an independent clinic.',
};

// status: 'open' | 'soon'. hours: null until Emmanuel confirms (brief, "Needed from Emmanuel").
export const CLINICS = [
  {
    id: 'rego-park',
    name: 'Rego Park',
    label: 'Main clinic',
    status: 'open',
    street: '63-36 99th Street',
    city: 'Rego Park',
    region: 'NY',
    postal: '11374',
    phone: '(718) 459-2558',
    phoneHref: 'tel:+17184592558',
    // BRACKETS-FILL-PLAN 1.1 (FILL): RPC's current site + directory listings agree. Emmanuel confirms still current.
    hours: 'Monday–Friday 9:00 AM – 6:00 PM · Sunday 9:00 AM – 12:00 PM · Saturday closed',
    openingHours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
      { days: ['Sunday'], opens: '09:00', closes: '12:00' },
    ],
    href: '/locations/rego-park/',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=63-36+99th+Street%2C+Rego+Park%2C+NY+11374',
    geo: { lat: 40.7318272, lng: -73.8570441 }, // OSM building match for 63-36 99th St
    image: '/images/clinics/rego-park-counseling-clinic-card.webp',
    imageAlt: 'Front entrance of the 63-36 99th Street building in Rego Park, Queens',
    // [Confirm with Emmanuel] neighborhoods + transit (brief, section 6 "Proposed")
    nearby: 'Close to Forest Hills, Elmhurst, Middle Village and Kew Gardens. M and R trains at 63rd Drive.',
  },
  {
    id: 'fresh-meadows',
    name: 'Fresh Meadows',
    label: 'Call to check availability', // was "Now welcoming new patients" (DECISIONS-2026-10-01 extras)
    status: 'open',
    // [Confirm format] brand manual + brief say 71-82; the current site shows "7182 Parsons blvd"
    street: '71-82 Parsons Blvd',
    city: 'Fresh Meadows',
    region: 'NY',
    postal: '11365',
    phone: '(718) 459-2558',
    phoneHref: 'tel:+17184592558',
    hours: 'Call for hours.', // plan 1.1 FALLBACK; no schema hours until confirmed
    href: '/locations/fresh-meadows/',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=71-82+Parsons+Blvd%2C+Fresh+Meadows%2C+NY+11365',
    geo: { lat: 40.7276, lng: -73.8107 }, // approximate (Parsons Blvd at 71st Ave); refine from the GBP pin
    image: null, // no clinic photo yet
    imageAlt: '',
    nearby: 'Close to Flushing, Hillcrest, Bayside and Jamaica Estates.',
  },
  {
    id: 'yonkers',
    name: 'Yonkers',
    label: 'Opening soon',
    status: 'soon',
    street: null, // address + opening date pending (no schema address until then)
    city: 'Yonkers',
    region: 'NY',
    postal: null,
    phone: '(718) 459-2558',
    phoneHref: 'tel:+17184592558',
    hours: null,
    href: '/locations/yonkers/',
    directions: null,
    geo: null,
    image: null,
    imageAlt: '',
    nearby: null,
  },
];

// Header navigation (brief, "Menu items and the pages under each"). Seven items (DECISIONS-2026-10-01 §7.8, revised):
// Mental Health · Substance Use · Evaluations · Programs · Locations · Insurance · About (last, dropdown: About Us, Our
// Team, Blog, Contact). Contact is not its own menu item (footer + the call button). Items marked `pending` stay out.
// `desc` = one-line helper shown in the mega panels (plain language, brand voice).
export const NAV = [
  {
    label: 'Mental Health',
    href: '/mental-health/',
    intro: 'Counseling for how you feel, think and cope. Licensed by NYS OMH.',
    links: [
      { label: 'Anxiety Counseling', href: '/mental-health/anxiety-counseling/', desc: 'Worry, panic and stress that won’t let up' },
      { label: 'Depression Counseling', href: '/mental-health/depression-counseling/', desc: 'Low mood, low energy, losing interest' },
      { label: 'PTSD & Trauma Counseling', href: '/mental-health/ptsd-trauma-counseling/', desc: 'Healing after hard or frightening events' },
      { label: 'Bipolar Disorder Counseling', href: '/mental-health/bipolar-disorder-counseling/', desc: 'Steadier days between the highs and lows' },
      { label: 'Schizophrenia Counseling', href: '/mental-health/schizophrenia-counseling/', desc: 'Ongoing support for serious mental illness' },
      { label: 'Anger Management', href: '/mental-health/anger-management/', desc: 'Tools to cool down and stay in control' },
      { label: 'Psychiatry', href: '/mental-health/psychiatry/', desc: '', pending: true },
    ],
  },
  {
    label: 'Substance Use',
    href: '/substance-use/',
    intro: 'Outpatient help for alcohol and drug use. You go home every night.',
    links: [
      { label: 'Outpatient Substance Use Treatment', href: '/substance-use/', desc: 'Our OASAS-licensed outpatient program' },
      { label: 'Alcohol Use Treatment', href: '/substance-use/alcohol-use-treatment/', desc: 'Cut back or stop, with a plan made for you' },
      { label: 'Drug Use Treatment', href: '/substance-use/drug-use-treatment/', desc: 'Counseling for any drug, no judgment' },
      { label: 'Dual Diagnosis', href: '/substance-use/dual-diagnosis/', desc: 'Mental health and substance use, treated together' },
    ],
  },
  {
    label: 'Evaluations',
    href: '/evaluations/',
    intro: 'For court, DMV, work or yourself. We explain every step.',
    links: [
      { label: 'Substance Abuse Evaluation', href: '/evaluations/substance-abuse-evaluation/', desc: 'A clear written assessment and next steps' },
      { label: 'DWI Evaluation', href: '/evaluations/dwi-evaluation/', desc: 'For court or DMV requirements in New York' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs/',
    intro: 'Support beyond the therapy room.',
    columns: [
      {
        title: 'Programs',
        href: '/programs/',
        links: [
          { label: 'CORE (HARP)', href: '/programs/core/', desc: 'Hands-on support for HARP members' },
          { label: 'Social Care Network', href: '/programs/social-care-network/', desc: 'Help with housing, food and rides' },
          { label: 'Telehealth', href: '/programs/telehealth/', desc: 'Counseling from home, by video' },
        ],
      },
      {
        title: 'Who We Serve',
        href: '/who-we-serve/',
        links: [
          { label: 'Older Adults', href: '/who-we-serve/older-adults/', desc: 'We see people of every age' },
          { label: 'Court-Ordered Counseling', href: '/who-we-serve/court-involved/', desc: 'Here’s what to bring, here’s how long' },
          { label: 'LGBTQ+ Affirming Care', href: '/who-we-serve/lgbtq-affirming-care/', desc: '', pending: true },
        ],
      },
      {
        title: 'Therapies',
        href: '/therapies/',
        links: [
          { label: 'Individual Therapy', href: '/therapies/individual-therapy/', desc: 'One-on-one with your counselor' },
          { label: 'Group Therapy', href: '/therapies/group-therapy/', desc: 'Learn and heal alongside others' },
          { label: 'Family Therapy', href: '/therapies/family-therapy/', desc: 'You can call for someone you love' },
          { label: 'Couples Therapy', href: '/therapies/couples-therapy/', desc: '', pending: true },
        ],
      },
    ],
  },
  { label: 'Locations', href: '/locations/', intro: 'Three clinics, one team, one number.', locations: true },
  { label: 'Insurance', href: '/insurance/' },
  {
    label: 'About',
    href: '/about/',
    intro: 'A neighborhood clinic for Queens.',
    cta: 'More about us', // mega panel intro link (default "Explore {label}")
    links: [
      { label: 'About Us', href: '/about/', desc: 'Who we are and how we work' },
      // Our Team hidden until the real staff list arrives (launch, 2026-10-02); /our-team/ 302s to /about/
      { label: 'Blog', href: '/blog/', desc: 'Plain-language guides and answers' },
      { label: 'Contact', href: '/contact/', desc: 'Call, visit or request a callback' },
    ],
  },
];


// Drop items that are still waiting for client confirmation.
export const live = (links = []) => links.filter((l) => !l.pending);

// Official social profiles: footer icons + Organization schema sameAs. Only accounts verified as RPC's (2026-10-01):
// Instagram @regoparkcounseling (RPC logo, "Certified OASAS & Mental Health outpatient clinic", (718) 459-2558) and the
// Yelp listing (claimed, links regoparkcounseling.com, 63-36 99th St, (718) 459-2558). These two only until the client
// sends its own list (user, 2026-10-01). Reviews are never shown or marked up on the site (client rule).
// NOT ours: facebook.com/regoparkcounseling is The Jewish Board, 97-99 Queens Blvd (the similarly named center — never
// link it). Unconfirmed: TikTok @regoparkcounseling (empty, nothing ties it to RPC). No LinkedIn company page found.
// Add Facebook / Google Business Profile / others only once the client confirms the URL (PENDING 5.14, 4.6).
export const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/regoparkcounseling/', icon: 'instagram' },
  { label: 'Yelp', href: 'https://www.yelp.com/biz/rego-park-counseling-queens', icon: 'yelp' },
];

export const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'HIPAA Notice', href: '/hipaa-notice/' },
  { label: 'Telehealth & Text Terms', href: '/telehealth-privacy/' },
  { label: 'Accessibility', href: '/accessibility/' },
];

export const fullAddress = (c) => (c.street ? `${c.street}, ${c.city}, ${c.region} ${c.postal}` : null);
