import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>HireIt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />      
    </div>
  )
}

export default Home
