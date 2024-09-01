'use client'

import PostCard from '@/app/lib/components/PostCard'
import getPosts from '../lib/actions/get-posts'
import { usePathname } from 'next/navigation'
import path from "path"

const Teachers = () => {
  const teachers = getPosts()
  const pathname = usePathname()

  return (
    <div>
      <h1 className='text-white text-3xl w-full text-center my-8'>Blog</h1>
      <section className='flex flex-col items-center justify-center md:grid md:grid-cols-3 gap-2 md:gap-8'>
        {teachers.map((teacher, index) => (
          <PostCard
            key={index}
            title={teacher.title}
            description={teacher.metadescription}
            imageSrc={teacher.coverImgUrl}
            alt={teacher.coverImgAlt}
            url={path.join(pathname, teacher.slug)}
          />
        ))}
      </section>
    </div>
  )
}

export default Teachers
