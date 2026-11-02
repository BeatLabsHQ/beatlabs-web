import { describe, expect, it } from 'vitest'
import { appCtas, docsDomain, domainOf, primaryCta, storeLinks, withStoreCampaign } from './ctas'

const base = { status: 'live' as const, siteUrl: 'https://example.app', appStoreUrl: undefined, appStoreSoon: undefined, playStoreUrl: undefined }
const labels = (app: Parameters<typeof appCtas>[0]) => appCtas(app).map(c => `${c.kind}:${c.label}`)

describe('domainOf', () => {
  it('strips the scheme and path', () => {
    expect(domainOf('https://nibango.com/privacy')).toBe('nibango.com')
    expect(domainOf('http://raved.app')).toBe('raved.app')
  })
  it('is null without a url', () => {
    expect(domainOf(null)).toBeNull()
    expect(domainOf(undefined)).toBeNull()
  })
})

describe('appCtas', () => {
  it('live on both stores: App Store, Website, Google Play', () => {
    expect(labels({ ...base, appStoreUrl: 'https://apps.apple.com/app/id1', playStoreUrl: 'https://play.google.com/x' }))
      .toEqual(['link:App Store', 'link:Website', 'link:Google Play'])
  })

  it('live with the App Store still to come: a coming-soon button first', () => {
    const ctas = appCtas({ ...base, appStoreSoon: true, playStoreUrl: 'https://play.google.com/x' })
    expect(ctas.map(c => `${c.kind}:${c.label}`)).toEqual(['soon:App Store', 'link:Website', 'link:Google Play'])
    expect(ctas[0]).toMatchObject({ black: true })
  })

  it('a real App Store link wins over the coming-soon flag', () => {
    expect(primaryCta({ ...base, appStoreUrl: 'https://apps.apple.com/app/id1', appStoreSoon: true })?.kind).toBe('link')
  })

  it('live with no store at all falls back to the website as the main button, once', () => {
    expect(labels(base)).toEqual(['link:example.app'])
  })

  it('launching never shows store buttons, and links back to all apps', () => {
    expect(labels({ ...base, status: 'launching', appStoreUrl: 'https://apps.apple.com/app/id1', appStoreSoon: true, playStoreUrl: 'https://play.google.com/x' }))
      .toEqual(['link:example.app', 'link:All apps'])
  })

  it('no site and not live: only the way back', () => {
    expect(labels({ ...base, status: 'launching', siteUrl: null })).toEqual(['link:All apps'])
    expect(primaryCta({ ...base, status: 'launching', siteUrl: null })).toBeNull()
  })
})

describe('withStoreCampaign', () => {
  it('leaves the link alone without a campaign', () => {
    expect(withStoreCampaign('https://apps.apple.com/app/id123')).toBe('https://apps.apple.com/app/id123')
  })
  it('builds the App Store campaign link', () => {
    expect(withStoreCampaign('https://apps.apple.com/app/curb-subscription-tracker/id123', 'beatlabs-home'))
      .toBe('https://apps.apple.com/app/apple-store/id123?pt=128859114&ct=beatlabs-home&mt=8')
  })
  it('adds an encoded referrer to a Google Play link that already has a query', () => {
    expect(withStoreCampaign('https://play.google.com/store/apps/details?id=com.x', 'home'))
      .toBe('https://play.google.com/store/apps/details?id=com.x&referrer=utm_source%3Dbeatlabs%26utm_medium%3Dweb%26utm_campaign%3Dhome')
  })
  it('never touches any other link', () => {
    expect(withStoreCampaign('https://example.app', 'home')).toBe('https://example.app')
  })
})

describe('storeLinks', () => {
  const live = { ...base, appStoreUrl: 'https://apps.apple.com/app/id1', playStoreUrl: 'https://play.google.com/x' }
  it('offers both stores, App Store first', () => {
    expect(storeLinks(live).map(l => l.label)).toEqual(['App Store', 'Google Play'])
  })
  it('offers only the store the app is on', () => {
    expect(storeLinks({ ...base, playStoreUrl: 'https://play.google.com/x' }).map(l => l.label)).toEqual(['Google Play'])
    expect(storeLinks(base)).toEqual([])
  })
  it('offers none until the app is live', () => {
    expect(storeLinks({ ...live, status: 'launching' })).toEqual([])
  })
})

describe('docsDomain', () => {
  it('names where the legal documents really are, not the website', () => {
    expect(docsDomain({ siteUrl: 'https://blab.day', docs: [{ label: 'Website', href: 'https://blab.day' }, { label: 'Privacy Policy', href: 'https://getblab.app/privacy' }] })).toBe('getblab.app')
  })
  it('falls back to the website when there are no documents', () => {
    expect(docsDomain({ siteUrl: 'https://x.app', docs: [] })).toBe('x.app')
  })
})
