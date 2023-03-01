import React from 'react'
import { Button, CardContent, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import {Card} from '@mui/material'
import { textAlign } from '@mui/system'
import { makeStyles } from '@mui/styles'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// Icons
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import { json } from 'react-router-dom'


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

function handleSubmit() {

  const data = new FormData(document.getElementById("formData"));
  data.forEach((value,key) => (data[key] = value));
  
}


function CreateApplicationForm() {

  const [rows, setRows] = React.useState([
    createData("Java", 8),
  ]);

  const displayData = () => {

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
    myObj.skills = myRows; 
    delete myObj.skillValue; 
    console.log(myObj);
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
    let text = document.getElementById("skills").value; 
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
                <TextField label = "Job Title" placeholder='Enter Job Title here' variant='outlined' fullWidth name='jobTitle' id='jobTitle'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Company Name" placeholder='Enter Company Name here' variant='outlined' fullWidth name='companyName' id='companyName'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Job Description" placeholder='Enter Job Description here' variant='outlined' multiline fullWidth rows={4} name='jobDescription' id='jobDescription'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Address Line 1" placeholder='Enter Company Address here' variant='outlined' fullWidth>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <TextField label = "Job Qualifications" placeholder='Enter Job Qualifications here' variant='outlined' multiline fullWidth rows={4} name='jobQualifications' id='jobQualifications'>
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
                    id='skills'
                    name='skills'
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
                <TextField type = "date"  placeholder='Enter Application Deadline here' variant='outlined' fullWidth name='applicationDeadline' id='applicationDeadline'>
                </TextField>
              </Grid>
              <Grid xs = {12} item>
                <Button variant='contained' color='primary' fullWidth type='submit' onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <Button
            onClick={displayData}
          >
            Display Data
          </Button>
        </CardContent>
      </Card>
  )
}

export default CreateApplicationForm