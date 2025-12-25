# Customer Support - Test Scenarios

## Scenario 1: Critical Bug Check
**User Query:** "The mobile app keeps crashing on my iPhone."
**Expected Output:**
- Match with **TKT-110** (Mobile App Crash iOS).
- Confirm it's **Resolved** in v2.4.1.
- Instruct user to update the app.

## Scenario 2: Billing Inquiry
**User Query:** "I have a question about the invoice for Urban Logistics."
**Expected Output:**
- Identify account `Urban Logistics AG` (`ACC-2024-003`).
- Find invoice `INV-2024-004` (€5,200).
- Indicate it's **Paid**.

## Scenario 3: Recurring Problem Search
**User Query:** "Are we having webhook limit problems again?"
**Expected Output:**
- Find **TKT-101** (Resolved, Rate Limit) and **TKT-107** (Open, Auth Failure).
- Differentiate: "We fixed the rate limit issue in Nov, but there's an open auth problem (TKT-107)."

## Scenario 4: Feature Request
**User Query:** "When is dark mode coming?"
**Expected Output:**
- Find **TKT-104**.
- Status: Open.
- Resolution Note: "Added to roadmap for Q2 2025."
- Communicate this timeline.
