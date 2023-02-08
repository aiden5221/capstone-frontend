import React from 'react'
import { useNavigate } from 'react-router-dom'
import{ UserAuth } from '../context/AuthContext'
import Button from '@mui/material/Button';

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

  return (
    <div className='form'>
        <h1 className='text-2xl font-bold py-4'>Account</h1>
        <p>Welcome {user.displayName}</p>
        <p>User Email: {user.displayName && user.email}</p>



        <Button onClick={handleLogout} variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "10px"
                    }}>Logout</Button>
    </div>
  )
}

export default Account