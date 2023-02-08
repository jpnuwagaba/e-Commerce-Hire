import React from 'react'
import { useState, useEffect } from 'react'
import Router from 'next/router'

const Welcome = () => {

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowWelcome(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if(!showWelcome) {
    Router.push('/home')
  }

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-around bg-white z-50'>
      <div className='flex flex-col items-center'>
        <img src="/favicon.ico" alt="Welcome Logo" />
        <div className="font-bold text-xl">Welcome</div>
      </div>
    </div>
  )
}

export default Welcome