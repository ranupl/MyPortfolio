import React from "react";
import Navbar from "./Navbar";
import About from '../src/components/About'; 
import Resume from '../src/components/Resume'; 
import Project from '../src/components/Project'; 
import Home from '../src/components/Home'; 
import Skills from '../src/components/Skills'; 
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="row">
      <div className="col-3 nav-bg">
        <Navbar />
      </div>
      <div className="col-9">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>

    </div>
  )
}

export default App;
