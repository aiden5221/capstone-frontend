import { Card, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'

function JobItem({ jobName, jobDate }) {
    
    const TextStyling = {
        fontFamily:"'Lato', sans-serif;",
        textOverflow:'ellipsis',
        whiteSpace:'pre',
        overflow:'hidden',
    }

    const CardStyling = {
        margin:'3px',
        backgroundColor:'#EBEBEB',
        transition:'background-color 0.5s ease-out',
        '&:hover' : {
            backgroundColor:'#d3d3d3'
        }
    }

  return ( 
    <Card sx={CardStyling}>
        <CardContent>
            <Typography sx={TextStyling} variant='h6'>
                {jobName}
            </Typography>
            <Typography sx={[TextStyling, { float:'right'}]} variant='subtitle1'>
                Date posted: {jobDate}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default JobItem