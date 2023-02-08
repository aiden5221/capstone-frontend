import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { GoogleButton } from 'react-google-button';
import "../styles.css"
import { UserAuthG } from '../context/AuthContextG';



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

    const { googleSignIn, user } = UserAuthG();

    const handleGoogleSignIn = async () => {

        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if(user != null) {
            navigate('/Account')
        }
    }, [user])
    
  return (
    <Grid item xs="12" md={4}>
    <div className="form">
            <div>
                <h1>Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div >
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" size="small" margin="normal" style= {{width:"500px", backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
                </div>

                <div>
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" margin="normal" style= {{width:"500px", backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
                </div>

                <Button variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "10px"
                    }} 
                    onClick={handleSubmit}
                    >LOGIN</Button>

                <GoogleButton onClick={handleGoogleSignIn} style={{
                    margin: "auto",
                    marginTop: "20px"
                }}/>    

                <p style={{
                fontSize:"10pt"
                }}>
                    Don't have an account? <Link to='/Signup' className='underline'>Sign up.</Link>
                </p>

            </form>
    </div>

    </Grid>
  )
}

export default Signin