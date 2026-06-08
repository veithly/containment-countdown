Verdict: pass-with-fixes

This package is eligible-looking and mostly honest, but I would not call it fully prize-ready until the Splunk/MCP wording is tightened. The main judge-facing risk is not the seeded replay itself; it is any phrasing that lets a judge infer live Splunk or actual Splunk MCP Server when the public deployment is really using seeded SPL-compatible telemetry.

1. Hero/story in under 30 seconds: yes

The story is understandable quickly. The live app puts the spine directly above the fold: “Signal -> Context -> Decision -> Action -> Proof,” followed by the hero claim, “Approve containment for risky identities in 60 seconds after evidence crosses threshold,” and a plain-language explanation that the user replays seeded Splunk-compatible telemetry, approves containment, and generates an audit dossier. 
Containment Countdown

The strongest judge-facing part is that the mission screen is concrete: one risky identity, threshold crossed, confidence score, evidence ticker, SPL-looking transcript, approval button, and proof state. That makes the demo legible as a security workflow rather than a generic AI dashboard. 
Containment Countdown

The only story risk: “agentic ops” may not be obvious unless the Devpost text explicitly says: evidence crosses threshold → AI/context note helps decision → human approves → containment action is executed in replay → dossier verifies it. Do not make judges infer the AI/data flow from screenshots.

2. Formal video/repo/root diagram requirements: likely satisfied

Devpost requires a text description, demo video under 3 minutes on a public platform, public open-source repo with license/setup/dependencies, and a root architecture diagram showing Splunk interaction, AI/model integration, and data flow. 
Splunk Agentic Ops Hackathon

The repo is publicly visible on GitHub, includes an MIT license, and has README links to the live demo, YouTube demo video, architecture docs, deployment docs, and the root diagram. 
GitHub
 The MIT license file is present. 
GitHub

The root architecture_diagram.md is present and contains the essential flow: risky identity telemetry → seeded Splunk-compatible replay → SPL/MCP query boundary → threshold policy → human approval → containment executor → verification → dossier, plus Cloudflare D1/KV/R2 and OpenAI-compatible reasoning API. It also states that the public build uses deterministic replay and does not claim live Splunk credentials. 
GitHub

For the video, I would treat it as passing assuming your G6 audit remains true: 61.6 seconds is comfortably under 3 minutes, YouTube is an accepted public platform, and your audit says oEmbed/playability/privacy checks passed. I could verify that the repo and submission file point to the YouTube URL, but I could not independently confirm playback in this environment because YouTube/oEmbed fetches were throttled. 
GitHub
+1

3. Splunk boundary honesty: mostly honest, but needs stronger wording

The package is already doing the right thing in several places. The README says the deployment uses seeded Splunk-compatible telemetry because live Splunk credentials are not configured, while Cloudflare D1/KV/R2 writes and the OpenAI-compatible reasoning route are real production integrations. 
GitHub
 The architecture doc also says the public build uses seeded telemetry, does not claim live Splunk connectivity, and only uses the optional Splunk REST path when SPLUNK_HOST, SPLUNK_TOKEN, and SPLUNK_INDEX are configured. 
GitHub

The live app also discloses this boundary: the global policy strip says “Seeded Splunk-compatible telemetry,” the mission page labels the evidence ticker as “Seeded SPL-compatible replay,” and the architecture page says live Splunk credentials are not configured in this build. 
Containment Countdown
+1

The risky phrasing is on the live architecture page: “Splunk is the evidence memory, decision context, and verification source. This build uses deterministic replay until live credentials are provided.” A strict judge could read the first sentence as a current-state claim before noticing the second sentence. 
Containment Countdown
 Change that to: “In live mode, Splunk is the evidence memory, decision context, and verification source. In this public demo, seeded SPL-compatible replay stands in for Splunk because live credentials are not configured.”

Also be careful with “MCP boundary.” The repo/code appears to expose a local /api/mcp/query route that calls the Splunk evidence adapter, while the docs describe an optional Splunk REST path. 
GitHub
+1
 Unless this is genuinely using Splunk MCP Server, call it “SPL query boundary” or “MCP-shaped query boundary.” Do not compete for “Best Use of Splunk MCP Server” unless the actual Splunk MCP Server is integrated.

Top 3 fixes before final Devpost submission

Make the Splunk boundary impossible to misunderstand.
Put this exact sentence near the top of Devpost, README, and video description:
“The public demo uses seeded SPL-compatible telemetry; live Splunk credentials are not configured. The repo includes an optional Splunk REST path for live mode, while Cloudflare D1/KV/R2 writes and the OpenAI-compatible reasoning route are live production integrations.”
This matches the current technical truth and avoids overclaiming. 
GitHub
+1

Remove or qualify “MCP” unless it is real Splunk MCP Server.
Rename judge-facing labels from “MCP / SPL query boundary” to “SPL query boundary / optional live Splunk REST adapter.” The current root diagram and README use “MCP” language, which could invite scrutiny if judges look for actual Splunk MCP Server usage. 
GitHub
+1

Clean up reproducibility polish in the repo.
The README quick start includes cp .env.local .env.local.example, which is backwards for a fresh clone, and the smoke commands include absolute local paths under /Users/rick/.... 
GitHub
 Replace with a portable block such as:

Bash
npm install
npm run dev
# optional live mode: copy .env.example to .env.local and add SPLUNK_* / OPENAI_* secrets

Move visual QA internals to .hunter or docs marked “maintainer-only.” Judges reward projects that are easy to clone and run.

Final confidence

Verdict: pass-with-fixes. Confidence: 0.84.

Formal compliance looks strong: public repo, license, root diagram, live URL, Devpost-aligned video link, clear security workflow. Prize-readiness depends on the wording cleanup. With the three fixes above, the project reads as an honest, well-packaged seeded Splunk-compatible demo with real persistence and AI reasoning. Without them, the main risk is a judge perceiving “Splunk integration” or “MCP” as overstated.