import { useTheme } from '../context/useTheme'

function ProjectCard({ title, description, link, tags, index }) {
  const { isDark } = useTheme()

  const accentColors = [
    'from-purple-600 to-purple-800',
    'from-violet-600 to-purple-700',
    'from-fuchsia-600 to-purple-700',
    'from-purple-700 to-indigo-700',
  ]

  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group
      ${isDark
        ? 'bg-[#131320] border-purple-900/20 hover:border-purple-500/40'
        : 'bg-white border-gray-100 hover:border-purple-200 shadow-sm'
      }`}>

      {/* Top gradient bar */}
      <div className={`h-2 bg-gradient-to-r ${accentColors[index % accentColors.length]}`} />

      <div className="p-6">
        {/* Title */}
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className={`font-mono text-xs px-3 py-1 rounded-full border
              ${isDark
                ? 'text-purple-400 bg-purple-500/10 border-purple-500/20'
                : 'text-purple-600 bg-purple-50 border-purple-200'
              }`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200
            ${isDark
              ? 'text-purple-400 hover:text-purple-300'
              : 'text-purple-600 hover:text-purple-500'
            }`}
        >
          View Project
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard