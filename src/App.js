// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css'; // Import the main CSS file

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Website/' element={<Home />} />
          <Route path='/Website/about' element={<About />} />
          <Route path='/Website/projects' element={<Projects />} />
        </Routes> 
      </Router>
    </div>
  )
}

export default App;