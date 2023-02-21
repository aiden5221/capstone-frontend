import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { GoogleButton } from 'react-google-button';
import { UserAuthG } from '../../context/AuthContextG';
import './styles.css'


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
    <div className="form" style= {{marginTop:"20vh"}}>
            <div>
                <Typography variant='h2'style= {{marginBottom:"3vh"}}>Login</Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <div >
                    <TextField id="outlined-basic" label="Email Address" variant="outlined" size="small" margin="normal" style= {{width:"50vh", maxWidth:'70vw', backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)} className='border p-3' type="email" />
                </div>

                <div>
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" margin="normal" style= {{width:"50vh", maxWidth:'70vw', backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} className='border p-3' type="password" />
                </div>

                <Button variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "10px"
                    }} 
                    onClick={handleSubmit}
                    >LOGIN</Button>

                <GoogleButton onClick={handleGoogleSignIn} style={{
                    margin: "auto",
                    marginTop: "4vh"
                }}/>    

                <p style={{
                fontSize:"1.1em",
                marginTop:"3vh"
                }}>
                    Don't have an account? <Link to='/Signup' className='underline'>Sign up.</Link>
                </p>

            </form>
    </div>
  )
}

export default Signin