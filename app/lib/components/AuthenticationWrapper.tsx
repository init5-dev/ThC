'use client'

import { useRouter } from 'next/navigation'
import useAuth from '../hooks/useAuth'

const AuthenticationWrapper = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { authenticated } = useAuth()
  const router = useRouter()

  if (!authenticated) {
    router.push('/login')
  }

  return <>{children}</>
}

export default AuthenticationWrapper
