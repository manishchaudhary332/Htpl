import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Leadership from './pages/Leadership';
import Csr from './pages/Csr';
import OngoingProjects from './pages/OngoingProjects';
import CompletedProjects from './pages/CompletedProjects';
import Career from './pages/Career';
import Contact from './pages/Contact';


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/about-us/leadership" element={<Leadership />} />
      <Route path="/about-us/csr" element={<Csr />} />
      <Route path="/projects/ongoing" element={<OngoingProjects />} />
      <Route path="/projects/completed" element={<CompletedProjects />} />
      <Route path="/career/" element={<Career />} />
      <Route path="/contact-us/" element={<Contact />} />
    </Routes>
      <Footer/>
    </BrowserRouter>
    
    
  )
}

export default App