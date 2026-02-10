import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
  e.preventDefault()
  if(title.trim()==='' && details.trim()===''){ alert('Write Something');
  return;
  }
  const copyTask = [...task]
  copyTask.push({title, details})
  setTask(copyTask)
  setTitle('')
  setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
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
        return <div key={idx} className='text-black h-52 w-42 bg-indigo-200 border-2 rounded-2xl overflow-auto flex flex-col justify-between items-start'>
                  <div className='p-4'>
                    <h2 className='font-bold mb-2 text-xl'>{e.title}</h2>
                    <p className='leading-tight text-gray-600'>{e.details}</p>
                </div>
                <button onClick={(idx)=>{deleteNote(idx)}} className='bg-red-500 mb-2 w-fit cursor-pointer active:scale-95 rounded font-bold text-white m-auto px-8 py-1 text-xs'>Delete</button>
              </div>
        })}
      </div>
    </div> 

  </div> 
  )
}

export default App