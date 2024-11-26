import React from "react";
import CmImage from "./CmImage";
import Cm from "./Cm";
import CmProcess from "./CmProcess";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";
function CmMain() {
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
