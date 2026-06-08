import { NextResponse } from "next/server";
import { buildReplayNarrative } from "@/lib/ai";
import { getMissionSnapshot, scenario } from "@/lib/containment";

export async function POST() {
  const snapshot = getMissionSnapshot(5, scenario.defaultThreshold, true);
  const narrative = await buildReplayNarrative({
    confidence: snapshot.confidence,
    threshold: snapshot.threshold,
    identity: snapshot.identity,
  });
  return NextResponse.json({
    narrative,
    transcript: scenario.evidence.map((event) => event.spl),
  });
}
