import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import DestinationClient from './DestinationClient';

interface Props {
  params: Promise<{ slug: string }>;
}

interface Destination {
  id: string;
  slug: string;
  country_name: string;
  flag: string;
  region: string;
  hero_title: string;
  hero_subtitle: string;
  hero_gradient: string;
  hero_image_url: string;
  language: string;
  quick_facts: Array<{ icon: string; label: string; value: string }>;
  highlights: Array<{ icon?: string; text?: string; title?: string; description?: string }>;
  visas: Array<{
    name: string;
    type: string;
    duration: string;
    requirements: string[];
    processingTime: string;
    cost: string;
  }>;
  cost_of_living: {
    currency: string;
    items: Array<{ category: string; item: string; cost: number; frequency: string }>;
  };
  job_market: {
    remote_friendly?: boolean;
    in_demand_sectors?: string[];
    avg_salaries?: Record<string, string>;
    work_culture?: string;
  };
  faqs: Array<{ question: string; answer: string }>;
  meta_title?: string;
  meta_description?: string;
}

async function getDestination(slug: string): Promise<Destination | null> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const destinations = await sql`
    SELECT *
    FROM destinations
    WHERE slug = ${slug} AND enabled = true
  `;

  return (destinations[0] as Destination) || null;
}

async function getPageContext(slug: string) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const contexts = await sql`
    SELECT *
    FROM page_contexts
    WHERE page_slug = ${'/destinations/' + slug}
    AND is_published = true
  `;

  return contexts[0] || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestination(slug);
  const pageContext = await getPageContext(slug);

  if (!destination) {
    return {
      title: 'Destination Not Found | Relocation Quest',
      description: 'The destination you are looking for could not be found.',
    };
  }

  const title = pageContext?.meta_title || destination.meta_title || `Moving to ${destination.country_name} | Relocation Quest`;
  const description = pageContext?.meta_description || destination.meta_description ||
    `Complete relocation guide for ${destination.country_name}. Visa requirements, cost of living, job market, and everything you need to know.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: destination.hero_image_url ? [destination.hero_image_url] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: destination.hero_image_url ? [destination.hero_image_url] : [],
    },
    alternates: {
      canonical: `https://relocation.quest/destinations/${slug}`,
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = await getDestination(slug);

  if (!destination) {
    notFound();
  }

  return <DestinationClient slug={slug} destination={destination} />;
}
