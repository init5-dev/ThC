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
    <div className='card bg-base-100 image image-full w-full min-h-96 lg:h-[360px] shadow-xl md:transition-hover'>
      <figure>
        <Image src={imageSrc} alt={alt} width={640} height={480}/>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className="h-32 overflow-clip">{description}</p>
        <div className='card-actions justify-center md:justify-end'>
          <button className='btn btn-primary'><a href={url}>¡Leer!</a></button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
