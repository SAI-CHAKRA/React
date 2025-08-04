import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
    let [todos, setTodos] = useState([{task:"sample task", id:uuidv4(),isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let styles={
        textDecoration:"Line-through",
        color:"red",
    }

    let addNewTask=()=>{
        setTodos((prevTodo)=>{
            return [...prevTodo, {task: newTodo ,id:uuidv4()}]
        });
        setNewTodo("");
    };

    let updateTodoValue =(event)=>{
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    };

    let markAllDone = ()=>{
        setTodos((prevTodo)=>(
            prevTodo.map((todo)=>{
                return{
                    ...todo,
                    isDone:true,
                }
            })
        ))
    };

    let markAsDone = (id)=>{
        setTodos((prevTodo)=>(
            prevTodo.map((todo)=>{
                if(todo.id === id){
                    return{
                        ...todo,
                        isDone:true,
                    }
                }else{
                    return todo;
                }
            })
        ))
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>todos.filter((prevTodo)=>prevTodo.id!=id));
    }
    return (
        <div>
            <input type="text" placeholder="add task" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask}>Add Todo</button>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul> 
                {todos.map((todo)=>{
                    return (<li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine:"line-through",color:"red"}:{}}>{todo.task}</span>
                        &nbsp;&nbsp;
                        {/* arrow function will not execute that function automatically when we open localhost but it create an copy of it with an argument */}
                        <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>  
                        &nbsp;&nbsp;
                        <button onClick={()=>{markAsDone(todo.id)}}>Mark as done</button> 
                    </li>
                )})}
            </ul>
            <br></br>
            <button onClick={markAllDone}>Mark as Done All</button>
        </div>
    );
}