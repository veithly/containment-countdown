Demo Interaction Plan
Demo Magic Moment

A suspicious identity is racing toward automatic containment.

The judge decides whether to approve containment before the clock expires.

Containment executes.

A proof dossier appears showing exactly why it happened.

First 15 Seconds

Screen already shows:

Risky identity

Escalating risk score

Active countdown

Incoming evidence feed

Narration:

"This identity is behaving like an attacker. Instead of generating another alert, Splunk starts a containment countdown."

No setup explanation.

No architecture discussion.

Immediate tension.

Live Input

Seeded attack telemetry enters Splunk.

Examples:

Impossible travel event

Privilege escalation

Sensitive data access

Failed authentication burst

Splunk queries collect evidence.

Hosted-model risk scoring updates confidence.

Countdown visibly changes.

Visible Consequence

Threshold reached.

Containment button activates.

Judge presses:

APPROVE CONTAINMENT

Identity status changes:

ACTIVE → CONTAINED

Visual confirmation appears immediately.

Deterministic Proof

Containment only fires when:

Evidence score ≥ threshold

Deterministic policy satisfied

Human approval received

Display:

Evidence score

Policy threshold

Approval record

Execution timestamp

No opaque AI-only decision.

Judge Participation

Judge chooses one:

Option A

Approve immediately.

Result:
Fast containment.

Option B

Delay approval.

Result:
Additional evidence accumulates.

Option C

Raise threshold.

Result:
Containment waits for stronger proof.

The judge directly changes the outcome.

Interaction Model

Signal → Context → Decision → Action → Proof

Telemetry arrives.

Splunk gathers evidence.

Countdown computes confidence.

Human approves.

Containment executes.

Verification confirms.

Dossier generated.

Showcase Plan
Screen 1

Attack underway.

Screen 2

Evidence accumulation.

Screen 3

Containment clock.

Screen 4

Judge approval.

Screen 5

Containment executed.

Screen 6

Proof dossier.

Screen 7

Architecture diagram.

Fallback If Live API / Splunk Fails

Use reproducibly seeded Splunk dataset.

Preloaded:

Risk events

SPL queries

Evidence records

Containment simulation endpoint

Containment execution remains deterministic.

Verification queries still run.

Proof dossier still generated.

No internet dependency required.

5-Minute Proof Close

Show:

Before

Identity active.

Action

Containment approved.

After

Identity contained.

Evidence

SPL transcript.

Audit

Approval log.

Verification

Post-containment query result.

Artifact

Downloadable Containment Dossier.

Closing sentence:

"Splunk didn't explain the attack. Splunk gathered evidence, drove a containment decision, executed it, and proved it happened."
