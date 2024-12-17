import React,{useEffect} from "react";
import SmmImage from "./SmmImage";
import Smm from "./Smm";
import SmmServices from "./SmmServices";
import SmmCards from "./SmmCards";
import SmmOutcomes from "./SmmOutcomes";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";
function SmmMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SmmImage />
      <Smm></Smm>
      <SmmServices />
      <SmmCards />
      <SmmOutcomes />
      <CallToAction />
      <Footer />
    </>
  );
}

export default SmmMain;
