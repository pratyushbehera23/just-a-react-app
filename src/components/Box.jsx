import React from 'react'
import '../styles/Box.css'
import icon from '../images/planet.png'

const Box = (props) => {
  return (
    <div className='box'>
        <img src={icon} alt="planet" />
        <h3>{props.heading}</h3>
        <p>{props.para}</p>
    </div>
  )
}

export default Box