import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './styles.css'
import { Typography } from '@mui/material';

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
            <Typography variant='h4'>Register</Typography>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <TextField classname="email" id="outlined-basic" label="Email Address" variant="outlined" size="small" margin="normal" style= {{width:"50%", maxWidth:'70vw', backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
            </div>

            <div>
                <TextField id="outlined-basic" label="Password" variant="outlined" size="small" margin="normal" style= {{width:"50%", maxWidth:'70vw', backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
            </div>



            <Button variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "10px"
            }}
            onClick={handleSubmit}
            >Sign Up</Button>

            <p style={{
                fontSize:"0.8em"
                }}>
                Already have an account? <Link to='/Login' className='underline'>Sign in.</Link>
            </p>

        </form>
    </div>
  )
}

export default Signup