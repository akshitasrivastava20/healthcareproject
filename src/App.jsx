

import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/services';
import Appointments from './pages/Appointments';
import Bookward from './pages/Bookward';
import Emergency from './pages/Emergency';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/Bookward" element={<Bookward/>}/>
        <Route path="/Emergency" element={<Emergency/>}/>
      </Routes>
    </Router>
  );
};

export default App;
