
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useState,useEffect } from 'react'
import { getCreatedJobPostings } from '../../../utils/backend/requests'
import JobPosting from '../JobPostings/JobPosting'
import { useRecoilValue } from 'recoil'
import { userState } from '../../../utils/recoil/atoms/user/user'
import { useNavigate } from 'react-router-dom'

const CreatedPosting = ({jobPosting}) => {
    const [jobPostings, setjobPostings] = useState([]); 
    const { uid } = useRecoilValue(userState);
    const navigate = useNavigate();
    
    const jobPostingsContainer = { 
        p: 1,
        cursor:'pointer',
        marginBottom:'3vh'
    }

    const posting_handler = (id) => {
        navigate(`/jobPosting/${id}`)
    }
    
    useEffect(() =>{
        if(uid == ''){
            navigate('/login')
        }

        async function fetchJobs(){
            try{
                const data = await getCreatedJobPostings(uid);
                setjobPostings(data);
                console.log(data);
            }
            catch (err){
                console.log(err)
            }
        }
        fetchJobs();
    }, [])

    return (
        <Grid2
        xs={12}
        sx={jobPostingsContainer}
        onClick={() => posting_handler(id)}
        > 
           {
                jobPostings ?
                jobPostings.map((jobPosting) => {
                    return (
                        <JobPosting jobPosting={jobPosting} isCreatedPostings={true}/>
                    )
                })
                :
                <Typography variant='h5' align='center' sx={{ marginTop:'10vh', color:'gray'}}>No job postings found... </Typography>
           }

        </Grid2>
    )
}

export default CreatedPosting