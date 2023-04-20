import React, { useState } from 'react'
import {Link} from "react-router-dom";
import './Formdesign.css'
function Form() {
    const[name,setName]=useState("")
    const[lastname,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const nameHandler=(event)=>{
        setName(event.target.value)
        console.log(name)
    }
    const lastNameHandler=(event)=>{
      setLastName(event.target.value)
      console.log(lastname)
    }
    const emailHandler=(event)=>{
        setEmail(event.target.value)
        console.log(email)
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
        console.log(password);
    }

    const formHandler=(event)=>{
        event.preventDefault();
        
        const enteredformdata={
          FirstName:name,
          LastName:lastname,
          Emailid:email,
          Password:password,
        }
       
        const id=new Date().getTime().toString()
        localStorage.setItem(id,JSON.stringify(enteredformdata));
        // localStorage.setItem(id,JSON.stringify(password));
        console.log(enteredformdata);
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');

    };
  return (
    <div className='body'>
      <div className='center'>
      <h1>Registration</h1>
      <form onSubmit={formHandler}>
      <div className='txt_field'>
        <input type='text' onChange={nameHandler} value={name} />
        <label>First name</label>
        </div>
        <div className='txt_field'>
          <input type="text" onChange={lastNameHandler} value={lastname}/>
          <label>Last Name</label>
        </div>
        <div className='txt_field'>
        <input type='email' onChange={emailHandler} value={email}/>
        <label>Email id</label>
        </div>
        <div className='txt_field'>
        <input type='password' on onChange={passwordHandler} value={password}/>
        <label>Password</label>
        </div>

        
        <input type='Submit'></input>
        <div className="Login_link">
          Already registered <a href="./Login">Login</a>
        </div>
      </form>
       
      </div>
    </div>
  )
}

export default Form