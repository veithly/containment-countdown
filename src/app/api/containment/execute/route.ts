import { NextResponse } from "next/server";
import { getMissionSnapshot, scenario } from "@/lib/containment";
import { getRuntimeBindings, localPersistence, persistContainmentAction } from "@/lib/storage";

export async function POST() {
  const snapshot = getMissionSnapshot(5, scenario.defaultThreshold, true);
  const response = {
    executionId: "EXEC-DEMO-001",
    entityId: snapshot.entityId,
    from: "ACTIVE",
    to: "CONTAINED",
    sessionId: "guest-session-demo",
    ownerId: "guest-session-demo",
  };
  const env = await getRuntimeBindings();
  const storage = env
    ? await persistContainmentAction(env, {
        sessionId: response.sessionId,
        entityId: response.entityId,
        ownerId: response.ownerId,
        executionId: response.executionId,
        fromState: response.from,
        toState: response.to,
        payload: response,
      }).catch((error) => localPersistence(error instanceof Error ? error.message : "D1 action write failed"))
    : localPersistence();

  return NextResponse.json({ ...response, storage });
}
