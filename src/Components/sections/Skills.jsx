import { useTheme } from '../../context/ThemeContext'
import portfolioData from '../../data/portfolioData'
import SkillCard from '../SkillCard'

function Skills() {
  const { isDark } = useTheme()

  const categories = [...new Set(portfolioData.skills.map(s => s.category))]

  return (
    <section id="skills" className={`min-h-screen flex items-center px-6 py-20 transition-colors duration-300
      ${isDark ? 'bg-[#0d0d14]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-purple-500 text-sm mb-2">// what I know</p>
          <h2 className={`text-4xl font-extrabold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
            My Skills
          </h2>
        </div>

        {/* Skills by category */}
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <p className={`font-mono text-xs mb-4 uppercase tracking-widest
              ${isDark ? 'text-slate-600' : 'text-gray-400'}`}>
              {category}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {portfolioData.skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                  />
                ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Skills