import React from 'react'
import TeamMember from "../components/team/TeamMember"
import { team } from "../data/team"

export default function TeamPage() {
  const coordinators = team.filter((member) => member.role === "Coordinator")
  const leads = team.filter((member) => member.role === "Lead")
  const members = team.filter((member) => member.role === "Member")

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <section className="py-20 px-4 md:px-8 lg:px-16 pt-24">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <a 
              href="/" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Execom
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the passionate individuals driving innovation and excellence at IEDC
            </p>
            <div className="mt-4 w-24 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {leads.length > 0 && (
            <div className="mb-20">
              <div className="flex items-center justify-center mb-10">
                <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-xs"></div>
                <h3 className="text-2xl md:text-3xl font-bold mx-6 text-white">Execom Members</h3>
                <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-xs"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
                {leads.map((member, index) => (
                  <div 
                    key={member.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TeamMember member={member} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {coordinators.length > 0 && (
            <div className="mb-20">
              <div className="flex items-center justify-center mb-10">
                <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-xs"></div>
                <h3 className="text-2xl md:text-3xl font-bold mx-6 text-white">Coordinators</h3>
                <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-xs"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {coordinators.map((member, index) => (
                  <div 
                    key={member.id} 
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TeamMember member={member} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {members.length > 0 && (
            <div>
              <div className="flex items-center justify-center mb-10">
                <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-xs"></div>
                <h3 className="text-2xl md:text-3xl font-bold mx-6 text-white">Core Members</h3>
                <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent flex-1 max-w-xs"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                {members.map((member, index) => (
                  <div 
                    key={member.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TeamMember member={member} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  ) 
}
