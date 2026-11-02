-- Vivian 3.2: encrypted OAuth guild token, read-only guild discovery.
-- Apply before deploying code. Back up DB first. Encrypted tokens are server-only.
ALTER TABLE vivian_web.sessions
    ADD COLUMN IF NOT EXISTS discord_access_token_enc text;
REVOKE ALL ON vivian_web.sessions FROM PUBLIC, anon, authenticated;
