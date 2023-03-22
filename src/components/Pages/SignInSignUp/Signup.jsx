import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './styles.css'
import { Typography } from '@mui/material';
import { createUser } from '../../../utils/firebase/firebase';
import { useRecoilState } from 'recoil';
import { userState } from '../../../utils/recoil/atoms/user/user';
import { snackbarState } from '../../../utils/recoil/atoms/snackbar/snackbar';
import { activePageState } from '../../../utils/recoil/atoms/navbar/activePage';

const defaultFormFields = {
    email: '',
    password: '',
}

const Signup = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [error, setError] = useState('')
    const [user, setUser] = useRecoilState(userState)
    const [snackbar, setSnackbar] = useRecoilState(snackbarState);
    const [activePage, setActivePage] = useRecoilState(activePageState);

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try{
            const { user: { uid, displayName}} = await createUser(formFields)
            setUser({uid: uid, displayName: displayName})
            setSnackbar({active: true, message: 'Successfully logged in', isError: false})
            setActivePage('Home')
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

  return (
    <div className='form' style= {{marginTop:"10vh"}}>
        <div>
            <Typography variant='h2'>Register</Typography>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <TextField classname="email" id="outlined-basic" label="Email Address" name='email' variant="outlined" size="small" margin="normal" style= {{ width:"50vh", maxWidth:'70vw', backgroundColor:"white", marginTop:"5vh"}} onChange={handleChange} type="email" />
            </div>

            <div>
                <TextField id="outlined-basic" label="Password" variant="outlined" name='password' size="small" margin="normal" style= {{width:"50vh", maxWidth:'70vw', backgroundColor:"white"}} onChange={handleChange} type="password" />
            </div>

            <Button 
                variant="contained" 
                style={{
                    backgroundColor: "#5f4c4c",
                    marginTop:"3vh",
                }}
                onClick={handleSubmit}
            >Sign Up</Button>

            <p>
                Already have an account?
                <Link to='/Login' className='underline' style={{marginLeft:'0.2rem'}} >Sign in.</Link>
            </p>
        </form>
    </div>
  )
}

export default Signup;