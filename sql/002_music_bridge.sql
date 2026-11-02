-- Run only after reviewing; requires 001_web_security.sql to be applied.
-- Independent bridge: no existing bot tables modified.
CREATE TABLE IF NOT EXISTS vivian_web.music_requests (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 guild_id bigint NOT NULL, discord_id bigint NOT NULL,
 action text NOT NULL CHECK (action IN ('play','pause','resume','skip','stop')),
 query text CHECK (length(query) <= 200),
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','working','done','rejected')),
 result text, created_at timestamptz NOT NULL DEFAULT now(),
 processed_at timestamptz
);
CREATE INDEX IF NOT EXISTS music_requests_pending_idx ON vivian_web.music_requests (created_at) WHERE status='pending';
CREATE INDEX IF NOT EXISTS music_requests_user_idx ON vivian_web.music_requests (discord_id, id DESC);
CREATE TABLE IF NOT EXISTS vivian_web.music_status (
 guild_id bigint PRIMARY KEY, title text, artist text, duration_seconds numeric,
 is_playing boolean NOT NULL DEFAULT false, is_paused boolean NOT NULL DEFAULT false,
 updated_at timestamptz NOT NULL DEFAULT now()
);
REVOKE ALL ON vivian_web.music_requests, vivian_web.music_status FROM PUBLIC, anon, authenticated;
ALTER TABLE vivian_web.music_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE vivian_web.music_status ENABLE ROW LEVEL SECURITY;
-- No public policies; only trusted backend credentials should be used.
