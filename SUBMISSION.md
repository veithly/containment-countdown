# Containment Countdown Submission

## Tagline
Approve containment for risky identities in 60 seconds after evidence crosses threshold.

## Description
Containment Countdown is an operator cockpit for identity-risk incidents. Evidence accumulates, confidence crosses a policy threshold, a human approves containment, and a dossier proves the chain.

## Track Fit
Security. The demo centers on risky identity containment, approval control, and verification evidence.

## Public Demo
https://containment-countdown.veithly.workers.dev

## Demo Video
Local artifact for G6: `pitch/recording/pitch-demo-combined-final.mp4`

## Repository
Pending public GitHub URL.

## Integration Boundary
The public deployment uses seeded Splunk-compatible telemetry. It does not claim live Splunk connectivity because `SPLUNK_HOST`, `SPLUNK_TOKEN`, and `SPLUNK_INDEX` are not configured. Cloudflare D1/KV/R2 persistence and the OpenAI-compatible reasoning route are live production integrations.

## Judge Test Path
Open `/mission`, set threshold to 70, approve containment, open `/dossier/demo`, and export the dossier.
