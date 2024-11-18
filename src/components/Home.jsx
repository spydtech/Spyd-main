import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import CarouselComponent from './CarouselComponent'
import WelcomeSection from './WelcomeSection'
import Methodology from './Methodology'
import TabSection from './TabSection'
import OurWorks from './OurWorks'

function Home() {
  return (
    <div>
        <Navbar />
        {/* <Hero /> */}
        <CarouselComponent />
        <WelcomeSection />
        <Methodology />
        <TabSection />
        <OurWorks />
    </div>
  )
}

export default Home