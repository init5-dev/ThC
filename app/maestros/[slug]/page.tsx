'use client'

import getPost from '@/app/lib/actions/get-post'
import Alert from '@/app/lib/components/Alert'
import Article from '@/app/lib/components/Article'
import { usePathname } from 'next/navigation'
import { prevPostSlug, nextPostSlug } from "@/app/lib/actions/posts-navigation"
import getTeacher from "@/app/lib/actions/get-teacher"
import Biography from "@/app/lib/components/Biography"

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
    <Biography
      name={teacher.title}
      role="Maestro"
      description={teacher.metadescription}
      profileImgUrl={teacher.coverImgUrl}
      profileImgAlt={teacher.coverImgAlt}
      content={teacher.content}
    />
  ) : (
    <Alert message='Post no encontrado. :(' />
  )
}

export default Post
