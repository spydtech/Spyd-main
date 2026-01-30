import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const data = [
  {
    title: "Company Overview",
    text: "Founded in May 2023, our company is spearheaded by Chiluveru Sathish and Chiluveru Shyam, with operations spanning multiple locations. Since inception, we have built a strong market presence and earned recognition for our commitment to innovation, quality, and customer-focused solutions.",
    img: "https://tse4.mm.bing.net/th/id/OIP.j1j2L8hRbUg9wwvjeDhQagHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Business Model & Market Presence",
    text: "We operate with a unique business model that focuses on specific business strategies. This model has allowed us to effectively penetrate the market and maintain a competitive edge.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/015/683/843/small_2x/build-a-business-model-from-attributes-creation-of-a-successful-company-development-of-leadership-organizational-skills-business-tools-and-services-entrepreneurship-management-recipe-for-success-photo.jpg",
  },
  {
    title: "Key Differentiators",
    text: "Clients choose us for our exceptional quality and tailored services. Our dedication to specific differentiators sets us apart from competitors",
    img: "https://www.bing.com/th/id/OIP.rwmLCyt2Q4KfDCvTH4Lc2wHaEP?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
  },
  {
    title: "Mission Statement",
    text: "Our mission is driven by a commitment to specific mission elements. We strive to impact or outcome of mission in everything we do.",
    img: "https://c8.alamy.com/comp/2AA8D02/top-view-discussion-group-of-young-people-sitting-in-a-circle-2AA8D02.jpg",
  },
  {
    title: "Vision for the Future",
    text: "We envision a future where describe future goals. Our long-term growth strategy focuses on specific growth strategies or areas of focus.",
    img: "https://tse2.mm.bing.net/th/id/OIP.KjJ1_TsUpBrBW_7t3RtkcQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const Seventh = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center relative">
      <div className="w-full bg-white font-ubuntu">
        {/* Header */}
        <div className="bg-white text-center">
          <h2 className="text-3xl md:text-5xl mt-16 font-bold text-gray-900">
            Company Introduction and Mission
          </h2>
          <p className="text-md md:text-lg text-gray-500 my-2 max-w-3xl mx-auto">
            Understanding Our Foundation and Aspirations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 min-h-[calc(100vh-160px)]">
          {data.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="relative group min-h-[250px] md:min-h-[400px] bg-cover bg-center  overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-500 group-hover:bg-opacity-20"></div>

              {/* Slide-up White Panel */}

              <div
                className="absolute inset-0 bg-white text-black p-4
  transform translate-y-full 
  group-hover:translate-y-0
  transition-transform duration-700 ease-in-out overflow-auto"
              >
                {/* Title */}
                <h3
                  className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-in-out delay-100
    text-lg md:text-2xl font-bold mb-2"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
    transition-all duration-500 ease-in-out delay-150
    text-sm md:text-base text-gray-500"
                >
                  {item.text}
                </p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seventh;
