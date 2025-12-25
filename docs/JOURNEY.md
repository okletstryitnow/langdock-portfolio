# Development Journey: LangDock Portfolio

## TL;DR

| Metric | Value |
|:-------|:------|
| **Test Runs** | 35 |
| **Total Cost** | $3.46 |
| **Error Types Identified** | 5 |
| **Assistants Built** | 3 |

---

## Phase 1: Setup & Data

**What I did:**
- Subscribed to LangDock Business plan
- Created test dataset: 10 accounts, 15 invoices, 12 tickets, 10 leads
- Correctly linked IDs (Invoices → Accounts → Tickets)

**Key Learning: Data consistency is the foundation**

> Problem: Workflow failed - invoices couldn't be mapped to accounts.
> Root Cause: Inconsistent IDs (ACC-2024-001 vs. ACC-001).
> Fix: Complete regeneration with validation script.

**Transferable:** Early validation saves money. In the real world, this would be an API call to Salesforce - same logic.

---

## Phase 2: Assistants & Prompts

**What I did:**
- Configured Sales Research Assistant
- Iterated prompt from v1.0 (generic) to v2.0 (adapted to data structure)
- Improved score: 3.0/5 → 4.7/5

**Key Learning: Adapting prompts to data structure makes 70% of the difference**

```
BEFORE: "Analyze the accounts and prioritize them."

AFTER: "Analyze using the following fields:
- mrr_eur (numeric)
- health_score (0-100, where <50 = Churn Risk)
- icp_score (0-100)
```

> Prioritization based on defined scoring formula: **[SCORING.md](./SCORING.md)**

---

## Phase 3: Workflow & Error Marathon

**What I did:**
- Built 7-node workflow (Trigger → Files → Agent → Email)
- Executed 35 test runs
- Documented 5 distinct error types

### The 5-Phase Error Taxonomy

| Phase | Error | Cost | Fix |
|:------|:------|:-----|:----|
| 1 | File Download (wrong IDs) | $0 | Use File Picker |
| 2 | Schema Mismatch (Markdown instead of JSON) | $0.64 | Explicit Output Schema |
| 3 | Connection (Gmail not connected) | $0.50 | Integration BEFORE Build |
| 4 | Email Rendering (broken Markdown) | $0 | Plain Text instead of HTML |
| 5 | Production (stable) | $0.49 | - |

**Key Learning: Early validation saves money**

> 80% of costs occurred in Phase 2 because the agent was executed.
> Solution: Validation BEFORE expensive LLM calls.

---

## Testing Results

| Assistant | Score | Highlights |
|:----------|:------|:-----------|
| Sales Research | 4.7/5 | Data structure, churn risk detection |
| Customer Support | 5.0/5 | Structured knowledge, security rules |
| HR Policy | 5.0/5 | DACH-specific, language rules |

**Scoring Criteria:**
- Data Accuracy (30%)
- Context Understanding (25%)
- Output Structure (20%)
- Rule Adherence (15%)
- Added Value (10%)

---

## Next Focus

- **Production Scale:** Monitoring, alerting, multi-user support
- **Custom API Integration:** Integration without no-code platform
- **Monitoring:** LangSmith/Helicone for LLM metrics
