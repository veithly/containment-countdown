# Deployment

Containment Countdown deploys to Cloudflare Workers through OpenNext.

## Local build

```bash
npm install
npm run build
npm run cf:build
npm run cf:preview
```

## Cloudflare login

Wrangler is authenticated for the deployment account.

```bash
npx wrangler whoami
```

Do not print secret values in the terminal.

## Required server secrets

Configured for replay mode:

- `OPENAI_API_KEY`
- `OPENAI_BASE_URL`
- `OPENAI_DEFAULT_MODEL`

Optional live Splunk mode:

- `SPLUNK_HOST`
- `SPLUNK_TOKEN`
- `SPLUNK_INDEX`

The deployed product must keep saying "seeded Splunk-compatible telemetry" until the optional live Splunk values are configured and smoke-tested.

## Binding decision

The public deployment is live at:

- https://containment-countdown.veithly.workers.dev

The product backbone is deployed against these Cloudflare bindings:

- `DB`: Cloudflare D1 for approvals, evidence rows, verification runs, and dossier metadata.
- `REPLAY_STATE`: Workers KV for latest replay/session pointers.
- `DOSSIERS`: R2 for exported dossier JSON/PDF artifacts.

The D1 migration lives in `migrations/0001_containment_countdown.sql` and has been applied to the remote D1 database.

## Deploy

```bash
npm run cf:types
npx wrangler d1 migrations apply DB --remote
npm run cf:build
npm run cf:deploy
```

After deploy, run the deployed smoke checks:

```bash
DEPLOYED_URL=https://containment-countdown.veithly.workers.dev npx playwright test
node /Users/rick/Documents/MySkill/hackathonhunter-skill/scripts/visual_qa_scan.mjs /Users/rick/Documents/Project/Hackathon/Splunk --url https://containment-countdown.veithly.workers.dev --fail-on warn
```
