import { React, useState } from 'react'
import { Typography, Button, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@mui/material'
import aptitudeInfo from '/src/utils/aptitudeInfo.json'
import './aptitudeTestStyle.css'


var totalScore = 0
var answers = []

export const aptitudeTest = () => {

    const testInfo = {
        "Questions" : [
            {
                "id": 0,
                "question": "What is your name?",
                "answer": "Disagree"
            },
    
            {
                "id": 1,
                "question": "What is your favorite color?",
                "answer": "Agree"
            },
    
            {
                "id": 2,
                "question": "What is your favorite number?",
                "answer": "Neutral"
            }
        ]
    }

    const [score, setScore] = useState('')

    const getAnswers = () => {
        let num = testInfo.Questions.length

        for (var i=0;i<num;i++){
            answers[i] = testInfo.Questions[i].answer
        }

        console.log(answers)
    }

    const getScore = (e) => {
        setScore(e.target.value)

    }

    const displayTest = testInfo.Questions.map((Question, index) =>
        <div key={index} style={{borderBottom:"solid", borderBottomWidth:"thin", marginTop:"5vh", width:"80vw", textAlign:"center"}}>
            <FormControl> 
                <FormLabel style={{textAlign:"center", fontSize:"3em", alignSelf:"center", marginBottom:"5vh"}}> {Question.question} </FormLabel>
                <RadioGroup
                    defaultValue="Neutral"
                    name="radio-buttons-group"
                    row
                    onChange={getScore} 
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
    

    
    return(
        <div style={{alignSelf:"center", overflowY:"hidden"}}>
            {displayTest}
            <Typography>Score: {score}</Typography>
            <Button variant="filled" onClick={getAnswers} style={{backgroundColor:"#5f4c4c", color:"white", height:"5vh", float:"right", marginBottom:"5vh", marginTop:"4vh"}}>Submit Test</Button>
        </div>    
        
    )
    
    
}  

export default aptitudeTest



