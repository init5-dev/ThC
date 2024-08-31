import TeacherPreview from './TeacherPreview'

const teachers = [
  {
    teacherName: 'Ayya Marajina',
    shortBio:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
  },
  {
    teacherName: 'Bhikkhu Mihita',
    shortBio:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
  }
]

const TeachersPreview = () => {
  return (
    <section>
      <h1 className='text-white text-3xl w-full text-center my-8'>Maestros</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        {teachers.map((teacher, index) => (
          <TeacherPreview
            key={index}
            teacherName={teacher.teacherName}
            shortBio={teacher.shortBio}
            imageSrc={teacher.imageSrc}
          />
        ))}
      </div>
    </section>
  )
}

export default TeachersPreview
