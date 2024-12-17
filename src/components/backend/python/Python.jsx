import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Python = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className=" py-10 px-4  lg:px-4">
      <div className="max-w-4xl mx-auto ">
        <h2 
         data-aos="flip-up"
        className="text-2xl text-center sm:text-3xl  text-[#00ceff] mb-6">
          Python App Development
        </h2>
        <div className=" text-sm sm:text-lg space-y-6">
          <p 
           data-aos="fade-right"
          className="flex items-start gap-3">
            <span className="text-black text-xl">&#x2794;</span>
            Drawing upon our core expertise, we provide highly trained,
            certified, and extensively experienced Python developers for
            Offshore and Offsite Projects Execution.
          </p>
          <p 
           data-aos="fade-right"
          className="flex items-start gap-3">
            <span className="text-black text-xl">&#x2794;</span>
            The landscape of mobile application development is constantly
            evolving. Today's technologies become obsolete tomorrow, driving the
            need for continuous adaptation to new and emerging technologies. Our
            adept team of mobile app developers is deeply experienced and stays
            in sync with emerging technologies, ensuring they remain at the
            forefront of the industry's best and latest advancements.
          </p>
          <p 
           data-aos="fade-right"
          className="flex items-start gap-3">
            <span className="text-black text-xl">&#x2794;</span>
            Our Python developers have been strategically deployed across
            diverse industry sectors and niches. Collaborating with top-tier
            companies, they deliver cutting-edge mobile apps that not only meet
            but exceed the growing requirements of our clients and their
            customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Python;
