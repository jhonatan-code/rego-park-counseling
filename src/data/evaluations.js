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

// No prices or wait times on the site (what-not-to-publish §1/§4): both are "call us".
export const TRUST = ['OASAS-licensed', 'Call for current availability'];

export const HUB = {
  cards: [
    {
      href: '/evaluations/substance-abuse-evaluation/',
      label: 'Substance Abuse Evaluation',
      text: 'A drug and alcohol assessment for court, probation or your own peace of mind.',
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
    { title: 'Your appointment.', text: 'A credentialed clinician asks about your alcohol and drug use, health and history.' },
    { title: 'Your results.', text: 'We’ll explain your results and how you receive your report.' },
  ],
  why: [
    { icon: 'licensed', text: 'OASAS-licensed outpatient clinic in Rego Park, Queens' },
    { icon: 'calendarPlain', text: 'Call to check the next available appointment.' },
    { icon: 'clipboard', text: 'Clear, professional reports' },
    { icon: 'sprout', text: 'If treatment is recommended, you can start here, in person or by telehealth' },
  ],
  posts: ['court', 'tested', 'alcohol', 'online'],
  faqs: [
    { q: 'How much does an evaluation cost?', a: 'Call us for current pricing and payment options.' },
    { q: 'Does Medicaid cover evaluations?', a: 'Call us for current pricing and payment options.' },
    { q: 'Can I do my evaluation online?', a: 'Ask us whether your evaluation can be done by telehealth. Check that your court or the DMV accepts it.' },
    { q: 'How soon can I get an appointment?', a: 'Call to check the next available appointment.' },
  ],
};

export const EVALS = [
  {
    slug: 'substance-abuse-evaluation',
    crumb: 'Substance Abuse Evaluation',
    serviceType: 'Substance abuse evaluation (drug and alcohol assessment)',
    title: 'Substance Abuse Evaluation in Queens, NY | Drug & Alcohol Assessment',
    description: 'Get a drug and alcohol evaluation in Rego Park, Queens, from an OASAS-licensed clinic, for court, probation or personal reasons. Call to check availability.',
    h1: 'Substance Abuse Evaluation in Queens',
    sub: 'A professional drug and alcohol assessment from an OASAS-licensed clinic in Rego Park, for court, probation or your own peace of mind.',
    trust: ['OASAS-licensed', 'Call for current availability'],
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
        // Employers / schools / licensing boards removed until confirmed (BRACKETS-FILL-PLAN 5.10)
        { icon: 'family', title: 'Family or personal reasons', text: 'You or a loved one want an honest look at drinking or drug use.' },
        { icon: 'car', title: 'DWI or DWAI', text: 'See our DWI Evaluation page.', link: { href: '/evaluations/dwi-evaluation/', label: 'DWI Evaluation' } },
      ],
    },
    stepsH2: 'What Happens During the Evaluation',
    steps: [
      { title: 'Before', text: 'Bring photo ID and any letter or paperwork from the court, lawyer or employer.' },
      { title: 'Interview', text: 'A clinician asks about your substance use, health, mental health, family and work.' },
      { title: 'Screening tools', text: 'Standard screening questionnaires.', link: { href: '/do-you-get-drug-tested-at-a-substance-abuse-evaluation/', label: 'Do You Get Drug Tested at a Substance Abuse Evaluation?' } },
      { title: 'Recommendation', text: 'No treatment, education, or a level of outpatient treatment.' },
      { title: 'Report', text: 'We’ll explain your results and how you receive your report.' },
    ],
    after: {
      h2: 'If Treatment Is Recommended',
      text: 'You can start right here, with outpatient substance use treatment. Ask us which services are available at each clinic and by telehealth.',
      link: { href: '/substance-use/', label: 'Outpatient Substance Use Treatment' },
    },
    whereH2: 'Get Your Evaluation in Rego Park, Queens',
    posts: ['where', 'court', 'tested', 'online'],
    faqH2: 'Substance Abuse Evaluation FAQs',
    faqs: [
      { q: 'Will I be drug tested?', a: 'Ask us when you book. It depends on what your court or employer requires.', link: { href: '/do-you-get-drug-tested-at-a-substance-abuse-evaluation/', label: 'Learn more' } },
      { q: 'Can I do the evaluation online?', a: 'Ask us whether your evaluation can be done by telehealth. Check that your court or the DMV accepts it.' },
      { q: 'Will my results be shared?', a: 'Only with people you authorize in writing, as required by federal confidentiality rules for substance use records (42 CFR Part 2).' },
      { q: 'Will the court accept your evaluation?', a: 'We are an OASAS-licensed provider. Each court sets its own rules, so check with your attorney or the court before booking.' },
      { q: 'How much does it cost?', a: 'Call us for current pricing and payment options.' },
    ],
    finalH2: 'Book Your Substance Abuse Evaluation',
  },
  {
    slug: 'dwi-evaluation',
    crumb: 'DWI Evaluation',
    serviceType: 'DWI alcohol and drug evaluation',
    legal: true,
    title: 'DWI Evaluation in Queens, NY | Alcohol & Drug Assessment | Rego Park Counseling',
    description: 'DWI and DWAI alcohol and drug evaluations in Rego Park, Queens, from an OASAS-licensed clinic, for court or DMV requirements in New York. Call to check availability.',
    h1: 'DWI Evaluation in Queens, NY',
    sub: 'Arrested for DWI or DWAI in New York? Get the alcohol and drug evaluation your court or the DMV may require, from an OASAS-licensed clinic in Rego Park.',
    trust: ['OASAS-licensed', 'Call for current availability'],
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
      { title: 'Book', text: 'Call us with your deadline to check the next available appointment.' },
      { title: 'The interview', text: 'A credentialed clinician asks about your drinking and drug use, the arrest, your health and your history.' },
      { title: 'Screening tools and paperwork', text: 'Standard screening questionnaires. Bring photo ID and any letter or paperwork from the court, lawyer or employer.' },
      { title: 'Recommendation', text: 'No treatment, alcohol education, or outpatient treatment.' },
      { title: 'Report', text: 'We’ll explain your results and how you receive your report.' },
    ],
    after: {
      h2: 'If Treatment Is Recommended',
      text: 'You can start treatment with us. Ask us which services are available at each clinic and by telehealth.',
      link: { href: '/substance-use/alcohol-use-treatment/', label: 'Alcohol Use Treatment' },
    },
    why: {
      h2: 'Why Choose Rego Park Counseling for Your DWI Evaluation',
      items: [
        { icon: 'licensed', text: 'OASAS-licensed outpatient clinic' },
        { icon: 'clock', text: 'Call to check the next available appointment' },
        { icon: 'heart', text: 'Professional, respectful, no judgment' },
        { icon: 'sprout', text: 'Treatment available in the same place if needed' },
      ],
    },
    whereH2: 'Get Your DWI Evaluation in Rego Park, Queens',
    posts: ['alcohol', 'court'],
    faqH2: 'DWI Evaluation FAQs',
    faqs: [
      // DDP and length FAQs removed until confirmed (BRACKETS-FILL-PLAN 5.9, 5.2)
      { q: 'Will the court or DMV accept your evaluation?', a: 'We are an OASAS-licensed provider. Requirements vary, so confirm with your attorney, the court or the DMV first.' },
      { q: 'Can I do it online?', a: 'Ask us whether your evaluation can be done by telehealth. Check that your court or the DMV accepts it.' },
      { q: 'What if I was charged with DWAI or refused the test?', a: 'You may still need an evaluation. Call us with your paperwork and we’ll explain what we can provide.' },
      { q: 'Is my information confidential?', a: 'Yes. We share results only with people you authorize in writing, under federal rules for substance use records.' },
      { q: 'How much does it cost?', a: 'Call us for current pricing.' },
    ],
    finalH2: 'Book Your DWI Evaluation in Queens',
  },
];

// Cost block (both pages): every piece pending
export const COST = [
  // Medicaid coverage and payment methods removed until confirmed (BRACKETS-FILL-PLAN 5.8)
  { icon: 'receipt', label: 'Price and payment', text: 'Call us for current pricing and payment options.' },
];
