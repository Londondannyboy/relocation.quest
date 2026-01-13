import { neon } from '@neondatabase/serverless';

// Create a SQL query function using the Neon serverless driver
export const sql = neon(process.env.DATABASE_URL!);

// Destination type matching the database schema
export interface Destination {
  slug: string;
  country_name: string;
  flag: string;
  region: string;
  language: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image_url: string;
  quick_facts: Record<string, string>;
  highlights: string[];
  visas: Array<{
    name: string;
    description: string;
    requirements?: string[];
    cost?: string;
    duration?: string;
  }>;
  cost_of_living: {
    monthly_total?: string;
    breakdown?: Record<string, string>;
    comparison?: string;
  };
  job_market?: Record<string, unknown>;
  faqs?: Array<{ question: string; answer: string }>;
  education_stats?: Record<string, unknown>;
  company_incorporation?: Record<string, unknown>;
  property_info?: Record<string, unknown>;
  expatriate_scheme?: Record<string, unknown>;
  residency_requirements?: Record<string, unknown>;
}

// Get a single destination by slug
export async function getDestination(slug: string): Promise<Destination | null> {
  try {
    const result = await sql`
      SELECT
        slug, country_name, flag, region, language,
        hero_title, hero_subtitle, hero_image_url,
        quick_facts, highlights, visas, cost_of_living,
        job_market, faqs,
        COALESCE(education_stats, '{}'::jsonb) as education_stats,
        COALESCE(company_incorporation, '{}'::jsonb) as company_incorporation,
        COALESCE(property_info, '{}'::jsonb) as property_info,
        COALESCE(expatriate_scheme, '{}'::jsonb) as expatriate_scheme,
        COALESCE(residency_requirements, '{}'::jsonb) as residency_requirements
      FROM destinations
      WHERE slug = ${slug.toLowerCase()} AND enabled = true
    `;

    return result[0] as Destination || null;
  } catch (error) {
    console.error('Error fetching destination:', error);
    return null;
  }
}

// Get all destinations (summary)
export async function getAllDestinations(): Promise<Destination[]> {
  try {
    const result = await sql`
      SELECT
        slug, country_name, flag, region, language,
        hero_title, hero_subtitle, hero_image_url,
        quick_facts, highlights, visas, cost_of_living
      FROM destinations
      WHERE enabled = true
      ORDER BY country_name
    `;

    return result as Destination[];
  } catch (error) {
    console.error('Error fetching all destinations:', error);
    return [];
  }
}

// Search destinations by name
export async function searchDestinations(query: string): Promise<Destination[]> {
  try {
    const result = await sql`
      SELECT
        slug, country_name, flag, region, language,
        hero_title, hero_subtitle, hero_image_url,
        quick_facts, highlights, visas, cost_of_living
      FROM destinations
      WHERE enabled = true
        AND (
          country_name ILIKE ${'%' + query + '%'}
          OR region ILIKE ${'%' + query + '%'}
        )
      ORDER BY country_name
      LIMIT 5
    `;

    return result as Destination[];
  } catch (error) {
    console.error('Error searching destinations:', error);
    return [];
  }
}
