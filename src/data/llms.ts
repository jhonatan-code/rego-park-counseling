// Curated content for /llms.txt (llmstxt.org format), rendered by src/pages/llms.txt.ts.
// Hybrid by design: only the links listed here are published, nothing is added
// automatically. The build fails if a link isn't in the sitemap's route list
// (src/data/indexable.js) or is noindex. To update llms.txt, edit this file (PENDING 5.19).

export const LLMS_ORIGIN = 'https://www.regoparkcounseling.com';

type LlmsLink = { title: string; path: string; description?: string };
type LlmsSection = { heading: string; links: LlmsLink[] };

export const LLMS = {
  title: 'Rego Park Counseling',
  summary:
    'Rego Park Counseling is an independent, outpatient mental health and substance use clinic in Queens, New York, licensed by the New York State Office of Mental Health (OMH) and the New York State Office of Addiction Services and Supports (OASAS). It serves adults at clinics in Rego Park and Fresh Meadows, with a Yonkers clinic opening soon, in person and by telehealth. It accepts most Medicaid plans.',
  keyFacts: [
    'Outpatient care only. Rego Park Counseling does not provide inpatient, residential or detox services.',
    'Rego Park clinic: 63-36 99th Street, Rego Park, NY 11374. Phone: (718) 459-2558.',
    'Fresh Meadows clinic: 71-82 Parsons Blvd, Fresh Meadows, NY 11365, near Flushing.',
    'Rego Park Counseling is an independent clinic and is not affiliated with other counseling centers in Queens that use a similar name.',
    'Services include mental health counseling, outpatient substance use treatment, dual diagnosis care, substance abuse and DWI evaluations, CORE services for eligible HARP Medicaid members, Social Care Network support, and telehealth.',
    "Most patients use Medicaid; the clinic confirms each person's coverage by phone before the first visit.",
    'In an emergency, call 911. For a mental health or substance use crisis, call or text 988.',
  ],
  sections: [
    {
      heading: 'Mental Health',
      links: [
        { title: 'Mental Health Clinic in Queens', path: '/mental-health/', description: 'Overview of outpatient mental health counseling at Rego Park Counseling' },
        { title: 'Anxiety Counseling', path: '/mental-health/anxiety-counseling/', description: 'Counseling for worry, panic attacks and stress' },
        { title: 'Depression Counseling', path: '/mental-health/depression-counseling/', description: 'Counseling for persistent sadness, low energy and loss of interest' },
        { title: 'PTSD and Trauma Counseling', path: '/mental-health/ptsd-trauma-counseling/', description: 'Trauma-informed outpatient counseling' },
        { title: 'Bipolar Disorder Counseling', path: '/mental-health/bipolar-disorder-counseling/', description: 'Counseling to manage mood changes and prevent relapse' },
        { title: 'Schizophrenia Counseling and Support', path: '/mental-health/schizophrenia-counseling/', description: 'Ongoing counseling and community support' },
        { title: 'Anger Management', path: '/mental-health/anger-management/', description: 'Counseling for anger that affects relationships, work or health' },
      ],
    },
    {
      heading: 'Substance Use',
      links: [
        { title: 'Outpatient Substance Use Treatment', path: '/substance-use/', description: 'OASAS-licensed outpatient treatment for alcohol and drug use' },
        { title: 'Alcohol Use Treatment', path: '/substance-use/alcohol-use-treatment/', description: 'Outpatient alcohol counseling' },
        { title: 'Drug Use Treatment', path: '/substance-use/drug-use-treatment/', description: 'Outpatient counseling for drug use' },
        { title: 'Dual Diagnosis', path: '/substance-use/dual-diagnosis/', description: 'Mental health and substance use treated together by one team' },
      ],
    },
    {
      heading: 'Evaluations',
      links: [
        { title: 'Evaluations', path: '/evaluations/', description: 'Drug, alcohol and DWI evaluations in Queens' },
        { title: 'Substance Abuse Evaluation', path: '/evaluations/substance-abuse-evaluation/', description: 'Drug and alcohol assessments for court, probation, employers or personal reasons' },
        { title: 'DWI Evaluation', path: '/evaluations/dwi-evaluation/', description: 'Alcohol and drug evaluations after a DWI or DWAI in New York (general information, not legal advice)' },
      ],
    },
    {
      heading: 'Programs and Who We Serve',
      links: [
        { title: 'CORE Services', path: '/programs/core/', description: 'Community Oriented Recovery and Empowerment services for eligible HARP Medicaid members' },
        { title: 'Social Care Network', path: '/programs/social-care-network/', description: 'Help for Medicaid members with needs such as food, housing and transportation' },
        { title: 'Telehealth', path: '/programs/telehealth/', description: 'Secure video counseling' },
        { title: 'Older Adults', path: '/who-we-serve/older-adults/', description: 'Counseling for seniors' },
        { title: 'Court-Involved', path: '/who-we-serve/court-involved/', description: 'Counseling and treatment for people referred by courts or probation' },
        { title: 'Individual Therapy', path: '/therapies/individual-therapy/' },
        { title: 'Group Therapy', path: '/therapies/group-therapy/' },
        { title: 'Family Therapy', path: '/therapies/family-therapy/' },
      ],
    },
    {
      heading: 'Locations, Insurance and Contact',
      links: [
        { title: 'Our Clinics', path: '/locations/', description: 'All clinic locations' },
        { title: 'Rego Park Clinic', path: '/locations/rego-park/', description: 'Clinic at 63-36 99th Street, Rego Park, NY 11374' },
        { title: 'Fresh Meadows Clinic', path: '/locations/fresh-meadows/', description: 'Clinic in Fresh Meadows, near Flushing' },
        { title: 'Yonkers Clinic', path: '/locations/yonkers/', description: 'Opening soon' },
        { title: 'Insurance and Medicaid', path: '/insurance/', description: 'Most Medicaid plans accepted; coverage confirmed by phone' },
        { title: 'About Rego Park Counseling', path: '/about/', description: 'Who we are, licensing and treatment philosophy' },
        { title: 'Contact', path: '/contact/', description: 'Phone, callback request and clinic addresses' },
      ],
    },
    {
      heading: 'Optional',
      links: [
        { title: 'Blog', path: '/blog/', description: 'Articles on mental health, substance use, evaluations and Medicaid in New York' },
        { title: 'Where Can I Get a Substance Abuse Evaluation?', path: '/where-can-i-get-a-substance-abuse-evaluation/' },
        { title: 'Do You Get Drug Tested at a Substance Abuse Evaluation?', path: '/do-you-get-drug-tested-at-a-substance-abuse-evaluation/' },
        { title: 'Can Alcohol Cause Anxiety and Panic Attacks?', path: '/can-alcohol-cause-anxiety-and-panic-attacks/' },
        { title: 'Addiction and Mental Health: How They Are Connected', path: '/addiction-and-mental-health-how-they-are-connected/' },
        { title: 'Privacy Policy', path: '/privacy-policy/' },
        { title: 'Notice of Privacy Practices (HIPAA)', path: '/hipaa-notice/' },
        { title: 'Accessibility Statement', path: '/accessibility/' },
      ],
    },
  ] satisfies LlmsSection[],
};

export function renderLlms(): string {
  const link = (l: LlmsLink) =>
    `- [${l.title}](${LLMS_ORIGIN}${l.path})${l.description ? `: ${l.description}` : ''}`;
  const parts = [
    `# ${LLMS.title}`,
    `> ${LLMS.summary}`,
    ['Key facts:', ...LLMS.keyFacts.map((f) => `- ${f}`)].join('\n'),
    ...LLMS.sections.map((s) => [`## ${s.heading}`, s.links.map(link).join('\n')].join('\n\n')),
  ];
  return parts.join('\n\n') + '\n';
}
