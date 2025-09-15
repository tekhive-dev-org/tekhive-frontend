import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import HeroSectionTwo from './HeroSectionTwo/HeroSectionTwo'
import ServicesSection from './ServicesSection/ServicesSection'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import SolutionSection from './SolutionSection/SolutionSection'
import PartnersSection from './PartnersSection/PartnersSection'

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <HeroSectionTwo />
            <ServicesSection />
            <WhyChooseUs />
            <SolutionSection />
            <PartnersSection />
        </div>
    )
}

export default LandingPage