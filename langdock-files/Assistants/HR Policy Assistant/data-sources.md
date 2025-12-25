# HR Policy Assistant - Data Sources

## Overview
The HR Policy Assistant is the central point of contact for all questions about personnel policies at FlowSync.

---

## Primary Data Sources (HR Policies)

All policies are available as Markdown files.

| File | Path | Content | Priority |
|-------|------|--------|-----------|
| Vacation Policy | `/data/hr-policies/urlaubsregelung.md` | Process, entitlement (30 days), special leave | High |
| Remote Work | `/data/hr-policies/remote-work-policy.md` | Hybrid model (2 days office/week) | High |
| Travel Expenses | `/data/hr-policies/reisekostenrichtlinie.md` | Expenses, budgets (e.g., hotel €150) | Medium |
| Benefits | `/data/hr-policies/benefits-overview.md` | Urban Sports, BVG, lunch | Medium |
| Equipment | `/data/hr-policies/home-office-equipment.md` | Budget (€1,500), ordering process | Medium |
| Onboarding | `/data/hr-policies/onboarding-guide.md` | Checklists for new employees | Low |

---

## Secondary Data Sources

### Company Context
| File | Path | Purpose |
|-------|------|-------|
| Company Profile | `/company-context/company-profile.md` | Values & culture |

---

## Integration Notes

### Language
- **Input:** Can be German or English.
- **Output:** **Always German**, unless the user explicitly requests English.
- **Rationale:** HR documents are legally binding only in the original (German).

### Data Privacy
- This assistant has **no access** to:
  - Salary data (Payroll)
  - Individual medical records
  - Employee performance data

### Key Metrics (Quick Reference)
- **Vacation:** 30 days
- **Office:** 2 days required/week (Tue-Thu recommended)
- **Equipment:** €1,500 one-time
- **Travel:** Train 2nd class, hotel max €150
