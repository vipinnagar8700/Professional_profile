import React from 'react'
import About from '../About/About'
import HeroSection from './HeroSection'
import Skills from '../Skills/Skills'
import Services from '../Service/Services'
import Project from '../Projects/Project'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Skills/>
        <Services/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Home