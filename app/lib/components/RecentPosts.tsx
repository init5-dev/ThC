import path from "path"
import PostCard, { PostCardProps } from './PostCard'
import getPosts from "../actions/get-posts"


const RecentPosts = ({count} : {count: number}) => {
  const posts = getPosts().sort((p1, p2) => new Date(p1.updated).getDate() - new Date(p2.updated).getDate())
  const recentPosts = count < posts.length ? posts.slice(0, count) : posts

  return (
    <section className='w-full mb-12'>
      <h1 className='text-white text-3xl w-full text-center mb-8'>
        Artículos recientes
      </h1>
      <div className='flex flex-col gap-2 items-center justify-center lg:grid lg:grid-cols-3 lg:gap-8'>
        {recentPosts.map((post, index) => (
          <div key={index}>
            <PostCard
              title={post.title}
              description={post.metadescription}
              imageSrc={post.coverImgUrl}
              alt={post.coverImgAlt}
              url={path.join('/blog', post.slug)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentPosts
