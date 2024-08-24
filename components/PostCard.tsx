export interface PostCardProps {
  title: string
  description: string
  imageSrc: string
  alt: string
}

const PostCard = ({ title, description, imageSrc, alt }: PostCardProps) => {
  return (
    <div className='card bg-base-100 image-full w-96 shadow-xl'>
      <figure>
        <img src={imageSrc} alt={alt} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Leer!</button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
