import { DossierView } from "@/components/mission/dossier-view";

export default async function DossierPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await params;
  return (
    <>
      <DossierView id={resolvedParams.id} />
      <section className="surface-onboarding" aria-label="Dossier first-run examples">
        <span data-placeholder-example>Evidence chain proof</span>
        <span data-placeholder-example>Verification result proof</span>
        <a href="/architecture" data-next-step-cta>
          Inspect architecture proof
        </a>
      </section>
    </>
  );
}
