# [Project Name] - Product Requirements Document

> This is the **north star document**. All development decisions reference this PRD.

## Vision

[One sentence describing what this project is and why it exists]

## Problem Statement

[What problem does this solve? Who has this problem?]

## Target Users

| User Type | Description | Primary Need |
|-----------|-------------|--------------|
| User Type 1 | Description | What they need |
| User Type 2 | Description | What they need |

## Core Features

### 1. [Feature Name]

**User Story**: As a [user type], I want [goal] so that [benefit].

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

### 2. [Feature Name]

**User Story**: As a [user type], I want [goal] so that [benefit].

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2

## Non-Goals (Explicit Exclusions)

- What we are NOT building
- Features we're deferring
- Out of scope items

## Technical Architecture

### System Overview

```
[User] → [Frontend] → [Agent] → [Database]
              ↓
         [Voice (optional)]
```

### Tech Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Frontend | Next.js 15 | SSR, App Router |
| Agent | Pydantic AI | Type-safe tools |
| Database | Neon PostgreSQL | Serverless, branching |
| Voice | Hume EVI | Low-latency voice |

### Key Integration Points

1. **Frontend ↔ Agent**: AG-UI protocol via CopilotKit
2. **Agent ↔ Database**: Direct PostgreSQL queries
3. **Voice ↔ Agent**: CLM endpoint (OpenAI-compatible)

## Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Metric 1 | Target value | Measurement method |
| Metric 2 | Target value | Measurement method |

## Milestones

### Phase 1: MVP
- [ ] Core feature 1
- [ ] Core feature 2
- [ ] Basic deployment

### Phase 2: Enhancement
- [ ] Feature 3
- [ ] Feature 4

### Phase 3: Scale
- [ ] Performance optimization
- [ ] Additional features

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Risk 1 | Medium | High | Mitigation strategy |
| Risk 2 | Low | Medium | Mitigation strategy |

## Open Questions

- [ ] Question 1 that needs resolution
- [ ] Question 2 that needs resolution

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| YYYY-MM-DD | Initial PRD created | Name |
