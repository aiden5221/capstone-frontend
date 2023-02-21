import React from 'react'
import { Typography,Box, Button } from '@mui/material'
import { useState } from 'react'


const job_postings = [
{
  jobtitle: 'Jr Software Developer',
  company:  'Deloitte',
  location: 'Calagry, AB',

},
{
  jobtitle: 'Database Developer',
  company:  'Oracle',
  location: 'Calagry, AB',

},
{
  jobtitle: 'Front-end Developer',
  company:  'OMERS',
  location: 'Toronto, ON',

},
{
  jobtitle: 'Backend Developer',
  company:  'Uber',
  location: 'Montreal QC',

},
{
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
  const posting_handler = (ev) =>{
    //go to the specified job posting page


  }

  //mapp each posting dynacally to the box

  return (
    <>
    <Typography variant='h4' paddingTop={4} paddingLeft={25}>Job Postings</Typography>
    <div style={{ width: '100%' }}>
    {job_postings.map(({jobtitle,company,location}, index)=>{
      //destructured the array mapped object to allowed us to access the variables themselves
      return (
        <Button
        //created a button layour for each job_posting
        component="span"//usesd to expand the 
        sx={{
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
        }}
      > {jobtitle} {company} {location}</Button>

      
      )
    })}
    

    
    </div>
    
    </>
  
  )
}
