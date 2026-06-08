import { NextResponse } from "next/server";
import { getMissionSnapshot, scenario } from "@/lib/containment";
import { readJsonRecord } from "@/lib/http";
import { getRuntimeBindings, localPersistence, persistEvidence } from "@/lib/storage";

export async function POST(request: Request) {
  const body = await readJsonRecord(request);
  const eventCount = Number(body.eventCount ?? 3);
  const threshold = Number(body.threshold ?? scenario.defaultThreshold);
  const sessionId = String(body.sessionId ?? "guest-session-demo");
  const snapshot = getMissionSnapshot(eventCount, threshold, false);
  const env = await getRuntimeBindings();
  const pinned = snapshot.pinnedEvent ?? snapshot.visibleEvents.at(-1);
  const storage = env && pinned
    ? await persistEvidence(env, {
        sessionId,
        entityId: snapshot.entityId,
        ownerId: sessionId,
        eventId: pinned.id,
        signal: pinned.signal,
        confidence: snapshot.confidence,
        payload: snapshot,
      }).catch((error) => localPersistence(error instanceof Error ? error.message : "D1 evidence write failed"))
    : localPersistence();

  return NextResponse.json({ ...snapshot, storage });
}
