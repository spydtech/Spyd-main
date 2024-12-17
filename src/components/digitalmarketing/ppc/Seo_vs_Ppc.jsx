import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

function Seo_vs_Ppc() {
  const seoContent = [
    "Builds trust and credibility with search engines",
    "Generates organic traffic and sustainable results.",
    "Requires ongoing optimization and content creation.",
    "Takes time to yield significant results (but worth the wait!).",
    "Costs less in the long run",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const ppcContent = [
    " Provides immediate visibility and quick results",
    "Offers targeted advertising and flexible budgeting",
    "Requires continuous ad optimization and bidding",
    "Can be costly, especially for competitive keywords",
    "Stops producing results when the budget runs out",
  ];

  const renderContent = (contentArray) =>
    contentArray.map((item, index) => (
      <p
       data-aos="fade-right"
      key={index} className="flex leading-7 lg:leading-10">
        <span className="mr-2">
          <FaArrowRight className="text-white mt-2 w-8 h-6" />
        </span>
        {item}
      </p>
    ));

  return (
    <div className="lg:mt-10 my-4 px-4 mx-0">
      <div className="text-center">
        <p
         data-aos="flip-up"
        className="lg:text-3xl text-2xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
          SEO VS PPC : Which is the Right Strategy for your Brand?
        </p>
      </div>

      <div
       data-aos="fade-right"
      className="text-md lg:text-xl py-6 text-white bg-gradient-to-r from-[#00ceff] to-[#0072ff] grid md:grid-cols-2 mt-6 ">
        <div className="mt-4 mx-auto">
          <h1 className="text-center pb-4">SEO</h1>
          {renderContent(seoContent)}
        </div>

        <div 
         data-aos="fade-right"
        className="mt-4 mx-auto">
          <h1 className="text-center pb-4">PPC</h1>
          {renderContent(ppcContent)}
        </div>
      </div>
    </div>
  );
}

export default Seo_vs_Ppc;
