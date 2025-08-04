import { useState } from "react";
import { genTicket,sum } from "./helper";
import "./Lottery.css";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n=3,winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <h2>{isWinning && "Congratulation you won!"}</h2>
            <Ticket ticket={ticket}/>
            <br></br>
            <Button action={buyTicket}/>
        </div>
    );
}