import React from 'react'
import Home from './components/home'
import Project from './components/project'
import AdminDashboard from './components/AdminDashboard'
import Slideshow from './components/slider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   
      <BrowserRouter>
        <Routes>  
          <Route exact path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
          <Route path='/Dashboard' element={<AdminDashboard/>}/>
          <Route path="/project" element={<Slideshow/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
