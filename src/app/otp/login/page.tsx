import React from 'react'
import AuthForm from '@/components/ontime-publisher/AuthForm'

export const metadata = {
  title: 'Ontime Publisher - Login',
  description: 'Login to Ontime Publisher App',
}

export default function OtpLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Welcome to Ontime
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Publisher Dashboard Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <AuthForm mode="login" />
      </div>
    </div>
  )
}
