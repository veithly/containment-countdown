Verdict: BLOCKED

The content package is close to prize-competitive, but it is not ready to submit because the judge-facing public repo is out of sync with the uploaded final package and the public deck path appears broken. The uploaded deck exists and is strong; the public GitHub deck URL currently returns 404, and the public pitch directory listing does not show the expected deck folder. The uploaded manifest and submission copy both point judges to that missing deck path. 

media-manifest

 

SUBMISSION

 
GitHub
+2
+2

Top 5 risks / fixes, ordered by severity

Public deck gate is broken: fix before submit.
The uploaded package expects pitch/deck/containment-countdown-deck.pdf, and the uploaded submission copy lists that as the deck URL. But the public repo’s pitch directory does not show a deck folder, and both the GitHub blob/raw deck paths fetched as 404. This is a hard judge-access failure. Commit the deck PDF, deck source, speaker notes, and any required thumbnails/manifests; then verify the deck URL from a logged-out browser. 

media-manifest

 

SUBMISSION

 
GitHub
+2
+2

Public repo is stale relative to the uploaded G6 package.
The uploaded README includes a Pitch Deck badge/link and says the rendered deck lives under pitch/deck, while the current public raw README omits the pitch deck link from the visible badge/quick-link set and the public raw submission file omits the deck/architecture/G6-package sections that exist in the uploaded submission copy. Push the uploaded final README and SUBMISSION, or make the submission portal point to the actual final artifacts instead of the stale public repo. 

README

 

README

 

SUBMISSION

 
GitHub
+1

One live-app Splunk sentence is too strong.
Most surfaces correctly say “seeded Splunk-compatible telemetry,” “replay,” and “no live Splunk claim.” But the live architecture page says “Splunk is the evidence memory, decision context, and verification source” before clarifying that the build uses deterministic replay until credentials exist. Change that sentence to: “Seeded Splunk-compatible replay is the evidence memory, decision context, and verification source for this public build; live Splunk can replace replay when credentials are configured.” The assumption register already has the right limitation language, including no live credentials and no real IAM/firewall changes. 
Containment Countdown

Live Cloudflare/OpenAI claims need a public proof artifact, not only assertion.
The README, deck, and submission copy all claim live D1/KV/R2 persistence and a live OpenAI-compatible reasoning route. That is allowed under your stated boundary, but slide 5 currently asserts evidence such as persisted:true, “Five D1 tables receive the proof chain,” and “OpenAI-compatible API returns the SOC note” without a linked smoke artifact. Add a small artifacts/public-smoke.json or README section with redacted API responses, timestamp, route, persistence marker, R2 object key/pointer, and model/route metadata. Do not claim live Splunk in that proof. 

README

 

containment-countdown-deck

 

SUBMISSION

Slide 3 is good, but the PDF should not depend on embedded/local video behavior.
Slide 3 tells the right story: threshold crossed, approval, contained, verified. But it also says the local HTML deck plays the MP4 when an ignored recording file is present. That is implementation noise for a judge reading a PDF. Replace that footer with a clean clickable “Watch 61s demo” link and add two or three still frames if the PDF cannot play video. The uploaded manifest says the final video is 61.6 seconds with burned-in captions, but I could not independently verify YouTube playback because the online fetch was throttled from my side; manually verify it logged out before submit. 

containment-countdown-deck

 

media-manifest

 
無効なURL

Story consistency check

The uploaded package tells one coherent story. The README’s first meaningful line, the submission tagline, the speaker-note hook, the media manifest hero, live app hero, and deck all center on the same action: approving containment for risky identities after evidence crosses threshold. 

README

 

SUBMISSION

 

speaker-notes

 

media-manifest

 
Containment Countdown

Slide 1 is compelling for a first-pass judge: it leads with the operator outcome, shows “60s,” “1 click,” and “D1/KV/R2,” and maps the product spine as Signal -> Context, Decision -> Action, and Proof. Slide 3 is the right demo framing because it emphasizes state change rather than architecture. Slide 5 is the strongest trust slide because it says “Do not trust. Verify.” and includes the limitation that there is no live Splunk claim until credentials are configured. 

containment-countdown-deck

 

containment-countdown-deck

 

containment-countdown-deck

The public package is the problem. A judge following the public repo/deck links may not see the final deck or final submission copy. That is enough to block submission until pushed and rechecked. 
GitHub
+3
GitHub
+3
+3

What already works well

The concept is prize-competitive because it is not “AI summary of alerts.” It has an operator action, a human gate, an auditable state transition, and a proof artifact. The live app also keeps the seeded/replay boundary visible on the mission, dossier, replay, and architecture pages; the dossier shows verified_by=spl_replay, which helps avoid a false live-Splunk implication. 
Containment Countdown
+2
Containment Countdown
+2

The deck is visually strong and judge-oriented. Slide 1 lands the product in seconds. Slide 3 shows the action path. Slide 5 anticipates skepticism and gives surfaces to inspect. The boundary language in the uploaded README and submission copy is mostly clean: seeded Splunk-compatible telemetry, no live Splunk credentials, live Cloudflare/OpenAI-compatible integrations, and no real IAM/firewall changes in replay mode. 

README

 

SUBMISSION

Final submission checklist

Do not submit until these pass:

Public deck URL opens logged out and shows the 5-page final deck.

Public README includes the Pitch Deck link/badge and the same first meaningful hero as the uploaded package.

Public SUBMISSION includes deck, architecture diagram, integration boundary, judge test path, and G6 package links.

Live app flow works from /mission to approval to /dossier/demo, with seeded/replay language visible.

Replace or soften the live architecture sentence that starts “Splunk is…” so it cannot be read as live Splunk connectivity.

Add one public smoke/proof artifact for D1/KV/R2 and OpenAI-compatible route behavior, or soften those claims to match available evidence.

Open the YouTube demo logged out, confirm captions/audio, and confirm the first 5 seconds say the same hero story.

Re-click every submission link from an incognito window immediately before final upload.