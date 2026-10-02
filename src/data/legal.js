// Legal pages: Privacy Policy, HIPAA Notice of Privacy Practices, Telehealth & Text Messaging Terms, Accessibility.
// Source: "Rego Park Counseling — Remaining Pages Content" brief (Oct 1, 2026; docs/content/).
// ⚠️ privacy-consent §1: Privacy Policy, HIPAA Notice and Telehealth & Text Terms are DRAFTS for RPC's attorney or
// compliance officer. Set `approved: true` (with the date and approver) only after their sign-off is recorded in
// docs/PENDING.md 5.13; until then the page shows the review banner. If RPC already has an approved Notice of Privacy
// Practices, its exact text replaces HIPAA_NOTICE.sections. Text in [brackets] still needs a fact.
import { SITE, CLINICS } from './site.js';

const rp = CLINICS.find((c) => c.id === 'rego-park');
const ADDRESS = `${rp.street}, ${rp.city}, ${rp.region} ${rp.postal}`;
const tel = `<a href="${SITE.phoneHref}" data-cta="call" data-location="legal">${SITE.phone}</a>`;
// BRACKETS-FILL-PLAN 9.2 (FILL, provisional): the address RPC publishes in directories; Emmanuel confirms (PENDING 5a.2)
const EMAIL = 'management@regoparkcounseling.com';
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
const contactLine = (email) => `${SITE.name} · ${ADDRESS} · ${tel} · ${email}`;

export const PRIVACY_POLICY = {
  url: '/privacy-policy/',
  title: 'Privacy Policy | Rego Park Counseling',
  description: 'How Rego Park Counseling collects and uses information when you visit our website, call us, fill out a form or receive text messages.',
  h1: 'Website Privacy Policy',
  dates: 'Effective date: [date of launch] · Last updated: [date]',
  approved: false,
  intro: `This policy explains how Rego Park Counseling (“we”, “us”) collects and uses information when you visit regoparkcounseling.com, call us, fill out a form or receive text messages from us. Information about your care as a patient is protected by HIPAA and federal confidentiality rules and is described in our <a href="/hipaa-notice/">HIPAA Notice of Privacy Practices</a>.`,
  sections: [
    {
      id: 'information-we-collect', title: 'Information We Collect',
      html: `<ul>
        <li><strong>Information you give us:</strong> your name, phone number, email, preferred clinic and the type of help you are looking for when you submit a form or call us.</li>
        <li><strong>Call information:</strong> when you call a number on this website, our call tracking provider records the date, time, length of the call, the number you called from and the web page or ad that led to the call.</li>
        <li><strong>Website usage information:</strong> pages visited, device and browser type, approximate location (city level) and how you arrived at the site, including the ad you clicked if you came from one, collected through cookies and similar tools.</li>
      </ul>
      <p>Please do not share medical details through website forms. We will ask about your health privately, by phone or in person.</p>`,
    },
    {
      id: 'how-we-use-information', title: 'How We Use Information',
      html: `<ul>
        <li>To call you back and schedule appointments</li>
        <li>To check your insurance coverage when you ask us to</li>
        <li>To send appointment reminders and service messages you agree to receive</li>
        <li>To understand which pages and ads help people find us, so we can improve the website</li>
        <li>To keep the website secure</li>
      </ul>
      <p>We do not sell your information. We do not use information from this website for advertising based on your health.</p>`,
    },
    {
      id: 'cookies-analytics-call-tracking', title: 'Cookies, Analytics and Call Tracking',
      html: `<p>We use Google Analytics and Google Tag Manager to measure website traffic, and CallTrackingMetrics to know which pages and ads lead to calls and form requests. If you arrive by clicking an ad, we keep the ad’s click identifier (such as Google’s gclid) in your browser for the length of your visit, so we can tell which ad led to a call or form request. These tools use cookies or similar technologies. You can block or delete cookies in your browser settings; the website will still work.</p>`,
    },
    {
      id: 'text-messages', title: 'Text Messages',
      html: `<p>If you give us your mobile number and agree to receive texts, we may send appointment reminders and service messages. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of receiving care. We do not share your mobile number with third parties for their marketing. Full terms: <a href="/telehealth-privacy/#text-messaging-terms">Telehealth &amp; Text Messaging Terms</a>.</p>`,
    },
    {
      id: 'how-we-share-information', title: 'How We Share Information',
      html: `<p>We share information only with service providers who help us run the website, phone system and scheduling, under agreements that require them to protect it, or when the law requires us to.</p>`,
    },
    {
      id: 'how-we-protect-information', title: 'How We Protect Information',
      html: `<p>We use reasonable administrative, technical and physical safeguards, including encrypted connections (HTTPS) and limited staff access.</p>`,
    },
    {
      id: 'your-choices', title: 'Your Choices',
      html: `<p>You can ask us to update or delete the contact information you submitted through this website, or stop texts by replying STOP. <a href="#contact-us">Contact us below</a>.</p>`,
    },
    {
      id: 'children', title: 'Children',
      html: `<p>This website is intended for adults and is not directed to children under 13.</p>`,
    },
    {
      id: 'changes', title: 'Changes to This Policy',
      html: `<p>We may update this policy. The “Last updated” date shows the latest version.</p>`,
    },
    {
      id: 'contact-us', title: 'Contact Us',
      html: `<p>${contactLine(mail)}</p>`,
    },
  ],
};

export const HIPAA_NOTICE = {
  url: '/hipaa-notice/',
  title: 'Notice of Privacy Practices (HIPAA) | Rego Park Counseling',
  description: 'How medical information about you may be used and disclosed at Rego Park Counseling, your rights, and how to reach our Privacy Officer.',
  h1: 'Notice of Privacy Practices',
  dates: 'Effective date: [ ]',
  approved: false,
  print: true, // "Download PDF" = print / save as PDF of this same text (brief: same text as the PDF and the clinic copy)
  accordion: true, // brief: accordion per section on mobile
  callout: 'THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.',
  sections: [
    {
      id: 'our-duty', title: 'Our Duty to Protect Your Information',
      html: `<p>Rego Park Counseling is required by law to keep your health information private, give you this notice of our legal duties and privacy practices, follow the notice currently in effect, and tell you if a breach affects your unsecured information.</p>`,
    },
    {
      id: 'substance-use-records', title: 'Extra Protection for Substance Use Treatment Records',
      html: `<p>Records of substance use disorder treatment are also protected by federal law (42 CFR Part 2) and New York State law. In general, we cannot share information that identifies you as receiving substance use treatment without your written consent, except as these laws allow. Part 2 records cannot be used or disclosed in civil, criminal, administrative or legislative proceedings against you without your written consent or a court order that meets Part 2 requirements.</p>`,
    },
    {
      id: 'uses-and-sharing', title: 'How We May Use and Share Your Information',
      html: `<ul>
        <li><strong>Treatment:</strong> to provide and coordinate your care, including with other providers you are working with.</li>
        <li><strong>Payment:</strong> to bill and get paid by Medicaid or your health plan.</li>
        <li><strong>Health care operations:</strong> to run our clinic, train staff and improve quality.</li>
        <li><strong>Appointment reminders:</strong> by phone, mail or text, as you choose.</li>
      </ul>`,
    },
    {
      id: 'required-by-law', title: 'Other Uses and Disclosures Allowed or Required by Law',
      html: `<p>When required by law; to prevent a serious threat to health or safety; to report suspected child abuse or neglect; for public health activities; for health oversight audits; in response to a court order; to law enforcement in limited cases; to coroners and medical examiners; and for workers’ compensation — each only as the law permits, and with the stricter limits that apply to substance use records and New York mental health records.</p>`,
    },
    {
      id: 'written-permission', title: 'Uses That Need Your Written Permission',
      html: `<p>Most uses of psychotherapy notes, marketing, and sale of your information require your written authorization. You may cancel an authorization in writing at any time, except for actions already taken.</p>`,
    },
    {
      id: 'your-rights', title: 'Your Rights',
      html: `<ul>
        <li>Get a copy of your records (paper or electronic), usually within 30 days. A reasonable, cost-based fee may apply.</li>
        <li>Ask us to correct your records if you believe they are wrong or incomplete.</li>
        <li>Ask for confidential communications, for example a different phone number or mailing address.</li>
        <li>Ask us to limit what we use or share. We are not required to agree in all cases, but must agree not to share with your health plan for a service you paid for in full yourself, if you ask.</li>
        <li>Get a list of disclosures we made in the past six years, with some exceptions.</li>
        <li>Get a paper copy of this notice at any time.</li>
        <li>Choose someone to act for you, such as a health care proxy or legal guardian.</li>
        <li>File a complaint if you believe your rights were violated (below). We will not retaliate against you.</li>
      </ul>`,
    },
    {
      id: 'complaints', title: 'Complaints',
      html: `<p>Contact our Privacy Officer: [Name], [phone], [email], ${ADDRESS}. You may also file a complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, at <a href="https://www.hhs.gov/ocr/complaints" rel="noopener">hhs.gov/ocr/complaints</a> or <a href="tel:+18776966775">1-877-696-6775</a>.</p>`,
    },
    {
      id: 'changes', title: 'Changes to This Notice',
      html: `<p>We may change this notice. The new notice will apply to all information we have, and will be posted at our clinics and on this website.</p>`,
    },
  ],
};

export const TELEHEALTH_TERMS = {
  url: '/telehealth-privacy/',
  title: 'Telehealth & Text Messaging Terms | Rego Park Counseling',
  description: 'How telehealth sessions work at Rego Park Counseling, and the terms for appointment and service text messages (STOP to opt out, HELP for help).',
  h1: 'Telehealth and Text Messaging Terms',
  dates: 'Last updated: [date]',
  approved: false,
  sections: [
    {
      id: 'telehealth-sessions', title: 'Telehealth Sessions',
      html: `<p><strong>How it works.</strong> Sessions use a secure video platform. We’ll send you a link.</p>
      <p><strong>Your privacy.</strong> Your counselor joins from a private space. We ask that you join from a private place too, and use your own device and a secure internet connection when you can.</p>
      <p><strong>Who can use telehealth.</strong> Telehealth is available for many services. Ask us if it’s right for you.</p>
      <p><strong>Limits and risks.</strong> Video sessions can be interrupted by connection problems. If a session drops, your counselor will call you at the number on file. Telehealth is not for emergencies.</p>
      <p><strong>Consent.</strong> Before your first telehealth session, we ask for your consent to receive care by telehealth. You can choose in-person care instead at any time.</p>
      <p><strong>Emergencies.</strong> If you are in danger, call <a href="tel:911">911</a>. For a mental health or substance use crisis, call or text <a href="tel:988">988</a>.</p>`,
    },
    {
      id: 'text-messaging-terms', title: 'Text Messaging (SMS) Terms',
      html: `<p><strong>Program.</strong> Rego Park Counseling sends appointment reminders, scheduling updates and customer care messages to people who agree to receive them.</p>
      <p><strong>Consent.</strong> By giving us your mobile number and checking the consent box on a form, or agreeing by phone, you agree to receive these text messages from Rego Park Counseling. Consent is not a condition of receiving care.</p>
      <p><strong>Frequency and cost.</strong> Message frequency varies. Message and data rates may apply.</p>
      <p><strong>Opt out and help.</strong> Reply STOP to stop messages at any time. Reply HELP for help, or call ${tel}.</p>
      <p><strong>Privacy.</strong> We do not sell or share your mobile number or text consent with third parties for marketing. We do not include detailed health information in text messages. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>
      <p><strong>Carriers.</strong> Carriers are not liable for delayed or undelivered messages.</p>`,
    },
    {
      id: 'contact', title: 'Contact',
      html: `<p>${contactLine(mail)}</p>`,
    },
  ],
};

// Not a legal draft for counsel, but it may only claim what the build passes (brief build note: axe/Lighthouse on
// every template before launch). Clinic accessibility facts are open (PENDING 1.12).
export const ACCESSIBILITY = {
  url: '/accessibility/',
  title: 'Accessibility Statement | Rego Park Counseling',
  description: 'Rego Park Counseling aims to meet WCAG 2.1 Level AA. How this website was built, known limitations, clinic access and how to tell us about a problem.',
  h1: 'Accessibility Statement',
  dates: 'Last reviewed: October 2, 2026',
  approved: true,
  intro: 'Rego Park Counseling wants everyone, including people with disabilities, to be able to use this website and reach our services.',
  sections: [
    {
      id: 'our-standard', title: 'Our Standard',
      html: `<p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. This website was built with:</p>
      <ul>
        <li>Text and button contrast that meets WCAG AA</li>
        <li>Full keyboard navigation and visible focus outlines</li>
        <li>Descriptive text for images and clear labels on every form field</li>
        <li>Headings and page structure that work with screen readers</li>
        <li>Text that can be resized up to 200% without losing content</li>
        <li>No content that flashes or plays automatically</li>
      </ul>`,
    },
    {
      id: 'known-limitations', title: 'Known Limitations',
      html: `<p>Some older blog articles and third-party content, such as embedded maps and review widgets, may not fully meet these standards. We are reviewing older content and will keep improving it.</p>`,
    },
    {
      id: 'at-our-clinics', title: 'Accessibility at Our Clinics',
      html: `<p>If you need help getting into the building or another accommodation, tell us when you call.</p>`,
    },
    {
      id: 'need-help', title: 'Need Help or Found a Problem?',
      html: `<p>If any part of this website is hard to use, please tell us and we will help you get the information another way.</p>
      <p>Call ${tel} · Email ${mail} · We’ll respond as soon as we can.</p>`,
    },
  ],
};
