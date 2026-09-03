---
name: beatLabs
description: A faithful MacPaw-register corporate site — white ground, #ebebeb panels with 10px corners and no shadows, Fixel at 500/600, black rectangular buttons with an icon on the right, centred section heads, black fact cards, a bar that fades to black on scroll. Lime survives only as the status pill.
colors:
  bg: "#ffffff"
  gray: "#ebebeb"
  gray-2: "#d9d9d9"
  ink: "#000000"
  text: "#212121"
  mute: "#7a7a7a"
  lime: "#c8ff47"
  banner-gradient: "linear-gradient(135deg, #1a1a1a 0%, #3b3b3b 100%)"
typography:
  h1:
    fontFamily: "Fixel Display, Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 3.4vw, 48px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Fixel Display, Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(28px, 2.6vw, 36px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h3-card-name:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: "20px"
  h4:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "24px"
  sub:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: "24px"
  body:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "28px"
  line:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  button:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "20px"
  pill:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "18px"
  num:
    fontFamily: "Fixel Display, Helvetica Neue, Arial, sans-serif"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  footer-link:
    fontFamily: "Fixel Text, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "18px"
spacing:
  radius: "10px"
  radius-lg: "20px"
  radius-pill: "50px"
  gap-card: "16px"
  pad-card: "20px"
  pad-panel: "72px 80px"
  section: "clamp(64px, 7.5vw, 112px)"
  container: "1280px"
  pad: "clamp(20px, 5.5vw, 80px)"
  bar-height: "72px → 60px on scroll"
---

# Design System: beatLabs

<!-- Recorded from the built code on 2026-09-03 after the owner chose this world live over the type wall (localhost comparison, home + ficha). Sources: app/globals.css, app/layout.tsx, components/chrome.tsx, components/cells.tsx, components/scroll-chrome.tsx, components/autoplay.tsx, the five routes. The contract lives in app/layout.tsx. -->

## Overview

**Creative North Star: "The canon, played straight."** beatlabs.ae is a faithful MacPaw-register site: the visitor recognises a serious consumer-software company before reading a word. Every device is MacPaw's, refit for a holding company with four apps and two studios: the grey product panel with one app at a time, the tile grid, the big banner, the alternating white and grey bands, the black fact cards, the support cards with a black button each, the link-column footer. Nothing shouts. The only accent is the lime status pill, a leftover from the group's own colour, and the products' real icons carry all the chroma.

**Key characteristics**
- Two greys and black on white. `gray` is every panel and card; `gray-2` is every rule and outline; `text` is prose, `ink` is headings and buttons, `mute` is descriptors and labels.
- One family, two cuts. Fixel Display (500 for h2, 600 for h1) and Fixel Text (400/500/600/700) for everything else. No mono, no uppercase.
- 10px corners on cards, 20px on panels, 50px pills. No shadows on surfaces; the only shadows sit under app icons (`0 12px 28px rgba(0,0,0,.12)` on tiles, `0 24px 48px rgba(0,0,0,.16)` on the showcase icon) and under the progress ring.
- Buttons are black rectangles (`.btn`, 16px/20px, padding 16/22, radius 10) with the icon on the right and `justify-content: space-between`; the white variant sits on grey panels, and on white it gains a 1px inset `gray-2` outline. Lime is reserved for the recommended plan.
- Links inside cards are underlined "Read more ↗" in `mute`, turning `ink` on hover.
- Section heads are centred: h2 then a `mute` label, `section` of air above, 48px below.

## Colors

- **bg `#ffffff`** — the page.
- **gray `#ebebeb`** — every card, panel and band. Slightly deeper than MacPaw's `#f2f2f2` so the page does not read empty.
- **gray-2 `#d9d9d9`** — rules, outlines of dev tiles and white buttons, footer rule, FAQ dividers.
- **ink `#000000`** — headings, buttons, black cards, the scrolled bar, the closing band.
- **text `#212121`** — prose.
- **mute `#7a7a7a`** — descriptors, labels, footer secondary, "Read more".
- **lime `#c8ff47`** — the status pill (`.mark`) for live and launching; the recommended plan's button. Never a surface.
- **banner gradient** — the studios banner's dark graphite field behind the founder photo.

**The Grey Surface Rule.** A region is either white or `gray`; nothing is tinted. Contrast on grey is carried by `ink` and `text`, never by a second colour.

## Typography

- **h1** (`.h1`, `.wall`) Display 600, `clamp(34px, 3.4vw, 48px)`, 1.1, -0.02em. The showcase product name; page titles.
- **h2** (`.h2`) Display 500, `clamp(28px, 2.6vw, 36px)`. Every section head, centred and balanced.
- **Card name** (`.h3`) Text 700, 14/20. **Card title** (`.h4`) Text 500, 18/24 — features, steps, support, black cards.
- **Sub** (`.sub`) Text 500, 18/24 — the tagline under a product name.
- **Body** 16/28 in `text`; **line** 14/20 in `mute`.
- **Num** (`.num`) Display 500, 48px — stats and step numerals.
- **Pill** 12/18 600 in a 50px radius.

## Components

**Bar** (`.rec`) — sticky, 72px, logotype left (`/logo-black.png` at 30px), links (`Apps · Studios · Company`) and a mail-icon Contact right. As the page scrolls the bar interpolates from white to black over the first 360px (`--bar`, smoothstepped, written by `ScrollChrome`): background and text via `color-mix`, height 72→60, a soft shadow fades in, and the logotype cross-fades to its white cut (`/logo.png`). ≤640px the links collapse into an `Index` button that opens a white sheet (`.index-sheet`).

**Showcase** (`.showcase`) — the hero: a 20px grey panel with one product per slide (`.slide`: 240px icon left in a 360px column, name/tagline/one-liner/status pill/two buttons right), round white prev/next arrows, a row of 28px icon labels (`.dots`, active one on a white 12px tile at 1.15×), and a centred dot/dash indicator (`.pips`, 6px dots, the active one a 28px black dash). Radio-driven (`#s0…#s3`), so it works without JS; `Autoplay` advances it every 5s and pauses on hover, focus or a hidden tab. The ficha uses `.showcase--static` for the same panel without controls.

**Product tile** (`.cell.card-app`) — `gray`, min 320px: name + descriptor top-left, status pill top-right, the 112px icon centred with a soft shadow, a two-line clamped one-liner, "Read more ↗". Dev apps: white with a `gray-2` outline, a grey placeholder square, no link. Studios use the same tile with their real mark.

**Banner** (`.banner`) — 20px panel, two columns, ≥520px: the founder photo cover-fit left, the graphite field right with h2, a check-list of the studios and a white button.

**Bands** (`.band`) — full-bleed `gray` sections holding centred copy (`.mission`) or the link cards (`.links`: white cards with the real icon and an underlined domain).

**Black cards** (`.cell--black`) — facts: legal name, licence, founder. White h4, 70% white label.

**Support cards** (`.support .cell`) — icon + title + line, a full-width black button at the bottom.

**Screens** (`.screens`) — 20px grey panel showing every real screenshot in full (28px corners, soft shadow); never cropped.

**Closing band** (`.contact`) — ink panel, 20px, with h2 or the e-mail in Display and white buttons.

**Footer** — five link columns at 12px (Apps incl. "· soon" dev items, Studios, Company, Legal per product, Contact), a `gray-2` rule, the logotype at 22px and the copyright line.

**Progress ring** (`.progress`) — fixed bottom-right, 56px white disc with shadow, a 3px `gray` track and an `ink` arc whose dash offset follows the read percentage, the number inside; hover inverts, click scrolls to top.

## Layout

Container `min(1280px, 100% − 2·pad)` with `pad = clamp(20px, 5.5vw, 80px)`. Grids: `.cells--4/3/2` at 16px gaps, collapsing 4→2 and 3→2 at ≤1000px and to one column at ≤640px. Sections are separated by `section` air (64–112px) above each centred head; bands carry their own padding. The showcase collapses to one centred column ≤1000px and hides its arrows ≤640px.

## Motion

- The bar's fade and height are scroll-linked (no timed transition).
- Tiles lift their icon 4px on hover (0.4s, ease-out); pills widen into the dash in 0.35s; the ring's arc eases 0.12s.
- Autoplay every 5s. `prefers-reduced-motion` disables smooth scroll and the ring's transitions; the autoplay still runs (it is content, not decoration) but pauses on any interaction.

## Do not

- Add shadows to panels, tint a surface, or introduce a second accent.
- Use display type above 48px, uppercase labels, mono, or outlined words.
- Crop screenshots, fabricate product UI, or show a dev app as a link.
