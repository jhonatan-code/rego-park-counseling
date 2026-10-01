"""Import the live WordPress blog posts into src/data/posts.json (one-time migration, safe to re-run).

    python3 scripts/import-wp-posts.py

Which posts: every Redirect Map row with phase "Blog" and action "KEEP" (docs/content/RPC_Sitemap_Redirect_Map_v2.xlsx)
that the WordPress REST API returns as a published post. URLs stay at the root (/post-slug/, Server Rules #7).

Cleaning (the text itself is not edited):
- class/style/id/data-* attributes dropped; <span>, <div>, <section>, <article>, <figure> unwrapped; empty paragraphs removed.
- One H1 per page: an H1 inside the body that repeats the title is removed, any other becomes an H2.
- Internal links: made relative and sent through the Redirect Map (301 → final target, 410/404 → plain text), so no
  link hops through a redirect. External links get rel="noopener".
- Body images are downloaded to public/images/blog/content/ (WordPress goes away at launch).
- Category: one per post (SOP §1), from the WordPress category plus the slug (see category()).
- Author: every post points to AUTHOR below (a slug in src/data/team.js). WordPress only has the generic
  "rego park" user, so the real authors are pending (docs/PENDING.md 3.4).
"""
import html
import json
import re
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
API = 'https://www.regoparkcounseling.com/wp-json/wp/v2/posts'
AUTHOR = 'clinical-director'
UA = {'User-Agent': 'Mozilla/5.0 (RPC site migration)'}


def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read()


# Redirect Map: KEEP blog slugs + every old path → final target (None = 410/404)
wb = openpyxl.load_workbook(ROOT / 'docs/content/RPC_Sitemap_Redirect_Map_v2.xlsx', data_only=True)
keep, redirect = set(), {}
for phase, action, old, target, *_ in wb['Redirect Map'].iter_rows(min_row=2, values_only=True):
    if not old:
        continue
    if phase == 'Blog' and action == 'KEEP':
        keep.add(old.strip('/'))
    if action == '301':
        redirect[old] = target
    elif action in ('410', '404'):
        redirect[old] = None

# Old WordPress pages that posts link to but the Redirect Map doesn't list (they never showed in GSC/Semrush):
# pointed at the closest new page. Anything else that resolves nowhere becomes plain text (see resolvable()).
LEGACY = {
    '/substance-use-evaluation/': '/evaluations/substance-abuse-evaluation/',
    '/alcohol-counseling/': '/substance-use/alcohol-use-treatment/',
    '/dui-dwi-treatment/': '/evaluations/dwi-evaluation/',
    '/court-ordered-treatment/': '/who-we-serve/court-involved/',
}
redirect.update(LEGACY)
SITE_URLS = {r['url'] for r in json.loads((ROOT / 'src/data/sitemap.json').read_text())
             if not str(r['status']).startswith('PENDING')} | {'/', '/blog/'}  # pending pages aren't built

posts = []
page = 1
while True:
    batch = json.loads(get(f'{API}?per_page=100&page={page}&status=publish'))
    posts += batch
    if len(batch) < 100:
        break
    page += 1


def category(p):
    s = p['slug']
    if re.search(r'evaluation|assessment|court-ordered|dwi|dui', s):
        return 'Evaluations'
    if re.search(r'medicaid|medicare|insurance', s):
        return 'Insurance'
    cats = set(p['categories'])
    if cats == {8}:
        return 'Substance Use'
    if 8 in cats and re.search(r'alcohol|drug|substance|addict|sober|relapse|recovery|opioid|weed|marijuana|cocaine|meth|withdrawal|rehab', s):
        return 'Substance Use'
    return 'Mental Health'


def resolvable(path):
    path = path.split('#')[0]
    return path in SITE_URLS or path.strip('/') in keep_slugs or not path.endswith('/')


def fix_href(href):
    m = re.match(r'^https?://(?:www\.)?regoparkcounseling\.com(/[^#?]*)?([#?].*)?$', href)
    if not m and not href.startswith('/'):
        return href, 'external'
    path = (m.group(1) or '/') if m else href.split('#')[0].split('?')[0]
    if not path.endswith('/') and '.' not in path.rsplit('/', 1)[-1]:
        path += '/'
    path = path.lower()
    if path in redirect:
        return redirect[path], 'internal'
    return path, 'internal'


VOID = {'br', 'img', 'hr'}
UNWRAP = {'span', 'div', 'section', 'article', 'figure', 'figcaption', 'font', 'u'}
RENAME = {'b': 'strong', 'i': 'em'}
KEEP_ATTRS = {'a': {'href'}, 'img': {'src', 'alt', 'width', 'height'}, 'th': {'colspan', 'rowspan', 'scope'},
              'td': {'colspan', 'rowspan'}, 'ol': {'start'}}


class Clean(HTMLParser):
    def __init__(self, title, slug):
        super().__init__(convert_charrefs=False)
        self.out, self.stack, self.title, self.slug, self.images = [], [], title, slug, []
        self.skip_h1 = False

    def handle_starttag(self, tag, attrs):
        src = tag
        self._src = src
        a = dict(attrs)
        if tag in RENAME:
            tag = RENAME[tag]
        elif tag in UNWRAP:
            self.stack.append((self._src, None))
            return
        if tag == 'h1':
            self.stack.append(('h1', 'h1'))
            self.h1_start = len(self.out)
            return
        keep = {k: v for k, v in a.items() if k in KEEP_ATTRS.get(tag, set()) and v is not None}
        if tag == 'a':
            href = keep.get('href', '')
            if not href or href.startswith(('mailto:', 'tel:')):
                pass
            else:
                new, kind = fix_href(href)
                if kind == 'internal' and new is not None and not resolvable(new):
                    new = None
                if new is None:  # link to a 410/404 URL: keep the words, drop the link
                    self.stack.append((self._src, None))
                    return
                keep['href'] = new
                if kind == 'external':
                    keep['rel'] = 'noopener'
        if tag == 'img':
            keep['src'] = self.image(keep.get('src', ''))
            keep['loading'] = 'lazy'
            keep['decoding'] = 'async'
        attr = ''.join(f' {k}="{html.escape(v, quote=True)}"' for k, v in keep.items())
        self.out.append(f'<{tag}{attr}>')
        if tag not in VOID:
            self.stack.append((self._src, tag))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag in VOID or not any(src == tag for src, _ in self.stack):
            return  # stray end tag
        while True:  # close anything left open inside this element
            src, top = self.stack.pop()
            if src == tag:
                break
            if top and top != 'h1':
                self.out.append(f'</{top}>')
        if top is None:
            return
        if top == 'h1':
            inner = ''.join(self.out[self.h1_start:])
            del self.out[self.h1_start:]
            text = re.sub(r'<[^>]+>', '', html.unescape(inner)).strip()
            if text.lower().rstrip('?!. ') != self.title.lower().rstrip('?!. '):
                self.out.append(f'<h2>{inner}</h2>')
            return
        self.out.append(f'</{top}>')

    def handle_data(self, d):
        self.out.append(d)

    def handle_entityref(self, name):
        self.out.append(f'&{name};')

    def handle_charref(self, name):
        self.out.append(f'&#{name};')

    def image(self, src):
        name = re.sub(r'[^a-z0-9.-]', '-', src.rsplit('/', 1)[-1].lower())
        dest = ROOT / 'public/images/blog/content' / name
        if not dest.exists():
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(get(src))
        return f'/images/blog/content/{name}'


def clean(body, title, slug):
    c = Clean(title, slug)
    c.feed(body)
    out = ''.join(c.out)
    out = re.sub(r'<(p|li|h2|h3|h4|strong|em)>\s*(&nbsp;| |\s)*\s*</\1>', '', out)
    out = re.sub(r'\n{2,}', '\n', out).strip()
    return out


def text(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s))).strip()


keep_slugs = keep & {p['slug'] for p in posts}
result = []
for p in posts:
    if p['slug'] not in keep:
        continue
    title = text(p['title']['rendered'])
    y = p.get('yoast_head_json') or {}
    seo = (y.get('title') or '').replace(' - Rego Park Counseling', '').strip()
    body = clean(p['content']['rendered'], title, p['slug'])
    result.append({
        'slug': p['slug'],
        'title': title,
        **({'seoTitle': seo} if seo and seo != title else {}),
        'description': (y.get('description') or text(p['excerpt']['rendered']))[:300],
        'date': p['date'][:10],
        'updated': p['modified'][:10],
        'category': category(p),
        'author': AUTHOR,
        'words': len(text(body).split()),
        'body': body,
    })

result.sort(key=lambda r: r['date'], reverse=True)
(ROOT / 'src/data/posts.json').write_text(json.dumps(result, ensure_ascii=False, indent=1) + '\n')
missing = sorted(keep - {r['slug'] for r in result})
print(f'{len(result)} posts written; KEEP rows with no WordPress post: {missing}')
