import React from 'react'

const Registration = () => {
  return (
    <>
      {/* Registration Fee Details */}
      <div className="m-8">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl shadow-purple-500/40 rounded-lg p-6">
  <h2 className="text-2xl font-bold text-center text-pink-800 mb-4">
    Registration Fee Details
  </h2>

  {/* Scrollable Table Wrapper */}
  <div className="overflow-x-auto relative">
    <table className="min-w-full border border-pink-100 rounded-lg">
      <thead className="bg-purple-600 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Category</th>
          <th className="py-3 px-4 text-left">Registration Fee</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-purple-50">
          <td className="py-3 px-4">Scholars/Students</td>
          <td className="py-3 px-4">INR 3000/-</td>
        </tr>
        <tr className="hover:bg-purple-50">
          <td className="py-3 px-4">Faculty/Scientists</td>
          <td className="py-3 px-4">INR 5000/-</td>
        </tr>
        <tr className="hover:bg-purple-50">
          <td className="py-3 px-4">Industry</td>
          <td className="py-3 px-4">INR 10000/-</td>
        </tr>
        <tr className="hover:bg-purple-50">
          <td className="py-3 px-4">International Participants</td>
          <td className="py-3 px-4">USD 150/-</td>
        </tr>
        <tr className="hover:bg-purple-50">
          <td className="py-3 px-4">Accompanying Person (India)</td>
          <td className="py-3 px-4">INR 2000/-</td>
        </tr>
        <tr className="hover:bg-purple-50">
          <td className="py-3 px-4">Accompanying Person (Int’l)</td>
          <td className="py-3 px-4">USD 50/-</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Scroll hint for mobile */}
  <p className="text-sm text-pink-500 mt-2 text-center sm:hidden">
    👉 Scroll sideways to view all details
  </p>
</div>



        {/* Bank Section */}
        <div className="mt-6 bg-purple-100 border-l-4 border-purple-600 p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Bank Details</h3>
           <ul className="list-disc list-inside text-purple-700 space-y-1">
            <li>Branch: INDIAN BANK, MEERUT UNIVERSITY
            CAMPUS, MEERUT</li>
            <li>Account Name: Main SB A/c CCSU
            Meerut</li>
            <li>Account No : 20195822291</li>
            <li> IFSC Code:
            IDIB0000M690
            </li>
          </ul>
        </div>

        {/* Notes Section */}
        <div className="mt-6 bg-purple-100 border-l-4 border-purple-600 p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Note</h3>
          <ul className="list-disc list-inside text-purple-700 space-y-1">
            <li>Registration fee includes conference kit and meals</li>
            <li>Accommodation charges will be borne by participants</li>
            <li>Fee payment link will be available with the registration link</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Registration