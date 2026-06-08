import Link from "next/link";
import { ArrowRight, RefreshCcw, RadioTower } from "lucide-react";
import { MissionPanel } from "@/components/ui/mission-panel";
import { scenario } from "@/lib/containment";

const scenarios = [
  "Impossible Travel + MFA Fatigue",
  "Privileged App Touch",
  "Threshold Delay Outcome",
  "Verification Failure Drill",
];

export default function ReplayPage() {
  return (
    <main className="replay-route" data-visual-lane="security-mission-control-cockpit">
      <section className="route-heading">
        <h1>Replay lab</h1>
        <p>The same seed produces the same evidence order, confidence deltas, threshold crossing, execution log, and dossier output.</p>
        <div className="surface-onboarding inline" aria-label="Replay first-run examples">
          <span data-placeholder-example>Impossible travel seed</span>
          <span data-placeholder-example>Threshold delay seed</span>
          <Link href="/mission" data-next-step-cta>
            Start the mission
          </Link>
        </div>
      </section>
      <section className="replay-grid">
        <MissionPanel title="Replay seed">
          <RadioTower size={32} />
          <strong>{scenario.seed}</strong>
          <p>Scenario state is deterministic so the demo survives network instability and absent live credentials.</p>
        </MissionPanel>
        <MissionPanel title="Scenario picker">
          <ul className="compact-list">
            {scenarios.map((name) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>ready</span>
              </li>
            ))}
          </ul>
        </MissionPanel>
        <MissionPanel title="Start mission">
          <Link className="cockpit-button primary link-button" href="/mission">
            <RefreshCcw size={18} />
            Run replay
            <ArrowRight size={18} />
          </Link>
        </MissionPanel>
      </section>
    </main>
  );
}
