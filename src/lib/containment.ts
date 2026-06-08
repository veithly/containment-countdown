export const VISUAL_LANE = "security-mission-control-cockpit";
export const VISUAL_LANE_LABEL = "security mission-control cockpit.";
export const HERO_COMPOSITION = "countdown-command-cockpit";

export type ContainmentState =
  | "collecting"
  | "threshold_crossed"
  | "approval_pending"
  | "approved"
  | "executing"
  | "contained"
  | "delayed"
  | "verification_failed";

export type ProofStage = "Signal" | "Context" | "Decision" | "Action" | "Proof";

export type EvidenceEvent = {
  id: string;
  timestamp: string;
  signal: string;
  source: string;
  confidenceDelta: number;
  detail: string;
  spl: string;
};

export type MissionSnapshot = {
  seed: string;
  entityId: string;
  identity: string;
  role: string;
  threshold: number;
  confidence: number;
  remainingSeconds: number;
  state: ContainmentState;
  visibleEvents: EvidenceEvent[];
  pinnedEvent?: EvidenceEvent;
  dossierId: string;
  approvalRecord?: {
    approver: string;
    decision: "approved" | "delayed";
    policy: string;
    timestamp: string;
  };
  verification: {
    status: "pending" | "passed" | "failed";
    query: string;
    result: string;
  };
};

export const scenario = {
  seed: "splunk-identity-replay-060",
  entityId: "risk-identity-ava-kline",
  identity: "ava.kline@northstar.example",
  role: "Privileged Finance Admin",
  dossierId: "DEMO-001",
  baseConfidence: 38,
  defaultThreshold: 80,
  evidence: [
    {
      id: "ev-impossible-travel",
      timestamp: "10:04:12",
      signal: "impossible_travel_detected",
      source: "index=identity sourcetype=okta:events",
      confidenceDelta: 18,
      detail: "Two successful sessions resolve to locations 4,810 miles apart inside 11 minutes.",
      spl: "index=identity sourcetype=okta:events user=ava.kline action=success | stats values(src_ip) by user",
    },
    {
      id: "ev-mfa-fatigue",
      timestamp: "10:04:27",
      signal: "mfa_fatigue_pattern",
      source: "index=identity sourcetype=duo:auth",
      confidenceDelta: 12,
      detail: "Seven push attempts land before one accepted challenge from a new device.",
      spl: "index=identity sourcetype=duo:auth user=ava.kline result IN (denied,success) | transaction user maxspan=10m",
    },
    {
      id: "ev-privileged-touch",
      timestamp: "10:04:49",
      signal: "privileged_app_touch",
      source: "index=finance sourcetype=app:audit",
      confidenceDelta: 16,
      detail: "Identity opens payment approval workflow outside normal access window.",
      spl: "index=finance sourcetype=app:audit user=ava.kline app=payments action=open | stats count by action",
    },
    {
      id: "ev-sensitive-export",
      timestamp: "10:05:06",
      signal: "sensitive_export_started",
      source: "index=dlp sourcetype=gateway:events",
      confidenceDelta: 14,
      detail: "Gateway observes a compressed export headed to an unrecognized destination.",
      spl: "index=dlp sourcetype=gateway:events user=ava.kline filetype=zip dest_category=unknown | table _time dest bytes",
    },
    {
      id: "ev-admin-change",
      timestamp: "10:05:23",
      signal: "admin_policy_changed",
      source: "index=iam sourcetype=entra:audit",
      confidenceDelta: 11,
      detail: "A conditional access rule is edited by the same identity during the active session.",
      spl: "index=iam sourcetype=entra:audit user=ava.kline operation=UpdatePolicy | table _time policy target",
    },
  ] satisfies EvidenceEvent[],
};

export function getMissionSnapshot(eventCount = 3, threshold = scenario.defaultThreshold, approved = false): MissionSnapshot {
  const visibleEvents = scenario.evidence.slice(0, Math.max(0, Math.min(eventCount, scenario.evidence.length)));
  const confidence = Math.min(
    98,
    scenario.baseConfidence + visibleEvents.reduce((sum, event) => sum + event.confidenceDelta, 0),
  );
  const crossed = confidence >= threshold;
  const remainingSeconds = crossed ? 0 : Math.max(8, 60 - Math.round(confidence * 0.55));
  const pinnedEvent = crossed ? visibleEvents.findLast((event, index) => {
    const before = scenario.baseConfidence + visibleEvents.slice(0, index).reduce((sum, item) => sum + item.confidenceDelta, 0);
    return before < threshold && before + event.confidenceDelta >= threshold;
  }) ?? visibleEvents.at(-1) : undefined;
  const state: ContainmentState = approved
    ? "contained"
    : crossed
      ? "approval_pending"
      : visibleEvents.length > 0
        ? "collecting"
        : "collecting";

  return {
    seed: scenario.seed,
    entityId: scenario.entityId,
    identity: scenario.identity,
    role: scenario.role,
    threshold,
    confidence,
    remainingSeconds,
    state,
    visibleEvents,
    pinnedEvent,
    dossierId: scenario.dossierId,
    approvalRecord: approved
      ? {
          approver: "demo operator",
          decision: "approved",
          policy: `Confidence ${confidence}% crossed threshold ${threshold}%`,
          timestamp: "10:05:41",
        }
      : undefined,
    verification: {
      status: approved ? "passed" : "pending",
      query: "index=identity user=ava.kline action=containment | stats latest(status) as status by user",
      result: approved ? "status=CONTAINED verified_by=spl_replay" : "waiting for approval",
    },
  };
}

export function getProofStages(snapshot: MissionSnapshot) {
  const decisionComplete = snapshot.state === "approval_pending" || snapshot.state === "contained";
  const actionComplete = snapshot.state === "contained";
  return [
    { stage: "Signal" as ProofStage, label: `${snapshot.visibleEvents.length} events`, complete: snapshot.visibleEvents.length > 0, active: snapshot.visibleEvents.length > 0 },
    { stage: "Context" as ProofStage, label: `confidence ${snapshot.confidence}%`, complete: snapshot.confidence >= 60, active: snapshot.confidence >= 60 },
    { stage: "Decision" as ProofStage, label: decisionComplete ? "approval ready" : "waiting", complete: !!snapshot.approvalRecord, active: decisionComplete },
    { stage: "Action" as ProofStage, label: actionComplete ? "contained" : "queued", complete: actionComplete, active: !!snapshot.approvalRecord },
    { stage: "Proof" as ProofStage, label: actionComplete ? "verified" : "pending", complete: actionComplete, active: actionComplete },
  ];
}

export function getDossierSnapshot(id = scenario.dossierId) {
  const snapshot = getMissionSnapshot(5, scenario.defaultThreshold, true);
  return {
    ...snapshot,
    dossierId: id === "demo" ? scenario.dossierId : id.toUpperCase(),
  };
}
