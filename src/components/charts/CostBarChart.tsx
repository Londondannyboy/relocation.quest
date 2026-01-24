'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CostBarChartProps {
  title?: string;
  items: Array<{
    label: string;
    amount: number;
    currency?: string;
  }>;
  currency?: string;
  compareItems?: Array<{
    label: string;
    amount: number;
    currency?: string;
  }>;
  compareLabel?: string;
  primaryLabel?: string;
}

export function CostBarChart({ title, items, currency = '\u20AC', compareItems, compareLabel, primaryLabel }: CostBarChartProps) {
  const data = items.map((item, idx) => ({
    name: item.label,
    value: item.amount,
    ...(compareItems?.[idx] ? { compare: compareItems[idx].amount } : {}),
  }));

  const total = items.reduce((sum, item) => sum + item.amount, 0);
  const compareTotal = compareItems?.reduce((sum, item) => sum + item.amount, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 p-6"
    >
      {title && (
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      )}
      {(primaryLabel || compareLabel) && (
        <div className="flex gap-4 mb-4 text-xs">
          {primaryLabel && (
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-amber-500 inline-block" />
              <span className="text-white/70">{primaryLabel}</span>
            </span>
          )}
          {compareLabel && (
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-cyan-500 inline-block" />
              <span className="text-white/70">{compareLabel}</span>
            </span>
          )}
        </div>
      )}

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="name"
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            angle={-20}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            tickFormatter={(v) => `${currency}${v}`}
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
          <Bar dataKey="value" fill="#f59e0b" radius={[4, 4, 0, 0]} name={primaryLabel || 'Amount'} />
          {compareItems && (
            <Bar dataKey="compare" fill="#06b6d4" radius={[4, 4, 0, 0]} name={compareLabel || 'Compare'} />
          )}
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
        <span className="text-white/60 text-sm">Monthly Total</span>
        <div className="flex gap-4">
          <span className="text-xl font-bold text-white">
            {currency}{total.toLocaleString()}
          </span>
          {compareTotal !== undefined && (
            <span className="text-xl font-bold text-cyan-400">
              {currency}{compareTotal.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
