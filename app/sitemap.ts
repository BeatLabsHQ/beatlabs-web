import { MetadataRoute } from 'next'
import { publishedProducts } from '@/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://beatlabs.ae',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://beatlabs.ae/apps',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://beatlabs.ae/studios',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...publishedProducts.map(p => ({
      url: `https://beatlabs.ae/apps/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: 'https://beatlabs.ae/legal',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
