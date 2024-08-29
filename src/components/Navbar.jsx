import React from 'react'

const Navbar = () => {
  return (
    
      <header className="bg-white p-6 flex justify-between items-center">
        <div className="ml-10 flex items-center space-x-2">
          <img src="/logo.png" alt="Emblem" className="h-12" />
          <h1 className="text-4xl font-bold text-custom-maroon">RailMadad</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-orange-500 text-white px-4 py-2 rounded">
            139 for Security/Medical Assistance
          </div>
          <button className="ml-4 p-2 bg-blue-500 text-white rounded-full">
            <span className="sr-only">Accessibility</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </div>
      </header>
    
  )
}

export default Navbar