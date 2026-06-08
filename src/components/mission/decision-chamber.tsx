"use client";

import { useState } from "react";
import { Button } from "react-aria-components";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CheckCircle2, Clock3, FileText, ShieldCheck } from "lucide-react";
import { MissionPanel } from "@/components/ui/mission-panel";
import { getMissionSnapshot, scenario } from "@/lib/containment";

const chartData = scenario.evidence.map((event, index) => {
  const snapshot = getMissionSnapshot(index + 1, scenario.defaultThreshold, false);
  return {
    name: event.timestamp.slice(3),
    confidence: snapshot.confidence,
    threshold: scenario.defaultThreshold,
  };
});

export function DecisionChamber() {
  const snapshot = getMissionSnapshot(4, scenario.defaultThreshold, false);
  const finalSnapshot = getMissionSnapshot(5, scenario.defaultThreshold, true);
  const [status, setStatus] = useState("Approval enabled");

  async function approveContainment() {
    setStatus("Writing approval record...");
    const response = await fetch("/api/containment/approve", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        entityId: snapshot.entityId,
        threshold: snapshot.threshold,
        confidence: finalSnapshot.confidence,
        sessionId: "guest-session-demo",
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as { storage?: { backend?: string } };
    setStatus(payload.storage?.backend === "cloudflare-d1-kv-r2" ? "Approval stored in D1/KV" : "Approval recorded");
  }

  return (
    <main className="decision-route" data-visual-lane="security-mission-control-cockpit">
      <section className="decision-grid">
        <MissionPanel className="decision-panel-wide" title="Decision chamber">
          <div className="decision-heading">
            <ShieldCheck size={28} />
            <div>
              <h1>Threshold crossed. Human approval required.</h1>
              <p>Evidence changed the outcome; containment stays gated until an operator records the decision.</p>
            </div>
          </div>
          <div className="chart-wrap" aria-label="Confidence over threshold chart">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={chartData}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" />
                <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} domain={[30, 100]} />
                <Tooltip contentStyle={{ background: "#0d141b", border: "1px solid rgba(148, 163, 184, 0.28)", color: "#f8fafc" }} />
                <Line type="monotone" dataKey="threshold" stroke="#f59e0b" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="confidence" stroke="#7dd3fc" strokeWidth={4} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </MissionPanel>
        <MissionPanel title="Approval record">
          <dl className="fact-list">
            <div>
              <dt>Identity</dt>
              <dd>{snapshot.identity}</dd>
            </div>
            <div>
              <dt>Policy</dt>
              <dd>Confidence {snapshot.confidence}% crossed threshold {snapshot.threshold}%</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{status}</dd>
            </div>
          </dl>
          <div className="action-row stacked">
            <Button className="cockpit-button primary min-h-11 min-w-11" onPress={approveContainment} data-testid="approve-containment" data-cta-primary>
              <CheckCircle2 size={18} />
              Approve containment
            </Button>
            <Button className="cockpit-button secondary min-h-11 min-w-11">
              <Clock3 size={18} />
              Delay 10 minutes
            </Button>
          </div>
        </MissionPanel>
        <MissionPanel className="decision-panel-wide" title="SPL transcript">
          <div className="transcript-block" data-testid="spl-transcript">
            {scenario.evidence.slice(0, 4).map((event) => (
              <code key={event.id}>{event.spl}</code>
            ))}
          </div>
        </MissionPanel>
        <MissionPanel title="Dossier preview">
          <div className="dossier-mini">
            <FileText size={28} />
            <strong>{finalSnapshot.dossierId}</strong>
            <span>Signal, context, decision, action, and proof are ready for export.</span>
          </div>
        </MissionPanel>
      </section>
    </main>
  );
}
