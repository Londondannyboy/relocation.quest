import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Moving Services | Business Relocation Solutions',
  description: 'Professional corporate moving services for businesses relocating employees. Comprehensive moving solutions with logistics, storage, and employee support.',
  keywords: [
    'corporate moving services',
    'business moving services',
    'corporate relocation moving',
    'office moving services',
    'employee moving services',
  ],
  alternates: {
    canonical: 'https://relocation.quest/corporate-moving-services',
  },
  openGraph: {
    title: 'Corporate Moving Services - Professional Business Relocation',
    description: 'Full-service corporate moving and relocation solutions for businesses. Manage employee relocations with professional moving services.',
    type: 'website',
    url: 'https://relocation.quest/corporate-moving-services',
  },
}

export default function CorporateMovingServicesPage() {
  return (
    <>

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">📦</span>
              <span>Logistics & Moving</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Corporate Moving Services
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Professional moving and logistics services for corporate employee relocations. Handle all logistics while your team focuses on business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="/corporate-relocation-companies"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Find Providers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Complete Corporate Moving Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📦',
                title: 'Packing & Moving',
                description: 'Professional packing of household goods and office items with full insurance coverage.',
              },
              {
                icon: '🚚',
                title: 'Transportation',
                description: 'Reliable transportation across cities and countries with tracking and updates.',
              },
              {
                icon: '🏪',
                title: 'Storage Solutions',
                description: 'Short and long-term storage options for household goods and business items.',
              },
              {
                icon: '✈️',
                title: 'International Shipping',
                description: 'Customs documentation and international household goods shipping.',
              },
              {
                icon: '🚗',
                title: 'Vehicle Relocation',
                description: 'Safe transportation of vehicles across countries and continents.',
              },
              {
                icon: '🐕',
                title: 'Pet Transportation',
                description: 'Safe and humane pet relocation with proper documentation and care.',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Services Breakdown
          </h2>

          <div className="space-y-8">
            {[
              {
                category: 'Packing Services',
                items: ['Professional packing materials', 'Room-by-room packing', 'Specialty item handling', 'Inventory tracking', 'Unpacking at destination'],
              },
              {
                category: 'Transportation',
                items: ['Domestic moving', 'International shipping', 'Ocean freight', 'Air freight', 'Consolidated shipments'],
              },
              {
                category: 'Storage',
                items: ['Climate-controlled storage', 'Short-term storage', 'Long-term storage', 'Business equipment storage', 'Secure facilities'],
              },
              {
                category: 'Additional Services',
                items: ['Furniture assembly', 'Debris removal', 'Insurance coverage', 'Real-time tracking', 'Dedicated support'],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-orange-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white">
                  <h3 className="text-2xl font-bold">{section.category}</h3>
                </div>
                <div className="p-8">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-orange-600 font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
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
            Why Professional Moving Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits for Employees</h3>
              <ul className="space-y-3">
                {[
                  'Stress-free moving experience',
                  'All belongings safely transported',
                  'Items arrive on time',
                  'Insurance coverage included',
                  'Professional handling of valuables',
                  'Support throughout process',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits for Companies</h3>
              <ul className="space-y-3">
                {[
                  'Professional, reliable service',
                  'Predictable costs',
                  'Liability & insurance covered',
                  'Faster employee onboarding',
                  'Reduced internal HR workload',
                  'Better employee satisfaction',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold mt-1">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Typical Moving Process
          </h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Assessment', description: 'Evaluate items to move, assess volume, determine requirements' },
              { step: 2, title: 'Quotation', description: 'Receive detailed quote with timeline and services' },
              { step: 3, title: 'Planning', description: 'Schedule moving date, coordinate with all parties' },
              { step: 4, title: 'Packing', description: 'Professional packing with proper materials and care' },
              { step: 5, title: 'Transport', description: 'Safe transportation with tracking and regular updates' },
              { step: 6, title: 'Delivery', description: 'Delivery to destination with unpacking support' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl border-l-4 border-orange-600 p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Cost Considerations
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                scenario: 'Domestic Relocation',
                distance: 'Within country',
                typical: '£3,000 - £8,000',
                factors: 'Volume, distance, complexity',
              },
              {
                scenario: 'International Relocation',
                distance: 'Across borders',
                typical: '£5,000 - £15,000+',
                factors: 'Destination, volume, customs',
              },
            ].map((pricing, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-orange-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pricing.scenario}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 font-bold">Distance</p>
                    <p className="text-gray-900">{pricing.distance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold">Typical Cost</p>
                    <p className="text-orange-600 font-bold text-lg">{pricing.typical}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-bold">Key Cost Factors</p>
                    <p className="text-gray-700">{pricing.factors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 rounded p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Money-Saving Tips</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Use consolidated shipments when possible',
                'Declutter before moving (reduce volume)',
                'Book off-peak moving dates',
                'Get multiple quotes',
                'Negotiate with providers',
                'Use storage wisely',
              ].map((tip, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">💡</span>
                  <span className="text-gray-900">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-500 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Corporate Moving
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Let professionals handle the moving logistics while your team focuses on the relocation transition.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/corporate-relocation-companies"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Find Moving Providers
            </Link>
            <Link
              href="/services/corporate-relocation"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Full Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
