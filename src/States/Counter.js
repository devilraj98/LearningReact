import React from 'react';
import { useState } from 'react';

function Counter(props) {
    
    // const CounterState = useState(0);
    // console.log(CounterState); 

    const [count , setCount] =useState(0);
    
    let incrementCount= () => {
        setCount((prevcount)=>prevcount+1)
    }
    
    return (
        <div>
            <button onClick={incrementCount}>+</button>
          
        </div>
    );
}

export default Counter;