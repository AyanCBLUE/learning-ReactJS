import React from 'react'

// function handleClick() {
//   console.log('Button clicked!')
// }

const App = () => {
  return (
    <div>
     {/* <button onMouseOver={
        function() {
          console.log('Mouse over button!')
        }
      } className="btn">Click me</button> */}

      <input  
            onChange={(elem)=>
              console.log(elem.timeStamp)
            }

      type="text" />
    </div>
  )
}

export default App