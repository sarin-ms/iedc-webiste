"use client"

import { useState } from "react"
import EventCard from "../components/events/EventCard"
import EventFilter from "../components/events/EventFilter"
import { events } from "../data/events"

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 9

  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true
    return event.status === activeFilter
  })

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const displayedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage)

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <a 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">All Events</h1>
          <p className="text-gray-600 text-lg">Explore all our events, workshops, and hackathons</p>
        </div>

        <div className="mb-8">
          <EventFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-md"
                >
                  Previous
                </button>
                <span className="text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-md"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
