import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import QuizPage from './pages/QuizPage';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element = {<Services/>}/>
      <Route path="/contact" element = {<ContactUs/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/about' element = {<AboutUs/>}/>
      <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
};

export default App;
