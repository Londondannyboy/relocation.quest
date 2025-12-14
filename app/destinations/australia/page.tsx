import { Metadata } from 'next'
import Link from 'next/link'
import { getDestinationBySlug } from '@/lib/destinations/data'
import { DestinationHero } from '@/components/destinations/DestinationHero'
import { QuickFacts } from '@/components/destinations/QuickFacts'
import { VisaOptions } from '@/components/destinations/VisaOptions'
import { CostOfLiving } from '@/components/destinations/CostOfLiving'
import { FAQSection } from '@/components/destinations/FAQSection'

const destination = getDestinationBySlug('australia')!

export const metadata: Metadata = {
  title: destination.metaTitle || `Moving to ${destination.countryName} | Relocation Quest`,
  description: destination.metaDescription || destination.heroSubtitle,
  alternates: {
    canonical: `https://relocation.quest/destinations/${destination.slug}`,
  },
}

export default function AustraliaPage() {
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
          <h2 className="text-3xl font-bold mb-6">Why Relocate to Australia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-orange-600 text-xl mt-0.5">{highlight.icon || '✓'}</span>
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
                    <p className="text-sm text-gray-600">Avg Tech Salary</p>
                    <p className="text-2xl font-bold">AUD ${destination.jobMarket.avgSalaryTech?.toLocaleString()}/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vacation Days</p>
                    <p className="text-2xl font-bold">{destination.jobMarket.vacationDaysStandard} days + 10 public holidays</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <FAQSection faqs={destination.faqs} />

        <section className="py-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Australia?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Check your skilled migration eligibility and explore opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs?country=australia" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg">
                Browse Australia Jobs
              </Link>
              <Link href="/services?country=australia" className="bg-orange-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700/70 transition-all border border-white/20">
                Find Relocation Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
