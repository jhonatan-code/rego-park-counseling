// Build-time compliance lint for blog posts (Blog Templates brief, "Compliance checks"). Runs before every build
// (npm "prebuild"). Errors fail the build; flags are printed for review but don't block.
//   error: "OASIS" anywhere (the licensor is OASAS) · missing description or category
//   flag:  offers of Suboxone / Vivitrol / MAT / detox / IOP / inpatient (outpatient-only clinic) · named insurance plans
import { posts } from '../src/data/posts.js';

const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
const SERVICES = /\b(suboxone|vivitrol|medication[- ]assisted|MAT\b|detox|intensive outpatient|IOP\b|inpatient|residential treatment)/i;
const PLANS = /\b(fidelis|healthfirst|metroplus|emblemhealth|unitedhealthcare|aetna|cigna|anthem|empire bluecross|molina|wellcare|humana|oscar health|amida care|elderplan)\b/i;
// A flag only when the sentence speaks for the clinic ("we", "our", "Rego Park Counseling"), not general education
const FIRST_PERSON = /\b(we|our|us|rego park counseling)\b/i;

const errors = [];
const flags = [];
for (const p of posts) {
  const all = `${p.title} ${p.description} ${text(p.body)}`;
  if (/\bOASIS\b/.test(all)) errors.push(`${p.slug}: "OASIS" (should be OASAS)`);
  if (!p.description?.trim()) errors.push(`${p.slug}: missing description`);
  if (!p.category) errors.push(`${p.slug}: missing category`);
  for (const sentence of text(p.body).split(/(?<=[.!?])\s+/)) {
    if (FIRST_PERSON.test(sentence) && SERVICES.test(sentence)) flags.push(`${p.slug}: service offer? "${sentence.trim().slice(0, 140)}"`);
    if (PLANS.test(sentence)) flags.push(`${p.slug}: named plan "${sentence.trim().slice(0, 140)}"`);
  }
}
if (flags.length) console.warn(`[lint-posts] ${flags.length} sentence(s) to review:\n  ${flags.slice(0, 40).join('\n  ')}${flags.length > 40 ? `\n  … and ${flags.length - 40} more` : ''}`);
if (errors.length) {
  console.error(`[lint-posts] ${errors.length} error(s):\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log(`[lint-posts] ${posts.length} posts checked, 0 errors, ${flags.length} flag(s).`);
