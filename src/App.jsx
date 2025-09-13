import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import HeroSectionTwo from './Components/HeroSectionTwo/HeroSectionTwo'
import ServicesSection from './Components/ServicesSection/ServicesSection'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSectionTwo />
      <ServicesSection />
      <WhyChooseUs />
      {/* ...other components... */}
    </div>
  )
}

export default App