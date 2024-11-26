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

import Navbar from "./components/Navbar"
import CloudAzure from "./components/OtherTech/CloudTech/CloudAzure";
import GCloud from "./components/OtherTech/CloudTech/GCloud";




import CloudTech from "./components/OtherTech/CloudTech/CloudTech";
import Testing from "./components/OtherTech/Testing/Testing";
import AiandMl from "./components/OtherTech/AiandML/AiandML";
import Ai from "./components/OtherTech/AiandML/Ai";

import MlLearning from "./components/OtherTech/AiandML/MlLearning";
import Aws from "./components/OtherTech/CloudTech/Aws";

import Carrers from "./components/carrers/CarrersMain";

function App() {
  return (




  
      <div>

        <Router>
          <div>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />

              {/* Company */}
              <Route path="/aboutus" element={<AboutUs/>} />
              <Route path="/ourcore-values" element={<OurCoreValues />} />
              <Route path="/vision-and-mission" element={<VisionAndMission />} />
              <Route path="/staffingservices" element={<StaffingServices />} />
              <Route path="/whatmakeus-different" element={<WhatMakesUsDifferent />} />



              <Route path="/othertech" element={<AdvancedTech />} />
              <Route path="/cloudtech" element={<CloudTech />} />
              <Route path="/testing" element={<Testing />} />

              <Route path="/azure" element={<CloudAzure />} />
              <Route path="/gcloude" element={<GCloud />} />
              <Route path="/ai" element={<Ai />} />
              <Route path="/ml" element={<MlLearning />} />


              
             


              <Route path="/ai&ml" element={<AiandMl />} />
              <Route path="/aws" element={<Aws />} />

              {/* ERP */}
              <Route path="/erpConsultancy" element={<ERPNextConsultancy />} />
              <Route path="/erpnext" element={<ERPServices />} />
              <Route path="/erp-third-pary" element={<ERPfaq />} />
              <Route path="/erp-implementation" element={<ERPimpPage />} />



              {/* frontend */}
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/angular" element={<Angular />} />
              <Route path="/nextjs" element={<NextJs />} />
              <Route path="/react" element={<React />} />



              {/* Microsoft */}
              <Route path="/microsoft" element={<ServicesHome />} />
              <Route path="/dynamics-crm" element={<Services />} />
              <Route path="/powerbi" element={<PowerBi />} />


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
              <Route path="/backend" element={<Backend />} />
              <Route path="/backend/javadevelopment" element={<JavaMain />} />
              <Route path="/backend/php" element={<PhpMain />} />
              <Route
                path="/backend/pythondevelopment"
                element={<PythonMain />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    

  );
}

export default App;
