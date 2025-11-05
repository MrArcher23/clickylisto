import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clickylisto.com'

  const routes = [
    {
      url: '',
      priority: 1,
    },
    {
      url: '/texttools',
      priority: 0.8,
    },
    {
      url: '/qrtools',
      priority: 0.8,
    },
    {
      url: '/passwordgen',
      priority: 0.8,
    },
    {
      url: '/uuidgen',
      priority: 0.8,
    },
    {
      url: '/linktows',
      priority: 0.8,
    },
    {
      url: '/shortlink',
      priority: 0.8,
    },
    {
      url: '/image-tool',
      priority: 0.8,
    },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }))
}
