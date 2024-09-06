import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/lib/components/Navbar'
import Footer from "@/app/lib/components/Footer"

export const metadata: Metadata = {
  title: 'Theravada Cuba',
  description: 'Sitio web oficial de la comunidad Theravada Cuba',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-theme='forest'>
      <body>
        <main className='flex flex-col justify-start'>
          <Navbar />
          <div className='w-full min-h-screen items-start justify-start lg:flex lg:flex-col lg:gap-8 lg:mt-24 px-1 lg:px-16'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
