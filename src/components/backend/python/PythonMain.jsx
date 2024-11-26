import React from "react";
import PythonImage from "./PythonImage";
import Python from "./Python";
import PythonCards from "./PythonCards";
import PythonServices from "./PythonServices";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function PythonMain() {
  return (
    <>
      <PythonImage />

      <Python />
      <PythonCards />
      <PythonServices />
      <CallToAction />
      <Footer />
    </>
  );
}

export default PythonMain;
