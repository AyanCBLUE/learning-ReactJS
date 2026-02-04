import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-linear-to-r from-white to-[#396e6b]'>
      <Navbar />
      <Page1Content user={props.user} />
    </div>
  )
}

export default Section1