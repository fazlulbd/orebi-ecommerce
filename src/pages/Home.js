import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Arrival from '../components/Arrival'
import Bestseller from '../components/Bestseller'
import SubBanner from '../components/SubBanner'
import Offers from '../components/Offers'

const Home = () => {
  return (
    <>
      <Banner/>
      <Featured/>
      <Arrival/>
      <Bestseller/>
      <SubBanner/>
      <Offers/>
    </>
  )
}

export default Home
