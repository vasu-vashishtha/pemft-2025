import React from 'react'
import { MdMarkEmailUnread, MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <>
      {/* Contact Details Section */}
      <div className="m-8">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl shadow-orange-500/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-orange-800 mb-6">
            Contact Details
          </h2>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-3 bg-orange-50 hover:bg-orange-100 p-3 rounded-lg transition duration-300">
              <span><MdMarkEmailUnread className='text-xl text-orange-600' /></span>
              <a href="mailto:pemft2025@gmail.com" className="text-gray-800 hover:text-orange-700 font-medium">
                pemft2025@gmail.com
              </a>
            </div>

            {/* Phone - Prof. Anil Kumar Malik */}
            <div className="flex items-center space-x-3 bg-orange-50 hover:bg-orange-100 p-3 rounded-lg transition duration-300">
              <span><MdCall className='text-xl text-orange-600' /></span>
              <a href="tel:+918368922050" className="text-gray-800 hover:text-orange-700 font-medium">
                +91-8368922050 <span className="text-sm text-gray-500">(Prof. Anil Kumar Malik)</span>
              </a>
            </div>

            {/* Phone - Dr. Neeraj Panwar */}
            <div className="flex items-center space-x-3 bg-orange-50 hover:bg-orange-100 p-3 rounded-lg transition duration-300">
              <span><MdCall className='text-xl text-orange-600' /></span>
              <a href="tel:+917726031844" className="text-gray-800 hover:text-orange-700 font-medium">
                +91-7726031844 <span className="text-sm text-gray-500">(Dr. Neeraj Panwar)</span>
              </a>
            </div>

            {/* Phone - Dr. Yogendra K. Gautam */}
            <div className="flex items-center space-x-3 bg-orange-50 hover:bg-orange-100 p-3 rounded-lg transition duration-300">
              <span><MdCall className='text-xl text-orange-600' /></span>
              <a href="tel:+919149324785" className="text-gray-800 hover:text-orange-700 font-medium">
                +91-9149324785 <span className="text-sm text-gray-500">(Dr. Yogendra K. Gautam)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-center text-orange-800 mb-4">
            Venue Location - Atal Bihari Vajpayee Auditorium (Atal Sabhagar), CCSU Meerut
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="CCSU Meerut Atal Sabhagar Map"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7134.322449230923!2d77.735862!3d28.969821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU4JzIwLjciTiA3N8KwNDQnMzUuMSJF!5e0!3m2!1sen!2sin!4v1692612345678`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
