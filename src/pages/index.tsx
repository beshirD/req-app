import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
//
import TopBar from '../components/TopBar'
import SearchContainer from '../components/SearchContainer'
import FilterCards from '../components/filterComponents/FilterCards'
const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#05203C] w-full flex-col items-center mb-[100px] sm:mb-[200px]'>
        <TopBar />
        <SearchContainer />
      </div>
        <FilterCards />
    </div>
  )
}

export default IndexPage
