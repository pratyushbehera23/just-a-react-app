import React from 'react'
import Box from './Box'
import '../styles/Boxes.css'

const Boxes = () => {
  return (
    <div className='boxes'>
        <h2>Boxes</h2>
        <div className="box-grid">
            <Box heading="Hey" para="This is para1" />
            <Box heading="Hey" para="This is para2" />
            <Box heading="Hey" para="This is para3" />
            <Box heading="Hey" para="This is para4" />
            <Box heading="Hey" para="This is para5" />
            <Box heading="Hey" para="World and Universe is ita concept of Bang or Wong." />
        </div>
    </div>
  )
}

export default Boxes