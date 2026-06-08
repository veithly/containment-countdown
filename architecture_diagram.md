# Containment Countdown Architecture Diagram

```mermaid
flowchart LR
  A["Risky identity telemetry"] --> B["Seeded Splunk-compatible replay"]
  B --> C["SPL transcript / MCP query boundary"]
  C --> D["Threshold policy engine"]
  D --> E["Human approval gate"]
  E --> F["Containment executor"]
  F --> G["Verification query"]
  G --> H["Containment Dossier"]
  H --> I["Cloudflare D1/KV/R2 proof store"]
  H --> J["Mobile QR proof viewer"]
  C --> K["OpenAI-compatible reasoning API"]
```

The current public build uses deterministic replay and does not claim live Splunk credentials are configured. Cloudflare D1/KV/R2 and the OpenAI-compatible reasoning route are live production integrations.
