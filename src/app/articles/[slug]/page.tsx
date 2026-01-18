import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import ArticleClient from './ArticleClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  hero_image_url: string | null;
  hero_gradient: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  introduction: string | null;
  body_content: string | null;
  table_of_contents: Array<{
    id: string;
    title: string;
    level: number;
  }>;
  key_takeaways: string[] | null;
  faqs: Array<{ question: string; answer: string }>;
  related_articles: string[] | null;
  countries: string[] | null;
  category: string | null;
  author: string | null;
  word_count: number | null;
  read_time_minutes: number | null;
  published_at: string | null;
  updated_at: string;
}

async function getArticle(slug: string): Promise<Article | null> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const articles = await sql`
    SELECT *
    FROM content_articles
    WHERE slug = ${slug} AND enabled = true
  `;

  return (articles[0] as Article) || null;
}

async function getPageContext(slug: string) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const contexts = await sql`
    SELECT *
    FROM page_contexts
    WHERE page_slug = ${'/articles/' + slug}
    AND is_published = true
  `;

  return contexts[0] || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  const pageContext = await getPageContext(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Relocation Quest',
      description: 'The article you are looking for could not be found.',
    };
  }

  const title = pageContext?.meta_title || article.meta_title || `${article.title} | Relocation Quest`;
  const description = pageContext?.meta_description || article.meta_description ||
    article.introduction?.substring(0, 155) + '...' ||
    `Read: ${article.title}. Expert insights on relocation and moving abroad.`;

  return {
    title,
    description,
    keywords: article.keywords || [],
    openGraph: {
      title,
      description,
      images: article.hero_image_url ? [article.hero_image_url] : [],
      type: 'article',
      publishedTime: article.published_at || undefined,
      modifiedTime: article.updated_at,
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: article.hero_image_url ? [article.hero_image_url] : [],
    },
    alternates: {
      canonical: `https://relocation.quest/articles/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return <ArticleClient slug={slug} article={article} />;
}
