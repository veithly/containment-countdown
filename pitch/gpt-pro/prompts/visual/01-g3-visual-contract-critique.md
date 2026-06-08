# GPT Pro Prompt: G3 Visual Build Contract + First-Run Critique

You are the GPT Pro source of truth for Gate G3 of a HackathonHunter v3.2 project. Do not give generic design advice. Produce a concrete, buildable visual contract and critique for the selected concept below.

Important process constraint:
- The user requires GPT Pro-only strategic/design feedback. Do not assume a local taste review exists.
- The local agent may only preserve, reconcile, and implement your decisions.
- The concept is already locked by G1/G2 unless you find a hard blocker.

Hackathon and submission constraints:
- Hackathon: Splunk Agentic Ops Hackathon on Devpost.
- Tracks: Security, Observability, Platform.
- Submission must have a public OSS repository, OSI-approved license, root `architecture_diagram.(md|pdf|png)`, public demo video under 3 minutes, and English judge-facing materials.
- Live Splunk credentials are not currently available locally. The build can use seeded Splunk-compatible telemetry for deterministic replay, but must not claim live Splunk is configured.

Selected project:
- Name: Containment Countdown
- Hero line: "Contain risky identities in 60 seconds after evidence crosses threshold."
- Product spine: Signal -> Context -> Decision -> Action -> Proof
- Retellable sentence: "I changed the threshold, watched evidence accumulate, approved containment, and Splunk proved exactly why it happened."
- Core demo: a risky identity accumulates evidence; confidence rises; a countdown reaches threshold; the judge/operator approves or delays; the identity changes `ACTIVE -> CONTAINED`; a Containment Dossier is generated with SPL transcript, approval record, execution log, and verification result.
- One miracle: telemetry directly changes the containment countdown outcome.
- Avoid: chatbot, generic dashboard, alert summarizer, SOAR flowchart canvas, static Grafana-like board, unmodified shadcn/Tailwind SaaS cards, purple AI gradient landing page.

Existing visual direction from G2:
- Visual lane: security mission-control cockpit.
- Non-Tailwind visual signature: radial containment countdown, evidence ticker, dossier seal, proof timeline rail.
- Primary UI library: React Aria Components with custom Tailwind styling.
- Supporting libraries: Recharts, lucide-react, framer-motion.
- Hero composition: full-screen mission-control cockpit with central countdown, left risk identity, right evidence feed, bottom proof rail.
- Motion: restrained operational urgency; evidence feed ticks and countdown transitions must feel connected to state.

Routes and surfaces:
- `/` hero landing with a clear 5-second product signal and CTA into `/mission`.
- `/mission` Containment Console: risk identity, evidence stream, confidence meter, countdown clock, threshold controls, approval affordance.
- `/decision` Decision Chamber: evidence breakdown, SPL transcript, hosted-model narrative when available, threshold policy, approval action.
- `/dossier/[id]` Containment Dossier: timeline, evidence chain, approval record, execution log, verification results, export.
- `/architecture` Architecture Proof: Splunk/MCP/Hosted Model/data flow and system diagram.
- `/replay` Replay Lab: deterministic scenario picker and replay status.

Mobile / QR:
- Desktop is the live operator cockpit for the recorded demo.
- Mobile QR opens `/dossier/demo` as a read-only proof artifact.
- Mobile judge should inspect containment status, evidence chain, approval record, and verification result in <= 2 taps.

Mockup evidence:
- `docs/ui-mockups/01-hero-frame.png`: /mission hero, 0-10s hook, QA pass.
- `docs/ui-mockups/02-app-frame.png`: /mission app, 30-60s consequence, QA pass.
- `docs/ui-mockups/03-mobile-first-run.png`: /dossier/demo mobile QR proof, QA pass.

Please return:
1. A short G3 verdict: pass / pass-with-fixes / block.
2. One concrete design anchor/recipe for the UI. Keep it implementation-practical.
3. Four positioning answers:
   - narrative role
   - viewing distance
   - visual temperature
   - capacity check
4. A tightened non-Tailwind visual signature, including how each signature element maps to a component and state change.
5. A desktop composition for 1920x1200 and a mobile composition for 390x844.
6. A route/component map that includes the source markers:
   - `data-visual-lane="security-mission-control-cockpit"`
   - `data-hero-composition="countdown-command-cockpit"`
7. Brand minimum: describe a simple bespoke mark suitable for SVG implementation without requiring image generation.
8. Motion vocabulary and exact implementation rules.
9. First-run plan for a cold judge in 5s / 30s / 60s / 3min.
10. Five-dimension critique of the proposed v0 anchor:
    - philosophy alignment /10
    - hierarchy /10
    - craft /10
    - functionality /10
    - originality /10
    - overall /10
    Include concrete fixes if any dimension is under 8.
11. Implementation checks that should be written into `pitch/visual-build-contract.md` and later verified in code/tests.

Keep the answer specific enough that a local agent can create `pitch/visual-build-contract.md` directly from it and then build the app.
