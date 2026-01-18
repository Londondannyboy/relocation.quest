import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import JobsClient from './JobsClient';

interface Props {
  params: Promise<{ category: string }>;
}

export interface JobCategory {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  filters: {
    locations?: string[];
    salary_ranges?: string[];
    visa_sponsorship?: boolean;
  };
  featured_companies: string[] | null;
  salary_ranges: Record<string, { min: number; max: number; currency: string }> | null;
  job_count: number;
  updated_at: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  company_logo: string | null;
  location: string;
  salary_range: string | null;
  job_type: string;
  visa_sponsorship: boolean;
  relocation_package: boolean;
  description: string;
  posted_at: string;
  url: string | null;
}

async function getJobCategory(slug: string): Promise<JobCategory | null> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const categories = await sql`
    SELECT *
    FROM job_categories
    WHERE slug = ${slug} AND enabled = true
  `;

  return (categories[0] as JobCategory) || null;
}

async function getJobs(category: string): Promise<Job[]> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return [];

  const sql = neon(databaseUrl);

  // For now, return sample jobs - in production, filter by category
  const jobs = await sql`
    SELECT *
    FROM jobs
    WHERE category = ${category}
    ORDER BY posted_at DESC
    LIMIT 20
  `;

  return jobs as Job[];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const jobCategory = await getJobCategory(category);

  if (!jobCategory) {
    // Generate generic metadata for the category
    const categoryTitle = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      title: `${categoryTitle} Jobs with Relocation | Relocation Quest`,
      description: `Find ${categoryTitle.toLowerCase()} jobs with relocation packages and visa sponsorship. Browse opportunities worldwide.`,
    };
  }

  const title = jobCategory.meta_title || `${jobCategory.title} | Relocation Quest`;
  const description = jobCategory.meta_description ||
    jobCategory.description ||
    `Find ${jobCategory.title.toLowerCase()} opportunities with relocation packages and visa sponsorship.`;

  return {
    title,
    description,
    keywords: jobCategory.keywords || [],
    alternates: {
      canonical: `https://relocation.quest/jobs/${category}`,
    },
  };
}

export default async function JobsCategoryPage({ params }: Props) {
  const { category } = await params;
  const jobCategory = await getJobCategory(category);
  const jobs = await getJobs(category);

  // If no category in DB, still render with generated content
  const displayCategory = jobCategory || {
    id: 0,
    slug: category,
    title: category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Jobs',
    subtitle: null,
    description: `Browse ${category.replace(/-/g, ' ')} jobs with relocation opportunities.`,
    meta_title: null,
    meta_description: null,
    keywords: null,
    filters: {},
    featured_companies: null,
    salary_ranges: null,
    job_count: jobs.length,
    updated_at: new Date().toISOString(),
  };

  return <JobsClient category={displayCategory} jobs={jobs} />;
}
