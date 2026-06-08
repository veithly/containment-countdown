import OpenAI from "openai";

export function createReasoningClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  const baseURL = process.env.OPENAI_BASE_URL;
  if (!apiKey || !baseURL) return null;
  return new OpenAI({ apiKey, baseURL });
}

export async function buildReplayNarrative(input: { confidence: number; threshold: number; identity: string }) {
  const client = createReasoningClient();
  if (!client) {
    return {
      source: "deterministic replay narrative",
      text: `${input.identity} crossed ${input.threshold}% with ${input.confidence}% confidence. Approval remains human-gated.`,
    };
  }

  const response = await client.chat.completions.create({
    model: process.env.OPENAI_DEFAULT_MODEL || "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "Write one concise SOC decision note. Do not claim live Splunk connectivity.",
      },
      {
        role: "user",
        content: JSON.stringify(input),
      },
    ],
  });

  return {
    source: "OpenAI-compatible reasoning engine",
    text: response.choices[0]?.message.content ?? "Approval remains human-gated.",
  };
}
