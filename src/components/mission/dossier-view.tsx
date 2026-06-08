"use client";

import { useState } from "react";
import { Download, FileCheck2, ShieldCheck } from "lucide-react";
import { C60Mark } from "@/components/brand/c60-mark";
import { MissionPanel } from "@/components/ui/mission-panel";
import { getDossierSnapshot, scenario } from "@/lib/containment";

export function DossierView({ id }: { id: string }) {
  const dossier = getDossierSnapshot(id);
  const [exportStatus, setExportStatus] = useState("Ready for export");

  async function exportDossier() {
    setExportStatus("Writing dossier artifact...");
    const response = await fetch("/api/dossier/build", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sessionId: "guest-session-demo" }),
    });
    const payload = (await response.json().catch(() => ({}))) as { storage?: { backend?: string } };
    setExportStatus(payload.storage?.backend === "cloudflare-d1-kv-r2" ? "Stored in D1, KV, and R2" : "Exported in replay mode");
  }

  return (
    <main className="dossier-route" data-visual-lane="security-mission-control-cockpit">
      <section className="mobile-proof-header">
        <C60Mark className="brand-mark" />
        <div>
          <span>Dossier {dossier.dossierId}</span>
          <strong data-testid="containment-status">CONTAINED</strong>
        </div>
      </section>
      <section className="dossier-hero">
        <div className="dossier-seal" data-testid="verification-report">
          <C60Mark className="seal-mark" />
          <span>VERIFIED</span>
        </div>
        <div>
          <h1>{dossier.identity}</h1>
          <p>Final state: CONTAINED in replay mode. Verification uses deterministic Splunk-compatible replay.</p>
        </div>
      </section>
      <nav className="proof-jumpbar" aria-label="Dossier proof sections">
        <a href="#evidence">Evidence</a>
        <a href="#approval">Approval</a>
        <a href="#execution">Execution</a>
        <a href="#verify">Verify</a>
      </nav>
      <section className="dossier-grid">
        <MissionPanel title="Evidence chain" className="dossier-card" >
          <div id="evidence" className="anchor-target" />
          <ul className="compact-list">
            {scenario.evidence.map((event) => (
              <li key={event.id}>
                <strong>{event.signal}</strong>
                <span>{event.timestamp} · +{event.confidenceDelta} confidence</span>
              </li>
            ))}
          </ul>
        </MissionPanel>
        <MissionPanel title="Threshold policy" className="dossier-card">
          <dl className="fact-list">
            <div>
              <dt>Threshold</dt>
              <dd>{dossier.threshold}%</dd>
            </div>
            <div>
              <dt>Final confidence</dt>
              <dd>{dossier.confidence}%</dd>
            </div>
            <div>
              <dt>Crossing event</dt>
              <dd>{dossier.pinnedEvent?.signal}</dd>
            </div>
          </dl>
        </MissionPanel>
        <MissionPanel title="Approval record" className="dossier-card">
          <div id="approval" className="anchor-target" />
          <dl className="fact-list">
            <div>
              <dt>Approver</dt>
              <dd>{dossier.approvalRecord?.approver}</dd>
            </div>
            <div>
              <dt>Decision</dt>
              <dd>{dossier.approvalRecord?.decision}</dd>
            </div>
            <div>
              <dt>Policy</dt>
              <dd>{dossier.approvalRecord?.policy}</dd>
            </div>
          </dl>
        </MissionPanel>
        <MissionPanel title="Execution log" className="dossier-card">
          <div id="execution" className="anchor-target" />
          <ol className="compact-list ordered">
            <li>Action queued by approval record.</li>
            <li>Deterministic containment endpoint accepted entity id.</li>
            <li>Identity state changed from ACTIVE to CONTAINED.</li>
          </ol>
        </MissionPanel>
        <MissionPanel title="Replay verification result" className="dossier-card">
          <div id="verify" className="anchor-target" />
          <div className="verify-block">
            <ShieldCheck size={28} />
            <strong>{dossier.verification.status.toUpperCase()}</strong>
            <code>{dossier.verification.query}</code>
            <span>Verified against deterministic Splunk-compatible replay, not a live Splunk index.</span>
            <span>{dossier.verification.result}</span>
          </div>
        </MissionPanel>
        <MissionPanel title="Export artifact" className="dossier-card">
          <button className="cockpit-button primary export-button min-h-11 min-w-11" data-testid="dossier-export" data-next-step-cta type="button" onClick={exportDossier}>
            <Download size={18} />
            Export dossier
          </button>
          <span className="status-note" aria-live="polite">{exportStatus}</span>
          <p>This proof artifact contains the evidence chain, SPL transcript, approval record, execution log, and replay verification result.</p>
        </MissionPanel>
      </section>
    </main>
  );
}
