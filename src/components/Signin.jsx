import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import TextField from '@mui/material/TextField';
import "../styles.css"



const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { signIn } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signIn(email, password)
            navigate('/Account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

  return (

    <div className="form">
            <div>
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div >
                    <input id="outlined-basic" label="Email Address" variant="outlined" size="small" margin="normal" style= {{width:"500px", backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
                </div>

                <div>
                    <input id="outlined-basic" label="Password" variant="outlined" size="small" margin="normal" style= {{width:"500px", backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
                </div>

                <button variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "10px"
                    }} 
                    >LOGIN</button>

                <p style={{
                fontSize:"10pt"
                }}>
                    Don't have an account? <Link to='/Signup' className='underline'>Sign up.</Link>
                </p>

            </form>
    </div>
  )
}

export default Signin