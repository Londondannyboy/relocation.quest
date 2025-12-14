import { MetadataRoute } from 'next'
import { neon } from '@neondatabase/serverless'

export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://relocation.quest'

  // Static pages for relocation site
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jobs/dubai`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/jobs/australia`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/jobs/canada`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/jobs/relocation-packages`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/jobs/international`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/jobs/no-experience`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jobs/relocation-from-uk`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jobs/visa-sponsorship`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/corporate-relocation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporate-relocation-companies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/relocation-companies-uk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporate-relocation-agents-london`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/corporate-relocation-company`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/employee-relocation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/chat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Destination pages (manually list the 7 we have)
  const destinationPages: MetadataRoute.Sitemap = [
    'portugal',
    'spain',
    'thailand',
    'mexico',
    'costa-rica',
    'germany',
    'cyprus',
  ].map((country) => ({
    url: `${baseUrl}/destinations/${country}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // High-value guide pages
  const highValueGuides: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides/what-is-corporate-relocation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/moving-to-cyprus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guides/cyprus-expat-jobs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  try {
    if (!process.env.DATABASE_URL) {
      return [...staticPages, ...destinationPages, ...highValueGuides]
    }

    const sql = neon(process.env.DATABASE_URL)

    // Fetch all published guides and articles for relocation
    const guides = await sql`
      SELECT slug, published_at, guide_type
      FROM articles
      WHERE status = 'published'
      AND app = 'relocation'
      ORDER BY published_at DESC
      LIMIT 500
    `

    const guideUrls: MetadataRoute.Sitemap = guides.map((guide: any) => {
      const basePath = guide.guide_type === 'country' ? '/guides' : '/articles'
      return {
        url: `${baseUrl}${basePath}/${guide.slug}`,
        lastModified: guide.published_at ? new Date(guide.published_at) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: guide.guide_type === 'country' ? 0.8 : 0.6,
      }
    })

    return [...staticPages, ...destinationPages, ...highValueGuides, ...guideUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages if database query fails
    return [...staticPages, ...destinationPages]
  }
}
