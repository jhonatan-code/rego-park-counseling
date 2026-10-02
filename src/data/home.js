// Home page copy: "Rego Park Counseling — Home Page Final Copy" (Sep 30, 2026), section by section.
// Kept from earlier user decisions instead of the final copy: the form keeps the Sunview field set (no Clinic / Help-with
// selects) and there is one form per page (the closing band has no second form). See docs/PENDING.md 6.1.
// Anything marked [confirm] waits on Emmanuel (via Julian).

export const HELP_CARDS = [
  {
    title: 'Mental Health Counseling',
    href: '/mental-health/',
    icon: 'brain',
    text: 'Anxiety, depression, trauma and more, with a counselor who listens.',
    link: 'Explore mental health care',
    image: '/images/home/counselor-talking-with-adult-client.webp',
    alt: 'Counselor listening to an adult client in a bright room',
  },
  {
    title: 'Outpatient Substance Use Treatment',
    href: '/substance-use/',
    icon: 'sprout',
    text: 'Help with alcohol or drug use while you keep living at home and working.',
    link: 'Explore substance use treatment',
    image: '/images/home/group-counseling-session.webp',
    alt: 'Small group of adults talking in a counseling session',
  },
  {
    title: 'Substance Abuse and DWI Evaluations',
    href: '/evaluations/',
    icon: 'clipboard',
    text: 'Professional assessments for court, probation or the DMV.',
    link: 'Book an evaluation',
    image: '/images/home/counselor-taking-notes-evaluation.webp',
    alt: 'Counselor taking notes while talking with a client',
  },
];

// Section 5: main internal-linking block. Anchors use each page's target phrase.
export const CONDITIONS = [
  { group: 'Mental health', label: 'Anxiety counseling', icon: 'wind', href: '/mental-health/anxiety-counseling/', text: 'Constant worry, panic attacks or fear' },
  { group: 'Mental health', label: 'Depression counseling', icon: 'sunrise', href: '/mental-health/depression-counseling/', text: 'Sadness or emptiness that won’t lift' },
  { group: 'Mental health', label: 'PTSD and trauma counseling', icon: 'shield', href: '/mental-health/ptsd-trauma-counseling/', text: 'Painful memories that still take over' },
  { group: 'Mental health', label: 'Bipolar disorder counseling', icon: 'activity', href: '/mental-health/bipolar-disorder-counseling/', text: 'Mood swings that shake up your life' },
  { group: 'Mental health', label: 'Schizophrenia counseling', icon: 'compass', href: '/mental-health/schizophrenia-counseling/', text: 'Steady support to stay well' },
  { group: 'Mental health', label: 'Anger management', icon: 'flame', href: '/mental-health/anger-management/', text: 'Anger that hurts your relationships' },
  { group: 'Substance use and evaluations', label: 'Alcohol use treatment', icon: 'sprout', href: '/substance-use/alcohol-use-treatment/', text: 'Drinking that’s hard to control' },
  { group: 'Substance use and evaluations', label: 'Drug use treatment', icon: 'cycle', href: '/substance-use/drug-use-treatment/', text: 'Marijuana, cocaine, opioids, pills and more' },
  { group: 'Substance use and evaluations', label: 'Dual diagnosis', icon: 'link', href: '/substance-use/dual-diagnosis/', text: 'Mental health and substance use together' },
  { group: 'Substance use and evaluations', label: 'DWI and court-ordered evaluations', icon: 'clipboard', href: '/evaluations/dwi-evaluation/', text: 'Assessments for court, probation or the DMV' },
];

export const PROGRAMS = [
  { title: 'CORE services', href: '/programs/core/', icon: 'core', text: 'Community support for HARP members' },
  { title: 'Social Care Network', href: '/programs/social-care-network/', icon: 'home', text: 'Help with food, housing and rides for Medicaid members' },
  { title: 'Telehealth', href: '/programs/telehealth/', icon: 'telehealth', text: 'Secure video sessions from home' },
  { title: 'Older adults', href: '/who-we-serve/older-adults/', icon: 'user', text: 'Patient, respectful care for seniors' },
  { title: 'Court-involved', href: '/who-we-serve/court-involved/', icon: 'scale', text: 'Evaluations and treatment for court referrals' },
  { title: 'Individual, group and family therapy', href: '/therapies/', icon: 'family', text: 'The right mix of support for you' },
];

export const STEPS = [
  { title: 'Reach out', text: 'Call us or request a callback.' },
  { title: 'We check your coverage', text: 'We confirm your insurance and book your first visit.' },
  { title: 'Meet your counselor', text: 'In person in Queens or by telehealth, on a schedule that fits your life.' },
];

export const WHY = [
  { icon: 'licensed', title: 'Licensed for both', text: 'We are licensed by New York State for mental health (OMH) and substance use (OASAS), so one team can treat both.' },
  { icon: 'subway', title: 'Close to home', text: 'Two clinics in Queens near the trains and buses you already use, plus telehealth.' },
  { icon: 'heart', title: 'No judgment, ever', text: 'We see addiction and mental illness as health conditions, not personal failings.' },
  { icon: 'languages', title: 'People who understand Queens', text: 'Our counselors reflect the neighborhoods we serve.' },
];

// Section 13, word for word from the final copy; the same text feeds FAQPage schema (answers that still carry a
// [bracket] are left out of the schema until confirmed).
export const FAQS = [
  { q: 'Do you accept Medicaid?', a: 'Yes. Most of our patients use Medicaid, and we accept most Medicaid plans. Call us with your plan name and member ID, and we’ll confirm your coverage before your first visit. If you have a HARP plan, ask us about CORE services too.' },
  { q: 'Where are your clinics in Queens?', a: 'Our main clinic is at 63-36 99th Street in Rego Park, NY 11374. Our second clinic is at 71-82 Parsons Blvd in Fresh Meadows, NY 11365, close to Flushing. A clinic in Yonkers is opening soon. You can also meet with us by telehealth.' },
  { q: 'Do you offer telehealth?', a: 'Yes. Many of our counseling services are available by secure video, so you can meet with a licensed counselor from home. Ask about telehealth when you call, and we’ll tell you which services are available that way.' },
  { q: 'Do you treat mental health and substance use together?', a: 'Yes. We are licensed by New York State for both mental health (OMH) and substance use (OASAS). If you are dealing with anxiety, depression or trauma along with alcohol or drug use, one team can build one plan that covers both.' },
  { q: 'How do I get a substance abuse or DWI evaluation?', a: 'Call us or request a callback and tell us who asked for the evaluation and your deadline. Call to confirm the location for your evaluation. We’ll explain what to bring and how you receive your report.' },
  { id: 'first-visit', q: 'What happens at the first appointment?', a: 'You’ll meet with a licensed clinician who asks about what brings you in, your health and your goals. There’s no pressure to share more than you’re ready to. Together you’ll agree on a plan, whether that’s individual, group or family sessions, in person or by telehealth.' },
  { q: 'Is counseling confidential?', a: 'Yes. Your care is private and protected by HIPAA and New York State law. Substance use treatment records have extra protection under federal law (42 CFR Part 2). We share information only with your written permission, except in rare situations the law requires, like an emergency.' },
  { q: 'Are you connected to the Rego Park Counseling Center on Queens Boulevard?', a: 'No. Rego Park Counseling is an independent clinic located at 63-36 99th Street in Rego Park and in Fresh Meadows. We are not affiliated with other counseling centers in Queens that have similar names. If you’re looking for a different center, please contact them directly.' },
];

// Section 14: three hand-picked posts (final copy), not "latest". Slugs are read from posts.json so the card uses the
// shared post graphic and the real title. "How to Get Free Medicaid Transportation to Therapy in New York" is planned
// for Oct 5: until it is published, the Medicaid slot shows the existing Medicaid post (swap the slug when it's live).
export const POSTS = [
  { slug: 'does-medicaid-cover-substance-abuse-treatment-vital-guide', teaser: 'What New York Medicaid pays for, and how to check your plan.' },
  { slug: 'what-happens-during-a-court-ordered-substance-use-evaluation', teaser: 'Who needs one, what to bring and what happens after.' },
  { slug: 'can-alcohol-cause-anxiety-and-panic-attacks', teaser: 'How drinking and anxiety feed each other, and how to break the cycle.' },
];
