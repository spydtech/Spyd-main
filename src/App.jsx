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
import AdvancedTech from "./components/OtherTechnology/AdvancedTech";
import Navbar from "./components/Navbar";
import CloudTech from "./components/OtherTechnology/CloudTech/CloudTech";
import Testing from "./components/OtherTechnology/Testing/Testing";
import AiandMl from "./components/OtherTechnology/Ai&Ml/AiandMl";
import Aws from "./components/OtherTechnology/CloudTech/Aws";

import Carrers from "./components/carrers/CarrersMain";

function App() {
  return (
    <>
      <div>
        <Router>
          <div>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/othertech" element={<AdvancedTech />} />
              <Route path="/cloudtech" element={<CloudTech />} />
              <Route path="/testing" element={<Testing />} />
              <Route path="/ai&ml" element={<AiandMl />} />
              <Route path="/aws" element={<Aws />} />
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

              <Route path="/carrers" element={<Carrers />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
