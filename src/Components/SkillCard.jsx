function SkillCard({ name, index }) {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600",
    "from-green-400 to-green-600",
    "from-orange-400 to-orange-600",
    "from-pink-400 to-pink-600",
    "from-teal-400 to-teal-600",
  ]

  // Pick a color based on position in the list
  const color = colors[index % colors.length]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center gap-3 border border-gray-100">
      
      {/* Color dot */}
      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color}`} />
      
      {/* Skill name */}
      <p className="font-semibold text-gray-800 text-center">{name}</p>

    </div>
  )
}

export default SkillCard