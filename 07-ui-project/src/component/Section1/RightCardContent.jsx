import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>
          <h1 className='bg-white flex h-10 w-10 items-center justify-center font-bold text-2xl rounded-full'>{props.id + 1}</h1>
          <div className='text-lg leading-normal'>
            <p className='text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iste sit libero perferendis.</p>
           <div className='flex justify-between'>
             <button className='bg-blue-400 text-white font-medium rounded-full px-8 py-2'>{props.tag}</button>
            <button className='bg-blue-400 text-white font-medium rounded-full px-3 py-2 ml-4'><i class="ri-arrow-right-line"></i></button>
           </div>
          </div>
        </div>
  )
}

export default RightCardContent