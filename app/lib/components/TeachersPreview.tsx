import TeacherPreview from './TeacherPreview'
import teachers from "@/app/lib/mocks/contents/teachers.json"

const TeachersPreview = () => {
  return (
    <section>
      <h1 className='text-white text-3xl w-full text-center my-8'>Maestros</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        {teachers.map((teacher, index) => (
          <TeacherPreview
            key={index}
            teacherName={teacher.title}
            shortBio={teacher.metadescription}
            imageSrc={teacher.coverImgUrl}
            imageAlt={teacher.coverImgAlt}
          />
        ))}
      </div>
    </section>
  )
}

export default TeachersPreview
