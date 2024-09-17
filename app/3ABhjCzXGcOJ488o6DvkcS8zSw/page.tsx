'use client'

import { useState, useEffect } from 'react'

const Page = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const sendPostRequest = async () => {
      try {
        const res = await fetch('/api/v1/3ABhjCzXGcOJ488o6DvkcS8zSw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: 'Hello, Dolly!' })
        })

        if (!res.ok) {
          throw new Error('Failed to fetch')
        }

        const result = await res.json()
        setData(result)
      } catch (err) {
        setError((err as Error).message)
      }
    }

    sendPostRequest()
  }, [])

  return (
    <p>{error ? 'ERROR!' : JSON.stringify(data)}</p>
  )
}

export default Page
