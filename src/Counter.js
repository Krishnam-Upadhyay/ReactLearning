import { useState } from "react";
const Counter =(props)=>{
    const [counter,setCounter] = useState(props.countBy);
    
    
    setTimeout(() => {
        setCounter(counter + props.countBy);
        
    }, 1000);
    return (
        <>
        <p>Start At:{props.startAt}</p>
        <p>Count By :{props.countBy}</p>
        <h3>{counter}</h3>
        
        
        </>
    )
}


Counter.defaultProps ={
    startAt:0,
    countBy:1
}

export default Counter;