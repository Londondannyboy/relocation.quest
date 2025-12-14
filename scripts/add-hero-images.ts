import { sql } from '@neondatabase/serverless';

// Load environment variables from .env.local
const envPath = new URL('.env.local', import.meta.url).pathname;
const envContent = await import('fs').then(fs => fs.promises.readFile(envPath, 'utf-8'));
envContent.split('\n').forEach(line => {
  const [key, ...rest] = line.split('=');
  if (key && !key.startsWith('#')) {
    process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
  }
});

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
  // Remove common phrases and clean up the title
  let query = title
    .replace(/^['"]|['"]$/g, '') // Remove quotes
    .replace(/:\s*[-–—]/g, '') // Remove colons and dashes
    .replace(/\s*\d{4}\s*$/g, '') // Remove years at the end
    .trim();

  // Extract key terms
  if (country && country !== 'null') {
    query = `${country} ${query}`;
  }

  // Take first 50 chars for better results
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
    const query = `
      UPDATE articles
      SET hero_asset_url = $1, hero_asset_alt = $2, updated_at = NOW()
      WHERE id = $3
    `;

    await pool.query(query, [imageUrl, altText, articleId]);
    return true;
  } catch (error) {
    console.error(`Error updating article ${articleId}:`, error);
    return false;
  }
}

// Main function
async function main() {
  try {
    console.log('Fetching articles without hero images...');

    // Get articles without hero images
    const result = await pool.query(`
      SELECT id, title, slug, excerpt, country, category
      FROM articles
      WHERE app = 'relocation'
        AND status IS NOT NULL
        AND hero_asset_url IS NULL
      ORDER BY published_at DESC
      LIMIT 50
    `);

    const articles: Article[] = result.rows;

    if (articles.length === 0) {
      console.log('No articles found without hero images.');
      await pool.end();
      return;
    }

    console.log(`Found ${articles.length} articles without hero images.\n`);

    let successCount = 0;
    let failureCount = 0;

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      console.log(`[${i + 1}/${articles.length}] Processing: "${article.title}"`);

      // Generate search query
      const searchQuery = generateSearchQuery(article.title, article.country);
      console.log(`  Search query: "${searchQuery}"`);

      // Fetch image from Unsplash
      const image = await fetchImageFromUnsplash(searchQuery);

      if (image) {
        const altText = generateAltText(article.title);

        // Update database
        const success = await updateArticleWithImage(article.id, image.url, altText);

        if (success) {
          console.log(`  ✓ Updated with image from ${image.photographer}`);
          console.log(`  URL: ${image.url}`);
          successCount++;
        } else {
          console.log(`  ✗ Failed to update database`);
          failureCount++;
        }
      } else {
        console.log(`  ✗ No image found on Unsplash`);
        failureCount++;
      }

      // Add a small delay to avoid rate limiting
      if (i < articles.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      console.log();
    }

    console.log('\n========== SUMMARY ==========');
    console.log(`Successfully updated: ${successCount} articles`);
    console.log(`Failed: ${failureCount} articles`);
    console.log(`Total: ${articles.length} articles`);

    await pool.end();
  } catch (error) {
    console.error('Fatal error:', error);
    await pool.end();
    process.exit(1);
  }
}

main();
