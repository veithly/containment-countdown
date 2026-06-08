---FILE: pitch/concept_lock.md---

Concept Lock — G1
Selected Concept

IDEA-008 — Containment Countdown

Project Name

Containment Countdown

Seven-Word Rumor

Attackers race the clock; evidence triggers containment.

Hero Copy

When a risky identity starts behaving like an attacker, operators don't get another alert—they get a countdown. Splunk gathers evidence in real time, calculates confidence, and starts a containment clock. The moment evidence crosses a threshold and a human approves, containment executes and a proof dossier is permanently recorded.

Track / Domain

Security

Sponsor / Domain Primitive

Splunk as telemetry source + investigation memory + decision context + containment audit trail + verification layer

Core primitives:

Splunk Enterprise / Cloud

Splunk MCP Server

Splunk AI Assistant for SPL

Splunk Hosted Models (risk prioritization)

SPL query transcripts

Audit records

Before/after verification evidence

Anti-Wrapper Score (Must Be ≥8)
Dimension	Score (/10)	Why
Splunk Necessity	10	Removing Splunk breaks detection, evidence gathering, containment rationale, and verification.
State Change	10	Entity transitions from active risk to contained state.
Proof Artifact	10	Generates a permanent Containment Dossier.
Operational Consequence	10	Containment visibly changes the system state.
Human Approval	9	Human approval gate prevents autonomous security theater.
MCP Substance	8	MCP participates in evidence retrieval and execution flow.
Dashboard Dependence Avoidance	9	Countdown workflow is the product; dashboards are supporting evidence only.
Chatbot Avoidance	10	No conversational surface required.
Reproducibility	8	Seeded attack telemetry and deterministic containment rules.
Judge Retellability	10	"It counted down to containment and proved why."

Total Anti-Wrapper Score: 94/100 (9.4/10)

Judge-Magnet Score
Dimension	Score (/12)	Why
Immediate Understanding	12	Attack + countdown is instantly understandable.
Visible Consequence	12	Entity becomes contained on-screen.
Audience Participation	12	Judge can accelerate, stop, or approve containment.
Sponsor Fit	12	Uses Splunk throughout the entire loop.
Memorability	11	Countdown mechanic creates tension and recall.
Proof Strength	12	Dossier, audit trail, and verification report remain after execution.
Feasibility	10	Can be implemented with seeded telemetry and simulated containment endpoint.
Novelty	11	Evidence-driven countdown is uncommon in security tooling.

Total Judge-Magnet Score: 92/96 (11.5/12)

Recent Idea Family

Enterprise Security risk prioritization + SOAR execution loop.

Freshness Delta

Transforms containment from a recommendation workflow into a timed operational commitment driven by accumulating evidence.

Mutation Operator

Risk Entity × Countdown × Evidence Threshold

2026 Clone Trap Avoided

Not:

Security copilot

Alert chatbot

Dashboard product

Case-management UI

Generic SOAR workflow

Alert summarizer

Containment itself is the experience.

Non-Chat Host Surface

Containment Console

Panels:

Risk Entity

Evidence Feed

Containment Clock

Approval Action

Proof Dossier

Visible 60-Second Consequence

Risky identity:
ACTIVE → CONTAINED

The countdown reaches threshold, approval occurs, containment executes, verification confirms state change.

Durable Proof Artifact

Containment Dossier

Entity ID

Evidence chain

SPL transcript

Risk progression

Approval record

Containment execution log

Verification queries

Final status

One Miracle

Real-time evidence accumulation visibly changes the countdown outcome.

The clock is not decorative; telemetry directly affects the containment decision.

Cut List

Removed:

Multi-agent theater

Chat interface

Alert dashboarding

Workflow builder

Historical analytics

Incident management suite

Complex orchestration designer

Secondary personas

G1 Decision

LOCKED

Proceed with Containment Countdown as the primary submission concept.

---FILE: pitch/demo_interaction_plan.md---

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

---FILE: pitch/hero.md---

Hero
5-Second Hero Line

Contain risky identities in 60 seconds after evidence crosses threshold.

Tagline

Evidence earns time. Time earns containment.

30-Second First-Action Line

A risky identity appears in Splunk with an active containment clock. As telemetry arrives, evidence accumulates, confidence rises, and the operator decides whether containment should proceed before the countdown expires.

60-Second Consequence Line

Within one minute the identity transitions from active threat to contained entity, and Splunk generates a complete dossier proving what evidence triggered the decision, who approved it, what action executed, and how containment was verified.

Proof Artifact Line

Every containment produces a permanent Containment Dossier containing evidence chains, SPL transcripts, approval records, execution logs, and verification results.

Submission / Video Hook

Watch an attacker race a clock they cannot see—and lose when Splunk proves containment should happen.

---FILE: pitch/user_cases.md---

User Cases
Case 1 — HERO PATH
Actor

Security Operations Center analyst.

Scar

Critical identity alerts arrive constantly, but containment decisions take too long because analysts must manually gather evidence.

Trigger

A privileged identity suddenly accumulates multiple high-risk security signals.

First Click

Open the active Containment Countdown.

30s Flow

Splunk loads entity dossier.

Evidence stream appears.

Risk confidence rises.

Countdown advances toward threshold.

Analyst reviews supporting evidence.

60s Consequence

Analyst approves containment.

Identity changes:

ACTIVE → CONTAINED

Verification succeeds.

Proof Artifact

Containment Dossier:

Evidence chain

SPL transcript

Approval log

Execution record

Verification report

Fallback

Use seeded attack telemetry and simulated containment endpoint.

Success Metric

Containment decision completed in under 60 seconds with complete audit evidence.

Case 2 — Security Manager Review
Actor

Security manager.

Scar

Containment actions are difficult to justify during audits because evidence is scattered across systems.

Trigger

Manager reviews a completed containment event.

First Click

Open completed Containment Dossier.

30s Flow

Review evidence timeline.

Inspect threshold calculation.

Confirm approval record.

Review containment execution.

Review verification queries.

60s Consequence

Manager confirms the action was justified and compliant without reconstructing the investigation manually.

Proof Artifact

Audit-ready Containment Dossier with complete evidence trail.

Fallback

Replay previously generated containment records from seeded telemetry.

Success Metric

Audit review completed from a single dossier without external investigation.

Case 3 — Incident Commander
Actor

Incident commander.

Scar

Teams waste time debating whether enough evidence exists to take action.

Trigger

A high-severity security incident opens.

First Click

View the countdown threshold panel.

30s Flow

Observe risk progression.

Compare evidence score to threshold.

Review top contributing signals.

Decide whether to accelerate approval.

60s Consequence

Containment occurs with a documented rationale instead of subjective debate.

Proof Artifact

Threshold decision record attached to the Containment Dossier.

Fallback

Replay deterministic evidence progression from seeded attack scenarios.

Success Metric

Reduction in containment-decision time while preserving approval accountability.