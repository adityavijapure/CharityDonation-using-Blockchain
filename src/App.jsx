import Navbar from './components/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import Project from './components/project.jsx';
import Slideshow from './components/slider.jsx';
import './App.css';
import AdminDashboard from './components/AdminDashboard.jsx';

function App() {  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>  
          <Route exact path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
