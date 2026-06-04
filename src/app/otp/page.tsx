import { redirect } from 'next/navigation'

export default function OtpRootRedirect() {
  redirect('/otp/v1/auth/login')
}
