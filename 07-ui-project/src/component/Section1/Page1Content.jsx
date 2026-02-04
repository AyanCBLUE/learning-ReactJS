import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex items-center gap-10 px-16 py-10 h-[90vh]'>
        <LeftContent />
        <RightContent user={props.user} />    
    </div>
  )
}

export default Page1Content