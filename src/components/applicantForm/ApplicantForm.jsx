import React, { useState } from 'react'
import { TextField, Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FaFilePdf, FaBars } from 'react-icons/fa';
import axios from 'axios';
import { postPotentialEmployee } from '../../utils/backend/requests'
import InputForm from './InputForm';
function ApplicantForm() {
    const [resumeData, setResumeData] = useState({
        name: '',
        email: '',
        mobile: '',
        skills: ''
    });
    const [locationData, setLocationData] = useState({
        address1: '',
        address2: '',
        city: '',
        province: '',
        country: '',
        gpa: ''
    });
    const test = async (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
        const locationStr = locationData.address1 + " " + locationData.address2 + "," + locationData.city
            + "," + locationData.province + "," + locationData.country;
        // console.log(locationStr)
        await postPotentialEmployee({
            "jobApplication": "4",
            "name": resumeData.name,
            "skills": resumeData.skills.split(","),
            "GPA": locationData.gpa,
            "location": locationStr,
            "pastExperiences": [
                "pastExperience1",
                "pastExperience2",
                "pastExperience3"
            ],
            "aptitudeResults": "6.90"
        })
    }
    const handleFileUpload = async (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
        if (event.target.files[0].size <= 2621440) {
            const formData = new FormData();
            formData.append('resume_parse', event.target.files[0]);
            // alert(event.target.files[0].size);
            axios.post('http://localhost:8000/parseResume/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    // Update resume data state with the response data
                    setResumeData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            alert('File exceeded maximum limit 2.5mb');
        }

    };

    return (
        <Box className='ApplicantForm' sx={{ border: 1, maxWidth: 'lg', p: 2 }} marginLeft="10.5rem" marginTop="4vh">
            <form onSubmit={test}>
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
                        <Grid container item spacing={2} >
                            <InputForm
                                SpacingVal={5}
                                idName="fullName"
                                label="Full Name"
                                isRequired={true}
                                isMultiline={false}
                                rows={0}
                                textVal={resumeData.name || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, name: event.target.value }))} />
                        </Grid>
                        <Grid container item spacing={2} >
                            <InputForm
                                SpacingVal={5}
                                idName="email"
                                label="Email"
                                isRequired={true}
                                isMultiline={false}
                                rows={0}
                                textVal={resumeData.email || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, email: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="gpa"
                                label="GPA"
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.gpa || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, gpa: event.target.value }))} />
                        </Grid>
                        <Grid container item spacing={2} >
                            <InputForm
                                SpacingVal={5}
                                idName="phone"
                                label="Phone Number"
                                isRequired={true}
                                isMultiline={false}
                                rows={0}
                                textVal={resumeData.mobile || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, mobile: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="city"
                                label="City"
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.city || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, city: event.target.value }))} />
                        </Grid>
                        <Grid container item spacing={2} >
                            <InputForm
                                SpacingVal={5}
                                idName="add1"
                                label="Address Line 1"
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.address1 || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, address1: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="province"
                                label="Province"
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.province || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, province: event.target.value }))} />
                        </Grid>
                        <Grid container item spacing={2} >
                            <InputForm
                                SpacingVal={5}
                                idName="add2"
                                label="Address Line 2"
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.address2 || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, address2: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="country"
                                label="Country"
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.country || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, country: event.target.value }))} />
                        </Grid>
                        <Grid container item spacing={2} >
                            <InputForm
                                SpacingVal={10}
                                idName="skills"
                                label="Skills"
                                isRequired={true}
                                isMultiline={true}
                                rows={4}
                                textVal={resumeData.skills || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, skills: event.target.value }))} />
                            <Grid item xs={10} display={"flex"} justifyContent="flex-end" alignItems={"flex-end"}>
                                <Button type='submit' sx={{ backgroundColor: '#1976D2', color: 'white', "&:hover": { backgroundColor: "#1976D2" } }} startIcon={<FaBars />} >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Box>
    )
}
export default ApplicantForm