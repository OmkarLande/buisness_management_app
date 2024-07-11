import React from 'react'

const Navbar = () => {
  return (
    <nav className="p-4">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-12">
        
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex space-x-4">
            <a href="/" className="text-customColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-semibold">Home</a>
            <a href="/about" className="text-customColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-semibold">About Us</a>
            <a href="/contact" className="text-customColor hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-semibold">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar