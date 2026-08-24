# AMS — Anchorage Management System

Landing page for **AMS (Anchorage Management System)** by SDLC Corp — an AI/ML-driven
platform for real-time vessel tracking, predictive occupancy and intelligent anchorage
& berthing assignment for modern ports (built for the Port of Fujairah use case).

All page copy lives in [`src/data/site.ts`](src/data/site.ts).

## Stack

- **Next.js 14 (App Router) + React 18 + TypeScript** — server-rendered / statically prerendered for SEO
- **Framer Motion** — every animation (scroll reveals, staggers, word-by-word headings, count-up stats, marquee)
- **Tailwind CSS** — styling with the exact design tokens (lime `#7EEA57`, ink `#212121`, cream `#F2F2F2`)
- **Lenis** — Framer-style momentum smooth scroll
- Fonts: Instrument Sans (display), Inter, Geist

## SEO

- Every route is **statically prerendered** — crawlers receive full HTML, not an empty JS shell
- **Per-page metadata** (title/description/canonical/Open Graph/Twitter) via the Next.js Metadata API in each `page.tsx`
- **JSON-LD structured data**: Organization + SoftwareApplication (root layout) and FAQPage (home) for rich results
- Auto-generated `sitemap.xml` and `robots.txt` ([`src/app/sitemap.ts`](src/app/sitemap.ts), [`src/app/robots.ts`](src/app/robots.ts))
- Set your production domain in [`src/lib/site-config.ts`](src/lib/site-config.ts) (`SITE_URL`)

## Commands

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build (static export of all routes)
npm run start   # serve the production build
```

## Animations reproduced (Framer Motion)

| Effect | Where | Implementation |
|---|---|---|
| Word-by-word heading reveal | every section title | `AnimatedHeading` + staggered `wordChild` variants |
| Blur + fade + rise on scroll | all content blocks | `Reveal` + `whileInView` |
| Staggered children | card grids, lists | `stagger()` container variants |
| Count-up numbers | metrics section | `Counter` + `useInView` + `animate()` |
| Infinite marquee (two rows) | testimonials | CSS keyframe marquee, pause on hover |
| Nav entrance + scroll shadow | navbar | `useScroll` + `useMotionValueEvent` |
| Tab crossfade | industries panel | `AnimatePresence` |
| Image scale-in parallax | why-choose, cards | `whileInView` scale |
| Hover lift / arrow rotate | cards & buttons | `whileHover` + CSS transitions |

## Structure

```
src/
  app/              Next.js App Router
    layout.tsx      root layout, global metadata, JSON-LD, fonts
    page.tsx        home (all sections) + FAQ schema
    case-studies/   /case-studies route
    insights/       /insights route
    providers.tsx   client shell: Lenis smooth scroll + scroll-to-top
    globals.css     Tailwind + design tokens
    sitemap.ts      /sitemap.xml     robots.ts  /robots.txt
  components/       one file per section (Hero, Mission, Services, …)
    ui/             Reveal, AnimatedHeading, Counter, icons
  data/site.ts      all copy + the original CDN assets
  lib/motion.ts     shared variants, easings
  lib/site-config.ts SEO constants (SITE_URL, name, description)
  hooks/            useSmoothScroll (Lenis)
```

> Copy has been rebranded to the AMS / maritime domain in `src/data/site.ts`.
> The layout, animations and imagery are inherited from the original template.
# AMS-New-Changes-Shashank-Sir-
