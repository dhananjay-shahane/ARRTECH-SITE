import { NextResponse } from 'next/server'
import { query, initDb } from '@/lib/db'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

let dbInitialized = false

const getNextMidnight = () => {
  const now = new Date()
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  return tomorrow // Returns a Date object for the next midnight
}

export async function POST(req: Request) {
  try {
    if (!dbInitialized) {
      await initDb()
      dbInitialized = true
    }

    const { username, password } = await req.json()

    // Get IP and User Agent for logging
    const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1'
    const userAgent = req.headers.get('user-agent') || 'Unknown'

    if (!username || !password) {
      return NextResponse.json({ error: 'Missing username or password' }, { status: 400 })
    }

    // Fetch user
    const userRes = await query('SELECT * FROM users WHERE username = $1', [username])
    const user = userRes.rows[0]

    if (!user) {
      // Log failed attempt for non-existent user
      await query(
        `INSERT INTO auth_audit_logs (username_input, event_type, ip_address, user_agent, message) 
         VALUES ($1, $2, $3, $4, $5)`,
        [username, 'LOGIN_FAILED', ipAddress, userAgent, 'User not found']
      )
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
    }

    // Check if account is locked
    if (!user.is_active || (user.locked_until && new Date(user.locked_until) > new Date())) {
       await query(
        `INSERT INTO auth_audit_logs (user_id, username_input, event_type, ip_address, user_agent, message) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [user.id, username, 'LOGIN_FAILED', ipAddress, userAgent, 'Account locked or inactive']
      )
      return NextResponse.json({ error: 'Account is locked or inactive' }, { status: 403 })
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password_hash)

    if (!isMatch) {
      // Increment failed attempts
      await query('UPDATE users SET failed_attempts = failed_attempts + 1 WHERE id = $1', [user.id])
      
      // Audit log
      await query(
        `INSERT INTO auth_audit_logs (user_id, username_input, event_type, ip_address, user_agent, message) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [user.id, username, 'LOGIN_FAILED', ipAddress, userAgent, 'Invalid password']
      )

      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
    }

    // Successful Login
    const sessionToken = crypto.randomBytes(32).toString('hex')
    const expiresAt = getNextMidnight()

    // Create session
    await query(
      `INSERT INTO auth_sessions (session_token, user_id, issued_at, expires_at, ip_address, user_agent) 
       VALUES ($1, $2, NOW(), $3, $4, $5)`,
      [sessionToken, user.id, expiresAt, ipAddress, userAgent]
    )

    // Reset failed attempts and update last_login_at
    await query(
      `UPDATE users SET failed_attempts = 0, last_login_at = NOW() WHERE id = $1`, 
      [user.id]
    )

    // Audit log success
    await query(
      `INSERT INTO auth_audit_logs (user_id, username_input, event_type, ip_address, user_agent, message) 
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [user.id, username, 'LOGIN_SUCCESS', ipAddress, userAgent, 'Successfully logged in']
    )

    return NextResponse.json({ 
      success: true, 
      message: 'login successful',
      token: sessionToken,
      userId: user.id,
      username: user.username,
      fullName: user.full_name
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
