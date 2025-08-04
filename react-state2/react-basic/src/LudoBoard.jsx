import { useState } from "react";

export default function LudoBoard(){

    let [moves, setMoves] = useState({blue:0,red:0,yellow:0,green:0});
    let [arr,setArr] = useState(["no moves"]);

    let updateBlue = ()=>{
        // console.log(`moves.blue:${moves.blue}`);
        // setMoves((prevMoves)=>{
        //     return {...prevMoves,blue:prevMoves.blue + 1};
        // });

        // general way, but below this used call back use it
        // arr.push("bb moves");
        // setArr(arr);
        // console.log(arr);

        setArr((prevArr)=>{
            return [...prevArr, "example moves"];
        });
    }
    let updateRed = ()=>{
        console.log(`moves.red:${moves.red}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red + 1};
        });
    }
    let updateYellow = ()=>{
        console.log(`moves.yellow:${moves.yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow + 1};
        });
    }
    let updateGreen = ()=>{
        console.log(`moves.green:${moves.green}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green + 1};
        });
    }

    return(
        <div>
            <h1>game begins</h1>
            <div className="board">
                <p>{arr}</p>
                <p>Blue Moves : {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

                <p>Red Moves : {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>

                <p>Yellow Moves : {moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>

                <p>Green Moves : {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}