'use client'

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SocialShare from './SocialShare'
import Breadcrumb from './Breadcrumb'
import Image from 'next/image'

export interface ArticleProps {
  title: string
  metadescription: string
  author: string
  coverImgUrl: string
  coverImgAlt: string
  created: string
  updated: string
  content: string
  prevSlug: string | undefined
  nextSlug: string | undefined
}

const mdStyle = {
  backgroundColor: 'transparent',
  fontSize: 14,
  color: 'oklch(var(--nc))',
  table: {
    backgroundColor: 'transparent',
    borderCollapse: 'collapse'
  },
  th: {
    backgroundColor: 'transparent',
    border: '1px solid currentColor'
  },
  td: {
    backgroundColor: 'transparent',
    border: '1px solid currentColor'
  }
}

const Article = ({
  title,
  metadescription,
  author,
  coverImgUrl,
  coverImgAlt,
  created,
  updated,
  content,
  prevSlug,
  nextSlug
}: ArticleProps) => {
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
        <Breadcrumb pathname={pathname} />
        <h1 className='text-3xl font-bold text-center text-neutral-content'>
          {title}
        </h1>
        <p className='text-xl text-center text-neutral-content mb-8'>
          <strong>Por</strong> {author}
        </p>
        <meta name='description' content={metadescription} />
      </header>
      <SocialShare postUrl={currentUrl} />
      <section className='my-8'>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            a (props) {
              const { node, ...rest } = props
              return <a target='_blank' rel='noopener noreferrer' className="link link-primary" {...rest} />
            },

            p (props) {
              const { node, ...rest } = props
              return (
                <p
                  style={{
                    marginTop: 8,
                    marginBottom: 8,
                    textAlign: 'justify'
                  }}
                  {...rest}
                />
              )
            },

            h2 (props) {
              const { node, ...rest } = props
              return (
                <h2
                  style={{ fontSize: 24, marginTop: 24, fontWeight: 'bold' }}
                  {...rest}
                />
              )
            },
             
            img (props) {
              const {node, ...rest} = props
              
              return <img {...rest} className="w-full my-8" />
            }
          }}
        >
          {content}
        </Markdown>
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

export default Article
