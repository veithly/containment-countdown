User Cases
## User case 1 — HERO PATH
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

## User case 2 — Security Manager Review
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

## User case 3 — Incident Commander
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
