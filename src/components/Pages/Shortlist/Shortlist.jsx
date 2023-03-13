import { Button, TextField, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ShortlistTable from "./ShortlistTable"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Shortlist() {
    const [shortlist, setShortlist] = useState([])
    const [shortlistLength, setShortlistLength] = useState(0)
    const { id } = useParams()

    // Setup a method to fetch data from the database based on id passed in param and shortlist amount 
    useEffect(() => {
        // Fetch data from database
        
        // Set shortlist to data
        // Set shortlistLength to data.length
    }, [])

    // Setup method 
  return ( 
    <Grid2 container sx={{flexGrow:1, marginBottom:'2vh'}}>
        <Grid2
            sx={{ marginTop:'5vh',backgroundColor:'#F1F4F9', alignItems:'baseline', justifyContent:'flex-start', padding:'2vh', borderRadius:'10px', boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
            xs={10}
            xsOffset={1}
            >
            <Grid2 xs={10} xsOffset={1} sx={{ justifyContent:'center', textAlign:'center' }}>
                <Typography variant='h3'>
                    Shortlist
                </Typography>
            </Grid2>
            <Grid2  xs={10}> 
                <Typography variant='h5' sx={{fontWeight:'700'}}>
                    Associate Software Developer
                </Typography>
                
                <Typography component={'div'} variant='h7' sx={{fontWeight: '700'}}>
                    Deloitte
                </Typography>
                <Typography component={'div'} variant='h7' sx={{fontWeight: '700' }}>
                    Toronto, ON
                </Typography>
                <Typography variant='subtitle2' sx={{}}>
                    Created 2 days ago
                </Typography>
            </Grid2>
            <Grid2 xs={12} sx={{display:'flex', justifyContent:'center', marginTop:'2vh', marginBottom:'2vh'}}>
                <TextField 
                    variant="filled"
                    size="small"
                    label='Shortlist Length'>
                </TextField>
                <Button variant='contained' sx={{marginLeft:'1vw'}}>
                    Submit
                </Button>
            </Grid2>
            <Grid2 xs={10} sx={{width:'100%', marginBottom:'2vh'}}>
                <ShortlistTable />
            </Grid2>
        </Grid2>
    </Grid2>
    
  )
}

export default Shortlist