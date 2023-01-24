import React from 'react'
import styled , {css} from 'styled-components';
import "./login.css"
import { useState } from 'react';
export const Login = () => {

const [email,setEmail] = useState(""); // intial state is an empty string
//use the use hook to pass in the email
//email is a variable
const [password, setpassword] = useState("");
const Button = styled.button`
background-color: black;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

const handleSubmit = (event) => {
  event.preventDefault();
  alert(`The email you entered was: ${email}`)//now we can determine if the form was submitted
  //used string interpolation to get the email entered
  //on change gets the value of the current entered email


}

  return (
    <>
    <h2>Login</h2>
    <form action='post' onSubmit={handleSubmit}>
    <div className='input-container'>
    <input className='input-text' type='text' value={email} onChange={(e) =>setEmail(e.target.value)}  placeholder='Email Address' name={email}></input>
    <input className='input-text' type='text' value={password} onChange={(e) =>setpassword(e.target.value)} placeholder='Password'></input>
    </div>
    <Button type='submit' >Submit</Button>

    </form>
    
    </>
  )
}
