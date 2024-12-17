import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import main from "../../../assets/mobile/android/main.png"
import main1 from "../../../assets/mobile/android/main1.png"
import main2 from "../../../assets/mobile/android/main2.png";
import main3 from "../../../assets/mobile/android/main3.png";
function Androidhome() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
    return (
        <>
       <div>
          <div className=" relative flex lg:h-[400px] h-44 lg:space-x-42 bg-black">
          <div className="absolute  lg:w-full w-full  inset-0 bg-black opacity-80"></div>
          <img 
            src={main} 
            alt="Mobile App Home" 
            className="  object-cover lg:w-full w-[150px] justify-start bg-black " 
          />
          
          <img 
          className="lg:w-[650px]  w-[150px] justify-end lg:ml-48 bg-black"
          src={main1}
          />
          <div 
           data-aos="fade-down"
          className="text-white font-serif lg:text-3xl absolute text-center items-center lg:py-44 lg:p-20 py-10 p-2">
          <h1 >Android App Development</h1>
          </div>
 
          </div>
         
         
          <div className="absolute items-center lg:-mt-[26%] lg:ml-[75%] -mt-32 ml-48">
         <div 
          data-aos="zoom-in-up"
         className="   lg:h-[320px] lg:w-[320px] h-[130px] w-[130px] bg-[#0076B8] rounded-full "></div>
        <div className="flex lg:-mt-[90%] lg:-ml-24 lg:px-10 -mt-28 -ml-10 px-5">
        <img 
 data-aos="fade-left"
        className="lg:w-[200px] lg:h-[200px] w-[100px] h-[100px]"
        src={main2}
        />
        <img 
         data-aos="fade-down"
        className="lg:w-[200px] lg:h-[300px] w-[100px] h-[110px] lg:-ml-20 lg:-mt-24 -ml-10"
         src={main3}
        />
        </div>
        

          </div>
          
          </div>
        

        <div className="m-4 sm:m-8 lg:m-12 px-4 sm:px-6 lg:px-12">
          <h1 
           data-aos="fade-down"
          className="text-[#0866E2] text-3xl sm:text-4xl md:text-4xl  text-center mb-4">
            Crafting Exceptional Android Experiences
          </h1>
          <h2 
           data-aos="zoom-in-up"
          className="text-[#0866E2] text-xl sm:text-2xl md:text-2xl  text-center mb-6">
            Building Powerful Mobile Solutions for Today's Users
          </h2>

          <p 
          data-aos="fade-right"
          className="text-gray-700 text-base sm:text-base md:text-lg leading-relaxed text-justify">
            Android is a Google-owned, open-source mobile operating system extensively used by mobile manufacturers all around the world. Over 80% of smartphones worldwide run on Android.<br />
            <br />
            SPY D Private Limited excels in Android Mobile App Development and Software Development services for clients in Hyderabad, India, and worldwide. Our core team of Android developers has earned recognition and accolades for their skills and expertise.<br />
            <br />
            The entire Android App Development lifecycle, starting from understanding business requirements, analyzing niches, creating technical specifications, building teams, and designing, developing, testing, and deploying the app, is managed following globally accepted best practices to ensure timely delivery.<br />
            <br />
            At SPY D Private Limited, we focus on helping our clients reach their intended audience, offer quality services, stay ahead in market competition, and grow their businesses rapidly. We believe in building lasting business relationships with our clients because their growth is our growth.
          </p>
        </div>
        
        <div>
          
        </div>
        </>
    )
}
export default Androidhome