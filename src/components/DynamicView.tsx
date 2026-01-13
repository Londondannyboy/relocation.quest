'use client';

import { motion } from 'framer-motion';
import { ComparisonTable, CostChart, ProsCons, InfoCard } from './mdx';

// Types for AI-generated views
export interface ViewBlock {
  type: 'comparison' | 'cost_chart' | 'pros_cons' | 'info_card' | 'text' | 'heading';
  props: Record<string, unknown>;
}

export interface GeneratedView {
  title?: string;
  subtitle?: string;
  blocks: ViewBlock[];
}

interface DynamicViewProps {
  view: GeneratedView;
}

export function DynamicView({ view }: DynamicViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Title Section */}
      {view.title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">{view.title}</h2>
          {view.subtitle && (
            <p className="text-white/60 mt-1">{view.subtitle}</p>
          )}
        </div>
      )}

      {/* Render Blocks */}
      {view.blocks.map((block, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {renderBlock(block)}
        </motion.div>
      ))}
    </motion.div>
  );
}

function renderBlock(block: ViewBlock) {
  switch (block.type) {
    case 'comparison':
      return (
        <ComparisonTable
          title={block.props.title as string}
          countries={block.props.countries as string[]}
          flags={block.props.flags as string[]}
          items={block.props.items as Array<{ label: string; values: string[] }>}
          highlight={block.props.highlight as string}
        />
      );

    case 'cost_chart':
      return (
        <CostChart
          title={block.props.title as string}
          subtitle={block.props.subtitle as string}
          items={block.props.items as Array<{ label: string; amount: number; currency: string }>}
          total={block.props.total as number}
          currency={block.props.currency as string}
        />
      );

    case 'pros_cons':
      return (
        <ProsCons
          title={block.props.title as string}
          pros={block.props.pros as string[]}
          cons={block.props.cons as string[]}
        />
      );

    case 'info_card':
      return (
        <InfoCard
          title={block.props.title as string}
          icon={block.props.icon as string}
          variant={block.props.variant as 'default' | 'highlight' | 'warning' | 'success'}
        >
          {block.props.content as string}
        </InfoCard>
      );

    case 'heading':
      return (
        <h3 className="text-xl font-semibold text-amber-400">
          {block.props.text as string}
        </h3>
      );

    case 'text':
      return (
        <p className="text-white/70 leading-relaxed">
          {block.props.content as string}
        </p>
      );

    default:
      return null;
  }
}
