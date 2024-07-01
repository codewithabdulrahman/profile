import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
