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

import AdvancedTech from "./components/OtherTech/AdvnacedTech";
import Frontend from "./components/frontend/Frontend";
import Angular from "./components/frontend/Angular";
import NextJs from "./components/frontend/NextJs";
import React from "./components/frontend/ReactJs";


// Microsoft
import ServicesHome from "./components/microsoft/services/ServicesHome";
import Services from "./components/microsoft/CRM/Services";
import PowerBi from "./components/microsoft/powerbi/PowerBi"


// ERPNext
import ERPNextConsultancy from "./components/ERPNext/ERPNextConsultancy";
import ERPimpPage from "./components/ERPNext/ERPimpPage";
import ERPfaq from "./components/ERPNext/ERPfaq";
              

import ERPServices from "./components/ERPNext/ERPServices";



import AboutUs from "./components/company/AboutUs";
import OurCoreValues from "./components/company/OurCoreValues";
import VisionAndMission from "./components/company/VisionAndMission";
import WhatMakesUsDifferent from "./components/company/WhatMakesUsDifferent";
import StaffingServices from "./components/company/staffingServices/StaffingServices";

import Backend from "./components/backend/BackendMain";
import JavaMain from "./components/backend/java/JavaMain";
import PhpMain from "./components/backend/php/PhpMain";
import PythonMain from "./components/backend/python/PythonMain";


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
          <Route path="/aboutus" element={<AboutUs />} />
         
        </Routes>
      </div>
    </Router>
      </div>
     
    </>
  )
}

export default App;
