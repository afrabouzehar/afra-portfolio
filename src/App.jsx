import Navbar from './Components/Navbar'
import Hero from './Components/sections/Hero' 
import About from './Components/sections/About'
import Skills from './Components/sections/Skills'
import Projects from './Components/sections/Projects'
import Contact from './Components/sections/Contact'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

export default App