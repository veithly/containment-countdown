# Demo Video Outline: Containment Countdown

## Source Truth

- Demo path: `pitch/project_prd.md`
- User case: `pitch/user_cases.md` HERO PATH
- Judge magnet: `pitch/judge_magnet.md`
- Visual contract: `pitch/visual-build-contract.md`
- Live URL: https://containment-countdown.veithly.workers.dev

## Scene Table

| Scene | Budget | User stake | Screen action | Proof/result | Route | Selector/focus target | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `01_hook` | ~8 s | A risky identity has seconds before damage spreads. | Show hero and cockpit preview. | Product claim is visible in the first frame. | `/` | `data-hero-text` | First sentence echoes hero. |
| `02_evidence` | ~9 s | Evidence must change policy state, not create another note. | Open mission and lower threshold. | Threshold crosses and pinned event appears. | `/mission` | `[data-testid="threshold-slider"]` | Show the magic moment early. |
| `03_approval` | ~9 s | Automation needs a human record. | Click approve containment. | Status changes to CONTAINED and proof rail advances. | `/mission` | `[data-testid="approve-containment"]` | Approval API writes full proof chain. |
| `04_dossier` | ~8 s | Managers need proof after the action. | Open dossier and export. | Dossier verifies evidence, approval, action, and result. | `/dossier/demo` | `[data-testid="dossier-export"]` | Mobile-safe proof artifact. |
| `05_boundary` | ~9 s | Judges need to trust the integration claim. | Show architecture. | Cloudflare D1/KV/R2 and OpenAI-compatible API are live; Splunk is seeded replay. | `/architecture` | `.architecture-flow` | State the live Splunk boundary plainly. |

## Judge Attention Pass

| Scene | Judge should think | Rubric / Q&A answered | Proof shown |
| --- | --- | --- | --- |
| `01_hook` | I know what this does. | 5-second value prop. | Hero line and cockpit. |
| `02_evidence` | Evidence changes state. | Not a static dashboard. | Threshold crossing. |
| `03_approval` | The action is governed. | Human-in-the-loop. | Approval and CONTAINED status. |
| `04_dossier` | The result survives the demo. | Durable artifact. | Dossier export. |
| `05_boundary` | The team is honest about live Splunk. | Integration clarity. | Architecture and limitation. |

## First-Sample Anchor

- Sample range: first 20-30 s.
- Expected visible actions: hero, mission open, threshold crossing, approval enabled.
- Expected judge belief: this is a product loop with a state change.
- Critique result: strict visual QA passed with 0 warnings after mobile tap-target fixes.

## Focus / Polish Plan

| Scene | Selector or bbox source | Overlay type | QA frame path |
| --- | --- | --- | --- |
| `01_hook` | `data-hero-text` | artifact-stack-3d | `pitch/polish-combined/qa/01-qa.png` |
| `02_evidence` | `[data-testid="threshold-slider"]` | component-lift | `pitch/polish-combined/qa/02-qa.png` |
| `03_approval` | `[data-testid="approve-containment"]` | proof-receipt | `pitch/polish-combined/qa/03-qa.png` |
| `04_dossier` | `[data-testid="verification-report"]` | proof-montage | `pitch/polish-combined/qa/04-qa.png` |
| `05_boundary` | `.architecture-flow` | architecture-reveal | `pitch/polish-combined/qa/05-qa.png` |
