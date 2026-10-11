# Ice Cream on 9

Website for Ice Cream on 9, a family-owned ice cream shop on Route 9 in Howell, NJ. Built with Next.js, Tailwind CSS and shadcn/ui.

## Develop

```bash
npm install
npm run dev
```

## Where things live

| What | File |
| --- | --- |
| Phone, address, hours, social links | `lib/site.ts` |
| Flavor lists (from the in-store flavor board) | `lib/flavors.ts` |
| Brand colors (dark "neon night" palette) | `app/globals.css` |
| Photos | `public/images/` |
| Redirects from the old site's URLs | `next.config.ts` |

Most day-to-day updates (hours, flavors) are a one-line edit in `lib/`.

## Pages

- `/` — hero, menu overview, about, cakes teaser, hours with live open/closed status, map
- `/flavors` — searchable, filterable list of every flavor
- `/cakes` — ice cream cakes and novelties

SEO extras: `IceCreamShop` JSON-LD structured data, sitemap, robots.txt, Open Graph image.
