# Containment Countdown

> **Approve containment for risky identities in 60 seconds after evidence crosses threshold.**

Evidence crosses threshold, a human approves replay-mode containment, and a stored dossier keeps proof of the decision.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open-2dd4bf?style=for-the-badge)](https://containment-countdown.veithly.workers.dev)
[![Demo Video](https://img.shields.io/badge/Demo_Video-YouTube-ef4444?style=for-the-badge)](https://www.youtube.com/watch?v=ZEs74UweOkc)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-f97316?style=for-the-badge)](./docs/DEPLOYMENT.md)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge)](./LICENSE)

**Quick links:**
[Live demo](https://containment-countdown.veithly.workers.dev) ·
[Demo video](https://www.youtube.com/watch?v=ZEs74UweOkc) ·
[Architecture](./docs/ARCHITECTURE.md) ·
[Deployment](./docs/DEPLOYMENT.md) ·
[Root diagram](./architecture_diagram.md)

---

## Why This Matters

Identity incidents often stop at a summary. Containment Countdown makes the next step visible: evidence accumulates, confidence crosses a policy threshold, an operator approves, and the proof artifact survives the demo.

This deployment uses seeded Splunk-compatible telemetry because live Splunk credentials are not configured. The production Worker still does real work: approval writes land in Cloudflare D1, KV, and R2, and the reasoning note comes from a server-side OpenAI-compatible API call. Agentic scope stays narrow: the reasoning route writes a SOC decision note and the workflow prepares replay-mode containment, but the replay-mode state change remains human-approved.

| | Static dashboard | Alert summary | **Containment Countdown** |
| --- | --- | --- | --- |
| Operator action | Inspect charts | Read text | **Approve or hold replay containment** |
| Proof | Screenshot | Paragraph | **Dossier with evidence, replay action, verification** |
| Runtime | View-only | Model-only | **Public Worker with D1/KV/R2 writes** |

## Demo Video

The public walkthrough is here:

https://www.youtube.com/watch?v=ZEs74UweOkc

The video shows the judge path: open the mission, lower the threshold, approve replay-mode containment, inspect the dossier, and confirm the architecture boundary.

## Quick Start

```bash
npm install
cp .env.local .env.local.example   # optional: inspect variable names without copying values
npm run dev
```

Open <http://localhost:4387>, then click **Open mission**.

Production smoke:

```bash
DEPLOYED_URL=https://containment-countdown.veithly.workers.dev npx playwright test
```

## How It Works

```mermaid
flowchart LR
  A[Seeded Splunk-compatible telemetry] --> B[SPL / REST query boundary]
  B --> C[Threshold policy engine]
  C --> D[Human approval gate]
  D --> E[Containment executor]
  E --> F[Verification query]
  F --> G[Cloudflare D1/KV/R2 dossier]
  B --> H[OpenAI-compatible reasoning note]
```

| Layer | Choice | Why |
| --- | --- | --- |
| App | Next.js App Router on Cloudflare Workers | Public URL with server-side route handlers |
| Evidence | Seeded Splunk-compatible telemetry | Honest replay until live Splunk credentials exist |
| Reasoning | OpenAI-compatible API | Server-side SOC note, no browser-exposed key |
| Storage | Cloudflare D1/KV/R2 | Durable proof chain for approvals and dossiers |
| Testing | Playwright + visual QA | Hero path and mobile proof path both checked |

## Bounty Fit

| Track | Fit |
| --- | --- |
| Security | Risky identity containment, approval control, and verification proof. |
| Platform & Developer Experience | Clear Cloudflare deployment, root architecture diagram, reproducible smoke commands. |
| Splunk AI story | Splunk-compatible evidence drives the visible workflow; live Splunk REST credentials can replace replay after smoke testing. |

## Boundary

- The current public demo does **not** claim live Splunk connectivity.
- `SPLUNK_HOST`, `SPLUNK_TOKEN`, and `SPLUNK_INDEX` are optional live-mode values.
- `OPENAI_API_KEY`, `OPENAI_BASE_URL`, and `OPENAI_DEFAULT_MODEL` are server-side Worker secrets.
- Replay containment changes the demo incident state only; no real IAM or firewall change occurs.

## Repository Layout

```text
.
├── src/app                 # Next.js routes and API handlers
├── src/components          # Mission cockpit, decision chamber, dossier view
├── src/lib                 # Containment model, Splunk boundary, AI, storage
├── migrations              # D1 schema
├── docs                    # Architecture and deployment notes
├── tests                   # Playwright judge-path checks
└── public                  # Brand assets and public architecture mirror
```

## License

MIT. Built for the Splunk Agentic Ops Hackathon.
