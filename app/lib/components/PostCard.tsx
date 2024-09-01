import Image from "next/image"

export interface PostCardProps {
  title: string
  description: string
  imageSrc: string
  alt: string
  url: string
}

const PostCard = ({ title, description, imageSrc, alt, url }: PostCardProps) => {
  return (
    <div className='card bg-base-100 image image-full w-full min-h-64 md:h-64 shadow-xl'>
      <figure>
        <Image src={imageSrc} alt={alt} width={640} height={480}/>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'><a href={url}>¡Leer!</a></button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
