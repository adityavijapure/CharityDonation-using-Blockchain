import React, { useState } from 'react'
import Home from './components/home'
import Project from './components/project'
import AdminDashboard from './components/AdminDashboard'
import CountPage from './components/CountPage'
import LoginSing from './components/loginSing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateProfile from './components/UpdateProfile'
import AddCharity from './components/AddCharit'
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
          <Route path='/Countpage' element={<CountPage/>}/>
          <Route path="/Charit" element={<AddCharity/>} /> 
          <Route path='/Dashboard' element={<AdminDashboard/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/login' element={<LoginSing/>}/>
          
          
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
