import React, { useState } from 'react'

const StateChange = () => {

    const [player, setPlayer] = useState('mario');
    const handleClick = () => {
      setPlayer('luigi');
      console.log(player);
    }

    return (
        <div className='state'>

            <h2>My name is {player}</h2>
            <button onClick={handleClick}>Change name</button>

        </div>
    )
}

export default StateChange