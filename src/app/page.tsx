'use client';

import { useState, useCallback, useEffect } from 'react';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useCopilotAction, useCopilotReadable, useCopilotChat } from '@copilotkit/react-core';
import { Role, TextMessage } from '@copilotkit/runtime-client-gql';
import { motion } from 'framer-motion';
import { DynamicView, GeneratedView } from '@/components/DynamicView';

// Types matching database schema
interface Destination {
  slug: string;
  country_name: string;
  flag: string;
  region: string;
  language: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image_url?: string;
  quick_facts?: Array<{ icon: string; label: string; value: string }>;
  highlights?: Array<{ icon: string; text: string } | string>;
  visas?: Array<{
    name: string;
    description?: string;
    requirements?: string[];
    cost?: string;
    duration?: string;
  }>;
  cost_of_living?: Array<{
    cityName: string;
    currency: string;
    costIndex?: number;
    rent1BRCenter?: number;
    rent1BROutside?: number;
    rent3BRCenter?: number;
    groceries?: number;
    dining?: number;
    transportation?: number;
    utilities?: number;
  }>;
}

interface RelocationState {
  currentDestination?: Destination;
  availableDestinations: Destination[];
  customView?: GeneratedView; // AI-generated dynamic views
  userPreferences?: {
    budget?: string;
    climate?: string;
    purpose?: string;
  };
}

// Destination Card Component
function DestinationCard({ destination }: { destination: Destination }) {
  const costData = destination.cost_of_living || [];
  const visas = destination.visas || [];
  const highlights = destination.highlights || [];
  const quickFacts = destination.quick_facts || [];

  // Get first city's cost data for summary
  const primaryCity = costData[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/30"
    >
      {/* Header with Hero Image */}
      {destination.hero_image_url && (
        <div
          className="h-40 rounded-xl mb-6 bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${destination.hero_image_url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className="text-5xl">{destination.flag}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{destination.country_name}</h2>
              <p className="text-amber-300 text-sm">{destination.region}</p>
            </div>
          </div>
        </div>
      )}

      {/* Fallback header if no image */}
      {!destination.hero_image_url && (
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl">{destination.flag}</span>
          <div>
            <h2 className="text-3xl font-bold text-white">{destination.country_name}</h2>
            <p className="text-amber-400">{destination.region}</p>
          </div>
        </div>
      )}

      {/* Hero Text */}
      {destination.hero_title && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">{destination.hero_title}</h3>
          {destination.hero_subtitle && (
            <p className="text-white/60 text-sm mt-1">{destination.hero_subtitle}</p>
          )}
        </div>
      )}

      {/* Cost of Living */}
      {primaryCity && (
        <div className="bg-white/5 rounded-xl p-4 mb-4">
          <h3 className="text-sm font-medium text-white/40 mb-2">Cost of Living - {primaryCity.cityName}</h3>
          {primaryCity.rent1BRCenter && (
            <div className="text-lg font-bold text-emerald-400">
              {primaryCity.currency} {primaryCity.rent1BRCenter.toLocaleString()}/mo (1BR center)
            </div>
          )}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {primaryCity.groceries && (
              <div><span className="text-white/40">Groceries:</span> <span className="text-white/70">{primaryCity.currency} {primaryCity.groceries}</span></div>
            )}
            {primaryCity.dining && (
              <div><span className="text-white/40">Dining:</span> <span className="text-white/70">{primaryCity.currency} {primaryCity.dining}</span></div>
            )}
            {primaryCity.transportation && (
              <div><span className="text-white/40">Transport:</span> <span className="text-white/70">{primaryCity.currency} {primaryCity.transportation}</span></div>
            )}
            {primaryCity.utilities && (
              <div><span className="text-white/40">Utilities:</span> <span className="text-white/70">{primaryCity.currency} {primaryCity.utilities}</span></div>
            )}
          </div>
          {costData.length > 1 && (
            <div className="mt-2 text-xs text-white/40">
              +{costData.length - 1} more cities available
            </div>
          )}
        </div>
      )}

      {/* Visa Options */}
      {visas.length > 0 && (
        <div className="bg-white/5 rounded-xl p-4 mb-4">
          <h3 className="text-sm font-medium text-white/40 mb-2">Visa Options</h3>
          <div className="flex flex-wrap gap-2">
            {visas.slice(0, 4).map((visa) => (
              <span key={visa.name} className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full">
                {visa.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-sm font-medium text-white/40 mb-2">Highlights</h3>
          <ul className="space-y-1">
            {highlights.slice(0, 5).map((highlight, index) => {
              const text = typeof highlight === 'string' ? highlight : highlight.text;
              const icon = typeof highlight === 'string' ? '→' : (highlight.icon || '→');
              return (
                <li key={index} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-amber-400 mt-0.5">{icon}</span>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Quick Facts */}
      {quickFacts.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {quickFacts.slice(0, 4).map((fact, index) => (
            <span key={index} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/10">
              {fact.icon} {fact.label}: {fact.value}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Empty state
function EmptyState() {
  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 p-12 text-center">
      <div className="text-6xl mb-6">🌍</div>
      <h3 className="text-2xl font-bold text-white mb-3">Your Relocation Journey</h3>
      <p className="text-white/60 max-w-md mx-auto">
        Chat with ATLAS to explore destinations. Click a country below or ask about anywhere in the world.
      </p>
    </div>
  );
}

// Loading skeleton
function LoadingSkeleton() {
  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 animate-pulse">
      <div className="h-40 bg-white/10 rounded-xl mb-6" />
      <div className="h-6 bg-white/10 rounded w-2/3 mb-4" />
      <div className="h-4 bg-white/10 rounded w-1/2" />
    </div>
  );
}

export default function Home() {
  const [state, setState] = useState<RelocationState>({
    availableDestinations: [],
  });
  const [loading, setLoading] = useState(true);
  const { appendMessage } = useCopilotChat();

  // Fetch available destinations on mount
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch('/api/destinations');
        if (res.ok) {
          const destinations = await res.json();
          setState(prev => ({ ...prev, availableDestinations: destinations }));
        }
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchDestinations();
  }, []);

  // Make state readable to the AI
  useCopilotReadable({
    description: 'Current relocation exploration state',
    value: state,
  });

  // Action: Show destination
  useCopilotAction({
    name: "show_destination",
    description: "REQUIRED: Show destination details when user asks about a country. Call this whenever a country is mentioned.",
    parameters: [
      { name: "country", type: "string" as const, description: "Country name or slug (e.g., 'Portugal', 'portugal', 'Spain')" },
    ],
    handler: async ({ country }) => {
      console.log('🌍 show_destination called for:', country);

      try {
        // Try exact slug match first, then search
        const slug = country.toLowerCase().replace(/\s+/g, '-');
        let res = await fetch(`/api/destinations?slug=${slug}`);

        if (!res.ok) {
          // Try search
          res = await fetch(`/api/destinations?search=${encodeURIComponent(country)}`);
          if (res.ok) {
            const results = await res.json();
            if (results.length > 0) {
              // Get full details for the first match
              const fullRes = await fetch(`/api/destinations?slug=${results[0].slug}`);
              if (fullRes.ok) {
                const destination = await fullRes.json();
                setState(prev => ({ ...prev, currentDestination: destination, customView: undefined }));
                return `Showing ${destination.country_name}: ${destination.hero_title || 'Great destination for relocation!'}`;
              }
            }
          }
          return `I couldn't find detailed data for "${country}". Try one of our featured destinations!`;
        }

        const destination = await res.json();
        setState(prev => ({ ...prev, currentDestination: destination, customView: undefined }));

        const costInfo = destination.cost_of_living?.monthly_total || 'varies';
        const visaCount = destination.visas?.length || 0;

        return `Showing ${destination.country_name}: ${destination.hero_title || 'Great for relocation!'}. Cost of living: ${costInfo}. ${visaCount} visa options available.`;
      } catch (error) {
        console.error('Error fetching destination:', error);
        return `Error loading destination data. Please try again.`;
      }
    },
    render: ({ status }) => {
      if (status === 'executing') {
        return <div className="text-amber-400 text-sm p-2 bg-amber-500/10 rounded">Loading destination from database...</div>;
      }
      if (status === 'complete') {
        return <div className="text-amber-400 text-sm p-2 bg-amber-500/10 rounded">✓ Destination loaded!</div>;
      }
      return <></>;
    },
  });

  // Action: Save user preferences
  useCopilotAction({
    name: "save_preferences",
    description: "Save user's relocation preferences when they mention budget, climate, or purpose.",
    parameters: [
      { name: "budget", type: "string" as const, description: "Monthly budget range" },
      { name: "climate", type: "string" as const, description: "Climate preference" },
      { name: "purpose", type: "string" as const, description: "Purpose of relocation" },
    ],
    handler: async (prefs) => {
      console.log('💾 Saving preferences:', prefs);
      setState(prev => ({
        ...prev,
        userPreferences: {
          ...prev.userPreferences,
          ...Object.fromEntries(
            Object.entries(prefs).filter(([, v]) => v !== undefined && v !== null)
          ),
        },
      }));
      return `Noted! I'll tailor recommendations based on your preferences.`;
    },
    render: ({ status }) => {
      if (status === 'complete') {
        return <div className="text-emerald-400 text-sm p-2 bg-emerald-500/10 rounded">✓ Preferences saved!</div>;
      }
      return <></>;
    },
  });

  // Action: Generate custom view (MDX-powered dynamic UI composition)
  useCopilotAction({
    name: "generate_custom_view",
    description: `Generate a custom visual comparison or analysis. Use this when users ask to:
- Compare two countries ("Compare Portugal vs Spain")
- See a cost breakdown ("Show me cost of living breakdown for Lisbon")
- Analyze pros and cons ("What are the pros and cons of moving to Thailand?")
- Create custom analysis ("Compare visa options for digital nomads")

This creates dynamic, tailored visualizations based on the user's specific question.`,
    parameters: [
      { name: "title", type: "string" as const, description: "Title for the view" },
      { name: "subtitle", type: "string" as const, description: "Optional subtitle" },
      { name: "view_type", type: "string" as const, description: "Type: 'comparison', 'cost_breakdown', 'pros_cons', 'analysis'" },
      { name: "countries", type: "string" as const, description: "Comma-separated country names involved" },
      { name: "focus", type: "string" as const, description: "What aspect to focus on: 'visa', 'cost', 'lifestyle', 'all'" },
    ],
    handler: async ({ title, subtitle, view_type, countries, focus }) => {
      console.log('🎨 generate_custom_view called:', { title, view_type, countries, focus });

      const countryList = countries?.split(',').map(c => c.trim()) || [];

      // Fetch data for involved countries
      const destinationData: Destination[] = [];
      for (const country of countryList) {
        const slug = country.toLowerCase().replace(/\s+/g, '-');
        try {
          const res = await fetch(`/api/destinations?slug=${slug}`);
          if (res.ok) {
            destinationData.push(await res.json());
          }
        } catch (e) {
          console.error(`Failed to fetch ${country}:`, e);
        }
      }

      // Generate view based on type
      let generatedView: GeneratedView;

      if (view_type === 'comparison' && destinationData.length >= 2) {
        const d1 = destinationData[0];
        const d2 = destinationData[1];

        generatedView = {
          title: title || `${d1.country_name} vs ${d2.country_name}`,
          subtitle: subtitle || 'Side-by-side comparison',
          blocks: [
            {
              type: 'comparison',
              props: {
                countries: [d1.country_name, d2.country_name],
                flags: [d1.flag, d2.flag],
                items: [
                  { label: 'Region', values: [d1.region, d2.region] },
                  { label: 'Language', values: [d1.language, d2.language] },
                  { label: 'Rent (1BR Center)', values: [
                    d1.cost_of_living?.[0] ? `${d1.cost_of_living[0].currency} ${d1.cost_of_living[0].rent1BRCenter?.toLocaleString()}` : 'N/A',
                    d2.cost_of_living?.[0] ? `${d2.cost_of_living[0].currency} ${d2.cost_of_living[0].rent1BRCenter?.toLocaleString()}` : 'N/A'
                  ]},
                  { label: 'Top Visa', values: [
                    d1.visas?.[0]?.name || 'N/A',
                    d2.visas?.[0]?.name || 'N/A'
                  ]},
                  { label: 'Visa Count', values: [
                    `${d1.visas?.length || 0} options`,
                    `${d2.visas?.length || 0} options`
                  ]},
                ],
                highlight: focus === 'cost' ? 'Rent (1BR Center)' : focus === 'visa' ? 'Top Visa' : undefined,
              }
            }
          ]
        };

        // Add pros/cons if focus is lifestyle or all
        if (focus === 'lifestyle' || focus === 'all') {
          const getHighlightTexts = (d: Destination) =>
            d.highlights?.slice(0, 3).map(h => typeof h === 'string' ? h : h.text) || [];

          generatedView.blocks.push({
            type: 'pros_cons',
            props: {
              title: `${d1.country_name} Highlights`,
              pros: getHighlightTexts(d1),
              cons: ['Research visa requirements', 'Consider language barrier', 'Visit before committing']
            }
          });
        }

      } else if (view_type === 'cost_breakdown' && destinationData.length >= 1) {
        const d = destinationData[0];
        const city = d.cost_of_living?.[0];

        if (city) {
          generatedView = {
            title: title || `Cost of Living in ${city.cityName}`,
            subtitle: subtitle || d.country_name,
            blocks: [
              {
                type: 'cost_chart',
                props: {
                  title: `Monthly Expenses in ${city.cityName}`,
                  currency: city.currency,
                  items: [
                    { label: 'Rent (1BR Center)', amount: city.rent1BRCenter || 0, currency: city.currency },
                    { label: 'Groceries', amount: city.groceries || 0, currency: city.currency },
                    { label: 'Dining Out', amount: city.dining || 0, currency: city.currency },
                    { label: 'Transportation', amount: city.transportation || 0, currency: city.currency },
                    { label: 'Utilities', amount: city.utilities || 0, currency: city.currency },
                  ].filter(i => i.amount > 0)
                }
              }
            ]
          };
        } else {
          generatedView = {
            title: 'Cost data not available',
            blocks: [{ type: 'text', props: { content: 'Cost of living data not found for this destination.' }}]
          };
        }

      } else if (view_type === 'pros_cons' && destinationData.length >= 1) {
        const d = destinationData[0];
        const pros = d.highlights?.slice(0, 5).map(h => typeof h === 'string' ? h : h.text) || [];

        generatedView = {
          title: title || `${d.country_name}: Pros & Cons`,
          subtitle: subtitle || 'Things to consider',
          blocks: [
            {
              type: 'pros_cons',
              props: {
                pros,
                cons: [
                  'Bureaucracy can be slow',
                  'Language learning may be needed',
                  'Healthcare system differs from home',
                  'Cultural adjustment period',
                ]
              }
            }
          ]
        };

      } else {
        // Default analysis view
        generatedView = {
          title: title || 'Analysis',
          subtitle,
          blocks: [
            {
              type: 'text',
              props: { content: `Analysis for: ${countries}. Focus: ${focus || 'general'}` }
            }
          ]
        };
      }

      // Clear destination card and show custom view
      setState(prev => ({
        ...prev,
        currentDestination: undefined,
        customView: generatedView
      }));

      return `Generated custom ${view_type} view for ${countries}. The visualization is now displayed.`;
    },
    render: ({ status }) => {
      if (status === 'executing') {
        return <div className="text-purple-400 text-sm p-2 bg-purple-500/10 rounded">Generating custom view...</div>;
      }
      if (status === 'complete') {
        return <div className="text-purple-400 text-sm p-2 bg-purple-500/10 rounded">✓ Custom view generated!</div>;
      }
      return <></>;
    },
  });

  const handleTopicClick = useCallback((country: string) => {
    appendMessage(new TextMessage({ content: `Tell me about ${country}`, role: Role.User }));
  }, [appendMessage]);

  // Available country names for instructions
  const availableCountries = state.availableDestinations
    .map(d => d.country_name)
    .join(', ') || 'Loading...';

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white">
      <CopilotSidebar
        defaultOpen={true}
        instructions={`You are ATLAS, a warm and knowledgeable relocation advisor.

CRITICAL RULES:

1. SINGLE DESTINATION: When a user mentions ONE country, call show_destination:
   - User: "Tell me about Portugal" → show_destination(country: "Portugal")

2. COMPARISONS: When user wants to COMPARE countries, call generate_custom_view:
   - User: "Compare Portugal vs Spain" → generate_custom_view(view_type: "comparison", countries: "Portugal, Spain", focus: "all")
   - User: "Which is cheaper, Thailand or Vietnam?" → generate_custom_view(view_type: "comparison", countries: "Thailand, Vietnam", focus: "cost")

3. COST BREAKDOWN: When user asks about costs in detail:
   - User: "Show me cost breakdown for Lisbon" → generate_custom_view(view_type: "cost_breakdown", countries: "Portugal", focus: "cost")

4. PROS & CONS: When user asks about advantages/disadvantages:
   - User: "What are pros and cons of moving to Spain?" → generate_custom_view(view_type: "pros_cons", countries: "Spain", focus: "lifestyle")

5. PREFERENCES: Call save_preferences when users mention budget, climate, or purpose.

Be conversational and helpful. Keep responses to 2-3 sentences. After showing content, ask a follow-up question.

Available countries: ${availableCountries}`}
        labels={{
          title: 'Chat with ATLAS',
          initial: "Hello! I'm ATLAS, your AI relocation advisor. I can help you explore destinations worldwide with real data on visas, costs, and more.\n\nClick a destination below or tell me what you're looking for!",
        }}
        className="[&_.copilotKitSidebar]:bg-stone-900 [&_.copilotKitSidebar]:border-white/10"
      >
        {/* Main Content */}
        <div className="min-h-screen p-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                Relocation Quest
              </h1>
              <p className="text-white/60">Your AI guide to moving abroad</p>
            </motion.header>

            {/* User Preferences */}
            {state.userPreferences && Object.keys(state.userPreferences).length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap gap-2 mb-6 justify-center"
              >
                {state.userPreferences.budget && (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                    {state.userPreferences.budget}
                  </span>
                )}
                {state.userPreferences.climate && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                    {state.userPreferences.climate}
                  </span>
                )}
                {state.userPreferences.purpose && (
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                    {state.userPreferences.purpose}
                  </span>
                )}
              </motion.div>
            )}

            {/* Dynamic View, Destination Card, or Empty State */}
            {loading ? (
              <LoadingSkeleton />
            ) : state.customView ? (
              <DynamicView view={state.customView} />
            ) : state.currentDestination ? (
              <DestinationCard destination={state.currentDestination} />
            ) : (
              <EmptyState />
            )}

            {/* Quick Topic Pills */}
            {!loading && state.availableDestinations.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <div className="flex flex-wrap justify-center gap-2">
                  {state.availableDestinations.slice(0, 8).map((dest) => (
                    <button
                      key={dest.slug}
                      onClick={() => handleTopicClick(dest.country_name)}
                      className="px-4 py-2 text-sm rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all border border-white/10 hover:border-amber-500/30"
                    >
                      {dest.flag} {dest.country_name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </CopilotSidebar>
    </div>
  );
}
