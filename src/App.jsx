import { useState, useEffect, useRef } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useNavigate, 
  useLocation, 
  Link 
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import slide components from first app
import Third from "./components/Portfolio/slides/Third";
import Five from "./components/Portfolio/slides/five";
import Eleven from "./components/Portfolio/slides/Eleven";

// Import pages from first app
import { pages } from "./components/Portfolio/pages";
import logo from "./assets/images/image.png";

// Import components from second app
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import phome from "./components/Portfolio/Home/Home";
import Seo from "./components/digitalmarketing/seo/SeoMain";
import Main from "./components/digitalmarketing/digitalmarketing/Main";
import Ppc from "./components/digitalmarketing/ppc/PpcMain";
import SocialMediaMarketing from "./components/digitalmarketing/socialmediamarketing/SmmMain";
import ContentMarketing from "./components/digitalmarketing/contentmarketing/CmMain";
import EmailMarketing from "./components/digitalmarketing/emailmarketing/EmMain";
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
import ServicesHome from "./components/microsoft/services/ServicesHome";
import Services from "./components/microsoft/CRM/Services";
import PowerBi from "./components/microsoft/powerbi/PowerBi";
import ERPNextConsultancy from "./components/ERPNext/ERPNextConsultancy";
import ERPimpPage from "./components/ERPNext/ERPimpPage";
import ERPfaq from "./components/ERPNext/ERPfaq";
import ERPServices from "./components/ERPNext/ERPServices";
import Contactpage from "./components/ERPNext/Contactpage";
import Ecommerce_sol from "./components/ecommerce_solutions/Ecommerce_sol";
import EcommerceDeatils from "./components/ecommerce_solutions/EcommerceDeatils";
import MagentoDetails from "./components/ecommerce_solutions/MagentoDetails";
import MobileDetails from "./components/ecommerce_solutions/MobileDetails";
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

import AndroidApplication from "./components/Mobile/AndroidDevelopment/AndroidApplication";
import HybridAppMain from "./components/Mobile/hybrid_app_development/HybridAppMain";
import IphoneApplication from "./components/Mobile/IphoneApplication";
import MobileApplication from "./components/Mobile/MobileApplication";
import RequestStatus from "./components/Admin/RequestStatus";
import LoginPage from "./components/Admin/LoginPage/LoginPage";
import JobRequestStatus from "./components/Admin/JobRequestStatus";
import ApproachRequest from "./components/Admin/ApproachRequest";
import Sidebar from "./components/Admin/Sidebar";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div>
        {/* Navbar from second app */}
        <Navbar />
        
        {/* Main content with both slide navigation and regular routes */}
        <MainContent />
      </div>
    </Router>
  );
}

function MainContent() {
  const navigate = useNavigate();
  const locationRaw = useLocation();
  const location = {
    pathname:
      locationRaw.pathname === "/"
        ? "/"
        : locationRaw.pathname.replace(/\/+$/, ""),
  };

  const [showOverlay, setShowOverlay] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [showNav, setShowNav] = useState(true);

  // slide indexes
  const [currentfourIndex, setCurrentfourIndex] = useState(0);
  const [currentnineIndex, setCurrentnineIndex] = useState(0);
  const [currenttenIndex, setCurrenttenIndex] = useState(0);

  const currentPageIndex = pages.findIndex((p) => p.path === location.pathname);

  // slide counts
  const totalfourSlides = 8;
  const totalnineSlides = 9;
  const totaltenSlides = 9;

  const visibleSlidesCount = 1;
  const maxfourIndex = totalfourSlides - visibleSlidesCount;
  const maxnineIndex = totalnineSlides - visibleSlidesCount;
  const maxtenIndex = totaltenSlides - visibleSlidesCount;

  const hide = ["/","/thankyou"];
  const hidenav=["/"];

  // ref for nav container
  const navRef = useRef(null);
  let hideTimer = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // show nav for 3s initially
    hideTimer.current = setTimeout(() => setShowNav(false), 2000);

    // Scroll listener for logo visibility
    const handleScroll = () => {
      setShowLogo(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimer.current);
    };
  }, []);

  // when hover on nav area → keep it visible
  const handleMouseEnter = () => {
    setShowNav(true);
    clearTimeout(hideTimer.current);
  };

  // when leave nav area → hide after 3s
  const handleMouseLeave = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowNav(false), 2000);
  };

  const navigateWithEffect = (path) => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      navigate(path);
      if (path === "/four") setCurrentfourIndex(0);
      if (path === "/nine") setCurrentnineIndex(0);
      if (path === "/ten") setCurrenttenIndex(0);
    }, 1900);
  };

  const goPrev = () => {
    if (location.pathname === "/four") {
      if (currentfourIndex > 0) {
        setCurrentfourIndex((s) => s - 1);
      } else if (currentPageIndex > 0) {
        navigateWithEffect(pages[currentPageIndex - 1].path);
      }
    } else if (location.pathname === "/ten") {
      if (currentnineIndex > 0) {
        setCurrentnineIndex((s) => s - 1);
      } else if (currentPageIndex > 0) {
        navigateWithEffect(pages[currentPageIndex - 1].path);
      }
    } else if (location.pathname === "/sixth") {
      if (currenttenIndex > 0) {
        setCurrenttenIndex((s) => s - 1);
      } else if (currentPageIndex > 0) {
        navigateWithEffect(pages[currentPageIndex - 1].path);
      }
    } else if (currentPageIndex > 0) {
      navigateWithEffect(pages[currentPageIndex - 1].path);
    }
  };

  const goNext = () => {
    if (location.pathname === "/four") {
      if (currentfourIndex < maxfourIndex) {
        setCurrentfourIndex((s) => s + 1);
      } else if (currentPageIndex < pages.length - 1) {
        navigateWithEffect(pages[currentPageIndex + 1].path);
      }
    } else if (location.pathname === "/ten") {
      if (currentnineIndex < maxnineIndex) {
        setCurrentnineIndex((s) => s + 1);
      } else if (currentPageIndex < pages.length - 1) {
        navigateWithEffect(pages[currentPageIndex + 1].path);
      }
    } else if (location.pathname === "/sixth") {
      if (currenttenIndex < maxtenIndex) {
        setCurrenttenIndex((s) => s + 1);
      } else if (currentPageIndex < pages.length - 1) {
        navigateWithEffect(pages[currentPageIndex + 1].path);
      }
    } else if (currentPageIndex < pages.length - 1) {
      navigateWithEffect(pages[currentPageIndex + 1].path);
    }
  };

  // Check if current route is from slide navigation or regular website
  const isSlideRoute = pages.some(p => p.path === location.pathname);

  return (
    <>
      <main className="relative content-wrapper">
        <Routes>
          {/* Routes from first app (slide presentation) */}
          {pages.map((p, i) => {
            if (p.path === "/four") {
              return (
                <Route
                  key={`slide-${i}`}
                  path={p.path}
                  element={
                    <Third
                      startIndex={currentfourIndex}
                      onSlideChange={setCurrentfourIndex}
                    />
                  }
                />
              );
            } else if (p.path === "/ten") {
              return (
                <Route
                  key={`slide-${i}`}
                  path={p.path}
                  element={
                    <Five
                      startIndex={currentnineIndex}
                      onSlideChange={setCurrentnineIndex}
                    />
                  }
                />
              );
            } else if (p.path === "/sixth") {
              return (
                <Route
                  key={`slide-${i}`}
                  path={p.path}
                  element={
                    <Eleven
                      startIndex={currenttenIndex}
                      onSlideChange={setCurrenttenIndex}
                    />
                  }
                />
              );
            } else if (p.component) {
              const PageComponent = p.component;
              return <Route key={`slide-${i}`} path={p.path} element={<PageComponent />} />;
            }
            return null;
          })}

          {/* Routes from second app (regular website) */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<phome />} />
          
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

          {/* Mobile Applications */}
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
          <Route path="/services/digitalmarketing/Smm" element={<SocialMediaMarketing />} />
          <Route path="/services/digitalmarketing/cm" element={<ContentMarketing />} />
          <Route path="/services/digitalmarketing/em" element={<EmailMarketing />} />

          {/* Backend */}
          <Route path="/services/backend" element={<Backend />} />
          <Route path="/services/backend/javadevelopment" element={<JavaMain />} />
          <Route path="/services/backend/php" element={<PhpMain />} />
          <Route path="/services/backend/pythondevelopment" element={<PythonMain />} />

          <Route path="/contactus" element={<ContactUs />} />
          
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/careers" element={<Carrers />} />
          <Route path="/tryademo" element={<TryADemo />} />

          {/* Admin */}
          <Route path="/request" element={<JobRequestStatus />} />
          <Route path="/approach" element={<ApproachRequest />} />
          <Route path="/admin" element={<Sidebar />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {showOverlay && <div className="diagonal-overlay"></div>}
      </main>

      {/* App-level nav arrows - Only show for slide routes */}
      {isSlideRoute && !hidenav.includes(location.pathname) && (
        <div
          ref={navRef}
          className={`fixed z-40 bottom-4 left-1/2 md:left-28 -translate-x-1/2 flex items-center gap-4 bg-black bg-opacity-50 rounded shadow transition-opacity duration-500 ${
            showNav ? "opacity-100" : "opacity-100"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={goPrev} className="px-4 text-2xl text-white">
            ←
          </button>
          <span className="text-xl text-white">{currentPageIndex}</span>
          <button onClick={goNext} className="px-4 text-2xl text-white">
            →
          </button>
        </div>
      )}

      {/* logo - Only show for slide routes */}
      {isSlideRoute && !hide.includes(location.pathname) && ( 
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="scale-[0.4] sm:scale-[0.6] md:scale-[1.1] absolute z-20 top-[20px] -right-[50px] md:top-[100px] md:right-[20px] rounded-lg transition-opacity duration-500"
          />
        </Link>
      )}
    </>
  );
}

export default App;