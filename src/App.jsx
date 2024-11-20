import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Navbar from './components/Navbar'
import Home from "./components/Home";
import Seo from "./components/digitalmarketing/seo/SeoMain";
import DigitalMarketing from "./components/digitalmarketing/digitalmarketing/Main";
import Ppc from "./components/digitalmarketing/ppc/PpcMain";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdvancedTech from "./components/OtherTech/AdvnacedTech";
import Aws from "./components/OtherTech/CloudTech/Aws";
import AiandMl from "./components/OtherTech/AiandML/AiandML";
import CloudTech from "./components/OtherTech/CloudTech/CloudTech";
import Testing from "./components/OtherTech/Testing/Testing";
import Navbar from "./components/Navbar";





function App() {
  return (
    <>
      
<div>
        <Router>
          
            <Navbar /> 

            <Routes>
              <Route path="/" element={<Home />} />

              {/* Other Technologies */}
              <Route path="/othertech" element={<AdvancedTech />} />
              <Route path="/aws" element={<Aws />} />
              <Route path="/ai&ml" element={<AiandMl/>} />
              <Route path="/cloudtech" element={<CloudTech />} />
              <Route path="/testing" element={<Testing />} />

              <Route path="/digitalmarketing" element={<DigitalMarketing />} />
              <Route path="/digitalmarketing/Seo" element={<Seo />} />
              <Route path="/digitalmarketing/Ppc" element={<Ppc />} />
            </Routes>
          
        </Router>
        </div>

      
    </>
  );
}

export default App;
