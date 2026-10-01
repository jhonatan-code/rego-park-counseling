# Redirect Map crawl — 2026-10-01

Base: https://rego-park-counseling.vercel.app · 618 rows from RPC_Sitemap_Redirect_Map_v2.xlsx ("Redirect Map") · bypass token sent.

## Counts

| | Map v2 | Build (vercel.json) | Crawl OK | Crawl failing |
|---|---|---|---|---|
| 301 | 270 | 253 redirect rules | 266 | 4 |
| 410 | 133 | 131 rewrites to /api/gone/ | 133 | 0 |
| KEEP | 187 | — | 185 | 2 |
| 404 | 28 | — | 28 | 0 |

Build rules whose source is not a 301 row of the map (variants without slash, decisions of 2026-10-01, legacy links): 9.

## Failing rows (6), most clicks first

| Action | Old path | Map target | Chain | Problem | Clicks / impr. |
|---|---|---|---|---|---|
| KEEP | `/national-mental-health-and-substance-use-statistics/` | `/national-mental-health-and-substance-use-statistics/` | 301→200 | got 200 at /blog/ | 4 / 524 |
| 301 | `/rego/` | `/programs/core/` | 301→200 | ends 200 at /programs/ (map: /programs/core/) | 0 / 1096 |
| KEEP | `/withdrawal-symptoms/` | `/withdrawal-symptoms/` | 301→200 | got 200 at /substance-use/ | 0 / 197 |
| 301 | `/addiction-treatments-for-couples/` | `/therapies/couples-therapy/` | 301→200 | ends 200 at /therapies/family-therapy/ (map: /therapies/couples-therapy/) | 0 / 188 |
| 301 | `/https://www.regoparkcounseling.com/how-can-fidgets-and-music-reduce-anxiety/` | `/how-can-fidgets-and-music-reduce-anxiety/` | 308→404 | ends 404 at /https:/www.regoparkcounseling.com/how-can-fidgets-and-music-reduce-anxiety/ (map: /how-can-fidgets-and-music-reduce-anxiety/) | 0 / 1 |
| 301 | `/v/https://www.regoparkcounseling.com/what-is-unspecified-anxiety-disorder-counseling-rego-park/` | `/unspecified-anxiety-disorder/` | 308→404 | ends 404 at /v/https:/www.regoparkcounseling.com/what-is-unspecified-anxiety-disorder-counseling-rego-park/ (map: /unspecified-anxiety-disorder/) | 0 / 1 |

## 301s that work but take more than one hop (0)

