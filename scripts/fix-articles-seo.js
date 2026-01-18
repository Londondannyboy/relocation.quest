/**
 * SEO Fix Script for Articles
 * 1. Adds external authority links (government + tourism sites)
 * 2. Bolds the primary keyword in introduction
 * 3. Ensures minimum 3 related articles
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, 'data/articles');

// Authority links by country/region
const authorityLinks = {
  // Europe
  'albania': {
    immigration: 'https://e-albania.al',
    tourism: 'https://albania.al',
    name: 'Albania'
  },
  'austria': {
    immigration: 'https://www.migration.gv.at',
    tourism: 'https://www.austria.info',
    name: 'Austria'
  },
  'belgium': {
    immigration: 'https://www.belgium.be/en/family/residence_documents_for_belgium',
    tourism: 'https://www.visitbelgium.com',
    name: 'Belgium'
  },
  'croatia': {
    immigration: 'https://mup.gov.hr/aliens-702/702',
    tourism: 'https://croatia.hr',
    name: 'Croatia'
  },
  'cyprus': {
    immigration: 'https://www.moi.gov.cy/moi/crmd/crmd.nsf',
    tourism: 'https://www.visitcyprus.com',
    name: 'Cyprus'
  },
  'czech': {
    immigration: 'https://www.mvcr.cz/mvcren/',
    tourism: 'https://www.czechtourism.com',
    name: 'Czech Republic'
  },
  'denmark': {
    immigration: 'https://www.nyidanmark.dk',
    tourism: 'https://www.visitdenmark.com',
    name: 'Denmark'
  },
  'estonia': {
    immigration: 'https://www.politsei.ee/en/',
    tourism: 'https://www.visitestonia.com',
    name: 'Estonia'
  },
  'finland': {
    immigration: 'https://migri.fi/en/home',
    tourism: 'https://www.visitfinland.com',
    name: 'Finland'
  },
  'france': {
    immigration: 'https://www.service-public.fr/particuliers/vosdroits/N110',
    tourism: 'https://www.france.fr',
    name: 'France'
  },
  'georgia': {
    immigration: 'https://www.geoconsul.gov.ge',
    tourism: 'https://georgia.travel',
    name: 'Georgia'
  },
  'germany': {
    immigration: 'https://www.make-it-in-germany.com',
    tourism: 'https://www.germany.travel',
    name: 'Germany'
  },
  'greece': {
    immigration: 'https://www.mfa.gr/en/visas/',
    tourism: 'https://www.visitgreece.gr',
    name: 'Greece'
  },
  'hungary': {
    immigration: 'https://www.bmbah.hu',
    tourism: 'https://visithungary.com',
    name: 'Hungary'
  },
  'iceland': {
    immigration: 'https://utl.is/index.php/en/',
    tourism: 'https://www.visiticeland.com',
    name: 'Iceland'
  },
  'ireland': {
    immigration: 'https://www.irishimmigration.ie',
    tourism: 'https://www.ireland.com',
    name: 'Ireland'
  },
  'italy': {
    immigration: 'https://vistoperitalia.esteri.it',
    tourism: 'https://www.italia.it',
    name: 'Italy'
  },
  'latvia': {
    immigration: 'https://www.pmlp.gov.lv',
    tourism: 'https://www.latvia.travel',
    name: 'Latvia'
  },
  'malta': {
    immigration: 'https://www.identitymalta.com',
    tourism: 'https://www.visitmalta.com',
    name: 'Malta'
  },
  'montenegro': {
    immigration: 'https://www.gov.me/en/mup',
    tourism: 'https://www.montenegro.travel',
    name: 'Montenegro'
  },
  'netherlands': {
    immigration: 'https://ind.nl/en',
    tourism: 'https://www.holland.com',
    name: 'Netherlands'
  },
  'norway': {
    immigration: 'https://www.udi.no/en/',
    tourism: 'https://www.visitnorway.com',
    name: 'Norway'
  },
  'poland': {
    immigration: 'https://www.gov.pl/web/udsc-en',
    tourism: 'https://www.poland.travel',
    name: 'Poland'
  },
  'portugal': {
    immigration: 'https://www.sef.pt',
    tourism: 'https://www.visitportugal.com',
    name: 'Portugal'
  },
  'romania': {
    immigration: 'https://igi.mai.gov.ro',
    tourism: 'https://romaniatourism.com',
    name: 'Romania'
  },
  'spain': {
    immigration: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Visados.aspx',
    tourism: 'https://www.spain.info',
    name: 'Spain'
  },
  'sweden': {
    immigration: 'https://www.migrationsverket.se/English.html',
    tourism: 'https://visitsweden.com',
    name: 'Sweden'
  },
  'switzerland': {
    immigration: 'https://www.sem.admin.ch/sem/en/home.html',
    tourism: 'https://www.myswitzerland.com',
    name: 'Switzerland'
  },
  'uk': {
    immigration: 'https://www.gov.uk/browse/visas-immigration',
    tourism: 'https://www.visitbritain.com',
    name: 'United Kingdom'
  },
  // Asia
  'japan': {
    immigration: 'https://www.moj.go.jp/isa/index.html',
    tourism: 'https://www.japan.travel',
    name: 'Japan'
  },
  'south-korea': {
    immigration: 'https://www.immigration.go.kr/immigration_eng/index.do',
    tourism: 'https://english.visitkorea.or.kr',
    name: 'South Korea'
  },
  'taiwan': {
    immigration: 'https://www.immigration.gov.tw/5475/',
    tourism: 'https://www.taiwan.net.tw',
    name: 'Taiwan'
  },
  'thailand': {
    immigration: 'https://www.immigration.go.th',
    tourism: 'https://www.tourismthailand.org',
    name: 'Thailand'
  },
  'vietnam': {
    immigration: 'https://evisa.xuatnhapcanh.gov.vn',
    tourism: 'https://vietnam.travel',
    name: 'Vietnam'
  },
  'malaysia': {
    immigration: 'https://www.imi.gov.my',
    tourism: 'https://www.malaysia.travel',
    name: 'Malaysia'
  },
  'indonesia': {
    immigration: 'https://www.imigrasi.go.id',
    tourism: 'https://www.indonesia.travel',
    name: 'Indonesia'
  },
  'singapore': {
    immigration: 'https://www.ica.gov.sg',
    tourism: 'https://www.visitsingapore.com',
    name: 'Singapore'
  },
  'dubai': {
    immigration: 'https://www.gdrfad.gov.ae',
    tourism: 'https://www.visitdubai.com',
    name: 'UAE/Dubai'
  },
  'uae': {
    immigration: 'https://www.gdrfad.gov.ae',
    tourism: 'https://www.visitdubai.com',
    name: 'UAE/Dubai'
  },
  // Americas
  'mexico': {
    immigration: 'https://www.inm.gob.mx',
    tourism: 'https://www.visitmexico.com',
    name: 'Mexico'
  },
  'costa-rica': {
    immigration: 'https://www.migracion.go.cr',
    tourism: 'https://www.visitcostarica.com',
    name: 'Costa Rica'
  },
  'colombia': {
    immigration: 'https://www.migracioncolombia.gov.co',
    tourism: 'https://colombia.travel',
    name: 'Colombia'
  },
  'brazil': {
    immigration: 'https://www.gov.br/pf/pt-br',
    tourism: 'https://visitbrasil.com',
    name: 'Brazil'
  },
  'argentina': {
    immigration: 'https://www.migraciones.gov.ar',
    tourism: 'https://www.argentina.travel',
    name: 'Argentina'
  },
  'chile': {
    immigration: 'https://www.extranjeria.gob.cl',
    tourism: 'https://chile.travel',
    name: 'Chile'
  },
  'canada': {
    immigration: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
    tourism: 'https://www.destinationcanada.com',
    name: 'Canada'
  },
  // Caribbean
  'barbados': {
    immigration: 'https://www.immigration.gov.bb',
    tourism: 'https://www.visitbarbados.org',
    name: 'Barbados'
  },
  'bermuda': {
    immigration: 'https://www.gov.bm/department/immigration',
    tourism: 'https://www.gotobermuda.com',
    name: 'Bermuda'
  },
  'saint-kitts': {
    immigration: 'https://www.ciu.gov.kn',
    tourism: 'https://www.stkittstourism.kn',
    name: 'Saint Kitts and Nevis'
  },
  // Africa & Indian Ocean
  'south-africa': {
    immigration: 'http://www.dha.gov.za',
    tourism: 'https://www.southafrica.net',
    name: 'South Africa'
  },
  'mauritius': {
    immigration: 'https://passport.govmu.org',
    tourism: 'https://mauritiusnow.com',
    name: 'Mauritius'
  },
  'seychelles': {
    immigration: 'https://www.ics.gov.sc',
    tourism: 'https://www.seychelles.travel',
    name: 'Seychelles'
  },
  // Oceania
  'australia': {
    immigration: 'https://immi.homeaffairs.gov.au',
    tourism: 'https://www.australia.com',
    name: 'Australia'
  },
  'new-zealand': {
    immigration: 'https://www.immigration.govt.nz',
    tourism: 'https://www.newzealand.com',
    name: 'New Zealand'
  },
};

// All existing slugs for internal linking
const allSlugs = fs.readdirSync(articlesDir).filter(f => f.endsWith('.js')).map(f => f.replace('.js', ''));

// Similar articles by region/theme for internal linking
const articleClusters = {
  'europe-nomad': ['portugal-relocation-guide-nomad', 'spain-relocation-guide-guide', 'italy-digital-nomad-visa-guide', 'croatia-digital-nomad-visa-guide', 'greece-golden-visa-guide'],
  'balkans': ['albania-digital-nomad-visa', 'montenegro-digital-nomad-visa', 'croatia-digital-nomad-visa-guide', 'georgia-digital-nomad-visa-guide', 'hungary-digital-nomad-visa-guide'],
  'nordic': ['sweden-relocation-guide', 'norway-remote-work-visa-2026-svalbard-option', 'finland-relocation-guide-guide', 'denmark-relocation-guide', 'iceland-digital-nomad'],
  'western-europe': ['netherlands-relocation-guide', 'germany-relocation-guide', 'belgium-relocation-guide', 'france-visit-visa', 'ireland-relocation-guide', 'uk-relocation-guide-nomad', 'switzerland-relocation-guide-nomad'],
  'central-europe': ['austria-digital-nomad-visa-requirements-complete-guide', 'germany-relocation-guide', 'switzerland-relocation-guide-nomad', 'hungary-digital-nomad-visa-guide', 'poland-relocation-guide-guide'],
  'southeast-asia': ['thailand-digital-nomad-visa-guide', 'vietnam-digital-nomad-guide', 'indonesia-bali-digital-nomad-visa', 'malaysia-digital-nomad-guide'],
  'east-asia': ['japan-digital-nomad-visa-guide', 'south-korea-digital-nomad-visa-guide', 'taiwan-gold-card-guide', 'singapore-expat-guide'],
  'caribbean': ['barbados-welcome-stamp', 'bermuda-digital-nomad-visa', 'saint-kitts-visa-requirements-guide'],
  'indian-ocean': ['mauritius-premium-visa', 'seychelles-digital-nomad', 'dubai-uae-relocation-guide', 'south-africa-digital-nomad'],
  'latin-america': ['mexico-digital-nomad-guide', 'costa-rica-digital-nomad-visa', 'colombia-relocation-guide-guide', 'brazil-relocation-guide-nomad', 'argentina-relocation-guide', 'chile-digital-nomad-visa-complete-guide'],
  'oceania': ['australia-relocation-guide', 'new-zealand-relocation-guide'],
  'americas-north': ['canada-relocation-guide-guide', 'mexico-digital-nomad-guide', 'usa-relocation-guide'],
  'cyprus': ['cyprus-digital-nomad-visa-2026', 'cyprus-category-f-visa', 'cyprus-requirements-visa', 'cyprus-visit-visa-requirements'],
  'uk-netherlands': ['moving-from-the-netherlands-to-the-uk', 'moving-from-the-uk-to-the-netherlands', 'netherlands-relocation-guide', 'uk-relocation-guide-nomad'],
};

function getCountryKey(slug) {
  // Extract country from slug
  const parts = slug.toLowerCase();
  for (const key of Object.keys(authorityLinks)) {
    // Check both hyphenated and non-hyphenated forms
    if (parts.includes(key) || parts.includes(key.replace(/-/g, ''))) {
      return key;
    }
  }
  // Special cases
  if (parts.includes('bali')) return 'indonesia';
  if (parts.includes('uae') || parts.includes('dubai')) return 'uae';
  return null;
}

function getRelatedArticles(slug, currentRelated) {
  // Find which cluster this article belongs to
  let clusterArticles = [];
  for (const articles of Object.values(articleClusters)) {
    if (articles.includes(slug)) {
      clusterArticles = articles.filter(a => a !== slug && allSlugs.includes(a));
      break;
    }
  }

  // If not in a cluster, find similar by country/region
  if (clusterArticles.length === 0) {
    const countryKey = getCountryKey(slug);
    if (countryKey) {
      clusterArticles = allSlugs.filter(s =>
        s !== slug && s.includes(countryKey.split('-')[0])
      );
    }
  }

  // Combine with existing, prefer current if they exist
  const existing = currentRelated.filter(r => allSlugs.includes(r));
  const combined = [...new Set([...existing, ...clusterArticles])].filter(s => s !== slug);

  return combined.slice(0, 3);
}

function processArticle(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const slug = path.basename(filePath, '.js');
  const countryKey = getCountryKey(slug);

  if (!countryKey || !authorityLinks[countryKey]) {
    console.log(`⚠️  No authority links for: ${slug}`);
    return false;
  }

  const links = authorityLinks[countryKey];

  // 1. Add external authority links section before closing body_content
  // Check if external links already exist
  if (!content.includes('Official Resources') && !content.includes('official-resources')) {
    const resourcesSection = `

<h2 id="official-resources">Official Resources</h2>
<p>For the most current and authoritative information, consult these official sources:</p>
<ul>
  <li><a href="${links.immigration}" target="_blank" rel="noopener"><strong>${links.name} Immigration</strong></a> - Official visa and immigration information</li>
  <li><a href="${links.tourism}" target="_blank" rel="noopener"><strong>${links.name} Tourism</strong></a> - Official tourism board with travel resources</li>
</ul>
`;

    // Insert before the last backtick of body_content
    content = content.replace(
      /(\s*`,\s*\n\s*table_of_contents:)/,
      resourcesSection + '$1'
    );

    // Add to table_of_contents
    content = content.replace(
      /(table_of_contents:\s*\[)/,
      "$1\n    { id: 'official-resources', title: 'Official Resources', level: 2 },"
    );
  }

  // 2. Bold the primary keyword in body_content if not already
  const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
  if (keywordsMatch) {
    const keywordsList = keywordsMatch[1].match(/['"]([^'"]+)['"]/g);
    if (keywordsList && keywordsList.length > 0) {
      const primaryKeyword = keywordsList[0].replace(/['"]/g, '');
      const keywordWord = primaryKeyword.split(' ')[0].toLowerCase();

      // Check if any form of keyword is bolded in body_content
      const bodyMatch = content.match(/body_content:\s*`([\s\S]*?)`\s*,\s*\n\s*table_of_contents/);
      if (bodyMatch) {
        const body = bodyMatch[1];
        const strongRegex = new RegExp(`<strong>[^<]*${keywordWord}[^<]*</strong>`, 'i');

        if (!strongRegex.test(body)) {
          // Find first paragraph and bold keyword there
          const firstParaMatch = body.match(/<p>([^<]+)<\/p>/);
          if (firstParaMatch) {
            const firstPara = firstParaMatch[1];
            const keywordRegex = new RegExp(`\\b(${keywordWord}\\w*)\\b`, 'i');
            const newPara = firstPara.replace(keywordRegex, '<strong>$1</strong>');
            if (newPara !== firstPara) {
              const newBody = body.replace(
                `<p>${firstPara}</p>`,
                `<p>${newPara}</p>`
              );
              content = content.replace(
                /body_content:\s*`([\s\S]*?)`(\s*,\s*\n\s*table_of_contents)/,
                `body_content: \`${newBody}\`$2`
              );
            }
          }
        }
      }
    }
  }

  // 3. Update related_articles to ensure 3 valid links
  const relatedMatch = content.match(/related_articles:\s*\[([\s\S]*?)\]/);
  let currentRelated = [];
  if (relatedMatch) {
    const relatedList = relatedMatch[1].match(/['"]([^'"]+)['"]/g);
    if (relatedList) {
      currentRelated = relatedList.map(r => r.replace(/['"]/g, ''));
    }
  }

  const newRelated = getRelatedArticles(slug, currentRelated);
  if (newRelated.length > 0) {
    const relatedStr = newRelated.map(r => `'${r}'`).join(',\n    ');
    content = content.replace(
      /related_articles:\s*\[[\s\S]*?\]/,
      `related_articles: [\n    ${relatedStr}\n  ]`
    );
  }

  fs.writeFileSync(filePath, content);
  return true;
}

// Process all articles
console.log('🔧 Fixing SEO issues in all articles...\n');

let fixed = 0;
let skipped = 0;

const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.js'));

for (const file of articleFiles) {
  const filePath = path.join(articlesDir, file);
  if (processArticle(filePath)) {
    console.log(`✅ Fixed: ${file}`);
    fixed++;
  } else {
    skipped++;
  }
}

console.log(`\n📊 Results: ${fixed} fixed, ${skipped} skipped`);
console.log('\n⚡ Run the audit again to verify fixes.');
