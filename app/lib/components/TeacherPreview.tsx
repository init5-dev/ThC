export interface TeacherPreviewProps {
  teacherName: string
  shortBio: string
  imageSrc: string
}

const TeacherPreview = ({ teacherName, shortBio, imageSrc }: TeacherPreviewProps) => {
  return (
    <div className='hero bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={imageSrc} className='max-w-sm rounded-lg shadow-2xl' />
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
