import React from 'react'
import StudentExperience from '../Components/StudentsExperience/StudentsExperience'
import HeroSection from '../Components/Hero/Hero'
import CareerSupportSection from '../Components/AboutUs/CareerSupport'
import VisionMissionSection from '../Components/AboutUs/Mission'
import About from '../Components/AboutUs/About'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Brands from '../Components/Brands/Brands'
import Careers from '../Components/Careers/Careers'

function HomePage() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <Brands />

      <section id="course">
        <Careers />
      </section>

      <section id="about">

      <StudentExperience />

      <CareerSupportSection />

      <VisionMissionSection />

        <About />
      </section>
<section id="contact">
      <Footer />
            </section>

    </div>
  );
}

export default HomePage;

