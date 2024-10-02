'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Register () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    console.log(email, password)

    try {
      setLoading(true)

      const response = await axios.post('/api/auth/register', {
          email,
          password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = response.data

      if (data.status !== 201) {
        throw new Error(data.message)
      }

      setSuccess(response.data.message)
      setEmail('')
      setPassword('')
      setLoading(false)

      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (error: any) {
      setError(error.message || 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <div className='w-full flex justify-center mt-12'>
      <form onSubmit={handleSubmit} className='join join-vertical gap-4'>
        <header className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold text-neutral-content text-center'>
            Register
          </h1>
        </header>

        <div className='join join-vertical gap-2'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            name='email'
            type='email'
            placeholder='Email'
            className='input input-bordered w-full'
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='join join-vertical gap-2'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            className='input input-bordered w-full'
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='btn btn-primary w-48 mt-2'>
            {loading ? (
              <span className='loading loading-spinner loading-xs'></span>
            ) : (
              'Register'
            )}
          </button>
        </div>
        <div className='join join-vertical gap-2'>
          <p className='w-96 overflow-auto text-center h-40'>
            {error && <p className='text-red-500 my-4'>{error}</p>}
            {success && <p className='text-green-500 my-4'>{success}</p>}
          </p>
        </div>
      </form>
    </div>
  )
}
