// Sitemap URLs that have a real page. Everything else in sitemap.json renders as a noindex placeholder
// ([...slug].astro) and stays out of the XML sitemap until it's built.
export const BUILT = [
  '/about/', '/our-team/', '/contact/',
  '/mental-health/', '/mental-health/anxiety-counseling/', '/mental-health/depression-counseling/',
  '/mental-health/ptsd-trauma-counseling/', '/mental-health/bipolar-disorder-counseling/',
  '/mental-health/schizophrenia-counseling/', '/mental-health/anger-management/',
  '/locations/', '/locations/rego-park/', '/locations/fresh-meadows/', '/locations/yonkers/',
  '/evaluations/', '/evaluations/substance-abuse-evaluation/', '/evaluations/dwi-evaluation/',
  '/substance-use/', '/substance-use/alcohol-use-treatment/', '/substance-use/drug-use-treatment/', '/substance-use/dual-diagnosis/',
  '/insurance/',
];
