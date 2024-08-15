import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
     
        <Header />
        
        <CustomCursor />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <About/>
        <WorkExperience/>
        <Projects/>
        <Contact/> */}
        
        <Footer />
      
    </Router>
  );
}

export default App;
