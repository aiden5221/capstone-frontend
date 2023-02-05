import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import "../styles.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        console.log(email,password)
        try{

            await createUser(email, password)
            navigate('/Account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <div className='form'>
        <div>
            <h1>Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <TextField classname="email" id="outlined-basic" label="Email Address" variant="outlined" size="small" margin="normal" style= {{width:"500px", backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
            </div>

            <div>
                <TextField id="outlined-basic" label="Password" variant="outlined" size="small" margin="normal" style= {{width:"500px", backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
            </div>


            <Button variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "10px"
            }}
            onClick={handleSubmit}
            >Sign Up</Button>

            <p style={{
                fontSize:"10pt"
                }}>
                Already have an account? <Link to='/' className='underline'>Sign in.</Link>
            </p>

        </form>
    </div>
  )
}

export default Signup