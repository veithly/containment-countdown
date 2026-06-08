# Project PRD
1. Project Background

Project: Containment Countdown (IDEA-008)

One-line premise: When a risky identity begins behaving like an attacker, operators do not receive another alert. They receive a countdown. Evidence accumulates, confidence rises, human approval remains mandatory, containment executes, and Splunk generates a permanent Containment Dossier. 

concept_lock

The project is designed specifically for the Splunk Agentic Ops Hackathon and aligns with the strongest recurring winner pattern:

Signal → Context → Decision → Action → Proof. 

deep_research_10x10

The experience is intentionally not:

A chatbot

An alert summarizer

A dashboard product

A generic SOAR workflow

Containment itself is the product experience. 

concept_lock

2. Problem Definition

Security teams suffer from a repeated operational failure mode:

High-risk identity activity is detected.

Analysts spend time gathering evidence.

Teams debate whether enough evidence exists.

Containment is delayed.

Audit reconstruction happens later.

The real bottleneck is not detection.

The bottleneck is evidence-backed containment decision speed. 

user_cases

Current workflows produce:

Alert fatigue

Slow containment

Scattered evidence

Weak auditability

Long verification cycles

Containment Countdown converts investigation into a timed operational commitment driven by accumulating evidence. 

concept_lock

3. Target Users
Primary

Security Operations Center (SOC) Analyst

Secondary

Security Manager

Tertiary

Incident Commander

All three personas appear in the validated user-case set. 

user_cases

4. User Pain Points
SOC Analyst

Too many identity alerts

Evidence spread across systems

Slow containment decisions

Security Manager

Difficult audit reconstruction

Weak proof of why containment occurred

Incident Commander

Debate over evidence sufficiency

Delayed action during active incidents

The shared pain:

The organization can detect risk faster than it can justify containment. 

user_cases

5. Core Requirements & Priority
P0 Demo Must-Haves (exactly 3)
P0-1 Evidence-Driven Countdown

A risky identity accumulates telemetry-driven evidence that visibly changes containment confidence and countdown state.

P0-2 Human-Approved Containment

Containment only executes when:

Evidence score ≥ threshold

Deterministic policy satisfied

Human approval granted

P0-3 Containment Dossier

Containment generates a permanent proof artifact containing:

Evidence chain

SPL transcript

Approval record

Execution log

Verification result

demo_interaction_plan

P1

Judge-adjustable threshold

Approval delay scenarios

Replayable containment runs

Verification query explorer

P2

Multiple risky identities

Historical dossier browser

Additional containment policies

Multi-step remediation workflows

6. Solution Overview

Containment Countdown transforms security response into a visible operational race.

Workflow

Seeded telemetry enters Splunk

Splunk MCP Server retrieves evidence

Splunk AI Assistant generates SPL and stores transcript

Hosted Model narrative contributes risk prioritization

Countdown confidence updates

Human approves

Simulated containment endpoint executes

Verification queries run

Dossier generated

The user experiences a live operational commitment rather than passive analysis.

Splunk Structural Necessity

Splunk provides:

Telemetry source

Investigation context

MCP access layer

AI-generated SPL

Risk prioritization narrative

Audit trail

Verification evidence

Removing Splunk breaks the hero workflow.

Recent Devpost AI Pattern

Research shows successful AI projects consistently outperform when they demonstrate:

State transition

Operational consequence

Human approval

Durable artifact

instead of:

Chat interactions

Summaries

Agent theater

Containment Countdown follows the winning pattern:

Signal → Context → Decision → Action → Proof.

7. User Flows
Hero Flow
Telemetry Arrives
      ↓
Evidence Feed Updates
      ↓
Confidence Rises
      ↓
Countdown Progresses
      ↓
Threshold Reached
      ↓
Judge/Operator Approval
      ↓
Containment Executes
      ↓
Verification Runs
      ↓
Containment Dossier Generated
Threshold-Raise Flow
Judge Raises Threshold
        ↓
Containment Pauses
        ↓
Additional Evidence Required
        ↓
Threshold Reached Again
        ↓
Approval
        ↓
Containment
Audit Review Flow
Open Dossier
      ↓
Review Evidence Timeline
      ↓
Review SPL Transcript
      ↓
Review Approval Record
      ↓
Review Verification Result
8. User Cases
User Case 1 — SOC Analyst Hero Path

Trigger: Privileged identity accumulates high-risk signals.

Goal: Contain in under 60 seconds.

Flow:

Open active countdown

Review evidence

Observe confidence rise

Approve containment

Verify state change

Outcome:

ACTIVE → CONTAINED

Artifact:

Containment Dossier. 

user_cases

User Case 2 — Security Manager Review

Trigger: Audit review.

Goal: Justify containment.

Flow:

Open completed dossier

Review evidence timeline

Review threshold

Review approval

Review execution

Outcome:

Containment can be justified without reconstructing investigation history. 

user_cases

User Case 3 — Incident Commander

Trigger: High-severity identity incident.

Goal: Accelerate action while preserving accountability.

Flow:

Observe threshold panel

Review evidence score

Approve or delay

Observe final outcome

Outcome:

Decision rationale becomes explicit and documented. 

user_cases

9. Demo Critical Path & Hero Moment
Hero Moment

A judge actively influences the outcome.

They can:

Approve containment

Delay approval

Raise threshold

The system visibly responds.

Once conditions are satisfied:

ACTIVE
   ↓
CONTAINED

The state change occurs immediately and a dossier appears.

Judge Magnet

The judge can personally:

Stop the clock

Accelerate the clock

Raise proof requirements

Trigger containment

This makes participation unavoidable and memorable.

Retellable sentence:

"I changed the threshold, watched evidence accumulate, approved containment, and Splunk proved exactly why it happened."

10. Pages / Modules Plan
1. /mission

Containment Console

Primary hero surface.

Modules:

Risk Entity Card

Evidence Feed

Confidence Meter

Countdown Clock

Approval Controls

2. /decision

Decision Chamber

Modules:

Evidence Breakdown

SPL Transcript

Hosted Model Narrative

Threshold Controls

Approval Action

3. /dossier/[id]

Containment Dossier

Modules:

Timeline

Evidence Chain

Approval Record

Execution Log

Verification Results

Export Action

4. /architecture

Hackathon proof page:

MCP flow

Splunk integrations

Data flow

Architecture diagram

5. /replay

Replay deterministic containment scenarios.

11. Visual Direction & UI Principles
Visual Theme

Mission-Control Security Product

Not dashboard-first.

Not enterprise CRUD.

Style Keywords

Countdown tension

Operational urgency

Security command center

Evidence-driven motion

Core Visual Objects

Central countdown ring

Live evidence stream

Risk confidence meter

State transition badge

Dossier artifact card

Principles

Outcome before analytics

Evidence before AI

State change before explanation

Proof before celebration

One-screen comprehension

12. Technical Constraints
Required

Public OSS repository

OSS license

Root architecture diagram

Public demo video <3 min

Public demo URL where possible

bounty_brief

Containment Safety

Containment must execute through a deterministic simulated endpoint.

No real IAM changes.

No real firewall modifications.

Containment remains fully auditable.

Reliability

Must survive:

Splunk downtime

Internet instability

API failures

via:

Seeded telemetry

Replay mode

Deterministic containment execution

demo_interaction_plan

13. Success Metrics
Demo Metrics
Metric	Target
Time to understand value	<10s
Time to containment	<60s
Clicks to consequence	≤2
Dossier generation	100%
Replay reliability	100%
Judge Metrics
Metric	Target
Retellability	High
Splunk necessity	Obvious
MCP visibility	Obvious
Hosted Model visibility	Obvious
Proof artifact quality	High
14. Risks & Cut List
Risks
Countdown feels decorative

Mitigation:
Evidence directly affects countdown.

Splunk appears optional

Mitigation:
All evidence, transcripts, verification, and audit proof originate from Splunk.

AI appears magical

Mitigation:
Show SPL transcript and deterministic threshold policy.

Live integration failure

Mitigation:
Seeded telemetry replay.

Cut List

Intentionally not built:

Chat interface

Security copilot

Generic dashboard

Workflow builder

Multi-agent theater

Incident management suite

Historical analytics platform

Custom rule engine

Real IAM enforcement

Real firewall automation

Broad SOAR replacement

Multi-tenant administration

Settings-heavy experiences

PRD Coverage Matrix
ID	Requirement	Route / Component	API / Server Action	Real Data Source	State / Contract	Playwright Test	Deploy Evidence	Status
REQ-001	Evidence countdown	/mission CountdownEngine	POST /api/evidence/tick	Seeded Splunk-compatible telemetry	RiskEntity	countdown-progress.spec.ts	Live URL + replay dataset	P0
REQ-002	MCP evidence retrieval	Evidence Feed	POST /api/mcp/query	Splunk MCP Server	EvidenceRecord[]	mcp-evidence.spec.ts	MCP logs	P0
REQ-003	SPL generation proof	SPL Transcript Panel	POST /api/spl/generate	Splunk AI Assistant	Transcript	spl-transcript.spec.ts	Transcript export	P0
REQ-004	Human approval gate	Approval Panel	POST /api/containment/approve	Threshold policy	ApprovalRecord	approval-gate.spec.ts	Audit log	P0
REQ-005	Containment execution	Containment Endpoint	POST /api/containment/execute	Deterministic simulator	ACTIVE→CONTAINED	containment.spec.ts	Execution record	P0
REQ-006	Verification proof	Verification Module	POST /api/verification/run	Splunk verification queries	VerificationReport	verification.spec.ts	Query results	P1
REQ-007	Dossier generation	/dossier/[id]	POST /api/dossier/build	Evidence + audit records	ContainmentDossier	dossier.spec.ts	Downloadable artifact	P0
REQ-008	Judge threshold control	Threshold Panel	POST /api/threshold/update	Policy engine	ThresholdState	threshold.spec.ts	Recorded demo flow	P1

## Audit Alignment Addendum

### Section 9 demo interaction inheritance

Source: `pitch/demo_interaction_plan.md`

| Beat | Screen evidence |
|---|---|
| 0-10s | Risky identity, active containment clock, incoming evidence, rising confidence. |
| 10-30s | Evidence feed, SPL transcript preview, threshold slider, Hosted Model risk narrative. |
| 30-60s | Judge approves or raises threshold; identity moves `ACTIVE -> CONTAINED`; Containment Dossier appears. |

Judge participation: the judge can approve containment, delay approval, or raise the threshold.

Visual staging: mission-control countdown ring, evidence feed, risk meter, threshold controls, and dossier reveal.

Fallback: seeded Splunk-compatible telemetry plus deterministic simulated containment endpoint.

### Judge magnet inheritance

Brief: `pitch/judge_magnet.md`

Personal/customer scar: SOC analysts can detect risky identity behavior faster than they can justify containment, leaving teams debating while risk escalates.

P0 demo must-haves:
- Evidence-driven containment countdown.
- Human-approved containment action.
- Durable Containment Dossier with SPL transcript and verification.

Attention ladder:
- 0-10s: attack countdown is visible.
- 10-30s: evidence accumulates and confidence rises.
- 30-60s: judge action changes outcome and containment fires.
- 2-3min: dossier, transcript, verification, and architecture are shown.
- 5min/Q&A: repo, tests, architecture diagram, and seeded replay prove reproducibility.

Judge success metrics:
- Value understood in under 10 seconds.
- State change visible in under 60 seconds.
- Splunk necessity is obvious.
- Proof artifact is inspectable.

Prototype cut:
- No chat interface.
- No generic dashboard.
- No full SOAR clone.
- No real IAM/firewall destructive action.

### Section 10 route table

| Route | Surface | Responsibility | Main components |
|---|---|---|---|
| `/mission` | Containment Console | Run the hero countdown and evidence accumulation loop. | `RiskIdentityCard`, `CountdownRing`, `EvidenceStream`, `ThresholdSlider`, `ApprovalButton` |
| `/decision` | Decision Chamber | Show SPL transcript, risk narrative, threshold policy, and approval action. | `SPLTranscript`, `ConfidenceMeter`, `HostedModelNarrative`, `ApprovalPanel` |
| `/dossier/[id]` | Containment Dossier | Persist and inspect the proof artifact after containment. | `AuditTimeline`, `VerificationPanel`, `DossierViewer`, `ExportAction` |
| `/architecture` | Architecture Proof | Explain Splunk/MCP/Hosted Model/data flow for judges. | `ArchitectureViewer`, `MCPInvocationCard`, `DataFlowLegend` |
| `/replay` | Replay Lab | Reproduce seeded containment scenarios. | `ReplayController`, `ScenarioPicker`, `ReplayStatus` |

### Section 11 visual system fields

Visual style lane: security mission-control cockpit.

Primary UI library: React Aria components with custom Tailwind styling and Lucide icons.

Supporting UI library: Recharts for compact telemetry/risk visualizations.

Logo source: logo-generator skill output; use a simple wordmark plus countdown-ring mark.

Avatar source: none; identities are rendered as deterministic risk entity glyphs.

Generated image/cutout assets: not used for app UI; mockup PNGs are generated from buildable HTML/CSS screens.

Non-Tailwind visual signature: radial containment countdown, evidence ticker, verdict-like dossier seal, and timeline proof rail.

Hero composition: full-screen mission-control panel with central countdown ring, left risk identity, right evidence feed, and bottom proof rail.

Visual differentiation note: avoid generic purple AI gradients and SaaS card piles; the first viewport must look like an active security operation.

Forbidden lookalikes: generic SIEM dashboard, ChatGPT sidebar clone, static Grafana board, shadcn admin template, SOAR flowchart canvas.

QR mobile access plan: QR opens `/dossier/demo` as a read-only proof artifact for mobile judges.

Mobile primary flow: inspect containment status, evidence chain, approval record, and verification result in under two taps.

Desktop parity plan: desktop remains the full operational cockpit for countdown control and judge approval.

### Section 12 product backbone

Identity/session model: guest demo session with deterministic `sessionId`; judge actions are recorded under a `roleId` of `operator` or `viewer`.

Storage schema: D1 tables for `risk_entities`, `evidence_events`, `containment_actions`, `approvals`, `verification_runs`, and `dossiers`; KV cache for replay state; R2 optional for exported dossier JSON/PDF.

Ownership fields: `sessionId`, `entityId`, `dossierId`, `roleId`, `createdBy`.

Multi-user proof: desktop operator executes containment while mobile QR viewer opens `/dossier/demo` and observes the generated proof artifact.

Real data source: seeded Splunk-compatible telemetry plus optional live Splunk Enterprise/Cloud connection through token-auth MCP.

Deployment evidence: Cloudflare Workers/OpenNext URL, Playwright hero path, and saved Containment Dossier.
