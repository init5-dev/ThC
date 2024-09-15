'use client'

export default function Error () {
  return (
    <div className='mt-32 w-full flex flex-col gap-4 justify-center items-center '>
      <div className='flex flex-col items-center justify-center mb-4'>
        <h1 className='text-6xl font-bold text-error'>Error</h1>
        <p className='text-2xl text-error'>¡Nos disculpamos por las molestias!</p>
      </div>
    </div>
  )
}
