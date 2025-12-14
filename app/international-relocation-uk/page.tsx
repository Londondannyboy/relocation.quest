import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'International Relocation UK | UK to Abroad Relocation Services',
  description: 'Complete international relocation services for UK professionals and businesses moving abroad. Expert guidance for UK-based relocations worldwide.',
  keywords: [
    'international relocation uk',
    'relocation services uk',
    'uk relocation abroad',
    'international moving uk',
    'expat relocation services',
  ],
  alternates: {
    canonical: 'https://relocation.quest/international-relocation-uk',
  },
  openGraph: {
    title: 'International Relocation UK - Expert Services for Moving Abroad',
    description: 'Professional international relocation services for UK professionals. From UK to anywhere worldwide with comprehensive support.',
    type: 'website',
    url: 'https://relocation.quest/international-relocation-uk',
  },
}

export default function InternationalRelocationUKPage() {
  return (
    <>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🌍</span>
              <span>Global Relocation Specialists</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              International Relocation UK
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
              Expert international relocation services for UK professionals and companies relocating globally. Comprehensive support from UK to anywhere worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-50 transition shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="/relocation-companies-uk"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                UK Providers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why International Relocation from the UK?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
                title: 'UK Expertise',
                description: 'Service providers understand UK requirements, documentation, and specific relocation needs for UK professionals.',
              },
              {
                icon: '🌐',
                title: 'Global Network',
                description: 'International providers have partnerships worldwide for seamless relocation to any destination.',
              },
              {
                icon: '💼',
                title: 'Professional Support',
                description: 'Experienced in managing UK-specific issues like National Insurance, pensions, and tax considerations.',
              },
              {
                icon: '📋',
                title: 'Documentation Help',
                description: 'Expert guidance on UK qualifications validation, references, and international documentation requirements.',
              },
              {
                icon: '🏠',
                title: 'Housing Solutions',
                description: 'Connect UK professionals with quality housing in international markets with local knowledge.',
              },
              {
                icon: '👥',
                title: 'Community Support',
                description: 'Connect with UK expat communities and professional networks in destination countries.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive International Relocation Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                service: 'Pre-Relocation Consultation',
                icon: '📞',
                details: [
                  'Destination research and information',
                  'Cost of living analysis',
                  'Job market overview',
                  'Visa and immigration guidance',
                  'Financial planning assistance',
                ],
              },
              {
                service: 'Immigration & Legal',
                icon: '📋',
                details: [
                  'Visa sponsorship coordination',
                  'Work permit applications',
                  'Immigration compliance',
                  'Legal documentation support',
                  'Professional licensing guidance',
                ],
              },
              {
                service: 'Housing & Accommodation',
                icon: '🏠',
                details: [
                  'Property search and selection',
                  'Lease negotiation',
                  'Temporary accommodation',
                  'Furnished options',
                  'School area recommendations',
                ],
              },
              {
                service: 'Logistics & Moving',
                icon: '✈️',
                details: [
                  'International moving services',
                  'Household goods shipping',
                  'Vehicle relocation',
                  'Storage solutions',
                  'Pet transportation',
                ],
              },
              {
                service: 'Financial Planning',
                icon: '💰',
                details: [
                  'UK tax implications',
                  'Pension considerations',
                  'Currency exchange',
                  'Banking setup abroad',
                  'Investment coordination',
                ],
              },
              {
                service: 'Settling-In Support',
                icon: '🤝',
                details: [
                  'Cultural orientation',
                  'Healthcare registration',
                  'Utility setup',
                  'School placement',
                  'Community integration',
                ],
              },
            ].map((svc, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-rose-200 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{svc.icon}</div>
                    <h3 className="text-2xl font-bold">{svc.service}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {svc.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Popular Destinations for UK Professionals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: 'Middle East (UAE, Saudi)',
                flag: '🌙',
                reason: 'Tax-free salaries, premium packages',
                expats: '200,000+ UK expats',
                cost: 'High cost but high income',
              },
              {
                country: 'Singapore/Hong Kong',
                flag: '🏯',
                reason: 'Finance hubs, career growth',
                expats: '50,000+ UK expats',
                cost: 'High cost of living',
              },
              {
                country: 'Australia',
                flag: '🇦🇺',
                reason: 'Quality of life, job opportunities',
                expats: '500,000+ UK expats',
                cost: 'Moderate-high cost',
              },
              {
                country: 'Canada',
                flag: '🇨🇦',
                reason: 'Path to residency, work-life balance',
                expats: '300,000+ UK expats',
                cost: 'Moderate cost',
              },
              {
                country: 'USA',
                flag: '🗽',
                reason: 'High salaries, innovation',
                expats: '400,000+ UK expats',
                cost: 'High cost of living',
              },
              {
                country: 'Europe (EU)',
                flag: '🇪🇺',
                reason: 'Proximity to UK, quality of life',
                expats: '700,000+ UK expats',
                cost: 'Varies by country',
              },
            ].map((dest, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <div className="text-4xl mb-2">{dest.flag}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dest.country}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-600 font-bold">Why Choose</p>
                    <p className="text-gray-700">{dest.reason}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">UK Community</p>
                    <p className="text-rose-600 font-bold">{dest.expats}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">Cost</p>
                    <p className="text-gray-700">{dest.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            UK-Specific Relocation Considerations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border-2 border-rose-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Matters</h3>
              <ul className="space-y-3">
                {[
                  'National Insurance contributions',
                  'Pension implications (QROPS)',
                  'UK tax residency status',
                  'Tax-free allowances in destinations',
                  'Currency exchange strategies',
                  'UK property considerations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border-2 border-rose-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Documentation & Visas</h3>
              <ul className="space-y-3">
                {[
                  'UK passport valid for 6+ months',
                  'Certificate of good conduct',
                  'References from UK employers',
                  'Qualifications documentation',
                  'Medical records transfer',
                  'Family visa sponsorship',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold mt-1">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            FAQ - International Relocation from UK
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What documents do I need to relocate internationally from the UK?',
                a: 'Essential documents include valid passport, birth certificate, qualifications, professional licenses, and references. Specific requirements vary by destination.',
              },
              {
                q: 'How do UK National Insurance contributions work abroad?',
                a: 'You may need to pay voluntary National Insurance contributions to maintain state pension eligibility. Consult with HMRC before relocating.',
              },
              {
                q: 'What about my UK pension when I move abroad?',
                a: 'UK pensions continue but may be affected by non-residency. Some countries allow QROPS transfers. Seek financial advice before moving.',
              },
              {
                q: 'Can I sell my UK property before relocating?',
                a: 'Yes, many UK professionals sell their property before relocating. Others rent it out as an investment. Decide based on your long-term plans.',
              },
              {
                q: 'How long does the complete relocation process take?',
                a: 'Typically 2-6 months from job offer to relocation, depending on visa processing times and visa type required by your destination.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-rose-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rose-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Relocate Internationally from the UK?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Professional relocation services designed specifically for UK professionals moving globally.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/relocation-companies-uk"
              className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-50 transition shadow-lg"
            >
              Find UK Relocation Providers
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Browse International Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
