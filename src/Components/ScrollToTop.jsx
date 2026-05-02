import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function ScrollToTop() {
  const { isDark } = useTheme()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 z-50 font-mono text-sm
        ${isDark
          ? 'bg-[#131320] border-purple-500/40 text-purple-400 hover:bg-purple-500/10'
          : 'bg-white border-purple-200 text-purple-600 hover:bg-purple-50 shadow-md'
        }`}>
      ↑
    </button>
  )
}

export default ScrollToTop