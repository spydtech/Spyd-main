import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BackendImage from "./BackendImage";
import JavaDeveloment from "./JavaDeveloment";
import PhpDevelopment from "./PhpDevelopment";
import PythonDevelopment from "./PythonDevelopment";
import BackendDevelopment from "./BackendDevelopment";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

function BackendMain() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackendImage />
      <JavaDeveloment />
      <PhpDevelopment />
      <PythonDevelopment />
      <BackendDevelopment />
      <CallToAction />
      <Footer />
    </>
  );
}

export default BackendMain;
