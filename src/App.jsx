import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Navbar from './components/Navbar'
import Home from "./components/Home";
import Seo from "./components/digitalmarketing/seo/SeoMain";
import DigitalMarketing from "./components/digitalmarketing/digitalmarketing/Main";
import Ppc from "./components/digitalmarketing/ppc/PpcMain";
import SocialMediaMarketing from "./components/digitalmarketing/socialmediamarketing/SmmMain";
import ContentMarketing from "./components/digitalmarketing/contentmarketing/CmMain";
import EmailMarketing from "./components/digitalmarketing/emailmarketing/EmMain";

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
              <Route
                path="/digitalmarketing/Smm"
                element={<SocialMediaMarketing />}
              />
              <Route
                path="/digitalmarketing/cm"
                element={<ContentMarketing />}
              />
              <Route path="/digitalmarketing/em" element={<EmailMarketing />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
