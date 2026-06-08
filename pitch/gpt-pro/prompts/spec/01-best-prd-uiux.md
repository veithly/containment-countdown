# GPT Pro Best-Solution PRD + UIUX + Stack Spec

Use GPT Pro. Do not browse or search. Use only attached files and the official-source constraints listed here.

Selected concept:
- Project: Containment Countdown
- Idea ID: IDEA-008
- Core demo: a risky identity races an evidence-driven containment countdown; a judge can approve/stop/raise threshold; identity state changes to contained; Splunk generates a Containment Dossier.

Official/source constraints to respect:
- Devpost requires public repo, OSS license, root `architecture_diagram.(md|pdf|png)`, public video under 3 minutes, public app/testing URL where possible.
- Delivery mode: `combined-pitch-demo` because Devpost has a video URL field and no separate mandatory deck field.
- Splunk MCP Server: practical auth route is token-based auth; OAuth is controlled availability.
- Splunk primitives to make structurally necessary: MCP Server, Splunk AI Assistant for SPL or generated SPL transcript, Splunk Hosted Models / Splunk AI Toolkit model narrative, Splunk API or seeded Splunk-compatible telemetry, audit/log proof.
- Safe containment: use a deterministic simulated containment endpoint for demo; no unsafe real IAM/firewall action is required for judges.
- Deployment default: Cloudflare Workers/OpenNext unless a blocker appears.
- Frontend default: latest stable Next.js App Router + Tailwind plumbing, with a real visual system beyond generic shadcn.

Attached files:
- `bounty_brief.md`
- `pitch/concept_lock.md`
- `pitch/demo_interaction_plan.md`
- `pitch/hero.md`
- `pitch/user_cases.md`
- `pitch/judge_magnet.md`
- `pitch/idea_tournament.md`
- `pitch/deep_research_10x10.md`

Produce a detailed spec with these top-level sections:

## PRD

Use the 14 required sections:
1. Project background
2. Problem definition
3. Target users
4. User pain points
5. Core requirements & priority
6. Solution overview
7. User flows
8. User Cases (>= 2)
9. Demo critical path & Hero Moment
10. Pages / modules plan (>= 3 interactive surfaces)
11. Visual direction & UI principles
12. Technical constraints
13. Success metrics
14. Risks & cut list

Also include:
- exactly 2-3 P0 demo must-haves before P1/P2
- Recent Devpost AI pattern subsection in section 6
- Judge magnet subsection in section 9
- PRD coverage matrix with at least 6 `REQ-###` rows mapping requirement -> route/component -> API/server action -> real data source -> state/contract -> Playwright test -> deploy evidence -> status

## UIUX Interaction Plan

Include:
- Screen map with routes, primary user action, system response, state changed, proof shown
- First-run flow: 0-10s, 10-30s, 30-60s, 2-3min
- Interaction details for each P0 screen: default, loading, empty, error, success, keyboard/touch, accessibility
- Demo choreography
- Components
- Data/API dependencies
- Test selectors
- Mobile QR behavior

## Stack Lock Recommendation

Include:
- branch
- frontend framework/libraries
- backend/server actions/routes
- deployment target
- product backbone
- real data sources
- required env vars with official key/account URLs and status
- Splunk-specific env vars
- AI provider/model approach
- Cloudflare bindings
- delivery mode

## Cut List

State what is intentionally not built.

Hard filters:
- Do not call the product a chatbot.
- Do not make a static dashboard the main product.
- Keep Splunk structurally necessary in the hero path.
- No reviewer-visible mock success. Seeded Splunk-compatible telemetry and simulated containment endpoint are allowed only if they produce deterministic state/proof and are clearly documented.
- Output only Markdown. No preface.
