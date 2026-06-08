{
  "type": "UI mockup",
  "goal": "App beat: threshold changes the outcome and generates a Containment Dossier.",
  "source": {
    "prd_section": "Section 9 / 10 / 11",
    "user_case": "HERO PATH",
    "route": "/mission"
  },
  "layout": {
    "viewport": "1920x1200",
    "main_regions": [
      "risk identity",
      "countdown",
      "evidence feed",
      "approval/proof"
    ]
  },
  "style": {
    "visual_lane": "security mission-control cockpit",
    "primary_ui_library": "React Aria",
    "palette": [
      "charcoal",
      "red",
      "amber",
      "cyan",
      "green"
    ],
    "hero_composition": "mission-control containment clock"
  },
  "constraints": {
    "must_keep": [
      "visible countdown",
      "state transition",
      "proof artifact"
    ],
    "avoid": [
      "generic purple AI gradient",
      "static dashboard",
      "chat-first UI"
    ]
  }
}