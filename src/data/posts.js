// Blog data layer (Elev8 SOP Blog/Post/Author). Every post uses the same template (src/pages/[post].astro); the
// hub is /blog/ and person pages are /our-team/{slug}/.
//
// Posts live in posts.json, migrated from WordPress by scripts/import-wp-posts.py (179 KEEP rows of the Redirect
// Map). URLs stay at the root: /post-slug/ (Server Rules #7), never /blog/post-slug/.
// Fields: slug, title, seoTitle? (<title> when it differs), description (meta + card excerpt), date, updated,
// category (one per post), author (slug in team.js, a reference, not free text), words (read time), body (HTML).
// Feature graphics (card + og:image) are generated per slug by scripts/generate-post-graphics.mjs into
// public/images/blog/cards/{slug}.webp and public/images/blog/og/{slug}.jpg. Re-run it after adding or retitling a post.
import data from './posts.json' with { type: 'json' };
import { personBySlug, personHref } from './team.js';

// Six categories (Blog Hub & Blog Templates brief). One graphic ground each, brand tokens only (brand manual 03);
// magenta never (calls only). bg = graphic ground, ink = title on it, accent = Nearby Ring lines, dot = marker on cards.
// hub = the service page each category links up to.
export const CATEGORY_COLORS = {
  'Mental Health': { bg: '#0a5577', ink: '#ffffff', accent: '#00aeef', dot: '#0a5577', hub: '/mental-health/' },
  'Substance Use & Recovery': { bg: '#bfe7f8', ink: '#0a5577', accent: '#0a5577', dot: '#00aeef', hub: '/substance-use/' },
  'Evaluations & DWI': { bg: '#f4ede4', ink: '#0a5577', accent: '#0a5577', dot: '#4d5c68', hub: '/evaluations/' },
  'Medicaid & Insurance': { bg: '#07415b', ink: '#ffffff', accent: '#bfe7f8', dot: '#07415b', hub: '/insurance/' },
  'Families & Relationships': { bg: '#fcfaf7', ink: '#0a5577', accent: '#00aeef', dot: '#bfe7f8', hub: '/therapies/family-therapy/' },
  'Therapy Basics': { bg: '#4d5c68', ink: '#ffffff', accent: '#bfe7f8', dot: '#4d5c68', hub: '/therapies/' },
};
export const categoryColor = (c) => CATEGORY_COLORS[c] ?? CATEGORY_COLORS['Mental Health'];

// Category from slug + title (brief: "scripted from keywords in the slug, then spot-checked"); first match wins.
// The WordPress category only decides Mental Health vs Substance Use & Recovery at the end.
const CATEGORY_RULES = [
  ['Evaluations & DWI', /evaluation|assessment|dwi|dui|court-ordered/],
  ['Medicaid & Insurance', /medicaid|medicare|insurance|cost|how-much-does/],
  ['Families & Relationships', /family(?!-treatment)|parent|relationship|couple|partner|marriage|spouse|loved-one|pushes-you-away|codependen/],
  ['Substance Use & Recovery', /alcohol|drug|substance|addict|sober|relapse|opioid|weed|marijuana|cocaine|meth|heroin|withdrawal|rehab|12-steps|aa-|suboxone|xanax|adderall|sud-/],
  ['Therapy Basics', /therapy|therapist|counsel(ing|or)|session|cbt|dbt|emdr|psychiatrist|socratic/],
];
const categorize = (p) => {
  const text = `${p.slug} ${p.title.toLowerCase().replace(/\s+/g, '-')}`;
  const hit = CATEGORY_RULES.find(([, re]) => re.test(text));
  if (hit) return hit[0];
  return p.category === 'Substance Use' ? 'Substance Use & Recovery' : 'Mental Health';
};

// Normalized at load (so a re-import keeps the fixes), seo-page-requirements §2/§3:
// - headings never skip a level: H3s before the first H2 become H2s; an H4 right after an H2 becomes an H3.
// - meta description ≤160 chars: cut at the last full sentence that fits, else at a word boundary.
const fixHeadings = (html) => {
  let seenH2 = false;
  let last = 1;
  return html.replace(/<(\/?)h([2-4])>/g, (m, close, n) => {
    let level = Number(n);
    if (!close) {
      if (level === 3 && !seenH2) level = 2;
      if (level === 4 && last === 2) level = 3;
      if (level === 2) seenH2 = true;
      last = level;
      return `<h${level}>`;
    }
    return `</h${last}>`;
  });
};
const fitDescription = (d) => {
  if (d.length <= 160) return d;
  const sentences = d.match(/[^.!?]+[.!?]+/g) ?? [];
  let out = '';
  for (const s of sentences) {
    if ((out + s).trim().length > 160) break;
    out += s;
  }
  out = out.trim();
  if (out.length >= 90) return out;
  return `${d.slice(0, 157).replace(/\s+\S*$/, '').replace(/[,;:]$/, '')}…`;
};
export const posts = data.map((p) => ({ ...p, category: categorize(p), body: fixHeadings(p.body), description: fitDescription(p.description) }));
export const postUrl = (p) => `/${p.slug}/`;
export const postImage = (p) => `/images/blog/cards/${p.slug}.webp`;
export const postOgImage = (p) => `/images/blog/og/${p.slug}.jpg`;
export const readTime = (p) => `${Math.max(1, Math.round(p.words / 230))} min read`;

// Byline (medical-clinical-review): a person is named only when they are real and actually wrote the post. While
// the author is a placeholder, the post is signed by the clinic itself (never a real clinician's name on posts they
// didn't write or review). Swapping in a person later needs their agreement and a real review, post by post.
export const ORG_AUTHOR = {
  isOrg: true,
  slug: 'rego-park-counseling',
  name: 'Rego Park Counseling editorial team',
  credential: '',
  role: 'Outpatient clinic in Queens, NY',
  bio: 'Rego Park Counseling is an independent outpatient clinic for mental health and substance use care in Rego Park and Fresh Meadows, Queens, licensed by New York State OASAS and OMH.',
  photo: '/icon-192.png',
  href: '/about/',
};
export const postAuthor = (p) => {
  const person = personBySlug(p.author);
  return person.placeholder ? ORG_AUTHOR : { ...person, href: personHref(person) };
};

// Optional clinical reviewer (a team.js slug in `reviewer`, plus `reviewed` ISO date). Rendered only when the person
// is real and the review happened (medical-clinical-review "Attribution on the page").
export const postReviewer = (p) => {
  if (!p.reviewer || !p.reviewed) return null;
  const person = personBySlug(p.reviewer);
  return person.placeholder ? null : { ...person, href: personHref(person) };
};

// Categories that have at least one post, largest first (blog tabs are generated from this, never a manual list).
export const categories = Object.entries(
  posts.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] ?? 0) + 1 }), {}),
)
  .sort((a, b) => b[1] - a[1])
  .map(([c]) => c);

// Authors row: only real people with at least one published post (the clinic byline is not listed).
export const authors = [...new Set(posts.map((p) => p.author))]
  .map((slug) => postAuthor({ author: slug }))
  .filter((a) => !a.isOrg);

// Posts a real person clinically reviewed (person page "Articles reviewed").
export const postsReviewedBy = (slug) => (personBySlug(slug).placeholder ? [] : posts.filter((p) => p.reviewer === slug && p.reviewed));

// "Articles by" on a person page: only for real authors.
export const postsBy = (slug) => (personBySlug(slug).placeholder ? [] : posts.filter((p) => p.author === slug));

// Post page blocks. Both exclude the current post; posts.json only holds published, indexable posts.
export const latestPosts = (post, n = 3) => posts.filter((p) => p.slug !== post.slug).slice(0, n);
export const relatedPosts = (post, n = 3) => {
  const others = posts.filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  return [...same, ...others.filter((p) => p.category !== post.category)].slice(0, n);
};

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
