import React from "react";
import EmImage from "./EmImage";
import Em from "./Em";
import EmCards from "./EmCards";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function EmMain() {
  return (
    <>
      <EmImage />
      <Em />
      <EmCards />
      <CallToAction />
      <Footer />
    </>
  );
}

export default EmMain;
