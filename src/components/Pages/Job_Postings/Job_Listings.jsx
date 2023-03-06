import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { getJobApplications,postJobListings } from '../../../utils/backend/requests'


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
export const Job_Listings = ({job_postings}) => {
  
//created a useeffect to have the depenency run once  when the hook is run
const [jobPost, setjobPost] = useState(0);

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
  //simply call the function
  
  }, [])
  useEffect(() =>{
    async function postJobs(){
      try{
      postJobListings(job_postings);

      }
      catch(err){
        console.log('Error');
      }


    }


  })

   


    return (
    
    <div>{jobPost.jobName}</div>
  )
}

export default Job_Listings