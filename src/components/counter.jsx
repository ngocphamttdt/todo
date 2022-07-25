import React from "react"

const Counter = ({ onIncrease }) => {
    console.log('Render counter');
    return (
        <>
            <h3>Hello Counter</h3>
            <button onClick={onIncrease}>Click</button>
        </>
    )
}

export default React.memo(Counter)