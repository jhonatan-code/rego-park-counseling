// Substance Use section copy (docs/content/Rego Park Counseling — Substance Use Pages Content.pdf), as written.
// Compliance (brief): outpatient only; no detox, inpatient, residential or IOP; no MAT/Suboxone/Vivitrol/
// buprenorphine/methadone offers; "outpatient rehab" allowed only as that phrase (secondary heading + one FAQ),
// never "rehab" alone; person-first language; no success rates. Medication/referral brackets are launch blockers:
// they stay visible so they can't ship by accident.

const SU_EXPECT = [
  { title: 'Call or request a callback.', text: 'We check your insurance and find a time.' },
  { title: 'Assessment.', text: 'A credentialed clinician learns about your use, health and goals.' },
  { title: 'Your plan.', text: 'Sessions with your counselor on a plan reviewed as you progress. On the call we’ll tell you whether group sessions or telehealth are available for you.' },
];

export const PAGES = [
  {
    slug: 'alcohol-use-treatment',
    crumb: 'Alcohol Use Treatment',
    condition: 'Alcohol use disorder',
    icon: 'sprout',
    title: 'Outpatient Alcohol Treatment in Queens, NY | Rego Park Counseling',
    description: 'Outpatient alcohol counseling in Rego Park and Fresh Meadows, Queens. Individual, group and family sessions, in person or telehealth. Most Medicaid plans accepted.',
    h1: 'Outpatient Alcohol Treatment in Queens',
    sub: 'If drinking is causing problems with your health, family or work, you can get help close to home without putting your life on hold.',
    signs: {
      h2: 'Is Your Drinking Becoming a Problem?',
      intro: 'It may be time to talk to someone if you notice:',
      items: [
        'Drinking more, or for longer, than you meant to',
        'Trying to cut down and not being able to',
        'Needing more to feel the same effect',
        'Missing work or family responsibilities because of drinking',
        'Drinking to cope with stress, anxiety or sadness',
        'People close to you are worried',
      ],
      alert: 'If you have shaking, sweating or confusion when you stop drinking, talk to a doctor: alcohol withdrawal can be dangerous and may need medical care first.',
    },
    help: {
      h2: 'How Outpatient Alcohol Counseling Works',
      cards: [
        { icon: 'compass', title: 'Honest assessment.', text: 'Understand your drinking and what drives it.' },
        { icon: 'tools', title: 'Skills to change.', text: 'Handle cravings, triggers and high-risk situations; plan for setbacks.' },
        { icon: 'users', title: 'Support around you.', text: 'Group sessions with others in recovery, and family sessions so home becomes part of the solution.' },
      ],
      line: { text: 'Drinking to cope with anxiety or depression? We treat both together.', href: '/substance-use/dual-diagnosis/', label: 'Dual Diagnosis' },
    },
    expect: SU_EXPECT,
    whereH2: 'Alcohol Counseling in Rego Park and Fresh Meadows',
    telehealth: 'Prefer to stay home? Ask about telehealth.',
    families: {
      h2: 'Worried About Someone’s Drinking?',
      text: 'You can call us even if your loved one is not ready. We can talk through next steps and how family therapy can help.',
      // "How to Help Someone With a Drinking Problem" (new post, Nov 2) joins once published
      links: [{ href: '/therapies/family-therapy/', label: 'Family Therapy' }],
    },
    related: ['/evaluations/dwi-evaluation/', '/therapies/group-therapy/', '/mental-health/anxiety-counseling/'],
    posts: ['can-alcohol-cause-anxiety-and-panic-attacks', 'is-alcoholism-genetic-hereditary-links-and-factors'],
    faqH2: 'Alcohol Treatment FAQs',
    faqs: [
      { q: 'Do I have to stop drinking completely to start?', a: 'Your counselor will talk with you about your goals and your safety.' },
      { q: 'Do you offer alcohol detox?', a: 'No. If you may need detox, talk to your doctor first. We can help afterward.' },
      { q: 'Can I get alcohol treatment after a DWI?', a: 'Yes. Many people start with a DWI evaluation and continue treatment here.', link: { href: '/evaluations/dwi-evaluation/', label: 'DWI Evaluation' } },
      { q: 'Is outpatient alcohol rehab effective?', a: 'For many people who are medically stable, outpatient counseling helps reduce drinking and prevent relapse, especially with regular sessions and support.' },
      { q: 'Does Medicaid cover alcohol counseling?', a: 'We accept most Medicaid plans.' },
    ],
    finalH2: 'Start Alcohol Treatment in Queens',
  },
  {
    slug: 'drug-use-treatment',
    crumb: 'Drug Use Treatment',
    condition: 'Substance use disorder',
    icon: 'sprout',
    title: 'Outpatient Drug Treatment & Counseling in Queens, NY | Rego Park Counseling',
    description: 'Outpatient drug counseling in Rego Park and Fresh Meadows, Queens, for marijuana, cocaine, opioids, pills and more. In person or telehealth. Most Medicaid plans.',
    h1: 'Outpatient Drug Treatment in Queens',
    sub: 'Whatever you are using, you can talk to someone who will listen without judgment and help you build a plan to change, close to home.',
    substances: {
      h2: 'Substances We Help With',
      note: 'We help with alcohol and drug use, including:', // general list only (BRACKETS-FILL-PLAN 4.2)
      items: ['Alcohol', 'Marijuana', 'Cocaine', 'Opioids', 'Prescription pills'],
      lines: [
        { icon: 'heart', text: 'If medication or detox may help you, we’ll talk with you about next steps and where to go.' }, // never name a provider without approval (plan 4.1, PENDING 2a.1)
        { icon: 'shield', text: 'We can show you how to use naloxone and help you get a kit. In New York you can also get naloxone at many pharmacies without your own prescription, and a state program covers co-pays of up to $40.' }, // plan 4.5 FILL: OASAS naloxone rule + NYSDOH standing order / N-CAP
      ],
    },
    signs: {
      h2: 'Signs It May Be Time to Get Help',
      intro: 'Reach out if you notice:',
      items: [
        'Using more often or in larger amounts than planned',
        'Spending a lot of time getting, using or recovering',
        'Problems at work, school, home or with the law',
        'Cravings, or feeling sick when you stop',
        'Giving up things you used to enjoy',
      ],
    },
    help: {
      h2: 'How Outpatient Drug Counseling Works',
      cards: [
        { icon: 'compass', title: 'Understand your use.', text: 'Look at what you use, when and why, without judgment.' },
        { icon: 'steps', title: 'Build a plan.', text: 'Goals you set with your counselor, from cutting down to stopping.' },
        { icon: 'users', title: 'Stay on track.', text: 'Relapse-prevention skills, group support and family sessions.' },
      ],
    },
    expect: SU_EXPECT,
    whereH2: 'Drug Counseling in Rego Park and Fresh Meadows',
    telehealth: 'Prefer to stay home? Ask about telehealth.',
    related: ['/substance-use/dual-diagnosis/', '/therapies/group-therapy/', '/who-we-serve/court-involved/'],
    posts: ['weed-addiction-treatment', 'marijuana-addiction-treatment', 'adderall-addiction-treatment', 'how-long-to-rewire-brain-from-addiction'],
    faqH2: 'Drug Treatment FAQs',
    faqs: [
      { q: 'Do you treat marijuana addiction?', a: 'Yes. Many people come to us because marijuana use is affecting their motivation, relationships or work.' },
      { q: 'Do you offer Suboxone or methadone?', a: 'No. We provide counseling. If medication or detox may help you, we’ll talk with you about next steps and where to go.' },
      { q: 'Do you offer detox?', a: 'No. If you may need detox, talk to a doctor first. We can help with outpatient care afterward.' },
      { q: 'Is treatment confidential?', a: 'Yes. Substance use records have extra federal protection (42 CFR Part 2), and we share information only with your written consent.' },
      { q: 'Does Medicaid cover drug counseling?', a: 'We accept most Medicaid plans.' },
    ],
    overdose: true,
    finalH2: 'Start Drug Counseling in Queens',
  },
  {
    slug: 'dual-diagnosis',
    crumb: 'Dual Diagnosis',
    condition: 'Co-occurring mental health and substance use disorders',
    icon: 'link',
    title: 'Dual Diagnosis Treatment in Queens, NY | Mental Health & Substance Use',
    description: 'Outpatient dual diagnosis care in Queens: mental health and substance use treated together by one clinic licensed by both OMH and OASAS. Most Medicaid plans.',
    h1: 'Dual Diagnosis Treatment in Queens',
    sub: 'When anxiety, depression or trauma and alcohol or drug use feed each other, you need care for both, from one team, in one place.',
    trust: ['Licensed by both NYS OMH (mental health) and NYS OASAS (substance use)'],
    intro: {
      h2: 'What Is a Dual Diagnosis?',
      text: 'A dual diagnosis (also called co-occurring disorders) means having a mental health condition and a substance use problem at the same time. They often feed each other: drinking to calm anxiety, using to escape depression, or substance use making mood swings worse. Treating only one usually is not enough.',
    },
    combos: {
      h2: 'Common Combinations We Help With',
      items: [
        { text: 'Anxiety and alcohol use', href: '/mental-health/anxiety-counseling/', label: 'Anxiety Counseling' },
        { text: 'Depression and alcohol or drug use', href: '/mental-health/depression-counseling/', label: 'Depression Counseling' },
        { text: 'Trauma or PTSD and substance use', href: '/mental-health/ptsd-trauma-counseling/', label: 'PTSD & Trauma Counseling' },
        { text: 'Bipolar disorder and substance use', href: '/mental-health/bipolar-disorder-counseling/', label: 'Bipolar Disorder Counseling' },
      ],
    },
    help: {
      h2: 'Why Integrated Care Works Better',
      cards: [
        { icon: 'clipboard', title: 'One plan, not two.', text: 'Your mental health and substance use goals live in the same plan.' },
        { icon: 'users', title: 'One team that talks.', text: 'No bouncing between separate programs with separate rules.' },
        { icon: 'licensed', title: 'Licensed for both.', text: 'RPC is licensed by the NYS Office of Mental Health and the NYS Office of Addiction Services and Supports.' },
      ],
    },
    expect: SU_EXPECT,
    whereH2: 'Dual Diagnosis Care in Rego Park and Fresh Meadows',
    telehealth: 'Prefer to stay home? Ask about telehealth.',
    insuranceExtra: { text: 'HARP members may also qualify for CORE services.', href: '/programs/core/', label: 'CORE' },
    related: ['/substance-use/', '/mental-health/', '/programs/core/'],
    posts: ['addiction-and-mental-health-how-they-are-connected', 'how-does-substance-abuse-affect-mental-health', 'bipolar-and-alcohol-addiction'],
    faqH2: 'Dual Diagnosis FAQs',
    faqs: [
      { q: 'How do I know if I have a dual diagnosis?', a: 'You do not need to know before you call. A licensed clinician will assess both your mental health and your substance use at your first visit.' },
      { q: 'Which should be treated first?', a: 'In integrated care, both are treated together, because each affects the other.' },
      { q: 'Is this an inpatient dual diagnosis program?', a: 'No. We provide outpatient care, so you live at home and attend sessions in Queens or by telehealth.' },
      { q: 'Do you prescribe medication?', a: 'We provide counseling and can coordinate with your doctor or psychiatrist.' },
      { q: 'Does Medicaid cover dual diagnosis treatment?', a: 'We accept most Medicaid plans.' },
    ],
    finalH2: 'Get Care for Both in One Place',
  },
];

export const HUB = {
  treat: [
    { href: '/substance-use/alcohol-use-treatment/', label: 'Alcohol Use Treatment', icon: 'sprout', text: 'For drinking that has become hard to control.' },
    { href: '/substance-use/drug-use-treatment/', label: 'Drug Use Treatment', icon: 'shield', text: 'For marijuana, cocaine, opioids, pills and other drugs.' },
    { href: '/substance-use/dual-diagnosis/', label: 'Dual Diagnosis', icon: 'link', text: 'When substance use and mental health problems happen together.' },
    { href: '/evaluations/', label: 'Evaluations', icon: 'clipboard', text: 'Court, DMV or employer assessments.' },
  ],
  includes: [
    { label: 'Individual counseling', href: '/therapies/individual-therapy/', icon: 'user' },
    { label: 'Group counseling', href: '/therapies/group-therapy/', icon: 'users' },
    { label: 'Family sessions', href: '/therapies/family-therapy/', icon: 'family' },
    { label: 'Relapse-prevention planning', icon: 'shield' },
    { label: 'Telehealth sessions', href: '/programs/telehealth/', icon: 'telehealth' },
  ],
  steps: [
    { title: 'Call or request a callback.', text: 'We check your insurance.' },
    { title: 'Assessment.', text: 'A credentialed clinician learns about your use, health and goals.' },
    { title: 'Your plan.', text: 'Sessions at a pace that fits your life, reviewed as you progress.' },
  ],
  programs: [
    { href: '/programs/core/', label: 'CORE services for HARP members' },
    { href: '/programs/social-care-network/', label: 'Social Care Network' },
    { href: '/who-we-serve/court-involved/', label: 'Court-Involved' },
  ],
  faqs: [
    { q: 'What is the difference between outpatient and inpatient rehab?', a: 'Inpatient programs have you live at a facility. Outpatient treatment, which we provide, lets you live at home and attend sessions at our Queens clinics or by telehealth.' },
    { q: 'Do you offer detox?', a: 'No. If you may need detox, talk to your doctor first. We can help with outpatient care afterward.' },
    { q: 'Do you accept Medicaid for substance use treatment?', a: 'Yes, we accept most Medicaid plans.' },
    { q: 'How often will I come in?', a: 'Your counselor sets a schedule with you.' },
    { q: 'Can my family be involved?', a: 'Yes, family sessions are available.', link: { href: '/therapies/family-therapy/', label: 'Family Therapy' } },
    { q: 'Can I get treatment after a court or DWI referral?', a: 'Yes.', links: [{ href: '/who-we-serve/court-involved/', label: 'Court-Involved' }, { href: '/evaluations/dwi-evaluation/', label: 'DWI Evaluation' }] },
  ],
};
