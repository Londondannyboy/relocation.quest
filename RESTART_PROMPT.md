# Relocation Quest - Restart Prompt (Jan 19, 2026)

## Project Overview

Relocation Quest is a conversational AI relocation advisor built with:
- **Frontend**: Next.js 15, React 19, Tailwind, CopilotKit
- **Voice**: Hume EVI with CLM endpoint pointing to Railway agent
- **AI Agent**: Pydantic AI on Railway (`https://relocation-quest-v3-agent-production.up.railway.app`)
- **Database**: Neon PostgreSQL (destinations, articles, user_profiles)
- **Auth**: Neon Auth (`@neondatabase/auth`)
- **Memory**: Zep for user conversation history

**Live URLs**:
- Frontend: https://relocation-quest-v3.vercel.app
- Dashboard: https://relocation-quest-v3.vercel.app/dashboard
- Agent: https://relocation-quest-v3-agent-production.up.railway.app

---

## What Was Completed Today (Jan 19, 2026)

### 1. Frontend Action Naming Conflict - FIXED
- **Problem**: Agent's backend tool `show_destination_card` shadowed frontend action of same name
- **Solution**: Renamed frontend action to `update_destination_view`
- **Files**: `src/app/page.tsx`, `agent/src/agent.py`

### 2. Voice Widget Cleanup - DONE
- Replaced HumeWidget with minimal SyncedVoiceButton on dashboard
- Positioned at center-top below header (no black background)
- Wrapped Dashboard with VoiceChatProvider

### 3. CopilotKit Sidebar - DONE
- Set `defaultOpen={false}` - collapsed by default

### 4. Greeting Logic - DONE
- Returning users detected via Zep `hasHistory` flag
- Returning users get "Welcome back!" (no name)
- New users get "Hi [FirstName]!" greeting
- First name extracted from display name ("Dan Keegan" → "Dan")

### 5. Stage 1 Onboarding - DONE
- 6 required fields before destination advice: persona, location, destination, reason, timeline, budget
- Progress indicator with animated bar
- HITL tools for each field including `confirm_relocation_reason`
- Agent instructions block advice until Stage 1 complete

### 6. Editable Dashboard - DONE
- EditableField component with hover-to-edit UI
- Preferences section editable (country, timeline, budget)

### 7. Country Pills - FIXED
- Pills now directly fetch destination via API (not chat-based)
- Background and content update immediately

---

## Outstanding Issues / Next TODOs

### HIGH PRIORITY

1. **CopilotKit Chat Not Calling Actions Reliably** - PARTIALLY FIXED
   - Added `useRenderToolCall` for `show_destination_card` (following fractional.quest pattern)
   - Now when agent's backend tool is called, UI updates via render hook
   - **Both mechanisms now available:**
     - `useCopilotAction` (`update_destination_view`) - Frontend action
     - `useRenderToolCall` (`show_destination_card`) - Backend tool render
   - **Workaround still works**: Pills directly fetch via API
   - **To test**: Type "Cyprus" in chat and verify main view updates

2. **Voice + Chat Not Fully Synced**
   - Voice goes through Hume → Railway CLM endpoint
   - Chat goes through CopilotKit → Railway AG-UI endpoint
   - These are separate flows - consider unifying

3. **Persona-Specific Generative UX**
   - Plan mentions different question flows for company vs digital nomad vs family
   - Not yet implemented - all personas get same questions

### MEDIUM PRIORITY

4. **Make More Dashboard Fields Editable**
   - Currently only Preferences section is editable
   - Persona card, Destinations, Priorities should also be inline editable

5. **Greeting Time Gap Logic**
   - Plan mentioned: greet by name on first session, then "Welcome back" after 1+ hour gap
   - Current: uses Zep hasHistory (any prior conversation = returning)
   - Consider timestamp-based session tracking

6. **Profile First Name Field**
   - User should be able to set/update their preferred first name
   - Currently extracted from display name, not editable

### LOW PRIORITY

7. **Stage 2 Onboarding**
   - After Stage 1 complete, collect deeper preferences
   - Persona-specific questions

8. **Saved Destinations Feature**
   - user_saved_items table exists but not used
   - Let users save/bookmark destinations

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main home page with CopilotSidebar, pills, destination display |
| `src/app/dashboard/DashboardClient.tsx` | Dashboard with Stage 1 progress, HITL tools, editable cards |
| `src/components/voice/VoiceChatSync.tsx` | Voice provider, Zep context fetching, system prompt building |
| `src/app/api/zep-context/route.ts` | Zep memory API with hasHistory flag |
| `src/app/api/copilotkit/route.ts` | CopilotKit runtime → Railway AG-UI |
| `agent/src/agent.py` | Pydantic AI agent with CLM endpoint, HITL tools, greeting logic |

---

## Environment Variables Needed

```bash
# Database
DATABASE_URL=postgresql://...

# CopilotKit (uses Railway agent)
AGENT_URL=https://relocation-quest-v3-agent-production.up.railway.app

# Hume EVI
HUME_API_KEY=...
HUME_SECRET_KEY=...
NEXT_PUBLIC_HUME_CONFIG_ID=f9f639cf-8e9e-4eb1-8f1b-09db5bf2828b

# Neon Auth
NEON_AUTH_BASE_URL=...

# Zep Memory
ZEP_API_KEY=...

# Unsplash (optional)
UNSPLASH_ACCESS_KEY=...
```

---

## Commands

```bash
# Start dev server
npm run dev -- -p 4000

# Type check
npx tsc --noEmit

# Check Railway agent health
curl https://relocation-quest-v3-agent-production.up.railway.app/health
```

---

## Architecture Notes

### CopilotKit Flow
```
User types in chat → CopilotKit → /api/copilotkit → HttpAgent → Railway AG-UI
Railway agent processes → Returns tool calls/text → CopilotKit executes frontend actions
```

### Hume Voice Flow
```
User speaks → Hume EVI → Railway CLM endpoint (/chat/completions)
Railway returns SSE stream → Hume speaks response
```

### HITL Confirmation Flow
```
Agent calls confirm_persona(persona, user_id)
→ CopilotKit renders useHumanInTheLoop UI
→ User clicks Confirm
→ Handler saves to /api/user-profile
→ Local state updates
→ respond({ confirmed: true })
```

---

## Recent Commits (Jan 19, 2026)

1. `24be1c4` - Update CLAUDE.md with Jan 19 session progress
2. `df8c9d8` - Fix country pills and use first name for greetings
3. `98f052e` - Add inline editable profile cards to dashboard
4. `97f4323` - Add Stage 1 onboarding completion check and progress UI
5. `2a39f27` - Fix greeting logic for returning users
6. `88b5f3c` - Replace HumeWidget with SyncedVoiceButton, collapse sidebar by default
7. `6db170c` - Update agent instructions to call update_destination_view frontend action

---

## Starting Point for Next Session

1. Read `CLAUDE.md` for full project context
2. Check this file for outstanding issues
3. Test: Click country pills on home page - should update background and content
4. Test: Dashboard Stage 1 progress indicator should show
5. Test: Greeting should use first name only

**Primary focus**: Investigate why CopilotKit chat doesn't reliably call frontend actions when user types country names.
