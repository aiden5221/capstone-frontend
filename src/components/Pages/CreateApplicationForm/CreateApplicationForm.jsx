import React, { useEffect, useState } from 'react'
import { Button, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Input, IconButton, Card, TextField, Modal, Box } from '@mui/material'
import { postJobApplication } from '../../../utils/backend/requests';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import CreateTest from '../../Aptitude/CreateTest';
import { useNavigate } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { userState } from '../../../utils/recoil/atoms/user/user';
import { useRecoilValue } from 'recoil';

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

  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [aptitudeTest, setaptitudeTest] = useState([]);
  const [minGPAValue, setMinGPAValue] = useState('');
  const [error, setError] = useState('');
  const [minAptitudeResults, setMinAptitudeResults] = useState('');
  const [minAptitudeResultsError, setMinAptitudeResultsError] = useState('');
  const [skillName, setSkillName] = useState('');
  const [weightedValue, setWeightedValue] = useState('');
  const navigate = useNavigate();
  const { uid } = useRecoilValue(userState);

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

    if (!isNumberBetween0And4(minGPAValue) && !isPositiveNumberAndWholeNumber(minAptitudeResults)) {
      setError('The input value must be positive and less than or equal to 4.');
      setMinAptitudeResultsError('The minimum aptitude Results must be a whole number and a positive value');
      return; 
    } else  if (!isPositiveNumberAndWholeNumber(minAptitudeResults)){
      setMinAptitudeResultsError('The minimum aptitude Results must be a whole number and a positive value');
      return;
    }
    else  if (!isNumberBetween0And4(minGPAValue)) {
      setError('The input value must be positive and less than or equal to 4.');
      return; 
    }
    else{
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
        "company":myObj.company, 
        "createdBy": uid,
        "aptitudeTest": aptitudeTest,
      })
      navigate(`/jobPosting/${id}`);
      console.log('Form submitted successfully');
    }
    
 };

 const isNumberBetween0And4 = (num) => {
  return num > 0 && num <= 4;
 }

 const isPositiveNumberAndWholeNumber = (num) => {
  return num > 0 && (!(num%1)); 
 }

 const handleChange = (event) => {
  setMinGPAValue(event.target.value);
  setError('');
};

  const handleMinAptitudeResultsChange = (event) => {
    setMinAptitudeResults(event.target.value);
    setMinAptitudeResultsError('');
  };

  const [previous, setPrevious] = useState({});

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
    if(weightedValue <= 10 && weightedValue >= 0) {
      let text = getSkillName();
      let value = getSkillValue();
      setRows([...rows, createData(text, value)]);
      setSkillName('');
      setWeightedValue('');
    }
    else {
      alert("Please enter a positive value or a value less than 10.");
    }
  }

  const handleModal = () => setOpen(!open)

  useEffect(() => {
    if(uid == ''){
      navigate('/login');
    }
  },[])
  return (
    <Grid2 container xs={10} xsOffset={1} sx={{ marginBottom:'3vh'}}>
      <Card >
        <CardContent>
        <Typography variant='h4' gutterBottom marginTop={2} marginLeft={2} style={{textAlign:'center'}}>
          Create Job Application Form
        </Typography>
          <form id = 'formData' onSubmit={handleSubmit}>
            <Grid2 container spacing={1}>
              <Grid2 xs = {12} item>
                <TextField label = "Job Title" placeholder='Enter Job Title here' variant='outlined' fullWidth name='jobName' id='jobName' required>
                </TextField>
              </Grid2>
              <Grid2 xs = {12} item>
                <TextField label = "Company Name" placeholder='Enter Company Name here' variant='outlined' fullWidth name='company' id='company' required>
                </TextField>
              </Grid2>
              <Grid2 xs = {12} item>
                <TextField label = "Job Description" placeholder='Enter Job Description here' variant='outlined' multiline fullWidth rows={4} name='jobDescription' id='jobDescription' required>
                </TextField>
              </Grid2>
              <Grid2 xs = {12} item>
                <TextField label = "Address Line 1" placeholder='Enter Company Address here' variant='outlined' fullWidth name='location' id='location' required>
                </TextField>
              </Grid2>
              <Grid2 xs = {12} item>
                <TextField type = "text" label = "Minimum GPA" placeholder='Minimum GPA required for the job' variant='outlined' name='minGPA' id='minGPA' value={minGPAValue} onChange = {handleChange} required>
                </TextField>
                {error && <div style={{ color: 'red' }}>{error}</div>}
              </Grid2>
              <Grid2 xs = {12} item>
                <TextField type = "number" label = "Minimum Aptitude Results" placeholder='Minimum Aptitude Score required for the job' variant='outlined' name='aptitudeResultsMin' id='aptitudeResultsMin' value={minAptitudeResults} onChange = {handleMinAptitudeResultsChange} required>
                </TextField>
                {minAptitudeResultsError && <div style={{ color: 'red' }}>{minAptitudeResultsError}</div>}
              </Grid2>
              <Grid2 xs = {12} item> 
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ width: "10%", minWidth: "150px"}}
                    onClick={handleModal}
                  >
                    Personality Test
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleModal}
                  >
                      <Box sx={{backgroundColor:'white', display:'flex', maxWidth:'85vw', borderRadius:'5px', margin:'auto', marginTop:'5vh'}}>
                          <CreateTest setTest={setaptitudeTest} questions={aptitudeTest} isOpen={setOpen} />
                      </Box>
                      
                  </Modal>
              </Grid2>
              <>
              <Grid2 xs = {12} container justify="flex-end" alignItems="center">

                  <Button
                        variant='contained'
                        color='primary'
                        style={{ width: "10%", marginRight: "3vw", minWidth: "150px"}}
                        onClick = {handleAddClick}
                      >
                          Add
                  </Button>
                  
                  
                  <Grid2 item>
                    <TextField
                      id='desiredSkills'
                      name='desiredSkills'
                      label = 'Skill Name'
                      variant = 'outlined'
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}>
                    </TextField>
                  </Grid2>

                  <Grid2 item>
                    <TextField 
                      id='skillValue'
                      name='skillValue'
                      label = 'Skill Value'
                      variant = 'outlined'
                      value = {weightedValue}
                      onChange={(e) => setWeightedValue(e.target.value)}>
                    </TextField>
                  </Grid2>
              </Grid2>
              </>
              <Grid2 xs = {12} container sx={{backgroundColor:'#ECEEF2', marginBottom: "3vh"}}>
                <Table>
                  <caption>Weighted Skills</caption>
                  <TableHead>
                    <TableRow>
                    <TableCell>
                        
                    </TableCell>
                    <TableCell sx={{fontWeight:'bold'}} align="left">Skill Name</TableCell>
                    <TableCell  sx={{fontWeight:'bold'}} align="left">Weighted Value</TableCell>
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
              </Grid2>
              <Grid2 xs={12} sx={{marginTop:'1vh'}}  item>
                <Button variant='contained' color='primary' fullWidth type='submit'>
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </CardContent>
      </Card>
      </Grid2>
  )
}

export default CreateApplicationForm