import React from 'react'

const card = (props) => {
  return (
    <div className='parent'>
        <div className="card">
                <img src={props.img} alt={props.alt || "Profile Image"} />
                <h1>{props.user}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='btn'>view profile</button>
        </div>
    </div>
  )
}

export default card