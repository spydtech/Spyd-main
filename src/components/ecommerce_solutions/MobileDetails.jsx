import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../../assets/ecommerce/mobile/bg-1.png"
import image3 from "../../assets/ecommerce/mobile/bg-2.png";
import image from "../../assets/ecommerce/mobile/hero.png"
import image2 from "../../assets/ecommerce/mobile/image-1.png"
import image4 from "../../assets/ecommerce/mobile/image-2.png"
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";

const MobileDetails = () => {

  useEffect(() => {
    AOS.init(); // Add animation initialization
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const mobileDetails = [
    {
      description:
        "India is the fastest growing country in E-Commerce niche with revenue expected to surpass US$ 120 Billion by 2020.",
    },
    {
      description:
        "About 65 Crore Indians use mobile phone and about 30 Crores of them use smart phone, which is expected to grow to 53 Crore smart phones users by the end 2019.",
    },
    {
      description:
        "And increasing number of start-ups coming up in India in E-Commerce sector offering virtually everything online from apparels, electronic, home appliance, medicines and food, mobile commerce is posed to play a significant role in driving overall e-commerce growth in India.",
    },
    {
      description:
        "We at SpyD technology have hired, trained and nurtured exceptional talented manpower to meet the growing demands of M-Commerce. We offer turnkey solutions by bundling E-Commerce and M-Commerce to ensure the products are accessible to users on multiple platforms.",
    },
    {
      description:
        "We offer Mobile Commerce solutions for native operating systems such as Android, IOS and also build hybrid apps accessible on multiple devices irrespective of the operating system. Our time tested, global accepted best practices in designing, developing and deploying M-Commerce mobile applications have won accolades from our clients world over.",
    },
  ];

  const ecommerce = [
    {
      desc: "Expertise mobile commerce solutions fully integrates with your existing e Commerce website that includes product catalogue, inventory, shipping methods, payments and checkout as well as all other functionalities.",
    },
    {
      desc: "Designing a new store & integrating your existing online store with a mobile app with e Commerce features, helps you with the perfect solution for your business. If you are looking at expanding your current boundaries and venturing out into the mobile space, we can assist you with the affordable up gradation. Mobile commerce apps are not just business online, but opportunities for business expansion that includes tapping the huge mobile user base and getting an edge over the competition",
    },
  ];

  const development = [
    {
      point: "Mobile- friendly technology",
    },
    {
      point: "With your existing online websites",
    },
    {
      point: "Support for multiple stores",
    },
    {
      point: "Marketing Power Tools",
    },
    {
      point: "Customer-Attraction Features",
    },
    {
      point: "Compatible with multiple devices",
    },
  ];

  return (
    <div className="font-serif">
      <div
      data-aos="fade-zoom-in"
        className=" bg-cover bg-center h-60 lg:h-96 flex flex-col items-center justify-center text-white gap-5"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 
        data-aos="fade-up"
        className="text-xl lg:text-5xl">Mobile Commerce</h1>
        <h1 
        data-aos="fade-up"
        className="text-lg lg:text-3xl">M Commerce</h1>
      </div>

      <div
        style={{
          backgroundImage: `url(${image1})`,
        }}
        className="bg-cover bg-center"
      >
        <div className="text-center space-y-3 py-5">
          <h1 
          data-aos="fade-up"
          className="text-[#00CEFF] text-lg lg:text-xl px-3">
            Elevate Your Shopping Experience with Seamless E-Commerce
          </h1>
          <p
          data-aos="fade-up"
          className="text-[#00CEFF] text-xl lg:text-2xl">Mobile Marvel</p>
        </div>

        <div className="md:p-5 flex flex-col items-center md:flex-row md:justify-center">
          <img
          data-aos="fade-up"
            src={image2}
            alt="image-1"
            className="w-60 lg:w-80"
          />
          <ul className="max-md:m-5 space-y-3 lg:w-[600px] xl:w-[800px]">
            {mobileDetails.map((details) => (
              <li 
              data-aos="fade-left"
              key={details.id} className="flex gap-2">
                <span className="text-[#00CEFF]">
                  <FaArrowRightLong size={20} />
                </span>
                <p className="text-sm lg:text-base">{details.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-5">
        <div 
        data-aos="fade-left"
        className="text-center space-y-3">
          <h1 className="text-[#00CEFF] text-xl lg:text-2xl">Mobile E-Commerce</h1>
          <p className="text-[#00CEFF] text-lg lg:text-xl">As per latest technology</p>
        </div>
        <ul className="space-y-3 m-5 md:mx-10 lg:mx-20">
          {ecommerce.map((each) => (
            <li 
            data-aos="fade-up"
            key={each.id} className="flex gap-2">
              <span className="text-[#00CEFF]">
                <FaArrowRightLong size={20} />
              </span>
              <p className="text-sm lg:text-base">{each.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className=" bg-[#0866E2] text-white bg-center bg-cover py-5 md:px-10 lg:px-28"
        style={{
          backgroundImage: `url(${image3})`,
        }}
      >
        <h1 
        data-aos="fade-up"
        className="text-lg lg:text-2xl max-md:text-center">
          Our Mobile Commerce Development <br /> Services Include
        </h1>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:my-5">
          <img
          data-aos="fade-up"
            src={image4}
            alt=""
            className="w-60 lg:w-80 md:order-2"
          />
          <ul className="space-y-4">
            {development.map((e) => (
              <li 
              data-aos="fade-right"
              key={e.id} className="flex gap-2">
                <span className="text-white">
                  <FaArrowRightLong size={20} />
                </span>
                <p className="text-base lg:text-lg">{e.point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default MobileDetails;
