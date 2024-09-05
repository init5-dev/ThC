import AboutUsPreview from '@/app/lib/components/AboutUsPreview'
import Carousel from '@/app/lib/components/Carousel'
import DailyTeaching from '@/app/lib/components/DailyTeaching'
import RecentPosts from '@/app/lib/components/RecentPosts'
import TeachersPreview from '@/app/lib/components/TeachersPreview'
import Mission from "./lib/components/Mission"

export default function Home () {
  return (
    <>
      <Carousel />
      <AboutUsPreview />
      <TeachersPreview />
      <RecentPosts count={6} />
      <DailyTeaching teaching='Lorem ipsum' author='Anónimo' />
    </>
  )
}
