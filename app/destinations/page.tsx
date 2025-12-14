import { Metadata } from 'next'
import Link from 'next/link'
import { getAllDestinations } from '@/lib/destinations/data'

export const metadata: Metadata = {
  title: 'Explore Destinations | Relocation Quest',
  description: 'Browse comprehensive relocation guides for 50+ destinations worldwide. Compare visas, cost of living, job markets, and lifestyle.',
  alternates: {
    canonical: 'https://relocation.quest/destinations',
  },
}

export default function DestinationsPage() {
  const destinations = getAllDestinations()

  // Group destinations by region
  const destinationsByRegion = destinations.reduce((acc, dest) => {
    if (!acc[dest.region]) {
      acc[dest.region] = []
    }
    acc[dest.region].push(dest)
    return acc
  }, {} as Record<string, typeof destinations>)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-500 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Explore Destinations</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Comprehensive relocation guides for countries worldwide. Compare visas, costs, job markets, and lifestyle.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-600 mb-1">{destinations.length}</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Visa Options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Job Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations by Region */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(destinationsByRegion).map(([region, dests]) => (
            <div key={region} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span>{region}</span>
                <span className="text-gray-400 text-xl font-normal">({dests.length})</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dests.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}`}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden hover:scale-105"
                  >
                    {/* Hero with gradient and flag */}
                    <div className={`h-40 bg-gradient-to-r ${dest.heroGradient} flex items-center justify-center relative`}>
                      <span className="text-8xl filter drop-shadow-lg group-hover:scale-110 transition-transform">
                        {dest.flag}
                      </span>
                      {dest.featured && (
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-white text-xs font-bold">POPULAR</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{dest.countryName}</h3>
                      <p className="text-gray-600 text-sm mb-4">{dest.heroSubtitle.slice(0, 100)}...</p>

                      {/* Quick highlights */}
                      <div className="space-y-2 mb-4">
                        {dest.highlights.slice(0, 3).map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="text-green-600">{highlight.icon || '✓'}</span>
                            <span>{highlight.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Visa count and cost index */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">{dest.visas.length} visa options</span>
                        <span className="font-bold text-blue-600">
                          {dest.costOfLiving[0]?.costIndex}% of London
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-4">Can't Find Your Destination?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're constantly adding new destinations. Check back soon or request a specific country guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Request a Destination
            </Link>
            <Link
              href="/guides"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-md border-2 border-blue-600"
            >
              Browse Guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
