import React from 'react'

// Importing other components

import HomeHero from '../components/HomeHero'
import ServicesComponent from '../components/ServicesComponent'
import TrainingComponent from '../components/TrainingComponent'
import About from './About'
import Eligibility from '../components/Eligibility'
import Donor from '../components/Donor'
import HowItWorks from '../components/HowItWorks'
import Team from './Team'
import Contact from './Contact'
import FAQ from './FAQ'


function Home() {
  return (
    <div className='mt-50'>
      <HomeHero />
      <ServicesComponent />
      <About />
      <TrainingComponent />
      <Eligibility />
      <HowItWorks />
      <Donor />
      <Team />
      <Contact />
      <FAQ />
      {/* <Testimonies /> */}
    </div>
  )
}

export default Home