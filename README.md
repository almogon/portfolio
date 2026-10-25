# Alvaro Morales — Portfolio

Personal portfolio of Álvaro Morales, tech lead and full stack developer, live at [almogon.com](https://almogon.com). A fully static site in English, Spanish and German, built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## Stack

- **Astro 5** — static output, zero client-side framework. The only JavaScript shipped is the header navigation script.
- **Plain CSS** — design tokens as CSS custom properties, component-scoped styles, no CSS framework.
- **Vercel** — automatic deployments from `master`, plus Speed Insights.

## Design decisions

- **One accent color per section.** Experience is blue, Skills yellow, Education green, Apps orange and Contact red. Each section sets `--accent` with an `accent-*` class, and the shared card, tag and link styles pick it up. The logo in the header changes to the color of the section in view.
- **Shared components instead of copies.** Every section is built from the same card (`.card`, `.card-pane`, `.card-title`, …) defined once in `src/layouts/Layout.astro`.
- **Data-driven content.** Experience, skills, education and apps live in `src/data/`, and personal details (name, links, career start) in `src/data/profile.ts`, so content changes never touch markup.
- **Three languages.** `src/pages/[...lang].astro` generates `/`, `/es/` and `/de/`. Interface strings live in `src/i18n/index.ts`, and every translatable content field is a `{ en, es, de }` object next to the rest of its data, so translations stay together. Each page has `hreflang` alternates and the sitemap lists all three.
- **Career timeline.** Experience is a timeline; companies with several roles show a stepper of the progression, with durations and localized dates computed from the data.
- **Responsive by default.** Fluid type and spacing with `clamp()`, three breakpoints (phone < 768px, tablet < 1024px, desktop), and a hamburger menu below 900px.
- **Accessible.** WCAG AA color contrast, a skip link, visible focus states, semantic landmarks and `prefers-reduced-motion` support.
- **Fast.** Self-hosted Lato in WOFF2 with preloading, an SVG favicon, and the only images (app icons) optimized at build time with `astro:assets`.
- **App pages.** Privacy policies of my apps live under `/apps/<app>/privacy/` (e.g. `src/pages/apps/duellum/privacy.astro`), outside the one-page cube, so the stores can link to them.
- **Discoverable.** Canonical URLs, Open Graph and Twitter cards with a preview image, Person structured data (schema.org), `sitemap.xml` and `robots.txt`.

## Project structure

```text
src/
├── components/   # One component per section, plus Header, Footer and Icon
├── assets/apps/  # App icons, optimized by astro:assets
├── data/         # Content: profile, experience, skills, education, apps
├── i18n/         # Languages, routing helpers and interface strings
├── layouts/      # Layout.astro: <head>, SEO tags, design tokens and shared styles
└── pages/        # [...lang].astro (one page per language), apps/ and sitemap.xml.ts
public/
├── fonts/Lato/   # WOFF2 font files (SIL Open Font License)
├── favicon.svg
├── og-image.png  # 1200x630 link preview
└── robots.txt
```

## Getting started

Requires Node.js 18.17+ (20+ recommended).

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the static site into `./dist/`        |
| `npm run preview` | Preview the production build locally        |

Every push and pull request runs the production build in GitHub Actions (`.github/workflows/build.yml`).
