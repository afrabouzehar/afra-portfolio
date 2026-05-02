import portfolioData from '../../data/portfolioData'
import SkillCard from '../SkillCard'

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-blue-50 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-widest mb-2">
            What I Know
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <SkillCard
              key={skill}
              name={skill}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills