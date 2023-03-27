import { SentimentDissatisfiedRounded } from "@mui/icons-material"
import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useState, useEffect } from "react"
import { useRecoilValue } from "recoil"
import { getJobShortlist } from "../../../utils/backend/requests"
import { applicantState } from "../../../utils/recoil/atoms/applicant/applicant"
import ApplicantForm from "../applicantForm/ApplicantForm"
import ShortlistTable from "../Shortlist/ShortlistTable"

const ShortlistJobs = () => {
    const jobApplicant = useRecoilValue(applicantState)
    const [shortlist, setShortlist] = useState([])
    const [hasSearched, setHasSearched] = useState(false)
    const jobHeadings = ['Job Name', 'Company', 'Location', 'Date Posted', 'Score']

    useEffect(() => {
        const getShortlist = async () => {
            try{
                const { shortlist } = await getJobShortlist(jobApplicant, 5)
                setShortlist(shortlist)
            }catch(err){
                console.log(err)
            }
        }

        if(jobApplicant.skills.length != 0){
            setHasSearched(true)
            getShortlist()
            
        }
        
    }, [jobApplicant])

  return (
    <Grid2 container sx={{flexGrow:1}}>
        <Grid2 xs={10} xsOffset={1} sx={{justifyContent:'center'}}>
            <Typography variant='h4' paddingTop={4} marginBottom={5} align='center'>Shortlist Jobs</Typography>
            {
                // Checks if the applicant has searched for jobs
                hasSearched ? 
                    <>
                        {
                            // Checks if no jobs were found based on shortlist
                            shortlist.length != 0 ?
                            <>
                                <Typography variant='h6' marginBottom={0} align='center'>Based on your skills, we have found the following jobs for you</Typography>
                                <Typography variant='subtitle1' marginBottom={10} align='center'>Click on the search icon to view the job!</Typography>
                                <ShortlistTable shortlist={shortlist} headings={jobHeadings} isJobShortlist={true}/>
                            </> : 
                            <div style={{textAlign:'center'}}>
                                <Typography variant='h6' marginBottom={5} >Sorry, we couldn't find any jobs for you based on your current skillset</Typography>
                                <SentimentDissatisfiedRounded fontSize="large" />
                            </div>
                        }
                    </>
                    
                : 
                <ApplicantForm/>
            }
            
        </Grid2>
    </Grid2>
  )
}

export default ShortlistJobs