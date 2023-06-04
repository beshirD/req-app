import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
//
import TopBar from '../components/TopBar'
import SearchContainer from '../components/SearchContainer'
import FilterCards from '../components/filterComponents/FilterCards'
import MainSidebar from '../components/MainSidebar'
const IndexPage: NextPage = () => {
  return (
    <div className='flex'>
      <MainSidebar />
      <div style={{ width: '80%' }} className={styles.container}>
        <Head>
          <title>Instant Rates</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='bg-[#05203C] w-full flex-col items-center mb-[100px] sm:mb-[150px]'>
          <TopBar />
          <SearchContainer />
        </div>

        <FilterCards />
      </div>
    </div>
  )
}

export default IndexPage
