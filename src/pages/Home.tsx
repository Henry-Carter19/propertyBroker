import React from 'react'
import CTASection from '../components/CTASection'
import WhyUsSection from '../components/WhyUsSection'
import CitiesSection from '../components/CitiesSection'
import PropertyCarousel from '../components/PropertyCarousel'
import StatsSection from '../components/StatsSection'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PropertyCarousel />
      <CitiesSection />
      <WhyUsSection />
      <CTASection />
    </>
  )
}

export default Home