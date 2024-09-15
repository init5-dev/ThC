import Link from 'next/link'

export default function NotFound () {
  return (
    <div className='mt-32 w-full flex flex-col gap-4 justify-center items-center '>
      <div className='flex flex-col items-center justify-center mb-4'>
        <h1 className='text-6xl font-bold text-error'>404</h1>
        <p className='text-2xl text-error'>Página no encontrada</p>
      </div>
      <Link href='/' className='btn btn-warning'>
      ¡Ir a Inicio!
      </Link>
    </div>
  )
}
