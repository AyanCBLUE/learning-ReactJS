import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 px-16'>
        <h4 className='bg-linear-to-r from-black to-gray-500 uppercase border-0 text-white py-2 px-6 rounded-full hover:scale-105 transition-all duration-500'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full text-sm hover:scale-105 transition-all duration-500'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar