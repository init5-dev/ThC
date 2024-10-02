'use client'

import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const useAuth = () => {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const accessToken = getCookie('access-token')

    console.log('TOKEN IN USEAUTH:', accessToken)

    if (accessToken) {
      setAuthenticated(true)
      router.push('/login')
    }
    
  }, [])
  
  return {authenticated}
}

export default useAuth