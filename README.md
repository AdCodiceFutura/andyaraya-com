# andyaraya-com

Personal professional website for Andy Araya, built with Astro, TypeScript, Tailwind CSS, and MDX.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Cloudflare Pages deployment

- Connect the GitHub repository to Cloudflare Pages.
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: use the current LTS release supported by Cloudflare Pages

## Project structure

- `src/pages` routes and page entry points
- `src/layouts` shared layout wrappers
- `src/components` reusable UI sections
- `src/content` MDX content collections
- `src/data` structured content for sections and navigation
- `src/styles` global styles and design tokens

## Phase 1 notes

- Three.js is intentionally deferred to Phase 2.
- GSAP is intentionally deferred to Phase 2.
- The current build focuses on the mobile-first layout foundation, content structure, and section scaffolding.
