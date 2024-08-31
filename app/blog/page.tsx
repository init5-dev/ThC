import PostCard from "@/app/lib/components/PostCard"

const posts = [
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  },
  {
    title: 'ssdd',
    description: 'dssds sd dsdsds sdd sd dsdsdsd sds  sdss sd sdsddssd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'dsds'
  }
]

const Blog = () => {
  return (
    <div>
      <h1 className='text-white text-3xl w-full text-center my-8'>Blog</h1>
      <section className='flex flex-col gap-2 items-center justify-center md:grid md:grid-cols-3 md:gap-8'>
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} description={post.description} imageSrc={post.imageSrc} alt={post.alt} />
        ))}
      </section>
    </div>
  )
}

export default Blog
