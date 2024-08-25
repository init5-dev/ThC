import PostCard, { PostCardProps } from './PostCard'

export interface RecentPostsProps {
  posts: PostCardProps[]
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section className='w-full'>
      <h1 className='text-white text-3xl w-full text-center my-8'>
        Artículos recientes
      </h1>
      <div className='flex flex-col gap-2 items-center justify-center md:grid md:grid-cols-3 md:gap-8'>
        {posts.map((post, index) => (
          <div>
            <PostCard
              title={post.title}
              description={post.description}
              imageSrc={post.imageSrc}
              alt={post.alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentPosts
