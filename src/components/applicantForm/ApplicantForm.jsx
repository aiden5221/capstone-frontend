import React, { useState} from 'react'
import { FormControl, InputLabel, Input, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFilePdf, FaBars } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';

function ApplicantForm() {
    const [selectedFile, setSelectedFile] = useState(null);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);

    };
    
    const UploadSection = makeStyles({
        root: {
            color: 'black'
        },
    });
    const classes = UploadSection();
    return (
        <div className='ApplicantForm'>
            <Box className={classes.root} component="div" >
                <Stack spacing={10} direction="row" sx={{ alignItems: 'center' }}>
                    <label><b>Upload Resume/CV</b></label>
                    <Button sx={{ backgroundColor: '#1976D2', color: 'white', "&:hover": { backgroundColor: "#1976D2" } }} component="label">
                        <Box mr={1}>Upload</Box>
                        <FaFilePdf />
                        <input hidden type={"file"} accept="application/pdf" onChange={changeHandler}  />
                    </Button>
                </Stack>
            </Box>
            <br></br>
            <Stack direction="column" spacing={2} sx={{ width: "35%" }}>
                <TextField id="fullName" label="Full Name" sx={{ width: "48%", backgroundColor: "#D9D9D9" }} required variant="outlined" />
                <TextField id="email" label="Email" sx={{ width: "48%", backgroundColor: "#D9D9D9" }} required variant="outlined" />
                <Stack direction="row" spacing={3}>
                    <TextField id="phone" label="Phone" fullWidth sx={{ backgroundColor: "#D9D9D9" }} required variant="outlined" />
                    <TextField id="city" label="City" fullWidth sx={{ backgroundColor: "#D9D9D9" }} variant="outlined" />
                </Stack>
                <Stack direction="row" spacing={3}>
                    <TextField id="address1" label="Address Line 1" fullWidth sx={{ backgroundColor: "#D9D9D9" }} variant="outlined" />
                    <TextField id="province" label="Province" fullWidth sx={{ backgroundColor: "#D9D9D9" }} variant="outlined" />
                </Stack>
                <Stack direction="row" spacing={3}>
                    <TextField id="address2" label="Address Line 2" fullWidth sx={{ backgroundColor: "#D9D9D9" }} variant="outlined" />
                    <TextField id="country" label="Country" fullWidth sx={{ backgroundColor: "#D9D9D9" }} variant="outlined" />
                </Stack>
                <TextField id="skills" label="Skills" fullWidth sx={{ backgroundColor: "#D9D9D9" }} variant="outlined" multiline rows={4} />

                <Box display={"flex"} justifyContent="flex-end" alignItems={"flex-end"}>
                    <Button sx={{ backgroundColor: '#1976D2', color: 'white', "&:hover": { backgroundColor: "#1976D2" } }} >
                        <FaBars />
                        <Box ml={1}>Submit</Box>
                    </Button>
                </Box>
            </Stack>
        </div>
    )
}

export default ApplicantForm