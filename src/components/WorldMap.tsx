'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Country coordinates for our destinations
const countryCoordinates: Record<string, { lat: number; lng: number; zoom: number }> = {
  cyprus: { lat: 35.1264, lng: 33.4299, zoom: 8 },
  malta: { lat: 35.9375, lng: 14.3754, zoom: 10 },
  portugal: { lat: 39.3999, lng: -8.2245, zoom: 6 },
  spain: { lat: 40.4168, lng: -3.7038, zoom: 5 },
  greece: { lat: 39.0742, lng: 21.8243, zoom: 6 },
  italy: { lat: 41.8719, lng: 12.5674, zoom: 5 },
  croatia: { lat: 45.1, lng: 15.2, zoom: 6 },
  thailand: { lat: 15.87, lng: 100.9925, zoom: 5 },
  indonesia: { lat: -0.7893, lng: 113.9213, zoom: 4 },
  singapore: { lat: 1.3521, lng: 103.8198, zoom: 10 },
  uae: { lat: 23.4241, lng: 53.8478, zoom: 6 },
  mexico: { lat: 23.6345, lng: -102.5528, zoom: 4 },
  'costa-rica': { lat: 9.7489, lng: -83.7534, zoom: 7 },
  panama: { lat: 8.538, lng: -80.7821, zoom: 7 },
  malaysia: { lat: 4.2105, lng: 101.9758, zoom: 5 },
  vietnam: { lat: 14.0583, lng: 108.2772, zoom: 5 },
  philippines: { lat: 12.8797, lng: 121.774, zoom: 5 },
};

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

interface WorldMapProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
  selectedCountry?: string;
}

export function WorldMap({ countries, onSelectCountry, selectedCountry }: WorldMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  // Filter countries that have coordinates
  const mappedCountries = countries.filter((c) => countryCoordinates[c.slug]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!isClient || !mapContainerRef.current || mapRef.current) return;

    // Create map
    const map = L.map(mapContainerRef.current, {
      center: [30, 20],
      zoom: 2,
      scrollWheelZoom: true,
      zoomControl: true,
    });

    // Add dark tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isClient]);

  // Add markers
  useEffect(() => {
    if (!mapRef.current || !isClient) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add new markers
    mappedCountries.forEach((country) => {
      const coords = countryCoordinates[country.slug];
      if (!coords) return;

      const marker = L.marker([coords.lat, coords.lng], { icon: DefaultIcon })
        .addTo(mapRef.current!);

      // Create popup content
      const popupContent = `
        <div style="text-align: center; min-width: 120px;">
          <div style="font-size: 28px; margin-bottom: 4px;">${country.flag}</div>
          <div style="font-weight: 600; margin-bottom: 2px;">${country.country_name}</div>
          <div style="font-size: 11px; color: #9ca3af; margin-bottom: 6px;">${country.region}</div>
          ${country.quality_of_life?.overall_score
            ? `<div style="font-size: 11px; color: #34d399; margin-bottom: 8px;">QoL: ${country.quality_of_life.overall_score.toFixed(1)}/10</div>`
            : ''
          }
          ${country.digital_nomad_info?.visa_available
            ? `<div style="font-size: 10px; color: #fbbf24; margin-bottom: 8px;">DN Visa Available</div>`
            : ''
          }
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        onSelectCountry(country);
      });

      marker.on('mouseover', () => {
        setHoveredCountry(country);
        marker.openPopup();
      });

      marker.on('mouseout', () => {
        setHoveredCountry(null);
      });

      markersRef.current.push(marker);
    });
  }, [mappedCountries, onSelectCountry, isClient]);

  // Fly to selected country
  useEffect(() => {
    if (!mapRef.current || !selectedCountry) return;

    const coords = countryCoordinates[selectedCountry];
    if (coords) {
      mapRef.current.flyTo([coords.lat, coords.lng], coords.zoom, {
        duration: 1.5,
      });
    }
  }, [selectedCountry]);

  if (!isClient) {
    return (
      <div className="w-full h-[400px] bg-stone-900/80 rounded-2xl flex items-center justify-center border border-white/10">
        <div className="text-white/50 animate-pulse">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={mapContainerRef}
        className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10"
      />

      {/* Hover Info Card */}
      <AnimatePresence>
        {hoveredCountry && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 z-[1000]"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{hoveredCountry.flag}</span>
              <div>
                <div className="text-white font-semibold">{hoveredCountry.country_name}</div>
                <div className="text-white/50 text-xs">{hoveredCountry.region}</div>
                {hoveredCountry.digital_nomad_info?.visa_available && (
                  <div className="text-emerald-400 text-xs mt-1">
                    Digital Nomad Visa Available
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 z-[1000]">
        <div className="text-xs text-white/50">
          {mappedCountries.length} destinations • Click markers to explore
        </div>
      </div>

      {/* Region Stats */}
      <div className="absolute top-4 right-4 flex flex-wrap gap-2 z-[1000]">
        {['Europe', 'Asia', 'Americas', 'Middle East'].map((region) => {
          const count = mappedCountries.filter((c) => c.region === region).length;
          if (count === 0) return null;
          return (
            <div
              key={region}
              className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-white/70"
            >
              {region}: {count}
            </div>
          );
        })}
      </div>
    </div>
  );
}
