import Link from "next/link";
import { DecisionChamber } from "@/components/mission/decision-chamber";

export default function DecisionPage() {
  return (
    <>
      <DecisionChamber />
      <section className="surface-onboarding" aria-label="Decision first-run examples">
        <span data-placeholder-example>Threshold crossed event</span>
        <span data-placeholder-example>Approval-ready transcript</span>
        <Link href="/dossier/demo" data-next-step-cta>
          Open the proof dossier
        </Link>
      </section>
    </>
  );
}
