import React ,{useState} from 'react';

const UseStateHook =()=> {
    
  const [Counter,setCounter] = useState(0);

  const clickme =()=>{
     
      setCounter(Counter+1);
  }
    
    return (
        <div>
           {Counter} <button onClick={clickme}> Click me</button>
            
        </div>
    );
}

export default UseStateHook;