import { QuickFact } from '@/lib/destinations/types'

interface QuickFactsProps {
  facts: QuickFact[]
}

export function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {facts.map((fact, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            {fact.icon && (
              <div className="text-4xl mb-3">{fact.icon}</div>
            )}
            <p className="text-2xl font-bold text-gray-900 mb-1">{fact.value}</p>
            <p className="text-sm text-gray-600">{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
