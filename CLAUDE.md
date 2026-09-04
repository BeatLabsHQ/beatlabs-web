# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The corporate site for **beatLabs** (BeatLabs FZE LLC), live at **beatlabs.ae**. Next.js 14 (App Router) + TypeScript + Tailwind base, deployed by **Vercel automatically on every push to `master`** — merging to master IS publishing. Working branches hold work in review; `backup/pre-redesign-*` branches are snapshots, don't touch them.

## Commands

Package manager is **pnpm** (see `packageManager` in package.json; `pnpm-workspace.yaml` exists only for the `allowBuilds` entry).

```sh
pnpm dev      # dev server → http://localhost:3000
pnpm lint     # next lint (ESLint, next/core-web-vitals)
pnpm build    # production build — also the type-check
pnpm test     # vitest (lib/)
```

**⚠️ Never run `pnpm build` while the dev server is running.** The build clobbers `.next` and the dev server starts serving 500s. Fix: kill the dev server, `rm -rf .next`, relaunch `pnpm dev`.

## Architecture

One visual world across the whole site, chosen by the owner on 2026-09-03 after comparing it live against the previous "type wall": **a faithful MacPaw-register site** (macpaw.com as the bar). Contract in `app/layout.tsx`, system documented in `DESIGN.md`. White ground; **#ebebeb panels with no shadows** on the app-icon curve — 22px on cards (`.cell`, `.rows`, `.support .cell`), 40px on the big panels (`.showcase`, `.banner`, `.screens`, `.contact`), 14px on buttons; **Fixel** (MacPaw's own open face, OFL, self-hosted in `app/fonts/fixel/`) — Display SemiBold for h1, Display Medium for h2, Text for everything else; black rectangular buttons with an icon on the right (`.btn`, `.btn--black`, `.btn--lime`); underlined "Read more ↗" links (`.more`); centred section heads (`Head`); black fact cards (`.cell--black`); a link-column footer. Lime `#c8ff47` survives only as the status pill (`.mark`) and the recommended-plan button. Per-product colour appears only through the real icons.

Three small client components, all in `components/`: `index-sheet.tsx` (mobile menu), `scroll-chrome.tsx` (the bar fades white→black over the first 360px of scroll via the `--bar` variable, and the progress ring in the corner fills with the page and scrolls to top), `autoplay.tsx` (advances the home showcase every 5s; pauses on hover/focus/hidden tab). Pure maths for those live in `lib/scroll.ts` and are unit-tested.

- `components/chrome.tsx` — `Shell` (skip link + `Nav` bar + main + `Footer` + `ScrollChrome`), `Head`, `Btn`, icons (`ArrowIcon` ↗/→, `PlusIcon`, `MailIcon`, `ChevronIcon`). The wordmark is the real logotype (`/logo-black.png`, cross-fading to `/logo.png` as the bar darkens).
- `components/cells.tsx` — `AppCell` (MacPaw product tile: name + descriptor, status pill, centred icon, one-liner, "Read more ↗"; dev apps are white outlined and inert), `StudioCell`.
- Pages: `app/page.tsx` (showcase carousel — radio-driven, no JS except autoplay — with icon dots and a dot/dash indicator; the 4-column app grid incl. dev tiles; the studios banner with the founder photo; the mission band; "Find us across the internet" link cards; three black company cards; three support cards), `app/apps/page.tsx`, `app/studios/page.tsx`, `app/apps/[slug]/page.tsx` (static showcase panel, fact cards, full screenshots on a grey panel, features, steps, pricing with Pro in black, FAQ list, docs buttons, siblings, closing black band), `app/legal/page.tsx`.

**`data/portfolio.ts` is the single source of truth** for products, studios and the `company` identity block (legal name, licence, founder, mission, phone). Every page, `app/sitemap.ts`, the footer columns and the Organization JSON-LD render from it: adding a product there creates its ficha (via `generateStaticParams`), its tile, its showcase slide (if published), its legal entries and its sitemap URL in one edit. Products with `status: 'dev'` render as outlined inert tiles and get no ficha (`getProduct` filters them). `icon`/`screens`/`mark`/`highlight` are data; assets under `public/apps/` are real (origins in `public/apps/PROVENANCE.md`, which also covers the favicon and logotype); never fabricate product UI. BLAB's screens are the English UI captures.

SEO plumbing that must stay consistent with portfolio.ts (and with the static routes `/`, `/apps`, `/studios`, `/legal`): `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, and the redirects in `next.config.mjs` — legacy URLs (`/apps/subtrackr*`, old per-app legal pages) 301 to each product's own domain. Product legal documents live on the product domains (getcurbapp.com, raved.app, nibango.com), never here; `/legal` is only a directory plus the FZE company identity. `public/google8635ef74ffc17fdf.html` is the Search Console verification — keep it.

`prototypes/` holds the original static HTML design explorations — reference only, not routed. `README.md` is an unused create-next-app leftover.

Tests: Vitest (`pnpm test`) covers `lib/scroll.ts`. Design tooling: `.impeccable/` (config and decision logs are tracked; `mocks/` and `review/` captures are gitignored).

## Conventions

- English copy throughout; brand renders as "beatLabs" in text, legal entity is "BeatLabs FZE LLC" (license 53228, Ajman Media City Free Zone). Public contact is info@beatlabs.ae.
- Styling is the class system in `app/globals.css` plus small inline `style` objects for one-off layout; Tailwind is present but unused outside its base reset. Match the existing idiom rather than introducing Tailwind utility classes.
- Colours are the tokens in `:root` of `globals.css` (`--bg`, `--gray`, `--gray-2`, `--ink`, `--text`, `--mute`, `--lime`); brand colours appear only through the real icons. Don't add hex values outside `:root`.
- Statuses stay honest and always visible: every status renders as a lime pill except in development, which is grey; dev apps never get a link or a ficha.
- Keep the MacPaw grammar: the radius tokens (`--radius` 22px, `--radius-btn` 14px, `--radius-lg` 40px), no shadows on panels (only under icons), Fixel weights 500/600 for headings, black buttons with the icon on the right, centred section heads, real assets only. No hero-scale type, no marquees, no outlined words.
