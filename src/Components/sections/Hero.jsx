import { useTheme } from '../../context/useTheme'
import portfolioData from '../../data/portfolioData'

function Hero() {
  const { isDark } = useTheme()

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">

      {/* Available badge */}
      <div className={`inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border mb-8 font-mono
        ${isDark
          ? 'border-purple-500/30 text-purple-400 bg-purple-500/10'
          : 'border-purple-300 text-purple-600 bg-purple-50'
        }`}>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
        AVAILABLE FOR INTERNSHIP
      </div>

      {/* Name */}
      <h1 className={`text-5xl md:text-7xl font-extrabold mb-4 leading-tight
        ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          {portfolioData.name.split(" ")[0]}
        </span>
        <br />
        <span className={isDark ? 'text-slate-300' : 'text-gray-700'}>
          {portfolioData.name.split(" ")[1]}
        </span>
      </h1>

      {/* Terminal title */}
      <div className={`font-mono text-lg md:text-xl mb-6
        ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
        &gt; {portfolioData.title}_
      </div>

      {/* Bio */}
      <p className={`text-base max-w-xl mb-10 leading-relaxed
        ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
        {portfolioData.bio}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-16">
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-sm"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-sm border
            ${isDark
              ? 'border-purple-500/40 text-purple-400 hover:bg-purple-500/10'
              : 'border-purple-300 text-purple-600 hover:bg-purple-50'
            }`}
        >
          Contact Me
        </a>
      </div>

      {/* Code block */}
      <div className={`font-mono text-sm text-left rounded-xl p-6 border w-full max-w-md
        ${isDark
          ? 'bg-[#131320] border-purple-900/40'
          : 'bg-purple-50 border-purple-100'
        }`}>
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className={isDark ? 'text-purple-400' : 'text-purple-600'}>
          <span className="text-pink-400">const </span>
          <span className={isDark ? 'text-slate-200' : 'text-gray-800'}>afra </span>
          <span className={isDark ? 'text-slate-400' : 'text-gray-500'}>=  {'{'}</span>
        </div>
        <div className="ml-4 mt-1">
          <div><span className="text-green-400">role</span><span className={isDark ? 'text-slate-400' : 'text-gray-400'}>: </span><span className="text-yellow-400">"{portfolioData.title}"</span><span className={isDark ? 'text-slate-400' : 'text-gray-400'}>,</span></div>
          <div><span className="text-green-400">location</span><span className={isDark ? 'text-slate-400' : 'text-gray-400'}>: </span><span className="text-yellow-400">"{portfolioData.location}"</span><span className={isDark ? 'text-slate-400' : 'text-gray-400'}>,</span></div>
          <div><span className="text-green-400">available</span><span className={isDark ? 'text-slate-400' : 'text-gray-400'}>: </span><span className="text-purple-400">true</span></div>
        </div>
        <div className={isDark ? 'text-slate-400' : 'text-gray-500'}>{'}'}</div>
      </div>

    </section>
  )
}

export default Hero