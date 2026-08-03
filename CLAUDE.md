# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The corporate site for **beatLabs** (BeatLabs FZE LLC), live at **beatlabs.ae**. Next.js 14 (App Router) + TypeScript + Tailwind base, deployed by **Vercel automatically on every push to `master`** — merging to master IS publishing. Working branches (e.g. `beatlabs-restructure`) hold work in review; `backup/pre-redesign-*` branches are snapshots, don't touch them.

## Commands

Package manager is **pnpm** (see `packageManager` in package.json; `pnpm-workspace.yaml` exists only for the `allowBuilds` entry).

```sh
pnpm dev      # dev server → http://localhost:3000
pnpm lint     # next lint (ESLint, next/core-web-vitals)
pnpm build    # production build — also the type-check; there are no tests
```

**⚠️ Never run `pnpm build` while the dev server is running.** The build clobbers `.next` and the dev server starts serving 500s. Fix: kill the dev server, `rm -rf .next`, relaunch `pnpm dev`.

## Architecture

Two distinct visual worlds share one repo:

- **The home (`app/page.tsx`)** — a large `'use client'` component with framer-motion: the "BEATLABS_OS" fake-terminal dashboard (JetBrains Mono, lime-on-black, boot sequence, module list). It is user-approved as final; do not restyle it. It keeps its **own hardcoded `modules` array** — a deliberate duplicate of `data/portfolio.ts` so changes there can't break the home. Status lines (uptime %, LAUNCHING, etc.) are edited here by hand.
- **Interior pages (`/apps`, `/apps/[slug]`, `/legal`)** — static **server components** (no framer-motion) with their own design system: Syne 800 sentence-case display type, Syne body, JetBrains Mono utility labels, hairline dividers instead of boxes. The signature is the **per-product accent color**: each `AppProduct` in portfolio.ts carries an `accent` (its real brand color — Nibango `#007AFF`, Curb `#EC6F2D`, Raved `#FF4A00`), which `Page accent={...}` (or an index row's inline `--acc`) injects as the `--acc` CSS custom property; every accent-driven class (`bl-mono-acc`, `bl-section-label`, `bl-btn-primary/secondary`, `bl-doc-btn`, `bl-index-row` hover, `bl-feature` marker, FAQ markers) resolves from it, falling back to studio lime. Shared chrome (fixed blurred nav with the logo, `SectionLabel`, `Footer`, `Page`) lives in `components/chrome.tsx`; shared styles are the `bl-*` classes in `app/globals.css` (`bl-display`, `bl-title`, `bl-body`, `bl-mono`, `bl-index-name/arrow`, `bl-app-row`, `bl-faq`, `bl-grid-2/3`). Prefer these over new inline styles.

**`data/portfolio.ts` is the single source of truth** for products and studios. `/apps`, `/apps/[slug]`, `/legal`, and `app/sitemap.ts` all render from it: adding a product there creates its ficha (via `generateStaticParams`), its listing rows, its legal-directory entry, and its sitemap URL in one edit. Products with `status: 'dev'` are listed but get no ficha (`getProduct` filters them). The exception is the home (see above).

Fonts are loaded once in `app/layout.tsx` via `next/font` and exposed as CSS variables: `--font-bebas`, `--font-syne`, `--font-mono`. `layout.tsx` also owns global SEO metadata and the Organization JSON-LD; each ficha adds its own SoftwareApplication JSON-LD and canonical in `app/apps/[slug]/page.tsx`.

SEO plumbing that must stay consistent with portfolio.ts: `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, and the redirects in `next.config.mjs` — legacy URLs (`/apps/subtrackr*`, old per-app legal pages) 301 to each product's own domain. Product legal documents live on the product domains (getcurbapp.com, raved.app, nibango.com), never here; `/legal` is only a directory plus the FZE company identity.

`prototypes/` holds the original static HTML design explorations (newspaper vs terminal) — reference only, not routed.

## Conventions

- English copy throughout; brand renders as "beatLabs" in text, legal entity is "BeatLabs FZE LLC" (license 53228, Ajman Media City Free Zone). Public contact is info@beatlabs.ae.
- Styling is inline `style` objects + the `bl-*` classes; Tailwind is present but essentially unused outside its base reset. Match the existing idiom rather than introducing Tailwind utility classes.
- Colors come from the CSS variables in `globals.css` (`--black`, `--white`, `--lime`, `--muted`, ...). Don't hardcode new hex values.
