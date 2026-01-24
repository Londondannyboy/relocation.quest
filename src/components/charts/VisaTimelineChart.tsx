'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface VisaTimelineChartProps {
  title?: string;
  visas: Array<{
    name: string;
    processingDays: number;
    cost?: number;
    currency?: string;
    type?: string;
  }>;
  country?: string;
  flag?: string;
}

export function VisaTimelineChart({ title, visas, country, flag }: VisaTimelineChartProps) {
  const data = visas.map(v => ({
    name: v.name,
    days: v.processingDays,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 p-6"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">
          {title || `${flag || ''} ${country || ''} Visa Processing Times`}
        </h3>
        <p className="text-xs text-white/50 mt-1">Estimated processing time in days</p>
      </div>

      <ResponsiveContainer width="100%" height={Math.max(200, visas.length * 50)}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 60, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            tickFormatter={(v) => `${v}d`}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            width={120}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30,30,30,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
            }}
            formatter={(value) => [`${Number(value)} days`, 'Processing']}
          />
          <Bar dataKey="days" fill="#06b6d4" radius={[0, 4, 4, 0]}>
            <LabelList
              dataKey="days"
              position="right"
              fill="rgba(255,255,255,0.7)"
              fontSize={11}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
