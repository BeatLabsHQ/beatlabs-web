import { describe, expect, it } from 'vitest'
import { appCtas, domainOf, primaryCta } from './ctas'

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
