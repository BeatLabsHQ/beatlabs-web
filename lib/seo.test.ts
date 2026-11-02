import { describe, expect, it } from 'vitest'
import { jsonLdScript, listNames, OG_IMAGE, pageMeta, SITE_URL } from './seo'

describe('pageMeta', () => {
  const meta = pageMeta({ path: '/apps', title: 'Apps', description: 'All apps' })

  it('gives every page its own canonical and share URL', () => {
    expect(meta.alternates?.canonical).toBe(`${SITE_URL}/apps`)
    expect(meta.openGraph?.url).toBe(`${SITE_URL}/apps`)
  })
  it('never loses the share image or the page title on X', () => {
    expect(meta.openGraph?.images).toEqual([OG_IMAGE])
    expect(meta.twitter).toMatchObject({ card: 'summary_large_image', title: 'Apps', images: [OG_IMAGE.url] })
  })
  it('the home URL has no trailing slash', () => {
    expect(pageMeta({ path: '/', title: 't', description: 'd' }).alternates?.canonical).toBe(SITE_URL)
  })
})

describe('jsonLdScript', () => {
  it('cannot close the script tag it lives in', () => {
    const out = jsonLdScript({ name: '</script><script>alert(1)</script>' })
    expect(out).not.toContain('<')
    expect(JSON.parse(out).name).toBe('</script><script>alert(1)</script>')
  })
})

describe('listNames', () => {
  it('reads as English at any length', () => {
    expect(listNames([])).toBe('')
    expect(listNames(['A'])).toBe('A')
    expect(listNames(['A', 'B', 'C'])).toBe('A, B and C')
  })
})
