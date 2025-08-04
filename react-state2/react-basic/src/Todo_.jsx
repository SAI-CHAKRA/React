import { useState } from "react";

export default function Todo_(){
    let [todos, setTodos]=useState(["sample task"]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setTodos([...todos,newTodo]);
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    return(
       <div>
         <input type="text" placeholder="add task" value={newTodo} onChange={updateTodoValue}/>
         <button onClick={addNewTask}>Submit</button>
         <ul>
            {todos.map((todo)=>{
                return <li>{todo}</li>
            })}
         </ul>
       </div>
    );
}