// Guards the copy against drifting: the mistakes the 2026-11-02 review found must fail here.
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { brandUrls, company, products, publishedProducts, studios } from '../data/portfolio'

const llms = readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf8')
const copyOf = (p: (typeof products)[number]) =>
  [p.oneLiner, p.tagline, p.lede, ...p.features.flatMap(f => [f.title, f.desc]), ...p.howItWorks.map(h => h.desc), ...p.faq.flatMap(f => [f.q, f.a]), ...(p.pricing ?? []).flatMap(x => [x.note, ...x.items])].join('\n')

describe.each(publishedProducts.map(p => [p.displayName, p] as const))('%s', (_name, p) => {
  it('its platforms match the store links', () => {
    expect(p.platforms.includes('iOS')).toBe(Boolean(p.appStoreUrl))
    expect(p.platforms.includes('Android')).toBe(Boolean(p.playStoreUrl))
  })
  it('never says "coming soon" for a store it is already on', () => {
    expect(p.appStoreUrl && p.appStoreSoon).toBeFalsy()
    if (p.appStoreUrl) expect(copyOf(p)).not.toMatch(/iphone app is coming|ios soon|iphone soon|coming soon/i)
  })
  it('publishes its own privacy policy and terms, over https', () => {
    const labels = p.docs.map(d => d.label)
    expect(labels).toEqual(expect.arrayContaining(['Privacy Policy', 'Terms of Service']))
    for (const url of [p.siteUrl, p.appStoreUrl, p.playStoreUrl, ...p.docs.map(d => d.href)]) {
      if (url) expect(url).toMatch(/^https:\/\//)
    }
  })
  it('states one language count everywhere', () => {
    const count = p.languages?.match(/\d+/)?.[0]
    const stat = p.stats?.find(s => /^languages$/i.test(s.label))
    if (stat) expect(stat.value).toBe(count)
    for (const [, n] of Array.from(copyOf(p).matchAll(/\b(\d+) languages\b/gi))) expect(n).toBe(count)
  })
  it('is described in llms.txt with its site and language count', () => {
    const line = llms.split('\n').find(l => l.includes(`[${p.displayName}]`))
    expect(line).toBeDefined()
    if (p.siteUrl) expect(line).toContain(p.siteUrl)
    if (p.languages) expect(line).toContain(p.languages)
  })
})

describe('Raved', () => {
  it('states one free limit in the pricing and the FAQ', () => {
    const raved = products.find(p => p.slug === 'raved')!
    const limit = raved.pricing?.[0].note.match(/(\d+) raves/)?.[1]
    expect(limit).toBeDefined()
    for (const [, n] of Array.from(copyOf(raved).matchAll(/up to (\d+) raves/gi))) expect(n).toBe(limit)
  })
})

describe('Blab', () => {
  it('states one number of worlds', () => {
    const blab = products.find(p => p.slug === 'blab')!
    const worlds = blab.stats?.find(s => s.label === 'Worlds')?.value
    expect(worlds).toBeDefined()
    expect(blab.features.some(f => f.title === `${worlds} worlds.`)).toBe(true)
  })
})

describe('the company', () => {
  it('llms.txt keeps no stale claims', () => {
    expect(llms).not.toMatch(/coming soon/i)
    expect(llms).toContain(company.legalName)
  })
  it('brandUrls lists every product and studio site once', () => {
    const urls = brandUrls()
    expect(new Set(urls).size).toBe(urls.length)
    for (const p of publishedProducts) if (p.siteUrl) expect(urls).toContain(p.siteUrl)
    for (const s of studios) expect(urls).toContain(s.url)
  })
  it('every studio has its own contact address', () => {
    for (const s of studios) expect(s.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/)
  })
})
