"use client"

export default function EventFilter({ activeFilter, setActiveFilter }) {
  const filters = ["all", "upcoming", "past", "workshop", "hackathon"]

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            activeFilter === filter ? "bg-black text-white" : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  )
}
