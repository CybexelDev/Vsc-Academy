import React from 'react'
import HeroSection from '../Components/Hero'
import CareerSupportSection from '../Components/AboutUs/CareerSupport'
import VisionMissionSection from '../Components/AboutUs/Mission'
import About from '../Components/AboutUs/About'

function HomePage() {
  return (
    <div>
        <HeroSection />
        <CareerSupportSection />
        <VisionMissionSection />
        <About />
    </div>
  )
}

export default HomePage