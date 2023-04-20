import { useState } from "react";

function WdsUseSt() {
    const [count, setCount] = useState(0);
    // const [theme, setTheme] = useState('blue');

    const decCount = () => {
        setCount(prevCount => prevCount - 1)
    }
    const incCount = () => {
        setCount(prevCount => prevCount + 1)
        // setTheme('red')
    }

    return(
        <>
        <h2>State:</h2>
            <button onClick={decCount}>-</button>
            <span>{count}</span>
            <button onClick={incCount}>+</button>
            {/* <span>{theme}</span> */}
        </>
    );
}

export default WdsUseSt;
