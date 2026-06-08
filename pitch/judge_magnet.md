Judge Magnet Brief
Evidence used
Source	Used for	Portable lesson
bounty_brief.md	Rules, rubric, submission requirements, prize strategy, disqualification risks	Splunk must be structurally necessary, not an interchangeable data source; proof artifacts matter more than summaries. 

bounty_brief


deep_research_10x10.md	Cross-hackathon winner patterns, mature product loops, clone traps	Winning demos show state change, operational action, and durable evidence within a compressed workflow. 

deep_research_10x10


winner_research.md	Judge psychology, sponsor priorities, novelty constraints, demo patterns	Signal → context → decision → action → proof is the dominant winning pattern; auditability beats agent theater. 

winner_research

First-pass survival
Required submission fields

Must include:

Project name

Description explaining functionality

Track selection (Observability, Security, or Platform & Developer Experience)

Public demo video URL (<3 minutes)

Public open-source repository URL

Public app/testing URL when possible 

bounty_brief

Must-open links

Judges must be able to open:

Demo video

Repository

Running app/demo environment (if provided)

All should work without special access requests. Testing access must remain available through judging. 

bounty_brief

Fresh-work / version-control requirement

Project must be:

Newly built during the hackathon period, or

Significantly updated during the period with explicit disclosure of what changed

Repository history should visibly support this claim. 

bounty_brief

AI/spec/tool attribution requirement

The demo and repo should clearly show:

Which Splunk AI capabilities are used

Where MCP Server is used

Where Hosted Models are used (if applicable)

Which agent decisions are AI-generated

Which actions are deterministic

Query transcripts and evidence paths

Do not make judges infer AI usage. Show it.

Partner/sponsor prize requirement

If pursuing bonus prizes:

Bonus	Required visible proof
Best Use of Splunk MCP Server	MCP visibly participates in the operational workflow
Best Use of Hosted Models	Hosted Model influences a visible decision or prioritization
Best Use of Developer Tools	Developer tooling is part of the demonstrated value loop

Avoid "checkbox integrations." Bonus technology must affect the outcome.

Disqualification risks

High-risk failures:

Generic alert-summary chatbot

Static dashboard demo

Upload logs → LLM summary

Splunk used as optional storage

Missing architecture diagram

Non-public repository

Broken demo environment

Missing setup instructions

AI action with no audit trail

Existing project presented as new work

Unlicensed assets in video

No English-accessible materials

Judge personas
Persona	What they care about first	What makes them stop watching	Evidence we show
Sponsor technical judge	Is Splunk structurally necessary?	Splunk could be swapped with a database in one afternoon	Architecture diagram, MCP usage, query transcripts, Splunk-generated evidence artifacts
Ops/security practitioner	Does this reduce real operational pain?	AI explanation with no action or verification	Incident workflow, approval gate, before/after telemetry proof
Product/design judge	Is the workflow intuitive and memorable?	Tool-centric UI requiring explanation	One-screen operational journey and visible outcome
Busy first-pass Devpost judge	Can I understand the value in 30 seconds?	Long architecture discussion before outcome	Immediate trigger → state change → proof artifact
Bonus-prize reviewer	Is the sponsor technology actually doing work?	Name-dropped MCP/Hosted Models	Visible decision or action dependent on sponsor technology

Patterns derived from comparable winners: operational responsibility, external effects, durable artifacts, and visible completion states consistently outperform conversational experiences.

Winner thesis

The eventual project must satisfy all of the following.

Personal or customer scar

The problem should originate from a painful operational reality:

Too many alerts

Slow incident response

Unclear ownership

Investigation fatigue

Expensive manual verification

Security triage overload

The scar must feel lived-in, not hypothetical.

Why the problem is worth attention

The project should eliminate a costly operational gap where:

humans spend time gathering context,

making repetitive decisions,

validating outcomes,

or documenting work.

What project must prove in one screen action

A user performs one action and immediately sees:

an operational state change plus proof that it happened.

Not an explanation.

Not a recommendation.

A verified outcome.

Why Splunk primitive is necessary

The project must rely on Splunk for at least two of:

telemetry source

investigation memory

incident context

MCP tool access

AI-generated SPL

Hosted Model decision support

audit trail

verification evidence

Removing Splunk should break the core workflow.

Why it can continue after hackathon

The workflow should naturally extend into:

enterprise operations

security workflows

developer operations

platform reliability

incident management

The project should look like the beginning of a product, not a demo script.

Prototype cut
Must-have features

Detection or trigger event

Agent-assisted decision with visible reasoning inputs

Operational action that changes system state

Verification artifact proving outcome

One miracle budget

Exactly one "wow" capability:

sophisticated prioritization,

anomaly reasoning,

risk evaluation,

or remediation orchestration.

Only one.

Cut features

Remove:

multi-agent theater

chat interfaces as primary UI

custom dashboards

workflow builders

settings systems

historical analytics

broad platform abstractions

secondary personas

Why cuts strengthen demo

Cuts maximize time spent on:

state change + proof

which is the strongest recurring pattern across comparable winners and mature operational products.

Attention ladder
Stage	What must happen
0–10s	Show operational pain already occurring
10–30s	Trigger agent workflow
30–60s	Show action execution and approval path
2–3 min	Reveal proof artifact, verification, audit trail, Splunk role
5 min / Q&A	Defend architecture, reliability, extensibility, sponsor integrations
Aha moment
Required pattern
Component	Requirement
User action	One click, approval, or trigger
Visible consequence	Operational state visibly changes
Proof artifact	Timeline, execution log, incident record, remediation record, query transcript, verification report
Why judge can retell it	"It detected X, performed Y, proved Z happened."

If the judge cannot retell the project in one sentence, the demo is too complex.

Rubric coverage
Judging area	Proof on screen
Technological Implementation	Architecture diagram, MCP usage, reproducible workflow, query transcripts
Design	Clear operator workflow, minimal clicks, understandable outcome
Potential Impact	Quantified operational bottleneck removed
Quality of Idea	Novel operational loop, not a chatbot or dashboard
Best Use of MCP Server	MCP invocation visibly contributes to action or evidence
Best Use of Hosted Models	Model influences prioritization, prediction, risk, or anomaly decision
Best Use of Developer Tools	Developer tooling is part of workflow acceleration or verification

All proof should be visible in the demo rather than described verbally.

Q&A bank
Question	One-sentence answer	Proof link/screen
Why does this need Splunk?	Splunk is the telemetry source, decision context, and verification layer.	Architecture diagram
What does the AI actually do?	AI performs a bounded operational decision using observable evidence.	Decision panel
How do you prevent hallucinations?	Decisions are grounded in telemetry and auditable query results.	Query transcript screen
What happens if AI is wrong?	Human approval gates risky actions.	Approval workflow
Why is this better than a dashboard?	It closes the loop and produces an operational outcome.	Before/after state screen
Why not use a chatbot?	Operators need action and proof, not conversation.	Main workflow
Where is MCP used?	MCP provides operational access that participates in the workflow.	Architecture + execution log
What artifact remains afterward?	A durable audit and verification record.	Proof artifact screen
How would this scale?	The workflow operates on telemetry-driven events rather than manual investigation.	Architecture diagram
How do judges verify it worked?	Verification is shown through before/after evidence and execution logs.	Verification report
What bonus prize are you targeting?	The architecture visibly demonstrates the associated sponsor technology.	Sponsor integration screen
What was built during the hackathon?	Repository history and architecture changes demonstrate fresh development.	Git history + repo
Anti-hype red flags
Ambiguity removed

Do not say:

"AI helps operators."

"Improves observability."

"Enhances investigations."

Instead show:

trigger

action

outcome

proof

Template/starter-kit distance

Clearly identify:

custom logic

custom workflow

original operational loop

Do not let judges assume the project is a wrapper around starter examples.

Missing-code / thin-repo risk

Repository should contain:

source code

setup instructions

architecture diagram

example data/configuration

reproducible workflow

Thin repos create credibility problems. 

bounty_brief

Over-indexed criterion

Avoid optimizing only for:

MCP usage

Hosted Models

multi-agent architecture

visual polish

A bonus category should not weaken the main judging rubric.

Reused-project risk

Provide visible evidence that:

meaningful functionality was created during the hackathon period,

updates are documented,

commit history supports the claim.

Additional sponsor-specific red flags

Generic chatbot

Alert explainer

Upload-summary workflow

Static dashboard

Splunk-optional architecture

Multi-agent theater

Action without verification

Verification without action

Hosted Models mentioned but not influential

MCP integrated but not operationally necessary

These patterns are repeatedly identified as weak or forbidden shapes for this competition.

Judge-Magnet Scorecard

Judge-Magnet Score: target >= 9/12 for the selected finalist.

| Dimension | Score | Evidence |
|---|---:|---|
| First-pass survival | 2/2 | Required links, public repo/video/app expectations, architecture diagram, freshness, and sponsor-prize proof are explicit. |
| Problem belief | 2/2 | The operational scar is alert fatigue, slow containment, and scattered security evidence. |
| Prototype cut | 2/2 | P0 scope is trigger, evidence, action, verification, and proof artifact; broad platform features are cut. |
| Aha/proof | 2/2 | A judge-influenced action creates a visible state change and a durable dossier. |
| Rubric coverage | 2/2 | Implementation, design, impact, idea quality, MCP, Hosted Models, and Developer Tools all map to screen proof. |
| After-hack credibility | 1.5/2 | The loop can extend into security operations with real Splunk data; demo uses a safe simulated containment endpoint first. |
| **Total** | **11.5/12** | Passes the >= 9/12 gate. |
