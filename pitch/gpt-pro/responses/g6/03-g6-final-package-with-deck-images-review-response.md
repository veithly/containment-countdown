Verdict: BLOCKED

The core story is strong enough for PASS WITH FIXES, but the public package is not gate-ready because the declared deck path is currently not present publicly: the repo’s pitch folder does not show a deck directory, and the declared deck PDF path returns 404. That is a Devpost-blocking issue because judges may click the deck link from the submission and hit a dead end. 
GitHub
+1

Top risks/fixes in priority order
1. Push/sync the final public repo package before submitting

Your uploaded local package is more complete than the public repo. The uploaded README includes a Pitch Deck badge and quick link, but the public raw README currently shows live demo, demo video, Cloudflare, license, architecture, deployment, and root diagram links without the pitch deck link. 

README

 
GitHub

Fix this before Devpost:

Commit and push pitch/deck/containment-countdown-deck.pdf.

Commit and push the final README, SUBMISSION, speaker notes, media manifest, and deck assets.

Verify the public deck path opens in an incognito browser.

Verify the README rendered page shows the deck link in the first screen.

This is the only true blocker.

2. Carry the “seeded Splunk-compatible, not live Splunk” boundary into every judge-facing surface

The boundary is mostly handled well: the uploaded README and SUBMISSION clearly say the public deployment uses seeded Splunk-compatible telemetry and does not claim live Splunk connectivity because SPLUNK_HOST, SPLUNK_TOKEN, and SPLUNK_INDEX are absent. 

README

 

SUBMISSION

Keep that exact claim boundary everywhere. Do not say “live Splunk integration,” “Splunk-connected,” “Splunk-powered live telemetry,” or “production Splunk.” The strongest safe phrase is:

Seeded Splunk-compatible telemetry drives the replay. Live Splunk credentials can replace replay when configured.

The live app’s architecture page also correctly states deterministic replay until credentials are provided and says no real IAM or firewall changes occur. 
Containment Countdown

3. Remove judge-facing developer/internal language from slide 3

Slide 3 is compelling, but the bottom note about the local HTML deck playing the MP4 when the ignored recording file is present reads like an internal implementation note, not a finalist pitch asset. The slide already has the right sequence: “Threshold crossed -> approval -> contained -> verified,” and the uploaded speaker notes frame it as replayed Splunk-compatible evidence, operator approval, and dossier proof. 

slide-03

 

speaker-notes

Replace the local-file note with one judge-facing line:

Public video available from the Devpost video link; static deck includes the proof path.

4. Add “no real IAM/firewall action” to slide 5’s limitation box

Slide 5 is strong because it shows action, surface, and evidence. The risk is that “Approve containment” and “identity state changed from ACTIVE to CONTAINED” can sound like real production IAM containment unless the replay boundary is visible on the same slide. The live dossier says identity state changed from ACTIVE to CONTAINED, while the architecture page clarifies this is simulated/auditable and no real IAM or firewall changes occur. 
Containment Countdown
+1

Add one sentence to slide 5:

Replay containment changes the demo incident state only; no real IAM or firewall change occurs.

5. Manually verify the YouTube playback path

The uploaded media manifest says the final video is 61.6 seconds, 1920×1200, has burned-in captions, and points to the public video. 

media-manifest

 I could not independently fetch the YouTube page from here because the request was throttled, so do a final manual playback check before submission.

Story alignment check

Uploaded package: aligned. The README visible hero, submission tagline, speaker-note hook, media manifest hero, and deck slides all converge on the same story: evidence crosses a threshold, a human approves containment, and a dossier proves the action. 

README

 

SUBMISSION

 

speaker-notes

 

media-manifest

Public app: aligned. The live hero says “Approve containment for risky identities in 60 seconds after evidence crosses threshold,” uses the Signal -> Context -> Decision -> Action -> Proof spine, and labels the telemetry as seeded Splunk-compatible. 
Containment Countdown

Public repo: not fully aligned yet. The public README keeps the hero and boundary, but the deck link/package appears unsynced, and the declared deck PDF path is missing publicly. 
GitHub
+1

Slides 1, 3, and 5

Slide 1: compelling. It lands the hero in one glance, gives concrete numbers, and shows the proof chain: 60s window, one-click approval gate, D1/KV/R2 stored proof. 

slide-01

Slide 3: compelling with one fix. The state-change sequence is memorable and judge-friendly. Remove the local HTML/ignored recording note.

Slide 5: compelling with one fix. The “surface and evidence” table is exactly the right proof posture. Add the no-real-IAM/no-firewall replay limitation directly on the slide. 

slide-05

What already works

The product spine is clear and repeatable: Signal -> Context -> Decision -> Action -> Proof. The live app, mission page, decision chamber, dossier, README, and speaker notes all reinforce that same loop. 
Containment Countdown
+3
Containment Countdown
+3
Containment Countdown
+3

The Splunk boundary is honest. The package does not invent live Splunk evidence; it says seeded Splunk-compatible telemetry, optional live credentials, and deterministic replay. 

README

The proof posture is strong. The demo does not stop at a summary; it shows approval, state change, verification, and dossier export. The dossier page exposes evidence chain, approval record, execution log, SPL transcript, and verification result. 
Containment Countdown

Final submission checklist

Public deck path opens successfully.

Public README includes the deck link in the first screen.

Public SUBMISSION includes demo, video, deck, repo, architecture, integration boundary, and judge test path.

Slide 3 no longer contains local-file implementation language.

Slide 5 explicitly says no real IAM/firewall change occurs in replay mode.

Devpost tagline exactly matches: “Approve containment for risky identities in 60 seconds after evidence crosses threshold.”

Devpost description includes: seeded Splunk-compatible telemetry, human approval gate, Cloudflare D1/KV/R2 proof storage, OpenAI-compatible reasoning route, and no live Splunk claim.

YouTube video plays from start to finish with captions and audible narration.

Live app paths for mission, decision, dossier, architecture, and replay open cleanly.

Nowhere says live Splunk, autonomous containment, real IAM containment, real firewall change, or unqualified production security enforcement.