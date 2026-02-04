import React from 'react'
import Section1 from './component/Section1/Section1.jsx'
import Section2 from './component/Section2/Section2.jsx'

const App = () => {
  const user = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
      intro: '1', 
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '2', 
      tag: 'Happy'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1670282392820-e3590c1c5c54?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '3', 
      tag: 'Excited'
    }
  ]

  return (
    <div>
      <Section1 user={user}/>
      <Section2 /> 
     
    </div>
  )
}

export default App