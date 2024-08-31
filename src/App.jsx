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
import UpdateProfile from './components/UpdateProfile'


const App = () => {
  const [onDashboard,setDashboard] =useState(false);
  return (
    <div className=''>
      <BrowserRouter>
      {/* <NavButton/> */}
        <Routes>  
           <Route exact path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path='/Countpage' element={<CountPage/>}/>
          <Route path="/Charit" element={<AddCharity/>} /> 
          <Route path='/Contact' element={<Contact/>}/>
          
          
          <Route path="/dashboard" element={<AdminDashboard setDashboard={setDashboard}/>} />
          <Route path='/blog' element={</>} />
          <Route path='/UpdateProfile' element={<UpdateProfile/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
