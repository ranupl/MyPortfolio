  import React from "react";
  import Navbar from "./Navbar";
  import About from '../src/components/About'; 
  import Project from '../src/components/Project'; 
  import Home from '../src/components/Home'; 
  import Skills from '../src/components/Skills'; 
  import { Routes, Route } from 'react-router-dom';

  const App = () => {
    return (
      <div className="mg-300">
          <Navbar />
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
    )
  }

  export default App;
