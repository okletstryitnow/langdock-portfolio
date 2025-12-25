# Sales Research - Test Scenarios

## Scenario 1: Prospect Discovery
**User Query:** "Find all qualified leads in the technology or finance sector."
**Expected Output:**
- Return **SecureCloud IT** (Tech, Qualified).
- Return **Future Finance** (Finance, Negotiation).
- Note: Do NOT return disqualified leads.

## Scenario 2: Churn Risk Analysis
**User Query:** "Which customers have churn risk?"
**Expected Output:**
- Scan `accounts.csv`.
- Identify **Nordic Retail Group** (Health: 45) and **Global Services Ltd** (Health: 60).
- Suggest immediate CSM intervention.

## Scenario 3: Pre-Meeting Briefing
**User Query:** "Give me a summary for TechFlow GmbH before my call."
**Expected Output:**
- Identify `ACC-2024-001` (TechFlow GmbH).
- Tier: Enterprise.
- Health: 88 (Good).
- MRR: €4,500.
- Context: Important Enterprise customer.

## Scenario 4: Outreach Copy Creation
**User Query:** "Draft a cold email for EcoBuild Solutions."
**Expected Output:**
- Use lead context: **Lisa Chen** (Construction), Status: **New**.
- Pitch: Scalability for construction projects.
- Tone: Professional introduction.
