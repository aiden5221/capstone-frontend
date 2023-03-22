
import { Typography, Button, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@mui/material'
import { useRecoilState, useRecoilValue } from 'recoil'
import { applicantState } from '../../utils/recoil/atoms/applicant/applicant'
import { postPotentialEmployee } from '../../utils/backend/requests'
import { useNavigate } from 'react-router-dom'
import { userState } from '../../utils/recoil/atoms/user/user'
import { useState } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

var totalScore = 0
var answers = []
var UserAnswers = []

export const AptitudeTest = ({ questions }) => {
    const testInfo = questions

    const [score, setScore] = useState('')
    const [applicant, setApplicant] = useRecoilState(applicantState)
    const { uid } = useRecoilValue(userState)

    const navigate = useNavigate()
    const getAnswers = () => {
        let num = questions.length

        for (var i=0;i<num;i++){
            answers[i] = questions[i].answer
        }

        for(var n=0;n<num;n++){
            if(UserAnswers[n] === answers[n]){
                totalScore += 1
            }
        }

        return totalScore

    }

    const getUserAnswer = (e) => {

        setScore(e.target.value)
        UserAnswers[e.target.name] = e.target.value
        
    }

    const submitApplication = async () => {
        var score = getAnswers()
        var potentialEmployee = applicant
        const req = Object.assign({aptitudeResults: score, uid: uid}, potentialEmployee)
        await postPotentialEmployee(req)
        navigate('/')
    }
    

    return(
        <Grid2 container xsOffset={1} style={{ overflowY:"hidden", display:'flex' }}>
            <Grid2 xs={11}>
                <Typography style={{marginTop:"7vh", marginBottom:"7vh"}} align='center' variant='h3'>Complete Aptitude Test</Typography>
            </Grid2>
            <Grid2 xs={7} xsOffset={2} sx={{justifyContent:'center', alignItems:'center', backgroundColor:'rgba(252, 251, 255,0.8)', padding:'2vw', borderRadius:'10px'}}>
            {
                questions ?
                questions.map((Question, index) => 
                <div key={index} style={{borderTop:"solid", borderTopWidth:"thin", marginTop:"5vh", width:'50vw', textAlign:"center", marginBottom:"-4vh"}}>
                        <FormControl> 
                            <FormLabel style={{textAlign:"center", fontSize:"2em", alignSelf:"center", marginTop:"6vh", marginBottom:"3vh"}}> {Question.question} </FormLabel>
                            <RadioGroup
                                name={index}
                                row
                                onChange={getUserAnswer} 
                                style={{marginBottom:"9vh", alignSelf:"center"}}
                                
                            >
                                <FormControlLabel value="Strongly Agree" 
                                    control={<Radio value="Strongly Agree" sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 60,
                                    }}}
                                    />}
                                    label="Strongly Agree"
                                    labelPlacement='top'
                                
                                />

                                <FormControlLabel value="Agree" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 45,
                                    }}}
                                    />} 
                                    label=" Agree"
                                    labelPlacement='top'
                                />
                                <FormControlLabel value="Neutral" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 35,
                                    }}}
                                    />} 
                                    label="Neutral"
                                    labelPlacement='top'
                                />
                                <FormControlLabel value="Disagree" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 45,
                                    }}}
                                    />} 
                                    label="Disagree"
                                    labelPlacement='top'
                                />
                                <FormControlLabel value="Strongly Disagree" control={<Radio sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 60,
                                    }}}
                                    />} 
                                    label="Strongly Disagree"
                                    labelPlacement='top'
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                )
                :
                <Typography variant='h5' sx={{ margin:'auto', marginTop:'10vh', color:'gray'}}>No job postings found... </Typography>
            }       
            </Grid2>
            <Button variant="filled" onClick={submitApplication} style={{backgroundColor:"#5f4c4c", color:"white", height:"5vh", marginLeft:"75vw", marginBottom:"5vh", marginTop:"4vh"}}>Submit Test</Button>
        </Grid2>    
        
    )
    
    
}  

export default AptitudeTest



