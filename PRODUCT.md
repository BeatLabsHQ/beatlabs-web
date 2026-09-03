# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Visitors to beatlabs.ae, the corporate site of BeatLabs FZE LLC (Ajman Media City Free Zone, license 53228). Primary visitor on /apps: someone browsing the group's portfolio as a showcase — they "leaf through" the collection of apps and click into what catches them (confirmed 2026-09). Secondary: users of a product (Curb, Raved, Nibango) verifying who is behind it, and partners checking the company is real. Product marketing itself happens on each product's own domain, not here.

## Product Purpose

beatlabs.ae presents the holding entity behind a portfolio of independent app brands. /apps is the portfolio index: it shows every product with its brand, status, and one-line identity, and routes to each product's ficha (/apps/[slug]) or external site. Success: the visitor understands the breadth and seriousness of the portfolio in one scroll and clicks through.

## Positioning

"We build companies. Not projects." Each app is its own brand with its own name, domain, identity, and legal pages; beatLabs is the group behind them. The site proves that by treating each product's real brand color as first-class.

## Operating Context

Products, studios and the company identity render from `data/portfolio.ts` (single source of truth). Products with `status: 'dev'` are listed but have no ficha. Since the 2026-09-02 redesign the whole site (home included) is one visual world; the old terminal home is gone. Deploys: Vercel auto-publishes every push to master.

## Capabilities and Constraints

- Next.js 14 App Router, TypeScript, pnpm; all pages are static server components. Three small client components: the mobile index sheet, the scroll-aware chrome (bar fade + progress ring) and the showcase autoplay. No animation library.
- English copy throughout. Brand renders as "beatLabs"; legal entity "BeatLabs FZE LLC"; contact info@beatlabs.ae.
- Product legal documents live on product domains, never on beatlabs.ae.
- Current portfolio: Nibango (launching, flagship, #007AFF), Curb (live, #EC6F2D), Raved (launching, #FF4A00), Blab (launching, iOS, Spanish first, #E3241C), Epiloq (dev), TimeUp (dev) + studios TrueLoveCreative and Estrela.photo.
- /apps decision (2026-09, delegated): apps lead the page; studios stay as a compact secondary closing section.

## Brand Commitments

- Visual world (chosen 2026-09-03, live comparison on localhost against the type wall, then refined by the owner in the browser): the canon, played straight — a faithful MacPaw-register site. White ground, #ebebeb panels with 10px corners and no shadows, Fixel (MacPaw's open face) at 500/600, black rectangular buttons with an icon on the right, centred section heads, black fact cards, a bar that fades to black on scroll, a progress ring, an auto-advancing product showcase. Documented in DESIGN.md.
- The owner's standing preference is now convention executed at MacPaw's craft level; the type wall (2026-09-02) is superseded. Earlier rejected worlds (the fake terminal, the dark rail, the sticker sheet, the printed-object hands, the estrela.photo port, the lab notebook) stay rejected.
- Per-product colour appears only through the product's real icon; the frame stays white/grey/black.
- Status honesty: every status is a lime pill on its tile and slide; in development is grey, inert and has no ficha.
- Lime #C8FF47 is beatLabs' own colour, now confined to the status pill and the recommended plan.
- The logotype (black "beat", green "Labs" with the flask) and the orange flask favicon are the owner's real marks; never redraw them.

## Evidence on Hand

Real product data in `data/portfolio.ts`: stats (e.g. Curb pricing, Nibango categories), store links (Curb App Store/Play Store), taglines, FAQs. Real imagery in the repo: app icons for Nibango, Curb, Raved and Blab, three real screenshots each for Raved, Curb, Nibango and Blab (`public/apps/*-screen-*.png`; Blab's are the Spanish v1, to be recaptured), the studios' own marks, the founder portrait, the logotype and the flask favicon. Future work must not fabricate product UI imagery presented as real.

## Product Principles

- Each brand keeps its own identity; the group frame stays neutral and lets accents carry personality.
- Data flows from portfolio.ts; pages never hardcode product facts.
- Status honesty: dev/launching/live states are shown truthfully, never inflated.
- SEO plumbing (sitemap, robots, llms.txt, redirects) stays consistent with portfolio.ts.
