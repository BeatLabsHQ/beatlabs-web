// Metadata and structured-data helpers. Next.js replaces (does not merge) a parent's
// openGraph/twitter blocks, so every page must carry its own share image: build them here.

import type { Metadata } from 'next'

export const SITE_URL = 'https://beatlabs.ae'
export const SITE_NAME = 'beatLabs'
export const OG_IMAGE = {
  url: `${SITE_URL}/og-v2.png`,
  width: 1200,
  height: 630,
  alt: 'beatLabs — Ideas, designed and built. Design lab, Dubai, UAE',
}

export function pageMeta({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type: 'website', locale: 'en_US', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
  }
}

/** "A, B and C" */
export function listNames(names: string[]): string {
  return names.length < 2 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
}

/** JSON for an inline <script>: escapes "<" so no value can ever close the tag. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
