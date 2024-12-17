

import DnetTopSection from "./DnetTopSection";
import DnetCards from "./DnetCards";
import TechExpertise from "./TechExpertise";
import MicroSoftTech from "./MicroSoftTech";
import DevProcess from "./DevProcess";
import AspDevelopers from "./AspDevelopers";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";
import React, { useEffect } from "react";

// import Footer from './Footer'

function DotNet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div className="font-serif">
      <DnetTopSection />
      <DnetCards />
      <TechExpertise />
      <AspDevelopers />
      <MicroSoftTech />
      <DevProcess />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default DotNet;
