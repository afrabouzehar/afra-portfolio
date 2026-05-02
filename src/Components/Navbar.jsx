import portfolioData from '../data/portfolioData'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <span className="text-xl font-bold text-purple-600">
          {portfolioData.name}
        </span>

        {/* Navigation Links */}
        <ul className="flex gap-8 list-none">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar