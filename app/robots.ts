import type { MetadataRoute } from 'next'
import app from '@/data/app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/tmp/',
        '/profile/',
        '/billing/',
        '/settings/',
        '/support/',
      ],
      crawlDelay: 0,
    },
    sitemap: `${app.url}/sitemap.xml`,
    host: app.url.replace('https://', '')
  }
}
