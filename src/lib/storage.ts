import { MissionSnapshot, getDossierSnapshot } from "@/lib/containment";
import { getCloudflareContext } from "@opennextjs/cloudflare";

type Statement = {
  bind: (...values: unknown[]) => Statement;
  run: () => Promise<unknown>;
  first?: <T = unknown>() => Promise<T | null>;
};

export type D1Database = {
  prepare: (query: string) => Statement;
};

export type KVNamespace = {
  put: (key: string, value: string) => Promise<void>;
  get: (key: string) => Promise<string | null>;
};

export type R2Bucket = {
  put: (key: string, value: string, options?: { httpMetadata?: Record<string, string> }) => Promise<void>;
};

export type CloudflareBindings = {
  DB: D1Database;
  REPLAY_STATE: KVNamespace;
  DOSSIERS: R2Bucket;
};

export type StoredDossier = MissionSnapshot & {
  sessionId: string;
  roleId: "operator" | "viewer";
  createdBy: string;
  ownerId: string;
};

type PersistResult = {
  persisted: boolean;
  backend: "cloudflare-d1-kv-r2" | "local-memory";
  reason?: string;
};

type RecordPayload = {
  sessionId: string;
  entityId: string;
  ownerId: string;
  payload: unknown;
};

export async function getRuntimeBindings(): Promise<CloudflareBindings | null> {
  try {
    const context = await getCloudflareContext({ async: true });
    const env = context.env as unknown as Partial<CloudflareBindings>;
    if (env.DB && env.REPLAY_STATE && env.DOSSIERS) return env as CloudflareBindings;
  } catch {
    return null;
  }
  return null;
}

export function buildStoredDossier(sessionId: string, roleId: "operator" | "viewer" = "operator"): StoredDossier {
  return {
    ...getDossierSnapshot("demo"),
    sessionId,
    roleId,
    createdBy: roleId,
    ownerId: sessionId,
  };
}

export async function persistEvidence(
  env: CloudflareBindings,
  record: RecordPayload & { eventId: string; signal: string; confidence: number },
): Promise<PersistResult> {
  await env.DB.prepare(
    "insert into evidence_events (sessionId, entityId, ownerId, eventId, signal, confidence, payload) values (?, ?, ?, ?, ?, ?, ?)",
  )
    .bind(
      record.sessionId,
      record.entityId,
      record.ownerId,
      record.eventId,
      record.signal,
      record.confidence,
      JSON.stringify(record.payload),
    )
    .run();

  await env.REPLAY_STATE.put(`session:${record.sessionId}:latest-evidence`, JSON.stringify(record.payload));
  return { persisted: true, backend: "cloudflare-d1-kv-r2" };
}

export async function persistApproval(
  env: CloudflareBindings,
  record: RecordPayload & { approvalId: string; decision: string },
): Promise<PersistResult> {
  await env.DB.prepare(
    "insert into approvals (sessionId, approvalId, entityId, ownerId, decision, payload) values (?, ?, ?, ?, ?, ?)",
  )
    .bind(record.sessionId, record.approvalId, record.entityId, record.ownerId, record.decision, JSON.stringify(record.payload))
    .run();

  await env.REPLAY_STATE.put(`session:${record.sessionId}:latest-approval`, JSON.stringify(record.payload));
  return { persisted: true, backend: "cloudflare-d1-kv-r2" };
}

export async function persistContainmentAction(
  env: CloudflareBindings,
  record: RecordPayload & { executionId: string; fromState: string; toState: string },
): Promise<PersistResult> {
  await env.DB.prepare(
    "insert into containment_actions (sessionId, executionId, entityId, ownerId, fromState, toState, payload) values (?, ?, ?, ?, ?, ?, ?)",
  )
    .bind(
      record.sessionId,
      record.executionId,
      record.entityId,
      record.ownerId,
      record.fromState,
      record.toState,
      JSON.stringify(record.payload),
    )
    .run();

  await env.REPLAY_STATE.put(`session:${record.sessionId}:latest-action`, JSON.stringify(record.payload));
  return { persisted: true, backend: "cloudflare-d1-kv-r2" };
}

export async function persistVerification(
  env: CloudflareBindings,
  record: RecordPayload & { verificationId: string; status: string },
): Promise<PersistResult> {
  await env.DB.prepare(
    "insert into verification_runs (sessionId, verificationId, entityId, ownerId, status, payload) values (?, ?, ?, ?, ?, ?)",
  )
    .bind(
      record.sessionId,
      record.verificationId,
      record.entityId,
      record.ownerId,
      record.status,
      JSON.stringify(record.payload),
    )
    .run();

  await env.REPLAY_STATE.put(`session:${record.sessionId}:latest-verification`, JSON.stringify(record.payload));
  return { persisted: true, backend: "cloudflare-d1-kv-r2" };
}

export async function persistDossier(env: CloudflareBindings, dossier: StoredDossier): Promise<PersistResult> {
  await env.DB.prepare(
    "insert into dossiers (sessionId, dossierId, entityId, roleId, ownerId, createdBy, payload) values (?, ?, ?, ?, ?, ?, ?)",
  )
    .bind(
      dossier.sessionId,
      dossier.dossierId,
      dossier.entityId,
      dossier.roleId,
      dossier.ownerId,
      dossier.createdBy,
      JSON.stringify(dossier),
    )
    .run();

  await env.REPLAY_STATE.put(`session:${dossier.sessionId}:latest-dossier`, dossier.dossierId);
  await env.DOSSIERS.put(`dossiers/${dossier.dossierId}.json`, JSON.stringify(dossier), {
    httpMetadata: { contentType: "application/json" },
  });

  return { persisted: true, backend: "cloudflare-d1-kv-r2" };
}

export function localPersistence(reason = "Cloudflare bindings are not available in this runtime"): PersistResult {
  return { persisted: false, backend: "local-memory", reason };
}
