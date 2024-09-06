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
    <div className='card bg-base-100 image image-full w-full md:h-64 md:mb-10 lg:mb-4 lg:h-[320px] shadow-xl lg:transition-hover'>
      <figure>
        <Image src={imageSrc} alt={alt} width={640} height={480}/>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className="h-[120px] break-words line-clamp-5 text-justify">{description}</p>
        <div className='card-actions justify-center lg:justify-end mt-4'>
          <button className='btn btn-primary'><a href={url}>¡Leer!</a></button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
