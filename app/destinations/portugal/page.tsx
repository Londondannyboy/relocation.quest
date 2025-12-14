import { Metadata } from 'next'
import Link from 'next/link'
import { getDestinationBySlug } from '@/lib/destinations/data'
import { DestinationHero } from '@/components/destinations/DestinationHero'
import { QuickFacts } from '@/components/destinations/QuickFacts'
import { VisaOptions } from '@/components/destinations/VisaOptions'
import { CostOfLiving } from '@/components/destinations/CostOfLiving'
import { FAQSection } from '@/components/destinations/FAQSection'

const destination = getDestinationBySlug('portugal')!

export const metadata: Metadata = {
  title: destination.metaTitle || `Moving to ${destination.countryName} | Relocation Quest`,
  description: destination.metaDescription || destination.heroSubtitle,
  alternates: {
    canonical: `https://relocation.quest/destinations/${destination.slug}`,
  },
}

export default function PortugalPage() {
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

        {/* Why Move Here */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">Why Move to Portugal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-green-600 text-xl mt-0.5">{highlight.icon || '✓'}</span>
                <span className="text-gray-700">{highlight.text}</span>
              </div>
            ))}
          </div>
        </section>

        <VisaOptions visas={destination.visas} />

        <CostOfLiving costs={destination.costOfLiving} countryName={destination.countryName} />

        {/* Job Market */}
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
                  {destination.jobMarket.avgSalaryTech && (
                    <div>
                      <p className="text-sm text-gray-600">Avg Tech Salary</p>
                      <p className="text-2xl font-bold">€{destination.jobMarket.avgSalaryTech.toLocaleString()}/year</p>
                    </div>
                  )}
                  {destination.jobMarket.vacationDaysStandard && (
                    <div>
                      <p className="text-sm text-gray-600">Vacation Days</p>
                      <p className="text-2xl font-bold">{destination.jobMarket.vacationDaysStandard} days/year</p>
                    </div>
                  )}
                  {destination.jobMarket.avgWorkHoursWeek && (
                    <div>
                      <p className="text-sm text-gray-600">Work Week</p>
                      <p className="text-2xl font-bold">{destination.jobMarket.avgWorkHoursWeek} hours</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {destination.jobMarket.growingSectors && destination.jobMarket.growingSectors.length > 0 && (
              <div className="mt-6 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-lg mb-3">🚀 Growing Sectors</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.jobMarket.growingSectors.map((sector, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <FAQSection faqs={destination.faqs} />

        {/* CTA Buttons */}
        <section className="py-12">
          <div className="bg-gradient-to-r from-green-600 to-red-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Portugal?</h2>
            <p className="text-xl text-green-100 mb-8">
              Explore jobs, connect with services, and start your relocation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/jobs?country=portugal"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-lg"
              >
                Browse Portugal Jobs
              </Link>
              <Link
                href="/services?country=portugal"
                className="bg-green-700/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700/70 transition-all border border-white/20"
              >
                Find Relocation Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
