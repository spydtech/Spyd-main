import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS here
import "aos/dist/aos.css";

const Php = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className=" py-10 px-4  lg:px-4">
      <div className="max-w-4xl mx-auto ">
        <h2 
        data-aos="zoom-in-up"
        className="text-2xl text-center sm:text-3xl  text-[#00ceff] mb-6">
          PHP Web Development Solutions
        </h2>
        <div 
        data-aos="fade-right"
        className=" text-sm sm:text-lg space-y-6">
          <p className="flex items-start gap-3">
            <span className="text-black text-xl">&#x2794;</span>
            The outsourcing of technical resources has gained enormous
            proportions for multiple reasons such as reducing overhead costs,
            eliminating the hiring process, and building teams on a need-to-need
            basis.
          </p>
          <p 
           data-aos="fade-right"
          className="flex items-start gap-3">
            <span className="text-black text-xl">&#x2794;</span>
            SYPD Tech, besides offering quality web services and solutions, also
            provides quality resources for offshore and offsite development
            services.
          </p>
          <p 
           data-aos="fade-right"
          className="flex items-start gap-3">
            <span className="text-black text-xl">&#x2794;</span>
            Our enormously experienced team, with deep expertise in building
            myriad websites, web applications, web portals, and system
            integration in the PHP environment, is deployed across major
            multinational companies offering cutting-edge deliverables to global
            clients. We help companies by offering PHP development teams, thus
            reducing their overheads and maximizing outreach.
          </p>
          <p 
           data-aos="fade-right"
          className="flex items-start gap-3">
            <span className="text-black text-xl">&#x2794;</span>
            This process ensures and creates a win-win situation for all
            stakeholders, including our clients, their customers, and us. In a
            heavily competitive market, reaching out to intended customers and
            accelerating time to market plays a significant role in staying
            competitive. We make sure our clients benefit from it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Php;
