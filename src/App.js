import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import ContactUs from './components/contactUs'
import Projects from './components/Projects';
import About from './components/About';
import EdactionStudies from './components/EducationStudies'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about " element={<About />} />
        <Route path="/EdactionStudies " element={<EdactionStudies />} />
      </Routes>
    </Router>
  );
}

export default App;
