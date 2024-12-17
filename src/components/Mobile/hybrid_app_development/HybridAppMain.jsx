import React,{useEffect} from "react";
import HybridImage from "./HybridImage";
import HybridApp from "./HybridApp";
import HybridTechnologies from "./HybridTechnologies";
import HybridAppCapabilities from "./HybridAppCapabilities";
import HybridAppCards from "./HybridAppCards";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function HybridAppMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HybridImage />
      <HybridApp />
      <HybridTechnologies />
      <HybridAppCapabilities></HybridAppCapabilities>
      <HybridAppCards />
      <CallToAction />
      <Footer></Footer>
    </>
  );
}

export default HybridAppMain;
