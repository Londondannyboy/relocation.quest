import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Relocation Services UK | Employee Relocation Solutions',
  description: 'Complete corporate relocation services for HR teams. Manage employee relocations, find relocation companies, and reduce costs. Expert guidance for businesses.',
  keywords: 'corporate relocation services, employee relocation, business relocation, relocation management, HR relocation',
  openGraph: {
    title: 'Corporate Relocation Services | Employee Mobility Solutions',
    description: 'Enterprise relocation solutions for managing employee moves. Connect with vetted providers, reduce costs, and ensure compliance.',
    type: 'article',
  },
};

export default function CorporateRelocationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Corporate Relocation Services
          </h1>
          <p className="text-xl text-indigo-100 mb-6">
            Complete relocation solutions for managing employee moves. Connect with vetted providers, streamline your process, and reduce costs.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50">
              Find Services
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700">
              Get Quotes
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">500+</p>
              <p className="text-gray-700">Relocation Providers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">50,000+</p>
              <p className="text-gray-700">Relocations Managed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">120</p>
              <p className="text-gray-700">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">4.8★</p>
              <p className="text-gray-700">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* What We Offer */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What is Corporate Relocation?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Corporate relocation services help companies manage employee moves—both domestically and internationally. From finding housing to visa support, relocation experts handle the logistics so your employees can focus on their new roles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🏢 Who Uses These Services?</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Multinational corporations</li>
                <li>✓ Tech startups</li>
                <li>✓ Financial services firms</li>
                <li>✓ Consulting companies</li>
                <li>✓ Healthcare organizations</li>
                <li>✓ Any company with mobility needs</li>
              </ul>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">💼 Common Scenarios</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Hiring talent from another city</li>
                <li>✓ Internal transfers</li>
                <li>✓ International assignments</li>
                <li>✓ Executive placements</li>
                <li>✓ Office location changes</li>
                <li>✓ Bulk team relocations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Components */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Core Relocation Services</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">🏘️ Housing & Accommodation</h3>
              <p className="text-gray-700 mb-3">
                From finding properties to negotiating terms, relocation specialists handle the entire housing search and settlement process.
              </p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Property search and viewings</li>
                <li>• Lease negotiation</li>
                <li>• Furnished vs unfurnished options</li>
                <li>• Deposit guarantee programs</li>
                <li>• Bridging/temporary accommodation</li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">📦 Moving & Logistics</h3>
              <p className="text-gray-700 mb-3">
                Professional moving companies handle all aspects of transporting household goods and managing logistics.
              </p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• International shipping</li>
                <li>• Packing and insurance</li>
                <li>• Vehicle relocation</li>
                <li>• Pet transportation</li>
                <li>• Storage solutions</li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">✈️ Travel & Visas</h3>
              <p className="text-gray-700 mb-3">
                Navigate complex visa requirements and arrange travel logistics for international relocations.
              </p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Visa application support</li>
                <li>• Work permit assistance</li>
                <li>• Travel arrangement</li>
                <li>• Immigration compliance</li>
                <li>• Documentation services</li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">🤝 Cultural Integration</h3>
              <p className="text-gray-700 mb-3">
                Help employees and families adapt to new cultures and environments.
              </p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Cultural coaching</li>
                <li>• Language training</li>
                <li>• Community orientation</li>
                <li>• Family support programs</li>
                <li>• Social networking events</li>
              </ul>
            </div>

            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">🏥 Healthcare & Benefits</h3>
              <p className="text-gray-700 mb-3">
                Ensure continuity of healthcare and establish benefits in the new location.
              </p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Healthcare provider registration</li>
                <li>• Insurance setup</li>
                <li>• Medical records transfer</li>
                <li>• Benefits coordination</li>
                <li>• Emergency support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Provider Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Relocation Providers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold mb-3">Full-Service Relocation Companies</h3>
              <p className="text-gray-700 mb-3">
                One-stop shops that handle everything from housing to immigration support.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Large relocations, international moves, comprehensive support
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-bold mb-3">Moving & Logistics Companies</h3>
              <p className="text-gray-700 mb-3">
                Specialists in packing, shipping, and managing physical relocation.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Household goods moving, storage, logistics coordination
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-bold mb-3">Immigration & Visa Consultants</h3>
              <p className="text-gray-700 mb-3">
                Experts in navigating visa requirements and immigration compliance.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> International relocations, visa complexity, legal compliance
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
              <h3 className="text-xl font-bold mb-3">Destination Services Providers</h3>
              <p className="text-gray-700 mb-3">
                Local experts providing housing, banking, schooling, and integration support.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Best for:</strong> Local integration, community setup, ongoing support
              </p>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Invest in Professional Services?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25%</div>
              <p className="text-gray-700">
                Average cost reduction through provider networks and bulk discounts
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <p className="text-gray-700">
                Employee satisfaction rate with professional relocation support
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3 months</div>
              <p className="text-gray-700">
                Average time savings vs handling relocation internally
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="font-bold text-green-900 mb-3">Key Benefits</h3>
            <ul className="text-gray-800 space-y-2">
              <li>✓ Reduced employee stress and faster integration</li>
              <li>✓ Faster time-to-productivity for relocated staff</li>
              <li>✓ Lower turnover rates for relocating employees</li>
              <li>✓ Compliance with immigration and tax laws</li>
              <li>✓ Better negotiated rates through volume relationships</li>
              <li>✓ Dedicated support during critical transition periods</li>
            </ul>
          </div>
        </section>

        {/* Service Directory */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Find Relocation Services</h2>

          <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-200">
            <p className="text-lg text-gray-700 mb-6">
              Browse our vetted network of relocation service providers:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <button className="bg-white border border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
                <p className="font-bold text-indigo-600 mb-1">Full-Service</p>
                <p className="text-sm text-gray-600">Complete solutions</p>
              </button>
              <button className="bg-white border border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
                <p className="font-bold text-indigo-600 mb-1">Moving</p>
                <p className="text-sm text-gray-600">Logistics & packing</p>
              </button>
              <button className="bg-white border border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
                <p className="font-bold text-indigo-600 mb-1">Visa</p>
                <p className="text-sm text-gray-600">Immigration help</p>
              </button>
              <button className="bg-white border border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
                <p className="font-bold text-indigo-600 mb-1">Housing</p>
                <p className="text-sm text-gray-600">Property & rental</p>
              </button>
              <button className="bg-white border border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
                <p className="font-bold text-indigo-600 mb-1">Tax</p>
                <p className="text-sm text-gray-600">Financial planning</p>
              </button>
              <button className="bg-white border border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
                <p className="font-bold text-indigo-600 mb-1">Coaching</p>
                <p className="text-sm text-gray-600">Cultural integration</p>
              </button>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-700">
              Browse All Services →
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Quotes From Multiple Providers</h2>
          <p className="text-lg mb-6 text-indigo-100">
            Compare pricing and services from vetted relocation companies. Get up to 3 quotes in 24 hours.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 text-lg">
            Request Quotes Now
          </button>
        </section>
      </div>
    </main>
  );
}
