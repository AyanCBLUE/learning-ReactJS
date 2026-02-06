import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
  e.preventDefault()
  console.log(`${title} : \n${details}`);
  const copyTask = [...task]
  copyTask.push({title, details})
  setTask(copyTask)
  console.log(copyTask);
  
  setTitle('')
  setDetails('')
  }

  return (
  <div className= 'lg:flex h-screen bg-linear-to-r from-black from-30% to-indigo-500 text-white'>

    <form onSubmit={(e)=>{
      submitHandler(e);
      }} className='p-10 flex font-medium lg:w-1/2 flex-col gap-3'>
      <h1 className='text-3xl font-bold mb-3'>Add Notessss</h1>
      
      {/* PEHLA INPUT FOR HEADING */}
      <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 py-2 border-2 rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
      />

      {/* DETAILED VALA INPUT */}
      <textarea 
        type="text" 
        placeholder='Enter Details' 
        className='px-5 py-2 h-40 border-2 rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
      />

      <button className='px-5 py-2 border-2 rounded font-bold '>Submit</button>
    </form>  

    <div className=' lg:w-1/2 lg:border-l-2 p-10 px-20 h-80 lg:h-full'>
      <h1 className='text-3xl font-bold'>My Notessss</h1>
      <div className='flex flex-wrap gap-5 justify-start items-start my-5  h-[95%] overflow-auto'>
        
        {task.map((e,idx)=>{
          return <div key={idx} className='text-indigo-950 h-52 w-42 bg-indigo-200 border-2 rounded-2xl overflow-auto'>
            <div className='p-4'>
              <h2 className='font-bold mb-2 text-xl'>{e.title}</h2>
            <p className='leading-tight text-indigo-400'>{e.details}</p>
            </div>
        </div>
        })}
      </div>
    </div> 

  </div> 
  )
}

export default App