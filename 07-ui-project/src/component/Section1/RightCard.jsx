import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 overflow-hidden shrink-0 relative rounded-4xl shadow-teal-300 shadow-lg hover:scale-105 transition-all duration-500'>
        <img className='object-cover h-full w-full ' src={props.img} alt="A beautiful Girl with emerald eyes" />
         <RightCardContent id={props.id} tag={props.tag} />  
    </div>
 
  )
}

export default RightCard