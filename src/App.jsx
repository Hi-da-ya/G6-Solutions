import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element = {<Services/>}/> 
      <Route path="/about" element = {<AboutUs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
