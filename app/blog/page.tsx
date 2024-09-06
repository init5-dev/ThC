'use client'

import PostCard from '@/app/lib/components/PostCard'
import getPosts from '../lib/actions/get-posts'
import { usePathname } from 'next/navigation'
import path from "path"

const Blog = () => {
  const posts = getPosts()
  const pathname = usePathname()

  return (
    <div>
      <h1 className='text-white text-3xl w-full text-center my-8'>Blog</h1>
      <section className='flex flex-col items-center justify-center lg:grid lg:grid-cols-3 gap-2 lg:gap-8'>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.metadescription}
            imageSrc={post.coverImgUrl}
            alt={post.coverImgAlt}
            url={path.join(pathname, post.slug)}
          />
        ))}
      </section>
    </div>
  )
}

export default Blog
