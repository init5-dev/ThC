import PostCard, { PostCardProps } from './PostCard'

export interface DailyTeachingProps {
  teaching: string
  author: string
}

const DailyTeaching = ({ teaching: text, author }: DailyTeachingProps) => {
  return (
    <section className='w-full mb-12'>
      <h1 className='text-white text-3xl w-full text-center my-8'>
        Enseñanza del día
      </h1>
      <blockquote className="w-full text-center">
        <p>"La mente lo es todo. En lo que piensas, te conviertes."</p>
        <footer>— Buda</footer>
      </blockquote>
    </section>
  )
}

export default DailyTeaching
