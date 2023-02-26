import React, { useState } from 'react'
import { TextField, Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FaFilePdf, FaBars } from 'react-icons/fa';
import axios from 'axios';

function ApplicantForm() {
    const [resumeData, setResumeData] = useState({
        name: '',
        email: '',
        mobile: '',
        skills: ''
    });
    const [resumeData1, setResumeData1] = useState({
        name: '',
        email: '',
        mobile: '',
        skills: ''
    });

    const handleFileUpload = async (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
        const formData = new FormData();
        formData.append('resume_parse', event.target.files[0]);
        axios.post('http://localhost:8000/parseResume/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                // Update resume data state with the response data
                // console.log(response.data)
                setResumeData(resumeData1);
                setResumeData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Box className='ApplicantForm' display="flex" alignItems="center" justifyContent="center" sx={{ border: 1, maxWidth: 'md', p: 2 }} margin="auto" marginTop="4vh">
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} >
                    <Grid container item spacing={1} >
                        <Grid item>
                            <Typography variant="h6">Upload Resume/CV</Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                component="label"
                                endIcon={<FaFilePdf />}
                                sx={{ width: '100%' }}>
                                Upload
                                <input hidden type="file" accept="application/pdf" onChange={handleFileUpload} />
                            </Button>
                        </Grid>
                    </Grid>

                    {/* Next Row to work with */}
                    <Grid container item spacing={2} >
                        <Grid item xs={5}>
                            <TextField
                                id="fullName"
                                label="Full Name"
                                name="fullName"
                                fullWidth
                                required
                                value={resumeData.name || ''}
                                variant="outlined"
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, name: event.target.value }))}
                                InputLabelProps={{
                                    shrink: !!resumeData.name,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2} >
                        <Grid item xs={5} >
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                required
                                variant="outlined"
                                value={resumeData.email || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, email: event.target.value }))}
                                InputLabelProps={{
                                    shrink: !!resumeData.email,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2} >
                        <Grid item xs={5} >
                            <TextField
                                id="phone"
                                label="Phone"
                                fullWidth
                                required
                                variant="outlined"
                                value={resumeData.mobile || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, mobile: event.target.value }))}
                                InputLabelProps={{
                                    shrink: !!resumeData.mobile,
                                }}
                            />
                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                id="city"
                                label="City"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2} >
                        <Grid item xs={5} >
                            <TextField
                                id="add1"
                                label="Address Line 1"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                id="province"
                                label="Province"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2} >
                        <Grid item xs={5} >
                            <TextField
                                id="add2"
                                label="Address Line 2"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={5} >
                            <TextField
                                id="country"
                                label="Country"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2} >
                        <Grid item xs={10} >
                            <TextField
                                id="skills"
                                label="Skills"
                                fullWidth
                                variant="outlined"
                                multiline 
                                rows={4}
                                value={resumeData.skills || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, skills: event.target.value }))}
                                InputLabelProps={{
                                    shrink: !!resumeData.skills,
                                }}
                            />
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
            {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} display="flex" alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        sx={{ mb: 2 }}
                        required
                        variant="outlined"
                        value={resumeData.email}
                        onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, email: event.target.value }))}
                        InputLabelProps={{
                            shrink: !!resumeData.email,
                        }}
                    />
                    <TextField
                        id="phone"
                        label="Phone"
                        fullWidth
                        sx={{ mb: 2 }}
                        required
                        variant="outlined"
                        value={resumeData.mobile}
                        onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, mobile: event.target.value }))}
                        InputLabelProps={{
                            shrink: !!resumeData.mobile,
                        }}
                    />
                </Grid>
            </Grid> */}
        </Box>
    )
}

export default ApplicantForm