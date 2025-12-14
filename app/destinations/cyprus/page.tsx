'use client';

export default function CyprusPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Moving to Cyprus</h1>
          <p className="text-xl text-blue-100">Complete guide to relocation, visas, cost of living, and expat life in Cyprus.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600 mb-2">€1,200</p>
            <p className="text-gray-700">Monthly Living Cost</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600 mb-2">€</p>
            <p className="text-gray-700">Euro Currency</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600 mb-2">1.2M</p>
            <p className="text-gray-700">Population</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600 mb-2">EU</p>
            <p className="text-gray-700">EU Member State</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Why Move to Cyprus?</h2>
        <ul className="text-lg text-gray-700 space-y-3 mb-12">
          <li>✓ Mediterranean climate and lifestyle</li>
          <li>✓ EU membership with residency benefits</li>
          <li>✓ Lower cost of living than UK</li>
          <li>✓ Growing business hub</li>
          <li>✓ Friendly expat community</li>
          <li>✓ Beautiful beaches and nature</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6">Digital Nomad Visa</h2>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
          <p className="text-gray-700">
            Cyprus offers a digital nomad visa for remote workers with a minimum monthly income of €2,000. Perfect for professionals working globally while enjoying Mediterranean life.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
            View Visas & Requirements
          </button>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
            Find Housing
          </button>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
            Browse Jobs
          </button>
        </div>
      </div>
    </main>
  );
}
