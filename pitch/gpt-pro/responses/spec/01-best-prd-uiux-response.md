PRD
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
UIUX Interaction Plan
Screen Map
Route	Primary User Action	System Response	State Changed	Proof Shown
/mission	Observe threat	Evidence updates	Risk score	Evidence feed
/mission	Raise threshold	Countdown slows	Threshold state	Policy log
/decision	Approve containment	Execute containment	ACTIVE→CONTAINED	Execution log
/decision	Delay approval	Continue gathering	Confidence changes	Additional evidence
/dossier/[id]	Review dossier	Load records	None	Audit-ready artifact
/architecture	Inspect architecture	Show integrations	None	Splunk role proof
First-Run Flow
0–10s

Already visible:

Risky identity

Active countdown

Incoming evidence

Rising confidence

Hook:

"An attacker is racing a containment clock."

10–30s

Evidence arrives:

Impossible travel

Privilege escalation

Sensitive data access

Confidence rises.

30–60s

Threshold reached.

Judge chooses:

Approve

Delay

Raise threshold

Containment executes.

2–3min

Reveal:

SPL transcript

Verification

Audit record

Dossier

Architecture

P0 Screen Interaction Details
/mission
Default

Active countdown

Evidence stream

Risk identity card

Loading

Skeleton feed

Countdown pulse

Empty

Awaiting telemetry

Error

Telemetry unavailable

Replay mode CTA

Success

Confidence progression visible

Keyboard

Arrow keys adjust threshold

Enter approve

Touch

Swipe evidence timeline

Accessibility

Live region countdown updates

WCAG AA contrast

Keyboard-first approval

/decision
Default

Approval disabled until threshold

Loading

SPL transcript streaming

Empty

No evidence gathered

Error

MCP query failure

Success

Containment enabled

Keyboard

Tab order fixed

Space activates approval

Accessibility

Focus lock during modal approval

/dossier/[id]
Default

Timeline loaded

Loading

Dossier skeleton

Empty

No dossier generated

Error

Retrieval failure

Success

Export available

Accessibility

Semantic timeline navigation

Demo Choreography

Open /mission

Show attack already underway

Evidence begins arriving

Risk score rises

Judge raises threshold

Additional evidence appears

Threshold reached

Judge approves

Identity becomes CONTAINED

Open dossier

Show SPL transcript

Show verification

Show architecture

Components
Core

CountdownRing

RiskIdentityCard

EvidenceStream

ConfidenceMeter

ThresholdSlider

ApprovalButton

Proof

SPLTranscript

AuditTimeline

VerificationPanel

DossierViewer

Infrastructure

ReplayController

MCPInvocationCard

ArchitectureViewer

Data/API Dependencies
Feature	Dependency
Evidence feed	Splunk telemetry
Retrieval	MCP Server
SPL transcript	Splunk AI Assistant
Narrative	Hosted Models / AI Toolkit
Execution	Simulated containment API
Verification	Splunk queries
Dossier	Audit aggregation service
Test Selectors
HTML
data-testid="countdown-ring"
data-testid="risk-score"
data-testid="evidence-feed"
data-testid="threshold-slider"
data-testid="approve-containment"
data-testid="containment-status"
data-testid="spl-transcript"
data-testid="verification-report"
data-testid="dossier-export"
Mobile QR Behavior
Presenter Mode

Desktop runs primary demo.

Judge Mode

QR code opens:

/dossier/demo

Read-only mobile experience.

Judge can:

Inspect evidence

View approval record

Verify containment result

No containment actions exposed on mobile.

Stack Lock Recommendation
Branch
Bash
feat/containment-countdown
Frontend Framework / Libraries

Next.js 15 App Router

React 19

Tailwind CSS 4

Motion

TanStack Query

Zustand

Zod

React Aria

Recharts

Lucide Icons

Backend / Server Actions / Routes
/app/api/evidence/tick
/app/api/mcp/query
/app/api/spl/generate
/app/api/threshold/update
/app/api/containment/approve
/app/api/containment/execute
/app/api/verification/run
/app/api/dossier/build
Deployment Target

Primary

Cloudflare Workers + OpenNext

Fallback

Vercel

Product Backbone
Telemetry
  ↓
Splunk
  ↓
MCP Retrieval
  ↓
Evidence Engine
  ↓
Threshold Engine
  ↓
Human Approval
  ↓
Containment Simulator
  ↓
Verification
  ↓
Dossier Generator
Real Data Sources
Required

Splunk Enterprise / Splunk Cloud

Splunk MCP Server

Splunk AI Assistant generated SPL

Splunk Hosted Models or AI Toolkit narrative

Splunk audit records

Fallback

Seeded Splunk-compatible telemetry dataset

Required Env Vars
Variable	Source	Status
SPLUNK_HOST	Splunk instance URL	Required
SPLUNK_TOKEN	Splunk token auth	Required