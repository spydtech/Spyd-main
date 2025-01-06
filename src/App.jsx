import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react"; 
// import Navbar from './components/Navbar'
import Home from "./components/Home";
import Seo from "./components/digitalmarketing/seo/SeoMain";
import Main from "./components/digitalmarketing/digitalmarketing/Main";
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
import Contactpage from "./components/ERPNext/Contactpage";

//Ecommerce
import Ecommerce_sol from "./components/ecommerce_solutions/Ecommerce_sol";
import EcommerceDeatils from "./components/ecommerce_solutions/EcommerceDeatils";
import MagentoDetails from "./components/ecommerce_solutions/MagentoDetails";
import MobileDetails from "./components/ecommerce_solutions/MobileDetails"



import AboutUs from "./components/company/AboutUs";
import OurCoreValues from "./components/company/OurCoreValues";
import VisionAndMission from "./components/company/VisionAndMission";
import WhatMakesUsDifferent from "./components/company/WhatMakesUsDifferent";
import StaffingServices from "./components/company/staffingServices/StaffingServices";

import Backend from "./components/backend/BackendMain";
import JavaMain from "./components/backend/java/JavaMain";
import PhpMain from "./components/backend/php/PhpMain";
import PythonMain from "./components/backend/python/PythonMain";
import Cyber from "./components/OtherTech/CyberSecurity/Cyber";
import TryADemo from "./components/TryAdemo/TryADemo";
import ContactUs from "./components/ContactUs/ContactUs";
import ApplyPage from "./components/Applypage/ApplyPage";
import DotNet from "./components/microsoft/Dotnet/DotNet";
import PortfolioPage from "./components/Portfolio/PortfolioMain";
import AndroidApplication from "./components/Mobile/AndroidDevelopment/AndroidApplication";
import HybridAppMain from "./components/Mobile/hybrid_app_development/HybridAppMain";
import IphoneApplication from "./components/Mobile/IphoneApplication";
import MobileApplication from "./components/Mobile/MobileApplication";
import RequestStatus from "./components/Admin/RequestStatus";
import PortfolioMain from "./components/Portfolio/PortfolioMain";
import LoginPage from "./components/Admin/LoginPage/LoginPage";
import JobRequestStatus from "./components/Admin/JobRequestStatus";
import ApproachRequest from "./components/Admin/ApproachRequest";
import Sidebar from "./components/Admin/Sidebar";







function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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


                  {/* Other Services */}
              <Route path="/services/othertech" element={<AdvancedTech />} />
              <Route path="/services/cloudtech" element={<CloudTech />} />
              <Route path="/services/testing" element={<Testing />} />

              <Route path="/services/azure" element={<CloudAzure />} />
              <Route path="/services/gcloude" element={<GCloud />} />
              <Route path="/services/ai" element={<Ai />} />
              <Route path="/services/machine-learning" element={<MlLearning />} />
              <Route path="/services/cybersecurity" element={<Cyber />} />

              <Route path="/services/ai&ml" element={<AiandMl />} />
              <Route path="/services/aws" element={<Aws />} />

              {/* ERP */}
              <Route path="/services/erp/consulting" element={<ERPNextConsultancy />} />
              <Route path="/services/erp/services" element={<ERPServices />} />
              <Route path="/services/erp/integrations" element={<ERPfaq />} />
              <Route path="/services/erp/implementation" element={<ERPimpPage />} />

              {/* E-commerce */}
              <Route path="/service/ecommerce" element={<Ecommerce_sol />} />
              <Route path="/service/ecommerce-solutions" element={<EcommerceDeatils />} />
              <Route path="/service/ecommerce-details/magento" element={<MagentoDetails />} />
              <Route path="/service/ecommerce-details/mobile" element={<MobileDetails />} />



              {/* Mobile App;ications */}
              <Route path="/services/android" element={<AndroidApplication />} />
              <Route path="/services/hybrid" element={<HybridAppMain />} />
              <Route path="/services/iphone" element={<IphoneApplication />} />
              <Route path="/services/mobile" element={<MobileApplication />} />



  



              {/* frontend */}
              <Route path="/services/frontend" element={<Frontend />} />
              <Route path="/services/angularjs" element={<Angular />} />
              <Route path="/services/nextjs" element={<NextJs />} />
              <Route path="/services/reactjs" element={<React />} />



              {/* Microsoft */}
              <Route path="/services/microsoft" element={<ServicesHome />} />
              <Route path="/services/dynamics-crm" element={<Services />} />
              <Route path="/services/powerbi" element={<PowerBi />} />
              <Route path="/services/dotnet" element={<DotNet />} />


               {/* DigitalMarketing */}
              <Route path="/services/digitalmarketing" element={<Main />} />
              <Route path="/services/digitalmarketing/Seo" element={<Seo />} />
              <Route path="/services/digitalmarketing/Ppc" element={<Ppc />} />
              <Route
                path="/services/digitalmarketing/Smm"
                element={<SocialMediaMarketing />}
              />
              <Route
                path="/services/digitalmarketing/cm"
                element={<ContentMarketing />}
              />
              <Route path="/services/digitalmarketing/em" element={<EmailMarketing />} />


      
   

               {/* Backend */}
              <Route path="/services/backend" element={<Backend />} />
              <Route path="/services/backend/javadevelopment" element={<JavaMain />} />
              <Route path="/services/backend/php" element={<PhpMain />} />
              <Route
                path="/services/backend/pythondevelopment"
                element={<PythonMain />}
              />

<Route path="/contactus" element={<ContactUs />} />
<Route path="/portfolio" element={<PortfolioMain />} />
<Route path="/apply" element={<ApplyPage />} />

<Route path="/careers" element={<Carrers />} />
              <Route path="/tryademo" element={<TryADemo />} />


              {/* Admin */}
              <Route path="/request" element={<JobRequestStatus />} />
              <Route path="/approach" element={<ApproachRequest />} />
              <Route path="/admin" element={<Sidebar />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    

  );
}

export default App;
