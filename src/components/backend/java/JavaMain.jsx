import React,{useEffect} from "react";
import JavaImage from "./JavaImage";
import Java from "./Java";
import JavaOffers from "./JavaOffers";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function JavaMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <JavaImage />
      <Java />
      <JavaOffers />
      <CallToAction />
      <Footer />
    </>
  );
}

export default JavaMain;
