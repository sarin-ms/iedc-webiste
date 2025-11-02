"use client"

import { useState } from "react"
import EventCard from "../components/events/EventCard"
import EventFilter from "../components/events/EventFilter"
import ViewMoreButton from "../components/ViewMoreButton"
import { events } from "../data/events"

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true
    return event.category === activeFilter || event.status === activeFilter
  })

  return (
    <section id="events" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Events</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Discover our upcoming workshops, hackathons, and networking events
        </p>

        <EventFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <ViewMoreButton href="/events" text="View More" />
      </div>
    </section>
  )
}
