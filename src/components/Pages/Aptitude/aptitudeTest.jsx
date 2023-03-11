import { React } from 'react'
import { Typography, Button, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@mui/material'
import aptitudeInfo from '/src/utils/aptitudeInfo.json'


function aptitudeTest(){

    var score = 0

    const getScore = (event) => {
        score = event.target.value
    }

    return(

        <div style={{marginLeft:"80vh", marginTop:"10vh", maxWidth:"60%"}}>
            <FormControl>
                <FormLabel sx={{ marginLeft:"-3vh", marginBottom:"4vh", fontSize:"1.8em", textAlign:"center"}}> {aptitudeInfo.questions[0]} </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Neutral"
                    name="radio-buttons-group"
                    row
                    onChange={getScore} 
                >
                    <FormControlLabel value="Strongly Agree" 
                        
                        control={<Radio value={10} sx={{
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


            <Typography>Score: {score} </Typography>
        </div>

    )

}

export default aptitudeTest
