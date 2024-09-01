import Image from "next/image"

export interface TeacherPreviewProps {
  teacherName: string
  shortBio: string
  imageSrc: string
  imageAlt: string
}

const TeacherPreview = ({ teacherName, shortBio, imageSrc, imageAlt }: TeacherPreviewProps) => {
  return (
    <div className='hero bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image src={imageSrc} alt={imageAlt} width={640} height={480} className='md:w-80 md:h-80 rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-2xl font-bold'>{teacherName}</h1>
          <p className='py-6'>{shortBio}</p>
          <button className='btn btn-primary'>¡Saber más!</button>
        </div>
      </div>
    </div>
  )
}

export default TeacherPreview
