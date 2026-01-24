'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

interface BudgetPieChartProps {
  title?: string;
  items: Array<{
    label: string;
    amount: number;
    color?: string;
  }>;
  currency?: string;
  persona?: string;
}

const COLORS = ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ef4444', '#06b6d4', '#f97316', '#ec4899'];

export function BudgetPieChart({ title, items, currency = '\u20AC', persona }: BudgetPieChartProps) {
  const total = items.reduce((sum, item) => sum + item.amount, 0);

  const data = items.map((item, idx) => ({
    name: item.label,
    value: item.amount,
    percentage: ((item.amount / total) * 100).toFixed(1),
    color: item.color || COLORS[idx % COLORS.length],
  }));

  const personaLabel = persona ? {
    corporate: 'Corporate Budget',
    hnw: 'HNW Lifestyle Budget',
    digital_nomad: 'Digital Nomad Budget',
    medical: 'Medical Relocation Budget',
    family: 'Family Budget',
    retiree: 'Retirement Budget',
    lifestyle: 'Lifestyle Budget',
  }[persona] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 p-6"
    >
      {(title || personaLabel) && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">{title || 'Monthly Budget Breakdown'}</h3>
          {personaLabel && (
            <p className="text-sm text-amber-400/80 mt-1">{personaLabel}</p>
          )}
        </div>
      )}

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={({ name, value }) => `${name} (${((Number(value) / total) * 100).toFixed(1)}%)`}
            labelLine={{ stroke: 'rgba(255,255,255,0.3)' }}
            fill="#f59e0b"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30,30,30,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
            }}
            formatter={(value) => [`${currency}${Number(value).toLocaleString()}`, '']}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-2 text-center">
        <span className="text-white/60 text-sm">Total: </span>
        <span className="text-xl font-bold text-white">{currency}{total.toLocaleString()}/mo</span>
      </div>
    </motion.div>
  );
}
