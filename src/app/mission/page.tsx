import Link from "next/link";
import { MissionCockpit } from "@/components/mission/mission-cockpit";

export default function MissionPage() {
  return (
    <>
      <MissionCockpit />
      <section className="surface-onboarding" aria-label="Mission first-run examples">
        <span data-placeholder-example>Impossible travel replay</span>
        <span data-placeholder-example>MFA fatigue replay</span>
        <Link href="/decision" data-next-step-cta>
          Review the decision chamber
        </Link>
      </section>
    </>
  );
}
