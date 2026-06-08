# GPT Pro Extended Review · Deck + Demo Talk Track

Review this Splunk Agentic Ops Hackathon pitch delivery package. Keep the answer short and actionable.

Project: Containment Countdown

Canonical hero:
Approve containment for risky identities in 60 seconds after evidence crosses threshold.

Hard claim boundary:
- Public demo uses seeded Splunk-compatible telemetry, not live Splunk credentials.
- Cloudflare D1/KV/R2 proof storage is live.
- OpenAI-compatible reasoning route is live and writes a SOC note.
- Human approval triggers replay-mode containment state only.
- Do not imply real IAM/firewall remediation or AI-autonomous approval.

Deck + demo run-of-show:
- Slide 1, 0:00-0:30: "Risky identity incidents usually stop at an alert. This one does not. Containment Countdown gives the operator one minute: evidence crosses the threshold, a human approves, and the dossier keeps the proof."
- Slide 2, 0:30-1:10: "The awkward handoff is the product problem. A summary still leaves the analyst assembling evidence. A dashboard shows severity but gives no receipt. Full automation is fast, but the approval trail is thin. We keep the speed, but force an approval record and a replay-verifiable dossier."
- Slide 3, 1:10-2:35: "Watch for three things: the threshold crossing, the approval click, and the proof artifact." Then play the 61-second demo. After: "That is the product. Not a recommendation. A governed state change with a receipt."
- Slide 4, 2:35-3:20: "Four pieces carry the loop. Seeded Splunk-compatible telemetry gives the signal. The threshold policy decides when the risk crosses the line. A human approval gate records authority. D1, KV, and R2 store the proof. The reasoning route writes a SOC note, but it does not approve the action."
- Slide 5, 3:20-4:00: "Everything here is inspectable. The app is public. The repo is public. The deck and smoke proof are in the repo. The claim is narrow: public demo uses seeded Splunk-compatible telemetry. Cloudflare proof storage and the OpenAI-compatible reasoning route are live. Replay containment changes the demo state only. We want Splunk reviewers to test the live credential path."

Muted-video chapter lines:
1. "First frame: the judge sees the exact promise."
2. "The threshold moves, and the evidence changes state."
3. "The operator approves. The system does not self-contain."
4. "The dossier records signal, context, decision, action, and proof."
5. "The architecture states the boundary: seeded Splunk-compatible replay, live Cloudflare storage, live reasoning route."

Finnish-humanizer constraint:
The user asked to use a Finnish humanizer. There is no Finnish copy. Do not translate; just judge whether the English talk track sounds human and direct.

Return exactly:
1. Verdict: PASS / PASS WITH FIXES / BLOCKED.
2. Required fixes before submission.
3. Rewritten lines to use.
4. Any overclaim risk.

Be strict. Do not invent live Splunk evidence.
