'use client'

import MarkdownPreview from '@uiw/react-markdown-preview'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SocialShare from './SocialShare'
import { formatDate } from '../actions/string-manipulation'
import Breadcrumb from './Breadcrumb'
import Image from 'next/image'
import PostCard from './PostCard'

export interface BiographyProps {
  title: string
  metadescription: string
  author: string
  coverImgUrl: string
  coverImgAlt: string
  content: string
}

const mdStyle = {
  backgroundColor: 'transparent',
  fontSize: 14,
  color: 'oklch(var(--nc))'
}

const Biography = ({
  title,
  metadescription,
  author,
  coverImgUrl,
  coverImgAlt,
  content
}: BiographyProps) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')
  const [currentBaseUrl, setCurrentBaseUrl] = useState('')
  const [screenSize, setScreenSite] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
    setScreenSite({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [pathname])

  useEffect(() => {
    const urlParts = currentUrl.split('/')
    const baseUrl = urlParts.slice(0, urlParts.length - 1).join('/') + '/'
    setCurrentBaseUrl(baseUrl)
  }, [currentUrl])

  return (
    <article>
      <header className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-center text-neutral-content'>
          {title}
        </h1>
        <p className='text-xl text-center text-neutral-content mb-8'>
          <strong>Por</strong> {author}
        </p>
        <meta name='description' content={metadescription} />
      </header>
      <SocialShare postUrl={currentUrl} />
      <Image
        src={coverImgUrl}
        alt={coverImgAlt}
        height={screenSize.height}
        width={screenSize.width}
        className='my-8 md:px-20'
      />
      <section className='my-8'>
        <MarkdownPreview
          source={content}
          className='md:px-20 pb-4 text-justify'
          style={mdStyle}
        />
        <MarkdownPreview
          source={`Publicado el ${formatDate(
            created
          )}\n\nEditado el ${formatDate(updated)}`}
          className='md:px-20 pb-4 text-justify'
          style={{
            ...mdStyle,
            textAlign: 'right'
          }}
        />
      </section>
      <SocialShare postUrl={currentUrl} />
      <div className='flex gap-4 my-8 justify-center'>
        {prevSlug && (
          <button className='btn btn-ghost'>
            <a href={currentBaseUrl + prevSlug}>{'<'} Anterior </a>
          </button>
        )}
        {nextSlug && (
          <button className='btn btn-ghost'>
            <a href={currentBaseUrl + nextSlug}>Siguiente {'>'}</a>
          </button>
        )}
      </div>
    </article>
  )
}

export default Biography
