import Navbar from './components/navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import './App.css';

function App() {  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
