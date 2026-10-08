// Locations section copy (docs/content/Rego Park Counseling — Locations Pages Content.pdf), as written.
// NAP (name, address, phone, hours, geo) is NOT repeated here: it comes from CLINICS in site.js so the page,
// footer, schema and Google profile stay identical character for character.
// [brackets] = fact still needed from Emmanuel. `gate` = block not rendered until confirmed.

// Services comparison (hub). true = listed as offered in the brief ([✓]), null = unknown (blank in the brief).
// Every cell is pending Emmanuel's confirmation.
export const SERVICE_TABLE = [
  { service: 'Mental health counseling', href: '/mental-health/', rp: true, fm: true, th: true },
  { service: 'Substance use treatment', href: '/substance-use/', rp: true, fm: null, th: true },
  { service: 'Substance abuse and DWI evaluations', href: '/evaluations/', rp: true, fm: null, th: null },
  { service: 'CORE services', href: '/programs/core/', rp: null, fm: null, th: null },
  { service: 'Group therapy', href: '/therapies/group-therapy/', rp: null, fm: null, th: null },
];

export const HUB_COMMUNITIES = ['Rego Park', 'Forest Hills', 'Elmhurst', 'Middle Village', 'Kew Gardens', 'Fresh Meadows', 'Flushing', 'Hillcrest', 'Jamaica Estates'];

export const CLINIC_PAGES = {
  'rego-park': {
    title: 'Counseling in Rego Park, Queens | Mental Health & Substance Use',
    description: 'Rego Park Counseling at 63-36 99th Street, Rego Park, NY 11374. Licensed outpatient mental health and substance use care, evaluations and telehealth. Most Medicaid plans.',
    h1: 'Counseling in Rego Park, Queens',
    sub: 'Our Rego Park clinic, near the 63rd Drive–Rego Park station (M and R trains), offering mental health and substance use care for adults.',
    photos: [
      { src: '/images/clinics/rego-park-counseling-clinic-63-36-99th-street.webp', alt: 'Front of the 63-36 99th Street building in Rego Park', label: 'Building front' },
      { label: 'Entrance and signage' },
      { label: 'Waiting area' },
      { label: 'Counseling room' },
    ],
    servicesH2: 'Services at Our Rego Park Clinic',
    servicesNote: 'Ask us which services are available at this clinic.',
    services: [
      { label: 'Mental Health Counseling', text: 'Anxiety, depression, trauma and more.', href: '/mental-health/', icon: 'brain' },
      { label: 'Outpatient Substance Use Treatment', text: 'Counseling for alcohol and drug use.', href: '/substance-use/', icon: 'sprout' },
      { label: 'Substance Abuse Evaluation', text: 'A clear written assessment and next steps.', href: '/evaluations/substance-abuse-evaluation/', icon: 'clipboard' },
      { label: 'DWI Evaluation', text: 'For court, DMV or your lawyer.', href: '/evaluations/dwi-evaluation/', icon: 'scale' },
      { label: 'Dual Diagnosis', text: 'Mental health and substance use, together.', href: '/substance-use/dual-diagnosis/', icon: 'link' },
      { label: 'CORE Services for HARP Members', text: 'Support beyond therapy.', href: '/programs/core/', icon: 'core' },
      { label: 'Individual, Group and Family Therapy', text: 'The format that fits you.', href: '/therapies/', icon: 'users' },
      { label: 'Telehealth', text: 'Counseling from home, by video.', href: '/programs/telehealth/', icon: 'telehealth' },
    ],
    gettingH2: 'How to Get to Our Rego Park Clinic',
    getting: [
      // BRACKETS-FILL-PLAN 1.3: no walk time, no bus names (verify in MTA Trip Planner first), no parking line
      { icon: 'subway', label: 'Subway', text: 'Near the 63rd Drive–Rego Park station (M and R trains).' },
      { icon: 'navigation', label: 'Bus', text: 'Several bus lines stop nearby. Use the map for directions.' },
      { icon: 'user', label: 'Accessibility', text: 'If you need help getting into the building or another accommodation, tell us when you call.' },
    ],
    hoodsH2: 'Serving Rego Park and Nearby Neighborhoods',
    hoodsText: 'Serving Rego Park and nearby neighborhoods, including Forest Hills, Elmhurst, Middle Village, Kew Gardens and Corona.',
    hoods: ['Rego Park', 'Forest Hills', 'Elmhurst', 'Middle Village', 'Kew Gardens', 'Corona'],
    teamH2: 'Meet the Rego Park Team',
    teamClinic: 'Rego Park',
    faqH2: 'Rego Park Clinic FAQs',
    faqs: [
      { q: 'Where exactly is the clinic?', a: 'At 63-36 99th Street in Rego Park, Queens. Use the map for directions.' },
      { q: 'What are your hours?', a: 'Monday to Friday, 9:00 AM to 6:00 PM, and Sunday, 9:00 AM to 12:00 PM. We are closed on Saturday. Call ahead to book a visit.' },
      { q: 'Can I get a substance abuse or DWI evaluation here?', a: 'Call to confirm the location for your evaluation.', link: { href: '/evaluations/', label: 'Evaluations' } },
      { q: 'Do you accept Medicaid at this location?', a: 'Yes, we accept most Medicaid plans.' },
      { q: 'Are you the counseling center on Queens Boulevard?', a: 'No. Rego Park Counseling is an independent clinic at 63-36 99th Street. We are not affiliated with other centers with similar names.' },
    ],
    separation: true,
    finalH2: 'Visit Our Rego Park Clinic',
    // Google profile (Cristofer): primary category Addiction treatment center (confirm against live profile)
    specialty: 'https://schema.org/Psychiatric', // schema.org MedicalSpecialty ("Addiction" isn't a value)
  },
  'fresh-meadows': {
    title: 'Mental Health Clinic in Fresh Meadows & Flushing | Rego Park Counseling',
    description: 'Licensed outpatient mental health counseling at 71-82 Parsons Blvd, Fresh Meadows, NY 11365, near Flushing. Anxiety, depression, trauma and more. Most Medicaid plans.',
    h1: 'Mental Health Clinic in Fresh Meadows, Queens',
    sub: 'Licensed counseling for anxiety, depression, trauma and more, close to home for Fresh Meadows and Flushing. Call to check availability.',
    photos: [
      { label: 'Building front' },
      { label: 'Entrance' },
      { label: 'Waiting area' },
      { label: 'Counseling room' },
    ],
    mhH2: 'Mental Health Counseling in Fresh Meadows and Flushing',
    mhText: 'You do not need to travel into Manhattan or across Queens for good mental health care. Our Fresh Meadows clinic offers licensed outpatient counseling for adults and older adults, in person or by telehealth, with appointments that fit around work and family.',
    mhServices: [
      { label: 'Anxiety Counseling', href: '/mental-health/anxiety-counseling/', icon: 'wind', text: 'Worry, panic and stress that won’t let up.' },
      { label: 'Depression Counseling', href: '/mental-health/depression-counseling/', icon: 'sunrise', text: 'When sadness or emptiness won’t lift.' },
      { label: 'PTSD & Trauma Counseling', href: '/mental-health/ptsd-trauma-counseling/', icon: 'shield', text: 'Trauma-informed, at a pace that feels safe.' },
      { label: 'Bipolar Disorder Counseling', href: '/mental-health/bipolar-disorder-counseling/', icon: 'activity', text: 'More balance between the highs and lows.' },
      { label: 'Anger Management', href: '/mental-health/anger-management/', icon: 'flame', text: 'Take back control of how you respond.' },
      { label: 'Older Adults', href: '/who-we-serve/older-adults/', icon: 'user', text: 'Counseling for every age, and for caregivers.' },
    ],
    otherH2: 'Other Services at Our Fresh Meadows Clinic',
    otherNote: 'Ask us which services are available at this clinic.',
    other: [
      { label: 'Outpatient Substance Use Treatment', href: '/substance-use/' },
      { label: 'Dual Diagnosis', href: '/substance-use/dual-diagnosis/' },
      { label: 'Individual, Group and Family Therapy', href: '/therapies/' },
      { label: 'Telehealth', href: '/programs/telehealth/' },
    ],
    gettingH2: 'How to Get to Our Fresh Meadows Clinic',
    getting: [
      // BRACKETS-FILL-PLAN 1.4: no bus names, ride times or parking until confirmed
      { icon: 'navigation', label: 'Getting here', text: 'Close to Flushing. Use the map for directions.' },
      { icon: 'user', label: 'Accessibility', text: 'If you need help getting into the building or another accommodation, tell us when you call.' },
    ],
    hoodsH2: 'Serving Fresh Meadows, Flushing and Nearby',
    hoodsText: 'Serving Fresh Meadows and nearby neighborhoods, including Flushing, Hillcrest, Jamaica Estates, Kew Gardens Hills, Oakland Gardens and Bayside.',
    hoods: ['Fresh Meadows', 'Flushing', 'Hillcrest', 'Jamaica Estates', 'Kew Gardens Hills', 'Oakland Gardens', 'Bayside'],
    languages: {
      gate: 'Only if the Fresh Meadows team speaks languages common in Flushing (Mandarin, Cantonese, Korean, Spanish…); otherwise remove',
      h2: 'Counseling in Your Language',
      list: [],
    },
    teamH2: 'Meet the Fresh Meadows Team',
    teamClinic: 'Fresh Meadows',
    faqH2: 'Fresh Meadows Clinic FAQs',
    faqs: [
      { q: 'Is this clinic close to Flushing?', a: 'Yes. It is in Fresh Meadows, close to Flushing. Use the map for directions.' },
      { q: 'What are your hours?', a: 'Monday to Friday, 9:00 AM to 6:00 PM. We are closed on Saturday and Sunday. Call ahead to book a visit.' },
      { q: 'Can I start mental health counseling here right away?', a: 'Call to check availability.' },
      { q: 'Do you treat older adults?', a: 'Yes. We serve adults of every age. Ask us which services are available at this clinic.', link: { href: '/who-we-serve/older-adults/', label: 'Older Adults' } },
      { q: 'Do you accept Medicaid here?', a: 'Yes, we accept most Medicaid plans.' },
      { q: 'Can I do some sessions by telehealth?', a: 'Telehealth is available for many services. Ask us if it’s right for you.' },
    ],
    separation: false,
    finalH2: 'Start Counseling in Fresh Meadows',
    // Google profile (Cristofer): primary category Mental health clinic (confirm)
    specialty: 'https://schema.org/Psychiatric',
  },
};

export const YONKERS = {
  title: 'Counseling in Yonkers, NY — Opening Soon | Rego Park Counseling',
  description: 'Rego Park Counseling is opening a licensed outpatient mental health and substance use clinic in Yonkers, NY. Join the list to hear when we open.',
  h1: 'Counseling in Yonkers, NY — Opening Soon',
  sub: 'Opening soon. Join the list to hear when we open.',
  beforeH2: 'Need Help Before We Open?',
  beforeText: 'You do not have to wait. Many of our services are available now by telehealth, and our Queens clinics are open in Rego Park and Fresh Meadows. Call to check availability.',
};
