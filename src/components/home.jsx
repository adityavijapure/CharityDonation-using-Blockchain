import React from 'react'
import Hero from './hero'
import Navbar from './navbar'
import CountPage from './CountPage'
import Footer from './footer'

const home = () => {
  return (
   <>
   <div>
   <Navbar/>
   <Hero/>
   <CountPage />
   <Footer/>
   </div>
   </>
  )
}

export default home