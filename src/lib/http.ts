export async function readJsonRecord(request: Request): Promise<Record<string, unknown>> {
  const data = await request.json().catch(() => ({}));
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  return data as Record<string, unknown>;
}
