// Which buttons a product ficha shows, in order. Pure, so the rules are unit-tested.

import type { AppProduct } from '@/data/portfolio'

export type Cta =
  | { kind: 'link'; href: string; label: string; external: boolean; black?: boolean; arrow?: boolean }
  /** A store the app is not on yet: opens the "coming soon" dialog instead of a link. */
  | { kind: 'soon'; store: 'App Store'; label: string; black?: boolean }

type CtaSource = Pick<AppProduct, 'status' | 'appStoreUrl' | 'appStoreSoon' | 'playStoreUrl' | 'siteUrl'>
export type StoreLink = { href: string; label: 'App Store' | 'Google Play' }

/** The account's App Store provider token, public by design (it is part of every campaign link). */
const APP_STORE_PROVIDER = '128859114'

/** Marks a store link with where the tap came from, visible only in each store's own statistics. No cookies, nothing personal. */
export function withStoreCampaign(url: string, campaign?: string): string {
  if (!campaign) return url
  const appleId = /apps\.apple\.com\/.*id(\d+)/.exec(url)?.[1]
  if (appleId) return `https://apps.apple.com/app/apple-store/id${appleId}?pt=${APP_STORE_PROVIDER}&ct=${encodeURIComponent(campaign)}&mt=8`
  if (url.startsWith('https://play.google.com/')) {
    const referrer = encodeURIComponent(`utm_source=beatlabs&utm_medium=web&utm_campaign=${campaign}`)
    return `${url}${url.includes('?') ? '&' : '?'}referrer=${referrer}`
  }
  return url
}

/** Both stores, so an Android visitor is never left with only the App Store. */
export function storeLinks(app: CtaSource, campaign?: string): StoreLink[] {
  if (app.status !== 'live') return []
  const links: StoreLink[] = []
  if (app.appStoreUrl) links.push({ href: withStoreCampaign(app.appStoreUrl, campaign), label: 'App Store' })
  if (app.playStoreUrl) links.push({ href: withStoreCampaign(app.playStoreUrl, campaign), label: 'Google Play' })
  return links
}

/** Where a product keeps its legal documents, which may not be its website. */
export function docsDomain(app: Pick<AppProduct, 'docs' | 'siteUrl'>): string | null {
  const doc = app.docs.find(d => d.label === 'Privacy Policy')
  return domainOf(doc?.href ?? app.siteUrl)
}

export function domainOf(url: string | null | undefined): string | null {
  return url ? url.replace(/^https?:\/\//, '').split('/')[0] : null
}

/** The main action: the App Store when live, its "coming soon" when flagged, else the website. */
export function primaryCta(app: CtaSource, campaign?: string): Cta | null {
  const isLive = app.status === 'live'
  if (isLive && app.appStoreUrl) return { kind: 'link', href: withStoreCampaign(app.appStoreUrl, campaign), label: 'App Store', external: true, black: true }
  if (isLive && app.appStoreSoon) return { kind: 'soon', store: 'App Store', label: 'App Store', black: true }
  if (app.siteUrl) return { kind: 'link', href: app.siteUrl, label: domainOf(app.siteUrl) ?? 'Website', external: true, black: true }
  return null
}

export function appCtas(app: CtaSource, campaign?: string): Cta[] {
  const isLive = app.status === 'live'
  const primary = primaryCta(app, campaign)
  const ctas: Cta[] = primary ? [primary] : []
  if (app.siteUrl && !(primary?.kind === 'link' && primary.href === app.siteUrl)) {
    ctas.push({ kind: 'link', href: app.siteUrl, label: 'Website', external: true })
  }
  if (isLive && app.playStoreUrl) ctas.push({ kind: 'link', href: withStoreCampaign(app.playStoreUrl, campaign), label: 'Google Play', external: true })
  if (!isLive) ctas.push({ kind: 'link', href: '/apps', label: 'All apps', external: false, arrow: false })
  return ctas
}
