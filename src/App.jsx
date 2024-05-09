import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element = {<Services/>}/>
      <Route path="/contact" element = {<ContactUs/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      </Routes>
    </Router>
  );
};

export default App;
