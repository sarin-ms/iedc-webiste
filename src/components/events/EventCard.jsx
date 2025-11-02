export default function EventCard({ event }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img src={event.image || "/iedc.webp"} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-gray-600 uppercase">{event.category}</span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${event.status === "upcoming" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}
          >
            {event.status}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-black">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>📅 {event.date}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>
        </div>
      </div>
    </div>
  )
}
