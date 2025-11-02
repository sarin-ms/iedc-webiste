"use client"

export default function BlogFilter({ activeCategory, setActiveCategory }) {
  const categories = ["all", "events", "announcements"]

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            activeCategory === category ? "bg-black text-white" : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}
