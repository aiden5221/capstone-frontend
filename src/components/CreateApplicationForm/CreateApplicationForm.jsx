import React, {useState} from 'react'
import { Button, CardContent, Grid, TextField, Typography } from '@mui/material'
import {Card} from '@mui/material'
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';


function CreateApplicationForm() {

  const [formValues, setFormValues] = useState([{ skillName: "", skillValue : ""}])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }
  
  let addFormFields = () => {
    setFormValues([...formValues, { skillName: "", skillValue: "" }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  const onRevert = id => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  return (
    <Paper style={{overflow: "hidden", marginBottom: "5px"}}>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
      </script>
      <Typography variant='h4' gutterBottom marginTop={2} marginLeft={2} style={{textAlign:'center'}}>
        Create Job Application Form
      </Typography>
      <Card style={{maxWidth: 2000, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
          <form onSubmit={handleSubmit}>
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
              
                {formValues.map((element, index) => (
                  <div key={index}>
                    <Grid xs = {12} item>
                      <TextField label = "Skill Name" placeholder='Enter Skill Name here' name='skillName' variant='outlined' fullWidth value={element.name || ""} onChange={e => handleChange(index, e)}>
                      </TextField>

                      <TextField type = "number" label = "Skill Value" placeholder='Enter Skill Value here' name='skillValue' variant='outlined' fullWidth value={element.name || ""} onChange={e => handleChange(index, e)}>
                      </TextField>

                    </Grid>
                    
                    {
                      index ? 
                        <Grid xs = {12} item>
                          <Button
                            type='submit'
                            variant='contained'
                            color='error'
                            style={{ width: "10%" }}
                            onClick={() => removeFormFields(index)}

                            >
                            Remove
                          </Button>
                        </Grid>
                        : null


                    }
                  </div>


                ))}
                <Grid xs = {12} item>
                  <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        style={{ width: "10%" }}
                        onClick={() => addFormFields()}
                        
                      >
                        Add
                  </Button> 
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
    </Paper>
  )
}

export default CreateApplicationForm
