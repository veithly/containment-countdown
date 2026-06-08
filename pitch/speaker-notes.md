# Containment Countdown Pitch Speaker Notes

## Slide 1 · Hero

Approve containment for risky identities in 60 seconds after evidence crosses threshold. Start with the action, then show the proof: evidence crosses the line, a human approves, and the dossier records the chain.

## Slide 2 · The handoff that fails

Security teams do not need another alert paragraph. They need a short path from evidence to a reversible, documented action. The current choices split that path: summaries leave operators to assemble context, dashboards show severity without a receipt, and full automation moves too fast without a human record.

## Slide 3 · Live demo

Watch the countdown. The replayed Splunk-compatible evidence crosses the policy threshold, the operator approves containment, and the dossier records what happened. The demo shows the state change first because that is the product.

## Slide 4 · How it works

Four pieces carry the loop. Seeded Splunk-compatible telemetry supplies the signal and context. The threshold policy decides when the risk crosses the line. A human approval gate records authority. Cloudflare D1, KV, and R2 store the proof artifact, while the reasoning note comes from a server-side OpenAI-compatible API call.

## Slide 5 · Proof of life

Everything in the public demo is reproducible from the repo. Try the mission flow, inspect the API routes, and read the root architecture diagram. The claim is narrow: the public deployment uses seeded Splunk-compatible telemetry; Cloudflare proof storage and the OpenAI-compatible reasoning route are live.
