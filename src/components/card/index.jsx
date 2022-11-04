import React from 'react'
import './style.scoped.css'

function Cards(props) {
   
  return (
   <div className="containers">
    <div className="image">
        
        <img src={props.img} alt="img.png" />
    </div>
    <div className="desc">
        <p className="name">{props.name}</p>
        </div>

    <div className="loc">
        <p className="location">{props.location}</p>

    </div>
   </div>
  )
}

export default Cards