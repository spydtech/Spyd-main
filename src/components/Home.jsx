import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CarouselComponent from './CarouselComponent'
import WelcomeSection from './WelcomeSection'
import Methodology from './Methodology'
import TabSection from './TabSection'
import OurWorks from './OurWorks'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Footer from './Footer';
import Industry from "./Industry";
import AboutUs from './company/AboutUs'
import VisionAndMission from './company/VisionAndMission'
import WhatMakesUsDifferent from './company/WhatMakesUsDifferent'
import OurCoreValues from './company/OurCoreValues'
import StaffingServices from './company/staffingServices/StaffingServices'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        {/* <Navbar /> */}
        {/* <Hero /> */}
        <CarouselComponent />
        <WelcomeSection />
        <Methodology />
        <TabSection />
        <OurWorks />
        <Testimonials />
        <CallToAction />
        <Industry />
        <Footer />
    </div>
  )
}

export default Home