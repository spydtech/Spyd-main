import React,{useEffect} from "react";
import PythonImage from "./PythonImage";
import Python from "./Python";
import PythonCards from "./PythonCards";
import PythonServices from "./PythonServices";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function PythonMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
