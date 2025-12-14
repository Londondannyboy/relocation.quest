import { Metadata } from 'next'
import Link from 'next/link'
import { getDestinationBySlug } from '@/lib/destinations/data'
import { DestinationHero } from '@/components/destinations/DestinationHero'
import { QuickFacts } from '@/components/destinations/QuickFacts'
import { VisaOptions } from '@/components/destinations/VisaOptions'
import { CostOfLiving } from '@/components/destinations/CostOfLiving'
import { FAQSection } from '@/components/destinations/FAQSection'

const destination = getDestinationBySlug('cyprus')!

export const metadata: Metadata = {
  title: destination.metaTitle || `Moving to ${destination.countryName} | Relocation Quest`,
  description: destination.metaDescription || destination.heroSubtitle,
  alternates: {
    canonical: `https://relocation.quest/destinations/${destination.slug}`,
  },
}

export default function CyprusPage() {
  return (
    <main className="min-h-screen bg-white">
      <DestinationHero
        title={destination.heroTitle}
        subtitle={destination.heroSubtitle}
        gradient={destination.heroGradient}
        flag={destination.flag}
        countryName={destination.countryName}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <QuickFacts facts={destination.quickFacts} />

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">Why Move to Cyprus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-600 text-xl mt-0.5">{highlight.icon || '✓'}</span>
                <span className="text-gray-700">{highlight.text}</span>
              </div>
            ))}
          </div>
        </section>

        <VisaOptions visas={destination.visas} />
        <CostOfLiving costs={destination.costOfLiving} countryName={destination.countryName} />

        {destination.jobMarket && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Job Market</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Top Industries</h3>
                <ul className="space-y-2">
                  {destination.jobMarket.topIndustries.map((industry, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">•</span>
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Key Stats</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Corporate Tax Rate</p>
                    <p className="text-2xl font-bold text-green-600">12.5% (Lowest in EU)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Sunshine Days/Year</p>
                    <p className="text-2xl font-bold">340 days ☀️</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <FAQSection faqs={destination.faqs} />

        <section className="py-12">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Cyprus?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Discover digital nomad opportunities and low-tax island living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs?country=cyprus" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
                Browse Cyprus Jobs
              </Link>
              <Link href="/services?country=cyprus" className="bg-blue-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700/70 transition-all border border-white/20">
                Find Relocation Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
