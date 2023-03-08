import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const job_postings = [
{
  id:1,
  jobtitle: 'Jr Software Developer',
  company:  'Deloitte',
  location: 'Calagry, AB',

},
{
  id:2,
  jobtitle: 'Database Developer',
  company:  'Oracle',
  location: 'Calagry, AB',

},
{
  id:3,
  jobtitle: 'Front-end Developer',
  company:  'OMERS',
  location: 'Toronto, ON',

},
{
  id:4,
  jobtitle: 'Backend Developer',
  company:  'Uber',
  location: 'Montreal QC',

},
{
  id:5,
  jobtitle: 'Data Analyst',
  company:  'Affirm',
  location: 'Toronto, ON',

},

]
//2 need to link the job postings page to the indivual posting page
//2.1 create a link inside the button need an onclick handler function to handle this

//3 there is a specific key mapped to each object that should be displayed at the top of the page when pressed


export const Job_Posting = () => {
  // pass in a prop to map the job_posting to each box
  const [jobState,setjobState] = useState(0);
  //1) The Job postings need to be clickable to take them to the corresponding Job_posting page
  //2) We need to get dummy data from the back end and have it show in each box
  //3) We can simply mapp the key id of each job posting using useffect in order to generate a separate page for each
  const posting_handler = (e) =>{
    //go to the specified job posting page
    //we need to able to identify each page
    // we can use the id of each job posting as the key
    navigate('/jobPosting')
  }
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  //mapp each posting dynacally to the box

  return (
    <div>
    <Typography variant='h4' paddingTop={4} paddingLeft={25} sx={[isSmall ? {textAlign:'center',paddingLeft:'0'} : {},isMedium ? {textAlign:'center',paddingLeft:'0'} : {}]}>Job Postings</Typography>
    <Grid2 container>
    {job_postings.map(({jobtitle,company,location}, index)=>{
      //destructured the array mapped object to allowed us to access the variables themselves
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
          cursor:'pointer',
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
      > {jobtitle} <div style={{fontSize: '0.8rem', fontWeight: '700',}}>{company}</div> <div style={{fontSize: '0.7rem',fontWeight: '700',color:'grey',}}> {location}</div>
      </Grid2>

      
      )
    })}
    

    
    </Grid2>
    
    </div>
  
  )
}
