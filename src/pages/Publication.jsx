import React from 'react'

const Publication = () => {
  return (
    <>
      <div className="m-6 bg-purple-100 border-l-4 border-purple-600 p-4 rounded-md shadow-sm">
          <span className='text-xl font-semibold'>Full length conference papers will be published in: </span>
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Nanomaterials Science & Engineering </h3>
          <span>
            <a href="https://proa.ua.pt/index.php/nmse/issue/archive" target="_blank" rel="noopener noreferrer" className='text-purple-500'>
              https://proa.ua.pt/index.php/nmse/issue/archive
            </a>
          </span>
        </div>
    </>
  )
}

export default Publication;