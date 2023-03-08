import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function JobPost(){
    const navigate = useNavigate();
    var jobPost = {
        Title : "Jr. Software Engineer",
        Company : "Deloitte",
        Location: "Toronto, ON",
        Description: "Understands that the success of a developer is to understand the core business processes of the business unit and business requirements as well as the architecture patterns and technology strategy (e.g., Transformation, SmartCore, DevOps). Conceive and write detailed software implementations/code while ensuring that their code/configurations adhere to the security, logging, error handling, and performance standards and non-functional requirements. Writes, configures, and integrates code to create the software that aligns with architecture patterns and technology strategy. Understands the implications of various components (including technology strategy & architecture) to the overall design of a program, system, or eco-system. Evaluates new technologies for fit with the program/system/eco-system and the associated upstream and downstream impacts on process, data, risk (e.g., security). Works toward the objective of defect free software. Ensures that systems functionally meet requirements, align with architecture and promote the development of common assets. Supports the resolution of production issues and problems. Makes recommendations to improve BMO processes & systems.",
        Qualification: ["Python", "Java", "C++", "C#", "Strong Leadership"]
    }

    const listSkills = jobPost.Qualification.map((Qualification) => 
        <ul>- {Qualification}</ul>
    );

    const handleRedirect = () => {
      navigate('/apply')
    }

    return (
        <Grid2 container lgOffset={1} mdOffset={1} smOffset={1} sx={{marginBottom:'5%'}}>
            <div style={{ marginTop: "2vh", width:"190vh", maxWidth:"90%", overflowY:"hidden"}}>
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
                    

                    <Typography variant='h6' sx={{fontWeight:'bold'}}>
                        Description:    
                    </Typography>
                    <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold" }}>
                        <br/>
                        {jobPost.Description}
                        <br/>
                        <br/>

                    </Typography>
                </div>

                <div style={{ padding:"2vh" }}>
                    <Typography variant='h6' sx={{fontWeight:'bold'}}>
                        Qualifications:    
                    </Typography>
                    <Typography variant="h7" style={{ fontFamily: "'Lato', sans-serif", fontWeight:"bold", marginTop:"5vh" }}>
                        <ul style={{ marginLeft:"-4vh"}}>{listSkills}</ul>
                    </Typography>
                </div>
            <Button
                variant="contained"
                onClick={handleRedirect}
            >Apply</Button>
            </div>
        </Grid2>
    )
}

export default JobPost
