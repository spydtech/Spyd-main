import React,{useEffect} from "react";
import PhpImage from "./PhpImage";
import Php from "./Php";
import PhpServices from "./PhpServices";
import PhpTechnicalSkills from "./PhpTechnicalSkills";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function PhpMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PhpImage />
      <Php />
      <PhpServices />
      <PhpTechnicalSkills />
      <CallToAction />
      <Footer />
    </>
  );
}

export default PhpMain;
