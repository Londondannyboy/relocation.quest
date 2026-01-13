'use client';

import { motion } from 'framer-motion';

interface ComparisonItem {
  label: string;
  values: string[];
}

interface ComparisonTableProps {
  title?: string;
  countries: string[];
  flags?: string[];
  items: ComparisonItem[];
  highlight?: string; // Which row to highlight
}

export function ComparisonTable({ title, countries, flags = [], items, highlight }: ComparisonTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
    >
      {title && (
        <div className="px-6 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-6 py-3 text-left text-sm font-medium text-white/40">Category</th>
            {countries.map((country, i) => (
              <th key={country} className="px-6 py-3 text-left text-sm font-medium text-amber-400">
                {flags[i] && <span className="mr-2">{flags[i]}</span>}
                {country}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.label}
              className={`border-b border-white/5 ${
                item.label === highlight ? 'bg-amber-500/10' : ''
              }`}
            >
              <td className="px-6 py-3 text-sm text-white/60">{item.label}</td>
              {item.values.map((value, i) => (
                <td key={i} className="px-6 py-3 text-sm text-white">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
