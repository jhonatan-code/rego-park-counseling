// Evaluations section copy (docs/content/Rego Park Counseling — Evaluations Pages Content.pdf), as written.
// Rules from the brief: never promise a result, a recommendation or that a court, DMV or employer will accept the
// report; DWI content is information, not legal advice (disclaimer on every DWI section); only claim approvals RPC
// actually holds. [brackets] = fact from Emmanuel; `gate` = not rendered until confirmed.

export const NOT_LEGAL_ADVICE = 'This is not legal advice. Check your requirements with your attorney, the court or the DMV.';

export const EVAL_POSTS = {
  court: { href: '/what-happens-during-a-court-ordered-substance-use-evaluation/', title: 'What Happens During a Court-Ordered Substance Use Evaluation' },
  tested: { href: '/do-you-get-drug-tested-at-a-substance-abuse-evaluation/', title: 'Do You Get Drug Tested at a Substance Abuse Evaluation?' },
  alcohol: { href: '/alcohol-evaluation/', title: 'Alcohol Evaluation: What It Involves and When It’s Needed' },
  online: { href: '/virtual-substance-abuse-evaluation/', title: 'How Does Virtual Substance Abuse Evaluation Work?' },
  where: { href: '/where-can-i-get-a-substance-abuse-evaluation/', title: 'Where Can I Get a Substance Abuse Evaluation?' },
  // DWI posts planned in the content calendar (First DWI in NY Oct 19, Aggravated DWI Jan 18, Ignition Interlock Mar 1)
  // join the DWI page's "Learn more" once published.
};

export const TRUST = ['OASAS-licensed', '[Seen within X days]', '[Report in X days]'];

export const HUB = {
  cards: [
    {
      href: '/evaluations/substance-abuse-evaluation/',
      label: 'Substance Abuse Evaluation',
      text: 'A drug and alcohol assessment for court, probation, an employer, a school or your own peace of mind.',
      image: '/images/home/counselor-taking-notes-evaluation.webp',
      alt: 'Counselor taking notes while talking with a client',
      icon: 'clipboard',
    },
    {
      href: '/evaluations/dwi-evaluation/',
      label: 'DWI Evaluation',
      text: 'An alcohol and drug assessment after a DWI or DWAI arrest in New York, for the court or the DMV.',
      image: '/images/blog/where-can-i-get-a-substance-abuse-evaluation.webp',
      alt: 'Wooden gavel beside an open book on a blue table',
      icon: 'car',
      legal: true,
    },
  ],
  steps: [
    { title: 'Call or book online.', text: 'Tell us who requested the evaluation and when it is due.' },
    { title: 'Your appointment.', text: 'A credentialed clinician asks about your alcohol and drug use, health and history [confirm length, e.g. 60 to 90 minutes; in person or telehealth].' },
    { title: 'Your results.', text: 'We explain our recommendation and prepare the report you need [confirm turnaround and how it is sent].' },
  ],
  why: [
    { icon: 'licensed', text: 'OASAS-licensed outpatient clinic in Rego Park, Queens' },
    { icon: 'calendarPlain', text: '[Fast scheduling, including evenings or Saturdays — confirm]' },
    { icon: 'clipboard', text: 'Clear, professional reports [confirm what the report includes]' },
    { icon: 'sprout', text: 'If treatment is recommended, you can start here, in person or by telehealth' },
  ],
  posts: ['court', 'tested', 'alcohol', 'online'],
  faqs: [
    { q: 'How much does an evaluation cost?', a: 'Call us for current pricing and payment options. [Or show the price — confirm.]' },
    { q: 'Does Medicaid cover evaluations?', a: '[Confirm.]' },
    { q: 'Can I do my evaluation online?', a: '[Confirm whether telehealth evaluations are accepted and offered.]' },
    { q: 'How soon can I get an appointment?', a: '[Confirm.]' },
  ],
};

export const EVALS = [
  {
    slug: 'substance-abuse-evaluation',
    crumb: 'Substance Abuse Evaluation',
    serviceType: 'Substance abuse evaluation (drug and alcohol assessment)',
    title: 'Substance Abuse Evaluation in Queens, NY | Drug & Alcohol Assessment',
    description: 'Get a drug and alcohol evaluation in Rego Park, Queens, from an OASAS-licensed clinic. For court, probation, employers or personal reasons. Fast appointments.',
    h1: 'Substance Abuse Evaluation in Queens',
    sub: 'A professional drug and alcohol assessment from an OASAS-licensed clinic in Rego Park, for court, probation, work or your own peace of mind.',
    trust: ['OASAS-licensed', '[Seen within X days]', '[Report in X days]', '[In person or telehealth]'],
    formHeading: 'Book an Evaluation',
    what: {
      h2: 'What Is a Substance Abuse Evaluation?',
      text: 'A substance abuse evaluation (also called a drug and alcohol assessment) is a structured conversation with a credentialed clinician about your alcohol and drug use, health and life circumstances. It shows whether there is a substance use problem and, if so, what level of care would help.',
      pull: 'It is not a test you pass or fail.',
    },
    who: {
      h2: 'Who Needs a Drug and Alcohol Evaluation?',
      items: [
        { icon: 'scale', title: 'Courts and probation', text: 'After an arrest, as part of a case or sentence.' },
        { icon: 'briefcase', title: 'Employers', text: 'After a workplace incident or a return-to-work requirement [confirm].' },
        { icon: 'school', title: 'Schools or licensing boards', text: '[Confirm.]' },
        { icon: 'family', title: 'Family or personal reasons', text: 'You or a loved one want an honest look at drinking or drug use.' },
        { icon: 'car', title: 'DWI or DWAI', text: 'See our DWI Evaluation page.', link: { href: '/evaluations/dwi-evaluation/', label: 'DWI Evaluation' } },
      ],
    },
    stepsH2: 'What Happens During the Evaluation',
    steps: [
      { title: 'Before', text: 'Bring photo ID and any letter or paperwork from the court, lawyer or employer.' },
      { title: 'Interview', text: 'A clinician asks about your substance use, health, mental health, family and work [confirm length].' },
      { title: 'Screening tools', text: 'Standard questionnaires [confirm names if you want them listed, e.g. AUDIT, DAST]. [Confirm whether a drug test is part of the evaluation.]', link: { href: '/do-you-get-drug-tested-at-a-substance-abuse-evaluation/', label: 'Do You Get Drug Tested at a Substance Abuse Evaluation?' } },
      { title: 'Recommendation', text: 'No treatment, education, or a level of outpatient treatment.' },
      { title: 'Report', text: '[Confirm format, turnaround and whether we send it to the court or give it to you.]' },
    ],
    after: {
      h2: 'If Treatment Is Recommended',
      text: 'You can start right here. We offer outpatient substance use treatment in Rego Park and Fresh Meadows, and by telehealth.',
      link: { href: '/substance-use/', label: 'Outpatient Substance Use Treatment' },
    },
    whereH2: 'Get Your Evaluation in Rego Park, Queens',
    posts: ['where', 'court', 'tested', 'online'],
    faqH2: 'Substance Abuse Evaluation FAQs',
    faqs: [
      { q: 'How long does a substance abuse evaluation take?', a: '[Confirm, e.g. about 60 to 90 minutes.]' },
      { q: 'Will I be drug tested?', a: '[Confirm policy.]', link: { href: '/do-you-get-drug-tested-at-a-substance-abuse-evaluation/', label: 'Learn more' } },
      { q: 'Can I do the evaluation online?', a: '[Confirm; New York requirements vary by court.]' },
      { q: 'How fast will I get my report?', a: '[Confirm.]' },
      { q: 'Will my results be shared?', a: 'Only with people you authorize in writing, as required by federal confidentiality rules for substance use records (42 CFR Part 2).' },
      { q: 'Will the court accept your evaluation?', a: 'We are an OASAS-licensed provider. Each court sets its own rules, so check with your attorney or the court before booking.' },
      { q: 'How much does it cost?', a: 'Call us for current pricing and payment options. [Or show the price — confirm.]' },
    ],
    finalH2: 'Book Your Substance Abuse Evaluation',
  },
  {
    slug: 'dwi-evaluation',
    crumb: 'DWI Evaluation',
    serviceType: 'DWI alcohol and drug evaluation',
    legal: true,
    title: 'DWI Evaluation in Queens, NY | Alcohol & Drug Assessment | Rego Park Counseling',
    description: 'DWI and DWAI alcohol and drug evaluations in Rego Park, Queens, from an OASAS-licensed clinic. Fast appointments for court or DMV requirements in New York.',
    h1: 'DWI Evaluation in Queens, NY',
    sub: 'Arrested for DWI or DWAI in New York? Get the alcohol and drug evaluation your court or the DMV may require, from an OASAS-licensed clinic in Rego Park.',
    trust: ['OASAS-licensed', '[Seen within X days]', '[Report in X days]'],
    formHeading: 'Book a DWI Evaluation',
    when: {
      h2: 'When Do You Need a DWI Evaluation in New York?',
      intro: 'You may be asked to complete an alcohol and drug evaluation:',
      items: [
        { text: 'As a condition of your criminal case, plea or sentence' },
        { text: 'As part of probation' },
        { text: 'To get your license back after a suspension or revocation, when the DMV requires it' },
        { text: 'After a referral from a Drinking Driver Program', gate: 'Only if relevant — confirm RPC’s relationship with the DDP' },
      ],
      outro: 'If you have a letter or court paper, bring it. It tells us exactly what is needed.',
    },
    stepsH2: 'What Happens at Your DWI Evaluation',
    steps: [
      { title: 'Book quickly', text: 'Call us with your deadline. [Confirm how fast, e.g. within the week.]' },
      { title: 'The interview', text: 'A credentialed clinician asks about your drinking and drug use, the arrest, your health and your history [confirm length].' },
      { title: 'Screening tools and records', text: 'Standard questionnaires; we may ask for your BAC result or police report [confirm what is requested].' },
      { title: 'Recommendation', text: 'No treatment, alcohol education, or outpatient treatment.' },
      { title: 'Report', text: '[Confirm who receives it and when.]' },
    ],
    after: {
      h2: 'If Treatment Is Recommended',
      text: 'You can complete it with us, in Rego Park, Fresh Meadows or by telehealth, and we can provide progress and completion letters when you authorize them [confirm].',
      link: { href: '/substance-use/alcohol-use-treatment/', label: 'Alcohol Use Treatment' },
    },
    why: {
      h2: 'Why Choose Rego Park Counseling for Your DWI Evaluation',
      items: [
        { icon: 'licensed', text: 'OASAS-licensed outpatient clinic [add any DMV approvals only if held]' },
        { icon: 'clock', text: 'Fast scheduling for court deadlines [confirm]' },
        { icon: 'heart', text: 'Professional, respectful, no judgment' },
        { icon: 'sprout', text: 'Treatment available in the same place if needed' },
      ],
    },
    whereH2: 'Get Your DWI Evaluation in Rego Park, Queens',
    posts: ['alcohol', 'court'],
    faqH2: 'DWI Evaluation FAQs',
    faqs: [
      { q: 'Is a DWI evaluation the same as the Drinking Driver Program?', a: 'No. The evaluation assesses your alcohol and drug use. The Drinking Driver Program is a separate DMV education program. [Confirm how RPC relates to DDP.]' },
      { q: 'How long does a DWI evaluation take?', a: '[Confirm.]' },
      { q: 'Will the court or DMV accept your evaluation?', a: 'We are an OASAS-licensed provider. Requirements vary, so confirm with your attorney, the court or the DMV first.' },
      { q: 'Can I do it online?', a: '[Confirm whether remote DWI evaluations are offered and accepted.]' },
      { q: 'What if I was charged with DWAI or refused the test?', a: 'You may still need an evaluation. Call us with your paperwork and we’ll explain what we can provide.' },
      { q: 'Is my information confidential?', a: 'Yes. We share results only with people you authorize in writing, under federal rules for substance use records.' },
      { q: 'How much does it cost?', a: 'Call us for current pricing. [Or show the price — confirm.]' },
    ],
    finalH2: 'Book Your DWI Evaluation in Queens',
  },
];

// Cost block (both pages): every piece pending
export const COST = [
  { icon: 'receipt', label: 'Price', text: '[Price, or “Call for current pricing”]' },
  { icon: 'medicaid', label: 'Medicaid', text: '[Medicaid coverage for evaluations: confirm]' },
  { icon: 'clipboard', label: 'Payment', text: '[Payment methods]' },
];
