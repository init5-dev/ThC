import path from 'path'
import TeacherPreview from './TeacherPreview'
import teachers from '@/app/lib/mocks/contents/teachers.json'

const TeachersPreview = () => {
  return (
    <section className="mb-12">
      <h1 className='text-white text-3xl w-full text-center mb-8'>Maestros</h1>
      <div className='flex flex-col lg:flex-row gap-4'>
        {teachers.map((teacher, index) => (
          <div key={index} className={`animate-slide-in-from-left-${index}`}>
            <TeacherPreview
              teacherName={teacher.title}
              shortBio={teacher.metadescription}
              imageSrc={teacher.coverImgUrl}
              imageAlt={teacher.coverImgAlt}
              url={path.join('/maestros/', teacher.slug)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeachersPreview
