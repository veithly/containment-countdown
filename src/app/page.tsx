import Link from "next/link";
import { ArrowRight, FileCheck2, ShieldCheck } from "lucide-react";
import { C60Mark } from "@/components/brand/c60-mark";
import { MissionCockpit } from "@/components/mission/mission-cockpit";
import { HERO_COMPOSITION, VISUAL_LANE } from "@/lib/containment";

export default function HomePage() {
  return (
    <main className="home-route" data-visual-lane={VISUAL_LANE} data-hero-composition={HERO_COMPOSITION}>
      <section className="hero-band">
        <div className="hero-copy">
          <div className="hero-kicker">
            <C60Mark className="hero-mark" />
            {"Signal -> Context -> Decision -> Action -> Proof"}
          </div>
          <h1 data-hero-text>Approve containment for risky identities in 60 seconds after evidence crosses threshold.</h1>
          <p>
            Replay seeded Splunk-compatible telemetry, approve containment, and generate an audit-ready dossier that proves why the action happened.
          </p>
          <div className="hero-actions">
            <Link className="cockpit-button primary link-button min-h-11 min-w-11" href="/mission" data-cta-primary>
              <ShieldCheck size={18} />
              Open mission
              <ArrowRight size={18} />
            </Link>
            <Link className="cockpit-button secondary link-button min-h-11 min-w-11" href="/dossier/demo">
              <FileCheck2 size={18} />
              View dossier
            </Link>
          </div>
        </div>
      </section>
      <MissionCockpit compact />
    </main>
  );
}
