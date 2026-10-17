// Which buttons a product ficha shows, in order. Pure, so the rules are unit-tested.

import type { AppProduct } from '@/data/portfolio'

export type Cta =
  | { kind: 'link'; href: string; label: string; external: boolean; black?: boolean; arrow?: boolean }
  /** A store the app is not on yet: opens the "coming soon" dialog instead of a link. */
  | { kind: 'soon'; store: 'App Store'; label: string; black?: boolean }

type CtaSource = Pick<AppProduct, 'status' | 'appStoreUrl' | 'appStoreSoon' | 'playStoreUrl' | 'siteUrl'>

export function domainOf(url: string | null | undefined): string | null {
  return url ? url.replace(/^https?:\/\//, '').split('/')[0] : null
}

/** The main action: the App Store when live, its "coming soon" when flagged, else the website. */
export function primaryCta(app: CtaSource): Cta | null {
  const isLive = app.status === 'live'
  if (isLive && app.appStoreUrl) return { kind: 'link', href: app.appStoreUrl, label: 'App Store', external: true, black: true }
  if (isLive && app.appStoreSoon) return { kind: 'soon', store: 'App Store', label: 'App Store', black: true }
  if (app.siteUrl) return { kind: 'link', href: app.siteUrl, label: domainOf(app.siteUrl) ?? 'Website', external: true, black: true }
  return null
}

export function appCtas(app: CtaSource): Cta[] {
  const isLive = app.status === 'live'
  const primary = primaryCta(app)
  const ctas: Cta[] = primary ? [primary] : []
  if (app.siteUrl && !(primary?.kind === 'link' && primary.href === app.siteUrl)) {
    ctas.push({ kind: 'link', href: app.siteUrl, label: 'Website', external: true })
  }
  if (isLive && app.playStoreUrl) ctas.push({ kind: 'link', href: app.playStoreUrl, label: 'Google Play', external: true })
  if (!isLive) ctas.push({ kind: 'link', href: '/apps', label: 'All apps', external: false, arrow: false })
  return ctas
}
