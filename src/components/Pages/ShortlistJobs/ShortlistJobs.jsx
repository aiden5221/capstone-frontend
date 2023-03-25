import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useState, useEffect } from "react"
import { useRecoilValue } from "recoil"
import { getJobShortlist } from "../../../utils/backend/requests"
import { applicantState } from "../../../utils/recoil/atoms/applicant/applicant"
import ApplicantForm from "../applicantForm/ApplicantForm"


const ShortlistJobs = () => {
    const jobApplicant = useRecoilValue(applicantState)
    const [shortlist, setShortlist] = useState([])
    const [shortlistLength, setShortlistLength] = useState(0)

    useEffect(() => {
        const getShortlist = async () => {
            try{
                const res = await getJobShortlist(jobApplicant, length)
                setShortlist(res)
            }catch(err){
                console.log(err)
            }
        }

        if(jobApplicant.skills.length != 0){
            getShortlist()
        }
        
    }, [jobApplicant])

  return (
    <Grid2 container sx={{flexGrow:1}}>
        <Grid2 item xs={12} >
            <Typography variant='h4' paddingTop={4} marginBottom={2} align='center'>Shortlist Jobs</Typography>
        </Grid2>
        <Grid2 xs={11} xsOffset={1} sx={{justifyContent:'center'}}>
            {
                shortlist.length ? 
                shortlist.map((job) => {
                    
                }) 
                : 
                <ApplicantForm/>
            }
            
        </Grid2>
    </Grid2>
  )
}

export default ShortlistJobs