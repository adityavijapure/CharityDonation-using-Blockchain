import React from 'react'
import Hero from './hero'
import Navbar from './navbar'
import CountPage from './CountPage'

const home = () => {
  return (
   <>
   <div>
   <Navbar/>
   <Hero/>
   <CountPage />
   </div>
   </>
  )
}

export default home