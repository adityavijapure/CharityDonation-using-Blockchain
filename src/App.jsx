import React, { useState } from 'react'
import Home from './components/home'
import Project from './components/project'
import AdminDashboard from './components/AdminDashboard'
import CountPage from './components/CountPage'
import Slideshow from './components/slider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavButton from './components/NavButton'
import AddCharity from './components/addCharit'
import Contact from './components/contact'

const App = () => {
  const [onDashboard,setDashboard] =useState(false);
  return (
    <div className=''>
      <BrowserRouter>
      {/* <NavButton/> */}
        <Routes>  
           <Route exact path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/dashboard" element={<AdminDashboard setDashboard={setDashboard}/>} />
          <Route path='/charit' element={<AddCharity/>} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
