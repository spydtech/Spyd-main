import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import image from "../../assets/ecommerce/background.png"
import image1 from "../../assets/ecommerce/hero.png"
import image2 from "../../assets/ecommerce/image-1.png";
import image3 from "../../assets/ecommerce/image-2.png";
import image4 from "../../assets/ecommerce/image-3.png";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";
const Ecommerce_sol = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init(); // Add animation initialization
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const empowerText = [
    {
      description:
        "Embark on eCommerce excellence with SPYD Tech. Our skilled team uses cutting-edge technologies to fortify web applications, ensuring utmost security for your digital assets.",
    },
    {
      description:
        "At SPYD Tech, we exceed industry standards. Our advanced security measures in frontend technologies secure your data, providing a foundation for all online business activities.",
    },
    {
      description:
        "Experience seamless integration with our modular frontend solutions. SPYD Tech ensures swift implementation, enhancing the efficiency of your eCommerce ecosystem.",
    },
    {
      description:
        "Committed to excellence, SPYD Tech strengthens security and optimizes development budgets. Trust us for secure, scalable, and cost-effective eCommerce solutions tailored to your business needs.",
    },
  ];

  return (
    <div className="font-serif ">
      <div
      data-aos="fade-in"
  className="bg-cover bg-center h-44 lg:h-96 flex flex-col items-center justify-center text-white gap-5"
  style={{
    backgroundImage: `url(${image1})`, // Ensure image2 is a valid image URL
  }}
>
        <h1 
        data-aos="fade-down"
        className="text-sm md:text-2xl text-center">Empower Your Business with Seamless e-Commerce Solutions <br />
        Unleashing the Future of</h1>
        <h1 className="text-3xl">Digital E-Commerce</h1>
      </div>

      <div className="flex flex-col items-center my-5">
        <div className="flex flex-col items-center md:flex-row gap-3 lg:gap-8">
          <img
          data-aos="fade-up"
          src={image2}
            alt="image-1"
            className="w-60 lg:w-80 md:order-1"
          />
          <div 
          data-aos="fade-left"
          className="max-md:ml-5 space-y-2 md:w-[350px] lg:w-[500px] xl:w-[600px] ">
            <h1 className=" text-[#00CEFF] text-lg lg:text-xl">
              Magento eCommerce Development
            </h1>
            <p className="text-sm lg:text-base">
              Magento eCommerce Development empowers businesses to create
              engaging, scalable, and high-performing online stores that drive
              revenue and customer satisfaction. With its unparalleled
              flexibility, customization options, and rich feature set, Magento
              is the platform of choice for businesses looking to thrive in the
              competitive world of eCommerce.
            </p>
            <Link to="/service/ecommerce-details/magento">
            <button
              onClick={() => navigate("/service/ecommerce-details/magento")}
              className="bg-gradient-to-t from-[#00CEFF] to-[#0866E2] text-white rounded-lg px-2 py-1"
            >
              Read More
            </button>
            </Link>
           
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-3 lg:gap-8">
          <img
          data-aos="fade-up"
            src={image3}
            alt="image-1"
            className="w-60 lg:w-80"
          />
          <div 
          data-aos="fade-right"
          className="max-md:ml-5 space-y-2 md:w-[350px] lg:w-[500px] xl:w-[600px] ">
            <h1 className=" text-[#00CEFF] text-lg lg:text-xl">
              Mobile Commerce (M-Commerce)
            </h1>
            <p className="text-sm lg:text-base">
              In the era of constant connectivity, Mobile Commerce (mCommerce)
              emerges as the driving force behind the evolution of online
              shopping. As consumers increasingly turn to their smartphones and
              tablets for seamless, on-the-go experiences, businesses must
              harness the power of mCommerce to stay ahead in the competitive
              digital landscape.
            </p>

            <Link to="/service/ecommerce-details/mobile">
            <button
              onClick={() => navigate("/service/ecommerce-details/mobile")}
              className="bg-gradient-to-t from-[#00CEFF] to-[#0866E2] text-white rounded-lg px-2 py-1"
            >
              Read More
            </button>
            </Link>
           
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-3 lg:gap-8">
          <img
          data-aos="fade-up"
           src={image4}
           alt="image-1"
            className="w-60 lg:w-80 md:order-1"
          />
          <div 
          data-aos="fade-left"
          className="max-md:ml-5 space-y-2 md:w-[350px] lg:w-[500px] xl:w-[600px] ">
            <h1 className=" text-[#00CEFF] text-lg lg:text-xl">E-Commerce</h1>
            <p className="text-sm lg:text-base">
              In the digital era, eCommerce stands as the gateway to a
              revolutionary shopping experience, transforming the way we buy and
              sell goods and services. At its core, eCommerce, or Electronic
              Commerce, refers to the online exchange of products and services,
              fostering a virtual marketplace that transcends geographical
              boundaries. Let's explore the key elements that define and
              characterize the essence of eCommerce.
            </p>

            <Link to="/service/ecommerce-solutions">
            <button
              onClick={() => navigate("/service/ecommerce-solutions")}
              className="bg-gradient-to-t from-[#00CEFF] to-[#0866E2] text-white rounded-lg px-2 py-1"
            >
              Read More
            </button>
            
            </Link>
           
          </div>
        </div>
      </div>

      <div
        className=" bg-[#0866E2] py-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white">
          <h1
          data-aos="fade-up"
          className="text-lg lg:text-2xl">
            Empower Your Business with SPY D Tech's eCommerce Solutions
          </h1>
          <ul 
          data-aos="fade-up"
          className="grid md:grid-cols-2 justify-center gap-4 m-3 md:m-5 lg:m-10 md:mx-10 lg:mx-20 xl:mx-44">
            {empowerText.map((eachDes) => (
              <li key={eachDes.id} className="flex gap-2 font-sans">
                <span className="text-[#00CEFF]">
                  <FaArrowRightLong size={20} />
                </span>
                <p className="text-start text-sm lg:text-base ">{eachDes.description} </p>
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

export default Ecommerce_sol;
