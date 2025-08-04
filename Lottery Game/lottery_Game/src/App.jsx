
import './App.css'
import Lottery from './Lottery';
import {sum} from './helper';

function App() {

    // we can write any type of winning condition here and we can pass this function as props in Lottery component

  let winCondition = (ticket)=>{
    // return sum(ticket) === 10;
    //return ticket.every((num) => num === ticket[0]);   // every number is equal to the first number 
    return ticket[0] === 0;   // first number of an array is zero
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
