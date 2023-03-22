import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { deleteJobApplication, getJobApplicationById } from '../../utils/backend/requests'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from '../../utils/recoil/atoms/user/user'
import { activePageState } from '../../utils/recoil/atoms/navbar/activePage'
import { snackbarState } from '../../utils/recoil/atoms/snackbar/snackbar'

function JobPost(){
    const { id } = useParams();   
    const [jobPosting, setjobPosting] = useState({});
    const [activePage, setActivePage] = useRecoilState(activePageState)
    const [snackbar, setSnackbar] = useRecoilState(snackbarState)
    const { uid } = useRecoilValue(userState)
    const navigate = useNavigate();

    const handleRedirect = () => {
        if (jobPosting.createdBy == uid){
            navigate(`/shortlist/${id}`)
        }else{
            navigate(`/apply/${id}`)
        }
    }

    const handleDelete = async () => {
        try{
            await deleteJobApplication(id);
            setActivePage('Postings')
            setSnackbar({active: true, message: 'Successfully deleted job posting', isError: false})
            navigate('/postings')
        }
        catch (err){
            console.log(err)
        }
    }


    useEffect(() =>{
        async function fetchJob(){
          try{
            const data = await getJobApplicationById(id);
            setjobPosting(data);
          }
          catch (err){
            console.log(err)
          }
        }
        fetchJob();
        
    }, [])

    return (
        <Grid2 container xsOffset={1} sx={{marginBottom:'5%'}}>
            <div style={{ marginTop: "2vh", width:"190vh", maxWidth:"90%", overflowY:"hidden"}}>
                <Typography variant="h3" style={{ marginTop:"1vh", fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                    {jobPosting.jobName}
                </Typography>

                <Typography variant="h5" style={{ marginTop:"2vh", fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                    {jobPosting.company}
                </Typography>

                <Typography variant="h5" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold", marginBottom:"3vh" }}>
                    {jobPosting.location}
                </Typography>

                <div style={{ padding:"2vh", marginRight:"12vh", borderBottom:"solid ", borderTop:"solid", borderWidth:"thin", borderColor:"grey"}}> 
                    

                    <Typography variant='h6' sx={{fontWeight:'bold'}}>
                        Description:    
                    </Typography>
                    <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                        <br/>
                        {jobPosting.jobDescription}
                        <br/>
                        <br/>

                    </Typography>
                </div>

                <div style={{ padding:"2vh" }}>
                    <Typography variant='h6' sx={{fontWeight:'bold'}}>
                        Qualifications:    
                    </Typography>
                    <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold", marginTop:"5vh" }}>
                        
                            {
                               jobPosting.desiredSkills && 
                                <ul style={{ marginLeft:"-4vh"}}>
                                    {Object.keys(jobPosting.desiredSkills).map((desiredSkill) => <ul>- {desiredSkill}</ul> )}
                                </ul>
                            }
                        
                    </Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Button
                        variant="contained"
                        onClick={handleRedirect}
                    >
                        {
                            jobPosting.createdBy == uid ?
                            "Shortlist" 
                            : 
                            "Apply"
                        }
                    </Button>

                    {
                        jobPosting.createdBy == uid ?
                        <Button
                        variant="contained"
                        onClick={handleDelete}
                        color='error'
                        style={{marginLeft:"2vh"}}
                        >
                            Delete
                        </Button>
                        : null
                    }
                   
                </div>
            </div>
        </Grid2>
    )
}

export default JobPost
