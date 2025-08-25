import React from 'react'
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* Hero-section */}
      <section
        className="relative h-[90%] w-full bg-cover bg-center flex items-center justify-center py-20 px-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            International Conference
            on
            Photonics and Emerging
            Materials for Futuristic
            Technology
            (PEMFT-2025)

          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
            Organized by Department of Physics
            Chaudhary Charan Singh
            University Meerut, Uttar Pradesh
            (INDIA) <br/>
            Workshop date 12 Nov 2025 <br/>
            Conference dates 13-15 Nov. 2025.
          </p>
          <Link to="/registration">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition">
              Register Now
            </button>
          </Link>
        </div>
      </section>

      {/* Strip */}
        <div className="w-full bg-gradient-to-r from-orange-500 to-orange-700 py-3 overflow-hidden">
          <div className="marquee">
            <span className="text-white text-lg font-medium">
              📅 Date: 15-16 March 2025
            </span>
            <span className="text-white text-lg font-medium">
              📍 Venue: Chaudhary Charan Singh University, Meerut
            </span>
            <span className="text-white text-lg font-medium">
              🎯 Theme: Innovation & Technology for Future
            </span>
          </div>
        </div>

      {/* About Conference */}
      <div className='flex flex-col justify-center items-center mt-8'>
        <h3 className='text-3xl font-bold text-orange-500'>About Conference</h3>
        <span className='text-justify text-xl text-orange-400 px-8 py-6'>
          The conference theme “Photonics and Emerging Materials for
          Futuristic Technology” (PEMFT-2025) ties together the pressing need
          for sustainability with the potential of materials science to drive
          transformative technological solutions. It aims to explore innovative
          research and development that contributes to a greener, more
          sustainable future through cutting-edge advancements in both photonic
          and material design applications. Moreover, this conference serves as
          a pivotal forum for academicians, researchers, and
          industry professionals across the globe to come together and
          explore the most recent developments in photonics and materials
          science. This academic forum serves as a catalyst for the exchange of
          innovative ideas, research findings, and collaborative initiatives aimed
          at addressing contemporary challenges for sustainable
          technology. Participants will have the opportunity to network with
          leading global experts and gain insights into cutting-edge research.
          The conference also aims to foster partnerships focusing towards
          sustainable photonics and materials science.
        </span>
      </div>

      {/* Important Dates Section */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 m-6">
        {/* Card 1 */}
        <div className="flex-1 min-w-[280px] max-w-xs flex items-center justify-center text-center bg-white shadow-2xl shadow-orange-500/50 rounded-lg p-4">
          <p className="text-sm sm:text-base">
            <span className="font-semibold text-orange-800">Mode of Presentation</span> <br />
            Plenary / Invited / Oral / Poster
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 min-w-[280px] max-w-xs flex items-center justify-center text-center bg-white shadow-2xl shadow-orange-500/50 rounded-lg p-4">
          <p className="text-sm sm:text-base">
            <span className="font-semibold text-orange-800">Conference Venue</span> <br />
            Atal Sabhagar <br />
            Chaudhary Charan Singh University, Meerut <br />
            Uttar Pradesh (INDIA)
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="flex-1 min-w-[280px] max-w-sm flex items-center justify-center text-center bg-white shadow-2xl shadow-orange-500/50 rounded-lg p-4">
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-orange-800">Important Dates</span> <br />
            Abstract Submission Deadline: September 15, 2025 <br />
            Notification of Acceptance: September 30, 2025 <br />
            Last date of registration: October 15, 2025 <br />
            Full Paper Submission: October 30, 2025 <br />
            Abstract Submission at: <span className="font-medium">pemft2025@gmail.com</span>
          </p>
        </div>
      </div>

    </>
  )
}

export default Home