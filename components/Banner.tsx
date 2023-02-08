import { useState, useEffect } from 'react';
import React from 'react'

const Banner = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const slides = [
    {
      title: 'Agriculture',
      action: 'https://google.com',
      image: '/assets/agric-tractor.jpg',
    },
    {
      title: 'Construction',
      action: 'https://google.com',
      image: '/assets/civil.jpg',
    },
    {
      title: 'Business',
      action: 'https://google.com',
      image: '/assets/computers.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(i => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[slideIndex]

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-center bg-no-repeat bg-cover rounded-lg h-[20vh] mt-4 p-4 relative">
        <div className="absolute bottom-4">
          <div className="text-2xl font-bold text-white">{currentSlide.title}</div>
          <div><button className='bg-Yellow rounded-lg py-1 px-2 font-bold text-sm mt-2'>Explore</button></div>
        </div>
      </div>
    </div>
  )
}

export default Banner