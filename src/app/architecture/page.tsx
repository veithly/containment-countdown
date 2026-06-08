import Link from "next/link";
import { Database, FileCheck2, GitBranch, ServerCog, ShieldCheck } from "lucide-react";
import { MissionPanel } from "@/components/ui/mission-panel";

const nodes = [
  { icon: Database, title: "Seeded Splunk-compatible telemetry", text: "Deterministic identity, DLP, finance, and IAM events drive replay." },
  { icon: ServerCog, title: "SPL / REST query boundary", text: "Live Splunk can replace replay after credentials are configured and smoke-tested." },
  { icon: GitBranch, title: "Policy and action engine", text: "Evidence changes threshold state before human approval unlocks containment." },
  { icon: ShieldCheck, title: "Containment executor", text: "The endpoint changes identity state in a controlled replay environment." },
  { icon: FileCheck2, title: "Dossier store", text: "Approval, SPL transcript, execution, and verification become one proof artifact." },
];

export default function ArchitecturePage() {
  return (
    <main className="architecture-route" data-visual-lane="security-mission-control-cockpit">
      <section className="route-heading">
        <h1>Architecture proof</h1>
        <p>Seeded Splunk-compatible telemetry is the public evidence model. When live credentials are configured, the same SPL/REST boundary can use Splunk as the evidence and verification source.</p>
        <div className="surface-onboarding inline" aria-label="Architecture first-run examples">
          <span data-placeholder-example>SPL/REST boundary</span>
          <span data-placeholder-example>Dossier store</span>
          <Link href="/replay" data-next-step-cta>
            Run the replay lab
          </Link>
        </div>
      </section>
      <section className="architecture-flow">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <MissionPanel key={node.title} title={node.title}>
              <Icon size={28} />
              <p>{node.text}</p>
            </MissionPanel>
          );
        })}
      </section>
      <MissionPanel title="Assumption register">
        <ul className="compact-list">
          <li>Uses seeded Splunk-compatible telemetry for deterministic demo replay.</li>
          <li>Live Splunk credentials are not configured in this build.</li>
          <li>Replay containment changes the demo incident state only; no real IAM or firewall change occurs.</li>
          <li>
            Root architecture artifact: <Link href="/architecture_diagram.md">architecture_diagram.md</Link>
          </li>
        </ul>
      </MissionPanel>
    </main>
  );
}
