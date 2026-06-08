Verdict

PASS WITH FIXES.

This is not blocked. The core story is coherent and judge-testable: the README quote, live app hero, and submission tagline all carry the same “approve containment for risky identities in 60 seconds after evidence crosses threshold” claim. The live app also exposes the product spine, “Signal -> Context -> Decision -> Action -> Proof,” and clearly labels the telemetry as seeded/Splunk-compatible. 
GitHub
 
Containment Countdown

The main competitiveness risk is not polish. It is that the package is honest about having no live Splunk credentials, but the hackathon is explicitly framed around AI-powered solutions using Splunk capabilities and Splunk data. The Security track wants projects that detect threats faster, investigate incidents, and automate security workflows using AI and Splunk data. 
Splunk Agentic Ops Hackathon
 Your submission can still pass, but it needs very careful wording so judges see this as a credential-ready Splunk workflow, not a fake live-Splunk demo.

Top risks/fixes in priority order
1. Add the pitch deck PDF to the top README quick links.

Your provided package says the README top quick links include the pitch deck PDF, but the public README quick links I could read show live demo, demo video, architecture, deployment, and root diagram — not the deck PDF. 
GitHub

Fix before Devpost: add Pitch deck PDF directly beside Demo video in the README top links and in the Devpost “Try it out / Links” area. This matters because a first-pass judge may never browse into /pitch.

Use this exact ordering:

Live demo · Demo video · Pitch deck PDF · Architecture · Deployment · Root diagram

2. Tighten the Splunk boundary language everywhere, especially architecture.

The live architecture page says, “Splunk is the evidence memory, decision context, and verification source,” then qualifies that the build uses deterministic replay until live credentials are provided. 
Containment Countdown
 That is close, but the first sentence is still too strong for the public deployment.

Replace with:

Seeded Splunk-compatible telemetry is the public evidence model. When SPLUNK_HOST, SPLUNK_TOKEN, and SPLUNK_INDEX are configured, the same SPL/REST boundary can use live Splunk as the evidence and verification source.

This is supported by the code path: querySplunkEvidence() falls back to seeded Splunk-compatible telemetry when host/token are absent, and uses the Splunk REST export endpoint when configured. 
GitHub

3. Remove or qualify “MCP” unless there is a real MCP integration.

The root diagram says “SPL transcript / MCP query boundary,” and the README says “MCP / SPL query boundary.” 
GitHub
 
GitHub
 The hackathon resources specifically list Splunk MCP Server as a Splunk AI capability, so judges may treat “MCP” as a concrete integration claim. 
Splunk Agentic Ops Hackathon

Fix before Devpost:
Use “SPL/REST query boundary” unless the repo actually implements or configures Splunk MCP Server. If you want to preserve future readiness, say:

SPL/REST query boundary; MCP-ready handoff when Splunk MCP Server credentials are configured.

Do not let “MCP” look like a live implemented feature unless it is.

4. Make replay verification impossible to misread as live Splunk verification.

The dossier is strong: it shows CONTAINED, VERIFIED, evidence chain, approval record, execution log, and verified_by=spl_replay. 
Containment Countdown
 But a scanning judge may only see “Verification result” and the SPL-like query.

Fix before Devpost: change the heading to:

Replay verification result

And add one line under it:

Verified against deterministic Splunk-compatible replay, not a live Splunk index.

Keep verified_by=spl_replay; it is good evidence hygiene.

5. Reframe the AI claim as “reasoning note + human-gated action,” not autonomous containment.

The current AI boundary is mostly safe. The code creates an OpenAI-compatible client only from server-side environment variables and the system prompt explicitly says not to claim live Splunk connectivity. 
GitHub

Fix before Devpost: add this sentence to the Devpost description or slide 5:

Agentic scope: the reasoning route produces a SOC decision note and the workflow prepares containment, but the state change remains human-approved.

This helps with the hackathon theme while avoiding overclaiming. Do not say the AI autonomously contains the identity.

6. Keep the Cloudflare storage claim, but avoid “production security action” ambiguity.

The D1/KV/R2 proof-store claim is credible: the storage code writes evidence, approvals, containment actions, verification runs, and dossiers to D1/KV/R2 when Cloudflare bindings exist, with local-memory fallback otherwise. 
GitHub
 
GitHub

Fix before Devpost: use:

Live Cloudflare proof storage; replay-mode containment only.

Avoid:

Production containment
Production IAM action
Real enforcement
Live security remediation

Same-story check

Pass. README first line, slide 1, submission tagline, and live hero are aligned around the same claim: fast human-approved containment after evidence crosses threshold. The live app also repeats the spine: Signal -> Context -> Decision -> Action -> Proof. 
GitHub
 
Containment Countdown

The narration/video facts you provided also match the package: threshold crosses, operator approves, dossier proves, architecture names the live-Splunk boundary. I could not independently verify YouTube playback through the browsing tool because YouTube fetching was throttled, so manually confirm the video opens in an incognito browser before submission. 
無効なURL

Slides 1, 3, and 5 judge-readiness

Slide 1: Strong. The hero is clear, specific, and action-oriented. “60s visible evidence window,” “1 click human approval gate,” and “D1/KV/R2 stored proof chain” are concrete enough for a first-pass judge.

Slide 3: Good, but make the replay boundary visible on the slide itself. The flow “threshold crossed -> approval -> contained -> verified” is compelling. Add a small badge: Seeded Splunk-compatible replay; no live Splunk credentials in public demo. Do not rely on narration alone.

Slide 5: Strongest proof slide. The endpoint table and plain limitation are exactly what a skeptical technical judge needs. The only fix is to make sure each endpoint proof is visible in the repo or app, not just in the slide. The Devpost checklist asks for public repo, demo video, architecture diagram, and project feature text, so slide 5 should point judges directly to those proof surfaces. 
Splunk Agentic Ops Hackathon

What already works

The package has a clean product spine and a memorable one-line promise. The live app renders the mission flow, evidence confidence, threshold crossing, approval control, and dossier path. 
Containment Countdown
 
Containment Countdown

The boundary language is mostly honest: README and submission copy say the public deployment uses seeded Splunk-compatible telemetry because live Splunk credentials are not configured, while Cloudflare storage and the OpenAI-compatible reasoning route are live integrations. 
GitHub
 
GitHub

The Security track fit is credible: risky identity containment, investigation context, approval control, and verification evidence map well to the track language around threat detection, investigation, and security workflow automation. 
Splunk Agentic Ops Hackathon

The video length is safe against the public Devpost update requirement of “under 3 minutes,” based on your stated 61.6-second video fact. 
Splunk Agentic Ops Hackathon

Final submission checklist

Before Devpost submission:

README top quick links include Pitch deck PDF.

Devpost tagline is exactly: Approve containment for risky identities in 60 seconds after evidence crosses threshold.

Devpost description includes the boundary in the first visible paragraph: seeded Splunk-compatible telemetry; no live Splunk credentials in public demo; live Cloudflare proof storage; server-side OpenAI-compatible reasoning note; no real IAM/firewall change.

Architecture page and root diagram say SPL/REST query boundary, not unqualified MCP, unless MCP is truly implemented.

Dossier page says Replay verification result, not just “Verification result.”

Slide 3 visibly states the live-Splunk boundary.

Slide 5 keeps /api/dossier/build, /api/containment/approve, and /api/spl/generate, but labels the AI as a SOC reasoning note and the action as replay-mode containment.

Incognito test: live app opens, /mission works, threshold 70 can be selected, approve works, /dossier/demo opens, export works, repo is public, deck PDF opens, YouTube opens.

Confirm no claim says live Splunk is connected unless SPLUNK_HOST, SPLUNK_TOKEN, and SPLUNK_INDEX are actually configured.

Submit before the Devpost deadline: June 15, 2026 at 9:00 AM PDT. That is June 16, 2026 at 1:00 AM JST. 
Splunk Agentic Ops Hackathon