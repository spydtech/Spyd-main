import React,{useEffect} from "react";
import DigitalMarketing from "./digitalmarketing";
import MarketingStrategy from "./MarketingStrategy";
import Seo from "./Seo";
import Ppc from "./Ppc";
import Smm from "./Smm";
import ContentMarketing from "./ContentMarketing";
import EmailMarketing from "./EmailMarketing";
import emailmarketingimage from "../../../assets/digitalmarketing/bgimage.png";
import CallToAction from "../../CallToAction";
import Footer from "../../Footer";

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DigitalMarketing />
      <MarketingStrategy />
      {/* <div
        className="mb-10"
        style={{
          backgroundImage: `url(${emailmarketingimage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          marginTop: "20px",
        }}
      > */}
      <Seo />
      <Ppc />
      {/* </div> */}

      {/* <div className="mt-48"> */}
      <Smm />
      {/* </div> */}
      <ContentMarketing />
      <EmailMarketing />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Main;
