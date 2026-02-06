import React from 'react'
import { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState('')
  const submitHandling = (e)=>{
    e.preventDefault()
    console.log('The form is submitted by:', title);
    setTitle('')
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandling(e)
      }}>
        <input type="text" placeholder='Just enter already' value={title} 
          onChange ={(e)=>{
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App