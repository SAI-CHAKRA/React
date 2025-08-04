import { useState, useEffect } from "react";

export default function Counter(){
    let [countX,setCountX] = useState(0);
    let [countY,setCountY] = useState(0);

    let incCountX = ()=>{
        setCountX((prevCount)=> prevCount + 1);
    }
    let incCountY = ()=>{
        setCountY((prevCount)=> prevCount + 1);
    }
    
    // // this useEffect will run only when countX changes
    // useEffect(function printSomething(){
    //     console.log("this is side effect")
    // },[countX]);

    // // this useEffect will run for both when countX and countY changes
    // useEffect(function printSomething(){
    //     console.log("this is side effect")
    // },[countX, countY]);

    //  // this useEffect will run only when countY changes
    // useEffect(function printSomething(){
    //     console.log("this is side effect")
    // },[countY]);

    // this useEffect will run only for the first time rendering of component, after that it won't execute
     useEffect(function printSomething(){
        console.log("this is side effect")
    },[]);

    return(
        <div>
            <h1>Counter : {countX} </h1>
            <button onClick={incCountX}>Increment Counter X</button>
            <hr></hr>
            <h1>Counter : {countY} </h1>
            <button onClick={incCountY}>Increment Counter Y</button>
        </div>
    );
} 