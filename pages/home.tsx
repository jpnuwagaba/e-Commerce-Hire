import Head from 'next/head'
import React from 'react'
import Banner from '../components/Banner'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'

const home = () => {
  return (
    <div className=''>
      <Head>
        <title>Home | HireIt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <div className='w-[95%] mx-auto'>
        <div className=' pt-28' />
        <SearchBar />
        <Banner />
        <div className='text-black'>
          home page
        </div>
      </div>
    </div>
  )
}

export default home