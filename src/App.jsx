import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element = {<Services/>}/>
      <Route path="/contact" element = {<ContactUs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
