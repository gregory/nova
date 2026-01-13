# Repository Guidelines

## Project Structure & Module Organization
The repo is a Yarn 4/Turbo monorepo. Shared drivers and clients live in `packages/`; the Billit HTTP client in `packages/billit-driver` is authored in TypeScript under `src/` and publishes compiled artifacts to `lib/`. Worker-facing services live in `services/`; `services/billing/src` contains the Cloudflare Worker entrypoint `index.js`, utility modules, and usecase folders, with worker tests under `services/billing/test`. Generated OpenAPI assets in `packages/billit-driver/src/client` are regenerated via `yarn workspace @whise/billit-driver generate` and should not be edited manually.

## Build, Test, and Development Commands
Run `yarn install` once to hydrate workspaces. `yarn dev` starts all workspace dev servers via Turbo; use `yarn start:billing` or `yarn workspace @whise/billing-svc dev` to focus on the billing worker. `yarn build` compiles every workspace, while `yarn workspace @whise/billit-driver build` emits the driver’s `lib/` output. `yarn test` executes the Vitest suite. `yarn lint` (non-fixing) plus `yarn format:check` run in CI; use `yarn lint:fix` and `yarn format` locally when you need to auto-resolve issues. Use `yarn clean` when you need a fresh dependency graph.

## Coding Style & Naming Conventions
Follow the shared ESLint config (`hermes-eslint` + `plugin:prettier/recommended`). Formatting is enforced by Prettier (2-space indentation, single quotes, 100-character width, semicolons). Stick to ES modules (.mjs/.ts) and default to TypeScript for reusable logic; keep generated files suffixed `.gen.ts`. Use descriptive folder names (`usecases/`, `client/`) and prefer camelCase for functions and lower-case dashed workspace names.

## Testing Guidelines
Vitest is the standard runner. Worker tests rely on `@cloudflare/vitest-pool-workers`; run them with `yarn workspace @whise/billing-svc test` to load the Wrangler config. Mirror the production file layout in `test/` and name specs `*.spec.js` or `*.spec.ts`. Add focused unit coverage for new endpoints and extend integration coverage whenever HTTP contracts change.

## Cloudflare Stack Practices
Default to Cloudflare-native primitives when adding features. Model shared state through Durable Objects, persist structured data with D1, and use KV or R2 only for blob-style storage. Route external HTTP calls through Workers, keep bindings documented in `wrangler.jsonc`, and surface any new environment requirements in PRs.

## Commit & Pull Request Guidelines
Commits should be concise, present-tense imperatives (`enhance billit client`), and scoped to one logical change. Re-run `yarn lint` and relevant `yarn workspace ... test` commands before pushing. Pull requests need a short narrative, linked issue IDs when available, and screenshots or curl examples for API-facing changes. Flag regenerated artifacts and note any migration or environment changes so reviewers can verify them quickly.

## Security & Configuration Tips
Respect the required Node >= 20.12.1 (`.nvmrc`/`.node-version`). Keep `.env` files local; the Billit driver reads secrets via `node --env-file .env`. When working on the Cloudflare service, use scoped API tokens and avoid committing Wrangler credentials.
