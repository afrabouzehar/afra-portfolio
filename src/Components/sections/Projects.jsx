import portfolioData from '../../data/portfolioData'
import ProjectCard from '../ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-widest mb-2">
            My Work
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects I've built — each one taught me something new.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects