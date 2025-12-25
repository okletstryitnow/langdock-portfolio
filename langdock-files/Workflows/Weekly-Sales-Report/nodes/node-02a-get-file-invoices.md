# Node 02a: Get File (Invoices)

## Configuration

| Setting | Value |
|---------|-------|
| Type | Google Drive → Get File |
| Connection | Google Drive - connected-user@example.com |
| Item ID | `1allpgv1b8NN_Azo-wlGzzecJ9GC4qTWX` |
| Output Variable | `getFileA` |
| Model | GPT-4.1 (not used) |
| Human Confirmation | OFF |
| Error Handling | Workflow stoppen |

## LangDock UI Settings

```
Google Drive → Get File
Gets a file from Google Drive based on the item ID and attaches it to the chat.

Verbindung: Google Drive - connected-user@example.com
Modell (Nicht verwendet): GPT-4.1
Menschliche Bestätigung: OFF
Item id: 1allpgv1b8NN_Azo-wlGzzecJ9GC4qTWX
Fehlerbehandlung - Bei Fehler: Workflow stoppen
```

## File Details

| Property | Value |
|----------|-------|
| File | `invoices.csv` |
| Path | `data/finance/invoices.csv` |
| Records | 15 invoices |
| Format | CSV with headers |

## Schema

| Column | Type | Description |
|--------|------|-------------|
| invoice_id | string | `INV-2024-XXX` format |
| account_id | string | `ACC-2024-XXX` reference |
| amount_eur | number | Invoice amount in EUR |
| status | enum | paid, sent, draft, overdue |
| issued_date | date | ISO 8601 |
| due_date | date | ISO 8601 |
| paid_date | date | ISO 8601 (nullable) |

## Used By

- **Node 03 (Prepare Files)**: Path passed as `invoicesPath`
- **Node 05 (Agent)**: Detects overdue invoices for penalty calculation

## Screenshot

![Node 02a Configuration](../screenshots/nodes/node-02a-get-file-invoices.png)
