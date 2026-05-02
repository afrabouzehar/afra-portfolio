import { useTheme } from '../context/ThemeContext'

function SkillCard({ name, category }) {
  const { isDark } = useTheme()

  const categoryColors = {
    Web:      isDark ? 'text-blue-400 bg-blue-500/10 border-blue-500/20'      : 'text-blue-600 bg-blue-50 border-blue-200',
    Systems:  isDark ? 'text-orange-400 bg-orange-500/10 border-orange-500/20' : 'text-orange-600 bg-orange-50 border-orange-200',
    Database: isDark ? 'text-green-400 bg-green-500/10 border-green-500/20'   : 'text-green-600 bg-green-50 border-green-200',
    Tools:    isDark ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' : 'text-yellow-600 bg-yellow-50 border-yellow-200',
    Learning: isDark ? 'text-purple-400 bg-purple-500/10 border-purple-500/20' : 'text-purple-600 bg-purple-50 border-purple-200',
  }

  const cardStyle = isDark
    ? 'bg-[#131320] border-purple-900/20 hover:border-purple-500/40'
    : 'bg-white border-gray-100 hover:border-purple-300'

  return (
    <div className={`rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center gap-3 ${cardStyle}`}>
      <span className={`text-xs font-mono px-3 py-1 rounded-full border ${categoryColors[category] || categoryColors.Learning}`}>
        {category}
      </span>
      <p className={`font-semibold text-sm text-center ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>
        {name}
      </p>
    </div>
  )
}

export default SkillCard