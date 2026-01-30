import React, { useEffect } from "react";
import { FaUserFriends, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Nine = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="bg-white md:mt-10 mt-10 md:py-5 px-4 md:px-20 font-ubuntu">
      {/* Heading */}
      <div className="text-center md:mb-8" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Clients & Partnerships
        </h2>
        <p className="text-gray-500 mt-1 font-light text-base md:text-lg">
          Understanding our client base and successful collaborations
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-stretch">
        {/* Image first on mobile, second on desktop */}
        <div
          className="order-1 lg:order-2 flex justify-center items-stretch"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <img
            src="https://img.freepik.com/free-photo/business-coworkers-shaking-hands-meeting-office-focus-is-businessman_637285-7009.jpg"
            alt="Meeting"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text second on mobile, first on desktop */}
        <div
          className="order-2 lg:order-1 flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Card 1 */}
          <div className="mb-8">
            <div className="text-4xl md:text-5xl text-black mb-4">
              <FaUserFriends />
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-800">
              Major Clients & Industry Focus
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              Our firm has established strong relationships with a variety of
              major clients across different sectors, including technology,
              healthcare, and finance. This diversity not only showcases our
              adaptability but also strengthens our market position by enabling
              us to cater to a wide array of industry needs.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="text-4xl md:text-5xl text-black mb-4">
              <FaBriefcase />
            </div>
            <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-800">
              Successful Case Studies
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              We take pride in our successful case studies that highlight our
              innovative approaches and effective solutions. Each case study
              illustrates our capability to deliver results, showcasing specific
              challenges faced by clients and the tailored strategies we
              implemented to achieve their goals. These successes serve as a
              testament to our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nine;
