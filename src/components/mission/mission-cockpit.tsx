"use client";

import { useMemo, useState } from "react";
import { Button } from "react-aria-components";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Clock3, FileCheck2, Pause, RadioTower, ShieldAlert, SlidersHorizontal } from "lucide-react";
import { C60Mark } from "@/components/brand/c60-mark";
import { MissionPanel } from "@/components/ui/mission-panel";
import {
  EvidenceEvent,
  HERO_COMPOSITION,
  MissionSnapshot,
  VISUAL_LANE,
  getMissionSnapshot,
  getProofStages,
  scenario,
} from "@/lib/containment";

export function MissionCockpit({ compact = false }: { compact?: boolean }) {
  const [eventCount, setEventCount] = useState(3);
  const [threshold, setThreshold] = useState(scenario.defaultThreshold);
  const [approved, setApproved] = useState(false);
  const [status, setStatus] = useState("ready");
  const snapshot = useMemo(() => getMissionSnapshot(eventCount, threshold, approved), [eventCount, threshold, approved]);
  const crossed = snapshot.confidence >= snapshot.threshold;
  const canApprove = crossed && !approved;
  const sessionId = "guest-session-demo";

  async function postApi(path: string, payload: Record<string, unknown>) {
    const response = await fetch(path, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    return response.json().catch(() => ({})) as Promise<Record<string, unknown>>;
  }

  async function advanceEvidence() {
    const nextCount = Math.min(eventCount + 1, scenario.evidence.length);
    setEventCount(nextCount);
    setStatus("evidence-write-pending");
    const result = await postApi("/api/evidence/tick", { eventCount: nextCount, threshold, sessionId });
    const storage = result.storage as { backend?: string } | undefined;
    setStatus(storage?.backend === "cloudflare-d1-kv-r2" ? "evidence-written-to-d1-kv" : "evidence-replay-local");
  }

  async function updateThreshold(nextThreshold: number) {
    setThreshold(nextThreshold);
    const result = await postApi("/api/threshold/update", { eventCount, threshold: nextThreshold, sessionId });
    const updatedSnapshot = result.snapshot as { confidence?: number } | undefined;
    setStatus((updatedSnapshot?.confidence ?? 0) >= nextThreshold ? "policy-threshold-crossed" : "policy-updated");
  }

  function resetReplay() {
    setEventCount(2);
    setThreshold(scenario.defaultThreshold);
    setApproved(false);
    setStatus("ready");
  }

  async function approveContainment() {
    setApproved(true);
    setStatus("approval-write-pending");
    const approval = await postApi("/api/containment/approve", {
      entityId: snapshot.entityId,
      threshold: snapshot.threshold,
      confidence: snapshot.confidence,
      sessionId,
    });
    await postApi("/api/containment/execute", { entityId: snapshot.entityId, sessionId });
    await postApi("/api/verification/run", { entityId: snapshot.entityId, sessionId });
    await postApi("/api/dossier/build", { sessionId });
    const storage = approval.storage as { backend?: string } | undefined;
    setStatus(storage?.backend === "cloudflare-d1-kv-r2" ? "approval-proof-written" : "approval-recorded");
  }

  return (
    <main className={compact ? "mission-preview" : "mission-cockpit"} data-visual-lane={VISUAL_LANE} data-hero-composition={HERO_COMPOSITION} data-hero-text="Approve containment for risky identities in 60 seconds after evidence crosses threshold.">
      <div className="mission-grid">
        <RiskIdentityPanel snapshot={snapshot} threshold={threshold} setThreshold={updateThreshold} />
        <MissionPanel className="countdown-command" title="Containment command">
          <ContainmentDial snapshot={snapshot} />
          <ConfidenceMeter snapshot={snapshot} />
          <div className="action-row" aria-live="polite">
            <Button className="cockpit-button secondary min-h-11 min-w-11" onPress={advanceEvidence} isDisabled={approved || eventCount >= scenario.evidence.length} data-testid="advance-evidence">
              <RadioTower size={18} />
              Replay evidence
            </Button>
            <Button className="cockpit-button primary min-h-11 min-w-11" onPress={approveContainment} isDisabled={!canApprove} data-testid="approve-containment" data-cta-primary>
              <CheckCircle2 size={18} />
              {approved ? "Approval recorded" : canApprove ? "Approve containment" : "Waiting for threshold"}
            </Button>
            <Button className="cockpit-button secondary min-h-11 min-w-11" onPress={resetReplay}>
              <Pause size={18} />
              Reset replay
            </Button>
          </div>
          <span className="status-note" aria-live="polite">{status}</span>
        </MissionPanel>
        <EvidenceTicker snapshot={snapshot} />
      </div>
      <ProofRail snapshot={snapshot} />
    </main>
  );
}

function RiskIdentityPanel({
  snapshot,
  threshold,
  setThreshold,
}: {
  snapshot: MissionSnapshot;
  threshold: number;
  setThreshold: (value: number) => void | Promise<void>;
}) {
  return (
    <MissionPanel className="risk-panel" title="Risk identity">
      <div className="identity-header">
        <ShieldAlert size={26} />
        <span className="status-chip active">{snapshot.state === "contained" ? "CONTAINED" : "ACTIVE"}</span>
      </div>
      <h2>{snapshot.identity}</h2>
      <p>{snapshot.role}</p>
      <dl className="fact-list">
        <div>
          <dt>Entity</dt>
          <dd>{snapshot.entityId}</dd>
        </div>
        <div>
          <dt>Replay seed</dt>
          <dd>{snapshot.seed}</dd>
        </div>
        <div>
          <dt>Risk band</dt>
          <dd>{snapshot.confidence >= threshold ? "Threshold crossed" : "Evidence collecting"}</dd>
        </div>
      </dl>
      <div className="threshold-block">
        <label htmlFor="threshold-slider">
          <SlidersHorizontal size={16} />
          Threshold policy: {threshold}%
        </label>
        <input
          id="threshold-slider"
          data-testid="threshold-slider"
          type="range"
          min="70"
          max="90"
          step="5"
          value={threshold}
          onChange={(event) => void setThreshold(Number(event.target.value))}
        />
        <div className="threshold-presets">
          {[70, 80, 90].map((value) => (
            <button key={value} type="button" className="min-h-11 min-w-11" onClick={() => void setThreshold(value)} aria-pressed={threshold === value}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </MissionPanel>
  );
}

function ContainmentDial({ snapshot }: { snapshot: MissionSnapshot }) {
  const prefersReducedMotion = useReducedMotion();
  const radius = 118;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(snapshot.confidence, 100) / 100;
  const thresholdAngle = (snapshot.threshold / 100) * 360;
  const dashOffset = circumference * (1 - progress);
  const centerLabel = snapshot.state === "contained"
    ? "CONTAINED"
    : snapshot.confidence >= snapshot.threshold
      ? "THRESHOLD"
      : `${snapshot.remainingSeconds}s`;

  return (
    <div className="dial-wrap" data-testid="countdown-ring">
      <svg className="containment-dial" viewBox="0 0 320 320" role="img" aria-label={`Containment confidence ${snapshot.confidence} percent, threshold ${snapshot.threshold} percent`}>
        <defs>
          <linearGradient id="dialGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--signal-cold)" />
            <stop offset="72%" stopColor="var(--signal-warn)" />
            <stop offset="100%" stopColor="var(--signal-proof)" />
          </linearGradient>
        </defs>
        <circle cx="160" cy="160" r={radius} className="dial-track" />
        <motion.circle
          cx="160"
          cy="160"
          r={radius}
          className="dial-progress"
          strokeDasharray={circumference}
          initial={false}
          animate={{ strokeDashoffset: dashOffset }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <g transform={`rotate(${thresholdAngle - 90} 160 160)`}>
          <line x1="160" y1="33" x2="160" y2="58" className="threshold-notch" />
        </g>
        <circle cx="160" cy="160" r="74" className="dial-core" />
      </svg>
      <div className="dial-center">
        <C60Mark className="dial-mark" />
        <strong data-testid="containment-status">{centerLabel}</strong>
        <span>{snapshot.confidence}% confidence</span>
      </div>
    </div>
  );
}

function ConfidenceMeter({ snapshot }: { snapshot: MissionSnapshot }) {
  return (
    <div className="confidence-meter" data-testid="risk-score">
      <div>
        <span>Evidence confidence</span>
        <strong>{snapshot.confidence}%</strong>
      </div>
      <div className="meter-track" aria-hidden="true">
        <span style={{ width: `${snapshot.confidence}%` }} />
        <i style={{ left: `${snapshot.threshold}%` }} />
      </div>
      <p>
        Threshold {snapshot.threshold}% {snapshot.confidence >= snapshot.threshold ? "crossed" : "not crossed"}
      </p>
    </div>
  );
}

function EvidenceTicker({ snapshot }: { snapshot: MissionSnapshot }) {
  return (
    <MissionPanel className="evidence-panel" title="Evidence ticker">
      <div className="panel-kicker">Seeded SPL-compatible replay</div>
      <ul className="evidence-list" data-testid="evidence-feed">
        {snapshot.visibleEvents.map((event) => (
          <EvidenceItem key={event.id} event={event} pinned={snapshot.pinnedEvent?.id === event.id} />
        ))}
      </ul>
      <div className="spl-preview" data-testid="spl-transcript">
        <span>SPL transcript preview</span>
        <code>{snapshot.visibleEvents.at(-1)?.spl ?? scenario.evidence[0].spl}</code>
      </div>
    </MissionPanel>
  );
}

function EvidenceItem({ event, pinned }: { event: EvidenceEvent; pinned: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.li
      className={pinned ? "evidence-item pinned" : "evidence-item"}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
    >
      <div>
        <time>{event.timestamp}</time>
        <strong>{event.signal}</strong>
      </div>
      <span className="delta">+{event.confidenceDelta}</span>
      <p>{event.detail}</p>
      <small>{event.source}</small>
      {pinned ? <b>This event changed the outcome</b> : null}
    </motion.li>
  );
}

function ProofRail({ snapshot }: { snapshot: MissionSnapshot }) {
  const stages = getProofStages(snapshot);
  return (
    <section className="proof-rail" aria-label="Proof timeline rail">
      {stages.map((stage) => (
        <div key={stage.stage} className={stage.complete ? "proof-stage complete" : stage.active ? "proof-stage active" : "proof-stage"}>
          <FileCheck2 size={18} />
          <span>{stage.stage}</span>
          <strong>{stage.label}</strong>
        </div>
      ))}
    </section>
  );
}
