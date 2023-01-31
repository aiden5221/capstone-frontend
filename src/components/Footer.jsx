import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { NAV_HEADINGS } from './constants'

function Footer({ isLoggedIn }) {

    const TextStyling = {
        transition: 'color 0.5s ease-out',
        fontFamily: "'Lato', sans-serif;",
        '&:hover': {
            color: "white",
        },
        whiteSpace: 'nowrap',
        fontSize: '15px'
    }

    const LinkStyling = {
        color:'black',
        textDecoration:'none',
    }

    const checkIfLoggedIn = (heading) => heading == 'Login' && isLoggedIn || heading == 'Logout' && !isLoggedIn

    return (
        <Grid2
            container
            sx={{ position: 'fixed', width:'100%', display:'flex', left:0, bottom:30, right:0,  borderTop:'1px solid' }}>
                <Grid2
                    item
                    xsOffset={1}
                    xs={10}
                    sx={{display:'flex'}}>
                    <Typography
                        sx={{ position:'fixed', right:'20%', bottom:0, fontFamily:"'Lato', sans-serif;" }}>
                        &#169; 2023 Job Board
                    </Typography>
                    <Grid2
                        item
                        xs={1}>
                        <Stack
                            sx={{ marginTop:1 }}
                            spacing={1}>
                                {
                                
                                    NAV_HEADINGS.map((heading) => {

                                        if(checkIfLoggedIn(heading)) return null

                                        return (
                                            <Link
                                                to={heading}
                                                style={ LinkStyling }>
                                                <Typography
                                                    variant='h5'
                                                    sx={ TextStyling }>
                                                    {heading}
                                                </Typography>
                                            </Link>
                                        )
                                    })
                                
                                }
                            
                        </Stack>
                    </Grid2>
                    {
                        // Provides logged in features such as creating posting and viewing your postings
                        isLoggedIn &&
                            <Grid2>
                                <Stack
                                    sx={{ marginTop:1 }}
                                    spacing={1}>
                                    <Link
                                        style={LinkStyling}
                                        to={'/createPosting'}>
                                        <Typography
                                            sx={TextStyling}>
                                            Create a posting
                                        </Typography>
                                    </Link>
                                    <Link
                                        style={LinkStyling}
                                        to={'/yourPostings'}>
                                        <Typography
                                            sx={TextStyling}>
                                            View your postings
                                        </Typography>
                                    </Link>

                                </Stack>
                            </Grid2>
                    }
                    
                </Grid2>
        </Grid2>
    )
}

export default Footer