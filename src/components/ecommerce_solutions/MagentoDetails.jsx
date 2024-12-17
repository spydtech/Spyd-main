import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from"../../assets/ecommerce/magento/image.png"
import image2 from"../../assets/ecommerce/magento/hero.png"
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";

const MagentoDetails = () => {


 

  const checkoutData = [
    {
      des: "Indian retail market is expected to grow to US$ 850 Billion by 2020",
    },
    {
      des: "The E-Commerce business is set to grow to US$120 Billion by 2020",
    },
    {
      des: "Businesses are increasing looking at options to cut costs, build e-commerce platform to reach out to targeted customers",
    },
    {
      des: "In such a scenario Magento has come as a boon as it is free open source platform that offers end to end E-Commerce website development with powerful features",
    },
    {
      des: "Magento is an ideal platform for startups and small businesses to reach out to intended customers online and sell product.",
    },
  ];

  const clientData = [
    {
      desp: "Over the years SpyD Technology has built exceptional resources Magento capabilities",
    },
    {
      desp: "We have hired, trained and nurtured talent to offer complete and comprehensive E-Commerce Solutions using Magento",
    },
    {
      desp: "Besides from building and deploying E-Commerce websites, we provide training to our client’s employees on backend products upload and manage the entire content management system",
    },
    {
      desp: "We also offer SLA (Service Level Agreement) with 24/7 maintenance support to our clients to scale and grow.",
    },
  ];

  const expertise = [
    {
      expert: "Magento eCommerce Solutions",
    },
    {
      expert: "Magento eCommerce Services",
    },
    {
      expert: "Magento Module Development",
    },
    {
      expert: "Online Shopping Development",
    },
    {
      expert: "Magento ERP Integration",
    },
    {
      expert: "osCommerce to Magento Migration",
    },
    {
      expert: "Magento Enterprise Development",
    },
    {
      expert: "VirtueMart to Magento Migration",
    },
    {
      expert: "Magento Development Services",
    },
    {
      expert: "Magento Website Design",
    },
    {
      expert: "Magento Extension Development",
    },
    {
      expert: "Magento Theme Customization",
    },
    {
      expert: "Magento SAP Integration",
    },
    {
      expert: "Magento Extension Integration",
    },
    {
      expert: "Magento Ingram Micro Integration",
    },
  ];

  useEffect(() => {
    AOS.init(); // Add animation initialization
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-serif">
     <div
     data-aos="fade-zoom-in"
  className="bg-cover bg-center h-44 lg:h-96 flex flex-col items-center justify-center text-white gap-5"
  style={{
    backgroundImage: `url(${image2})`, // Ensure image2 is a valid image URL
  }}
>
  <h1 
  data-aos="fade-up"
  className="text-xl lg:text-5xl">MAGENTO</h1>
  <h1 
  data-aos="fade-up"
  className="text-lg lg:text-3xl">E-Commerce</h1>
</div>


      <div className="m-5 md:m-10">
        <p 
        data-aos="fade-right"
        className="text-sm lg:text-base">
          Magento is the most popular open source E-Commerce CMS based platform
          that offers a wide ranging features enabling companies build robust,
          end-to-end E-Commerce website. SpyD Technology PVT LTD Magento experts
          leverages the amazing features, tools and plugins to help our clients
          cost effective E-Commerce Solutions
        </p>
        <div className="my-5 md:my-10 flex flex-col items-center md:flex-row md:justify-center">
          <img
          data-aos="fade-up"
            src={image1}
            alt="image-1"
            className="w-60 lg:w-80"
          />
          <ul 
          data-aos="fade-left"
          className="space-y-3 lg:w-[600px] xl:w-[800px]">
            {checkoutData.map((data) => (
              <li key={data.id} className="flex gap-2">
                <span className="text-[#00CEFF]">
                  <FaArrowRightLong size={20} />
                </span>
                <p className="text-sm lg:text-base">{data.des}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h1 
          data-aos="fade-up"
          className="text-lg md:text-xl text-[#00CEFF] text-center">
            The value we add to our clients:
          </h1>
          <ul className="space-y-3 ">
            {clientData.map((each) => (
              <li 
              data-aos="fade-up"
              key={each.id} className="flex gap-2">
                <span className="text-[#00CEFF]">
                  <FaArrowRightLong size={20} />
                </span>
                <p className="text-sm lg:text-base">{each.desp}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-tl from-[#007C99] to-[#00CEFF] p-5 ">
        <h1 
        data-aos="fade-up"
        className="text-center text-lg md:text-xl text-white">
          Our Magento eCommerce Development Expertise
        </h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 py-5 md:px-20 gap-3 text-center">
          {expertise.map((each) => (
            <li
            data-aos="fade-up"
              key={each.id}
              className="bg-white rounded-lg py-4 text-[#0866E2]"
            >
              <p className="text-xs">{each.expert}</p>
            </li>
          ))}
        </ul>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default MagentoDetails;
