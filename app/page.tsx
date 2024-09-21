import AboutUsPreview from '@/app/lib/components/AboutUsPreview'
import Carousel from '@/app/lib/components/Carousel'
// import DailyTeaching from '@/app/lib/components/DailyTeaching'
import TeachersPreview from '@/app/lib/components/TeachersPreview'
import RecentPosts from "./lib/components/RecentPosts"

export default function Home () {
  return (
    <>
      <Carousel />
      <AboutUsPreview />
      <TeachersPreview />
      <RecentPosts count={6} />
      {/* <DailyTeaching teaching='Lorem ipsum' author='Anónimo' /> */}
    </>
  )
}
