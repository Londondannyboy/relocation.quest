import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Relocation Companies UK | Best UK-Based Providers',
  description: 'Find the best UK relocation companies for expat moves, corporate relocations, and international transfers. Compare top UK providers offering housing, visa, and moving services.',
  keywords: [
    'relocation companies uk',
    'uk relocation companies',
    'best relocation companies uk',
    'removal companies uk relocation',
    'corporate relocation uk',
    'relocation services uk',
    'expat relocation companies uk',
  ],
  alternates: {
    canonical: 'https://relocation.quest/relocation-companies-uk',
  },
  openGraph: {
    title: 'Best UK Relocation Companies - Expat & Corporate Moves',
    description: 'Compare top UK relocation companies. Expert providers for expat relocation, corporate moves, and international transfers from the UK.',
    type: 'website',
    url: 'https://relocation.quest/relocation-companies-uk',
  },
}

export default function RelocationCompaniesUKPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 via-blue-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🇬🇧</span>
              <span>UK-Based Providers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              UK Relocation Companies
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Find trusted UK-based relocation companies specializing in expat moves, corporate relocations, and international transfers. Get expert local support and competitive pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#providers"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                View UK Companies
              </Link>
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Get Quotes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'UK Providers', value: '50+', icon: '🏢' },
              { label: 'Years Combined', value: '1000+', icon: '📅' },
              { label: 'UK to Worldwide', value: '100+', icon: '🌍' },
              { label: 'Annual Relocations', value: '10k+', icon: '✈️' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use UK Relocation Companies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Using UK Relocation Companies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🇬🇧',
                title: 'UK Expertise',
                description: 'Understand UK employment law, housing market, and visa processes. Expert guidance for UK professionals relocating abroad.',
              },
              {
                icon: '💷',
                title: 'Competitive Pricing',
                description: 'UK-based companies often offer better rates than international firms. No markup from overseas offices.',
              },
              {
                icon: '📞',
                title: 'Local Support',
                description: 'UK-based account managers understand your needs. Easier communication and immediate support during your relocation.',
              },
              {
                icon: '📋',
                title: 'UK Tax Knowledge',
                description: 'Deep understanding of UK tax, national insurance, and pension implications of international relocation.',
              },
              {
                icon: '🏠',
                title: 'UK Housing Knowledge',
                description: 'Experts in UK property market. Help finding rentals, understanding UK tenancy laws, and exit strategies.',
              },
              {
                icon: '🤝',
                title: 'Personal Service',
                description: 'Many UK firms are mid-sized and provide personalized attention. Not just a number in a global system.',
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

      {/* Popular UK Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Most Popular Destinations for UK Professionals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                destination: 'UAE & Middle East',
                flag: '🇦🇪',
                why: 'Tax-free salaries, career growth, expat lifestyle',
                companies: '15+ UK specialists',
                avgCost: '£15k - £40k',
              },
              {
                destination: 'Australia',
                flag: '🇦🇺',
                why: 'Quality of life, skilled worker visas, English-speaking',
                companies: '12+ UK specialists',
                avgCost: '£12k - £35k',
              },
              {
                destination: 'USA',
                flag: '🗽',
                why: 'Career advancement, high salaries, business opportunities',
                companies: '18+ UK specialists',
                avgCost: '£18k - £50k',
              },
              {
                destination: 'Europe',
                flag: '🇪🇺',
                why: 'Work-life balance, proximity to UK, cultural appeal',
                companies: '20+ UK specialists',
                avgCost: '£8k - £25k',
              },
              {
                destination: 'Canada',
                flag: '🇨🇦',
                why: 'Path to residency, family friendly, skilled demand',
                companies: '10+ UK specialists',
                avgCost: '£14k - £38k',
              },
              {
                destination: 'Singapore & Asia',
                flag: '🏯',
                why: 'Financial hub, expat ecosystem, career growth',
                companies: '8+ UK specialists',
                avgCost: '£16k - £45k',
              },
            ].map((dest, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-blue-500 to-red-500 p-6 text-white">
                  <div className="text-5xl mb-2">{dest.flag}</div>
                  <h3 className="text-2xl font-bold">{dest.destination}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{dest.why}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 font-bold">UK Companies Specializing</p>
                      <p className="text-blue-600 font-bold">{dest.companies}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-bold">Average Cost</p>
                      <p className="text-blue-600 font-bold">{dest.avgCost}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top UK Companies */}
      <section id="providers" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Top UK Relocation Companies
          </h2>

          <div className="space-y-8">
            {[
              {
                name: 'Crown Relocations',
                type: 'Global with UK Focus',
                location: 'London, UK',
                specialties: ['Expat relocation', 'Corporate moves', 'All destinations'],
                services: ['Housing', 'Visa support', 'Moving', 'Culture coaching'],
                priceRange: '£15k - £50k',
                coverage: '160+ countries',
                rating: '⭐⭐⭐⭐⭐',
              },
              {
                name: 'Mercer UK',
                type: 'Global with UK Office',
                location: 'London, UK',
                specialties: ['Large relocations', 'Policy development', 'International'],
                services: ['Full-service', 'Customizable', 'Analytics', 'Compliance'],
                priceRange: '£20k - £60k',
                coverage: '180+ countries',
                rating: '⭐⭐⭐⭐⭐',
              },
              {
                name: 'Santa Fe UK',
                type: 'Regional Specialist',
                location: 'Nationwide, UK',
                specialties: ['UK to USA/Canada', 'Domestic moves', 'Cost-effective'],
                services: ['Moving & storage', 'Housing', 'Vehicle relocation'],
                priceRange: '£8k - £30k',
                coverage: 'North America focus',
                rating: '⭐⭐⭐⭐',
              },
              {
                name: 'Brookfield UK',
                type: 'Destination Services',
                location: 'Multiple UK locations',
                specialties: ['Settling-in', 'Housing', 'Local integration'],
                services: ['Housing search', 'Community setup', 'School placement'],
                priceRange: '£10k - £35k',
                coverage: '100+ countries',
                rating: '⭐⭐⭐⭐',
              },
              {
                name: 'Allied Pickfords',
                type: 'Removal & Relocation',
                location: 'Nationwide, UK',
                specialties: ['Moving/logistics', 'Household goods', 'Cost-effective'],
                services: ['Packing & shipping', 'Storage', 'Pet relocation'],
                priceRange: '£5k - £25k',
                coverage: 'Global partnerships',
                rating: '⭐⭐⭐',
              },
              {
                name: 'Shipping & Logistics UK',
                type: 'Logistics Specialist',
                location: 'Multiple UK ports',
                specialties: ['Household shipping', 'Container services', 'Cost-effective'],
                services: ['Shipping only', 'Storage', 'Customs'],
                priceRange: '£3k - £15k',
                coverage: 'All destinations',
                rating: '⭐⭐⭐⭐',
              },
            ].map((company, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-red-500 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{company.name}</h3>
                      <p className="text-blue-100">{company.type}</p>
                    </div>
                    <div className="text-3xl font-bold">{company.rating}</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">About</h4>
                      <p className="text-gray-600 mb-4">{company.location}</p>

                      <h4 className="font-bold text-gray-900 mb-3">Specialties</h4>
                      <ul className="space-y-1 text-gray-700 mb-4">
                        {company.specialties.map((spec, i) => (
                          <li key={i}>• {spec}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Services</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {company.services.map((service, i) => (
                          <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {service}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-600 font-bold">Price Range</p>
                          <p className="text-blue-600 font-bold">{company.priceRange}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-bold">Coverage</p>
                          <p className="text-blue-600 font-bold">{company.coverage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            UK Company Service Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Service</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold">Global Firms</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold">Regional</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-bold">Logistics</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Housing search & placement',
                  'Visa & immigration support',
                  'Moving & household goods',
                  'Cultural integration',
                  'Healthcare setup',
                  'School placement',
                  'Tax planning',
                  'Storage services',
                  'Pet relocation',
                  'Cost-effectiveness',
                ].map((service, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">{service}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="text-blue-600">◐</span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      {service.includes('moving') || service.includes('storage') || service.includes('Pet') ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-600">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">✓ = Included | ◐ = Sometimes | ✗ = Not included</p>
        </div>
      </section>

      {/* Tips for UK Relocation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Tips for Relocating from the UK
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Financial Planning',
                tips: [
                  'Understand tax implications in UK and destination',
                  'Plan for double housing costs (UK temp, destination new)',
                  'Budget for unexpected expenses',
                  'Consider pension and savings impact',
                  'Review travel frequency and costs',
                ],
              },
              {
                title: 'Documentation & Visas',
                tips: [
                  'Get UK references and employment history documented',
                  'Obtain certified copies of important documents',
                  'Check destination visa requirements early',
                  'Plan for medical examinations needed',
                  'Understand work permit processing times',
                ],
              },
              {
                title: 'Property & Housing',
                tips: [
                  'Research housing costs in destination early',
                  'Understand rental market and contract terms',
                  'Consider temporary accommodation first',
                  'Plan for letting out UK property if needed',
                  'Review storage options for belongings',
                ],
              },
              {
                title: 'Logistics & Moving',
                tips: [
                  'Start planning 3+ months in advance',
                  'Get multiple moving quotes',
                  'Use FCA-regulated moving companies',
                  'Insure household goods properly',
                  'Keep detailed inventory of items',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            UK Relocation FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need a UK relocation company if I have an international employer?',
                a: 'Not necessarily, but UK companies understand UK-specific issues like national insurance, pensions, and tax. They can provide valuable local expertise.',
              },
              {
                q: 'What happens to my UK property when I relocate?',
                a: 'You can sell, rent it out, or keep it empty. Consider: tax implications, mortgage terms, tenant requirements, and exit strategy.',
              },
              {
                q: 'How long do UK relocation companies take to complete a move?',
                a: 'Typically 2-4 months from start to completion, depending on destination visa processing and moving logistics.',
              },
              {
                q: 'Are UK companies cheaper than international firms?',
                a: 'Often yes. Mid-sized UK companies offer competitive pricing without international markup. Regional specialists are usually most cost-effective.',
              },
              {
                q: 'What about National Insurance if I relocate abroad?',
                a: 'You may still need to pay UK National Insurance contributions for state pension. Consult with a tax advisor before relocating.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="py-20 bg-gradient-to-br from-blue-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Relocate from the UK?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get quotes from UK-based relocation companies. Benefit from local expertise and competitive pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/corporate-relocation-companies"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Compare UK Companies
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Relocation Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
