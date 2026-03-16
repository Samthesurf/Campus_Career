# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Campus to Career 2.0 — a React (Vite) SPA with a Cloudflare Pages Functions backend backed by Cloudflare D1 (SQLite). See `package.json` for available scripts.

### Running services

Two servers are needed for full-stack local development:

| Service | Command | Port | Notes |
|---|---|---|---|
| **Frontend** (Vite) | `npm run dev` | 5173 | Proxies `/api` requests to the backend (see `vite.config.js`) |
| **Backend** (Wrangler) | `wrangler pages dev dist --d1=campustocareer_db --port 8788` | 8788 | Runs Cloudflare Pages Functions locally with a local D1 database. Reads secrets from `.dev.vars` |

Start the backend **before** the frontend so the proxy target is available.

### D1 database setup (local)

The `--d1=campustocareer_db` flag on `wrangler pages dev` creates a local D1 binding that is **separate** from the one defined in `wrangler.jsonc` (which has `"remote": true`). As a result, `wrangler d1 migrations apply campustocareer_db --local` applies to a different SQLite file.

To initialise the local database used by `wrangler pages dev --d1`:

1. Start the backend server once (it creates the empty SQLite file under `.wrangler/state/v3/d1/miniflare-D1DatabaseObject/`).
2. Trigger a request (e.g. `curl -s http://localhost:8788/api/register ...`) so the SQLite file is created.
3. Apply the schema directly with `sqlite3`:

```bash
DB_FILE=$(ls .wrangler/state/v3/d1/miniflare-D1DatabaseObject/*.sqlite 2>/dev/null | head -1)
sqlite3 "$DB_FILE" "CREATE TABLE IF NOT EXISTS registrations (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, full_name TEXT NOT NULL, college TEXT NOT NULL, department TEXT NOT NULL, level TEXT NOT NULL, interest TEXT NOT NULL, heard_from TEXT NOT NULL, created_at TEXT DEFAULT (datetime('now')), email_sent INTEGER DEFAULT 0);"
```

### Environment secrets

Create a `.dev.vars` file in the repo root (gitignored) with:

```
ADMIN_PASSWORD=<any-password-for-local-dev>
```

This is required for the admin login/verify API routes.

### Lint / Build

- **Lint:** `npm run lint` (ESLint 9, flat config). There are pre-existing lint errors in the codebase.
- **Build:** `npm run build` (runs SEO generation + Vite production build into `dist/`).

### Known issues

- `wrangler.jsonc` has `"remote": true` on the D1 binding, so running `wrangler pages dev dist` without `--d1` requires a `CLOUDFLARE_API_TOKEN`. Always use the `--d1=campustocareer_db` flag for local development.
- The `dist/_redirects` rule `/* /index.html 200` triggers an "infinite loop" warning from Wrangler — this is harmless and does not affect functionality.
