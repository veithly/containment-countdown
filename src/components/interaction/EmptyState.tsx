import Link from "next/link";
import { FileSearch } from "lucide-react";

const examples = ["Impossible travel", "MFA fatigue", "Privileged export"];

export function EmptyState({ surface }: { surface: string }) {
  return (
    <section className="empty-state" aria-label={`${surface} first-run examples`}>
      <FileSearch size={24} />
      <div>
        <strong>{surface} is ready for replay data</strong>
        <p>Start with one seeded scenario, then inspect the evidence chain and proof artifact.</p>
      </div>
      <div className="empty-examples">
        {examples.map((example) => (
          <Link key={example} href="/mission" data-placeholder-example>
            {example}
          </Link>
        ))}
      </div>
      <Link href="/mission" className="cockpit-button secondary link-button min-h-11 min-w-11" data-empty-cta>
        Run a seeded replay
      </Link>
    </section>
  );
}
