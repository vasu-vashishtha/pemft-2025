import React from 'react'

const ConferenceTopics = () => {
  return (
    <>
      {/* Conference Topics Section */}
    <div className="m-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl shadow-orange-500/40 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-orange-800 mb-4">
          Conference Topics
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Quantum Photonics and Quantum Materials</li>
          <li>Photonics and Materials for Sensors and Imaging</li>
          <li>Nonlinear Optics and Ultrafast Photonics</li>
          <li>Nanophotonics and Metamaterials</li>
          <li>Optoelectronic & Luminescent Materials</li>
          <li>Smart Materials for Renewable Energy</li>
          <li>Advanced Functional Materials</li>
          <li>Advanced Nanomaterials for Energy Storage and Conversion</li>
          <li>Catalysts for Environment Remediation</li>
          <li>2D Materials / Sensors</li>
          <li>Next-Generation Materials for Carbon Capture and Utilization</li>
          <li>High Performance Structural Materials</li>
          <li>Spintronic and Multiferroic Materials</li>
          <li>Computational Modeling and Simulations</li>
        </ul>
        <div className='mt-2'>
          <span className='text-md font-semibold'>Abstract Template:- </span>
          <span>
            <a href="https://cdn.ccsuniversity.ac.in/public/pdf/2025/09/Abstract%20submission%20template.docx" target="_blank" rel="noopener noreferrer">
              Click here to download
            </a>
          </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default ConferenceTopics