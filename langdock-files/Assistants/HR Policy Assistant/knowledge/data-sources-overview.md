# Datenquellen-Übersicht

Diese Dokumentation listet alle verfügbaren Datenquellen im FlowSync Demo-Portfolio auf, kategorisiert nach Use Case und Dateityp.

---

## Zusammenfassung

| Kategorie | Anzahl Dateien | Dateitypen |
|-----------|----------------|------------|
| Produkt-Dokumentation | 5 | Markdown |
| HR-Policies | 6 | Markdown |
| Support-Wissensbasis | 5 | Markdown |
| Sales & CRM | 3 | CSV, Markdown |
| Support-Tickets | 1 | CSV |
| Meeting-Protokolle | 4 | Markdown |
| **Gesamt** | **24** | |

---

## Detaillierte Dateiliste

### Produkt-Dokumentation

| Datei | Beschreibung | Größe (ca.) | Letzte Aktualisierung |
|-------|--------------|-------------|----------------------|
| `data/product/product-overview.md` | Umfassende Produktbeschreibung, Features, Pricing, USPs | 8 KB | 2024-11-28 |
| `data/product/api-documentation.md` | REST API Dokumentation mit 15 Endpoints, Auth, Rate Limits | 15 KB | 2024-11-25 |
| `data/product/release-notes-2024.md` | Release Notes v2.3.0 bis v2.8.0 (Juni-November 2024) | 10 KB | 2024-11-20 |
| `data/product/integration-guides.md` | Setup-Guides für Slack, Jira, GitHub, Google Calendar, Zapier | 12 KB | 2024-11-15 |
| `data/product/feature-comparison.md` | Feature-Matrix Starter/Pro/Enterprise (25 Features) | 5 KB | 2024-11-10 |

### HR-Policies (Deutsch)

| Datei | Beschreibung | Größe (ca.) | Letzte Aktualisierung |
|-------|--------------|-------------|----------------------|
| `data/hr-policies/urlaubsregelung.md` | Urlaubsanspruch, Antragsprozess, Sonderurlaub | 4 KB | 2024-10-01 |
| `data/hr-policies/remote-work-policy.md` | Hybrid-Modell, Home-Office-Regeln, Auslands-Remote | 5 KB | 2024-09-15 |
| `data/hr-policies/reisekostenrichtlinie.md` | Flüge, Hotels, Verpflegung, Approval-Prozess | 6 KB | 2024-08-20 |
| `data/hr-policies/onboarding-guide.md` | Onboarding-Ablauf Tag 1 bis Tag 30 | 7 KB | 2024-11-01 |
| `data/hr-policies/benefits-overview.md` | Urban Sports, BVG, Lunch, Weiterbildung, Mental Health | 4 KB | 2024-10-15 |
| `data/hr-policies/home-office-equipment.md` | Budget, Antragsprozess, Equipment-Liste | 3 KB | 2024-09-01 |

### Support-Wissensbasis

| Datei | Beschreibung | Größe (ca.) | Letzte Aktualisierung |
|-------|--------------|-------------|----------------------|
| `data/support/faq-general.md` | 15 FAQs zu Login, Billing, Features, Integrationen | 8 KB | 2024-11-28 |
| `data/support/troubleshooting-integrations.md` | Problemlösung für Slack, Jira, GitHub Integrationen | 10 KB | 2024-11-25 |
| `data/support/known-issues.md` | 10 aktuelle Known Issues mit Status und Workarounds | 6 KB | 2024-12-02 |
| `data/support/account-management-guide.md` | User-Management, Rollen, SSO, SCIM | 8 KB | 2024-11-20 |
| `data/support/billing-faq.md` | 10 Billing-FAQs zu Upgrades, Zahlungen, Kündigung | 5 KB | 2024-11-15 |

### Sales & CRM

| Datei | Beschreibung | Größe (ca.) | Letzte Aktualisierung |
|-------|--------------|-------------|----------------------|
| `data/sales/leads.csv` | 50 qualifizierte Leads mit ICP-Scores, Pain Points | 12 KB | 2024-12-02 |
| `data/sales/accounts.csv` | 30 aktive Kunden mit MRR, Health Score, Renewal Dates | 8 KB | 2024-12-02 |
| `data/sales/icp-definition.md` | Ideal Customer Profile, Scoring-Matrix | 5 KB | 2024-10-01 |

### Support-Tickets

| Datei | Beschreibung | Größe (ca.) | Letzte Aktualisierung |
|-------|--------------|-------------|----------------------|
| `data/tickets/support-tickets-2024.csv` | 40 Support-Tickets (Nov-Dez 2024) mit Resolutions | 15 KB | 2024-12-02 |

### Meeting-Protokolle

| Datei | Beschreibung | Größe (ca.) | Letzte Aktualisierung |
|-------|--------------|-------------|----------------------|
| `data/meetings/sales-weekly-2024-11-25.md` | Sales Team Weekly: Pipeline, Deals, Blockers | 4 KB | 2024-11-25 |
| `data/meetings/product-sync-2024-11-28.md` | Product Sync: Roadmap, Bugs, Release-Plan | 5 KB | 2024-11-28 |
| `data/meetings/cs-standup-2024-12-02.md` | CS Standup: Health Scores, Churn Risks, Renewals | 4 KB | 2024-12-02 |
| `data/meetings/all-hands-2024-12-01.md` | All-Hands: Q4 Recap, Q1 Goals, Shoutouts | 5 KB | 2024-12-01 |

---

## Datenquellen nach Assistant

### Business Workflow Assistant
- `data/meetings/*` (alle 4 Dateien)

### Sales Research Agent
- `data/sales/leads.csv`
- `data/sales/accounts.csv`
- `data/sales/icp-definition.md`
- `data/product/product-overview.md`
- `data/product/feature-comparison.md`

### Customer Support Bot
- `data/support/*` (alle 5 Dateien)
- `data/product/api-documentation.md`
- `data/product/integration-guides.md`
- `data/tickets/support-tickets-2024.csv` (optional)

### Internal Knowledge Assistant
- `data/product/*` (alle 5 Dateien)
- `data/hr-policies/*` (alle 6 Dateien)
- `data/support/*` (alle 5 Dateien)
- `data/meetings/*` (alle 4 Dateien)
- `data/sales/icp-definition.md`
- `company-context/company-profile.md`

### HR Policy Assistant
- `data/hr-policies/*` (alle 6 Dateien)

---

## Aktualisierungszyklus

| Datentyp | Aktualisierungsfrequenz |
|----------|-------------------------|
| Product Docs | Bei jedem Release |
| HR Policies | Quartalsweise Review |
| Support FAQs | Wöchentlich |
| Known Issues | Täglich |
| Sales CSVs | Täglich (CRM-Sync) |
| Tickets | Echtzeit |
| Meetings | Nach jedem Meeting |

---

## Datenqualität

### Aktualität
- Alle Daten reflektieren Stand November/Dezember 2024
- Meeting-Protokolle sind datiert und chronologisch konsistent

### Konsistenz
- Firmennamen in CSVs sind über alle Dateien konsistent
- FlowSync-Mitarbeiter-Namen sind einheitlich verwendet

### Vollständigkeit
- Jede Datei enthält alle im Schema definierten Felder
- Keine Platzhalter oder Dummy-Werte
