import React,{useEffect} from "react";
import SeoImage from "./SeoImage";
import Passion from "./Passion";
import SeoServices from "./SeoServices";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";
function SeoMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SeoImage />
      <Passion />
      <SeoServices />
      <CallToAction />
      <Footer />
    </>
  );
}

export default SeoMain;
