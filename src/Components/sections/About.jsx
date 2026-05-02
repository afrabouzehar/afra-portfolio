import { useTheme } from '../../context/ThemeContext'
import portfolioData from '../../data/portfolioData'

function About() {
  const { isDark } = useTheme()

  return (
    <section id="about" className={`min-h-screen flex items-center px-6 py-20 transition-colors duration-300
      ${isDark ? 'bg-[#0a0a11]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Avatar + code decoration */}
        <div className="flex flex-col items-center gap-6">

          {/* Avatar */}
          <div className="relative">
            <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center shadow-2xl shadow-purple-900/40">
              <span className="text-white text-8xl font-extrabold opacity-30">A</span>
            </div>
            {/* Floating badge */}
            <div className={`absolute -bottom-4 -right-4 px-4 py-2 rounded-xl border font-mono text-xs
              ${isDark
                ? 'bg-[#131320] border-purple-500/30 text-purple-400'
                : 'bg-purple-50 border-purple-200 text-purple-600'
              }`}>
              &gt; available_
            </div>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-4 w-full mt-6">
            {[
              { value: "3+", label: "Projects" },
              { value: "5+", label: "Languages" },
              { value: "1+", label: "Years coding" },
            ].map(({ value, label }) => (
              <div key={label} className={`text-center p-4 rounded-xl border
                ${isDark
                  ? 'bg-[#131320] border-purple-900/20'
                  : 'bg-purple-50 border-purple-100'
                }`}>
                <p className="text-2xl font-bold text-purple-500">{value}</p>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          {/* Label */}
          <p className="font-mono text-purple-500 text-sm mb-2">// about me</p>
          <h2 className={`text-4xl font-extrabold mb-6 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
            Who am I?
          </h2>
          <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            {portfolioData.bio}
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: "Name", value: portfolioData.name },
              { label: "Location", value: portfolioData.location },
              { label: "Email", value: portfolioData.email },
              { label: "Phone", value: portfolioData.phone },
            ].map(({ label, value }) => (
              <div key={label} className={`p-4 rounded-xl border
                ${isDark
                  ? 'bg-[#131320] border-purple-900/20'
                  : 'bg-gray-50 border-gray-100'
                }`}>
                <p className="text-purple-500 font-mono text-xs mb-1">{label}</p>
                <p className={`text-sm font-medium truncate ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <p className="font-mono text-purple-500 text-sm mb-3">// education</p>
          <div className="flex flex-col gap-3 mb-8">
            {portfolioData.education.map((edu) => (
              <div key={edu.degree} className={`p-4 rounded-xl border-l-2 border-purple-500
                ${isDark ? 'bg-[#131320]' : 'bg-purple-50'}`}>
                <p className={`font-semibold text-sm ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
                  {edu.degree}
                </p>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
                  {edu.school} · {edu.year}
                </p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <p className="font-mono text-purple-500 text-sm mb-3">// languages</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {portfolioData.languages.map((lang) => (
              <span key={lang} className={`text-xs px-3 py-1 rounded-full border font-mono
                ${isDark
                  ? 'border-purple-500/30 text-purple-400 bg-purple-500/10'
                  : 'border-purple-200 text-purple-600 bg-purple-50'
                }`}>
                {lang}
              </span>
            ))}
          </div>

          {/* Social buttons */}
          <div className="flex gap-4">
            {[
              { label: "GitHub", href: portfolioData.social.github },
              { label: "LinkedIn", href: portfolioData.social.linkedin },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className={`px-6 py-2 rounded-lg text-sm font-semibold border transition-all duration-200
                  ${label === "GitHub"
                    ? isDark
                      ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                      : 'bg-gray-900 border-gray-900 text-white hover:bg-gray-700'
                    : 'bg-purple-600 border-purple-600 text-white hover:bg-purple-500'
                  }`}>
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About