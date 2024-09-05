import Image from 'next/image'

const Carousel = () => {
  return (
    <div className='carousel -mx-1 md:-mx-10 w-[100vw] h-96'>
      <div id='slide1' className='carousel-item relative w-full'>
        <Image
          src='/country-summer-empty-forest-road.jpg'
          alt='dssd'
          width={2048}
          height={2048}
          className='w-full object-cover'
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <Image
          src='/Buddha-1.jpg'
          alt='dssd'
          width={2048}
          height={2048}
          className='w-full object-cover'
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <Image
          src='/Theravada-monk.webp'
          alt='dssd'
          width={2048}
          height={2048}
          className='w-full object-cover'
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Carousel
