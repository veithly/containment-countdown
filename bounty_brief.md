# Bounty Brief: Splunk Agentic Ops Hackathon

> Distilled from https://splunk.devpost.com/ and https://splunk.devpost.com/rules on 2026-06-08 Asia/Shanghai. Single source of truth for all subsequent phases.

## URL
https://splunk.devpost.com/

## Deadline
2026-06-15T09:00:00-07:00 (PDT) / 2026-06-15T12:00:00-04:00 (EDT)

## Theme / track
Reimagine the future of agentic operations using Splunk AI. Build an AI-powered solution that enhances how teams monitor systems, secure environments, or build on the Splunk platform using Splunk AI capabilities.

Primary track strategy: Platform & Developer Experience, with a strong Observability/Security crossover. Bonus strategy: Best Use of Splunk MCP Server, Best Use of Splunk Hosted Models, and Best Use of Splunk Developer Tools where feasible.

## Prize structure
- **Grand Prize:** $7,000 cash + Splunk .conf26 pass for each team member.
- **Best of Observability:** $3,000 cash + Splunk .conf26 pass for each team member.
- **Best of Security:** $3,000 cash + Splunk .conf26 pass for each team member.
- **Best of Platform & Developer Experience:** $3,000 cash + Splunk .conf26 pass for each team member.
- **Best Use of Splunk MCP Server:** $1,000 cash.
- **Best Use of Splunk Hosted Models:** $1,000 cash.
- **Best Use of Splunk Developer Tools:** $1,000 cash.

## Rubric
Stage One is pass/fail: the project must reasonably fit the theme and reasonably apply the required APIs/SDKs featured in the hackathon.

Stage Two criteria are equally weighted:
- **Technological Implementation:** Does the project demonstrate quality software development?
- **Design:** Is the user experience and design well thought out?
- **Potential Impact:** How big of an impact could the project have?
- **Quality of the Idea:** How creative and unique is the project?

## Required stack / API
- Splunk Enterprise trial or Splunk Cloud plus a Developer License.
- One or more Splunk AI capabilities encouraged:
  - AI for Splunk Apps using the Python SDK.
  - Splunk MCP Server, token-based auth recommended because OAuth is currently Controlled Availability.
  - Splunk AI Assistant for SPL.
  - Splunk AI Toolkit.
  - Splunk Hosted Models, including Foundation AI Security Model and Cisco Deep Time Series Model.
- Public code repository with open-source license.
- Root-level `architecture_diagram.(md|pdf|png)` showing Splunk interaction, AI/agent integration, and data flow between services/APIs/components.

## Submission form fields
- Project name.
- Text description explaining features and functionality.
- Track: Observability, Security, or Platform & Developer Experience.
- Demo video URL, public YouTube/Vimeo/Youku, under 3 minutes.
- Public open-source repo URL.
- Public app/testing URL where possible.

## Submission requirements
- Project must run consistently on the intended platform and function as shown in video/text.
- Project must be newly created or significantly updated during the submission period; explain the update if based on an existing project.
- Third-party integrations must be authorized and license-compliant.
- Video must show the project working, demonstrate AI usage, explain the problem, highlight value, and avoid unlicensed trademarks/music/copyright.
- Repo must include all source/assets/instructions, clear README setup/run docs, dependencies, and example configs/datasets.
- Testing access must be free and unrestricted for judges through the end of judging.
- Materials must be English or include English translation.

## Notes From Resources
- The Resources page explicitly highlights Splunk MCP Server as a way to connect AI agents securely to Splunk data using the Model Context Protocol.
- MCP OAuth support is not GA; token-based authentication is the practical route.
- Splunk AI Assistant can generate and edit SPL queries.
- Splunk Hosted Models include security and time-series model families useful for anomaly/security narratives.
- Support channel: Splunk Community Slack `#splunk-ai-hackathon`.

## Forbidden patterns
- Generic alert-summary chatbot with no state change.
- Static observability/security dashboard that can be replaced by screenshots.
- Upload logs -> LLM summary with no proof artifact.
- Splunk mentioned as an interchangeable data source.
- AI decision with no deterministic policy, query transcript, or human approval.
