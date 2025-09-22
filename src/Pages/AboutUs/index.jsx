import React from 'react'
import HeroSection from './Herosection/HeroSection'
import HeroSectionTwo from './HeroSectionTwo/HeroSectionTwo'
import StatisticsSection from './StatisticsSection/StatisticsSection'
import StorySection from './StorySection/StorySection'
import CommitmentSection from './CommitmentSection/CommitmentSection'
import TeamCollaboration from './TeamCollaboration/TeamCollaboration'
import TestimonySection from './TestimonySection/TestimonySection'
import ProductSection from './ProductSection/ProductSection'
import LastSection from './LastSection/LastSection'

const AboutUs = () => {
  return (
    <div>
      <HeroSection/>
      <HeroSectionTwo/>
      <StatisticsSection/>
      <StorySection/>
      <CommitmentSection/>
      <TeamCollaboration/>
      <TestimonySection/>
      <ProductSection/>
      <LastSection/>
    </div>
  )
}

export default AboutUs