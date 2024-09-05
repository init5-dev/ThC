'use client'

import { useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  
  const slides = [
    {
      id: 'slide1',
      src: '/buddha-forest.jpg',
      alt: 'Estatua del Buddha en el bosque',
    },
    {
      id: 'slide2',
      src: '/habana-vieja.jpg',
      alt: 'La Habana',
    },
    {
      id: 'slide3',
      src: '/monk-1.jpg',
      alt: 'Monje theravada en vihara antigua',
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % slides.length) + 1);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 2 + slides.length) % slides.length + 1);
  };

  return (
    <div className='relative w-[100vw] h-96 overflow-hidden -mx-1 md:-mx-16 mb-12'>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${index + 1 === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            layout='fill'
            objectFit='cover'
            className='w-full h-full'
          />
        </div>
      ))}
      <button
        onClick={prevSlide}
        className='absolute left-5 top-1/2 transform -translate-y-1/2 btn btn-circle'
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-5 top-1/2 transform -translate-y-1/2 btn btn-circle'
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
