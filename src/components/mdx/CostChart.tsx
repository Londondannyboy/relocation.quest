'use client';

import { motion } from 'framer-motion';

interface CostItem {
  label: string;
  amount: number;
  currency: string;
  color?: string;
}

interface CostChartProps {
  title?: string;
  subtitle?: string;
  items: CostItem[];
  total?: number;
  currency?: string;
}

export function CostChart({ title, subtitle, items, total, currency = 'EUR' }: CostChartProps) {
  const maxAmount = Math.max(...items.map(i => i.amount));
  const calculatedTotal = total || items.reduce((sum, i) => sum + i.amount, 0);

  const colors = [
    'bg-amber-500',
    'bg-emerald-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 p-6"
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, index) => {
          const percentage = (item.amount / maxAmount) * 100;
          const barColor = item.color || colors[index % colors.length];

          return (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/70">{item.label}</span>
                <span className="text-white font-medium">
                  {item.currency || currency} {item.amount.toLocaleString()}
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`h-full ${barColor} rounded-full`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
        <span className="text-white/60">Total Monthly</span>
        <span className="text-xl font-bold text-emerald-400">
          {currency} {calculatedTotal.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
}
