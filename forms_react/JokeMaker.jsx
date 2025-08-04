import { useState,useEffect } from "react";

export default function JokeMaker(){
    
    let [joke,setJoke]=useState({});

    let URL = "https://official-joke-api.appspot.com/random_joke";

    let fetchJoke = async()=>{
        let res = await fetch(URL);
        let jsonResponse = await res.json();
        //console.log(jsonResponse);
        setJoke({
            setup: jsonResponse.setup,
            punchline: jsonResponse.punchline
        })
    }

    useEffect(()=>{
        async function getNewJoke(){
            // simply we can use it fetchJoke() function to get the joke
            fetchJoke();
            // let res = await fetch(URL);
            // let jsonResponse = await res.json();
            // console.log(jsonResponse);
            // setJoke({
            //     setup: jsonResponse.setup,
            //     punchline: jsonResponse.punchline
            // })
        }
        getNewJoke();   
    },[]);


    return (<div>
        <h2>Joke:</h2>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
        <button onClick={fetchJoke}>Create New Joke</button>
    </div>);
}

