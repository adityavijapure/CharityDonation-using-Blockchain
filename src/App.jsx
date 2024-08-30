import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
