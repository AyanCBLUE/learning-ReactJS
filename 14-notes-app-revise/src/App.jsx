import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  // Stoping the page from reloading 
  const defaultReload = (e)=> {
    e.preventDefault()
    // task array banake usko reference copyTask main copy kar diye,
    //  uske bad push kardiye khali array main values ko, 
    // phir sab emply hoga then new value dale ge to new value in new array and visse versa.
    const copyTask=[...task];
    copyTask.push({title, details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  // Deleting the notes using splics,
  // and the idx that have used in the map function when createing the notes boxes.
  const deleteNotes = (idx)=>{
    const copyTask =[...task];
    copyTask.splice(idx,1);
    console.log(copyTask)
    
    setTask(copyTask)
  }

  return (
    <div className='text-white h-screen bg-linear-to-r from-black to-pink-400 lg:flex'>
      <form 
        className='flex flex-col lg:w-1/2 gap-4 p-10 text-xl font-600 text-pink-200 h-1/2 lg:h-full'
        onSubmit={(e)=>{
          defaultReload(e)
        }}
      >
      {/* Pehla input title ke liye */}
        <input
          type="text" 
          placeholder='Enter you Title here'
          className='px-5 py-2 border-2 rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

      {/* Dusra input details bharne ke liye ke liye */}
        <textarea 
          type='text' 
          placeholder='Enter the details'
          className='px-5 py-2 border-2 rounded h-40 lg:h-90'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className='px-5 py-2 bg-pink-700 rounded cursor-pointer active:scale-99 font-bold'>Add notes</button>
      </form>

      <div className='lg:w-1/2 p-10 lg:border-l border-pink-500 flex flex-col items-start overflow-auto h-1/2 lg:h-full'>
        <h1 className=' text-3xl font-bold  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>TelosOfOne</h1>
        <div className='flex flex-wrap overflow-auto gap-10 justify-start items-start'>

          {task.map((elem,idx)=>{
            return <div key={idx} className='w-48 h-55 mt-7 bg-pink-500 rounded-2xl border border-pink-400  overflow-auto no-scrollbar flex flex-col justify-between items-start bg-cover bg-[url("https://images.unsplash.com/photo-1649730243961-9fced0a9c143?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
              <div className=' p-3'>
                <h3 className='font-bold mb-2 text-2xl text-white drop-shadow-md'>{elem.title}</h3>
                <p className='leading-tight text-cyan-100 font-medium'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNotes(idx)
              } } className='bg-pink-800 text-amber-50 mb-1 w-fit cursor-pointer active:scale-95 rounded font-bold  m-auto px-13 py-1 text-xs'>Delete</button>
            </div>
          })}
              </div>
      </div>
    </div>
  )
}

export default App