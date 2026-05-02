import portfolioData from '../data/portfolioData'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Name */}
        <span className="text-2xl font-bold text-blue-400">
          {portfolioData.name}
        </span>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-6 list-none">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-full transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-blue-600 text-white text-sm px-5 py-2 rounded-full transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800" />

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © {currentYear} {portfolioData.name}. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer