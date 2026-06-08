# Deduplicate GPT Pro Ideation Outputs Into Idea Tournament Skeleton

Use GPT Pro. Do not browse or search. Use only the attached three ideation response files plus bounty/research context if attached.

Task:
Deduplicate the 12 raw ideas into stable `IDEA-###` records for HackathonHunter G1.

Rules:
- Do not invent new ideas.
- Merge ideas only when they have the same user, same primitive, and same proof surface.
- Preserve the sharper rumor and strongest 60-second visible consequence.
- Keep `Merged from` notes so no GPT Pro idea disappears silently.
- Aim for at least 8 distinct candidates if the source material supports it.
- Do not select a winner yet.
- Do not score ideas yet.

Output `# Idea Tournament` with these sections:

## Context
- Hackathon
- Tracks/rubric
- Constraints

## GPT Pro Deep Research 10x10

Include a one-row table with the standard prompt/response/synthesis paths and counts 10/10.

## Raw GPT Pro ideation windows

Three-row table for:
- 01-hackathon-transfer
- 02-product-analogue
- 03-sponsor-demo-primitive

## Deduped candidates

Markdown table with:
- Idea ID
- Name
- 5-12 word rumor
- Recent idea family
- Freshness delta
- Mutation operator
- 2026 clone trap avoided
- Winner/product/sponsor pattern basis
- Novelty delta
- Judge surprise
- Demo interaction
- Showcase plan
- New primitive
- 60s consequence
- Proof artifact
- Merged from

## Demo interaction plans

Markdown table with:
- Idea ID
- 0-10s hook
- 10-30s interaction
- 30-60s consequence
- Judge participation
- Visual staging
- Fallback if live input fails

## GPT Pro judges

Include placeholder rows for the three required judges and paths:
- `pitch/gpt-pro/prompts/judging/01-rubric-sponsor-judge.md`
- `pitch/gpt-pro/prompts/judging/02-technical-execution-judge.md`
- `pitch/gpt-pro/prompts/judging/03-product-demo-judge.md`

## Scoreboard

Create an empty placeholder scoreboard with one row per candidate and blank score cells.

## Selected winner

Write: `Pending GPT Pro judging.`

Output only Markdown. No preface.
