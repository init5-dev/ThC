'use client'

import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(email, password)

    if (!email || !password) {
      throw new Error('Both fields are required.')
    }

    try {
      setLoading(true)

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      const data = await res.json()

      if (data.status !== 200) {
        throw new Error(data.message)
      }

      setCookie('access-token', data.accessToken, { maxAge: 60 * 60 * 24 });
      console.log('access-token:', data.accessToken )

      setError('')
      setLoading(false)

      setTimeout(() => {
        router.push('/editor')
      }, 1000)
    } catch (err: any) {
      setError(err.message || 'An error occurred during login')
      setLoading(false)
    }
  }

  return (
    <div className='w-full flex justify-center mt-12'>
      <form onSubmit={handleSubmit} className='join join-vertical gap-4'>
        <header className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold text-neutral-content text-center'>
            Login
          </h1>
        </header>

        <div className='join join-vertical gap-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='input input-primary'
            required
          />
        </div>

        <div className='join join-vertical gap-2'>
          <label htmlFor='password' className=''>
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='input input-secondary'
            required
          />
        </div>

        <div className='flex justify-center gap-2'>
          <button type='submit' className='btn btn-primary w-24 mt-2'>
            {loading ? (
              <span className='loading loading-spinner loading-xs'></span>
            ) : (
              'Login'
            )}
          </button>
          <button
            className='btn btn-secondary w-24 mt-2'
            onClick={() => router.push('/register')}
          >
            Register
          </button>
        </div>
        <div className='join join-vertical gap-2'>
          <p className='w-96 overflow-auto text-center h-40'>
            {error && <p className='text-red-500 my-4'>{error}</p>}
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
