import { MetadataRoute } from 'next';
import { sql } from '@/lib/db';

const BASE_URL = 'https://relocation.quest';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Fetch all destinations dynamically
  let destinationPages: MetadataRoute.Sitemap = [];
  try {
    const destinations = await sql`
      SELECT slug, updated_at FROM destinations WHERE enabled = true ORDER BY country_name
    ` as Array<{ slug: string; updated_at: Date }>;
    destinationPages = destinations.map((dest) => ({
      url: `${BASE_URL}/destinations/${dest.slug}`,
      lastModified: dest.updated_at || new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Error fetching destinations for sitemap:', error);
  }

  // Fetch all articles dynamically
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const articles = await sql`
      SELECT slug, category, updated_at FROM articles ORDER BY published_at DESC
    ` as Array<{ slug: string; category: string; updated_at: Date }>;
    articlePages = articles.map((article) => {
      // Determine URL based on category
      const isGuide = article.category === 'visa-guide' || article.slug.includes('guide');
      const path = isGuide ? `/relocation/guide/${article.slug}` : `/articles/${article.slug}`;

      return {
        url: `${BASE_URL}${path}`,
        lastModified: article.updated_at || new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  // Cluster lead pages (high priority content hubs)
  const clusterPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/digital-nomad-visas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/relocation-guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/europe`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/asia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/americas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/caribbean`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  return [...staticPages, ...clusterPages, ...destinationPages, ...articlePages];
}
