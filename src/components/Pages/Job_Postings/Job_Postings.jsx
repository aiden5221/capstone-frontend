import React from 'react'
import { Typography,Box, Button,colors,useMediaQuery,useTheme } from '@mui/material'
import { useState } from 'react'
import { Link, Routes, useNavigate } from 'react-router-dom'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useEffect } from 'react'
import {Job_Listings} from '../Job_Postings/Job_Listings'
import { getJobApplications } from '../../../utils/backend/requests'

//2 need to link the job postings page to the indivual posting page
//2.1 create a link inside the button need an onclick handler function to handle this

//3 there is a specific key mapped to each object that should be displayed at the top of the page when pressed


export const Job_Posting = () => {
  // pass in a prop to map the job_posting to each box
  
  
 
const [jobPost, setjobPost] = useState([]);

const posting_handler = ({jobPost}) => {




}

useEffect(() =>{
  async function fetchJobs(){
    try{
    const data = await getJobApplications();
    setjobPost(data);
    console.log(data);
    }
    catch (err){
      console.log('Error')
    }
  }
  fetchJobs();
  //simply retrieve the information
  
  }, [])
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))

  //mapp each posting dynacally to the box

  return (
    <div>
    <Typography variant='h4' paddingTop={4} paddingLeft={25} sx={[isSmall ? {textAlign:'center',paddingLeft:'0'} : {},isMedium ? {textAlign:'center',paddingLeft:'0'} : {}]}>Job Postings</Typography>
    <Grid2 container>
    {jobPost.map(({id,jobName, jobDescription,location}) => {
      return (
        <Grid2
        onClick={posting_handler}
        xs={10}
        xlOffset={1}
        //created a button layour for each job_posting
        component="span"//usesd to expand the 
        sx={[{
          display: 'block',//adds the button on  a new line with a width of the screen
          p: 1,//add a padding of 1 inbetween each job posting
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),//added a background colour with a theme prop to choose for a list of colors
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.400' : 'grey.800',// pass in the same theme to the color of the text
            //pass in prop to check if the application itself is in dark mode
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }]}
      > {jobName} <div style={{fontSize: '0.8rem', fontWeight: '700',}}>{jobDescription}</div> <div style={{fontSize: '0.7rem',fontWeight: '700',color:'grey',}}>{location} </div>
      </Grid2>

)
})}

    
    </Grid2>
    
    </div>
  
  )
}
