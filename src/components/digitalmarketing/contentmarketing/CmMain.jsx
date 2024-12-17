import React,{useEffect} from "react";
import CmImage from "./CmImage";
import Cm from "./Cm";
import CmProcess from "./CmProcess";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";
function CmMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CmImage />
      <Cm />
      <CmProcess />
      <CallToAction />
      <Footer />
    </>
  );
}

export default CmMain;
