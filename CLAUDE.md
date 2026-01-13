# Relocation Quest V3

> **Cole Medin Methodology**: PRD-first, modular rules, command-ify, context reset, system evolution.

## Quick Start

```bash
# Frontend
npm run dev              # → localhost:3000

# Backend
cd agent && source .venv/bin/activate
uvicorn src.agent:app --reload --port 8000
```

## Architecture

Voice-first AI relocation advisor. Single-page conversational experience where CopilotKit AG-UI renders generative components based on user queries. All destination data lives in Neon PostgreSQL.

---

## Key Files

| Purpose | Location |
|---------|----------|
| Main page | `src/app/page.tsx` |
| CopilotKit layout | `src/app/layout.tsx` |
| Agent | `agent/src/agent.py` |
| Database queries | `agent/src/database.py` |
| Generative UI | `src/components/generative/` |

---

## Database (Neon)

| Table | Records | Purpose |
|-------|---------|---------|
| destinations | 17 | Full structured data (visa, cost, education, company, property, tax, residency) |
| articles | 210 | Relocation guides |
| jobs | 217 | Job listings |
| topic_images | 22 | Background images |

---

## Agent Tools (6 Core)

| Tool | Purpose |
|------|---------|
| `show_destination` | Full destination reveal with all sections |
| `compare_destinations` | Side-by-side comparison |
| `search_content` | Articles and guides |
| `show_visas` | Visa options |
| `show_costs` | Cost of living |
| `get_jobs` | Job listings |

---

## Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/prime` | Load project context | Start of session |
| `/plan {feature}` | Create implementation plan | Before coding features |
| `/execute {plan}` | Build from plan (fresh context) | After plan approval |
| `/evolve` | Improve system after bugs | After fixing issues |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind |
| AI Chat | CopilotKit AG-UI |
| Voice | Hume EVI |
| Auth | Neon Auth (@stackframe/stack) |
| Agent | Pydantic AI + FastAPI |
| Database | Neon PostgreSQL |
| Memory | Zep |

---

## Environment Variables

```bash
DATABASE_URL=postgresql://neondb_owner:...
AGENT_URL=http://localhost:8000/agui
HUME_API_KEY=...
ZEP_API_KEY=...
```
