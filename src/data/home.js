// Home page copy. Headings and structure follow the Header & Home Page Brief section by section;
// body lines are WORKING COPY for Pavel to refine (brief: "Headings below are working copy for Pavel").
// Anything marked [confirm] waits on Emmanuel (via Julian).

export const HELP_CARDS = [
  {
    title: 'Mental Health Counseling',
    href: '/mental-health/',
    icon: 'brain',
    text: 'Help with anxiety, depression, trauma and more, from counselors licensed by NYS OMH.',
    image: '/images/home/counselor-talking-with-adult-client.webp',
    alt: 'Counselor listening to an adult client in a bright room',
  },
  {
    title: 'Outpatient Substance Use Treatment',
    href: '/substance-use/',
    icon: 'sprout',
    text: 'Counseling for alcohol and drug use, licensed by NYS OASAS. You go home every night.',
    image: '/images/home/group-counseling-session.webp',
    alt: 'Small group of adults talking in a counseling session',
  },
  {
    title: 'Substance Abuse and DWI Evaluations',
    href: '/evaluations/',
    icon: 'clipboard',
    text: 'For court, DMV, work or yourself. Clear steps and a written report.',
    image: '/images/home/counselor-taking-notes-evaluation.webp',
    alt: 'Counselor taking notes while talking with a client',
  },
];

// Section 5: main internal-linking block. Anchors use each page's target phrase.
export const CONDITIONS = [
  { group: 'Mental health', label: 'Anxiety counseling', href: '/mental-health/anxiety-counseling/', text: 'For worry, panic or stress that gets in the way of your day.' },
  { group: 'Mental health', label: 'Depression counseling', href: '/mental-health/depression-counseling/', text: 'For low mood, low energy or losing interest in things you enjoyed.' },
  { group: 'Mental health', label: 'PTSD and trauma counseling', href: '/mental-health/ptsd-trauma-counseling/', text: 'For nightmares, fear or numbness after something hard happened.' },
  { group: 'Mental health', label: 'Bipolar disorder counseling', href: '/mental-health/bipolar-disorder-counseling/', text: 'For steadier days between the highs and the lows.' },
  { group: 'Mental health', label: 'Schizophrenia counseling', href: '/mental-health/schizophrenia-counseling/', text: 'Ongoing support to manage symptoms and daily life.' },
  { group: 'Mental health', label: 'Anger management', href: '/mental-health/anger-management/', text: 'Practical tools to cool down and protect your relationships.' },
  { group: 'Substance use and evaluations', label: 'Alcohol use treatment', href: '/substance-use/alcohol-use-treatment/', text: 'Cut back or stop drinking, with a plan made for you.' },
  { group: 'Substance use and evaluations', label: 'Drug use treatment', href: '/substance-use/drug-use-treatment/', text: 'Outpatient counseling for any drug, without judgment.' },
  { group: 'Substance use and evaluations', label: 'Dual diagnosis treatment', href: '/substance-use/dual-diagnosis/', text: 'Mental health and substance use, treated together by one team.' },
  { group: 'Substance use and evaluations', label: 'DWI and court-ordered evaluations', href: '/evaluations/dwi-evaluation/', text: 'Evaluations for court, DMV or your lawyer, done correctly.' },
];

export const PROGRAMS = [
  { title: 'CORE (HARP)', href: '/programs/core/', icon: 'core', text: 'Hands-on help with work, school and daily goals for HARP members.' },
  { title: 'Social Care Network', href: '/programs/social-care-network/', icon: 'home', text: 'Connections to help with housing, food and rides to care.' },
  { title: 'Telehealth', href: '/programs/telehealth/', icon: 'telehealth', text: 'Secure video counseling from home when travel is hard.' },
  { title: 'Older Adults', href: '/who-we-serve/older-adults/', icon: 'user', text: 'We see people of every age, and we welcome caregivers too.' },
  { title: 'Court-Involved', href: '/who-we-serve/court-involved/', icon: 'scale', text: 'Counseling and evaluations for court, probation or parole.' },
  { title: 'Individual, Group and Family Therapy', href: '/therapies/', icon: 'family', text: 'Talk one-on-one, learn in a group, or bring your family in.' },
];

export const STEPS = [
  { title: 'Call or request a callback', text: 'Talk to a real person at our clinic. We’ll find a time that works for you.' },
  { title: 'We check your insurance', text: 'We confirm your Medicaid plan and book your first visit.' },
  { title: 'Meet your counselor', text: 'Come in person at a clinic near you, or meet by telehealth.' },
];

export const WHY = [
  { icon: 'licensed', title: 'Licensed for both', text: 'NYS OASAS for substance use and OMH for mental health. One team treats both, even when they happen together.' },
  { icon: 'subway', title: 'Close to home, near the trains', text: 'Clinics in Rego Park and Fresh Meadows, a short ride from most of Queens. Yonkers opens soon.' },
  { icon: 'heart', title: 'Health, not judgment', text: 'Addiction is a health condition, not a moral failing. You get a plan made for you and respect at every visit.' },
  // [confirm] add languages spoken once Emmanuel confirms
  { icon: 'languages', title: 'A team that reflects Queens', text: 'Counselors who know this neighborhood and the many cultures that make it home.' },
];

// Section 13. Answers 40–70 words, identical to the FAQPage schema. Draft copy for Pavel + compliance review.
export const FAQS = [
  {
    q: 'Do you accept Medicaid?',
    a: 'Yes. Most of our patients use Medicaid, and we work with most Medicaid plans in New York. Call us or request a callback and we’ll check your plan before your first visit, usually in a few minutes on the phone. If you’re a HARP member, you may also qualify for our CORE services, which add support beyond therapy.',
  },
  {
    q: 'Where are your clinics in Queens?',
    a: 'Our main clinic is at 63-36 99th Street in Rego Park, near the M and R trains at 63rd Drive. Our second clinic is at 71-82 Parsons Blvd in Fresh Meadows, close to Flushing and Hillcrest. A third clinic in Yonkers is opening soon. One phone number reaches all of them: (718) 459-2558.',
  },
  {
    q: 'Do you offer telehealth?',
    a: 'Yes. Many counseling sessions can happen by secure video from home. That helps if you work long hours, care for family or find travel hard. Your counselor will tell you which parts of your care can be done by telehealth and which need a visit to the clinic. Just ask when you call.',
  },
  {
    q: 'Do you treat mental health and substance use together?',
    a: 'Yes. We are licensed by New York State OASAS for substance use and by OMH for mental health, so one team can treat both in the same clinic. This is called dual diagnosis care. When anxiety, depression or trauma happen together with alcohol or drug use, treating them together usually works better.',
  },
  {
    q: 'How do I get a substance abuse or DWI evaluation?',
    a: 'Call us or request a callback and we’ll book a time. Bring a photo ID and any letters from the court, DMV, your lawyer or your employer. You’ll meet with a licensed counselor, answer questions about your history, and receive a clear written report with recommendations. We explain every step, but we don’t give legal advice.',
  },
  {
    q: 'What happens at the first appointment?',
    a: 'Your first visit is a conversation. A counselor asks what brought you in, about your health and history, and what you’d like to change. Together you make a plan that fits your life. Bring a photo ID, your Medicaid or insurance card, and a list of any medicines you take. You can ask questions at any time.',
  },
  {
    q: 'Is counseling confidential?',
    a: 'Yes. What you share with us is private and protected by federal and New York privacy laws, including HIPAA and the extra federal rules for substance use records. We don’t share your information without your written permission, except in rare cases the law requires, such as a risk of serious harm. Your counselor explains this at your first visit.',
  },
  {
    q: 'Are you connected to the Rego Park Counseling Center on Queens Boulevard?',
    a: 'No. Rego Park Counseling is an independent clinic. We are not part of the counseling center on Queens Boulevard, which is run by a different organization. Our clinics are at 63-36 99th Street in Rego Park and 71-82 Parsons Blvd in Fresh Meadows, and our phone number is (718) 459-2558.',
  },
];

// Section 14: chosen by hand from the strongest performers that match home topics (GSC last 12 months,
// docs/seo), not "latest posts". Posts keep their root-level URLs.
export const POSTS = [
  {
    title: 'Do You Get Drug Tested at a Substance Abuse Evaluation?',
    href: '/do-you-get-drug-tested-at-a-substance-abuse-evaluation/',
    tag: 'Evaluations',
    image: '/images/blog/do-you-get-drug-tested-at-a-substance-abuse-evaluation.webp',
    alt: 'Man talking with a clinic staff member at a front counter',
    text: 'When testing is part of an evaluation, why, and what it means for your results.',
  },
  {
    title: 'Where Can I Get a Substance Abuse Evaluation?',
    href: '/where-can-i-get-a-substance-abuse-evaluation/',
    tag: 'Evaluations',
    image: '/images/blog/where-can-i-get-a-substance-abuse-evaluation.webp',
    alt: 'Wooden gavel beside an open book on a blue table',
    text: 'Where to go in New York, who needs one, and what to bring.',
  },
  {
    title: 'Does Medicaid Cover Substance Abuse Treatment?',
    href: '/does-medicaid-cover-substance-abuse-treatment-vital-guide/',
    tag: 'Medicaid',
    image: '/images/blog/does-medicaid-cover-substance-abuse-treatment.webp',
    alt: 'Medicaid card next to a stethoscope and a clipboard',
    text: 'What New York Medicaid pays for, and how to check your plan.',
  },
];
