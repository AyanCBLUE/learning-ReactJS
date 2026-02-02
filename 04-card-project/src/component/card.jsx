import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
    <div className='parent'>
        <div className='card'>
        <div>
               <div className="top">
                <img src="https://static.vecteezy.com/system/resources/previews/016/974/554/non_2x/a-letter-logo-template-vector.jpg" alt="" />
                <button>Save <Bookmark size={13}/></button>
            </div>

            <div className="center">
                <h3>{props.company} <span>5 days left</span></h3>
                <h2>{props.post}</h2>
                <div className='tag'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>

        </div>
            <div className="bottom">
                <div>
                    <h3>${props.pay}/hr</h3>
                    <p>{props.location}</p>
                </div>
                    <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default Card