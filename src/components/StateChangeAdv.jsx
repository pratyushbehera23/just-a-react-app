import React, { useState } from 'react'

const StateChangeAdv = () => {
    
    const [events, setEvents] = useState([
        {title: "Hello, I'm home", id: 1},
        {title: "Let's get the Dinner done", id: 2},
        {title: "Good night sweetheart", id: 3}
      ]);
    
      const handleDel = (id) => {
        // setEvents(events.filter((e) => {
        //   return id !== e.id;
        // }))
        setEvents((prevEvents) => {
          return prevEvents.filter((e) => {
            return id !== e.id;
          })
        })
        console.log(id);
      }
    
      const [showEvents, setShowEvents] = useState(true);
    
      console.log(showEvents);

    return (
        <div>
            {showEvents && events.map((e, index) => (
                <li key={e.id}>
                    <p>{index} - {e.title}</p>
                    <button onClick={() => handleDel(e.id)}>Del</button>
                </li>
                ))}

                {showEvents && (
                <div>
                    <button onClick={() => setShowEvents(false)}>Hide event</button>
                </div>
                )}
                {!showEvents && (
                <div>
                    <button onClick={() => setShowEvents(true)}>Show event</button>
                </div>
            )}
        </div>
    )
}

export default StateChangeAdv