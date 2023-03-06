import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { getJobApplications} from '../../../utils/backend/requests'



// const job_postings = [
//     {
//       id:1,
//       jobtitle: 'Jr Software Developer',
//       company:  'Deloitte',
//       location: 'Calagry, AB',
    
//     },
//     {
//       id:2,
//       jobtitle: 'Database Developer',
//       company:  'Oracle',
//       location: 'Calagry, AB',
    
//     },
//     {
//       id:3,
//       jobtitle: 'Front-end Developer',
//       company:  'OMERS',
//       location: 'Toronto, ON',
    
//     },
//     {
//       id:4,
//       jobtitle: 'Backend Developer',
//       company:  'Uber',
//       location: 'Montreal QC',
    
//     },
//     {
//       id:5,
//       jobtitle: 'Data Analyst',
//       company:  'Affirm',
//       location: 'Toronto, ON',
    
//     },
    
//     ]
export const Job_Listings = ({id, name}) => {
  
//created a useeffect to have the depenency run once  when the hook is run
const [jobPost, setjobPost] = useState([]);
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


    return (
    
    <div>{jobPost.map(({id, jobName, jobDescription})=>{
      //Import
      return(
        <div>{id} {jobName} {jobDescription}</div>
      )


    })}</div>
  )
}

export default Job_Listings