import Image from 'next/image'

export interface TeacherPreviewProps {
  teacherName: string
  shortBio: string
  imageSrc: string
  imageAlt: string
  url: string
}

const TeacherPreview = ({
  teacherName,
  shortBio,
  imageSrc,
  imageAlt,
  url
}: TeacherPreviewProps) => {
  return (
    <div className='hero bg-base-200 lg:h-[360px] lg:transition-hover'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={160}
          height={160}
          className='lg:w-80 lg:h-80 rounded-lg shadow-2xl'
          style={{
            width: 160,
            height: 160
          }}
        />
        <div>
          <h1 className='text-2xl font-bold lg:my-3 text-center lg:text-left'>{teacherName}</h1>
          <p className='py-6 lg:h-52 text-justify'>{shortBio}</p>
          <div className='flex justify-center lg:justify-end'>
            <button className='btn btn-primary mx-4 mt-4'>
              <a href={url}>¡Saber más!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherPreview
