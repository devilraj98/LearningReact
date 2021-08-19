import React , {useState,useEffect} from 'react';
import axios from 'axios'
function UseEffectHook(props) {

 const [state, Setstate]  = useState(0);

 useEffect(()=>{

    axios.get("")


 })

    return (
        <div>
            Hello 
        </div>
    );
}

export default UseEffectHook;