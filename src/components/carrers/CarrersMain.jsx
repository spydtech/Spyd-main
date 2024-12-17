import React,{useEffect} from "react";
import CarrersImage from "./CarrersImage";
import Openings from "./Openings";
import JobOpenings from "./JobOpenings";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

function CarrersMain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CarrersImage />
      <Openings />
      <JobOpenings />
      <CallToAction />
      <Footer />
    </>
  );
}

export default CarrersMain;
