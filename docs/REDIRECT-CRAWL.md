# Redirect Map crawl — 2026-10-06

Base: https://www.regoparkcounseling.com · 618 rows from RPC_Sitemap_Redirect_Map_v2.xlsx ("Redirect Map") · bypass token sent.

## Counts

| | Map v2 | Build (vercel.json) | Crawl OK | Crawl failing |
|---|---|---|---|---|
| 301 | 270 | 256 redirect rules | 266 | 2 (+2 intended) |
| 410 | 133 | 131 rewrites to /api/gone/ | 133 | 0 |
| KEEP | 187 | — | 185 | 0 (+2 intended) |
| 404 | 28 | — | 28 | 0 |

Build rules whose source is not a 301 row of the map (variants without slash, decisions of 2026-10-01, legacy links): 11.

## Intended differences from map v2 (4): approved decisions, not bugs

| Action in map | Old path | Live chain | Ends at | Why | Clicks / impr. |
|---|---|---|---|---|---|
| 301 | `/rego/` | 301→200 | `/programs/` | DECISIONS 7.4: 301 → /programs/ (map: /programs/core/) | 0 / 1096 |
| 301 | `/addiction-treatments-for-couples/` | 301→200 | `/therapies/family-therapy/` | PENDING 2.9: → /therapies/family-therapy/ until couples therapy is confirmed | 0 / 188 |
| KEEP | `/national-mental-health-and-substance-use-statistics/` | 301→200 | `/addiction-and-mental-health-how-they-are-connected/` | DECISIONS 7.5 (revised): KEEP → 301 /addiction-and-mental-health-how-they-are-connected/ | 4 / 524 |
| KEEP | `/withdrawal-symptoms/` | 301→200 | `/substance-use/` | DECISIONS 7.5: KEEP → 301 /substance-use/ (0 clicks) | 0 / 197 |

## Failing rows (2), most clicks first

| Action | Old path | Map target | Chain | Problem | Clicks / impr. |
|---|---|---|---|---|---|
| 301 | `/https://www.regoparkcounseling.com/how-can-fidgets-and-music-reduce-anxiety/` | `/how-can-fidgets-and-music-reduce-anxiety/` | 308→404 | ends 404 at /https:/www.regoparkcounseling.com/how-can-fidgets-and-music-reduce-anxiety/ (map: /how-can-fidgets-and-music-reduce-anxiety/) | 0 / 1 |
| 301 | `/v/https://www.regoparkcounseling.com/what-is-unspecified-anxiety-disorder-counseling-rego-park/` | `/unspecified-anxiety-disorder/` | 308→404 | ends 404 at /v/https:/www.regoparkcounseling.com/what-is-unspecified-anxiety-disorder-counseling-rego-park/ (map: /unspecified-anxiety-disorder/) | 0 / 1 |

## 301s that work but take more than one hop (0)

