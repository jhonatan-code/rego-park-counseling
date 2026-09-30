// Sitemap URLs that have a real page. Everything else in sitemap.json renders as a noindex placeholder
// ([...slug].astro) and stays out of the XML sitemap until it's built.
export const BUILT = ['/about/', '/about/our-team/', '/contact/'];
