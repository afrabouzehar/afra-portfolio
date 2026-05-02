import { useTheme } from '../../context/useTheme'
import portfolioData from '../../data/portfolioData'

function Contact() {
  const { isDark } = useTheme()

  const contactItems = [
    { icon: "@", label: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { icon: "GH", label: "GitHub Profile", href: portfolioData.social.github },
    { icon: "IN", label: "LinkedIn Profile", href: portfolioData.social.linkedin },
  ]

  return (
    <section id="contact" className={`min-h-screen flex items-center px-6 py-20 transition-colors duration-300
      ${isDark ? 'bg-[#0d0d14]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-purple-500 text-sm mb-2">// get in touch</p>
          <h2 className={`text-4xl font-extrabold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
            Contact Me
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className={`text-base leading-relaxed mb-10 text-center ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open!
          </p>

          <div className="flex flex-col gap-4">
            {contactItems.map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 group
                  ${isDark
                    ? 'bg-[#131320] border-purple-900/20 hover:border-purple-500/40'
                    : 'bg-white border-gray-100 hover:border-purple-200 shadow-sm'
                  }`}>
                <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {icon}
                </div>
                <span className={`text-sm font-medium group-hover:text-purple-500 transition-colors duration-200
                  ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                  {label}
                </span>
                <span className="ml-auto text-purple-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact