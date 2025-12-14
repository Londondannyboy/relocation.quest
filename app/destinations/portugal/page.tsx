'use client';

export default function PortugalPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Moving to Portugal</h1>
          <p className="text-xl text-green-100">Complete relocation guide for Portugal including visas, jobs, lifestyle, and expat community.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Why Move to Portugal?</h2>
        <ul className="text-lg text-gray-700 space-y-3 mb-12">
          <li>✓ Affordable living costs in Europe</li>
          <li>✓ Golden Visa for investors</li>
          <li>✓ Beautiful coastline and nature</li>
          <li>✓ Friendly expat community</li>
          <li>✓ Good weather year-round</li>
          <li>✓ EU membership benefits</li>
        </ul>

        <div className="space-y-4">
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">View Full Guide</button>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">Browse Portugal Jobs</button>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">Find Services</button>
        </div>
      </div>
    </main>
  );
}
