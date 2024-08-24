import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Working from './components/Working'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <div className='font-primary overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <About/>
        <Working/>
        <Services/>
        <Pricing/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
