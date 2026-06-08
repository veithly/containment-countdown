import { NextResponse } from "next/server";
import { getMissionSnapshot, scenario } from "@/lib/containment";
import { getRuntimeBindings, localPersistence, persistVerification } from "@/lib/storage";

export async function POST() {
  const snapshot = getMissionSnapshot(5, scenario.defaultThreshold, true);
  const response = {
    verificationId: "VERIFY-DEMO-001",
    sessionId: "guest-session-demo",
    ownerId: "guest-session-demo",
    entityId: snapshot.entityId,
    status: snapshot.verification.status,
    query: snapshot.verification.query,
    result: snapshot.verification.result,
  };
  const env = await getRuntimeBindings();
  const storage = env
    ? await persistVerification(env, {
        sessionId: response.sessionId,
        entityId: response.entityId,
        ownerId: response.ownerId,
        verificationId: response.verificationId,
        status: response.status,
        payload: response,
      }).catch((error) => localPersistence(error instanceof Error ? error.message : "D1 verification write failed"))
    : localPersistence();

  return NextResponse.json({ ...response, storage });
}
