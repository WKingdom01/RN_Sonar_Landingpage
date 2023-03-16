import React from 'react'
import {
  HomeHeroSection,
  CareSection,
  WorkSection,
  SupportSection,
  CommunitySection,
  PartnersSection,
  Footer,
} from '@/components/Home'

const Home = () => {
 
  return (
    <div className="flex flex-col space-y-8">
      <HomeHeroSection />
      <CareSection />
      <WorkSection />
      <SupportSection />
      <CommunitySection />
      <PartnersSection />
      <Footer />
    </div>
  )
}

export default Home
