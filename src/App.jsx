import './App.css'
import './normalize.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
