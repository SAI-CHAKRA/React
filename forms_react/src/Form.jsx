import { useState } from "react";
export default function Form(){
    let [formData, setFormData] =useState({
        fullName:"",
        username:"",
        password:"",
    });

    // let handleFullName = (event) => {
    //     //console.log(event.target.value);
    //     setFullName(event.target.value);
    // }
    // let handleUserName = (event) => {
    //     //console.log(event.target.value);
    //     setUserName(event.target.value);
    // }

    let handleInputChange = (event)=>{

        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        
        setFormData((currValue)=>{
            //currValue[fieldName] = newValue; or we can use below code
            //return {...currValue, [fieldName]:newValue}; or we can use below code
            return {...currValue, [event.target.name]:event.target.value};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:"",
            password:"",
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Enter full name</label>
            <input type="text" placeholder="enter your full name" value={formData.fullName} 
            onChange={handleInputChange} id="fullName" name="fullName" />
            
            <br />
            <label htmlFor="username">Enter username</label>
            <input type="text" placeholder="enter username" value={formData.username} 
            onChange={handleInputChange} id="username" name="username"/>
            <br />
            <br />
            <label htmlFor="password">Enter password</label>
            <input type="password" placeholder="enter password" value={formData.password} 
            onChange={handleInputChange} id="password" name="password"/>
            <button>Submit</button>
        </form>
    );
}