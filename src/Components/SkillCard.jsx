function SkillCard({ name, category }) {
  const categoryStyles = {
    Web: "bg-purple-100 text-purple-700",
    Programming: "bg-blue-100 text-blue-700",
    Database: "bg-green-100 text-green-700",
    Tools: "bg-orange-100 text-orange-700",
    Learning: "bg-pink-100 text-pink-700",
  }

  const style = categoryStyles[category] || "bg-gray-100 text-gray-700"

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3 border border-gray-100">

      {/* Category Badge */}
      <span className={`text-xs font-bold px-3 py-1 rounded-full ${style}`}>
        {category}
      </span>

      {/* Skill Name */}
      <p className="font-semibold text-gray-800 text-center">{name}</p>

    </div>
  )
}

export default SkillCard