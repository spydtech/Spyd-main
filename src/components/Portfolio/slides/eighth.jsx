import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    {
      title: "International Call Center Services",
      desc:
        "Our international call center services provide 24/7 customer support to ensure that your clients receive assistance whenever they need it. With multilingual capabilities, we cater to a global audience, enhancing customer satisfaction and retention.",
    },
    {
      title: "IT & Software Development",
      desc:
        "We specialize in IT and software development, creating customized solutions tailored to meet your business needs. Our team of experienced developers utilizes the latest technologies to deliver high-quality software products, ensuring scalability and security.",
    },
    {
      title: "AI & Automation Solutions",
      desc:
        "Our AI and automation solutions streamline business processes, enhancing efficiency and reducing operational costs. By leveraging advanced technologies, we help organizations optimize their workflow and improve decision-making through data-driven insights.",
    },
  ];

  return (
    <section className="bg-white mt-10 md:mt-24 md:ml-20 px-4 md:px-10 ">
      {/* Container */}
      <div className="flex font-ubuntu flex-col-reverse md:flex-row w-full max-w-[1400px] mx-auto gap-10 items-stretch">
        
        {/* Left content */}
        <div
          className="flex flex-col justify-start w-full md:w-2/3 pr-0 md:pr-10"
          data-aos="fade-right"
        >
          <h1
            className="text-3xl md:text-5xl font-semibold mb-2 md:mb-5 leading-tight"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            Core Services &amp; Expertise
          </h1>

          <p
            className="text-gray-600 text-lg md:text-xl mb-2 md:mb-9 "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Comprehensive Solutions to Elevate Your Business
          </p>

          {/* Services list */}
          <div className="flex flex-col gap-5">
            {services.map(({ title, desc }, index) => (
              <div
                key={title}
                className="flex gap-4"
                data-aos="fade-right"
                data-aos-delay={200 + index * 100}
              >
                {/* Bullet */}
                <div className="w-4 h-4 rounded-full bg-blue-200 mt-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div
          className="w-full md:w-1/3"
          data-aos="fade-left"
          data-aos-delay={200 + services.length * 100}
        >
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/633ab081896f45d78d8286fd/Focused-multiracial-corporate-business-team-people-brainstorm-on-paperwork/0x0.jpg?width=960&dpr=2"
            alt="Office meeting"
            className="w-full h-full object-contain rounded-xl"
            
          />
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
