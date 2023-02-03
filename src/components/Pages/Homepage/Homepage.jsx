import { Button, FormControl, InputLabel, OutlinedInput, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function Homepage() {
    const [search, setSearch] = useState('')
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const isVerySmall = useMediaQuery('(max-width:600px)')

    const searchHandler = (e) => {
        setSearch(e.target.value);
        console.log(search)
    }

  return (
    <Grid2
        container
        sx={{ display:'flex', height:'70vh', marginTop:'1rem' }}
    >   
        
    <Box sx={{ width:'100%', justifyContent:'center', margin:'auto', display:'flex' }}>
        
        <Grid2
            xs={10}
            sm={8}
            md={8}
            lg={5}
            xl={4}
            xsOffset={1}    
            mdOffset={0}
            lgOffset={0}
            item
           >
            <FormControl fullWidth variant='outlined' >
                    <TextField
                        id='searchbox'
                        variant='filled'
                        label='Search'
                        onChange={searchHandler}
                    />
            </FormControl>
        </Grid2>
        <Grid2
            sm={2}
            md={2}
            lg={0}
            xs={9}
            xsOffset={isVerySmall ? 1 : 0}
            mdOffset={0}
            lgOffset={0}
            item>
            <Button
                sx={[{ height:'100%' }, isSmall ? { marginTop:'1rem' } : { marginLeft:'1rem' } ]} 
                endIcon={<FaSearch />}
                variant='contained'
            >Search</Button>    
        </Grid2>
        </Box>
    </Grid2>
  )
}

export default Homepage