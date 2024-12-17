// import React from 'react'
// import homepage from "../../assets/homeimage.png"
// import ServicesCards from './card'
// import Sections from './sections'
// import Footer from '../CRM/Footer'
// import Navbar from '../Navbar'

// function ServicesHome() {
//     return (
//         <div >
//             <Navbar/>
//             <div className="w-full">
//                 <img 
//                     src={homepage} 
//                     alt="Homepage" 
//                     className="w-full h-[450px] rounded-lg shadow-lg"
//                 />

//             </div>
//             <div className='text-[25px] font-serif pt-5 px-10'>
//                 <p>Where innovation meets expertise in Microsoft technology solutions. With our comprehensive suite of services, we empower businesses to unlock their full potential and thrive in today's digital landscape. Explore how SpY D Technology can transform  business with Microsoft technology:</p>
//             </div> 
//             <div>
//             <h1 className='text-[#00CEFF] font-serif pt-5  text-center text-[30px]'>Empower Your Business with Cutting-Edge Microsoft Solutions:</h1>
//             <p className='text-[#141414]  font-serif text-center text-[30px] mt-5'>Transformative Technologies for Seamless Success</p>
//             </div>
//             <div>
//              <ServicesCards/>
//              <Sections/>
//              <Footer/>
//             </div>
//         </div>
//     )
// }

// export default ServicesHome
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import homepage from "../../../assets/microsoft/homeimg.png";

import ServicesCards from './card';
import Sections from './sections';
import Footer from '../../Footer';
import CallToAction from '../../CallToAction';



function ServicesHome() {
    useEffect(() => {
        AOS.init(); // Initialize AOS for other animations if needed
      }, []);
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="relative">
    {/* Background Header Section */}
    <div
    data-aos="fade-zoom-in"
  className="relative bg-cover bg-center md:h-96  h-40 flex items-center justify-center"
  style={{
    backgroundImage: `url(${homepage})`,
  }}
>
  {/* Overlay for transparent blue color */}
  <div className="absolute inset-0 bg-[#00CEFF] opacity-60"></div>

  {/* Centered text content */}
  <div 
  data-aos="fade-down"
  className='md:space-y-5'>
  <h1 className="relative md:text-4xl text-center text-white">
  Elevate Your Business with "SpY D Technologies" 
  
  </h1>
  <p className="relative md:text-4xl text-center text-white ">
  Microsoft Solutions
  </p>
 
  </div>
  
</div>

            {/* Text Section */}
            <div
            data-aos="fade-down"
            className="text-lg lg:text-xl text-justify px-10 lg:px-0  py-10 lg:py-10 lg:w-3/5 lg:ml-[20%] ">
                <p>
                    Where innovation meets expertise in Microsoft technology solutions. 
                    With our comprehensive suite of services, we empower businesses to unlock 
                    their full potential and thrive in today's digital landscape. Explore how SpY D 
                    Technology can transform your business with Microsoft technology:
                </p>
            </div>

            {/* Heading Section */}
            <div className="text-center mt-5">
                <h1 
                data-aos="fade-down"
                className="text-[#00CEFF] lg:text-xl text-lg">
                    Empower Your Business with Cutting-Edge Microsoft Solutions:
                </h1>
                <p
                data-aos="fade-down"
                className="text-[#141414] text-lg lg:text-2 xl mt-3">
                    Transformative Technologies for Seamless Success
                </p>
            </div>

            {/* Services Section */}
            <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40">
                <ServicesCards />
                <Sections />
            </div>

            {/* Footer Section */}
            <CallToAction />
            <Footer />
        </div>
    );
}

export default ServicesHome;
