import { useTheme } from '../../context/ThemeContext'
import portfolioData from '../../data/portfolioData'
import ProjectCard from '../ProjectCard'

function Projects() {
  const { isDark } = useTheme()

  return (
    <section id="projects" className={`min-h-screen flex items-center px-6 py-20 transition-colors duration-300
      ${isDark ? 'bg-[#0a0a11]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-purple-500 text-sm mb-2">// my work</p>
          <h2 className={`text-4xl font-extrabold mb-4 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`max-w-xl mx-auto text-sm ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
            A selection of projects I've built — each one taught me something new.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects