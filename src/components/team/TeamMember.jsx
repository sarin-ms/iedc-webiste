"use client"

import { useState } from "react"

export default function TeamMember({ member }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="text-center group">
      <div
        className="relative mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto border-4 border-gray-800 group-hover:border-purple-500 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={member.image || "/team/user.jpg"}
          alt={member.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? "grayscale-0 scale-110" : "grayscale"
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
            <a 
              href={member.linkedin} 
              className="text-white hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">{member.name}</h3>
      <p className="text-gray-400 text-sm font-medium">{member.position}</p>
    </div>
  )
}
