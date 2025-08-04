import { useState } from 'react'

export default function Counter(){
    const [count, setCount] = useState(0);
    function incCount(){
        // setCount(count+1);
        // setCount(count+1);

        setCount((currCount)=>{
            return currCount + 1;
        });
        setCount((currCount)=>{
            return currCount + 1;
        });
        
    }
    return( 
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incCount}>Inc Count</button>
        </div>
    );
}