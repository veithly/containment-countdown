1. Score table

Security/safety risk score: higher = safer / lower risk.

Idea	Feas.	Backbone	Splunk depth	MCP/tools	AI cred.	Proof	Demo	Safety	Scope	Fatal concerns	P0 build	Fallback	Exclude if slide-replaceable?
IDEA-001 Patch Court Verdict	6	7	8	7	7	8	6	6	5	Real patch execution too broad; “court” may feel gimmicky.	Seeded incident, 2 fix candidates, approval, simulated deploy, before/after SPL.	Fake deploy endpoint + replayed telemetry.	Soft no
IDEA-002 Alert Funeral Court	8	8	9	8	7	9	9	9	8	Must avoid looking like alert-summary UI.	Seed alert flood, correlate, merge/suppress, verdict ledger, audit SPL.	Pre-generated correlated alert set.	No
IDEA-003 Drift Court	7	8	8	7	7	8	8	7	7	Real rollback/quarantine can be unsafe; cloud integrations creep.	Seed config drift, evidence dossier, approve rollback to local config, risk drop.	Replayable drift event.	No
IDEA-004 Capacity Time Machine	6	7	8	6	6	7	8	9	6	Forecast/model claim may be unverifiable; capacity action may be fake.	Synthetic time series, predicted breach, approve scaling flag, forecast delta.	Synthetic capacity trend.	Soft no
IDEA-005 Kill Switch Receipt	7	8	9	8	8	9	8	5	7	Unsafe if sold as real containment; broad security APIs risky.	Risky identity, approval, simulated quarantine, receipt with SPL/action/proof.	Mock firewall/IAM action API.	No
IDEA-006 Runbook Mutation Lab	9	8	8	8	8	9	9	9	9	Must prove it is not just a postmortem generator.	Seed incident replay, failing runbook, AI diff, approve mutation, replay passes.	Local replay harness + static incident bundle.	No
IDEA-007 Blast Radius Auction	6	6	7	7	6	6	7	8	5	Auction metaphor may obscure ops value; impact bids may feel arbitrary.	5 seeded incidents, deterministic impact score, spend one token, receipt.	Frozen bid timeline.	Yes, unless action is real
IDEA-008 Containment Countdown	7	8	9	8	8	8	9	4	6	Real containment is unsafe; countdown may reward panic over control.	Risk meter, approval gate, simulated quarantine, containment dossier.	Simulated containment API.	Soft no
2. Top 3 recommendation

IDEA-006 Runbook Mutation Lab

IDEA-002 Alert Funeral Court

IDEA-005 Kill Switch Receipt

3. Top idea rationale

IDEA-006 wins this judge pass because it is the easiest to make real, safe, deterministic, auditable, and non-slide-replaceable inside a short hackathon.