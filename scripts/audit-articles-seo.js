/**
 * SEO Audit Script for Articles
 * Checks: keywords in headers, keyword bolding, external links, internal links, images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, 'data/articles');

// Get all article files
const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.js'));

console.log(`\n📊 SEO AUDIT REPORT - ${articleFiles.length} articles\n`);
console.log('='.repeat(80));

const issues = {
  noKeywordInHeaders: [],
  noKeywordBolded: [],
  noExternalLinks: [],
  fewInternalLinks: [],
  noHeroImage: [],
  keywordCountLow: [],
};

const allSlugs = articleFiles.map(f => f.replace('.js', ''));

for (const file of articleFiles) {
  const filePath = path.join(articlesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const slug = file.replace('.js', '');

  // Extract key fields using regex (since we can't import ESM easily)
  const titleMatch = content.match(/title:\s*[`'"]([^`'"]+)[`'"]/);
  const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
  const bodyMatch = content.match(/body_content:\s*`([\s\S]*?)`\s*,\s*\n\s*table_of_contents/);
  const heroImageMatch = content.match(/hero_image_url:\s*[`'"]([^`'"]+)[`'"]/);
  const relatedMatch = content.match(/related_articles:\s*\[([\s\S]*?)\]/);

  const title = titleMatch ? titleMatch[1] : '';
  const body = bodyMatch ? bodyMatch[1] : '';

  // Get primary keyword (first in list, or derive from slug)
  let primaryKeyword = slug.replace(/-/g, ' ').replace(/(guide|visa|complete|2026)/gi, '').trim();
  if (keywordsMatch) {
    const keywordsList = keywordsMatch[1].match(/[`'"]([^`'"]+)[`'"]/g);
    if (keywordsList && keywordsList.length > 0) {
      primaryKeyword = keywordsList[0].replace(/[`'"]/g, '');
    }
  }

  // Check 1: Keyword in H2 headers
  const h2Headers = body.match(/<h2[^>]*>([^<]+)<\/h2>/gi) || [];
  const keywordInHeader = h2Headers.some(h =>
    h.toLowerCase().includes(primaryKeyword.split(' ')[0].toLowerCase())
  );
  if (!keywordInHeader && h2Headers.length > 0) {
    issues.noKeywordInHeaders.push({ slug, keyword: primaryKeyword, headers: h2Headers.slice(0, 3) });
  }

  // Check 2: Keyword bolded in copy
  const boldedTexts = body.match(/<strong>([^<]+)<\/strong>/gi) || [];
  const keywordBolded = boldedTexts.some(b =>
    b.toLowerCase().includes(primaryKeyword.split(' ')[0].toLowerCase())
  );
  if (!keywordBolded) {
    issues.noKeywordBolded.push({ slug, keyword: primaryKeyword });
  }

  // Check 3: Keyword count in body
  const keywordRegex = new RegExp(primaryKeyword.split(' ')[0], 'gi');
  const keywordCount = (body.match(keywordRegex) || []).length;
  if (keywordCount < 4) {
    issues.keywordCountLow.push({ slug, keyword: primaryKeyword, count: keywordCount });
  }

  // Check 4: External links (high authority)
  const externalLinks = body.match(/href=["']https?:\/\/(?!relocation\.quest)[^"']+["']/gi) || [];
  if (externalLinks.length === 0) {
    issues.noExternalLinks.push({ slug });
  }

  // Check 5: Internal links (related_articles)
  const relatedArticles = relatedMatch ? relatedMatch[1].match(/[`'"]([^`'"]+)[`'"]/g) || [] : [];
  const validRelated = relatedArticles.filter(r => {
    const cleanSlug = r.replace(/[`'"]/g, '');
    return allSlugs.includes(cleanSlug);
  });
  if (validRelated.length < 2) {
    issues.fewInternalLinks.push({ slug, count: validRelated.length });
  }

  // Check 6: Hero image
  if (!heroImageMatch || !heroImageMatch[1].includes('unsplash')) {
    issues.noHeroImage.push({ slug });
  }
}

// Print Report
console.log('\n❌ NO KEYWORD IN H2 HEADERS:', issues.noKeywordInHeaders.length);
issues.noKeywordInHeaders.slice(0, 5).forEach(i => {
  console.log(`   - ${i.slug} (keyword: "${i.keyword}")`);
});
if (issues.noKeywordInHeaders.length > 5) console.log(`   ... and ${issues.noKeywordInHeaders.length - 5} more`);

console.log('\n❌ KEYWORD NOT BOLDED:', issues.noKeywordBolded.length);
issues.noKeywordBolded.slice(0, 5).forEach(i => {
  console.log(`   - ${i.slug} (keyword: "${i.keyword}")`);
});
if (issues.noKeywordBolded.length > 5) console.log(`   ... and ${issues.noKeywordBolded.length - 5} more`);

console.log('\n❌ KEYWORD COUNT < 4:', issues.keywordCountLow.length);
issues.keywordCountLow.slice(0, 5).forEach(i => {
  console.log(`   - ${i.slug} (count: ${i.count}, keyword: "${i.keyword}")`);
});
if (issues.keywordCountLow.length > 5) console.log(`   ... and ${issues.keywordCountLow.length - 5} more`);

console.log('\n❌ NO EXTERNAL AUTHORITY LINKS:', issues.noExternalLinks.length);
if (issues.noExternalLinks.length > 0) {
  console.log(`   ALL ${issues.noExternalLinks.length} articles missing external links`);
}

console.log('\n❌ FEW INTERNAL LINKS (<2):', issues.fewInternalLinks.length);
issues.fewInternalLinks.slice(0, 5).forEach(i => {
  console.log(`   - ${i.slug} (has: ${i.count})`);
});
if (issues.fewInternalLinks.length > 5) console.log(`   ... and ${issues.fewInternalLinks.length - 5} more`);

console.log('\n❌ NO/INVALID HERO IMAGE:', issues.noHeroImage.length);
issues.noHeroImage.forEach(i => {
  console.log(`   - ${i.slug}`);
});

console.log('\n' + '='.repeat(80));
console.log('SUMMARY:');
console.log(`  Total articles: ${articleFiles.length}`);
console.log(`  Missing external links: ${issues.noExternalLinks.length} (${Math.round(issues.noExternalLinks.length/articleFiles.length*100)}%)`);
console.log(`  Keyword not bolded: ${issues.noKeywordBolded.length} (${Math.round(issues.noKeywordBolded.length/articleFiles.length*100)}%)`);
console.log(`  Low keyword count: ${issues.keywordCountLow.length} (${Math.round(issues.keywordCountLow.length/articleFiles.length*100)}%)`);
console.log('='.repeat(80));
