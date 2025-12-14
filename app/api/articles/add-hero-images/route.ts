import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  country: string | null;
  category: string | null;
}

// Generate search query from article title
function generateSearchQuery(title: string, country?: string | null): string {
  let query = title
    .replace(/^['"]|['"]$/g, '') // Remove quotes
    .replace(/:\s*[-–—]/g, '') // Remove colons and dashes
    .replace(/\s*\d{4}\s*$/g, '') // Remove years at the end
    .trim();

  if (country && country !== 'null') {
    query = `${country} ${query}`;
  }

  return query.substring(0, 50).trim();
}

// Generate alt text from title
function generateAltText(title: string): string {
  return title.substring(0, 160).trim();
}

// Fetch image from Unsplash API or Pexels as fallback
async function fetchImageFromUnsplash(
  query: string
): Promise<{ url: string; photographer: string } | null> {
  // Try Unsplash first
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodedQuery}&per_page=1&order_by=relevant`,
      {
        headers: process.env.UNSPLASH_ACCESS_KEY
          ? {
              'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
            }
          : {},
      }
    );

    if (response.ok) {
      const data = await response.json() as { results: Array<{ urls: { regular: string }; user: { name: string } }> };

      if (data.results && data.results.length > 0) {
        const photo = data.results[0];
        return {
          url: photo.urls.regular,
          photographer: `Photo by ${photo.user.name} on Unsplash`,
        };
      }
    }
  } catch (error) {
    console.error(`Unsplash API error for query "${query}":`, error);
  }

  // Fallback to Pexels if Unsplash fails
  try {
    const encodedQuery = encodeURIComponent(query);
    const pexelsKey = process.env.PEXELS_API_KEY;

    if (!pexelsKey) {
      return null;
    }

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodedQuery}&per_page=1`,
      {
        headers: {
          'Authorization': pexelsKey,
        },
      }
    );

    if (response.ok) {
      const data = await response.json() as { photos: Array<{ src: { large: string }; photographer: string }> };

      if (data.photos && data.photos.length > 0) {
        const photo = data.photos[0];
        return {
          url: photo.src.large,
          photographer: `Photo by ${photo.photographer} on Pexels`,
        };
      }
    }
  } catch (error) {
    console.error(`Pexels API error for query "${query}":`, error);
  }

  return null;
}

// Update article with hero image
async function updateArticleWithImage(
  articleId: number,
  imageUrl: string,
  altText: string
): Promise<boolean> {
  try {
    await sql`
      UPDATE articles
      SET hero_asset_url = ${imageUrl}, hero_asset_alt = ${altText}, updated_at = NOW()
      WHERE id = ${articleId}
    `;
    return true;
  } catch (error) {
    console.error(`Error updating article ${articleId}:`, error);
    return false;
  }
}

// POST /api/articles/add-hero-images - Add hero images to articles missing them
export async function POST(request: NextRequest) {
  try {
    // Check for auth token
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.REVALIDATE_SECRET || 'default-token';

    if (!authHeader || !authHeader.includes(expectedToken)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get articles without hero images
    const articles = await sql<Article[]>`
      SELECT id, title, slug, excerpt, country, category
      FROM articles
      WHERE app = 'relocation'
        AND status IS NOT NULL
        AND hero_asset_url IS NULL
      ORDER BY published_at DESC
      LIMIT 50
    `;

    if (articles.length === 0) {
      return NextResponse.json({ message: 'No articles without hero images found' });
    }

    const results = {
      total: articles.length,
      successful: 0,
      failed: 0,
      articles: [] as Array<{
        id: number;
        title: string;
        success: boolean;
        imageUrl?: string;
        error?: string;
      }>,
    };

    // Process each article
    for (const article of articles) {
      const searchQuery = generateSearchQuery(article.title, article.country);
      const image = await fetchImageFromUnsplash(searchQuery);

      if (image) {
        const altText = generateAltText(article.title);
        const success = await updateArticleWithImage(article.id, image.url, altText);

        if (success) {
          results.successful++;
          results.articles.push({
            id: article.id,
            title: article.title,
            success: true,
            imageUrl: image.url,
          });
        } else {
          results.failed++;
          results.articles.push({
            id: article.id,
            title: article.title,
            success: false,
            error: 'Database update failed',
          });
        }
      } else {
        results.failed++;
        results.articles.push({
          id: article.id,
          title: article.title,
          success: false,
          error: 'No image found',
        });
      }

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error in add-hero-images route:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}
