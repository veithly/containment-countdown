import Link from "next/link";
import { ArrowRight, Database, FileCheck2, ShieldCheck } from "lucide-react";
import { MissionPanel } from "@/components/ui/mission-panel";
import { VISUAL_LANE } from "@/lib/containment";

const points = [
  {
    icon: Database,
    title: "Splunk-compatible evidence",
    text: "The public demo runs deterministic replay data; live Splunk REST credentials can replace it without changing the workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Human-gated action",
    text: "Confidence can cross a threshold, but containment still waits for an operator approval record.",
  },
  {
    icon: FileCheck2,
    title: "Proof artifact",
    text: "Every approved run creates a dossier path with evidence, decision, action, and verification.",
  },
];

export default function AboutPage() {
  return (
    <main className="architecture-route" data-visual-lane={VISUAL_LANE}>
      <section className="route-heading">
        <p>Product brief</p>
        <h1>Containment Countdown turns identity risk into a provable action trail.</h1>
        <p>Signal, context, decision, action, and proof stay visible in one short judge path.</p>
      </section>
      <section className="architecture-flow">
        {points.map((point) => (
          <MissionPanel key={point.title} title={point.title}>
            <point.icon size={28} />
            <p>{point.text}</p>
          </MissionPanel>
        ))}
      </section>
      <Link href="/mission" className="cockpit-button primary link-button min-h-11 min-w-11" data-next-step-cta>
        Open mission
        <ArrowRight size={18} />
      </Link>
    </main>
  );
}
