# Customer Support Assistant - Data Sources

## Overview
This assistant uses the knowledge base and historical tickets to resolve user problems.

---

## Primary Data Sources

### 1. Support Knowledge Base
| File | Path | Purpose |
|------|------|---------|
| Known Issues | `/data/support/known-issues.md` | Critical bugs & workarounds |
| FAQ General | `/data/support/faq-general.md` | Standard processes |
| Troubleshooting | `/data/support/troubleshooting-integrations.md` | Technical guides |
| Billing FAQ | `/data/support/billing-faq.md` | Billing questions |

### 2. Live Data Context
| File | Path | Purpose |
|------|------|---------|
| Tickets | `/data/tickets/support-tickets-2024.csv` | Ticket history (12 mock tickets) |
| Accounts | `/data/sales/accounts.csv` | Customer context (Tier, Health, CSM) |
| Invoices | `/data/finance/invoices.csv` | Billing details for tickets |

---

## Data Schema

### Ticket Data (`support-tickets-2024.csv`)
- `ticket_id`: TKT-XXX
- `account_id`: Link to account
- `status`: Open, Resolved
- `priority`: Low, Medium, High, Critical
- `category`: Technical, Billing, Product, Account
- `resolution_notes`: Valuable for finding similar solutions.

### Account Context
- **Tier:** Enterprise customers receive priority.
- **Health:** Low health scores (<60) should be handled with special care.

---

## Integration Notes

### Resolution Flow
1. **Search known issues:** Is this a global bug?
2. **Search historical tickets:** Has this `account_id` had the problem before? Or is there a resolved ticket with a similar subject?
3. **Search KB:** Is there a guide?
4. **Context check:** If it's a billing problem → Check `invoices.csv`.
