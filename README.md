# LangDock Portfolio

![Status](https://img.shields.io/badge/Status-Complete-success)
![Time Saved](https://img.shields.io/badge/Time_Saved-2h/week-brightgreen)
![Cost](https://img.shields.io/badge/Total_Cost-$3.46-green)
![Assistants](https://img.shields.io/badge/Assistants-3-purple)

> Automated Sales Reporting with LangDock – Workflow + Assistant saving 2h/week at $3.46 total cost.

## Use Case: Automated Sales Reporting

Before applying to LangDock, I wanted to know: Does the product fit my workflow?

So I got a **LangDock** subscription and built a sales reporting system – **deterministic workflow** for Monday reports plus **flexible ad-hoc analysis**.

**The most interesting part:** Understanding the practical difference between deterministic workflows and probabilistic assistants. Both use the same data foundation, but while the workflow guarantees structured outputs, the assistant interprets flexibly.

## What I Built

### Workflow: Weekly Sales Report

Deterministic. Every Monday 9:00 AM. Identical output for identical data.

```mermaid
flowchart LR
    Trigger((Mon 9:00)) --> Input[Get Files]
    Input --> Check{Validate}
    Check -- OK --> Agent[Agent: Top 3]
    Check -- Fail --> Stop[Alert]
    Agent --> Output[Email Report]

    style Agent fill:#d4e6f1,stroke:#2980b9,stroke-width:2px
    style Output fill:#d5f5e3,stroke:#27ae60,stroke-width:2px
    style Trigger fill:#fce4ec,stroke:#c0392b,stroke-width:2px
```

> Detailed scoring weights and calculations (ICP, Health, Churn Risk) can be found in the [Scoring Documentation](./docs/SCORING.md).

<details>
<summary><strong>View LangDock Canvas</strong></summary>
<br>
<p align="center">
  <img src="langdock-files/Workflows/Weekly-Sales-Report/screenshots/canvas.png" alt="Weekly Sales Report Workflow Canvas" width="700">
</p>
</details>

<details>
<summary><strong>View Email Output</strong></summary>
<br>

![Workflow Email Output](langdock-files/Workflows/Weekly-Sales-Report/screenshots/workflow_deterministic_email-output.png)

</details>

### Assistant: Sales Research

Probabilistic. User-initiated. Variable interpretation.

**Example questions:**

- "Top 3 accounts for this week?"
- "Who has churn risk?"
- "Pre-call briefing for TechFlow"

<details>
<summary><strong>View Chat Response</strong></summary>
<br>
<p align="center">
  <img src="langdock-files/Assistants/Sales%20Research%20Assistant/screenshots/assistant_probabilistic_chat-response.png" alt="Sales Research Assistant Response" width="600">
</p>
</details>

## Technical Implementation

The workflow uses a JavaScript Logic Node for fail-fast validation:

```javascript
// prepare-files.js - Validates files BEFORE expensive LLM call
const supportTicketsPath = getFileA.output.result.path;
const invoicesPath = getFileB.output.result.path;
const accountsPath = getFileC.output.result.path;

return {
  isValid: true,
  files: { supportTickets: supportTicketsPath, invoices: invoicesPath, accounts: accountsPath },
  message: `Files ready: ${supportTicketsPath}, ${invoicesPath}, ${accountsPath}`
};
```

> **Why this matters:** 80% of workflow costs occur in the Agent Node. This validation fails on data problems with $0 cost instead of full agent costs ($0.08-0.10).

[Full code with documentation](./langdock-files/Workflows/Weekly-Sales-Report/prepare-files.js)

📊 **[Detailed metrics & results →](./docs/JOURNEY.md)**

## Deterministic vs. Probabilistic

| Aspect | Workflow | Assistant |
|:-------|:---------|:----------|
| Trigger | Automated (Mon 9:00 AM) | User-initiated |
| Output | Identical for same data | Variable |
| Use Case | Weekly Reporting | Ad-hoc Deep-Dive |

**Further Documentation:** [Development Journey & Learnings](./docs/JOURNEY.md) • [Scoring Formula & Logic](./docs/SCORING.md) • [Assistants & Workflows](./langdock-files/)

## Contact

**Yunus Ishaq**

[![Email](https://img.shields.io/badge/Email-yunus%40ishaq.de-red)](mailto:yunus@ishaq.de)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yunusishaq-blue)](https://www.linkedin.com/in/yunusishaq/)

---

*DEZEMBER 2025*
