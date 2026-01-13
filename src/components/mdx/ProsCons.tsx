'use client';

import { motion } from 'framer-motion';

interface ProsConsProps {
  title?: string;
  pros: string[];
  cons: string[];
}

export function ProsCons({ title, pros, cons }: ProsConsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-2xl border border-white/10 p-6"
    >
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pros */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-emerald-400 text-lg">+</span>
            <span className="text-sm font-medium text-emerald-400">Advantages</span>
          </div>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 text-sm text-white/80"
              >
                <span className="text-emerald-400 mt-0.5">✓</span>
                {pro}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-400 text-lg">−</span>
            <span className="text-sm font-medium text-red-400">Considerations</span>
          </div>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 text-sm text-white/80"
              >
                <span className="text-red-400 mt-0.5">×</span>
                {con}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
