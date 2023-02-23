import { Typography } from '@mui/material'
import React from 'react'
import jobPost from '/src/utils/jobPost.json'


function JobPost(){

    const boldStyle = {
        fontWeight:"bold"
    }

    const listSkills = jobPost.Qualification.map((Qualification) => 
        <ul>- {Qualification}</ul>
    );


    return (
        <div style={{ marginTop: "2vh", marginLeft:"10vh", padding:"4vh", width:"190vh", maxWidth:"90%", overflowY:"hidden"}}>
            <Typography variant="h3" style={{ marginTop:"1vh", fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                {jobPost.Title}
            </Typography>

            <Typography variant="h5" style={{ marginTop:"2vh", fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                {jobPost.Company}
            </Typography>

            <Typography variant="h5" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold", marginBottom:"3vh" }}>
                {jobPost.Location}
            </Typography>

            <div style={{ padding:"2vh", marginRight:"12vh", borderBottom:"solid ", borderTop:"solid", borderWidth:"thin", borderColor:"grey"}}> 
                <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>

                    <div  sx={boldStyle} style={{ fontWeight:"bold" , fontSize:"1.2em" }}>
                        Description:
                    </div>

                    <br/>
                    {jobPost.Description}
                    <br/>
                    <br/>

                </Typography>
            </div>

            <div style={{ padding:"2vh" }}>
                <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold", marginTop:"5vh" }}>
                <div style={{ fontWeight:"bold" , fontSize:"1.2em"}}>Qualifications:</div>
                <ul style={{ marginLeft:"-4vh"}}>{listSkills}</ul>
                </Typography>
            </div>

        </div>
    )
}

export default JobPost