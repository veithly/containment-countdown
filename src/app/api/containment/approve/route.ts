import { NextResponse } from "next/server";
import { getMissionSnapshot, scenario } from "@/lib/containment";
import { readJsonRecord } from "@/lib/http";
import {
  buildStoredDossier,
  getRuntimeBindings,
  localPersistence,
  persistApproval,
  persistContainmentAction,
  persistDossier,
  persistEvidence,
  persistVerification,
} from "@/lib/storage";

export async function POST(request: Request) {
  const body = await readJsonRecord(request);
  const threshold = Number(body.threshold ?? scenario.defaultThreshold);
  const confidence = Number(body.confidence ?? 0);
  const snapshot = getMissionSnapshot(5, threshold, true);
  const sessionId = String(body.sessionId ?? "guest-session-demo");
  const response = {
    approvalId: "APPROVAL-DEMO-001",
    sessionId,
    roleId: "operator",
    createdBy: "demo operator",
    entityId: String(body.entityId ?? snapshot.entityId),
    decision: confidence >= threshold ? "approved" : "held-for-more-evidence",
    snapshot,
  };
  const env = await getRuntimeBindings();
  const storage = env
    ? await (async () => {
        const pinned = snapshot.pinnedEvent ?? snapshot.visibleEvents.at(-1);
        if (pinned) {
          await persistEvidence(env, {
            sessionId,
            entityId: response.entityId,
            ownerId: sessionId,
            eventId: pinned.id,
            signal: pinned.signal,
            confidence: snapshot.confidence,
            payload: snapshot,
          });
        }
        await persistApproval(env, {
          sessionId,
          entityId: response.entityId,
          ownerId: sessionId,
          approvalId: response.approvalId,
          decision: response.decision,
          payload: response,
        });
        await persistContainmentAction(env, {
          sessionId,
          entityId: response.entityId,
          ownerId: sessionId,
          executionId: "EXEC-DEMO-001",
          fromState: "ACTIVE",
          toState: "CONTAINED",
          payload: { sessionId, entityId: response.entityId, from: "ACTIVE", to: "CONTAINED" },
        });
        await persistVerification(env, {
          sessionId,
          entityId: response.entityId,
          ownerId: sessionId,
          verificationId: "VERIFY-DEMO-001",
          status: snapshot.verification.status,
          payload: snapshot.verification,
        });
        await persistDossier(env, buildStoredDossier(sessionId, "operator"));
        return { persisted: true, backend: "cloudflare-d1-kv-r2" as const };
      })().catch((error) => localPersistence(error instanceof Error ? error.message : "D1/KV/R2 approval proof write failed"))
    : localPersistence();

  return NextResponse.json({ ...response, storage });
}
