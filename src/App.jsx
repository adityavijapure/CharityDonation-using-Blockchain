import React, { useState } from 'react'
import Home from './components/home'
import Project from './components/project'
import AdminDashboard from './components/AdminDashboard'
import CountPage from './components/CountPage'
import LoginSing from './components/loginSing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/contact'
import Blog from './components/blog'
import ProjectList from './components/ProjectList'
import DonationTable from './components/DonationTable'  
import AddNewsBlog from './components/news'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>

        <Routes>  
           <Route exact path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path='/Countpage' element={<CountPage/>}/>
          <Route path="/Charity" element={<ProjectList/>} /> 
          <Route path="/DonationTable" element={<DonationTable/>} /> 
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          
          <Route path="/dashboard" element={<AdminDashboard/>} />
             
          <Route path='/login' element={<LoginSing/>}/>
          <Route path='/news' element={<AddNewsBlog/>}/>

        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
