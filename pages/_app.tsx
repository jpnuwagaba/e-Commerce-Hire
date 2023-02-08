import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TopAppBar from '../components/TopAppBar'
import BottomAppBar from '../components/BottomAppBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='font-inter'>
      {/* <TopAppBar /> */}
      <Component {...pageProps} />
      <BottomAppBar />
    </div>
  )
}

export default MyApp
