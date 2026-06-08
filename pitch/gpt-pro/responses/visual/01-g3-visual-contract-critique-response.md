G3 Verdict: Pass-with-fixes

No hard blocker. The concept is strong and demo-legible. The main G3 risk is that “mission-control cockpit” can accidentally collapse into a dark SaaS dashboard with circular charts. The fix is to make one stateful containment instrument the visual source of truth: every feed, threshold control, approval, and dossier proof must visibly connect back to the countdown.

The local agent should implement this as a build contract, not a taste pass.

1. Concrete Design Anchor / Recipe
Anchor: Containment Command Cockpit

The UI is not a dashboard. It is an operator cockpit organized around a containment instrument.

The screen’s visual law:

Telemetry enters from the right, identity risk sits on the left, the containment countdown adjudicates in the center, and proof is stamped across the bottom.

Implementation recipe:

Dark graphite cockpit shell
+ central radial countdown instrument
+ left identity/risk panel
+ right evidence feed
+ bottom proof rail
+ dossier seal after containment

Use this exact visual hierarchy:

Countdown Dial — largest object on /mission; must be readable in 5 seconds.

Identity State — ACTIVE, CONTAINMENT PENDING, CONTAINED.

Evidence Feed — shows why the countdown is changing.

Approval Control — operator agency: approve or delay.

Proof Rail / Dossier — proves the chain after action.

Do not build stacked card grids. Use instrument panels with clipped corners, thin divider rules, inset grid lines, and state-linked glow only around active operational elements.

Suggested base tokens:

CSS
:root {
  --cockpit-bg: #070b0f;
  --cockpit-panel: #0d141b;
  --cockpit-panel-raised: #111b24;
  --cockpit-line: rgba(148, 163, 184, 0.22);
  --cockpit-line-strong: rgba(226, 232, 240, 0.42);

  --signal-cold: #7dd3fc;
  --signal-warn: #f59e0b;
  --signal-danger: #ef4444;
  --signal-proof: #34d399;
  --signal-muted: #64748b;

  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
}

Panel shape contract:

CSS
.mission-panel {
  background:
    linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0)),
    var(--cockpit-panel);
  border: 1px solid var(--cockpit-line);
  clip-path: polygon(
    14px 0,
    100% 0,
    100% calc(100% - 14px),
    calc(100% - 14px) 100%,
    0 100%,
    0 14px
  );
}

The cockpit should feel custom even with Tailwind present. Tailwind may provide spacing and layout, but the visual signature must come from bespoke CSS, SVG, and stateful motion.

2. Four Positioning Answers
Narrative role

Operator proof loop.

The product is not “AI helps security.” It is:

“Evidence changes a containment timer, a human approves the action, and the system proves why containment happened.”

Every screen must preserve the product spine:

Signal -> Context -> Decision -> Action -> Proof

The judge should always know which stage they are seeing.

Viewing distance

Five-foot demo clarity.

A judge watching a recording or looking over a shoulder must understand the state without reading paragraphs.

Minimum readable items at 1920x1200:

Identity:        ACTIVE / CONTAINED
Countdown:       60s / 42s / THRESHOLD CROSSED
Confidence:      72% / 88% / 94%
Decision:        APPROVE CONTAINMENT / DELAY
Proof:           SPL transcript / approval / execution / verification

Body copy can be small. State labels cannot.

Visual temperature

Cold operational base, hot evidence moments.

Use a dark blue-black graphite shell. Keep most UI cold: slate, cyan, steel. Use amber only for threshold tension. Use red only for pre-containment risk or failed verification. Use green only after proof succeeds.

Temperature progression:

Collecting evidence     cold cyan
Approaching threshold   cyan + amber notch
Threshold crossed       amber ring + pending pulse
Approved/executing      amber to white sweep
Contained/proven        green seal + stable rail
Delayed                 muted amber, no green proof seal

No purple AI gradients. No rainbow telemetry. No marketing glow.

Capacity check

One miracle only: telemetry changes the countdown outcome.

The demo must not try to show a full SIEM, SOAR builder, chat assistant, policy engine, and dashboard. The cockpit has capacity for:

1 identity
1 active countdown
1 threshold policy
1 evidence stream
1 approval moment
1 dossier
1 architecture proof

Everything else is supporting proof.

3. Tightened Non-Tailwind Visual Signature

The signature is four named elements. These should become explicit components, not decorative afterthoughts.

Signature element	Component	State change it must show	Required behavior
Radial containment countdown	ContainmentDial	ACTIVE -> THRESHOLD_CROSSED -> APPROVAL_PENDING -> CONTAINED	Confidence arc grows when evidence arrives. Threshold notch is fixed unless operator changes threshold. Countdown numerals change as confidence crosses policy bands.
Evidence ticker	EvidenceTicker	new_evidence -> confidence_delta -> countdown_delta	Each evidence item must show a visible delta, for example +8 confidence, and trigger a matching pulse on the dial.
Dossier seal	DossierSeal	UNSEALED -> SEALED_VERIFIED	Appears only after action and verification. Must include dossier ID, identity, final status, and verification result.
Proof timeline rail	ProofRail	Signal -> Context -> Decision -> Action -> Proof	Bottom rail advances one stage at a time. The active stage glows. Completed stages receive a stamped mark.
Required state mapping
TypeScript
type ContainmentState =
  | "collecting"
  | "threshold_crossed"
  | "approval_pending"
  | "approved"
  | "executing"
  | "contained"
  | "delayed"
  | "verification_failed";

Visual response by state:

collecting:
  Dial arc cyan.
  Identity chip says ACTIVE.
  Proof rail highlights Signal or Context.

threshold_crossed:
  Threshold notch flashes amber once.
  Countdown center label changes to THRESHOLD CROSSED.
  Evidence ticker pins the evidence item that caused crossing.

approval_pending:
  Approve and Delay buttons become the dominant controls.
  Dial outer ring holds amber.
  Proof rail highlights Decision.

approved:
  Approval record appears inline.
  Dial center changes to EXECUTING.
  Proof rail advances to Action.

executing:
  Identity state transitions ACTIVE -> CONTAINMENT PENDING.
  Execution log begins streaming.
  No green seal yet.

contained:
  Identity state becomes CONTAINED.
  DossierSeal stamps VERIFIED.
  Proof rail advances to Proof.
  Export affordance appears.

delayed:
  Countdown pauses.
  Identity remains ACTIVE.
  Dossier shows delayed decision, not containment proof.

verification_failed:
  Identity state must not claim proven containment.
  DossierSeal shows VERIFY FAILED.
  Proof rail stops at Action.

Hard requirement:

The evidence ticker and countdown dial cannot be independent animations. The same state update that appends evidence must update confidence, countdown, and proof rail.

4. Desktop Composition: 1920 × 1200

Target route: /mission

Use a 1920x1200 recording frame with a fixed cockpit composition.

Viewport: 1920 x 1200
Outer margin: 56
Column gap: 32
Header height: 72
Main height: 792
Proof rail height: 216
Layout coordinates
Header
x: 56
y: 32
w: 1808
h: 72

Main grid
x: 56
y: 128
w: 1808
h: 792

Left panel: Risk Identity
x: 56
y: 128
w: 424
h: 792

Center panel: Countdown Command
x: 512
y: 128
w: 896
h: 792

Right panel: Evidence Feed
x: 1440
y: 128
w: 424
h: 792

Bottom panel: Proof Rail
x: 56
y: 944
w: 1808
h: 216
Header contents

Left:

Containment Countdown mark
“Containment Countdown”
“Signal -> Context -> Decision -> Action -> Proof”

Center:

Scenario chip: DEMO REPLAY / seeded Splunk-compatible telemetry
Clock chip: 00:42 elapsed

Right:

Architecture link
Replay Lab link
Dossier link

Must not say “live Splunk connected” unless real credentials are configured.

Left panel: RiskIdentityPanel

Top section:

Identity: ava.kline@northstar.example
Role: Privileged Finance Admin
State chip: ACTIVE
Risk band: Elevated

Middle section:

Risk facts:
- Impossible travel
- MFA fatigue pattern
- Privileged app touch
- Unusual SPL match count

Bottom section:

ThresholdPolicyControl
Default threshold: 80
Operator-adjustable: 70 / 80 / 90
Current threshold notch must move on the center dial.
Center panel: CountdownCommandPanel

Dominant object:

ContainmentDial
size: 560 x 560
centered horizontally
top y within panel: 52

Dial center must show one of:

60
42
18
THRESHOLD
APPROVE?
CONTAINED

Below dial:

ConfidenceMeter
Current confidence: 74% -> 82% -> 91%
Policy threshold: 80%

Primary action area:

Approve Containment button
Delay 10 minutes button

Button state:

Before threshold: disabled with “Waiting for threshold”
After threshold: enabled
After approval: replaced by approval record
Right panel: EvidenceTicker

Top:

Evidence stream title
“Seeded SPL-compatible replay”

Evidence item format:

[10:04:12] impossible_travel_detected
confidence +18
source: index=identity sourcetype=okta:events

Pinned crossing item:

CROSSED THRESHOLD
This event changed the outcome

Bottom:

SPLTranscriptPreview
Shows last 3 SPL lines or query fragments.
CTA: Review decision
Bottom panel: ProofRail

Five equal stages:

Signal
Context
Decision
Action
Proof

Each stage must include:

stage label
timestamp
artifact count
status stamp

Example:

Signal      4 events
Context     confidence 82%
Decision    approved by judge
Action      ACTIVE -> CONTAINED
Proof       verification passed

The bottom rail is not decorative. It is the visible product spine.

5. Mobile Composition: 390 × 844

Target route: /dossier/demo

Mobile is not a mini cockpit. It is a read-only proof artifact opened by QR.

Mobile rule

A judge must confirm these within two taps:

containment status
evidence chain
approval record
verification result
Layout
Viewport: 390 x 844
Horizontal margin: 16
Content width: 358
Sticky top status height: 72
Composition
Sticky header
x: 0
y: 0
w: 390
h: 72

Dossier hero
x: 16
y: 88
w: 358
h: 156

Proof jump bar
x: 16
y: 260
w: 358
h: 48

Proof cards
x: 16
y: 324
w: 358
vertical stack
Sticky header
Containment Countdown mark
Dossier DEMO-001
Status chip: CONTAINED
Dossier hero
DossierSeal
Identity: ava.kline@northstar.example
Final state: CONTAINED
Verification: PASSED
Approved by: demo operator

This must be visible without scrolling.

Proof jump bar

Use four pill buttons:

Evidence
Approval
Execution
Verify

Tap behavior:

Tap Evidence   -> scrolls to evidence chain
Tap Approval   -> scrolls to approval record
Tap Execution  -> scrolls to execution log
Tap Verify     -> scrolls to verification result

From QR open:

0 taps: status + verification summary visible
1 tap: jump to needed section
2 taps: expand SPL transcript or execution detail
Mobile proof cards

Card order:

1. Evidence chain
2. Threshold policy
3. Approval record
4. Execution log
5. Verification result
6. Export artifact

Do not show threshold controls on mobile. This route is proof, not operation.

6. Route / Component Map with Required Source Markers
Global shell
TypeScript
<AppShell data-visual-lane="security-mission-control-cockpit">
  {children}
</AppShell>

The marker must be present on every route shell.

/

Purpose: landing page with a 5-second product signal.

Required root marker:

TypeScript
<HeroLanding
  data-visual-lane="security-mission-control-cockpit"
  data-hero-composition="countdown-command-cockpit"
/>

Components:

HeroMissionPreview
ContainmentDialPreview
IdentityStateStrip
EvidenceTickerPreview
ProofRailMini
PrimaryCTA -> /mission
SecondaryCTA -> /architecture

Hero copy:

Contain risky identities in 60 seconds after evidence crosses threshold.

Subcopy:

Replay seeded Splunk-compatible telemetry, approve containment, and generate a proof dossier.

Do not say:

Autonomous Splunk containment
Live Splunk remediation
Production-ready SOC automation
/mission

Purpose: live operator cockpit for the recorded demo.

Required marker:

TypeScript
<ContainmentConsole
  data-visual-lane="security-mission-control-cockpit"
  data-hero-composition="countdown-command-cockpit"
/>

Components:

MissionHeader
RiskIdentityPanel
ThresholdPolicyControl
ContainmentDial
ConfidenceMeter
EvidenceTicker
SPLTranscriptPreview
ApprovalControl
ExecutionLogPreview
ProofRail
DossierGeneratedToast

Required state:

identity.state
confidence.current
threshold.current
countdown.remaining
evidence.items[]
decision.status
execution.status
verification.status
/decision

Purpose: decision chamber after threshold crossing.

Components:

DecisionChamber
EvidenceBreakdown
ThresholdPolicySummary
SPLTranscript
ModelNarrativePanel
ApprovalRecordForm
ApproveContainmentButton
DelayDecisionButton
DecisionProofPreview

Hosted-model copy rule:

Show hosted-model narrative only when available.
Fallback label: “Deterministic replay narrative”

No chatbot UI. The model narrative is an explanation panel, not a conversation.

/dossier/[id]

Purpose: proof artifact.

Components:

DossierHeader
DossierSeal
ContainmentTimeline
EvidenceChain
ApprovalRecord
SPLTranscript
ExecutionLog
VerificationResult
ExportDossierButton
MobileProofJumpBar

Required sections:

SPL transcript
approval record
execution log
verification result

The dossier must make containment auditable even without the live cockpit.

/architecture

Purpose: architecture proof.

Components:

ArchitectureHeader
SystemFlowDiagram
SplunkCompatibleTelemetryNode
MCPBoundaryNode
HostedModelNode
PolicyEngineNode
ActionExecutorNode
DossierStoreNode
ArchitectureAssumptionsPanel

Required copy:

Uses deterministic seeded Splunk-compatible telemetry for demo replay.
Live Splunk credentials are not configured in this build.

Must link to root:

architecture_diagram.md

or render the same content as architecture_diagram.png / architecture_diagram.pdf.

/replay

Purpose: deterministic scenario picker.

Components:

ReplayLab
ScenarioPicker
ReplaySeedBadge
ReplayStatusTimeline
ReplayResetButton
StartMissionButton

Scenario examples:

Impossible Travel + MFA Fatigue
Privileged App Touch
Threshold Delay Outcome
Verification Failure Drill

Replay rule:

Same seed must produce same evidence order, confidence changes, countdown state, and dossier output.
7. Brand Minimum: Bespoke SVG Mark

Use a simple SVG mark called C60 Seal.

It should be implementable with plain SVG, no image generation.

Shape
40 x 40 viewBox
Outer broken circle: containment boundary
Inner shield notch: identity protection
Small 60-second tick at top-right
Three horizontal evidence ticks inside
One final dot at lower-right: proof stamp
SVG construction
- Outer circle stroke, 30px diameter, stroke-dasharray creates a gap.
- Inner shield is a simple polygon.
- Evidence ticks are 3 short horizontal lines.
- Proof dot is a 3px circle.

Suggested SVG structure:

TypeScript
<svg viewBox="0 0 40 40" aria-hidden="true">
  <circle
    cx="20"
    cy="20"
    r="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeDasharray="72 18"
    strokeLinecap="round"
  />
  <path
    d="M20 10 L29 14 V21 C29 27 25 31 20 33 C15 31 11 27 11 21 V14 Z"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinejoin="round"
  />
  <path d="M15 18 H25 M15 22 H23 M15 26 H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  <circle cx="30" cy="30" r="2.6" fill="currentColor" />
</svg>

Usage:

Header mark
Dossier seal center
Favicon
Export artifact stamp

Do not use a generic shield icon from lucide as the primary mark. Lucide icons may support secondary UI only.

8. Motion Vocabulary and Exact Implementation Rules
Motion principle

Motion must communicate cause and consequence.

No ambient “AI magic.” No unrelated pulsing backgrounds.

Allowed motion types
Evidence tick enters
Confidence arc advances
Threshold notch reacts
Countdown numeral changes
Approval stamp lands
Proof rail advances
Dossier seal stamps
State-linked motion rules
Evidence arrival
Trigger: evidence item appended
Duration: 180ms enter + 220ms settle
Animation:
  opacity 0 -> 1
  translateY 8 -> 0
  confidence delta chip flashes once
Side effect:
  ContainmentDial arc updates in the same state transition
Confidence arc
Trigger: confidence changes
Duration: 420ms
Animation:
  SVG stroke-dashoffset
  no bouncing
  no elastic easing
Easing:
  cubic-bezier(0.2, 0.8, 0.2, 1)
Threshold crossing
Trigger: confidence >= threshold
Duration: 600ms total
Animation:
  threshold notch flashes amber twice maximum
  center label changes to THRESHOLD CROSSED
  proof rail advances to Decision
Approval action
Trigger: operator clicks Approve
Duration: 300ms
Animation:
  button compresses 0.98 scale for 90ms
  approval stamp appears
  identity state starts ACTIVE -> CONTAINMENT PENDING
Contained state
Trigger: verification passed
Duration: 700ms
Animation:
  green proof sweep on dossier seal
  proof rail final stage stamps once
  no infinite glow after completion
Framer Motion restrictions

Use Framer Motion only for:

opacity
transform
SVG stroke-dashoffset
small scale confirmation
layout transition between known states

Do not use:

infinite pulsing except a subtle pending cursor
large parallax
particle effects
randomized jitter
background blobs
spinning loaders as decoration
Reduced motion

Required behavior:

TypeScript
const prefersReducedMotion = useReducedMotion();

When enabled:

Replace movement with instant state changes.
Keep color/status changes.
No auto-scrolling evidence ticker.
No pulsing threshold notch.
Timing limit

The recorded demo must never wait for animation to finish before state advances. Motion decorates state; it does not control state.

9. First-Run Plan for a Cold Judge
First 5 seconds

Goal: judge understands the product.

Visible on / or /mission:

Contain risky identities in 60 seconds after evidence crosses threshold.
ACTIVE identity on left.
Large countdown dial in center.
Evidence feed on right.
Proof rail along bottom.

Required visual moment:

One evidence item ticks in.
Confidence rises.
Countdown dial visibly changes.

Judge takeaway:

“Telemetry changes the containment countdown.”

First 30 seconds

Goal: judge sees operator control.

Demo flow:

1. Open /mission.
2. Show identity ACTIVE.
3. Adjust threshold from 80 to 70 or 90.
4. Replay evidence arrives.
5. Confidence crosses threshold.
6. Approval controls unlock.

Required sentence in narration:

“I changed the threshold, and the same telemetry now changes whether containment is triggered.”

Do not mention live Splunk. Say:

“This replay uses seeded Splunk-compatible telemetry so the demo is deterministic.”

First 60 seconds

Goal: judge sees consequence.

Demo flow:

1. Click Approve Containment.
2. Identity changes ACTIVE -> CONTAINMENT PENDING.
3. Execution log streams.
4. Verification passes.
5. Identity changes to CONTAINED.
6. Dossier generated toast appears.

Required visual outcome:

DossierSeal stamps VERIFIED.
ProofRail completes Signal -> Context -> Decision -> Action -> Proof.

Judge takeaway:

“Approval creates an auditable containment dossier.”

Full 3-minute video

Recommended pacing:

0:00-0:12   Hook: risky identity, countdown, evidence feed.
0:12-0:35   Threshold change: operator changes policy and evidence accumulates.
0:35-0:58   Threshold crossing: confidence crosses line, approval unlocks.
0:58-1:25   Decision: review evidence breakdown and SPL transcript.
1:25-1:50   Action: approve containment, identity changes state.
1:50-2:15   Proof: dossier shows approval, execution, verification.
2:15-2:35   Mobile QR: open /dossier/demo and show proof in two taps.
2:35-2:55   Architecture: seeded telemetry, MCP/model boundary, dossier store, OSS repo.

Final narration:

“Containment Countdown is not a chatbot or dashboard. It is a proof-oriented operator cockpit where evidence changes the countdown, approval changes identity state, and the dossier proves exactly why.”

10. Five-Dimension Critique of the Proposed v0 Anchor
Philosophy alignment: 9/10

The concept aligns strongly with the hackathon frame because it is agentic without becoming a chatbot. The human approval moment keeps it credible, and the dossier makes the system judgeable.

No fix required.

Hierarchy: 8.5/10

The central countdown gives the demo a strong focal point. The product spine is easy to retell.

Fix to preserve score:

The countdown dial must be visually larger than every card, chart, feed, or table.
The approval button must become the dominant control only after threshold crossing.
The proof rail must remain visible on /mission during the full demo.
Craft: 7.5/10

Risk: the current anchor can become a generic dark Tailwind dashboard with a circular progress chart.

Required fixes:

1. Replace default rounded cards with clipped mission panels.
2. Build the countdown as a custom SVG instrument, not a Recharts pie/radial chart.
3. Add threshold notch, confidence arc, countdown numeral, and policy label inside the same component.
4. Use a bespoke C60 Seal mark instead of a stock shield icon.
5. Make proof rail stamps custom, not generic check icons.

Minimum craft bar:

At least four bespoke visual elements must be visible in the first 5 seconds:
- radial containment countdown
- evidence ticker
- proof rail
- C60 mark or dossier seal
Functionality: 8.5/10

The functionality is coherent and buildable. The strongest aspect is that threshold changes can be shown as an actual state change, not explained in text.

Fix to preserve score:

Threshold changes must alter the threshold notch and crossing behavior.
Evidence arrival must update confidence and countdown in one reducer/action.
Approval must create a durable approval record visible in the dossier.
Verification must be separate from execution.
Originality: 7.8/10

The idea is more original than a dashboard, but “security cockpit” is a familiar visual trope. The originality depends on making the countdown and dossier proof feel unique.

Required fixes:

1. Name the central instrument in UI: “Containment Countdown.”
2. Label the crossing event: “This event changed the outcome.”
3. Make the dossier seal a real visual artifact, not a modal confirmation.
4. Carry the five-stage proof rail across /mission, /decision, and /dossier.
5. Avoid any chat input, assistant avatar, generic alert table, or SOAR flow canvas.
Overall: 8.2/10

G3 passes with the craft/originality fixes above. The app will be memorable if the judge can retell the miracle in one sentence:

“Evidence changed the countdown, I approved containment, and the dossier proved why.”

11. Implementation Checks for pitch/visual-build-contract.md

These checks should be written into the contract and later verified in code/tests.

Required files
pitch/visual-build-contract.md
architecture_diagram.md or architecture_diagram.png or architecture_diagram.pdf at repo root
public demo video under 3 minutes
public OSS repository
OSI-approved license file
English judge-facing README / pitch materials
Required source markers

Automated check:

Search rendered route HTML for:
data-visual-lane="security-mission-control-cockpit"
data-hero-composition="countdown-command-cockpit"

Required locations:

/          must include both markers
/mission   must include both markers
AppShell   must include data-visual-lane
Route smoke checks

Each route must render without credentials:

/
 /mission
/decision
/dossier/demo
/architecture
/replay

No route may require live Splunk credentials.

Splunk claim check

Search all user-facing copy for forbidden claims:

Forbidden unless real credentials are configured:
- live Splunk connected
- connected to your Splunk instance
- production Splunk remediation
- autonomous live containment

Required allowed phrasing:

seeded Splunk-compatible telemetry
deterministic replay
SPL transcript
demo replay
State transition checks

Test these transitions:

Initial:
  identity.state === ACTIVE
  confidence < threshold
  approval disabled

Evidence replay:
  evidence item appended
  confidence increases
  countdown/dial changes
  proof rail advances from Signal to Context

Threshold crossing:
  confidence >= threshold
  approval enabled
  crossing evidence item is pinned
  label says THRESHOLD CROSSED

Approval:
  approval record created
  identity.state becomes CONTAINMENT PENDING
  execution log starts

Verification:
  verification result created
  identity.state becomes CONTAINED only after verification passes
  dossier seal says VERIFIED
Threshold behavior checks
Changing threshold must:
  move threshold notch on ContainmentDial
  change whether the current evidence crosses threshold
  update policy summary in /decision
  appear in /dossier/[id]
Dossier content checks

/dossier/demo must contain:

containment status
identity
evidence chain
threshold policy
SPL transcript
approval record
execution log
verification result
export affordance
Mobile QR checks

At viewport 390x844:

Status chip CONTAINED visible without scrolling.
Verification result summary visible without scrolling.
Proof jump bar visible without scrolling.
Evidence, Approval, Execution, Verify sections reachable in one tap.
Expanded SPL transcript or execution detail reachable in second tap.
Motion checks
prefers-reduced-motion disables movement.
Evidence tick causes dial update.
Threshold crossing causes notch reaction.
No infinite decorative animation after containment.
No random animation timing in deterministic replay.
Visual signature checks

The first 5 seconds of /mission must show:

ContainmentDial
EvidenceTicker
ProofRail
RiskIdentityPanel
C60 mark or DossierSeal preview

The local agent should fail G3 implementation if the first run looks like:

static Grafana board
generic alert dashboard
SOAR flowchart canvas
chatbot
purple AI gradient landing page
unmodified shadcn card stack
Accessibility checks
Approval and delay controls keyboard accessible.
Threshold controls keyboard accessible.
State changes announced with aria-live="polite".
Critical state labels are text, not color-only.
Dossier sections have headings.
Mobile proof jump buttons have descriptive labels.
Demo determinism checks

For the same replay seed:

same evidence order
same confidence deltas
same threshold crossing moment
same approval record after operator action
same execution log
same verification result
same dossier ID or deterministic demo ID
Final G3 implementation standard

The build passes G3 only when this sentence is visually true without narration:

A risky identity became contained because evidence crossed a threshold, a human approved the action, and the dossier proves the chain.