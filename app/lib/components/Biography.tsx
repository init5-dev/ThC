'use client'

import MarkdownPreview from '@uiw/react-markdown-preview'
import { useEffect, useState } from 'react'
import SocialShare from './SocialShare'
import Image from 'next/image'

export interface BiographyProps {
  name: string
  role: string
  description: string
  profileImgUrl: string
  profileImgAlt: string
  content: string
}

const mdStyle = {
  backgroundColor: 'transparent',
  fontSize: 14,
  color: 'oklch(var(--nc))'
}

const Biography = ({
  name,
  role,
  description,
  profileImgUrl,
  profileImgAlt,
  content
}: BiographyProps) => {
  const [screenSize, setScreenSite] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setScreenSite({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  return (
    <article>
      <header className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold text-neutral-content text-center'>{name}</h1>
        <p className='text-neutral-content'>{role}</p>
      </header>
      <section className='mb-8'>
        <div className='flex flex-col lg:flex-row items-center lg:justify-center mb-8 lg:px-20'>
          <Image
            src={profileImgUrl}
            alt={profileImgAlt}
            height={240}
            width={180}
            className='my-8 rounded-full'
            style={{
              width: 160,
              height: 160
            }}
          />
          <div className='lg:ml-8 text-justify flex flex-col items-center justify-center'>
            <p className='text-sm text-neutral-content'>{description}</p>
          </div>
        </div>
        <MarkdownPreview
          source={content}
          className='lg:px-20 pb-4 text-justify'
          style={mdStyle}
        />
      </section>
      <SocialShare postUrl={window.location.href} />
    </article>
  )
}

export default Biography
