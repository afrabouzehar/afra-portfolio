import { useTheme } from './context/useTheme'
import Navbar from './Components/Navbar'
import Hero from './Components/sections/Hero'
import About from './Components/sections/About'
import Skills from './Components/sections/Skills'
import Projects from './Components/sections/Projects'
import Contact from './Components/sections/Contact'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import './index.css'

function App() {
  const { isDark } = useTheme()

  return (
    <div className={`${isDark ? 'bg-[#0d0d14] text-slate-200' : 'bg-gray-50 text-gray-900 light-mode'}`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App