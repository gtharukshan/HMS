import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Doctors from './components/Doctors'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Features />
      <About />
      <Doctors />
      <Services />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
