'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'

const AuthenticationWrapper = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const router = useRouter()

  const accessToken = getCookie('access-token')

  if (!accessToken) {
    router.push('/login')
  }

  return <>{children}</>
}

export default AuthenticationWrapper
