import React,{useEffect} from "react";
import EmImage from "./EmImage";
import Em from "./Em";
import EmCards from "./EmCards";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function EmMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
