import { Pool } from 'pg'

// Validate environment variables
if (!process.env.DATABASE_URL) {
  console.warn('DATABASE_URL is not set. Please set it in your .env file.')
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Add ssl configuration if needed for production (e.g. Neon, Supabase, RDS)
  // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

export async function query(text: string, params?: unknown[]) {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('executed query', { text, duration, rows: res.rowCount })
  return res
}

export async function getClient() {
  const client = await pool.connect()
  return client
}

export async function initDb() {
  const client = await getClient()
  try {
    await client.query('BEGIN')
    
    // 1) Users
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id                BIGSERIAL PRIMARY KEY,
        username          VARCHAR(64) UNIQUE NOT NULL,
        password_hash     TEXT NOT NULL,
        full_name         VARCHAR(120) NOT NULL,
        role              VARCHAR(40) NOT NULL DEFAULT 'user',
        is_active         BOOLEAN NOT NULL DEFAULT TRUE,
        failed_attempts   INT NOT NULL DEFAULT 0,
        locked_until      TIMESTAMPTZ NULL,
        last_login_at     TIMESTAMPTZ NULL,
        created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `)

    // 2) Sessions
    await client.query(`
      CREATE TABLE IF NOT EXISTS auth_sessions (
        id                BIGSERIAL PRIMARY KEY,
        session_token     VARCHAR(128) UNIQUE NOT NULL,
        user_id           BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        issued_at         TIMESTAMPTZ NOT NULL,
        expires_at        TIMESTAMPTZ NOT NULL,
        revoked_at        TIMESTAMPTZ NULL,
        revoke_reason     VARCHAR(120) NULL,
        ip_address        INET NULL,
        user_agent        TEXT NULL,
        created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `)

    // Session Indexes
    await client.query(`CREATE INDEX IF NOT EXISTS idx_auth_sessions_user_id ON auth_sessions(user_id)`)
    await client.query(`CREATE INDEX IF NOT EXISTS idx_auth_sessions_expires_at ON auth_sessions(expires_at)`)
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_auth_sessions_active 
      ON auth_sessions(user_id, expires_at) 
      WHERE revoked_at IS NULL
    `)

    // 3) Audit Logs
    await client.query(`
      CREATE TABLE IF NOT EXISTS auth_audit_logs (
        id                BIGSERIAL PRIMARY KEY,
        user_id           BIGINT NULL REFERENCES users(id) ON DELETE SET NULL,
        username_input    VARCHAR(64) NULL,
        event_type        VARCHAR(40) NOT NULL,
        ip_address        INET NULL,
        user_agent        TEXT NULL,
        message           TEXT NULL,
        created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `)

    // Audit Log Indexes
    await client.query(`CREATE INDEX IF NOT EXISTS idx_auth_audit_user_id ON auth_audit_logs(user_id)`)
    await client.query(`CREATE INDEX IF NOT EXISTS idx_auth_audit_created_at ON auth_audit_logs(created_at)`)

    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
}
