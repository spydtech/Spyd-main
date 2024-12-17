import React from "react";
import { RxTriangleRight } from "react-icons/rx";
import image1 from "../../assets/ecommerce/commerce/bg-img.png";
import image from "../../assets/ecommerce/commerce/hero.png";
import image2 from "../../assets/ecommerce/commerce/image-1.png";
import image3 from "../../assets/ecommerce/commerce/image-2.png";
import image4 from "../../assets/ecommerce/commerce/image-3.png";
import image5 from "../../assets/ecommerce/commerce/image-4.png";
import image6 from "../../assets/ecommerce/commerce/image-5.png";
import image7 from "../../assets/ecommerce/commerce/image-6.png";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";

const EcommerceDeatils = () => {

  useEffect(() => {
    AOS.init(); // Add animation initialization
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const details = [
    {
      point:
        "SPY D Technology, a trailblazer in E-Commerce development, is dedicated to crafting innovative and scalable solutions for businesses of all sizes worldwide. Our commitment to excellence is evident in the seamless integration of design thinking principles, ensuring an enriched user interface and experience.",
    },
    {
      point:
        "With a profound understanding of the E-Commerce landscape, we specialize in building robust platforms using leading technologies such as Magento, Shopify, Big Commerce, WooCommerce, Volusion, and 3D Cart. Our focus on creating secure and user-friendly environments extends to the implementation of best practices in payment gateway integrations.",
    },
    {
      point:
        "Experience the seamless integration of product listings, shopping carts, and payment gateways, offering users a hassle-free journey for increased conversions. With value-added features that boost user engagement, SPY D Technology paves the way for revenue growth.",
    },
    {
      point:
        "Our E-Commerce websites boast enhanced features, exceptional performance, and agility, all wrapped in a visually appealing UI/UX. We prioritize safety through state-of-the-art protocols during development, and our flexible architecture lays the groundwork for future enhancements.",
    },
  ];

  const salesMarketing = [
    {
      imageUrl: image2,
      title: "Search Engine Optimization",
      description:
        "We ensure the website visibility increase organically in the search engines for relevant and targeted keywords, drive traffic, and generate leads and conversions.",
      color: "#9747FF",
    },
    {
      imageUrl: image3,
      title: "Offers & Discounts",
      description:
        "We offer innovative ideas and implement those techniques such as offers and discounts to create a shopping experience for your customers",
      color: "#EA4B6C",
    },
    {
      imageUrl: image4,
      title: "Referral Programs",
      description:
        "We help our clients integrate affiliate marketing program to create multiple revenue streams, maximize sales and grow rapidly.",
      color: "#FCEA2B",
    },
    {
      imageUrl: image5,
      title: "Google Adwords & Pay Per Click Advertising ",
      description:
        "We excel in creating and launching paid campaigns in AdWords, Facebook and Instagram reduce CPC and increase conversions.",
      color: "#98E900",
    },
    {
      imageUrl: image6,
      title: "Email Campaigns",
      description:
        "We create landing and squeeze pages generate email lists and execute email marketing campaigns leading to conversions",
      color: "#1AF3E8",
    },
    {
      imageUrl: image7,
      title: "Create Social Media Presence",
      description:
        "Social Media Optimization and Marketing is our forte. We create social media business pages, interact, communicate and engage with users to drive quality traffic.",
      color: "#5CA3DC",
    },
  ];

  return (
    <div className="font-serif">
      <img
       data-aos="fade-zoom-in"
        src={image}
        alt="Ecommerce-image"
        className="h-60 lg:h-96 w-full"
      />
      <ul 
       data-aos="fade-up"
      className="md:py-10 md:px-20 space-y-3 max-md:p-5">
        {details.map((each) => (
          <li key={each.id} className="flex gap-1">
            <span>
              <RxTriangleRight size={20} />
            </span>
            <p className="text-sm lg:text-base">{each.point}</p>
          </li>
        ))}
      </ul>
      <div
        className="bg-cover bg-center bg-[#0866E2] p-5 "
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <h1 
         data-aos="fade-up"
        className="text-white text-lg lg:text-3xl text-center py-4">
          Grow Sales with Online Marketing
        </h1>
        <ul 
         data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3 md:p-5 lg:px-10">
          {salesMarketing.map((sale) => (
            <li className="text-white p-2 rounded-lg space-y-2" style={{backgroundColor : sale.color}}>
              <div className="flex items-center gap-2">
                <img src={sale.imageUrl} alt={sale.title} className="h-12  w-12 lg:h-16 rounded-full lg:w-16" />
                <h1 className="text-base lg:text-lg">{sale.title}</h1>
              </div>
              <p className="text-sm lg:text-base">{sale.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default EcommerceDeatils;
