import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Corporate Relocation Agents London | Executive Relocation Services',
  description: 'Find top corporate relocation agents in London. Expert providers for executive relocations, corporate employee moves, and international transfers from London. Premium service.',
  keywords: [
    'corporate relocation agents london',
    'london relocation agents',
    'executive relocation london',
    'corporate relocation london',
    'relocation agents london',
    'london moving companies',
  ],
  alternates: {
    canonical: 'https://relocation.quest/corporate-relocation-agents-london',
  },
  openGraph: {
    title: 'Corporate Relocation Agents London - Executive Services',
    description: 'Premier corporate relocation agents in London specializing in executive and high-value relocations. Expert service for London-based businesses.',
    type: 'website',
    url: 'https://relocation.quest/corporate-relocation-agents-london',
  },
}

export default function CorporateRelocationAgentsLondonPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-800 via-blue-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🏛️</span>
              <span>London Specialists</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Corporate Relocation Agents London
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Premium corporate relocation agents serving London's leading businesses. Executive-level service for relocating high-value employees, managing international assignments, and corporate mobility programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#agents"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Find Agents
              </Link>
              <Link
                href="/corporate-relocation-companies"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Compare Companies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-slate-100 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Top Agents', value: '20+', icon: '⭐' },
              { label: 'London HQ', value: '100%', icon: '📍' },
              { label: 'Avg Cost', value: '£25k-£60k', icon: '💷' },
              { label: 'Executive Focus', value: 'Premium', icon: '👔' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-slate-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why London Specialists */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose London-Based Relocation Agents?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏙️',
                title: 'London Market Expertise',
                description: 'Deep understanding of London property market, neighborhoods, schools, and living costs. Expert guidance on best areas for expat living.',
              },
              {
                icon: '👥',
                title: 'Executive Service',
                description: 'Premium services designed for C-suite relocations. Personalized attention, concierge service, and high-touch account management.',
              },
              {
                icon: '🌍',
                title: 'Global Network',
                description: 'London-based agents with worldwide connections. Expertise managing relocations to/from London and international assignments.',
              },
              {
                icon: '⚡',
                title: 'Immediate Support',
                description: 'Same-timezone support. Local agents available for in-person meetings, property viewings, and immediate assistance.',
              },
              {
                icon: '📊',
                title: 'Business Understanding',
                description: 'Agents based in London understand corporate culture, business relocations, and executive needs.',
              },
              {
                icon: '💼',
                title: 'Premium Experience',
                description: 'Accustomed to serving multinational firms and executives. Proven track record with high-value relocations.',
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

      {/* Service Offerings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Premium Relocation Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                service: 'Executive Housing Solutions',
                details: 'Luxury apartment placement in prime London neighborhoods. Pre-furnished options, premium buildings, concierge services.',
              },
              {
                service: 'Corporate Account Management',
                details: 'Dedicated account managers for corporate programs. Volume discounts, customized services, performance reporting.',
              },
              {
                service: 'International Assignment Support',
                details: 'Complete support for expatriate assignments. Visa coordination, tax planning, cultural integration programs.',
              },
              {
                service: 'Executive Mobility Programs',
                details: 'Custom relocation programs for C-suite and senior management. Premium packages with full concierge support.',
              },
              {
                service: 'Spouse/Family Support',
                details: 'Job placement assistance for trailing spouses, school placement, family integration services.',
              },
              {
                service: 'London to Global Moves',
                details: 'Expertise relocating London-based executives globally. Coordination with worldwide partner networks.',
              },
            ].map((offering, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.service}</h3>
                <p className="text-gray-600">{offering.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top London Agents */}
      <section id="agents" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Leading Corporate Relocation Agents in London
          </h2>

          <div className="space-y-8">
            {[
              {
                name: 'Mercer Relocation - London Office',
                type: 'Global Leader',
                specialty: 'Executive & corporate relocations',
                coverage: 'Worldwide',
                priceRange: '£25k - £70k+',
                strengths: ['Premium service', 'Global network', 'Executive expertise'],
              },
              {
                name: 'Crown Relocations - London',
                type: 'Global Specialist',
                specialty: 'Corporate mobility programs',
                coverage: '160+ countries',
                priceRange: '£20k - £65k+',
                strengths: ['Dedicated account managers', 'Volume discounts', 'Customizable programs'],
              },
              {
                name: 'Cartus UK - London',
                type: 'Corporate Leader',
                specialty: 'Executive assignments',
                coverage: 'Global reach',
                priceRange: '£22k - £60k+',
                strengths: ['Executive focused', 'Spouse assistance', 'Mobility policy'],
              },
              {
                name: 'Brookfield - London Office',
                type: 'Destination Specialist',
                specialty: 'Housing & settling-in',
                coverage: '100+ countries',
                priceRange: '£18k - £50k+',
                strengths: ['Premium housing', 'Local expertise', 'Integration support'],
              },
            ].map((agent, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-slate-800 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{agent.name}</h3>
                  <p className="text-blue-100">{agent.type}</p>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-bold text-gray-600 mb-1">Specialty</p>
                          <p className="text-gray-900 font-semibold">{agent.specialty}</p>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-600 mb-1">Coverage</p>
                          <p className="text-gray-900">{agent.coverage}</p>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-600 mb-1">Price Range</p>
                          <p className="text-blue-600 font-bold">{agent.priceRange}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-600 mb-4">Key Strengths</p>
                      <ul className="space-y-2">
                        {agent.strengths.map((strength, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span className="text-gray-700">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Guide */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Best London Neighborhoods for Relocating Executives
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                area: 'Kensington & Chelsea',
                vibe: 'Upscale, historic, cultural',
                avgRent: '£2,500 - £5,000+/month',
                bestFor: 'Premium executives, families, culture enthusiasts',
              },
              {
                area: 'Mayfair',
                vibe: 'Luxury, central, exclusive',
                avgRent: '£3,000 - £7,000+/month',
                bestFor: 'C-suite, ultra-premium, central location',
              },
              {
                area: 'Canary Wharf',
                vibe: 'Modern, business-focused, riverside',
                avgRent: '£1,800 - £4,000/month',
                bestFor: 'Finance professionals, modern amenities',
              },
              {
                area: 'Knightsbridge',
                vibe: 'Upscale, shopping, luxury',
                avgRent: '£2,200 - £4,500/month',
                bestFor: 'Senior management, premium amenities',
              },
              {
                area: 'Belgravia',
                vibe: 'Elegant, quiet, prestigious',
                avgRent: '£2,000 - £4,200/month',
                bestFor: 'Established executives, diplomatic staff',
              },
              {
                area: 'South Kensington',
                vibe: 'Academic, cultural, residential',
                avgRent: '£1,600 - £3,500/month',
                bestFor: 'Families, education-focused executives',
              },
            ].map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.area}</h3>
                <p className="text-sm text-gray-600 mb-4">{area.vibe}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-gray-600">Avg Monthly Rent</p>
                    <p className="text-blue-600 font-bold">{area.avgRent}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-600">Best For</p>
                    <p className="text-gray-700">{area.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Choose the Right London Relocation Agent
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Experience & Track Record',
                items: [
                  'Years working with corporate clients',
                  'Experience with executive relocations',
                  'References from comparable companies',
                  'Success in premium market segments',
                  'Awards and industry recognition',
                ],
              },
              {
                category: 'Service Quality',
                items: [
                  'Personalized account management',
                  'Concierge-level support',
                  '24/7 emergency support',
                  'Premium housing access',
                  'Cultural integration programs',
                ],
              },
              {
                category: 'Global Capabilities',
                items: [
                  'International network of partners',
                  'Expertise in your destination country',
                  'Tax and legal expertise',
                  'Multi-currency handling',
                  'Coordination across regions',
                ],
              },
              {
                category: 'Value & Pricing',
                items: [
                  'Transparent fee structure',
                  'Customizable service packages',
                  'Volume discounts for multiple moves',
                  'Fixed-fee vs hourly options',
                  'ROI on relocation investment',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-blue-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
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
            Executive Relocation FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is typical cost for executive relocation from London?',
                a: 'Executive relocations range £25k-£70k+ depending on destination, family size, and services. London agents specializing in premium moves command higher fees for specialized service.',
              },
              {
                q: 'How long does an executive relocation take?',
                a: 'Typically 6-12 weeks depending on destination visa processing. London agents can accelerate timelines for urgent corporate assignments.',
              },
              {
                q: 'Do London agents handle spouse career assistance?',
                a: 'Top London agents offer spouse job placement services, professional networking, and career coaching as part of premium packages.',
              },
              {
                q: 'What neighborhoods are best for US/Canada executives?',
                a: 'Canary Wharf (modern), Knightsbridge (luxury), South Kensington (family-friendly). London agents will guide based on corporate culture and preferences.',
              },
              {
                q: 'Can agents negotiate better housing rates?',
                a: 'Yes. London premium agents have established relationships with luxury landlords, often securing 5-10% better rates than direct bookings.',
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
      <section className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Relocate Executive Talent to London?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with London's premier corporate relocation agents. Premium service for executive moves and corporate mobility programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/corporate-relocation-companies"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Get Agent Quotes
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
