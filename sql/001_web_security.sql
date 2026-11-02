-- Vivian Web 2.0: isolated session/rate-limit schema. Non-destructive.
-- Run in Supabase SQL Editor after reviewing. No existing tables are altered.
CREATE SCHEMA IF NOT EXISTS vivian_web;

CREATE TABLE IF NOT EXISTS vivian_web.sessions (
    session_hash text PRIMARY KEY CHECK (length(session_hash) = 64),
    kind text NOT NULL CHECK (kind IN ('pending','user')),
    oauth_state_hash text,
    discord_id bigint,
    username text,
    avatar text,
    expires_at timestamptz NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT session_kind_integrity CHECK (
      (kind='pending' AND oauth_state_hash IS NOT NULL AND discord_id IS NULL) OR
      (kind='user' AND oauth_state_hash IS NULL AND discord_id IS NOT NULL)
    )
);
CREATE INDEX IF NOT EXISTS vivian_web_sessions_expires_idx ON vivian_web.sessions (expires_at);

CREATE TABLE IF NOT EXISTS vivian_web.rate_windows (
    bucket text NOT NULL,
    key_hash text NOT NULL CHECK (length(key_hash) = 64),
    window_start bigint NOT NULL,
    hits integer NOT NULL DEFAULT 1 CHECK (hits > 0),
    PRIMARY KEY (bucket, key_hash, window_start)
);

-- No browser/anon/authenticated role needs direct table access.
REVOKE ALL ON SCHEMA vivian_web FROM PUBLIC, anon, authenticated;
REVOKE ALL ON ALL TABLES IN SCHEMA vivian_web FROM PUBLIC, anon, authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA vivian_web REVOKE ALL ON TABLES FROM PUBLIC, anon, authenticated;

ALTER TABLE vivian_web.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE vivian_web.rate_windows ENABLE ROW LEVEL SECURITY;
-- No policies: deny access through ordinary nonprivileged roles.
-- Server using postgres privileges may bypass RLS; use a restricted DB role
-- for production, and enforce ownership in Python. Never expose this schema
-- in Supabase Data API or put DATABASE_URL in a browser bundle.

-- Optional maintenance, execute manually or schedule in trusted service:
-- DELETE FROM vivian_web.sessions WHERE expires_at < now();
-- DELETE FROM vivian_web.rate_windows WHERE window_start < extract(epoch FROM now())::bigint/60 - 1440;
