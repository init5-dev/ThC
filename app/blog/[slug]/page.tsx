'use client'

import getPost from '@/app/lib/actions/get-post'
import Alert from '@/app/lib/components/Alert'
import Article from '@/app/lib/components/Article'
import { usePathname } from 'next/navigation'
import { prevPostSlug, nextPostSlug } from "@/app/lib/actions/posts-navigation"

const getSlug = (pathname: string) => {
  const urlParts = pathname.split('/')
  const slug = urlParts[urlParts.length - 1]

  return slug
}

const Post = () => {
  const pathname = usePathname()
  const slug = getSlug(pathname)
  const post = getPost(slug)

  return post ? (
    <Article
      title={post.title}
      metadescription={post.metadescription}
      author={post.author}
      coverImgUrl={post.coverImgUrl}
      coverImgAlt={post.coverImgAlt}
      created={post.created}
      updated={post.updated}
      content={post.content}
      prevSlug={prevPostSlug(post.slug)}
      nextSlug={nextPostSlug(post.slug)}
    />
  ) : (
    <Alert message='Post no encontrado. :(' />
  )
}

export default Post
