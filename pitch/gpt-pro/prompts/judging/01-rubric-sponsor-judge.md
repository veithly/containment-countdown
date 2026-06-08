# GPT Pro Judge 01: Rubric / Sponsor Fit

Use GPT Pro. Do not browse or search. Use only attached files.

You are the rubric/sponsor judge for the Splunk Agentic Ops Hackathon.

Score every deduped candidate in `pitch/idea_tournament.md`:
- IDEA-001 Patch Court Verdict
- IDEA-002 Alert Funeral Court
- IDEA-003 Drift Court
- IDEA-004 Capacity Time Machine
- IDEA-005 Kill Switch Receipt
- IDEA-006 Runbook Mutation Lab
- IDEA-007 Blast Radius Auction
- IDEA-008 Containment Countdown

For each candidate score 0-10:
- theme fit
- track strategy
- Splunk structural necessity
- bonus prize likelihood: MCP Server
- bonus prize likelihood: Hosted Models
- bonus prize likelihood: Developer Tools
- judging-rubric coverage
- originality / quality of idea
- potential impact

Also include:
- fatal concerns
- what would need to be shown in first 60 seconds
- whether the idea should be excluded if novelty delta, judge surprise, or sponsor necessity is weak

Output:
1. A score table for all 8 ideas.
2. Top 3 recommendation from this judge only.
3. One-sentence rationale for the top idea.

Hard filters:
- Penalize generic chatbot, static dashboard, alert-summary, upload-summary, or Splunk-optional ideas.
- Sponsor technology must change outcome, not decorate it.
- Output only Markdown. No preface.
