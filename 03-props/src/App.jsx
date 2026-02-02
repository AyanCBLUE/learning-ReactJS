import React from 'react'
import Card from './component/card.jsx';
const App = () => {
  return (
  <div className='parent'>
    <Card user="Ayan Chatterjee" img="https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <Card user="John Doe"  img="https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
    <Card user="Jane Smith"  img="https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>  
  </div>
  )
}

export default App