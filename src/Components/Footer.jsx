import { useTheme } from '../context/ThemeContext'
import portfolioData from '../data/portfolioData'

function Footer() {
  const { isDark } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className={`border-t py-12 px-6 transition-colors duration-300
      ${isDark ? 'bg-[#0a0a11] border-purple-900/30' : 'bg-white border-purple-100'}`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        <span className={`font-bold text-xl ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
          {portfolioData.name}
        </span>

        <ul className="flex flex-wrap justify-center gap-8 list-none">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}
                className={`text-sm transition-colors duration-200
                  ${isDark ? 'text-slate-500 hover:text-purple-400' : 'text-gray-400 hover:text-purple-600'}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {[
            { label: "GitHub", href: portfolioData.social.github },
            { label: "LinkedIn", href: portfolioData.social.linkedin },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className={`text-sm px-5 py-2 rounded-lg border transition-all duration-200
                ${isDark
                  ? 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-50'
                }`}>
              {label}
            </a>
          ))}
        </div>

        <div className={`w-full h-px ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'}`} />

        <p className={`text-xs font-mono ${isDark ? 'text-slate-600' : 'text-gray-400'}`}>
          © {year} {portfolioData.name} — Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  )
}

export default Footer