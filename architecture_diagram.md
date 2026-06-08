# Containment Countdown Architecture Diagram

```mermaid
flowchart LR
  A["Risky identity telemetry"] --> B["Seeded Splunk-compatible replay"]
  B --> C["SPL transcript / REST query boundary"]
  C --> D["Threshold policy engine"]
  D --> E["Human approval gate"]
  E --> F["Containment executor"]
  F --> G["Verification query"]
  G --> H["Containment Dossier"]
  H --> I["Cloudflare D1/KV/R2 proof store"]
  H --> J["Mobile QR proof viewer"]
  C --> K["OpenAI-compatible reasoning API"]
```

Seeded Splunk-compatible telemetry is the public evidence model. When `SPLUNK_HOST`, `SPLUNK_TOKEN`, and `SPLUNK_INDEX` are configured, the same SPL/REST boundary can use live Splunk as the evidence and verification source. Cloudflare D1/KV/R2 and the OpenAI-compatible reasoning route are live production integrations.
