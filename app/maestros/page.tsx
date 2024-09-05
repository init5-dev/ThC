'use client'

import PostCard from '@/app/lib/components/PostCard'
import getPosts from '../lib/actions/get-posts'
import { usePathname } from 'next/navigation'
import path from 'path'
import TeachersPreview from '../lib/components/TeachersPreview'

const Teachers = () => {
  const teachers = getPosts()
  const pathname = usePathname()

  return <TeachersPreview />
}

export default Teachers
