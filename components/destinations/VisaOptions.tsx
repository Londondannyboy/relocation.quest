import { VisaOption } from '@/lib/destinations/types'

interface VisaOptionsProps {
  visas: VisaOption[]
}

export function VisaOptions({ visas }: VisaOptionsProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Visa Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visas.map((visa, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold">{visa.name}</h3>
              <div className="flex gap-2">
                {visa.isWorkPermit && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Work Permit
                  </span>
                )}
                {visa.isResidencyPath && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    PR Path
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-700 mb-4">{visa.description}</p>

            <div className="space-y-2 text-sm">
              {visa.processingTime && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-medium w-32">Processing Time:</span>
                  <span className="text-gray-900">{visa.processingTime}</span>
                </div>
              )}
              {visa.cost && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-medium w-32">Cost:</span>
                  <span className="text-gray-900 font-semibold">{visa.cost}</span>
                </div>
              )}
            </div>

            {visa.requirements && visa.requirements.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
                <ul className="space-y-1">
                  {visa.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
