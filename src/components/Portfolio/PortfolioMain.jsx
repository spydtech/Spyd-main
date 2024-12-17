import React from "react";
import PortFolioImage from "./PortFolioImage";
import PortfolioCards from "./PortfolioCards";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

function PortfolioMain() {
  return (
    <>
      <PortFolioImage />
      <PortfolioCards />
      <CallToAction />
      <Footer />
    </>
  );
}

export default PortfolioMain;
