import React from 'react'
import { Button, CardContent, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import {Card} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import { postJobApplication } from '../../utils/backend/requests';
// Icons
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';


const createData = (skillname, weightedValue) => ({
  id: skillname.replace(" ", "_"),
  skillname,
  weightedValue,
  isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
  const { isEditMode } = row;
  return (
    <TableCell align="left">
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={e => onChange(e, row)}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

function CreateApplicationForm() {

  const [rows, setRows] = React.useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
  event.preventDefault();
  //manipulating the rows
  const myRows = {}

  rows.filter((element) => {
    const{skillname, weightedValue} = element; 
    myRows[skillname] = weightedValue; 
  })
   //convert myRows to json
    JSON.stringify(myRows);

    //retrieving the data
    const data = new FormData(document.getElementById("formData"));
    data.forEach((value,key) => (data[key] = value));
    const json = JSON.stringify(data);
    const myObj = JSON.parse(json);
    myObj.desiredSkills = myRows; 
    delete myObj.skillValue; 
    const { id } = await postJobApplication({
      "jobName" : myObj.jobName, 
      "jobDescription": myObj.jobDescription, 
      "desiredSkills": myObj.desiredSkills, 
      "minGPA": myObj.minGPA, 
      "location": myObj.location, 
      "pastExperiences": {
        "pastExperience1": 5,
        "pastExperience2": 7
      }, 
      "aptitudeResultsMin":myObj.aptitudeResultsMin, 
      "applicants": [],
      "date": myObj.date,
      "company":myObj.company, 
      "createdBy": "placeholder_createdBy"
    });
    navigate(`/jobPosting/${id}`);
  }

  const displayData = () => {

    //manipulating the rows
  const myRows = {}

  rows.filter((element) => {
    const{skillname, weightedValue} = element; 
    myRows[skillname] = weightedValue; 
  })
  
    //retrieving the data
    const data = new FormData(document.getElementById("formData"));
    data.forEach((value,key) => (data[key] = value));
    const json = JSON.stringify(data);
    const myObj = JSON.parse(json);
    myObj.desiredSkills = myRows; 
    delete myObj.skillValue; 
    
    console.log(myObj.date);
    
  }

  const [previous, setPrevious] = React.useState({});

  const onToggleEditMode = id => {
    setRows(state => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);

  };

  const onRevert = (index) => {
    const newRows = [...rows]
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const getSkillName = () => {
    let text = document.getElementById("desiredSkills").value; 
    return text; 
  }

  const getSkillValue = () => {
    let value = document.getElementById("skillValue").value; 
    return value;
  }

  const handleAddClick = () => {
    let text = getSkillName();
    let value = getSkillValue();
    setRows([...rows, createData(text, value)]);
  }

  return (
      <Card style={{maxWidth: 2000, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
        <Typography variant='h4' gutterBottom marginTop={2} marginLeft={2} style={{textAlign:'center'}}>
          Create Job Application Form
        </Typography>
          <form id = 'formData'>
            <Grid container spacing={1}>
              <Grid xs = {12} item>
                <TextField label = "Job Title" placeholder='Enter Job Title here' variant='outlined' fullWidth name='jobName' id='jobName'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Company Name" placeholder='Enter Company Name here' variant='outlined' fullWidth name='company' id='company'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Job Description" placeholder='Enter Job Description here' variant='outlined' multiline fullWidth rows={4} name='jobDescription' id='jobDescription'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Address Line 1" placeholder='Enter Company Address here' variant='outlined' fullWidth name='location' id='location'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField type = "number" label = "Minimum GPA" placeholder='Minimum GPA required for the job' variant='outlined' name='minGPA' id='minGPA'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField type = "number" label = "Minimum Aptitude Results" placeholder='Minimum Aptitude Score required for the job' variant='outlined' name='aptitudeResultsMin' id='aptitudeResultsMin'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <Button
                    variant='contained'
                    color='primary'
                    style={{ width: "10%" }}
                    onClick = {handleAddClick}
                  >
                      Add
                  </Button> 
              </Grid>
              <>
              <Grid xs = {12} item>
                  <TextField
                    id='desiredSkills'
                    name='desiredSkills'
                    label = 'Skill Name'
                    variant = 'outlined'>
                  </TextField>
                  <TextField
                    id='skillValue'
                    name='skillValue'
                    label = 'Skill Value'
                    variant = 'outlined'>
                  </TextField>
              </Grid>
              </>
              <Table>
                <caption>Weighted Skills</caption>
                <TableHead>
                  <TableRow>
                  <TableCell>
                      
                  </TableCell>
                  <TableCell align="left">Skill Name</TableCell>
                  <TableCell align="left">Weighted Value</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        {row.isEditMode ? (
                          <>
                            <IconButton
                              aria-label="done"
                              onClick={() => onToggleEditMode(row.id)}
                            >
                              <DoneIcon />
                            </IconButton>
                            <IconButton
                              aria-label="revert"
                              onClick={() => {onRevert(index)}}
                            >
                              <CancelIcon />
                            </IconButton>
                          </>
                        ) : (
                          
                          <IconButton
                            aria-label="delete"
                            onClick={() => onToggleEditMode(row.id)}
                          >
                            <EditIcon />
                          </IconButton>
 
                        )}
                      </TableCell>
                      <CustomTableCell {...{ row, name: "skillname", onChange }} />
                      <CustomTableCell {...{ row, name: "weightedValue", onChange }} /> 
                    </TableRow>
                  ))}
                </TableBody>
               
              </Table>
             
              <Grid xs = {12} item>
                <TextField type = "date"  placeholder='Enter Application Deadline here' variant='outlined' fullWidth name='date' id='date'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <Button variant='contained' color='primary' fullWidth type='submit' onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
  )
}

export default CreateApplicationForm