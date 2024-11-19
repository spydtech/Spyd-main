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

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            {/* <Navbar />  */}

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/digitalmarketing" element={<DigitalMarketing />} />
              <Route path="/digitalmarketing/Seo" element={<Seo />} />
              <Route path="/digitalmarketing/Ppc" element={<Ppc />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
