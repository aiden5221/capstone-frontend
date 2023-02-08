import React from 'react'
import { useNavigate } from 'react-router-dom'
import{ UserAuth } from '../context/AuthContext'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

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
        <h1 style={{fontSize:"40pt"}}>Account</h1>
        <p style={{fontSize:"25pt", marginTop: "50px"}}>Welcome {user.displayName}</p>
        <p style={{fontSize:"15pt", marginTop: "30px"}}>User Email: {user.displayName && user.email}</p>



        <Button onClick={handleLogout} variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "20px"
                    }}>Logout</Button>

        <Link to="/Home"> <Button variant="contained" style={{
                backgroundColor: "#5f4c4c",
                marginTop: "20px",
                marginLeft: "10px"
        }} >Home </Button></Link>
    </div>
  )
}

export default Account