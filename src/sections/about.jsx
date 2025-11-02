import React from 'react'

function About() {
  return (
  <section id="about" className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About IEDC CEC</h2>

      <p className="mt-4 text-lg text-gray-600 max-w-3xl">
        The Innovation and Entrepreneurship Development Cell (IEDC) at CEC is dedicated to fostering a culture of innovation and entrepreneurship among students. Our mission is to empower aspiring entrepreneurs with the resources, mentorship, and opportunities they need to turn their ideas into successful ventures.
      </p>

      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative p-6 border rounded-lg">
          <div className="absolute top-4 right-4 text-black" aria-hidden="true">
            <img src="/icons/innovation.webp" alt="" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
          <p className="mt-3 text-gray-600">As a leading innovation hub, we are committed to fostering a culture of creativity and out-of-the-box thinking. We offer a range of programs and services designed to support innovators at all stages of their journey, from ideation to commercialization.</p>
        </div>

        <div className="relative p-6 border rounded-lg">
          <div className="absolute top-4 right-4 text-black" aria-hidden="true">
            <img src="/icons/entrepreneurship.webp" alt="" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Entrepreneurship</h3>
          <p className="mt-3 text-gray-600">Our organization is dedicated to fostering a culture of entrepreneurship in our local community. We partner with universities and incubators to provide mentorship and resources to aspiring entrepreneurs.</p>
        </div>

        <div className="relative p-6 border rounded-lg">
          <div className="absolute top-4 right-4 text-black" aria-hidden="true">
            <img src="/icons/technology.webp" alt="" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Technology</h3>
          <p className="mt-3 text-gray-600">Our organization is dedicated to helping individuals and businesses stay ahead of the curve in the rapidly evolving world of technology. We host regular workshops and panel discussions that explore the latest trends and technologies shaping the industry.</p>
        </div>
      </div>

      <div className="mt-10 border-t pt-8">
        <h3 className="text-xl font-semibold text-gray-900">How to Join</h3>
        <p className="mt-3 text-gray-600 max-w-3xl">Whether you have an idea, want to learn startup skills, or want to mentor others, join IEDC. <br /> Apply to our bootcamp, sign up for events, or reach out to collaborate with the team.</p>
        <a href="#contact" className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-md">Join Now!</a>
      </div>
    </div>
  </section>
  )
}

export default About
