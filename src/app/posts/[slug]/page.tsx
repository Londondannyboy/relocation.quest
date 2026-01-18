import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
import PostClient from './PostClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  hero_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  body_content: string | null;
  faqs: Array<{ question: string; answer: string }>;
  country_slug: string | null;
  category: string | null;
  author: string | null;
  published_at: string | null;
  updated_at: string;
}

async function getPost(slug: string): Promise<Post | null> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  const sql = neon(databaseUrl);
  const posts = await sql`
    SELECT *
    FROM posts
    WHERE slug = ${slug} AND enabled = true
  `;

  return (posts[0] as Post) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Relocation Quest',
      description: 'The post you are looking for could not be found.',
    };
  }

  const title = post.meta_title || `${post.title} | Relocation Quest`;
  const description = post.meta_description ||
    `Read: ${post.title}. Expert insights on relocation and moving abroad.`;

  return {
    title,
    description,
    keywords: post.keywords || [],
    openGraph: {
      title,
      description,
      images: post.hero_image_url ? [post.hero_image_url] : [],
      type: 'article',
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_at,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.hero_image_url ? [post.hero_image_url] : [],
    },
    alternates: {
      canonical: `https://relocation.quest/posts/${slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <PostClient slug={slug} post={post} />;
}
