import { NextResponse } from "next/server";
import { getMissionSnapshot, scenario } from "@/lib/containment";
import { readJsonRecord } from "@/lib/http";

export async function POST(request: Request) {
  const body = await readJsonRecord(request);
  const threshold = Number(body.threshold ?? scenario.defaultThreshold);
  const eventCount = Number(body.eventCount ?? 3);
  return NextResponse.json({
    threshold,
    snapshot: getMissionSnapshot(eventCount, threshold, false),
  });
}
