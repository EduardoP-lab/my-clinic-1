import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './normalize.css'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      easing: 'ease-out-cubic',
      offset: 120,
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
