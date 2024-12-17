import React,{useEffect} from "react";
import PpcImage from "./PpcImage";
import Ppc from "./Ppc";
import Seo_vs_Ppc from "./Seo_vs_Ppc";
import UtilityPpc from "./UtilityPpc";
import PpcAdvertising from "./PpcAdvertising";
import PpcTypes from "./PpcTypes";
import PpcAds from "./PpcAds";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";
function PpcMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PpcImage />
      <Ppc />
      <Seo_vs_Ppc />
      <UtilityPpc />
      <PpcAdvertising />
      <PpcTypes />
      <PpcAds />
      <CallToAction />
      <Footer />
    </>
  );
}

export default PpcMain;
