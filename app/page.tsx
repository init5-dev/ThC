import AboutUsPreview from "@/app/lib/components/AboutUsPreview"
import Carousel from '@/app/lib/components/Carousel'
import DailyTeaching from '@/app/lib/components/DailyTeaching'
import RecentPosts from '@/app/lib/components/RecentPosts'
import TeachersPreview from "@/app/lib/components/TeachersPreview"

const recentPosts = [
  {
    title: 'post',
    description: 'sdsddsfsd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'ddsfdsfsdsdf'
  },
  {
    title: 'post',
    description: 'sdsddsfsd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'ddsfdsfsdsdf'
  },
  {
    title: 'post',
    description: 'sdsddsfsd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'ddsfdsfsdsdf'
  },
  {
    title: 'post',
    description: 'sdsddsfsd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'ddsfdsfsdsdf'
  },
  {
    title: 'post',
    description: 'sdsddsfsd',
    imageSrc:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    alt: 'ddsfdsfsdsdf'
  }
]
export default function Home () {
  return (
    <>
      <Carousel />
      <AboutUsPreview />
      <TeachersPreview />
      <RecentPosts posts={recentPosts} />
      <DailyTeaching teaching='Lorem ipsum' author='Anónimo' />
    </>
  )
}
