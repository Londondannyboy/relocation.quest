'use client';

import dynamic from 'next/dynamic';

// Dynamically import WorldMap with no SSR
const WorldMap = dynamic(
  () => import('./WorldMap').then((mod) => mod.WorldMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] bg-stone-900/80 rounded-2xl flex items-center justify-center border border-white/10">
        <div className="text-white/50 animate-pulse">Loading map...</div>
      </div>
    ),
  }
);

interface Country {
  slug: string;
  country_name: string;
  flag: string;
  region: string;
  quality_of_life?: {
    overall_score?: number;
    safety_index?: number;
  };
  digital_nomad_info?: {
    visa_available?: boolean;
    min_income_monthly_eur?: number;
  };
}

interface WorldMapWrapperProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
  selectedCountry?: string;
}

export function WorldMapWrapper(props: WorldMapWrapperProps) {
  return <WorldMap {...props} />;
}
