import { Metadata } from 'next';
import Link from 'next/link';
import { neon } from '@neondatabase/serverless';

export const metadata: Metadata = {
  title: 'Relocation Destinations | Relocation Quest',
  description: 'Explore our comprehensive guides to the best countries for relocation. Compare visas, cost of living, and lifestyle across 17+ destinations.',
  alternates: {
    canonical: 'https://relocation.quest/destinations',
  },
};

interface Destination {
  slug: string;
  country_name: string;
  flag: string;
  region: string;
  hero_subtitle: string;
  hero_image_url: string;
}

async function getDestinations(): Promise<Destination[]> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return [];

  const sql = neon(databaseUrl);
  const destinations = await sql`
    SELECT slug, country_name, flag, region, hero_subtitle, hero_image_url
    FROM destinations
    WHERE enabled = true
    ORDER BY priority DESC, country_name ASC
  `;

  return destinations as Destination[];
}

export default async function DestinationsPage() {
  const destinations = await getDestinations();

  // Group by region
  const byRegion = destinations.reduce((acc, dest) => {
    const region = dest.region || 'Other';
    if (!acc[region]) acc[region] = [];
    acc[region].push(dest);
    return acc;
  }, {} as Record<string, Destination[]>);

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Comprehensive relocation guides for {destinations.length}+ countries.
            Compare visas, cost of living, and lifestyle to find your perfect destination.
          </p>
        </div>
      </div>

      {/* Destinations by Region */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {Object.entries(byRegion).map(([region, dests]) => (
          <section key={region} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{region}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dests.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destinations/${dest.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="aspect-[16/10] relative">
                    {dest.hero_image_url ? (
                      <img
                        src={dest.hero_image_url}
                        alt={dest.country_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-stone-600 to-stone-800" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{dest.flag}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {dest.country_name}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-1">
                          {dest.hero_subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
