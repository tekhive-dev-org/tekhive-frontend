import React from 'react'
import HeroSection from '../components/sections/home/HeroSection'
import HeroSectionTwo from '../components/sections/home/HeroSectionTwo'
import ServicesSection from '../components/sections/home/ServicesSection'
import WhyChooseUs from '../components/sections/home/WhyChooseUsSection'
import SolutionSection from '../components/sections/home/SolutionSection'
import PartnersSection from '../components/sections/home/PartnersSection'

const Home = () => {
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

export default Home