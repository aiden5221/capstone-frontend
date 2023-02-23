import { Typography } from '@mui/material'
import React from 'react'


function JobPost({ Title, Company, Location, Description, Qualification }){

    const jobPost = {
        Title: "Jr. Software Engineer",
        Company: "Deloitte",
        Location: "Toronto, ON",
        Description: "Understands that the success of a developer is to understand the core business processes of the business unit and business requirements as well as the architecture patterns and technology strategy (e.g., Transformation, SmartCore, DevOps). Conceive and write detailed software implementations/code while ensuring that their code/configurations adhere to the security, logging, error handling, and performance standards and non-functional requirements. Writes, configures, and integrates code to create the software that aligns with architecture patterns and technology strategy. Understands the implications of various components (including technology strategy & architecture) to the overall design of a program, system, or eco-system. Evaluates new technologies for fit with the program/system/eco-system and the associated upstream and downstream impacts on process, data, risk (e.g., security). Works toward the objective of defect free software. Ensures that systems functionally meet requirements, align with architecture and promote the development of common assets. Supports the resolution of production issues and problems. Makes recommendations to improve BMO processes & systems.",
        Qualification: ["Python", "Java", "C++", "C#", "Strong Leadership", "Big Mans"]
    }

    const boldStyle = {
        fontWeight:"bold"
    }

    const listSkills = jobPost.Qualification.map((Qualification) => 
        <ul>- {Qualification}</ul>
    );


    return (
        <div style={{ marginTop: "5vh", marginLeft:"10vh", padding:"4vh", width:"190vh", maxWidth:"90%", border:"solid", borderWidth:"thin" }}>
            <Typography variant="h3" style={{ marginTop:"1vh", fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                {jobPost.Title}
            </Typography>

            <Typography variant="h5" style={{ marginTop:"2vh", fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                {jobPost.Company}
            </Typography>

            <Typography variant="h5" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold", marginBottom:"3vh" }}>
                {jobPost.Location}
            </Typography>

            <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                <div  sx={boldStyle} style={{ fontWeight:"bold" , fontSize:"1.2em" }}>Description:</div>
                <br/>
                {jobPost.Description}
                <br/>
                <br/>
            </Typography>

            <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold", marginTop:"5vh" }}>
            <div style={{ fontWeight:"bold" , fontSize:"1.2em"}}>Qualifications:</div>
            <ul style={{ marginLeft:"-4vh"}}>{listSkills}</ul>
            </Typography>

        </div>
    )
}

export default JobPost