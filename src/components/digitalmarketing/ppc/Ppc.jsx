import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Ppc() {


  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="lg:mt-10 my-4 mx-1 lg:mx-4">
        <div className="text-center">
          <p 
          data-aos="flip-up"
          className="lg:text-3xl text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
            PPC
          </p>
        </div>

        <div className=" text-lg lg:text-xl mt-6 mx-6">
          <p
          data-aos="fade-right"
          >
            PPC is an advertising service offered by search engines such as
            Google, Bing, Yahoo and social media platforms such as Facebook,
            Twitter, LinkedIn, and Instagram. Many companies are seeking quick
            and efficient methods to showcase their brands to potential
            customers as the digital marketing landscape changes. Boost your
            search engine presence and see instant outcomes by utilizing the PPC
            management services offered by SPY D PPC Marketing services.
          </p>
        </div>
      </div>
    </>
  );
}

export default Ppc;
