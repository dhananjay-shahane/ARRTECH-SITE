import { redirect } from 'next/navigation'

export default function OtpRootRedirect() {
  redirect('/otp/login')
}
