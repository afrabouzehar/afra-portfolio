import { useState, useEffect } from 'react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  // useEffect runs code AFTER the component renders
  useEffect(() => {
    function handleScroll() {
      // Show button only after scrolling down 300px
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // ← empty array means "run this only once, on first render"

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // If not visible, render nothing
  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-50 text-xl"
    >
      ↑
    </button>
  )
}

export default ScrollToTop