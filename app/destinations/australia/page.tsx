'use client';

export default function AustraliaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Moving to Australia</h1>
          <p className="text-xl text-orange-100">Complete relocation guide for moving to Australia including skilled migration visas, jobs, cost of living, and expat resources.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <p className="text-3xl font-bold text-orange-600 mb-2">A$</p>
            <p className="text-gray-700">Australian Dollar</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <p className="text-3xl font-bold text-orange-600 mb-2">26M</p>
            <p className="text-gray-700">Population</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <p className="text-3xl font-bold text-orange-600 mb-2">8.7M km²</p>
            <p className="text-gray-700">Land Area</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <p className="text-3xl font-bold text-orange-600 mb-2">189</p>
            <p className="text-gray-700">Countries</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Why Relocate to Australia?</h2>
        <ul className="text-lg text-gray-700 space-y-3 mb-12">
          <li>✓ Strong job market and high salaries</li>
          <li>✓ Skilled migration visa pathways</li>
          <li>✓ Excellent healthcare system</li>
          <li>✓ High quality of life</li>
          <li>✓ Beautiful beaches and outdoor lifestyle</li>
          <li>✓ Growing tech and professional opportunities</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">Visa Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-gray-300 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Skilled Migration Visa (189/190/491)</h3>
            <p className="text-gray-700">For professionals with in-demand skills on the occupation list.</p>
          </div>
          <div className="border border-gray-300 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Employer Sponsored Visa (482/186)</h3>
            <p className="text-gray-700">For those sponsored by Australian employers.</p>
          </div>
          <div className="border border-gray-300 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Working Holiday Visa</h3>
            <p className="text-gray-700">For young professionals aged 18-35 to work and travel.</p>
          </div>
          <div className="border border-gray-300 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Family Sponsorship</h3>
            <p className="text-gray-700">For family members of Australian citizens/permanent residents.</p>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700">View Full Guide</button>
          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700">Browse Australia Jobs</button>
          <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700">Find Services</button>
        </div>
      </div>
    </main>
  );
}
