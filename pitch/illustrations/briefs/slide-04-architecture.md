# Slide 04 Architecture Illustration Brief

```json
{
  "type": "slide illustration",
  "goal": "Explain the product mechanism without claiming live Splunk credentials.",
  "source": {
    "slide": "Slide 04",
    "prd_section": "Technical constraints",
    "demo_or_proof_link": "architecture_diagram.md"
  },
  "subject": {
    "primary": "four mechanism blocks: Signal + context, Decision, Action, Proof",
    "state": "seeded replay with live storage and reasoning"
  },
  "layout": {
    "aspect": "16:10",
    "safe_area": "headline top, four blocks center, claim boundary bottom"
  },
  "style": {
    "visual_lane": "technical control schematic",
    "palette": ["#070b0f", "#7dd3fc", "#34d399", "#f59e0b"],
    "texture_or_rendering": "monochrome linework with one proof-green accent"
  },
  "constraints": {
    "must_keep": ["seeded Splunk-compatible telemetry", "D1/KV/R2", "OpenAI-compatible reasoning", "optional live Splunk credentials"],
    "avoid": ["provider parade", "unclear live integration claims", "more than four blocks"]
  },
  "rendering_decision": "Built as four exportable HTML mechanism cards plus a five-node mini architecture strip."
}
```
