import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HybridApp() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    }); 
  }, []);

  return (
    <>
      <section className=" pt-10 px-4  lg:px-4">
        <div className="max-w-4xl text-center mx-auto ">
          <h2 
          data-aos="fade-down"
          className=" text-center lg:text-3xl text-xl  bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text  mb-6">
            Empowering Innovation:
          </h2>
          <h2 
          data-aos="fade-up"
          className=" text-center text-xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text lg:text-3xl  mb-6">
            Unleashing the Potential of Hybrid Mobile App Development
          </h2>
          <div className="text-justify text-sm sm:text-lg space-y-6">
            <p
            data-aos="fade-right"
            className="flex items-start gap-3">
              Hybrid mobile applications are those applications that run
              seamlessly across multiple operating systems including but not
              limited to Android, IOS making it the most popular app in the
              world.
            </p>
            <p 
            data-aos="fade-right"
            className="flex items-start gap-3">
              The businesses will be able to reach out to their targeted
              customers irrespective of the phone there are using, easily and
              naturally offering their services.
            </p>
            <p 
            data-aos="fade-right"
            className="flex items-start gap-3">
              The reduction in costs, and the speed with which the hybrid apps
              can be build enables time to market acceleration and easy
              accessibility for the users all culminate into making Hybrid apps
              all that more most sought after mobile apps in the world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HybridApp;
