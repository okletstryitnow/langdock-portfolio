# Weekly Sales Report Workflow

## Overview

Automated 9-node pipeline that generates a weekly Top 3 account report for the Sales team.

| Property | Value |
|----------|-------|
| Trigger | Scheduled: Monday 9:00 AM |
| Cost per Run | $0.10 - $0.15 |
| Annual Cost | ~$8 (52 runs) |
| Production Runs | 36+ |

## Pipeline Architecture

```text
01: Weekly Sales Meeting Trigger (Mo 9:00)
              │
              ▼
┌─────────────────────────────────────────────┐
│  02a: Get File    02b: Get File    02c: Get File  │  ← Parallel
│     (invoices)       (tickets)       (accounts)   │
└─────────────────────────────────────────────┘
              │
              ▼
       03: Prepare Files
              │
              ▼
       04: Data Valid?
              │
    ┌─────────┴─────────┐
    │                   │
    ▼ Invalid           ▼ Valid
04a: Alert:          05: Analyze &
Invalid Data         Generate Report
    │                   │
    ▼                   ▼
  (end)            06: Send email
```

## Node Reference

| Node | Type | File |
|------|------|------|
| 01 | Weekly Sales Meeting Trigger | `nodes/node-01-weekly-sales-meeting-trigger.md` |
| 02a | Get File (invoices) | `nodes/node-02a-get-file-invoices.md` |
| 02b | Get File (tickets) | `nodes/node-02b-get-file-tickets.md` |
| 02c | Get File (accounts) | `nodes/node-02c-get-file-accounts.md` |
| 03 | Prepare Files | `nodes/node-03-prepare-files.js` |
| 04 | Data Valid? | `nodes/node-04-data-valid.md` |
| 04a | Alert: Invalid Data | `nodes/node-04a-alert-invalid-data.md` |
| 05 | Analyze & Generate Report | `nodes/node-05-analyze-generate-report.md` |
| 06 | Send email | `nodes/node-06-send-email.md` |

## Data Sources

| File | Source Path | Content |
|------|-------------|---------|
| tickets | `data/support/tickets/support-tickets-2024.csv` | 12 tickets |
| invoices | `data/finance/invoices.csv` | 15 invoices |
| accounts | `data/sales/accounts.csv` | 10 accounts |

## Deterministic Scoring Formula

The scoring formula is defined in [../../../docs/SCORING.md](../../../docs/SCORING.md).

This formula ensures identical inputs always produce the same Top 3 ranking.
