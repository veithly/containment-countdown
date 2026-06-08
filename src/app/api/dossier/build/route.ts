import { NextResponse } from "next/server";
import { buildStoredDossier, getRuntimeBindings, localPersistence, persistDossier } from "@/lib/storage";
import { readJsonRecord } from "@/lib/http";

export async function POST(request: Request) {
  const body = await readJsonRecord(request);
  const sessionId = String(body.sessionId ?? "guest-session-demo");
  const dossier = buildStoredDossier(sessionId, "operator");
  const env = await getRuntimeBindings();
  const persistence = env
    ? await persistDossier(env, dossier).catch((error) =>
        localPersistence(error instanceof Error ? error.message : "D1/KV/R2 dossier write failed"),
      )
    : localPersistence();
  return NextResponse.json({
    dossier,
    storage: {
      sessionId: dossier.sessionId,
      dossierId: dossier.dossierId,
      ownerId: dossier.ownerId,
      roleId: dossier.roleId,
      ...persistence,
    },
  });
}
