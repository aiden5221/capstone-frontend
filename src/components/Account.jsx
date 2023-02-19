import React from 'react'
import { useNavigate } from 'react-router-dom'
import{ UserAuth } from '../context/AuthContext'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material';

const Account = () => {
  
  const { user, logout } = UserAuth()
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message)
    }
  }

  const goHome = async () => {

    try {
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }

  }

  return (
    <div className='form'>
        <Typography variant='h3'>Account</Typography>
        <Typography variant='h4' style={{marginTop: "50px"}}>Welcome {user.displayName}</Typography>
        <Typography variant='h6' style={{marginTop: "30px"}}>User Email: {user.email}</Typography>

        <Button onClick={handleLogout} variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "5vh"
                    }}>Logout</Button>

        <Button onClick={goHome} variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "5vh",
                marginLeft: "3vh"
        }}>Home</Button>
    </div>
  )
}

export default Account