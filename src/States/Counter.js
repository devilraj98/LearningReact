import React from 'react';
import { useState } from 'react';

function Counter(props) {
    
    // const CounterState = useState(0);
    // console.log(CounterState); 

    const [count , setCount] =useState(0);
    
    let incrementCount= () => {
        setCount((prevcount)=>prevcount+1)
    }
    let decrementCount = () => {
        setCount((prevcount)=>prevcount-1)
    }
    
    return (
        <div>
            <button onClick={incrementCount}>+</button>
           <h1> <span>{count}</span> </h1>
            <button onClick={decrementCount}>-</button>
        </div>
    );
}

export default Counter;