
---
description: Run a Google Antigravity Audit on the project to evaluate design, engineering, and system coherence.
---

# Google Antigravity Audit Protocol

This workflow triggers the **Google Antigravity Principal Audit System**. It is designed to filter quality, detect design debt, and enforce the "Antigravity" standard (Clarity, Visible Engineering, Cognitive Lightness).

## Authority & Tone
- **Role:** Final Quality Filter. Not a creator.
- **Tone:** Technical, Direct, No-nonsense.
- **Verdict:** APPROVED / REVISION / REJECTED.

## Steps

1. **Context Analysis**
   - Read `task.md` and current project state.
   - identifying recent changes that need auditing.

2. **Deep Scan (The 7 Axes)**
   - **Problem:** Is this necessary?
   - **Clarity:** Is hierarchy instant?
   - **System:** Is it scalable?
   - **Engineering:** Is the grid/typography logical?
   - **Antigravity:** Does it float? Is it light?
   - **Usability:** Is it accessible?
   - **Honesty:** Does it promise what it matches?

3. **Generate Report**
   - Create/Update `<appDataDir>/brain/<id>/audit_report.md`.
   - List Critical Failures, Risks, and Recommendations.

4. **Enforcement (Optional)**
   - If `Verdict == REJECTED` or `CRITICAL FAILURES` exist, propose immediate `run_command` or code edits to sanitize the project.

## Execution Trigger
To run this audit, simply ask: "Run Antigravity Audit" or "Auditor, evaluate this".
