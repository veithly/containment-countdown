import { scenario } from "@/lib/containment";

type SplunkEvent = {
  id: string;
  timestamp: string;
  signal: string;
  source: string;
  confidenceDelta: number;
  detail: string;
  spl: string;
};

type SplunkQueryResult = {
  source: "live Splunk REST API" | "seeded Splunk-compatible telemetry";
  liveSplunkConfigured: boolean;
  query: string;
  events: SplunkEvent[];
  warning?: string;
};

function splunkConfig() {
  const host = process.env.SPLUNK_HOST?.replace(/\/$/, "");
  const token = process.env.SPLUNK_TOKEN;
  const index = process.env.SPLUNK_INDEX || "identity";
  return { host, token, index, configured: Boolean(host && token) };
}

function fromSplunkRow(row: Record<string, unknown>, index: number, spl: string): SplunkEvent {
  const signal = String(row.signal ?? row.eventtype ?? row.action ?? `splunk_event_${index + 1}`);
  const detail = String(row.detail ?? row._raw ?? row.message ?? "Live Splunk event matched the containment query.");
  return {
    id: String(row._cd ?? row._bkt ?? `live-${index + 1}`),
    timestamp: String(row._time ?? new Date().toISOString()),
    signal,
    source: String(row.source ?? row.sourcetype ?? "live-splunk"),
    confidenceDelta: Number(row.confidenceDelta ?? 10),
    detail,
    spl,
  };
}

export async function querySplunkEvidence(): Promise<SplunkQueryResult> {
  const { host, token, index, configured } = splunkConfig();
  const query = `search index=${index} user=ava.kline earliest=-24h | head 5`;

  if (!configured || !host || !token) {
    return {
      source: "seeded Splunk-compatible telemetry",
      liveSplunkConfigured: false,
      query,
      events: scenario.evidence,
    };
  }

  try {
    const body = new URLSearchParams({
      search: query,
      output_mode: "json",
      count: "5",
    });
    const response = await fetch(`${host}/services/search/jobs/export`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`Splunk REST returned ${response.status}`);
    }

    const raw = await response.text();
    const rows = raw
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        try {
          const parsed = JSON.parse(line) as { result?: Record<string, unknown> };
          return parsed.result;
        } catch {
          return null;
        }
      })
      .filter((row): row is Record<string, unknown> => Boolean(row));

    return {
      source: "live Splunk REST API",
      liveSplunkConfigured: true,
      query,
      events: rows.length ? rows.map((row, index) => fromSplunkRow(row, index, query)) : scenario.evidence,
      warning: rows.length ? undefined : "Live Splunk returned no rows; seeded replay events remain visible for demo continuity.",
    };
  } catch (error) {
    return {
      source: "seeded Splunk-compatible telemetry",
      liveSplunkConfigured: true,
      query,
      events: scenario.evidence,
      warning: error instanceof Error ? error.message : "Live Splunk query failed; using seeded replay events.",
    };
  }
}
