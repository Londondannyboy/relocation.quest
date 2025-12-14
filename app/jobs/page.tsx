import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Relocation Jobs Worldwide | Find Jobs with Relocation Packages',
  description: 'Browse relocation jobs with visa sponsorship and relocation packages across 50+ countries. Find international career opportunities with full relocation support.',
  keywords: [
    'relocation jobs',
    'jobs with relocation',
    'relocation jobs international',
    'jobs with relocation packages',
    'international relocation jobs',
    'jobs visa sponsorship',
    'expat jobs with relocation',
    'overseas jobs relocation',
  ],
  alternates: {
    canonical: 'https://relocation.quest/jobs',
  },
  openGraph: {
    title: 'Relocation Jobs Worldwide - Find Work with Full Relocation Support',
    description: 'Discover international career opportunities with relocation packages, visa sponsorship, and comprehensive moving support.',
    type: 'website',
    url: 'https://relocation.quest/jobs',
  },
}

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🌍</span>
              <span>Global Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Relocation Jobs Worldwide
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              Find your next career opportunity with full relocation packages, visa sponsorship, and comprehensive support. Work across 50+ countries with employers committed to your success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#locations"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition shadow-lg"
              >
                Explore Opportunities
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Relocation Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-emerald-50 border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Jobs Worldwide', value: '1000+', icon: '🌏' },
              { label: 'Countries', value: '50+', icon: '🗺️' },
              { label: 'Visa Support', value: '100%', icon: '📋' },
              { label: 'Full Relocation', value: 'Included', icon: '✈️' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-emerald-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Relocation Jobs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Search for Jobs with Relocation?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💼',
                title: 'Career Growth',
                description: 'Accelerate your career with international experience and access to global opportunities.',
              },
              {
                icon: '🏠',
                title: 'Full Support',
                description: 'Comprehensive assistance with housing, visa, travel, and settling into your new location.',
              },
              {
                icon: '💰',
                title: 'Better Compensation',
                description: 'Competitive salaries often with tax benefits, allowances, and premium relocation packages.',
              },
              {
                icon: '🌍',
                title: 'Global Network',
                description: 'Build international connections and expand your professional network across continents.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Support',
                description: 'Most relocation packages include family visas, schools, and family settling support.',
              },
              {
                icon: '🎓',
                title: 'New Skills',
                description: 'Learn new languages, cultures, and professional practices in your field.',
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

      {/* Featured Job Locations */}
      <section id="locations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Featured Relocation Job Markets
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Browse relocation opportunities in top destination countries
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                country: 'Dubai, UAE',
                icon: '🇦🇪',
                jobs: '500+ Open Positions',
                topIndustries: 'Tech, Finance, Healthcare',
                salaryAvg: 'AED 180k - 500k+',
                highlight: 'Tax-Free Salaries',
                link: '/jobs/dubai',
              },
              {
                country: 'Australia',
                icon: '🇦🇺',
                jobs: '300+ Open Positions',
                topIndustries: 'Tech, Mining, Healthcare',
                salaryAvg: 'AUD 80k - 180k+',
                highlight: 'Strong Job Market',
                link: '/jobs/australia',
              },
              {
                country: 'Canada',
                icon: '🇨🇦',
                jobs: '250+ Open Positions',
                topIndustries: 'Tech, Oil & Gas, Healthcare',
                salaryAvg: 'CAD 70k - 150k+',
                highlight: 'Path to Residency',
                link: '/jobs/canada',
              },
            ].map((loc, idx) => (
              <Link key={idx} href={loc.link} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition h-full">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
                    <div className="text-6xl mb-4">{loc.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{loc.country}</h3>
                    <p className="text-emerald-100">{loc.jobs}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Top Industries</p>
                      <p className="font-semibold text-gray-900">{loc.topIndustries}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Salary Range</p>
                      <p className="font-bold text-emerald-600">{loc.salaryAvg}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
                      <span>{loc.highlight}</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">Looking for more destinations?</p>
            <Link
              href="#more-locations"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition"
            >
              View All Job Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Job Search by Type */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Find Jobs by Type
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                type: 'Relocation Packages',
                description: 'Jobs that include comprehensive relocation assistance',
                icon: '📦',
                link: '/jobs/relocation-packages',
              },
              {
                type: 'International Opportunities',
                description: 'Global positions available across multiple countries',
                icon: '🌐',
                link: '/jobs/international',
              },
              {
                type: 'No Experience Required',
                description: 'Entry-level roles perfect for career switchers',
                icon: '🚀',
                link: '/jobs/no-experience',
              },
              {
                type: 'Visa Sponsorship',
                description: 'Employers committed to sponsoring your work visa',
                icon: '📋',
                link: '/jobs/visa-sponsorship',
              },
              {
                type: 'UK to Abroad',
                description: 'Relocation opportunities for UK professionals',
                icon: '✈️',
                link: '/jobs/relocation-from-uk',
              },
              {
                type: 'USA Positions',
                description: 'Career opportunities across the United States',
                icon: '🗽',
                link: '/jobs/usa',
              },
            ].map((job, idx) => (
              <Link key={idx} href={job.link} className="group">
                <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition h-full">
                  <div className="text-4xl mb-4">{job.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{job.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                  <span className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
                    Explore
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What's Typically Included in Relocation Packages?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Visa & Immigration',
                items: [
                  'Work visa sponsorship',
                  'Visa application fees covered',
                  'Medical examination included',
                  'Family visa support',
                  'Residency permit assistance',
                ],
              },
              {
                title: 'Housing & Accommodation',
                items: [
                  'Temporary accommodation (1-3 months)',
                  'Housing allowance or company apartment',
                  'Assistance finding permanent housing',
                  'Security deposit support',
                  'Utilities setup help',
                ],
              },
              {
                title: 'Travel & Moving',
                items: [
                  'Flight tickets (employee + family)',
                  'Airport pickup and transfers',
                  'Household goods shipping',
                  'Vehicle relocation (if applicable)',
                  'Travel insurance',
                ],
              },
              {
                title: 'Settling-In Support',
                items: [
                  'Settling allowance/sign-on bonus',
                  'School placement assistance',
                  'Bank account setup',
                  'Cultural orientation program',
                  'Language training (sometimes)',
                ],
              },
            ].map((pkg, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{pkg.title}</h3>
                <ul className="space-y-3">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Apply for Relocation Jobs
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Search & Browse',
                description: 'Explore jobs by location, industry, or relocation type. Filter for visa sponsorship and package details.',
              },
              {
                step: 2,
                title: 'Create Profile',
                description: 'Set up your profile highlighting your experience, skills, and relocation preferences.',
              },
              {
                step: 3,
                title: 'Apply & Interview',
                description: 'Submit applications directly to employers. Interviews are often conducted remotely.',
              },
              {
                step: 4,
                title: 'Receive Offer',
                description: 'Once selected, receive job offer with relocation package details and start date.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Do all relocation jobs include visa sponsorship?',
                a: 'Most international relocation jobs include visa sponsorship, but it\'s always important to confirm with the employer. Check job details or contact the employer directly.',
              },
              {
                q: 'Are relocation packages taxable?',
                a: 'Tax treatment varies by country. Some countries offer tax-free relocation allowances, while others may tax portions of the package. Consult with a tax professional.',
              },
              {
                q: 'How long does the relocation process take?',
                a: 'Typically 4-12 weeks from offer to relocation, depending on visa processing times, housing arrangements, and shipment logistics.',
              },
              {
                q: 'Can I bring my family?',
                a: 'Most relocation jobs include family visas and support. Check the specific job posting or contact HR to confirm family visa availability.',
              },
              {
                q: 'What if I have existing debt or financial obligations?',
                a: 'This varies by employer and country. Some companies offer assistance, but you should discuss this with HR before relocating.',
              },
              {
                q: 'Are there jobs for people with no experience?',
                a: 'Yes! Many companies offer graduate programs, trainee positions, and entry-level roles with relocation support. Check our \"No Experience\" category.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl p-6 hover:bg-gray-100 transition border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <span className="text-emerald-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your International Career?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Browse thousands of relocation jobs worldwide with full visa sponsorship and moving support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#locations"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition shadow-lg"
            >
              Explore Jobs Now
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
