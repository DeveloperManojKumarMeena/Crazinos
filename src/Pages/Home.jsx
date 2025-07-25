import React from 'react'
import SectionOne from '../Home/SectionOne'
import SecTwo from '../Home/SecTwo'
import Canvash from '../Home/Canvash'
import SectionFour from '../Home/SectionFour'
import Skipe from '../Home/Skipe'
import Footer from '@/Home/Footer'
const Home = () => {

  console.log(SecTwo)
  return (
    <div>
      <SectionOne/>
      <SecTwo/>
      <Canvash/> 
      <SectionFour/>
      <Skipe/>
      <Footer/>
    </div>
  )
}

export default Home