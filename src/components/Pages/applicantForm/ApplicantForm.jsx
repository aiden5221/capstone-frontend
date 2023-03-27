import React, { useEffect, useState } from 'react'
import { Typography, Grid, Box} from '@mui/material'
import Button from '@mui/material/Button';
import { FaFilePdf, FaBars } from 'react-icons/fa';
import axios from 'axios';
import InputForm from './InputForm';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../../utils/recoil/atoms/user/user';
import { applicantState } from '../../../utils/recoil/atoms/applicant/applicant';
import { activePageState } from '../../../utils/recoil/atoms/navbar/activePage';

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
    const { id } = useParams();
    const navigate = useNavigate();
    const { uid } = useRecoilValue(userState);
    const [jobApplicant, setJobApplicant] = useRecoilState(applicantState)
    const [activePage, setActivePage] = useRecoilState(activePageState)

    const MAX_FILE_SIZE = 2621440

    const submitJobPosting = async () => {
        event.preventDefault(); // Prevent the form from reloading the page
        
        const addressArray = Object.entries(locationData)
            .filter(([key, value]) => value !== undefined && value !== null && value !== '')
            .map(([key, value]) => value);

        const locationString = addressArray.join(', ');

        setJobApplicant({
            jobApplication: id || null,
            name: resumeData.name,
            skills: resumeData.skills.split(","),
            GPA: locationData.gpa,
            location: locationString,
            email: resumeData.email,
            phoneNumber: resumeData.mobile
        })

        // Put this check in so that it can be used in the shortlist jobs page
        id != undefined ? navigate(`/aptitudeTest/${id}/`) : null
        

    }

    const handleFileUpload = async (event) => {
        // event.preventDefault(); // Prevent the form from reloading the page
        
        if (event.target.files[0].size <= MAX_FILE_SIZE) {
            const formData = new FormData();
            formData.append('resume_parse', event.target.files[0]);

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

    useEffect(() => {
        if (uid === '') {
            navigate('/login');
            setActivePage('Login')
        }
    }, [])

    return (
        <Grid2 container xsOffset={1} xs={9} sx={{backgroundColor:'rgba(252, 251, 255,0.8)', borderRadius:'10px', display:'flex', padding:'2vw', marginBottom:'1vh'}}>
            <form onSubmit={submitJobPosting} >
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
                                maxLenChar = {300}
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
                                maxLenChar = {254}
                                rows={0}
                                textVal={resumeData.email || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, email: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="gpa"
                                label="GPA"
                                maxLenChar = {3}
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
                                maxLenChar = {30}
                                isRequired={true}
                                isMultiline={false}
                                rows={0}
                                textVal={resumeData.mobile || ''}
                                onChange={(event) => setResumeData((prevResumeData) => ({ ...prevResumeData, mobile: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="city"
                                label="City"
                                maxLenChar = {30}
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
                                maxLenChar = {25}
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.address1 || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, address1: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="province"
                                label="Province"
                                maxLenChar = {30}
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
                                maxLenChar = {25}
                                isRequired={false}
                                isMultiline={false}
                                rows={0}
                                textVal={locationData.address2 || ''}
                                onChange={(event) => setLocationData((prevLocationData) => ({ ...prevLocationData, address2: event.target.value }))} />
                            <InputForm
                                SpacingVal={5}
                                idName="country"
                                label="Country"
                                maxLenChar = {30}
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
                                maxLenChar = {50}
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
        </Grid2>
    )
}
export default ApplicantForm