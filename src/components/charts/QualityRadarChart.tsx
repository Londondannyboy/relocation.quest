'use client';

import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface QualityRadarChartProps {
  title?: string;
  country: string;
  flag?: string;
  metrics: Array<{
    label: string;
    value: number;
    maxValue?: number;
    icon?: string;
  }>;
  compareCountry?: string;
  compareFlag?: string;
  compareMetrics?: Array<{
    label: string;
    value: number;
    maxValue?: number;
  }>;
  overallScore?: number;
}

export function QualityRadarChart({
  title,
  country,
  flag,
  metrics,
  compareCountry,
  compareFlag,
  compareMetrics,
  overallScore,
}: QualityRadarChartProps) {
  const data = metrics.map((m, idx) => ({
    subject: m.icon ? `${m.icon} ${m.label}` : m.label,
    value: m.value,
    fullMark: m.maxValue || 100,
    ...(compareMetrics?.[idx] ? { compare: compareMetrics[idx].value } : {}),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {title || 'Quality of Life'}
          </h3>
          <p className="text-sm text-white/60">
            {flag} {country}
            {compareCountry && ` vs ${compareFlag || ''} ${compareCountry}`}
          </p>
        </div>
        {overallScore !== undefined && (
          <div className="text-right">
            <div className="text-2xl font-bold text-amber-400">{overallScore.toFixed(1)}</div>
            <div className="text-xs text-white/50">Overall</div>
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="rgba(255,255,255,0.15)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
          />
          <PolarRadiusAxis
            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9 }}
            domain={[0, 100]}
            axisLine={false}
          />
          <Radar
            name={`${flag || ''} ${country}`}
            dataKey="value"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.3}
          />
          {compareMetrics && (
            <Radar
              name={`${compareFlag || ''} ${compareCountry}`}
              dataKey="compare"
              stroke="#06b6d4"
              fill="#06b6d4"
              fillOpacity={0.2}
            />
          )}
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(30,30,30,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          {compareMetrics && <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />}
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
