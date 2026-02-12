import React from 'react'

const App = () => {

  localStorage.setItem('name', 'Meow Meow Chann')
  const name = localStorage.getItem('name')
  console.log(name);
  localStorage.removeItem('name')
  localStorage.clear()
  

  return (
    <div>App</div>
  )
}

export default App