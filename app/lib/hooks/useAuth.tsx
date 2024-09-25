'use client'

import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    setAuthenticated(!!getCookie('access-token'))
  }, [])
  
  return {authenticated}
}

export default useAuth