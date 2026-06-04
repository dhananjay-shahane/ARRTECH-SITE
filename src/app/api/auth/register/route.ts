import { NextResponse } from 'next/server'
import { query, initDb } from '@/lib/db'
import bcrypt from 'bcryptjs'

// Simple flag to only init once per server start
let dbInitialized = false

export async function POST(req: Request) {
  try {
    if (!dbInitialized) {
      await initDb()
      dbInitialized = true
    }

    const { fullName, username, password } = await req.json()

    if (!fullName || !username || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await query('SELECT id FROM users WHERE username = $1', [username])
    if (existingUser.rowCount && existingUser.rowCount > 0) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 409 })
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    // Insert user
    const result = await query(
      `INSERT INTO users (username, password_hash, full_name, role) 
       VALUES ($1, $2, $3, $4) RETURNING id, username`,
      [username, passwordHash, fullName, 'user']
    )

    const newUser = result.rows[0]

    return NextResponse.json({ 
      success: true, 
      message: 'register successful',
      userId: newUser.id,
      username: newUser.username
    }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
