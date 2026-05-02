import { useTheme } from '../context/useTheme'
import portfolioData from '../data/portfolioData'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300
      ${isDark
        ? 'bg-[#0d0d14]/90 border-purple-900/30 backdrop-blur-md'
        : 'bg-white/90 border-purple-100 backdrop-blur-md shadow-sm'
      }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <span className={`font-bold text-lg tracking-tight
          ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
          {portfolioData.name}
        </span>

        {/* Right side */}
        <div className="flex items-center gap-6">

          {/* Nav links */}
          <ul className="hidden md:flex gap-8 list-none">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-200
                    ${isDark
                      ? 'text-slate-400 hover:text-purple-400'
                      : 'text-gray-500 hover:text-purple-600'
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire me badge */}
          <span className={`hidden md:inline text-xs px-3 py-1 rounded-full border font-medium
            ${isDark
              ? 'border-purple-500/40 text-purple-400 bg-purple-500/10'
              : 'border-purple-400/40 text-purple-600 bg-purple-50'
            }`}>
            ● Available
          </span>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-200
              ${isDark
                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {isDark ? '☾' : '☀'}
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar