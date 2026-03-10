// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Ha van belső API-d, azt érdemes kizárni
    },
    sitemap: 'https://aclimate.hu/sitemap.xml',
  }
}