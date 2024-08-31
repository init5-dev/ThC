'use client'

import MarkdownPreview from '@uiw/react-markdown-preview'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SocialShare from './SocialShare'
import formatDate from '@/app/lib/actions/format-date'

export interface ArticleProps {
  title: string
  metadescription: string
  author: string
  created: string
  updated: string
  content: string
}

const mdStyle = {
  backgroundColor: 'transparent',
  fontSize: 14,
  color: 'oklch(var(--nc))',
}

const Article = ({
  title,
  metadescription,
  author,
  created,
  updated,
  content
}: ArticleProps) => {
  const pathname = usePathname()
  const [currentUrl, setCurrentURL] = useState('')

  useEffect(() => {
    setCurrentURL(new URL(pathname, window.location.origin).href)
  }, [])

  return (
    <article>
      <header>
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
        <MarkdownPreview source={content} className="md:px-20 pb-4 text-justify" style={mdStyle}/>
        <MarkdownPreview
          source={`Publicado el ${formatDate(
            created
          )}\n\nEditado el ${formatDate(updated)}`}
          className="md:px-20 pb-4 text-justify" 
          style={{
            ...mdStyle,
            textAlign: 'right'
          }}
        />
      </section>
      <SocialShare postUrl={currentUrl} />
    </article>
  )
}

export default Article
