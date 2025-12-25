# Account Scoring Formula

> **Single Source of Truth** - This file is the central reference for scoring logic.

## The Formula

```javascript
Score = (ICP × 0.4) + (Health × 0.3) - (Overdue × 20) - (Tickets > 3 ? 10 : 0)
```

## Variables

| Variable | Description | Value Range | Weight |
|:---------|:------------|:------------|:-------|
| **ICP** | Ideal Customer Profile Fit | 0-100 | 40% |
| **Health** | Account Satisfaction | 0-100 | 30% |
| **Overdue** | Number of overdue invoices | 0-n | -20 per invoice |
| **Tickets** | Current support tickets | 0-n | -10 if > 3 |

## Thresholds

| Score | Conversion Probability | Recommendation |
|:------|:----------------------|:---------------|
| > 80 | 75-85% | Prioritize |
| 70-80 | 60-75% | Recommended |
| 60-70 | 45-60% | With reservations |
| < 60 | - | Not recommended |

## Risk Indicators

- **Churn Risk:** `health_score < 60`
- **Payment Risk:** `overdue_invoices > 2` (only recommend with risk mitigation strategy)

## Technical Application

The formula is applied in the [Sales Research Assistant System Prompt](../langdock-files/Assistants/Sales Research Assistant/system-prompt.md).
