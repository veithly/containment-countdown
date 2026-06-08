import { NextResponse } from "next/server";
import { querySplunkEvidence } from "@/lib/splunk";

export async function POST() {
  return NextResponse.json(await querySplunkEvidence());
}
