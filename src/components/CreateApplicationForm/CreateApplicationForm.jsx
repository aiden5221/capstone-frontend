import React from 'react'
import { Button, CardContent, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import {Card} from '@mui/material'
import { textAlign } from '@mui/system'
function CreateApplicationForm() {
  return (
    <div>
      <Typography variant='h4' gutterBottom marginTop={2} marginLeft={2} style={{textAlign:'center'}}>
        Create Job Application Form
      </Typography>
      <Card style={{maxWidth: 2000, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
          <form action="">
            <Grid container spacing={1}>
              <Grid xs = {12} item>
                <TextField label = "Job Title" placeholder='Enter Job Title here' variant='outlined' fullWidth>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Company Name" placeholder='Enter Company Name here' variant='outlined' fullWidth>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Job Description" placeholder='Enter Job Description here' variant='outlined' multiline fullWidth rows={4}>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Address Line 1" placeholder='Enter Company Address here' variant='outlined' fullWidth>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Job Qualifications" placeholder='Enter Job Qualifications here' variant='outlined' multiline fullWidth rows={4}>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField type = "date"  placeholder='Enter Application Deadline here' variant='outlined' fullWidth>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <Button variant='contained' color='primary' fullWidth type='submit'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateApplicationForm
