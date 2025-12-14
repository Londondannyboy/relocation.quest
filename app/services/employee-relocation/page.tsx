import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Employee Relocation Services | Comprehensive Relocation Support',
  description: 'Professional employee relocation services for businesses. We handle international moves, visa support, housing, and settling-in assistance for your relocated employees.',
  keywords: [
    'employee relocation',
    'employee relocation services',
    'corporate employee relocation',
    'international employee relocation',
    'relocation assistance for employees',
    'employee relocation packages',
    'employee relocation programs',
  ],
  alternates: {
    canonical: 'https://relocation.quest/services/employee-relocation',
  },
  openGraph: {
    title: 'Employee Relocation Services - Professional Support',
    description: 'Comprehensive employee relocation services for international moves. Visa support, housing assistance, and settling-in programs.',
    type: 'website',
    url: 'https://relocation.quest/services/employee-relocation',
  },
}

export default function EmployeeRelocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Employee Relocation Services
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Seamless Employee Relocation Support
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive relocation services that help your employees transition smoothly to their new location. From visa processing to settling-in support, we handle every detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Get a Quote
              </Link>
              <Link
                href="/services/corporate-relocation"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Corporate Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Employee Relocation Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce stress, increase retention, and ensure successful relocations for your valued employees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Global Coverage',
                description: 'Support for relocations to 100+ countries worldwide with local expertise in each market.',
              },
              {
                icon: '⚡',
                title: 'Fast Processing',
                description: 'Streamlined visa and immigration support with average processing time of 30-60 days.',
              },
              {
                icon: '🏡',
                title: 'Housing Assistance',
                description: 'End-to-end housing support from property search to lease negotiation and move-in.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Support',
                description: 'Comprehensive support for spouses and children including school placement and orientation.',
              },
              {
                icon: '📋',
                title: 'Compliance',
                description: 'Full immigration compliance and tax advisory to ensure legal and compliant relocations.',
              },
              {
                icon: '💼',
                title: 'Cost Control',
                description: 'Transparent pricing and cost management to keep relocations within budget.',
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

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Complete Employee Relocation Services
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Pre-Assignment Services',
                items: [
                  'Destination orientation and area tours',
                  'Cost of living analysis and budgeting',
                  'School search and selection assistance',
                  'Cultural training and language support',
                  'Home search and temporary accommodation',
                ],
              },
              {
                title: 'Immigration & Visa Support',
                items: [
                  'Work visa and permit processing',
                  'Dependent visa applications',
                  'Document preparation and certification',
                  'Interview preparation and support',
                  'Compliance and legal advisory',
                ],
              },
              {
                title: 'Settling-In Services',
                items: [
                  'Airport meet and greet',
                  'Bank account and utilities setup',
                  'Driver\'s license and vehicle registration',
                  'Healthcare enrollment and insurance',
                  'Local orientation and neighborhood tours',
                ],
              },
              {
                title: 'Ongoing Support',
                items: [
                  '24/7 emergency support hotline',
                  'Cultural adaptation coaching',
                  'Spouse career transition support',
                  'Children\'s education support',
                  'Tax and financial planning advisory',
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relocation Package Options */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Employee Relocation Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible packages tailored to your company's needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential',
                price: 'From £2,500',
                description: 'Core relocation support for straightforward moves',
                features: [
                  'Visa application support',
                  'Housing search assistance',
                  'Basic orientation',
                  'Document preparation',
                  'Email support',
                ],
              },
              {
                name: 'Professional',
                price: 'From £5,000',
                description: 'Comprehensive support for executive relocations',
                features: [
                  'Everything in Essential',
                  'Home finding trip',
                  'School search for children',
                  'Spouse career support',
                  'Cultural training',
                  '24/7 phone support',
                ],
                popular: true,
              },
              {
                name: 'Executive',
                price: 'From £10,000',
                description: 'White-glove service for C-suite relocations',
                features: [
                  'Everything in Professional',
                  'Dedicated relocation manager',
                  'Premium housing options',
                  'Vehicle purchase assistance',
                  'Private school placement',
                  'Tax and financial advisory',
                ],
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`relative bg-white p-8 rounded-2xl border-2 ${
                  pkg.popular ? 'border-blue-600 shadow-2xl' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-black text-blue-600 mb-3">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Employee Relocation FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How long does the employee relocation process take?',
                a: 'Typical timeline is 30-90 days depending on destination country, visa requirements, and complexity. We can expedite in urgent situations.',
              },
              {
                q: 'What is included in a typical employee relocation package?',
                a: 'Most packages include visa support, housing assistance, temporary accommodation, moving services, cultural training, and settling-in support. Exact services vary by package level.',
              },
              {
                q: 'Do you support family members in the relocation?',
                a: 'Yes, we provide comprehensive family support including dependent visa processing, school search for children, spouse career transition support, and family orientation programs.',
              },
              {
                q: 'Which countries do you cover?',
                a: 'We provide employee relocation services to 100+ countries worldwide, with particular expertise in Europe, North America, Asia-Pacific, and the Middle East.',
              },
              {
                q: 'How much do employee relocation services cost?',
                a: 'Costs range from £2,500 for essential support to £10,000+ for executive relocations. Final cost depends on destination, services required, and family size. Contact us for a detailed quote.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Relocate Your Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom quote for your employee relocation needs. Our experts are ready to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              View Relocation Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
