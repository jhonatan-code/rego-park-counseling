// Programs, Who We Serve & Therapies copy (docs/content/Rego Park Counseling — Programs, Who We Serve &
// Therapies Content.pdf). Headings, subheads, lists and meta are the brief's. Where the brief lists a FAQ
// question without an answer, the answer is a DRAFT written for Pavel to review (marked `draft: true`), kept
// conservative, with [brackets] for facts only Emmanuel can give. LGBTQ+ and Couples are not built (pending).
// Rendered by components/BlockPage.astro. Block types: text · chips · cards · steps · callout · checklist.

const MEDICAID_TELEHEALTH = 'Many Medicaid plans cover telehealth counseling. We’ll check yours before your first session.';

export const PAGES = [
  // ───────────── Programs ─────────────
  {
    path: '/programs/',
    crumbs: [{ name: 'Programs', href: '/programs/' }],
    hub: true,
    title: 'Programs at Rego Park Counseling | CORE, Social Care & Telehealth',
    description: 'CORE services for HARP members, Social Care Network support and telehealth counseling from Rego Park Counseling in Queens. Most Medicaid plans.',
    h1: 'Our Programs',
    sub: 'Beyond counseling sessions, our programs help with recovery in the community, everyday needs and getting care from home.',
    blocks: [
      {
        type: 'cards', h2: 'Support Beyond the Therapy Room', size: 'lg',
        items: [
          { icon: 'core', title: 'CORE Services for HARP Members', href: '/programs/core/', text: 'Extra, goal-based support at home, at work and in your community for adults with a HARP plan. Covered by Medicaid for eligible members.' },
          { icon: 'home', title: 'Social Care Network', href: '/programs/social-care-network/', text: 'If you have Medicaid, we can help connect you with support for needs like food, housing or transportation.' },
          { icon: 'telehealth', title: 'Telehealth', href: '/programs/telehealth/', text: 'Meet with a licensed counselor by secure video. Mix it with in-person visits whenever you like.' },
        ],
      },
    ],
    faqH2: 'Program FAQs',
    faqs: [
      { q: 'Who is eligible for CORE?', a: 'CORE is for adults 21 and older enrolled in a HARP, HIV-SNP or MAP plan who meet New York’s behavioral health high-risk criteria. A licensed practitioner recommends CORE services. You can also ask your plan or NY Medicaid Choice (1-800-505-5678). Not sure if you have a HARP? Call us and we’ll help you check.', link: { href: '/programs/core/', label: 'CORE' } },
      { q: 'Is telehealth covered by Medicaid?', a: MEDICAID_TELEHEALTH, draft: true },
    ],
    finalH2: 'Find the Right Support',
  },
  {
    path: '/programs/core/',
    crumbs: [{ name: 'Programs', href: '/programs/' }, { name: 'CORE Services', href: '/programs/core/' }],
    title: 'CORE Services for HARP Members in Queens | Rego Park Counseling',
    description: 'Community Oriented Recovery and Empowerment (CORE) services for eligible HARP Medicaid members in Queens. Support for recovery at home and in the community.',
    h1: 'CORE Services for HARP Members in Queens',
    sub: 'If you have a HARP plan, you may qualify for CORE: extra support to reach your goals at home, at work and in your community.',
    trust: ['For HARP members', 'Covered by Medicaid for eligible members', 'In the community'],
    formHeading: 'Ask About CORE',
    condition: null,
    blocks: [
      { type: 'text', h2: 'What Are CORE Services?', icon: 'core', image: '/images/home/counselor-talking-with-adult-client.webp', alt: 'Counselor and client talking side by side in a bright room', text: 'CORE (Community Oriented Recovery and Empowerment) services are New York Medicaid benefits for adults enrolled in, or eligible for, a Health and Recovery Plan (HARP). They focus on recovery outside the clinic: building skills, finding stability and staying connected.' },
      {
        // The four official CORE services (NYS OMH). "CORE includes …" until Emmanuel confirms which RPC is designated
        // for; then switch the heading to "CORE Services We Offer" (BRACKETS-FILL-PLAN 7.1, PENDING 2d.1).
        type: 'cards', h2: 'What CORE Includes', numbered: true,
        items: [
          { icon: 'chat', title: 'Community Psychiatric Support and Treatment (CPST)', text: 'Counseling and support in the community.' },
          { icon: 'tools', title: 'Psychosocial Rehabilitation (PSR)', text: 'Practical skills for daily living, work, school and relationships.' },
          { icon: 'family', title: 'Family Support and Training (FST)', text: 'Helping family members support your recovery.' },
          { icon: 'users', title: 'Empowerment Services – Peer Support', text: 'Support from someone with lived experience.' },
        ],
      },
      { type: 'callout', h2: 'Who Is Eligible?', text: 'CORE is for adults 21 and older enrolled in a HARP, HIV-SNP or MAP plan who meet New York’s behavioral health high-risk criteria. A licensed practitioner recommends CORE services. You can also ask your plan or NY Medicaid Choice (1-800-505-5678). Not sure if you have a HARP? Call us and we’ll help you check.', phone: 'Check my HARP eligibility' },
      { type: 'steps', h2: 'How to Get Started', items: [{ title: 'Call us', text: 'Tell us you’re interested in CORE, or have your case manager call.' }, { title: 'We confirm your HARP eligibility', text: 'We check your plan with you.' }, { title: 'A recommendation', text: 'A licensed practitioner recommends CORE services.' }] },
    ],
    where: { h2: 'Where CORE Services Happen', telehealth: 'Some services can take place in the community.' },
    related: ['/mental-health/schizophrenia-counseling/', '/substance-use/dual-diagnosis/', '/programs/social-care-network/'],
    // + blog "What Is HARP?" (new, Nov 16) once published
    faqH2: 'CORE Services FAQs',
    faqs: [
      { q: 'What is a HARP?', a: 'A Health and Recovery Plan (HARP) is a New York Medicaid managed care plan for adults with serious mental health or substance use needs. If you’re not sure whether you have one, call us and we’ll help you check.', draft: true },
      { q: 'Do I have to pay for CORE services?', a: 'CORE services are covered by Medicaid for eligible members.' },
      { q: 'Can I get CORE and counseling at the same time?', a: 'Ask us how CORE can work alongside your other care.' },
      { q: 'Can a case manager refer me?', a: 'Yes. Call us with their contact information.' },
      { q: 'Is CORE the same as a day program?', a: 'No. CORE is flexible, goal-based support.' },
    ],
    finalH2: 'Ask Us About CORE',
  },
  {
    path: '/programs/social-care-network/',
    crumbs: [{ name: 'Programs', href: '/programs/' }, { name: 'Social Care Network', href: '/programs/social-care-network/' }],
    title: 'Social Care Network Support in Queens | Rego Park Counseling',
    description: 'Medicaid members in Queens can get help with food, housing, transportation and more through New York’s Social Care Network. Ask Rego Park Counseling how.',
    h1: 'Social Care Network Support in Queens',
    sub: 'Stress about rent, food or getting to appointments can make recovery harder. If you have Medicaid, you may be able to get help.',
    trust: ['For Medicaid members', 'Food, housing, transportation'],
    formHeading: 'Ask About Help With Your Needs',
    blocks: [
      { type: 'text', h2: 'What Is the Social Care Network?', icon: 'home', text: 'New York’s Social Care Networks connect Medicaid members with help for health-related social needs, such as food, housing and transportation. If you have Medicaid, we can help connect you with support for needs like food, housing or transportation.' },
      { type: 'chips', h2: 'What Help May Be Available', items: [{ label: 'Food and nutrition', icon: 'heart' }, { label: 'Housing support', icon: 'home' }, { label: 'Transportation', icon: 'car' }, { label: 'Other needs', icon: 'plus' }] },
      { type: 'callout', h2: 'How We Help', text: 'Tell us what you need when you call.', phone: 'Talk to us about your needs' },
    ],
    related: ['/programs/core/', '/insurance/', '/substance-use/'],
    faqH2: 'Social Care Network FAQs',
    faqs: [
      // Eligibility, cost and role FAQs removed until confirmed (BRACKETS-FILL-PLAN 7.4, PENDING 2d.4)
    ],
    finalH2: 'Let’s Talk About What You Need',
  },
  {
    path: '/programs/telehealth/',
    crumbs: [{ name: 'Programs', href: '/programs/' }, { name: 'Telehealth', href: '/programs/telehealth/' }],
    title: 'Telehealth Counseling in New York | Rego Park Counseling',
    description: 'Online counseling for mental health and substance use from Rego Park Counseling. Secure video sessions from home. Most Medicaid plans accepted.',
    h1: 'Telehealth Counseling in New York',
    sub: 'Meet with a licensed counselor by secure video from home, work or wherever you feel comfortable.',
    trust: ['Secure video', 'Most Medicaid plans', 'Mix with in-person visits'],
    formHeading: 'Book a Telehealth Session',
    blocks: [
      { type: 'callout', h2: 'What You Can Do by Telehealth', text: 'Telehealth is available for many services. Ask us if it’s right for you.', phone: 'Ask about telehealth' }, // service list removed until confirmed (BRACKETS-FILL-PLAN 3.6)
      { type: 'steps', h2: 'How It Works', items: [{ title: 'Call to book', text: 'We check your insurance and find a time.' }, { title: 'Get a secure link', text: 'Sessions use a secure video platform. We’ll send you a link.' }, { title: 'Join from any device', text: 'Use a phone, tablet or computer.' }] },
      { type: 'text', h2: 'Is Telehealth Right for Me?', icon: 'telehealth', text: 'Telehealth is good for busy schedules, mobility issues or privacy. You can mix in-person and telehealth sessions.', image: '/images/home/front-desk-callback.webp', alt: 'Team member smiling while talking on a headset' },
    ],
    related: ['/mental-health/', '/substance-use/', '/therapies/individual-therapy/'],
    posts: ['telehealth-therapy-activities-for-adults'],
    faqH2: 'Telehealth FAQs',
    faqs: [
      { q: 'Is it covered by Medicaid?', a: MEDICAID_TELEHEALTH, draft: true },
      { q: 'Is it private?', a: 'Yes. Sessions use a secure video platform. We’ll send you a link.', link: { href: '/telehealth-privacy/', label: 'Telehealth & Text Terms' }, draft: true },
      { q: 'What do I need?', a: 'A phone, tablet or computer with a camera, an internet connection, and a quiet, private place to talk.', draft: true },
      { q: 'Can I switch to in person?', a: 'Yes. You can mix in-person and telehealth sessions.', draft: true },
    ],
    finalH2: 'Start Telehealth Counseling',
  },

  // ───────────── Who We Serve ─────────────
  {
    path: '/who-we-serve/',
    crumbs: [{ name: 'Who We Serve', href: '/who-we-serve/' }],
    hub: true,
    title: 'Who We Serve | Rego Park Counseling, Queens',
    description: 'Counseling for adults, older adults and people referred by courts in Queens, NY. Outpatient mental health and substance use care. Most Medicaid plans.',
    h1: 'Who We Serve',
    sub: 'We care for adults from across Queens, from young adults to seniors, and for people referred by courts, case managers and employers.',
    blocks: [
      {
        type: 'cards', h2: 'Care for Every Stage of Adult Life', size: 'lg',
        items: [
          { icon: 'user', title: 'Older Adults', href: '/who-we-serve/older-adults/', text: 'Counseling for depression, loneliness, grief and drinking or medication misuse in later life. Unhurried sessions, in person or by video.' },
          { icon: 'scale', title: 'Court-Involved', href: '/who-we-serve/court-involved/', text: 'Counseling, treatment and evaluations for people referred by courts, probation or programs. We explain what to bring and what to expect.' },
          { icon: 'family', title: 'Families', href: '/therapies/family-therapy/', text: 'When one person struggles, the whole family feels it. You can call us first, even if your loved one isn’t ready.' },
          // LGBTQ+ Affirming Care: added once Emmanuel confirms (not published as a generic page)
        ],
      },
    ],
    faqH2: 'Who We Serve FAQs',
    faqs: [
      { q: 'Do you see teenagers or children?', a: 'We serve adults.', draft: true },
      { q: 'Can I call for someone else?', a: 'Yes. You can call for someone you love, and we’ll talk through next steps.', draft: true },
    ],
    finalH2: 'We’re Here for You',
  },
  {
    path: '/who-we-serve/older-adults/',
    crumbs: [{ name: 'Who We Serve', href: '/who-we-serve/' }, { name: 'Older Adults', href: '/who-we-serve/older-adults/' }],
    large: true, // design note: larger type, high contrast, older adults in photos
    title: 'Counseling for Older Adults in Queens | Rego Park Counseling',
    description: 'Counseling for seniors in Queens for depression, anxiety, grief and alcohol or medication misuse. In person or telehealth, with patience and respect. Most Medicaid plans.',
    h1: 'Counseling for Older Adults in Queens',
    sub: 'Later life brings changes: retirement, loss, health worries, loneliness. Talking with a counselor can help, at any age.',
    trust: ['In person or telehealth', 'Most Medicaid plans'],
    blocks: [
      { type: 'chips', h2: 'What We Help Older Adults With', items: [{ label: 'Depression and loneliness', href: '/mental-health/depression-counseling/', icon: 'sunrise' }, { label: 'Anxiety and worry', href: '/mental-health/anxiety-counseling/', icon: 'wind' }, { label: 'Grief and life changes', icon: 'heart' }, { label: 'Drinking or misuse of medications', href: '/substance-use/alcohol-use-treatment/', icon: 'sprout' }, { label: 'Adjusting to health problems', icon: 'shield' }] },
      { type: 'text', h2: 'Care That Fits Older Adults', icon: 'user', list: ['Unhurried sessions', 'Telehealth for people who can’t travel', 'Family involvement if wanted'] },
      { type: 'callout', h2: 'For Family Members and Caregivers', text: 'Worried about a parent? Call us and we’ll talk through how to help.', phone: 'Call about a parent' },
    ],
    related: ['/mental-health/depression-counseling/', '/substance-use/alcohol-use-treatment/', '/programs/telehealth/'],
    posts: ['substance-abuse-in-the-elderly', 'does-bipolar-disorder-get-worse-with-age'],
    faqH2: 'Older Adults FAQs',
    faqs: [
      // Medicare FAQ removed until confirmed (BRACKETS-FILL-PLAN 6.2)
      { q: 'Can I bring a family member?', a: 'Yes. With your permission, a family member or caregiver can join a session.', draft: true },
      { q: 'Is the clinic accessible?', a: 'If you need help getting into the building or another accommodation, tell us when you call.' },
      { q: 'Can we do sessions by phone or video?', a: 'Telehealth is available for many services. Ask us if it’s right for you.', draft: true },
    ],
    finalH2: 'Talk to a Counselor, at Any Age',
  },
  {
    path: '/who-we-serve/court-involved/',
    crumbs: [{ name: 'Who We Serve', href: '/who-we-serve/' }, { name: 'Court-Involved', href: '/who-we-serve/court-involved/' }],
    legal: true,
    title: 'Court-Ordered Counseling & Treatment in Queens | Rego Park Counseling',
    // Brief's meta mentions "ATI programs" and "progress letters": both pending confirmation, held back.
    description: 'Outpatient counseling and substance use treatment for people referred by courts or probation in Queens. Evaluations and most Medicaid plans accepted.',
    h1: 'Court-Ordered Counseling and Treatment in Queens',
    sub: 'If a judge, probation officer or program requires counseling or treatment, we can help you meet the requirement and get real support.',
    trust: ['OASAS and OMH licensed', 'Most Medicaid plans'],
    formHeading: 'Tell Us Your Requirement',
    blocks: [
      {
        type: 'cards', h2: 'How We Work With Courts and Programs',
        items: [
          { icon: 'clipboard', title: 'Evaluations', href: '/evaluations/', text: 'Substance abuse and DWI evaluations.' },
          { icon: 'sprout', title: 'Outpatient substance use treatment', href: '/substance-use/', text: 'Counseling for alcohol and drug use.' },
          { icon: 'brain', title: 'Mental health counseling', href: '/mental-health/', text: 'Support for how you feel and cope.' },
          { icon: 'flame', title: 'Anger management', href: '/mental-health/anger-management/', text: 'Tools to stay in control.' },
          { icon: 'book', title: 'Updates for your court or program', text: 'With your written consent, we can share information with your court or program.' },
        ],
      },
      { type: 'text', h2: 'Alternatives to Incarceration (ATI)', gate: 'Only if RPC formally works with ATI programs — confirm; otherwise remove and keep a general line', text: '' },
      { type: 'checklist', h2: 'What to Bring', items: ['Court paperwork', 'Probation officer contact', 'Photo ID', 'Insurance card'] },
    ],
    related: ['/evaluations/', '/substance-use/', '/mental-health/anger-management/'],
    faqH2: 'Court-Ordered Treatment FAQs',
    faqs: [
      { q: 'Will you send reports to my probation officer?', a: 'Only with your written consent.' },
      { q: 'How fast can I start?', a: 'Call to check availability. Have your paperwork and deadline ready.', draft: true },
      { q: 'Does Medicaid cover court-ordered treatment?', a: 'We accept most Medicaid plans. We’ll check your coverage before your first visit.', draft: true },
      // Missed-session FAQ removed until confirmed (BRACKETS-FILL-PLAN 8.2)
    ],
    finalH2: 'Meet Your Requirement With Real Support',
  },

  // ───────────── Therapies ─────────────
  {
    path: '/therapies/',
    crumbs: [{ name: 'Therapies', href: '/therapies/' }],
    hub: true,
    title: 'Individual, Group & Family Therapy in Queens | Rego Park Counseling',
    description: 'Individual, group and family therapy for mental health and substance use in Rego Park and Fresh Meadows, Queens. In person or telehealth. Most Medicaid plans.',
    h1: 'Therapy Options',
    sub: 'Every plan is personal. Most people combine one-on-one sessions with group or family support.',
    blocks: [
      {
        type: 'photo-cards', h2: 'Choose What Fits You',
        items: [
          { title: 'Individual Therapy', href: '/therapies/individual-therapy/', text: 'Private, one-on-one time with a licensed counselor who gets to know you and your goals.', image: '/images/home/counselor-talking-with-adult-client.webp', alt: 'Counselor listening to an adult client in a bright room' },
          { title: 'Group Therapy', href: '/therapies/group-therapy/', text: 'Counselor-led groups where you learn from others who understand.', image: '/images/home/group-therapy-circle.webp', alt: 'Adults sitting in a circle during a group counseling session' },
          { title: 'Family Therapy', href: '/therapies/family-therapy/', text: 'Help the whole family heal and support recovery.', icon: 'family' },
          // Couples: added once Julian confirms
        ],
      },
    ],
    faqH2: 'Therapy FAQs',
    faqs: [
      { q: 'Can I combine individual and group therapy?', a: 'Yes. Most people combine one-on-one sessions with group or family support.', draft: true },
      { q: 'Are sessions available by telehealth?', a: 'Telehealth is available for many sessions.', link: { href: '/programs/telehealth/', label: 'Telehealth' }, draft: true },
    ],
    finalH2: 'Find the Right Kind of Support',
  },
  {
    path: '/therapies/individual-therapy/',
    crumbs: [{ name: 'Therapies', href: '/therapies/' }, { name: 'Individual Therapy', href: '/therapies/individual-therapy/' }],
    title: 'Individual Therapy in Queens, NY | Rego Park Counseling',
    description: 'One-on-one counseling for mental health and substance use in Rego Park and Fresh Meadows, Queens. Licensed counselors, in person or telehealth. Most Medicaid plans.',
    h1: 'Individual Therapy in Queens',
    sub: 'Private, one-on-one time with a licensed counselor who gets to know you and your goals.',
    trust: ['Licensed counselors', 'In person or telehealth', 'Most Medicaid plans'],
    blocks: [
      { type: 'steps', h2: 'What Happens in Individual Therapy', items: [{ title: 'Talk openly', text: 'In a private room, at your pace.' }, { title: 'Set goals', text: 'Decide together what you want to change.' }, { title: 'Learn skills', text: 'Practical tools you can use between sessions.' }, { title: 'Track progress', text: 'Review how it’s going and adjust the plan.' }] },
      { type: 'chips', h2: 'What It Helps With', items: [{ label: 'Anxiety', href: '/mental-health/anxiety-counseling/', icon: 'wind' }, { label: 'Depression', href: '/mental-health/depression-counseling/', icon: 'sunrise' }, { label: 'Trauma', href: '/mental-health/ptsd-trauma-counseling/', icon: 'shield' }, { label: 'Alcohol use', href: '/substance-use/alcohol-use-treatment/', icon: 'sprout' }, { label: 'Drug use', href: '/substance-use/drug-use-treatment/', icon: 'sprout' }, { label: 'Dual diagnosis', href: '/substance-use/dual-diagnosis/', icon: 'link' }] },
      { type: 'callout', h2: 'How Often and How Long', text: 'Your counselor sets a schedule with you.', phone: 'Ask about scheduling' },
    ],
    related: ['/therapies/group-therapy/', '/therapies/family-therapy/', '/programs/telehealth/'],
    posts: ['what-is-individual-therapy-session', 'types-of-individual-therapy', 'how-to-prepare-for-your-first-therapy-session'],
    faqH2: 'Individual Therapy FAQs',
    faqs: [
      { q: 'How long is a session?', a: 'Your counselor sets a schedule with you.' },
      { q: 'Can I choose my counselor?', a: 'Tell us if you have a preference, and we’ll do our best to match you.' },
      { q: 'Is it confidential?', a: 'Yes. What you share stays private, protected by HIPAA and, for substance use care, federal confidentiality rules (42 CFR Part 2).', draft: true },
      { q: 'Is it covered by Medicaid?', a: 'We accept most Medicaid plans. We’ll check yours before your first visit.', draft: true },
    ],
    finalH2: 'Start Individual Therapy',
  },
  {
    path: '/therapies/group-therapy/',
    crumbs: [{ name: 'Therapies', href: '/therapies/' }, { name: 'Group Therapy', href: '/therapies/group-therapy/' }],
    title: 'Group Therapy in Queens, NY | Rego Park Counseling',
    description: 'Counselor-led group therapy for substance use and mental health in Queens. Build skills, share support and practice recovery with others. Most Medicaid plans.',
    h1: 'Group Therapy in Queens',
    sub: 'You are not the only one. Groups led by a counselor help you learn from others who understand.',
    trust: ['Counselor-led', 'Most Medicaid plans'],
    blocks: [
      { type: 'callout', h2: 'Groups We Offer', text: 'We offer counselor-led groups. Ask us which groups are running now.', phone: 'Ask which groups are running' }, // group names removed until confirmed (BRACKETS-FILL-PLAN 3.7)
      { type: 'text', h2: 'What a Group Session Is Like', icon: 'users', image: '/images/home/group-therapy-circle.webp', alt: 'Adults sitting in a circle during a group counseling session', text: 'A counselor leads each group, and members agree to keep what is shared in the room private.' },
      { type: 'cards', h2: 'Why Group Therapy Works', items: [{ icon: 'heart', title: 'Support', text: 'People who understand what you’re going through.' }, { icon: 'check', title: 'Accountability', text: 'A group that notices your progress.' }, { icon: 'tools', title: 'Practice', text: 'A safe place to try new skills.' }] },
    ],
    related: ['/therapies/individual-therapy/', '/substance-use/', '/mental-health/depression-counseling/'],
    posts: ['group-therapy-for-substance-abuse', 'different-types-of-group-therapy', 'addiction-group-therapy-topics', 'group-therapy-for-depression'],
    faqH2: 'Group Therapy FAQs',
    faqs: [
      { q: 'Do I have to talk?', a: 'No. You can listen until you’re ready. Many people find it easier to share after a few sessions.', draft: true },
      { q: 'Is it confidential?', a: 'Yes. Group members agree to keep what is shared in the room private, and your counselor protects your records.', draft: true },
      { q: 'Are groups in person or online?', a: 'We offer counselor-led groups. Ask us which groups are running now.' },
      { q: 'Can I do group and individual therapy together?', a: 'Yes. Many people combine them.', link: { href: '/therapies/individual-therapy/', label: 'Individual Therapy' }, draft: true },
    ],
    finalH2: 'Join a Group',
  },
  {
    path: '/therapies/family-therapy/',
    crumbs: [{ name: 'Therapies', href: '/therapies/' }, { name: 'Family Therapy', href: '/therapies/family-therapy/' }],
    title: 'Family Therapy in Queens, NY | Rego Park Counseling',
    description: 'Family therapy in Queens for families affected by substance use or mental health problems. Rebuild trust and learn to support recovery. Most Medicaid plans.',
    h1: 'Family Therapy in Queens',
    sub: 'When one person struggles, the whole family feels it. Family therapy helps everyone heal and support recovery.',
    trust: ['Most Medicaid plans', 'Family members can be part of care'],
    blocks: [
      { type: 'cards', h2: 'How Family Therapy Helps', items: [{ icon: 'chat', title: 'Communication', text: 'Talk and listen without it turning into a fight.' }, { icon: 'shield', title: 'Boundaries', text: 'Care for your loved one and for yourself.' }, { icon: 'book', title: 'Understanding the condition', text: 'Learn what’s happening and what helps.' }, { icon: 'heart', title: 'Rebuilding trust', text: 'Repair what’s been strained, step by step.' }] },
      { type: 'chips', h2: 'Who Can Take Part', items: [{ label: 'Partners', icon: 'heart' }, { label: 'Parents', icon: 'family' }, { label: 'Adult children', icon: 'users' }, { label: 'Siblings', icon: 'users' }] },
      { type: 'callout', h2: 'Worried About a Loved One Who Won’t Get Help?', text: 'You can call us first.', phone: 'Call us first' },
    ],
    related: ['/substance-use/alcohol-use-treatment/', '/substance-use/drug-use-treatment/', '/mental-health/bipolar-disorder-counseling/'],
    posts: ['family-systems-therapy'],
    faqH2: 'Family Therapy FAQs',
    faqs: [
      { q: 'Does my loved one need to be a patient?', a: 'You can call us first if you’re worried about a loved one.', draft: true },
      { q: 'Is it covered by Medicaid?', a: 'We accept most Medicaid plans. We’ll check coverage before your first visit.', draft: true },
      // Telehealth FAQ removed until confirmed (BRACKETS-FILL-PLAN 3.8)
    ],
    finalH2: 'Help Your Family Heal Together',
  },
];
