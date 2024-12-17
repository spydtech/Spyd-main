import React,{useEffect} from 'react'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'
import DriveEfficiency from './DriveEfficiency'
import Solutions from './Solutions'
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'


const StaffingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='font-serif'>
        <Hero />
        <Features />
        <Testimonials />
        <DriveEfficiency />
        <Solutions />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default StaffingServices