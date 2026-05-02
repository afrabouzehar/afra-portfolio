import { useState } from 'react'
import { useTheme } from '../../context/useTheme'
import portfolioData from '../../data/portfolioData'

function Contact() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const inputStyle = `w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all duration-200
    ${isDark
      ? 'bg-[#0d0d14] border-purple-900/30 text-slate-200 placeholder-slate-600 focus:border-purple-500'
      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-purple-400'
    }`

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className={`text-base leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
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

          {/* Right: Form */}
          <div className={`rounded-2xl border p-8 transition-colors duration-300
            ${isDark
              ? 'bg-[#131320] border-purple-900/20'
              : 'bg-white border-gray-100 shadow-sm'
            }`}>
            {submitted ? (
              <div className="text-center py-12">
                <div className={`w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-purple-500 text-2xl">✓</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>
                  Message Sent!
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>
                  Thanks for reaching out, I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { label: "Your Name", name: "name", type: "text", placeholder: "John Doe" },
                  { label: "Your Email", name: "email", type: "email", placeholder: "john@example.com" },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name}>
                    <label className={`block text-xs font-mono mb-2 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                      placeholder={placeholder}
                      className={inputStyle}
                    />
                  </div>
                ))}

                <div>
                  <label className={`block text-xs font-mono mb-2 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`${inputStyle} resize-none`}
                  />
                </div>

                <button type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-200">
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact