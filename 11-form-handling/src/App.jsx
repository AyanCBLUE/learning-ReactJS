import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("SUBMITTED");
    
  }
  return (
    <div>
      <form onSubmit={ (e)=> {
        submitHandler(e)
      } 
      }>
        <input type="text" placeholder= 'Type here...' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App