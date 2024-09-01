import teachers from "../mocks/contents/teachers.json"

const getTeacher = (slug: string) => {
  const teacher = teachers.find(teacher => teacher.slug === slug)

  return teacher
}

export default getTeacher