import portfolioData from '../../data/portfolioData'

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-purple-50 px-6 pt-20">
      
      {/* Greeting */}
      <p className="text-purple-500 font-semibold text-lg mb-2 tracking-widest uppercase">
        Hello, I'm
      </p>

      {/* Name */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        {portfolioData.name}
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-medium text-purple-600 mb-6">
        {portfolioData.title}
      </h2>

      {/* Bio */}
      <p className="text-gray-500 text-lg max-w-xl mb-10">
        {portfolioData.bio}
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
        >
          Contact Me
        </a>
      </div>

    </section>
  )
}

export default Hero