'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const router = useRouter()

  useEffect(() => {
    // Check token expiration on mount
    const tokenData = localStorage.getItem('ontime_token')
    if (tokenData) {
      try {
        const { expiresAt } = JSON.parse(tokenData)
        if (Date.now() > expiresAt) {
          localStorage.removeItem('ontime_token')
        }
      } catch (e) {
        localStorage.removeItem('ontime_token')
      }
    }
    
    // Set up interval to check token expiration every minute
    const interval = setInterval(() => {
      const currentTokenData = localStorage.getItem('ontime_token')
      if (currentTokenData) {
        try {
          const { expiresAt } = JSON.parse(currentTokenData)
          if (Date.now() > expiresAt) {
            localStorage.removeItem('ontime_token')
            // Optionally force a state update or redirect
          }
        } catch (e) {
          localStorage.removeItem('ontime_token')
        }
      }
    }, 60000)
    
    return () => clearInterval(interval)
  }, [])

  const getNextMidnight = () => {
    const now = new Date()
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    return tomorrow.getTime() // Timestamp for next 00:00:00 (12am/midnight)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setIsLoading(true)

    try {
      if (!isLogin && password !== confirmPassword) {
        setError('Passwords do not match')
        setIsLoading(false)
        return
      }

      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register'
      const payload = isLogin 
        ? { username, password }
        : { fullName, username, password }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong')
      } else {
        // Success
        const expiresAt = getNextMidnight()
        // Generate a random mock token if none is returned
        const token = data.token || `mock_token_${Date.now()}`
        
        localStorage.setItem('ontime_token', JSON.stringify({ token, expiresAt, username }))
        
        setMessage(`${isLogin ? 'login' : 'register'} successful.\nPlease reopen ontime publisher app.`)
        
        // Reset form
        if (!isLogin) setIsLogin(true)
        setPassword('')
        setConfirmPassword('')
      }
    } catch (err) {
      setError('Network error, please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Ontime Publisher
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          {isLogin ? 'Log in to your account' : 'Create a new account'}
        </p>
      </div>

      {message && (
        <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 whitespace-pre-line rounded-r-md">
          {message}
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="John Doe"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="johndoe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="••••••••"
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input 
              type="password" 
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="••••••••"
            />
          </div>
        )}

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button 
          onClick={() => {
            setIsLogin(!isLogin)
            setError('')
            setMessage('')
          }}
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium focus:outline-none"
        >
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  )
}
