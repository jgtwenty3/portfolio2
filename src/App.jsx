import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Footer from './components/Footer'
import Contact from './components/Contact'
import TechStack from './components/TechStack'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <TechStack/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App