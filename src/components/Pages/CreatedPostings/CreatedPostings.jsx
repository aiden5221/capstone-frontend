import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import CreatedPosting from './CreatedPosting'

const CreatedPostings = () => {
  const containerStyling = {
    marginTop:'2vh',
    maxHeight:'70vh' , 
    display:'flex',
    overflow:'auto',
    '&:hover::-webkit-scrollbar': {
      display: 'flex',
    },
    '&::-webkit-scrollbar': {
      display: 'flex',
      width: '0.512rem',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 0px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    }
  }
  return (
    <Grid2 container >
      <Grid2 item xs={12}>
        <Typography variant='h4' align='center' mt={5} >Created postings</Typography>
      </Grid2>
      <Grid2 xs={10} xsOffset={1} sx={containerStyling}>
        <CreatedPosting />
      </Grid2>
    </Grid2>
  )
}

export default CreatedPostings