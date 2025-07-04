import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import { GiPerspectiveDiceSixFacesTwo } from 'react-icons/gi'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AchievementsShowCase from './components/AchievementsShowCase'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black teacking-tighter text-white text-gray-200 antialiased'>
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      {/*<AchievementsShowCase />*/}
      {/*<Testimonials />*/}
      <ContactForm />
      <Footer />
    </main>
  )
}

export default App
