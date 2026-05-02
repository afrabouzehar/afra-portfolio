function ProjectCard({ title, description, link, index }) {
  const gradients = [
    "from-blue-500 to-blue-700",
    "from-purple-500 to-purple-700",
    "from-teal-500 to-teal-700",
  ]

  const gradient = gradients[index % gradients.length]

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">

      {/* Card Top Banner */}
      <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-white text-5xl font-extrabold opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          {index + 1}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gray-900 text-white text-sm px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200"
        >
          View Project →
        </a>
      </div>

    </div>
  )
}

export default ProjectCard