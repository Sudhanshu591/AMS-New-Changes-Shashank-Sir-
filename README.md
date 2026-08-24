# AMS — Anchorage Management System

Landing page for **AMS (Anchorage Management System)** by SDLC Corp — an AI/ML-driven
platform for real-time vessel tracking, predictive occupancy and intelligent anchorage
& berthing assignment for modern ports (built for the Port of Fujairah use case).

All page copy lives in [`src/data/site.ts`](src/data/site.ts).

## Stack

- **Vite + React 18 + TypeScript** — component architecture
- **Framer Motion** — every animation (scroll reveals, staggers, word-by-word headings, count-up stats, marquee)
- **Tailwind CSS** — styling with the exact design tokens (lime `#7EEA57`, ink `#212121`, cream `#F2F2F2`)
- **Lenis** — Framer-style momentum smooth scroll
- Fonts: Instrument Sans (display), Inter, Geist

## Commands

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:5173
npm run build   # production build
npm run preview # preview the build
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
  components/       one file per section (Hero, Mission, Services, …)
    ui/             Reveal, AnimatedHeading, Counter, icons
  data/site.ts      all copy + the original CDN assets
  lib/motion.ts     shared variants, easings
  hooks/            useSmoothScroll (Lenis)
```

> Copy has been rebranded to the AMS / maritime domain in `src/data/site.ts`.
> The layout, animations and imagery are inherited from the original template.
# AMS-New-Changes-Shashank-Sir-
