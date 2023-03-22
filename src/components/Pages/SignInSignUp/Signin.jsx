import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GoogleButton } from 'react-google-button';
import { googleSignIn, signIn } from '../../../utils/firebase/firebase';
import { useRecoilState } from 'recoil'
import { userState } from '../../../utils/recoil/atoms/user/user';
import { snackbarState } from '../../../utils/recoil/atoms/snackbar/snackbar';
import { activePageState } from '../../../utils/recoil/atoms/navbar/activePage';
import './styles.css'

const defaultFormFields = {
    email: '',
    password: '',
}

const Signin = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [user, setUser] = useRecoilState(userState)
    const [snackbar, setSnackbar] = useRecoilState(snackbarState);
    const [activePage, setActivePage] = useRecoilState(activePageState);
    const navigate = useNavigate()

    const assignUser = (uid, displayName, email) => {
        setUser({uid: uid, displayName: displayName, email: email})
    }


    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const { user: { uid, displayName, email }} = await signIn(formFields)
            assignUser(uid, displayName, email)
            setSnackbar({active: true, message: 'Successfully logged in', isError: false})
            setActivePage('Home')
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormFields({ ...formFields, [name]: value })
    }

    const handleGoogleSignIn = async () => {

        try {
            const { user: { uid, displayName, email }} = await googleSignIn()
            assignUser(uid, displayName, email)
            setSnackbar({active: true, message: 'Successfully logged in', isError: false})
            setActivePage('Home')
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className="form" style= {{ marginTop:"10vh" }}>
            <div>
                <Typography variant='h2'style= {{ marginBottom:"3vh" }}>Login</Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <div >
                    <TextField id="outlined-basic" label="Email Address" name='email' variant="outlined" size="small" margin="normal" style= {{width:"50vh", maxWidth:'70vw', backgroundColor:"white"}} onChange={handleChange} className='border p-3' type="email" />
                </div>

                <div>
                    <TextField id="outlined-basic" label="Password" variant="outlined" name='password' size="small" margin="normal" style= {{width:"50vh", maxWidth:'70vw', backgroundColor:"white"}} onChange={handleChange} className='border p-3' type="password" />
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

                <p style={{marginTop:"3vh"}}>
                    Don't have an account? <Link to='/Signup' className='underline'>Sign up.</Link>
                </p>

            </form>
    </div>
  )
}

export default Signin