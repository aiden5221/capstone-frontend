import { Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function MobileNavbar({ isLoggedIn }) {
    const [showSidebar, setShowSidebar] = useState(false)
    
    const sideBarHandler = () => {
        setShowSidebar(!showSidebar)
    }

    const TextStyling = {
        fontFamily:"'Lato', sans-serif;",
        fontWeight:'bold',
        transition: 'color 0.5s ease-out',
        '&:hover': {
            color: "white",
        },
    }

    const LinkStyling = {
        color:'#c5aa6a',
        textDecoration:'none',
        width:'100%'
        
    }

    const HEADINGS = [ 'Home', 'Postings', 'Login', 'Logout' ]

    const checkIfLoggedIn = (heading) => heading == 'Login' && isLoggedIn || heading == 'Logout' && !isLoggedIn
    
    return (
        <Grid2 
            sx={{ position:'absolute', right:'0', display:'flex', alignItems:'center', marginRight:'5%' }}>
            <FaBars style={{ fontSize:'20px', color: '#c5aa6a', }} onClick={sideBarHandler} />
                <Drawer 
                    anchor='right'
                    open={showSidebar}
                    onClose={sideBarHandler}
                    ModalProps={{ disableScrollLock: true }}>
                    <List
                        sx={{ width:'50vw', height:'100vh', backgroundColor:'#5f4c4c' }}>
                            {
                                HEADINGS.map((heading) => {
                                    if(checkIfLoggedIn(heading)) return null
                                    return(
                                    <ListItem
                                        disablePadding
                                        divider>
                                        <Link
                                            to={heading}
                                            style={LinkStyling}>
                                            <ListItemButton>
                                                <ListItemText primary={ <Typography sx={ TextStyling } variant='h5'>{heading}</Typography> }>
                                                </ListItemText>
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>)
                                })
                            }
                    </List>
                </Drawer>
        </Grid2>
    )
}

export default MobileNavbar