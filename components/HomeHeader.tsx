import { useState, useEffect } from 'react';
import { RiSearch2Line } from 'react-icons/ri'
import React from 'react';

const HomeHeader = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 30) {
        setScrolled(true);
      }
      else {
        setScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className={`z-50 fixed bg-white w-full duration-500 ease-in-out ${scrolled ? 'py-2 shadow-lg' : 'pt-16 pb-2'}`}>
      <div className='w-[95%] mx-auto'>
        <div className={`flex  items-center transition duration-500 ease-in-out ${scrolled ? 'justify-between' : 'justify-around'}`}>
          <div className={`font-bold text-2xl`}>Hire</div>
          <div className={`font-bold text-2xl transition duration-500 ease-in-out ${scrolled ? '' : 'hidden'}`}><RiSearch2Line /></div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader