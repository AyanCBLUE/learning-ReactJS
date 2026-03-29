import React from 'react'
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div>
        <h2>Ayan</h2>
        <div>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contacts'>Contacts</Link>
        </div>
    </div>
  )
}

export default Nav