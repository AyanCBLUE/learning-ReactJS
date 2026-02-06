import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: 'Ayan', age: 22})

  const btnClicked = ()=>{
    // const newNum = {...num};
    // if(newNum.user === 'Ayan') {
    //   newNum.user = 'The Honoured One Ayan Chatterjee';
    // } else {
    //   newNum.user = 'Ayan';
    // }
    //setNum(newNum)

    //Also
      setNum(prev=> {
        if(prev.user==='Ayan'){ 
          return {...prev, user: 'bankai'}
        } else {
          return {...prev, user:'Ayan'}
        }
      })}
  return (
    <div>
      <h1>{num.user}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App