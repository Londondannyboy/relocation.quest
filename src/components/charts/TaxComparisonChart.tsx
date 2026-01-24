'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface TaxComparisonChartProps {
  title?: string;
  countries: Array<{
    country: string;
    flag?: string;
    corporateTax: number;
    incomeTax: number;
    capitalGainsTax?: number;
    vat?: number;
  }>;
  persona?: string;
}

export function TaxComparisonChart({ title, countries, persona }: TaxComparisonChartProps) {
  const data = countries.map(c => ({
    name: `${c.flag || ''} ${c.country}`,
    'Corporate Tax': c.corporateTax,
    'Income Tax': c.incomeTax,
    ...(c.capitalGainsTax !== undefined ? { 'Capital Gains': c.capitalGainsTax } : {}),
    ...(c.vat !== undefined ? { 'VAT': c.vat } : {}),
  }));

  const personaNote = persona === 'corporate'
    ? 'Key metric: Corporate tax rate determines company domicile advantage'
    : persona === 'hnw'
    ? 'Key metrics: Capital gains and income tax for wealth optimization'
    : persona === 'digital_nomad'
    ? 'Key metric: Income tax on foreign-sourced income'
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 p-6"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">{title || 'Tax Comparison'}</h3>
        {personaNote && (
          <p className="text-xs text-amber-400/80 mt-1">{personaNote}</p>
        )}
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="name"
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
          />
          <YAxis
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            tickFormatter={(v) => `${v}%`}
            domain={[0, 50]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30,30,30,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
            }}
            formatter={(value) => [`${Number(value)}%`, '']}
          />
          <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
          <Bar dataKey="Corporate Tax" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Income Tax" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Capital Gains" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="VAT" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
