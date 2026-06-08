# UIUX Interaction Plan
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
