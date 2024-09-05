'use client'

import getPost from '@/app/lib/actions/get-post'
import Alert from '@/app/lib/components/Alert'
import Article from '@/app/lib/components/Article'
import { usePathname } from 'next/navigation'
import { prevPostSlug, nextPostSlug } from "@/app/lib/actions/posts-navigation"
import getTeacher from "@/app/lib/actions/get-teacher"

const getSlug = (pathname: string) => {
  const urlParts = pathname.split('/')
  const slug = urlParts[urlParts.length - 1]

  return slug
}

const Post = () => {
  const pathname = usePathname()
  const slug = getSlug(pathname)
  const teacher = getTeacher(slug)

  return teacher ? (
    <Article
      title={teacher.title}
      metadescription={teacher.metadescription}
      author={undefined}
      coverImgUrl={teacher.coverImgUrl}
      coverImgAlt={teacher.coverImgAlt}
      created={teacher.created}
      updated={teacher.updated}
      content={teacher.content}
      prevSlug={undefined}
      nextSlug={undefined}
    />
  ) : (
    <Alert message='Post no encontrado. :(' />
  )
}

export default Post
