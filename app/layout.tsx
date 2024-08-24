import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Theravada Cuba',
  description: 'Official website of the Theravada Cuba (ThC) Community'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-theme='forest'>
      <body>
        <main className='flex min-h-screen flex-col items-center justify-start md:p-4'>
          <Navbar />
          <div className='w-full items-start justify-center lg:flex lg:flex-col mt-8 px-6'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
