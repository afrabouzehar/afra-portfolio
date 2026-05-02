import { useState } from 'react'
import portfolioData from '../../data/portfolioData'

function Contact() {
  // One state variable per form field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  // This function runs every time the user types in any field
  function handleChange(event) {
    const { name, value } = event.target
    // Update only the field that changed, keep the rest
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // This function runs when the form is submitted
  function handleSubmit(event) {
    event.preventDefault() // Stops the page from reloading
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-purple-50 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-500 font-semibold uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: Contact Info */}
          <div>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a question,
              a project idea, or just want to say hi — my inbox is always open!
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  @
                </div>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  {portfolioData.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                  GH
                </div>
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            {submitted ? (
              // Show this when form is submitted
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  Thanks for reaching out, I'll get back to you soon.
                </p>
              </div>
            ) : (
              // Show the form when not yet submitted
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200"
                >
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