import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'International Relocation Jobs | Work Abroad with Visa Support',
  description: 'Find international jobs with relocation support and visa sponsorship. Work abroad across Asia, Europe, Middle East, Americas, and Oceania with comprehensive relocation assistance.',
  keywords: [
    'international relocation jobs',
    'international jobs',
    'jobs abroad',
    'work abroad relocation',
    'overseas jobs',
    'international career opportunities',
    'global job opportunities',
    'relocation jobs worldwide',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs/international',
  },
  openGraph: {
    title: 'International Jobs with Relocation Support - Work Anywhere',
    description: 'Explore global career opportunities with full relocation packages. Work across continents with visa sponsorship and comprehensive moving support.',
    type: 'website',
    url: 'https://relocation.quest/jobs/international',
  },
}

export default function InternationalJobsPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🌐</span>
              <span>Global Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              International Jobs Worldwide
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Break geographic boundaries and build your global career. Find international job opportunities with relocation support, visa sponsorship, and comprehensive moving assistance anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#regions"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition shadow-lg"
              >
                Explore Regions
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Country Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-cyan-50 border-b border-cyan-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              { label: 'Job Regions', value: '5', icon: '🌏' },
              { label: 'Countries', value: '100+', icon: '🗺️' },
              { label: 'Active Jobs', value: '5,000+', icon: '💼' },
              { label: 'Visa Support', value: '100%', icon: '📋' },
              { label: 'Industries', value: '30+', icon: '🏢' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-cyan-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work Internationally */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Pursue International Career Opportunities?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Career Acceleration',
                description: 'Gain international experience, develop global leadership skills, and open doors to high-level positions worldwide.',
              },
              {
                icon: '💰',
                title: 'Higher Compensation',
                description: 'International roles often offer better salaries, tax benefits, housing allowances, and premium relocation packages.',
              },
              {
                icon: '🌍',
                title: 'Global Network',
                description: 'Build professional connections across continents, expanding your career opportunities and business relationships globally.',
              },
              {
                icon: '🎓',
                title: 'Skill Development',
                description: 'Work in diverse environments, master new languages, and develop cross-cultural competency—highly valued in competitive job markets.',
              },
              {
                icon: '🏠',
                title: 'Full Relocation Support',
                description: 'Housing, visas, travel, and settling-in assistance handled by your employer. Focus on your career, not logistics.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Life Experience',
                description: 'Live in exciting new cities, experience different cultures, and create unforgettable memories with your family.',
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

      {/* Regional Overview */}
      <section id="regions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            International Job Markets by Region
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Explore career opportunities across major regions with different advantages
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                region: 'Middle East & GCC',
                icon: '🕌',
                advantages: ['Tax-free salaries', 'Premium packages', 'Rapid growth'],
                topCountries: 'UAE, Saudi Arabia, Qatar',
                avgSalary: 'AED 150k - 500k+',
                growth: '+15% annually',
                link: '/jobs/dubai',
              },
              {
                region: 'Asia-Pacific',
                icon: '🏯',
                advantages: ['Fast-growing', 'Tech hubs', 'Cost-effective'],
                topCountries: 'Singapore, Hong Kong, Australia, Japan',
                avgSalary: 'SGD 80k - 200k+',
                growth: '+12% annually',
                link: '/jobs/australia',
              },
              {
                region: 'Europe',
                icon: '🇪🇺',
                advantages: ['Quality of life', 'Work-life balance', 'Stability'],
                topCountries: 'UK, Germany, Switzerland, Netherlands',
                avgSalary: '€60k - €150k+',
                growth: '+8% annually',
                link: '/jobs',
              },
              {
                region: 'North America',
                icon: '🗽',
                advantages: ['High salaries', 'Innovation hubs', 'Career growth'],
                topCountries: 'USA, Canada',
                avgSalary: 'USD 80k - 200k+',
                growth: '+10% annually',
                link: '/jobs/usa',
              },
              {
                region: 'Americas (Latam)',
                icon: '🌎',
                advantages: ['Emerging markets', 'Growing demand', 'Cultural diversity'],
                topCountries: 'Mexico, Brazil, Colombia',
                avgSalary: 'USD 50k - 120k',
                growth: '+18% annually',
                link: '/jobs',
              },
              {
                region: 'Africa',
                icon: '🌍',
                advantages: ['Opportunity', 'Development roles', 'Unique experience'],
                topCountries: 'South Africa, Kenya, Egypt',
                avgSalary: 'USD 40k - 100k',
                growth: '+20% annually',
                link: '/jobs',
              },
            ].map((region, idx) => (
              <Link key={idx} href={region.link} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition h-full">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white">
                    <div className="text-6xl mb-4">{region.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{region.region}</h3>
                    <p className="text-cyan-100">{region.topCountries}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2 font-semibold">Key Advantages</p>
                      <div className="flex flex-wrap gap-2">
                        {region.advantages.map((adv, i) => (
                          <span
                            key={i}
                            className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {adv}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mb-2">
                        <p className="text-xs text-gray-600">Avg Salary Range</p>
                        <p className="font-bold text-cyan-600">{region.avgSalary}</p>
                      </div>
                      <p className="text-xs text-green-600 font-semibold">{region.growth}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Most In-Demand International Industries
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Technology & IT',
                icon: '💻',
                roles: 'Software Engineers, Data Scientists, DevOps, Cloud Architects',
                avgSalary: 'USD 100k - 250k+',
                demandLevel: '⭐⭐⭐⭐⭐ Very High',
              },
              {
                industry: 'Finance & Banking',
                icon: '💼',
                roles: 'Investment Bankers, Financial Analysts, Risk Managers, Traders',
                avgSalary: 'USD 120k - 300k+',
                demandLevel: '⭐⭐⭐⭐⭐ Very High',
              },
              {
                industry: 'Healthcare',
                icon: '🏥',
                roles: 'Doctors, Nurses, Medical Specialists, Healthcare Managers',
                avgSalary: 'USD 80k - 250k+',
                demandLevel: '⭐⭐⭐⭐ High',
              },
              {
                industry: 'Engineering',
                icon: '🏗️',
                roles: 'Civil Engineers, Mechanical Engineers, Project Managers',
                avgSalary: 'USD 70k - 180k+',
                demandLevel: '⭐⭐⭐⭐ High',
              },
              {
                industry: 'Energy & Oil/Gas',
                icon: '⚡',
                roles: 'Petroleum Engineers, Operations Managers, Technicians',
                avgSalary: 'USD 100k - 300k+',
                demandLevel: '⭐⭐⭐⭐ High',
              },
              {
                industry: 'Education',
                icon: '🎓',
                roles: 'Teachers, Lecturers, Researchers, Academic Managers',
                avgSalary: 'USD 50k - 150k+',
                demandLevel: '⭐⭐⭐⭐ High',
              },
              {
                industry: 'Sales & Marketing',
                icon: '📊',
                roles: 'Account Executives, Marketing Managers, Business Development',
                avgSalary: 'USD 60k - 200k+',
                demandLevel: '⭐⭐⭐⭐ High',
              },
              {
                industry: 'Hospitality & Tourism',
                icon: '✈️',
                roles: 'Hotel Managers, Chefs, Event Managers, Tour Operators',
                avgSalary: 'USD 40k - 120k+',
                demandLevel: '⭐⭐⭐ Moderate',
              },
              {
                industry: 'Construction',
                icon: '👷',
                roles: 'Project Managers, Architects, Site Supervisors',
                avgSalary: 'USD 60k - 180k+',
                demandLevel: '⭐⭐⭐⭐ High',
              },
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{industry.icon}</div>
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {industry.demandLevel}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.industry}</h3>
                <p className="text-sm text-gray-600 mb-4">{industry.roles}</p>
                <div className="bg-cyan-50 px-4 py-3 rounded-lg">
                  <p className="text-sm text-gray-600">Avg Salary</p>
                  <p className="font-bold text-cyan-600">{industry.avgSalary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Types of International Positions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'Permanent Roles',
                icon: '📌',
                description: 'Long-term positions with full benefits and relocation packages',
                features: ['Full relocation', 'Benefits package', 'Career progression', 'Job security'],
                bestFor: 'Those seeking stability',
              },
              {
                type: 'Contract Assignments',
                icon: '📅',
                description: 'Fixed-term roles (2-5 years) perfect for experience building',
                features: ['Shorter commitment', 'Good packages', 'Flexibility', 'Experience'],
                bestFor: 'Career explorers',
              },
              {
                type: 'Rotational Programs',
                icon: '🔄',
                description: 'Multi-location roles with rotations every 2-3 years',
                features: ['Multiple locations', 'Skill variety', 'Network building', 'Packages'],
                bestFor: 'Adventure seekers',
              },
            ].map((jobType, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="text-5xl mb-4">{jobType.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{jobType.type}</h3>
                <p className="text-gray-600 mb-6">{jobType.description}</p>
                <div className="space-y-2 mb-6">
                  {jobType.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-cyan-600">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Best for:</p>
                  <p className="font-bold text-gray-900">{jobType.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Understanding International Visa Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                region: 'Middle East & GCC',
                visaTypes: ['Employment Visa', 'Residence Visa', 'Investor Visa'],
                processing: '2-4 weeks',
                sponsorship: 'Employer sponsored',
                family: 'Family visas available',
              },
              {
                region: 'Singapore & Asia',
                visaTypes: ['Employment Pass', 'S Pass', 'Tech.Pass'],
                processing: '1-2 weeks',
                sponsorship: 'Employer sponsored',
                family: 'Dependent visas',
              },
              {
                region: 'USA & Canada',
                visaTypes: ['H-1B / TN', 'L-1 Transfer', 'Express Entry'],
                processing: '3-6 months',
                sponsorship: 'Employer sponsored',
                family: 'Spouse + children visas',
              },
              {
                region: 'EU & Europe',
                visaTypes: ['Work Permit', 'Long-stay Visa', 'Skilled Worker'],
                processing: '2-8 weeks',
                sponsorship: 'Employer sponsored',
                family: 'Schengen family visas',
              },
              {
                region: 'Australia',
                visaTypes: ['Skilled Migration', 'Employer Nomination', 'TSS Visa'],
                processing: '4-16 weeks',
                sponsorship: 'Employer sponsored',
                family: 'Family migration possible',
              },
              {
                region: 'New Zealand',
                visaTypes: ['Skilled Migrant', 'Employer Assisted', 'Essential Skills'],
                processing: '3-8 weeks',
                sponsorship: 'Employer sponsored',
                family: 'Partner & children visas',
              },
            ].map((region, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{region.region}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-2">Common Visa Types</p>
                    <div className="space-y-1">
                      {region.visaTypes.map((visa, i) => (
                        <p key={i} className="text-gray-700">• {visa}</p>
                      ))}
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg space-y-2">
                    <div>
                      <p className="text-xs text-gray-600">Processing Time</p>
                      <p className="font-bold text-cyan-600">{region.processing}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Sponsorship</p>
                      <p className="text-gray-900">{region.sponsorship}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Family Options</p>
                      <p className="text-gray-900">{region.family}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Land an International Job
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                title: 'Research & Explore',
                description: 'Identify regions, industries, and positions aligned with your goals. Review visa requirements and relocation packages.',
              },
              {
                step: 2,
                title: 'Build Your Profile',
                description: 'Create a strong resume highlighting international experience, language skills, and cross-cultural competencies.',
              },
              {
                step: 3,
                title: 'Apply & Network',
                description: 'Apply to positions, attend virtual job fairs, and network with recruiters specializing in international roles.',
              },
              {
                step: 4,
                title: 'Interview Process',
                description: 'Participate in remote interviews, discuss relocation packages, visa sponsorship, and start date with employers.',
              },
              {
                step: 5,
                title: 'Prepare & Move',
                description: 'Accept offer, plan relocation logistics, complete visa applications, and prepare for your international move.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-600 text-white rounded-full font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What languages do I need to work internationally?',
                a: 'English is widely spoken in international business. However, learning the local language is beneficial for integration. Many employers provide language training as part of relocation packages.',
              },
              {
                q: 'How long does the entire relocation process take?',
                a: 'Typically 2-6 months from offer to relocation, depending on visa processing, health requirements, and logistics. Government visa processing varies by region (1-16 weeks).',
              },
              {
                q: 'Can I bring my family on an international assignment?',
                a: 'Most international roles include family visa support. Check the job posting or discuss with HR about spouse visas, children visas, and family relocation packages.',
              },
              {
                q: 'What about moving costs and relocation packages?',
                a: 'International relocation packages are comprehensive, covering flights, shipping, temporary housing, visa fees, and settling allowances. The extent varies by company and location.',
              },
              {
                q: 'How do taxes work when relocating internationally?',
                a: 'Tax treatment varies by country and your residency status. Some destinations offer tax benefits for expatriates. Consult a tax professional and discuss with your employer.',
              },
              {
                q: 'What if I decide to return home early?',
                a: 'Some contracts include early exit clauses or require repayment of relocation costs. Review your contract carefully and negotiate if needed.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Your Career Global?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Explore thousands of international career opportunities with full relocation support and visa sponsorship worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-50 transition shadow-lg"
            >
              Browse International Jobs
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Country Guides
            </Link>
          </div>
        </div>
      </section>

      </>
  )
}
