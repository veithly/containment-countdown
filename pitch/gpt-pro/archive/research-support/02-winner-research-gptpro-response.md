Winner Research
Search Log
Source	Role	Evidence used
Current contest page	Contest facts	URL, deadline, theme, prize structure, required submission assets
Rules/brief	Hard constraints	Eligibility, judging, demo/video/repo/architecture requirements
Deep Research 10x10	Pattern mining	Comparable hackathons, mature product loops, clone traps, portable lessons
Hackathon source group	Comparable events	Devpost, GitLab, NASA, ETHGlobal, Google Cloud ADK examples
Product source group	Structural primitives	Splunk Observability, Enterprise Security, SOAR, AIOps, incident tooling, coding agents
Current Hackathon Brief
Rules/prizes

Splunk Agentic Ops Hackathon asks teams to build an AI-powered solution using Splunk AI to improve monitoring, security, or Splunk platform/developer workflows. Deadline is 2026-06-15 09:00 PDT / 12:00 EDT. Prizes include $7,000 Grand Prize, three $3,000 track prizes, and three $1,000 bonus prizes for Splunk MCP Server, Hosted Models, and Developer Tools. 

bounty_brief

Tracks
Track	Strategic read
Observability	Detect, correlate, diagnose, remediate, verify
Security	Risk investigation, enrichment, containment, audit
Platform & Developer Experience	Best primary target: make Splunk itself easier to build on, operate, or trust
Bonus overlays	MCP Server, Hosted Models, Developer Tools
Judging criteria

Stage One is pass/fail for theme fit and use of required APIs/SDKs. Stage Two is equally weighted across Technological Implementation, Design, Potential Impact, and Quality of the Idea. 

bounty_brief

Demo/submission requirements

Submission needs a project name, description, selected track, public demo video under 3 minutes, public open-source repo, and public app/testing URL where possible. Repo must include source, instructions, dependencies, configs/datasets, and root-level architecture_diagram.(md|pdf|png) showing Splunk interaction, AI/agent integration, and data flow. 

bounty_brief

Sponsor primitives

Use Splunk as a necessary system of record/control plane, not as a replaceable log bucket. Relevant primitives include Splunk Enterprise/Cloud, Splunk MCP Server, AI Assistant for SPL, AI Toolkit, Hosted Models, Foundation AI Security Model, Cisco Deep Time Series Model, Python SDK, Developer Tools, query transcripts, audit artifacts, and Splunk-native before/after evidence. 

bounty_brief

Comparable Events
Event	Platform	Why comparable	Winners/gallery URL	Portable lesson
GenAI Genesis 2026	Devpost	Agentic workflow gallery	https://genai-genesis-2026.devpost.com/project-gallery
	Show state change, not just reasoning
TreeHacks 2026	Devpost	Fast prototype judging under time pressure	https://treehacks-2026.devpost.com/project-gallery
	Compress trigger → outcome into one visible loop
Google Cloud Multi-Agent Challenge	Devpost	Official multi-agent winner evidence	https://googlecloudmultiagents.devpost.com/updates/35783-and-the-winners-are
	Give each agent measurable operational responsibility
GitLab AI Hackathon 2026	GitLab	Enterprise developer workflow winners	https://about.gitlab.com/blog/gitlab-ai-hackathon-2026-meet-the-winners/
	Durable artifacts beat chat responses
World’s Largest Hackathon by Bolt	Devpost + Bolt	Large-scale product polish comparison	https://worldslargesthackathon.devpost.com/
	One undeniable success moment matters
Code with Kiro Hackathon 2025	Devpost	AI coding/developer workflow contest	https://kiro.devpost.com/
	Agent should create repo-visible or system-visible change
MCP and A2A Hackathon AWS Edition 2025	Devpost	MCP/A2A orchestration relevance	https://mcp-and-a2a-hackathon.devpost.com/
	MCP wrapper is insufficient without native operational proof
UC Berkeley AI Hackathon 2025	Devpost	Visual AI prototype patterns	https://uc-berkeley-ai-hackathon-2025.devpost.com/
	Show chaos → diagnosis → state change → proof
NASA Space Apps 2025 Global Winners	NASA	Evidence-backed civic/scientific decisions	https://www.nasa.gov/learning-resources/stem-engagement-at-nasa/nasa-announces-2025-international-space-apps-challenge-global-winners/
	Telemetry should justify decisions, not decorate them
ETHGlobal Prague/Cannes 2025	ETHGlobal	Verifiable state-transition demos	https://ethglobal.com/showcase?events=prague
	Borrow proof-of-action pattern, but use Splunk audit artifacts
Winner Autopsies
1. Multi-agent operational workflow winners
Field	Notes
Event/project family	Google Cloud Multi-Agent Challenge ADK
Event date	2026
Recency class	Current-cycle evidence
Why evidence is usable	Official winner announcement, not only gallery evidence
Why judges could reward it	Specialized agents completed coordinated tasks with tool use, visible handoffs, external effects, and final artifacts
Portable pattern	Agent architecture only matters when each agent owns a measurable operational responsibility
What not to copy	Generic planner/executor/reviewer theater where all outputs remain text
2. Enterprise developer workflow winners
Field	Notes
Event/project family	GitLab AI Hackathon 2026
Event date	2026
Recency class	Current-cycle enterprise AI evidence
Why evidence is usable	Official winner announcement in a developer-tooling context
Why judges could reward it	Projects accelerated real software workflows and created persistent artifacts such as code, issues, merge requests, or audit trails
Portable pattern	Trigger from a real event, automate analysis, create durable artifact, preserve reviewability
What not to copy	Repository chatbot, explain-my-code demo, or coding assistant without operational consequence
3. Productized large-hackathon winners
Field	Notes
Event/project family	World’s Largest Hackathon by Bolt
Event date	2025
Recency class	Recent mass-market hackathon evidence
Why evidence is usable	Official competition page and recap evidence
Why judges could reward it	Complete products with fast onboarding, clear value, polished UX, and a dramatic success moment
Portable pattern	A single undeniable operational before/after moment is more memorable than a complex platform
What not to copy	Feature-heavy platform that needs long explanation before value appears
4. MCP/A2A orchestration family
Field	Notes
Event/project family	MCP and A2A Hackathon, AWS Edition
Event date	2025
Recency class	Recent protocol/tool orchestration evidence
Why evidence is usable	Directly relevant to MCP and agent-to-agent patterns, though winner names are not asserted
Why judges could reward it	Tool orchestration creates traceable outputs and external effects
Portable pattern	Make Splunk the operational memory and proof layer
What not to copy	Thin MCP wrapper around generic APIs with Splunk as an interchangeable source
Novelty Brief
New constraints or technologies now

Splunk MCP Server, Hosted Models, AI Assistant for SPL, AI Toolkit, Python SDK, token-based MCP auth, Foundation AI Security Model, and Cisco Deep Time Series Model create new ways to make agent actions grounded, queryable, and auditable. OAuth for MCP is not GA, so token-based auth is the practical path. 

bounty_brief

User behavior shifts

Judges and users are tired of chat-first AI. Current winning patterns favor delegated work, visible system changes, human approval gates, persistent artifacts, and short demos where a messy operational event becomes a verified outcome.

Sponsor/platform primitives newly possible

Splunk can serve as telemetry source, investigation memory, query engine, approval/audit log, anomaly surface, security risk context, incident timeline, and verification record. The strongest projects should make Splunk structurally necessary at multiple points in the loop.

Tired winner shapes to avoid

Avoid generic alert-summary chatbot, static dashboard, upload-logs-to-summary flow, plain SPL explainer, fake multi-agent orchestration, dashboard aggregator, and MCP wrapper with no Splunk-native action/proof.

Fresh demo surfaces available now

Incident timeline, remediation approval panel, SPL query transcript, before/after telemetry delta, execution log, generated architecture/runbook diff, risk entity dossier, notable-event proof bundle, hosted-model anomaly explanation, and judge-visible verification report.

Portable Patterns

Signal → context → decision → action → proof.

Human-in-the-loop approval before risky remediation.

Durable artifact after every agent action.

Before/after telemetry validation.

Splunk-native query transcript as evidence.

Agent handoffs tied to distinct operational responsibilities.

One compressed demo loop under 60 seconds.

Risk or impact prioritization before action.

Incident timeline generated from real telemetry.

Design around auditability, not just automation.

Clone Traps

Splunk is only a log source and could be replaced by any database.

AI summarizes alerts but never changes state.

Multi-agent branding hides one generic LLM call.

Static dashboard masquerades as agentic ops.

MCP integration is only a wrapper, not a workflow.

Hosted Models are name-dropped but not used for a visible decision.

Demo lacks deterministic policy, approval, transcript, or audit trail.

No architecture diagram showing Splunk interaction and data flow.

No public testing path for judges.

Repo lacks setup clarity, example data, or reproducible demo state.

Security action happens without containment rationale.

Observability action happens without before/after verification.

Inputs For GPT Pro Idea Tournament
Winner patterns to feed

State A → agent action → State B → proof artifact.

Alert flood compressed into one prioritized incident.

Risk entity investigated with supporting evidence.

Agent creates durable artifact: ticket, timeline, report, runbook diff, execution log.

Human approval gate before remediation.

Demo shows visible operational closure in under 3 minutes.

Splunk records both reasoning inputs and verification outputs.

Sponsor/domain primitives to feed

Splunk MCP Server.

Splunk AI Assistant for SPL.

Splunk AI Toolkit.

Splunk Hosted Models.

Foundation AI Security Model.

Cisco Deep Time Series Model.

Splunk Python SDK.

Splunk Enterprise/Cloud trial.

Developer Tools.

Architecture diagram requirement.

Query transcripts, audit trails, notable events, before/after telemetry.

Project shapes to forbid

Generic alert-summary chatbot.

Upload logs → LLM summary.

Static observability/security dashboard.

SPL explainer with no action.

Platform wrapper where Splunk is optional.

Multi-agent theater.

Detection library clone.

SOAR clone.

SIEM replacement.

Full incident-management suite.

Blockchain-style proof where Splunk audit artifacts are better.

Evidence gaps

Several 10x10 hackathon entries are gallery/showcase evidence only.

Some winner names are intentionally unverified and should not be asserted.

Comparable events support pattern mining more than exact winner prediction.

Public source set does not prove which Splunk bonus category will be easiest to win.

Final idea selection still needs feasibility scoring against available build time, sample data, team skills, and demo reliability.