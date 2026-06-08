# Containment Countdown Submission

## Tagline
Approve containment for risky identities in 60 seconds after evidence crosses threshold.

## Description
Containment Countdown is an operator cockpit for identity-risk incidents. Evidence accumulates, confidence crosses a policy threshold, a human approves containment, and a dossier proves the chain. Agentic scope: the reasoning route produces a SOC decision note and the workflow prepares replay-mode containment, but the state change remains human-approved.

## Track Fit
Security. The demo centers on risky identity containment, approval control, and verification evidence.

## Public Demo
https://containment-countdown.veithly.workers.dev

## Demo Video
https://www.youtube.com/watch?v=ZEs74UweOkc

## Pitch Deck
https://github.com/veithly/containment-countdown/blob/main/pitch/deck/containment-countdown-deck.pdf

## Repository
https://github.com/veithly/containment-countdown

## Architecture Diagram
https://github.com/veithly/containment-countdown/blob/main/architecture_diagram.md

## Smoke Proof
https://github.com/veithly/containment-countdown/blob/main/artifacts/public/smoke-proof.json

## Integration Boundary
The public deployment uses seeded Splunk-compatible telemetry. It does not claim live Splunk connectivity because `SPLUNK_HOST`, `SPLUNK_TOKEN`, and `SPLUNK_INDEX` are not configured. Cloudflare D1/KV/R2 persistence and the OpenAI-compatible reasoning route are live production integrations. Replay containment changes the demo incident state only; no real IAM or firewall change occurs.

## Judge Test Path
Open `/mission`, set threshold to 70, approve containment, open `/dossier/demo`, and export the dossier.

## G6 Package
- README: https://github.com/veithly/containment-countdown
- Deck PDF: https://github.com/veithly/containment-countdown/blob/main/pitch/deck/containment-countdown-deck.pdf
- Speaker notes: `pitch/speaker-notes.md`
- Final video: https://www.youtube.com/watch?v=ZEs74UweOkc
- Media manifest: `pitch/media-manifest.json`
- Smoke proof: `artifacts/public/smoke-proof.json`
