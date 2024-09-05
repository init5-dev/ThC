import Image from 'next/image'
import React from 'react'
import Team from "../lib/components/Team"
import History from "../lib/components/History"
import Mission from "../lib/components/Mission"

const AboutUs = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen  bg-base-200 p-8 text-sm text-justify'>
      <div>
        <h1 className='text-4xl font-bold text-center mb-8'>Nosotros</h1>
        <History />
        <Team />
        <Mission />
      </div>
    </div>
  )
}

export default AboutUs
