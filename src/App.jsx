import React, { useState } from 'react'
import Home from './components/home'
import Project from './components/project'
import AdminDashboard from './components/AdminDashboard'
import Slideshow from './components/slider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavButton from './components/NavButton'
import AddCharity from './components/addCharit'

const App = () => {
  const [onDashboard,setDashboard] =useState(false);
  return (
    <div className='flex'>
      <BrowserRouter>
      {/* <NavButton/> */}
        <Routes>  
           <Route exact path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          
          {/* <Route path="/project" element={<Slideshow/>} />  */}
         {/* <Route path='/Dashboard' element={<AdminDashboard/>}/> */}
          {/* <Route path='/' element={<InputGroup8Presentation/>}/> */}
          
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
