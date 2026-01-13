'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'warning' | 'success';
}

export function InfoCard({ title, icon, children, variant = 'default' }: InfoCardProps) {
  const variants = {
    default: 'border-white/10 bg-white/5',
    highlight: 'border-amber-500/30 bg-amber-500/10',
    warning: 'border-orange-500/30 bg-orange-500/10',
    success: 'border-emerald-500/30 bg-emerald-500/10',
  };

  const iconColors = {
    default: 'text-white/60',
    highlight: 'text-amber-400',
    warning: 'text-orange-400',
    success: 'text-emerald-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-4 ${variants[variant]}`}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <span className={`text-2xl ${iconColors[variant]}`}>{icon}</span>
        )}
        <div>
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <div className="text-sm text-white/70">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
