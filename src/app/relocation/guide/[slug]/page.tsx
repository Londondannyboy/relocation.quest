import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import GuideClient from './GuideClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export interface Guide {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  hero_image_url: string | null;
  hero_gradient: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  executive_summary: string | null;
  content_sections: Array<{
    id: string;
    title: string;
    content: string;
    icon?: string;
  }>;
  requirements: {
    eligibility?: string[];
    documents?: string[];
    financial?: {
      minimum_income?: number;
      proof_of_funds?: number;
      currency?: string;
    };
  };
  application_process: Array<{
    step: number;
    title: string;
    description: string;
    duration?: string;
  }>;
  costs: {
    currency?: string;
    items?: Array<{
      item: string;
      amount: number;
      note?: string;
    }>;
    total?: number;
  };
  pros: string[] | null;
  cons: string[] | null;
  faqs: Array<{ question: string; answer: string }>;
  related_guides: string[] | null;
  country_slug: string | null;
  category: string | null;
  word_count: number | null;
  read_time_minutes: number | null;
  author: string | null;
  published_at: string | null;
  updated_at: string;
}

async function getGuide(slug: string): Promise<Guide | null> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const guides = await sql`
    SELECT *
    FROM guides
    WHERE slug = ${slug} AND enabled = true
  `;

  return (guides[0] as Guide) || null;
}

async function getPageContext(slug: string) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const contexts = await sql`
    SELECT *
    FROM page_contexts
    WHERE page_slug = ${'/relocation/guide/' + slug}
    AND is_published = true
  `;

  return contexts[0] || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuide(slug);
  const pageContext = await getPageContext(slug);

  if (!guide) {
    return {
      title: 'Guide Not Found | Relocation Quest',
      description: 'The guide you are looking for could not be found.',
    };
  }

  const title = pageContext?.meta_title || guide.meta_title || `${guide.title} | Relocation Quest`;
  const description = pageContext?.meta_description || guide.meta_description ||
    guide.executive_summary?.substring(0, 155) + '...' ||
    `Complete guide: ${guide.title}. Requirements, costs, application process, and everything you need to know.`;

  return {
    title,
    description,
    keywords: guide.keywords || [],
    openGraph: {
      title,
      description,
      images: guide.hero_image_url ? [guide.hero_image_url] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: guide.hero_image_url ? [guide.hero_image_url] : [],
    },
    alternates: {
      canonical: `https://relocation.quest/relocation/guide/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = await getGuide(slug);

  if (!guide) {
    notFound();
  }

  return <GuideClient slug={slug} guide={guide} />;
}
