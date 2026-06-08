# Visual Build Contract: Containment Countdown

## Source inputs
- PRD: `pitch/project_prd.md` sections 9-12.
- UIUX plan: `pitch/uiux_interaction_plan.md`.
- Hero: `pitch/hero.md`.
- Mockup trace: `docs/ui-mockups/mockup-manifest.md`.
- Mockup source: `docs/ui-mockups/01-hero-frame.png`, `docs/ui-mockups/02-app-frame.png`, `docs/ui-mockups/03-mobile-first-run.png`.
- GPT Pro visual pass: `pitch/gpt-pro/responses/visual/01-g3-visual-contract-critique-response.md`.
- gpt-taste / impeccable record: user required GPT Pro-only strategic design feedback, so local gpt-taste and impeccable critique were replaced by the GPT Pro G3 visual pass. Local work may implement the output but not substitute a local taste verdict.

## G3 verdict
- GPT Pro verdict: pass-with-fixes.
- Hard blocker: none.
- Required fix: prevent "security mission-control cockpit" from collapsing into a generic dark dashboard. The containment instrument must be the visual source of truth.

## Visual lane
- Visual style lane: security mission-control cockpit.
- Lane slug: `security-mission-control-cockpit`.
- Design anchor / recipe: Containment Command Cockpit.
- Narrative role: operator proof loop; every surface follows `Signal -> Context -> Decision -> Action -> Proof`.
- Viewing distance: five-foot demo clarity for recorded demo and judge walkthroughs.
- Visual temperature: cold graphite cockpit base, cyan evidence collection, amber threshold tension, red pre-containment risk only, green proof only after verification.
- Capacity check: one identity, one active countdown, one threshold policy, one evidence stream, one approval moment, one dossier, one architecture proof.
- Hero composition: countdown-command-cockpit.
- Visual differentiation note: the first viewport must look like a live containment operation, not a generic SIEM, static observability board, or SaaS card grid.
- Forbidden lookalikes: generic SIEM dashboard, ChatGPT sidebar clone, static Grafana board, unmodified shadcn admin template, SOAR flowchart canvas, purple AI gradient landing page.

## Non-Tailwind visual signature
- Non-Tailwind visual signature: radial containment countdown, evidence ticker, C60 dossier seal, proof timeline rail.

| Signature element | Component | State change it must show | Required behavior |
|---|---|---|---|
| Radial containment countdown | `ContainmentDial` | `ACTIVE -> THRESHOLD_CROSSED -> APPROVAL_PENDING -> CONTAINED` | Confidence arc grows when evidence arrives; threshold notch moves when operator changes policy; center label changes with state. |
| Evidence ticker | `EvidenceTicker` | `new_evidence -> confidence_delta -> countdown_delta` | Each evidence item shows a confidence delta and pulses the same dial state update. |
| C60 dossier seal | `DossierSeal` | `UNSEALED -> SEALED_VERIFIED` | Appears after execution and verification; includes dossier id, identity, final status, and verification result. |
| Proof timeline rail | `ProofRail` | `Signal -> Context -> Decision -> Action -> Proof` | Bottom rail advances one stage at a time; completed stages receive stamped marks. |

State contract:

```ts
type ContainmentState =
  | "collecting"
  | "threshold_crossed"
  | "approval_pending"
  | "approved"
  | "executing"
  | "contained"
  | "delayed"
  | "verification_failed";
```

The evidence ticker and countdown dial cannot be independent animations. The same state update that appends evidence must update confidence, countdown, threshold-crossing status, and proof rail.

## Generated cutout assets
- Generated image/cutout assets: not used for app UI in G3; app visuals are SVG/CSS components so the cockpit remains deterministic and lightweight.
- Raw prompts: `public/art/briefs/` if later slide or hero cutouts are added.
- Raw generations: `public/art/raw/` if later slide or hero cutouts are added.
- Cutout command: `node /Users/rick/Documents/MySkill/hackathonhunter-skill/scripts/cutout_assets.mjs public/art/raw --out public/art/cutouts --brief-dir public/art/briefs --usage "app hero and product shell" --auto-key --trim`.
- Cutout manifest: `public/art/cutouts/cutout-manifest.json`.
- UI usage map: none for G3 app UI; future deck cutouts may support pitch/video foregrounds.

## Libraries
- Primary UI library: React Aria Components with custom Tailwind styling.
- Supporting UI library: Recharts, lucide-react, framer-motion.
- Official docs checked:
  - Next.js: https://nextjs.org/docs
  - Tailwind CSS: https://tailwindcss.com/docs
  - React Aria Components: https://react-spectrum.adobe.com/react-aria/components.html
  - Recharts: https://recharts.org/en-US
  - lucide-react: https://lucide.dev/guide/packages/lucide-react
  - Motion / Framer Motion: https://motion.dev/docs/react
- Install commands:
  - `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"`
  - `npm install react-aria-components recharts lucide-react framer-motion clsx`
  - `npm install -D @playwright/test`

## Route and component map
| Route | Mockup source | Hero/user-case beat | Components | Source marker |
|---|---|---|---|---|
| `/` | `docs/ui-mockups/01-hero-frame.png` | 5-second product signal and CTA into mission | `HeroMissionPreview`, `ContainmentDialPreview`, `EvidenceTickerPreview`, `ProofRailMini` | `data-visual-lane="security-mission-control-cockpit" data-hero-composition="countdown-command-cockpit"` |
| `/mission` | `docs/ui-mockups/02-app-frame.png` | HERO PATH: evidence accumulates and threshold is crossed | `MissionHeader`, `RiskIdentityPanel`, `ThresholdPolicyControl`, `ContainmentDial`, `EvidenceTicker`, `ApprovalControl`, `ProofRail` | `data-visual-lane="security-mission-control-cockpit" data-hero-composition="countdown-command-cockpit"` |
| `/decision` | `docs/ui-mockups/02-app-frame.png` | review evidence and approve/delay containment | `DecisionChamber`, `SPLTranscript`, `ThresholdPolicySummary`, `ApprovalPanel`, `ExecutionLogPreview` | `data-visual-lane="security-mission-control-cockpit"` |
| `/dossier/[id]` | `docs/ui-mockups/03-mobile-first-run.png` | Security Manager Review: durable proof artifact | `DossierHeader`, `DossierSeal`, `EvidenceChain`, `ApprovalRecord`, `ExecutionLog`, `VerificationResult`, `ExportDossierButton` | `data-visual-lane="security-mission-control-cockpit"` |
| `/architecture` | PRD section 12 | show Splunk-compatible replay, MCP/model boundary, action executor, dossier store | `SystemFlowDiagram`, `MCPBoundaryNode`, `ArchitectureAssumptionsPanel` | `data-visual-lane="security-mission-control-cockpit"` |
| `/replay` | PRD section 10 | deterministic replay scenarios | `ReplayLab`, `ScenarioPicker`, `ReplaySeedBadge`, `ReplayStatusTimeline`, `StartMissionButton` | `data-visual-lane="security-mission-control-cockpit"` |

## Desktop and mobile compositions
- Desktop 1920x1200: header 72px; main three-column cockpit with 424px risk identity panel, 896px central countdown command panel, 424px evidence feed, and 216px bottom proof rail.
- Desktop parity plan: desktop is the full operator cockpit for countdown control, threshold changes, approval, execution, verification, and dossier creation.
- Mobile 390x844: `/dossier/demo` read-only proof composition, not a shrunken cockpit. Sticky status header, visible C60 dossier seal, proof jump bar, stacked proof cards.
- QR mobile access plan: QR opens `/dossier/demo` as a read-only proof artifact.
- Mobile primary flow: status and verification summary visible without scrolling; Evidence, Approval, Execution, Verify sections reachable in one tap; expanded transcript/log reachable in a second tap.
- Touch-first action path: four proof jump buttons with 44px minimum touch targets and safe-area bottom padding for export.

## Brand minimum
- Mark name: C60 Seal.
- Logo source: bespoke SVG based on GPT Pro G3 pass; later brand pack may be refined, but no generic shield icon can be the primary mark.
- Shape: broken containment circle, inner shield notch, three evidence ticks, proof dot.
- Required files for G3/G6: `public/brand/logomark.svg`, `public/brand/wordmark.svg`, `public/brand/logo-mono.svg`, `public/brand/favicon.svg`, `public/brand/og.png`, plus `src/app/icon.svg` and `src/app/apple-icon.png`.
- Color count: <= 4 brand colors, with graphite neutral, cyan evidence, amber threshold, green proof.

## Motion vocabulary
- Vocabulary: restrained operational urgency.
- Evidence arrival: 180ms enter + 220ms settle; opacity/translate only; confidence delta flashes once.
- Confidence arc: 420ms SVG stroke-dashoffset, `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Threshold crossing: threshold notch flashes amber no more than twice; center label changes to `THRESHOLD CROSSED`.
- Approval: button compresses to 0.98 scale for 90ms; approval stamp appears; identity moves to `CONTAINMENT PENDING`.
- Contained state: 700ms proof sweep on dossier seal; no infinite glow after completion.
- Reduced motion: instant state changes, color/status changes retained, no auto-scrolling evidence ticker, no pulsing threshold notch.

## First-run plan
- 5 seconds: show hero line, ACTIVE identity, central countdown, evidence feed, and proof rail. One evidence item ticks in and changes the dial.
- 30 seconds: operator changes threshold, evidence accumulates, confidence crosses threshold, approval unlocks.
- 60 seconds: operator approves containment, identity becomes `CONTAINMENT PENDING`, verification passes, identity becomes `CONTAINED`, dossier toast appears.
- 3 minutes: show decision evidence and SPL transcript, execution log, dossier proof, mobile QR proof in two taps, architecture and repo evidence.

## V0 anchor and critique
- V0 anchor artefact: `/` hero plus `/mission` cockpit shell.
- GPT Pro five-dimension critique:
  - Philosophy alignment: 9/10.
  - Hierarchy: 8.5/10.
  - Craft: 7.5/10.
  - Functionality: 8.5/10.
  - Originality: 7.8/10.
  - Overall score: 8.2/10.
- Fixes applied before full build:
  - Replace rounded card grid with clipped mission panels.
  - Build countdown as a custom SVG instrument, not a chart widget.
  - Add threshold notch, confidence arc, countdown numeral, and policy label inside `ContainmentDial`.
  - Use bespoke C60 Seal for brand/dossier, not a stock shield.
  - Carry the proof rail across `/mission`, `/decision`, and `/dossier/[id]`.
  - Label crossing evidence as "This event changed the outcome."

## Implementation checks
- Top product shell has `data-visual-lane="security-mission-control-cockpit"`.
- Top hero/app surface has `data-hero-composition="countdown-command-cockpit"`.
- `/`, `/mission`, `/decision`, `/dossier/demo`, `/architecture`, and `/replay` render without Splunk credentials.
- No route claims live Splunk is configured unless `SPLUNK_HOST`, `SPLUNK_TOKEN`, and `SPLUNK_INDEX` are provided.
- Allowed local phrasing: seeded Splunk-compatible telemetry, deterministic replay, SPL transcript, demo replay.
- Default starter copy/assets are deleted.
- Brand pack appears in nav, favicon, OG card, deck corner, and demo lower-third.
- First five seconds of `/mission` show `ContainmentDial`, `EvidenceTicker`, `ProofRail`, `RiskIdentityPanel`, and C60 mark or dossier seal preview.
- Threshold changes move the threshold notch and change crossing behavior.
- Evidence arrival updates evidence list, confidence, countdown, and proof rail in one state transition.
- Approval creates a durable approval record visible in the dossier.
- Verification is separate from execution; identity becomes `CONTAINED` only after verification passes.
- `/dossier/demo` contains containment status, identity, evidence chain, threshold policy, SPL transcript, approval record, execution log, verification result, and export affordance.
- Mobile 390x844: status chip and verification summary visible without scrolling; proof jump bar visible without scrolling.
- Accessibility: approval/delay/threshold controls are keyboard accessible; state changes use `aria-live="polite"`; critical state labels are text, not color-only.
- Determinism: same replay seed produces same evidence order, confidence deltas, threshold crossing, approval record, execution log, verification result, and demo dossier id.
- `node /Users/rick/Documents/MySkill/hackathonhunter-skill/scripts/audit_project.mjs /Users/rick/Documents/Project/Hackathon/Splunk --phase ui-libs` must pass before G4 realness work is considered complete.
