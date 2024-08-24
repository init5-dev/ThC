import DailyTeaching from "@/components/DailyTeaching"
import RecentPosts from '@/components/RecentPosts'
import Image from 'next/image'

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
  },
]
export default function Home () {
  return (
    <>
      <RecentPosts posts={recentPosts}/>
      <DailyTeaching teaching="Lorem ipsum" author="Anónimo" />
    </>
  )
}
