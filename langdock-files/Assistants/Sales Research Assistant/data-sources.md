# Sales Research Assistant - Data Sources

## Overview
This assistant is optimized for analyzing leads and accounts to support sales outreach and account management.

---

## Primary Data Sources

### 1. Sales Data
| File | Path | Purpose |
|------|------|---------|
| Leads | `/data/sales/leads.csv` | Prospect database (10 active leads) |
| Accounts | `/data/sales/accounts.csv` | Existing customer database (10 accounts) |
| ICP Definition | `/data/sales/icp-definition.md` | Qualification criteria and scoring |

### Data Schema

**Leads (`leads.csv`)**
- `lead_id`: Unique ID (LEA-2024-XXX)
- `company_name`: Target company
- `industry`: Industry sector (e.g., Logistics, Retail)
- `icp_score`: 0-100 (Qualification score)
- `status`: New, Qualified, Negotiation, Disqualified

**Accounts (`accounts.csv`)**
- `account_id`: Unique ID (ACC-2024-XXX)
- `company_name`: Customer name
- `mrr_eur`: Monthly Recurring Revenue in €
- `health_score`: 0-100 (Churn risk indicator)
- `tier`: Startup, Growth, Enterprise

---

## Secondary Data Sources

### 2. Product Knowledge
| File | Path | Purpose |
|------|------|---------|
| Product Overview | `/data/product/product-overview.md` | Feature set and USPs |
| Feature Comparison | `/data/product/feature-comparison.md` | Tier differentiation |

**Usage:** Mapping product features to prospect pain points (industry-specific).

---

## Integration Notes

### Analysis Patterns
- **High Potential:** `icp_score` > 80 AND `status` != 'Disqualified'.
- **Churn Risk:** `health_score` < 60.
- **Upsell Opportunity:** `health_score` > 80 AND `tier` != 'Enterprise'.
