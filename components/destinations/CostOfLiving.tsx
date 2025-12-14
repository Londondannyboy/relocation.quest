'use client'

import { CostOfLiving as CostData } from '@/lib/destinations/types'
import { useState } from 'react'

interface CostOfLivingProps {
  costs: CostData[]
  countryName: string
}

export function CostOfLiving({ costs, countryName }: CostOfLivingProps) {
  const [selectedCity, setSelectedCity] = useState(0)
  const currentCost = costs[selectedCity]

  const formatCurrency = (amount: number | undefined, currency: string) => {
    if (!amount) return 'N/A'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const monthlyTotal = (
    (currentCost.rent1BRCenter || 0) +
    (currentCost.utilities || 0) +
    (currentCost.groceries || 0) +
    (currentCost.transportation || 0) +
    (currentCost.dining || 0)
  )

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Cost of Living</h2>

      {/* City selector */}
      {costs.length > 1 && (
        <div className="flex gap-3 mb-8">
          {costs.map((cost, index) => (
            <button
              key={index}
              onClick={() => setSelectedCity(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCity === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cost.cityName || countryName}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cost breakdown */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Monthly Expenses (Single Person)</h3>
            <div className="space-y-3">
              {currentCost.rent1BRCenter && (
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Rent (1BR, City Center)</span>
                  <span className="font-bold">{formatCurrency(currentCost.rent1BRCenter, currentCost.currency)}</span>
                </div>
              )}
              {currentCost.utilities && (
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Utilities (Electricity, Water, Internet)</span>
                  <span className="font-bold">{formatCurrency(currentCost.utilities, currentCost.currency)}</span>
                </div>
              )}
              {currentCost.groceries && (
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Groceries</span>
                  <span className="font-bold">{formatCurrency(currentCost.groceries, currentCost.currency)}</span>
                </div>
              )}
              {currentCost.transportation && (
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Transportation</span>
                  <span className="font-bold">{formatCurrency(currentCost.transportation, currentCost.currency)}</span>
                </div>
              )}
              {currentCost.dining && (
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Dining Out</span>
                  <span className="font-bold">{formatCurrency(currentCost.dining, currentCost.currency)}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-blue-50 rounded-lg px-4 mt-4">
                <span className="font-bold text-lg">Total Monthly Cost</span>
                <span className="font-bold text-2xl text-blue-600">
                  {formatCurrency(monthlyTotal, currentCost.currency)}
                </span>
              </div>
            </div>
          </div>

          {/* Housing options */}
          {(currentCost.rent1BROutside || currentCost.rent3BRCenter) && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Housing Options</h3>
              <div className="grid grid-cols-2 gap-4">
                {currentCost.rent1BROutside && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">1BR Outside Center</p>
                    <p className="text-xl font-bold">{formatCurrency(currentCost.rent1BROutside, currentCost.currency)}</p>
                  </div>
                )}
                {currentCost.rent3BRCenter && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">3BR City Center</p>
                    <p className="text-xl font-bold">{formatCurrency(currentCost.rent3BRCenter, currentCost.currency)}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Cost index comparison */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Cost Comparison</h3>
            <div className="text-center mb-4">
              <div className="text-6xl font-black mb-2">{currentCost.costIndex}%</div>
              <p className="text-blue-100">of London prices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-100 mb-2">You'll save approximately:</p>
              <p className="text-3xl font-bold">{100 - currentCost.costIndex}%</p>
              <p className="text-sm text-blue-100 mt-2">compared to living in London</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
