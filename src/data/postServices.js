// Post → service match (the "¿Vives en Queens?" box at the end of every post). The first rule whose pattern matches
// the post's slug + title wins; order goes from the most specific topic to the broadest. No rule → the hub of the
// post's category. Only built, confirmed pages: never psychiatry, couples or LGBTQ+ (pending), never IOP/detox.
// topic completes "We help with {topic} …"; label is the link text.
const RULES = [
  [/dwi|dui|drunk-driv|driving-while/, { topic: 'DWI evaluations', href: '/evaluations/dwi-evaluation/', label: 'DWI evaluations' }],
  [/evaluation|assessment/, { topic: 'substance abuse evaluations', href: '/evaluations/substance-abuse-evaluation/', label: 'Substance abuse evaluations' }],
  [/medicaid|medicare|insurance/, { topic: 'finding out what your insurance covers', href: '/insurance/', label: 'Insurance and Medicaid' }],
  [/dual-diagnosis|co-occurring/, { topic: 'mental health and substance use together', href: '/substance-use/dual-diagnosis/', label: 'Dual diagnosis care' }],
  [/alcohol|drinking|drunk|sober/, { topic: 'alcohol use', href: '/substance-use/alcohol-use-treatment/', label: 'Alcohol use treatment' }],
  [/drug|opioid|cocaine|meth|marijuana|weed|cannabis|xanax|adderall|fentanyl|heroin|benzo|pills/, { topic: 'drug use', href: '/substance-use/drug-use-treatment/', label: 'Drug use treatment' }],
  [/ptsd|trauma/, { topic: 'trauma and PTSD', href: '/mental-health/ptsd-trauma-counseling/', label: 'PTSD and trauma counseling' }],
  [/bipolar|mania|manic/, { topic: 'bipolar disorder', href: '/mental-health/bipolar-disorder-counseling/', label: 'Bipolar disorder counseling' }],
  [/schizophren|psychosis|psychotic/, { topic: 'schizophrenia', href: '/mental-health/schizophrenia-counseling/', label: 'Schizophrenia counseling' }],
  [/anger|rage/, { topic: 'anger', href: '/mental-health/anger-management/', label: 'Anger management' }],
  [/depress|sadness|grief/, { topic: 'depression', href: '/mental-health/depression-counseling/', label: 'Depression counseling' }],
  [/anxiety|anxious|panic|worry|ocd|phobia|stress/, { topic: 'anxiety', href: '/mental-health/anxiety-counseling/', label: 'Anxiety counseling' }],
  [/addict|substance|relapse|recovery|sud-|withdrawal|12-step|twelve-step/, { topic: 'substance use', href: '/substance-use/', label: 'Substance use counseling' }],
  [/court|probation|legal/, { topic: 'court-related counseling', href: '/who-we-serve/court-involved/', label: 'Counseling for court-involved clients' }],
  [/family|parent|couple|marriage|relationship/, { topic: 'family problems', href: '/therapies/family-therapy/', label: 'Family therapy' }],
  [/group-therapy|support-group/, { topic: 'group support', href: '/therapies/group-therapy/', label: 'Group therapy' }],
  [/older-adult|senior|elderly|aging/, { topic: 'the challenges of getting older', href: '/who-we-serve/older-adults/', label: 'Care for older adults' }],
  [/telehealth|online|virtual/, { topic: 'counseling from home', href: '/programs/telehealth/', label: 'Telehealth counseling' }],
];
const BY_CATEGORY = {
  'Mental Health': { topic: 'mental health', href: '/mental-health/', label: 'Mental health counseling' },
  'Substance Use': { topic: 'substance use', href: '/substance-use/', label: 'Substance use counseling' },
  Evaluations: { topic: 'substance abuse evaluations', href: '/evaluations/', label: 'Evaluations' },
  Insurance: { topic: 'finding out what your insurance covers', href: '/insurance/', label: 'Insurance and Medicaid' },
  // Display categories (posts.js renames them at load): without these every unmatched Substance Use post fell back to
  // the Mental Health hub (found 2026-10-01).
  'Substance Use & Recovery': { topic: 'substance use', href: '/substance-use/', label: 'Substance use counseling' },
  'Therapy Basics': { topic: 'starting therapy', href: '/therapies/', label: 'Therapy options' },
  'Families & Relationships': { topic: 'family problems', href: '/therapies/family-therapy/', label: 'Family therapy' },
  'Medicaid & Insurance': { topic: 'finding out what your insurance covers', href: '/insurance/', label: 'Insurance and Medicaid' },
  'Evaluations & DWI': { topic: 'substance abuse evaluations', href: '/evaluations/', label: 'Evaluations' },
};

export const serviceFor = (post) => {
  const text = `${post.slug} ${post.title.toLowerCase().replace(/\s+/g, '-')}`;
  const hit = RULES.find(([re]) => re.test(text));
  return hit ? hit[1] : BY_CATEGORY[post.category] ?? BY_CATEGORY['Mental Health'];
};
