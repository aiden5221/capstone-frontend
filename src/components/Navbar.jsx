import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import '../index.css';

function Navbar() {

    const LinkStyling = {
        color:'black',
        textDecoration:'none',
    }

    const TextStyling = {
        transition: 'color 0.5s ease-out',
        fontFamily:"'Lato', sans-serif;",
        '&:hover': {
            color: "white",
        }
    }

  return (
    <Grid2 
        container 
        spacing={2}
        sx={{backgroundColor:'grey', alignItems:'center',display:'flex', }}
        >
        <Grid2 
            xsOffset={1} 
            xs={6}>
                <Link
                    to={'/home'}
                    style={{color:'black', textDecoration:'none', display:'flex', alignItems:'center'}}
                >
                    <img src={Logo} alt='Logo img' />
                    <Typography
                        sx={[{ marginLeft:'1.5rem' },  TextStyling]}
                        variant='h4'
                        
                    >
                        Job Board
                    </Typography>
                </Link>
        </Grid2>
        <Grid2 
            xs={4}
            sx={{ display:'flex',flexDirection:'row', justifyContent:'flex-end', height:'100%', alignItems:'center' }}
            >
            <Stack
                direction='row'
                spacing={12}
                marginRight={2}
                sx={{ textDecoration:'none' }}
                >
                <Link
                    to={'/home'}
                    style={LinkStyling}
                >
                    <Typography
                        variant='h5'
                        sx={TextStyling}
                    >
                        Home
                    </Typography>
                </Link>
                <Link
                    to={'/postings'}
                    style={LinkStyling}
                >
                    <Typography
                        variant='h5'
                        sx={TextStyling}
                    >
                        Postings
                    </Typography>
                </Link>
                <Link
                    to={'/login'}
                    style={LinkStyling}
                >
                    <Typography
                        variant='h5'
                        sx={[TextStyling, { color: '#322DEE'}]}

                    >
                        Login
                    </Typography>
                </Link>
            </Stack>
        </Grid2>
    </Grid2>
  )
}

export default Navbar