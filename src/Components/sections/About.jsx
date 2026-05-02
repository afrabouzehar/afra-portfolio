import portfolioData from '../../data/portfolioData'

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Image placeholder */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl">
            <span className="text-white text-6xl font-bold">
              {portfolioData.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Right: Text content */}
        <div>
          <p className="text-blue-500 font-semibold uppercase tracking-widest mb-2">
            About Me
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Who am I?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            {portfolioData.bio}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Name", value: portfolioData.name },
              { label: "Title", value: portfolioData.title },
              { label: "Email", value: portfolioData.email },
              { label: "Location", value: "Morocco" },
            ].map((info) => (
              <div key={info.label}>
                <p className="text-blue-500 font-semibold text-sm uppercase">
                  {info.label}
                </p>
                <p className="text-gray-700 font-medium">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About