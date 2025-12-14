import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corporate Relocation Services | Employee Mobility Solutions for Businesses',
  description: 'Comprehensive corporate relocation services for companies managing employee relocations. Housing, visa, travel, and settling support. Reduce costs, streamline operations, and ensure employee satisfaction.',
  keywords: [
    'corporate relocation services',
    'corporate relocation',
    'employee relocation services',
    'corporate moving services',
    'business relocation services',
    'employee relocation management',
    'relocation services for companies',
    'corporate relocations',
  ],
  alternates: {
    canonical: 'https://relocation.quest/services/corporate-relocation',
  },
  openGraph: {
    title: 'Corporate Relocation Services - Manage Employee Relocations',
    description: 'End-to-end corporate relocation services for managing employee moves efficiently. Visa support, housing, logistics, and compliance—all handled.',
    type: 'website',
    url: 'https://relocation.quest/services/corporate-relocation',
  },
};

export default function CorporateRelocationPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🏢</span>
              <span>For Business Leaders</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Corporate Relocation Services
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
              Manage employee relocations effortlessly. Complete solutions from visa sponsorship to housing to cultural integration—designed for companies managing global mobility.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-indigo-50 border-b border-indigo-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Global Reach', value: '120+', icon: '🌍' },
              { label: 'Relocations Managed', value: '50,000+', icon: '✈️' },
              { label: 'Provider Networks', value: '500+', icon: '🤝' },
              { label: 'Client Satisfaction', value: '98%', icon: '⭐' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Corporate Relocation Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Professional Corporate Relocation Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📉',
                title: 'Reduce Costs',
                description: 'Save 25-40% on relocation expenses through negotiated vendor rates, bulk discounts, and efficient management.',
              },
              {
                icon: '⚡',
                title: 'Save Time',
                description: 'Cut relocation timelines by 3+ months. Professional providers handle logistics while your HR team focuses on core business.',
              },
              {
                icon: '😊',
                title: 'Improve Retention',
                description: 'Comprehensive relocation support increases employee satisfaction and reduces turnover by up to 40%.',
              },
              {
                icon: '📋',
                title: 'Ensure Compliance',
                description: 'Stay compliant with immigration, tax, and employment laws across multiple countries. Avoid costly penalties.',
              },
              {
                icon: '🚀',
                title: 'Faster Productivity',
                description: 'Employees settle faster and become productive 2-3 months quicker with proper relocation support.',
              },
              {
                icon: '🌐',
                title: 'Global Scalability',
                description: 'Easily relocate teams to new markets with established provider networks and local expertise.',
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

      {/* Core Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Corporate Relocation Service Components
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: '🏘️',
                title: 'Housing & Accommodation Solutions',
                description: 'Complete housing management from temporary to permanent accommodation',
                features: [
                  'Property search and selection across multiple cities',
                  'Lease negotiation and contract review',
                  'Deposit guarantee programs',
                  'Temporary/bridging accommodation (1-3 months)',
                  'Furnished vs unfurnished options',
                  'School district consultation',
                  'Housing allowances and stipends',
                ],
              },
              {
                icon: '📋',
                title: 'Immigration & Visa Services',
                description: 'Navigate complex visa requirements and ensure legal compliance',
                features: [
                  'Work visa sponsorship and applications',
                  'Employment permit processing',
                  'Medical examination and health screening',
                  'Residency permit and registration',
                  'Family dependent visas',
                  'Immigration law compliance',
                  'Documentation and record management',
                ],
              },
              {
                icon: '✈️',
                title: 'Travel & Logistics Management',
                description: 'Arrange and coordinate all travel and moving logistics',
                features: [
                  'International flight bookings',
                  'Ground transportation and transfers',
                  'Household goods shipping and insurance',
                  'Vehicle relocation services',
                  'Pet transportation arrangements',
                  'Storage solutions (short and long-term)',
                  'Customs clearance and import/export documentation',
                ],
              },
              {
                icon: '🤝',
                title: 'Cultural Integration & Orientation',
                description: 'Support employees and families in adapting to new environments',
                features: [
                  'Pre-arrival orientation and information',
                  'Cultural coaching and training',
                  'Language classes and support',
                  'Community networking events',
                  'School placement and liaison',
                  'Family support programs',
                  'Ongoing mentoring and guidance',
                ],
              },
              {
                icon: '🏥',
                title: 'Healthcare & Benefits Administration',
                description: 'Ensure continuity of healthcare and benefits',
                features: [
                  'Healthcare provider registration',
                  'International health insurance coordination',
                  'Medical records transfer',
                  'Prescription management',
                  'Benefits setup and enrollment',
                  'Emergency medical support',
                  'Wellness program integration',
                ],
              },
              {
                icon: '💰',
                title: 'Tax Planning & Financial Services',
                description: 'Navigate tax implications and financial considerations',
                features: [
                  'Tax compliance and planning advice',
                  'Relocation allowance tax optimization',
                  'Currency exchange services',
                  'International banking setup',
                  'Pension and retirement coordination',
                  'Financial planning guidance',
                  'Cost of living analysis',
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-indigo-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-indigo-100">{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-indigo-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Corporate Relocation Service Models
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Full-Service Relocation',
                icon: '⭐⭐⭐⭐⭐',
                description: 'Complete end-to-end management of all relocation aspects',
                features: [
                  'Housing search and placement',
                  'Visa and immigration',
                  'Moving and logistics',
                  'Cultural integration',
                  'Healthcare setup',
                  'Tax planning',
                  'Ongoing support',
                ],
                bestFor: 'International assignments, executive moves, families',
              },
              {
                name: 'À La Carte Services',
                icon: '⭐⭐⭐⭐',
                description: 'Select specific services based on company needs',
                features: [
                  'Housing support only',
                  'Visa assistance only',
                  'Moving logistics only',
                  'Cultural coaching only',
                  'Flexible combinations',
                  'Custom packages',
                  'Cost optimization',
                ],
                bestFor: 'Flexible relocation strategies, selective support',
                highlighted: true,
              },
              {
                name: 'Managed Services Agreement',
                icon: '⭐⭐⭐⭐',
                description: 'Volume-based retainer agreements for ongoing relocations',
                features: [
                  'Pre-negotiated rates',
                  'Volume discounts (20-40%)',
                  'Dedicated account manager',
                  'Priority processing',
                  'Annual cost caps',
                  'Performance metrics',
                  'Scalable services',
                ],
                bestFor: 'Companies with 10+ annual relocations',
              },
            ].map((model, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden transition transform hover:scale-105 ${
                  model.highlighted
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-2xl border-2 border-indigo-400'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className={`p-6 text-center ${model.highlighted ? 'bg-black/10' : 'bg-gray-50'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${model.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {model.name}
                  </h3>
                  <p className={`text-lg mb-2 ${model.highlighted ? 'text-indigo-100' : 'text-gray-600'}`}>
                    {model.icon}
                  </p>
                  <p className={model.highlighted ? 'text-indigo-100' : 'text-gray-600'}>
                    {model.description}
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={model.highlighted ? 'text-indigo-200' : 'text-indigo-600'}>✓</span>
                        <span className={model.highlighted ? 'text-white' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className={`pt-6 border-t ${model.highlighted ? 'border-indigo-200' : 'border-gray-200'}`}>
                    <p className={`text-sm font-bold ${model.highlighted ? 'text-indigo-200' : 'text-gray-600'}`}>
                      Best for
                    </p>
                    <p className={model.highlighted ? 'text-white' : 'text-gray-900'}>
                      {model.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Measurable Business Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: '25-40%',
                label: 'Cost Reduction',
                description: 'vs managing relocations internally through volume discounts and vendor negotiation',
              },
              {
                metric: '90%',
                label: 'Employee Satisfaction',
                description: 'Companies using professional relocation services report higher employee satisfaction',
              },
              {
                metric: '3 months',
                label: 'Time Saved',
                description: 'Average time savings in relocation management and employee onboarding',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white p-8 rounded-2xl border-2 border-indigo-200">
                <div className="text-5xl font-black text-indigo-600 mb-2">{item.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.label}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border-2 border-indigo-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Business Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Reduced employee turnover for relocating staff',
                'Faster time-to-productivity for new hires',
                'Improved employee morale and engagement',
                'Enhanced employer brand and recruitment',
                'Compliance with international employment laws',
                'Better negotiated rates through volume relationships',
                'Reduced HR team workload and administrative burden',
                'Consistent service quality across all relocations',
                'Data-driven relocation analytics and reporting',
                'Scalable solutions for growth and expansion',
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Provider Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Types of Corporate Relocation Providers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: 'Global Relocation Firms',
                icon: '🌐',
                examples: 'Mercer, Crown, Mayflower',
                description: 'Large multinational companies offering comprehensive services worldwide',
                strengths: ['Global networks', 'All services', 'Large capacity'],
              },
              {
                type: 'Specialty Consultants',
                icon: '🎯',
                examples: 'Immigration specialists, Housing experts',
                description: 'Focused expertise in specific relocation areas',
                strengths: ['Deep expertise', 'Personal service', 'Cost-effective'],
              },
              {
                type: 'Local Providers',
                icon: '📍',
                examples: 'City-based relocation companies',
                description: 'Local knowledge and personalized service in specific cities',
                strengths: ['Local expertise', 'Personal touch', 'Quick response'],
              },
              {
                type: 'Technology Platforms',
                icon: '💻',
                examples: 'Online relocation management systems',
                description: 'Self-service or hybrid platforms for relocation management',
                strengths: ['Cost-effective', 'Transparent', 'Data visibility'],
              },
            ].map((provider, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
                  <div className="text-5xl mb-3">{provider.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{provider.type}</h3>
                  {provider.examples && (
                    <p className="text-indigo-100 text-sm">Examples: {provider.examples}</p>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{provider.description}</p>
                  <div>
                    <p className="text-sm font-bold text-gray-600 mb-2">Key Strengths</p>
                    <ul className="space-y-1">
                      {provider.strengths.map((strength, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-indigo-600">•</span>
                          <span className="text-gray-700">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Corporate Relocation Services FAQ
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How much do corporate relocation services cost?',
                a: 'Costs vary by services included and relocation complexity. Full-service relocations range from £15,000-£50,000+ per employee. Using professional services typically saves companies 25-40% compared to managing internally.',
              },
              {
                q: 'What is the difference between relocation services and HR recruiting?',
                a: 'Recruiting finds employees; relocation services manage their move. While recruiting identifies candidates, relocation services handle visas, housing, travel, and settling-in support after the hire.',
              },
              {
                q: 'Can relocation services negotiate better housing deals?',
                a: 'Yes. Relocation providers have established relationships with landlords and property managers, often securing 10-20% better rates and favorable terms than individuals can negotiate alone.',
              },
              {
                q: 'Do relocation services help with tax implications?',
                a: 'Many comprehensive providers include tax planning services. They help optimize relocation allowances, understand tax-free benefits, and ensure compliance with international tax laws.',
              },
              {
                q: 'How long does a typical corporate relocation take?',
                a: 'Typical timelines: 2-4 weeks for housing, 4-12 weeks for visa processing, 4-8 weeks for moving logistics. Full relocation: 8-16 weeks depending on destination complexity.',
              },
              {
                q: 'What happens if an employee declines the relocation?',
                a: 'This varies by company policy and employment contract. Some companies require relocation cost repayment if employees leave within a certain period. Clarify policies upfront.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Streamline Corporate Relocations?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Connect with vetted relocation service providers and receive customized quotes. Save time, reduce costs, and improve employee satisfaction.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition shadow-lg"
            >
              Get Service Quotes
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

      </>
  );
}
