import React, { useState } from "react";
import amazon from "../../../assets/digitalmarketing/seo/logos/amazon.png";
import content from "../../../assets/digitalmarketing/seo/logos/content.png";
import cro from "../../../assets/digitalmarketing/seo/logos/cro.png";
import ecommerce from "../../../assets/digitalmarketing/seo/logos/ecommerce.png";
import franchise from "../../../assets/digitalmarketing/seo/logos/franchise.png";
import keyword from "../../../assets/digitalmarketing/seo/logos/keyword.png";
import link from "../../../assets/digitalmarketing/seo/logos/link.png";
import local from "../../../assets/digitalmarketing/seo/logos/local.png";
import offpage from "../../../assets/digitalmarketing/seo/logos/offpage.png";
import onpage from "../../../assets/digitalmarketing/seo/logos/onpage.png";
import shopify from "../../../assets/digitalmarketing/seo/logos/shopify.png";
import technical from "../../../assets/digitalmarketing/seo/logos/technical.png";

function SeoServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const data = [
    {
      title: "Keyword Research & Strategy",
      description:
        "SPY D is an SEO agency that understands your niche and can boost your ranking for specific search terms! Our experts dive deep into your niche to craft a personalized keyword strategy that drives results. ",
      image: keyword,
    },
    {
      title: "Link Building",
      description:
        "Backlinks play a significant role in increasing search result rankings, however, the link quality matters. This is why it is important to collaborate with an SEO company such as SPY D, which has a specialized team for link building and relationships with various reputable websites.",
      image: link,
    },
    {
      title: "Technical SEO",
      description:
        "Improvements to your website's backend, like enhancing page speed, can lead to better rankings. Fixing these errors simplifies the process for search engines when they search your website. ",
      image: technical,
    },
    {
      title: "Local SEO",
      description:
        "Data indicates that 64 percent of clients look up local companies on the internet. Enhance your company's local SEO rankings by optimizing Google Business Profile or Google My Business (GMB) to draw in customers with high intent.",
      image: local,
    },
    {
      title: "On-Page SEO",
      description:
        "Improve your visibility on the internet and generate top-notch traffic. At SPY D, we make sure our SEO services follow the best practices of search engines to enhance the credibility of your website.",
      image: onpage,
    },
    {
      title: "Off-Page SEO",
      description:
        "Off-page optimization plays an important role in building brand credibility and enhancing online visibility. We use social media marketing, link building, and influencer marketing to generate quality links and top ratings.",
      image: offpage,
    },
    {
      title: "Franchise SEO",
      description:
        "Boost your franchise marketing with SPY D SEO services designed for businesses with multiple locations. We release location-specific content, utilize Nextdoor advertising, and create custom web designs. ",
      image: franchise,
    },
    {
      title: "Shopify SEO",
      description:
        "Strengthen your online store’s digital presence of your e-commerce website and broaden your audience reach. Our services include Shopify SEO audit, Shopify web design, paid advertising, and responding to reviews to enhance your customers' Shopify experience.",
      image: shopify,
    },
    {
      title: "Amazon SEO",
      description:
        "Stand out from the competition on Amazon to reach millions of potential customers who are ready to make a purchase. We enhance your Amazon product descriptions, increase ad visibility, and execute targeted Amazon marketing services",
      image: amazon,
    },
    {
      title: "eCommerce SEO",
      description:
        "Give your clients the opportunity to shop conveniently 24/7 and boost your customer retention rate. We start specific email marketing initiatives and enhance your website for mobile and voice search to generate personalized brand interactions. ",
      image: ecommerce,
    },
    {
      title: "Content Writing",
      description:
        "Our team of writers creates SEO-friendly content for your website, including shareable blog posts and enhance existing service and product pages with additional content. Search engines favor websites that consistently update their content.",
      image: content,
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Improve your customers' long-term value and increase your online revenue with SPY D Conversion Rate Optimization (CRO) services. Our company combines pay-per-click marketing with our SEO services to increase your chances of conversion. ",
      image: cro,
    },
  ];

  return (
    <div className="lg:my-10 my-4 mx-1 md:mx-4">
      <div className="text-center mx-4">
        <p className="py-4 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text text-3xl">
          Our SEO Services
        </p>
        <br />
        <p className="py-4 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text text-2xl lg:text-3xl">
          Increase Your Search Rankings and Get Discovered More Online
        </p>
        <p className="py-4 text-start text-xl">
          Discover the key to dominating search engine results and standing out
          in the digital landscape. SEO, or Search Engine Optimization, is the
          art and science of refining your website to achieve higher rankings
          and greater visibility. By optimizing your content, improving site
          structure, and implementing strategic enhancements, you can position
          your site to appear at the forefront of search results and captivate
          potential customers when they search for your services.
        </p>
      </div>
      <div
        id="card"
        className="grid mt-6 gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 "
      >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative mx-auto w-[300px] lg:w-[330px] flex flex-col items-center justify-center bg-gradient-to-r from-[#00ceff] to-[#0072ff] h-[300px] overflow-hidden rounded-md shadow-md"
            >
              <img
                src={item.image}
                className={`object-cover rounded-full w-20 h-20 mb-4 transition-opacity duration-300 ${
                  hoveredCard === index ? "opacity-0" : "opacity-100"
                }`}
                alt="SEO Service"
              />
              <p
                className={`absolute text-white text-[18px] text-start px-5  transition-opacity duration-300 ${
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.description}
              </p>
              <p
                className={`text-3xl text-white text-center transition-opacity duration-300 ${
                  hoveredCard === index ? "opacity-0" : "opacity-100"
                }`}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeoServices;
