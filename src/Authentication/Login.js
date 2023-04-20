import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Form from './Signup'
import './Formdesign.css'
function Login() {
 
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
  
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
          
          Emailid:email,
          Password:password,
        }
       
        const id=new Date().getTime().toString()
       
        localStorage.getItem(id,JSON.stringify(enteredformdata) );
       console.log(enteredformdata);
        
        setEmail('');
        setPassword('');

    };
  return (
    <div className='body'>
      <div className='center'>
      <h1>Login</h1>
      <form onSubmit={formHandler}>
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
          New user <a href="/Signup">Registration</a>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login