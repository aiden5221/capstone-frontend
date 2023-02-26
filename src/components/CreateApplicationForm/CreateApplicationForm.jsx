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

  const [rows, setRows] = React.useState([
    createData("Java", 8),
    createData("Python", 7),
  ]);

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

  const onRevert = id => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    newRows.splice(id, 1);
    setRows(newRows);
  };

  return (
    <Paper style={{overflow: "hidden", marginBottom: "5px"}}>
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
  
              <Table>
                <caption>Weighted Skills</caption>
                <TableHead>
                  <TableRow>
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ width: "10%" }}
                    onClick={() => setRows([...rows, createData('test', 69)])}
                  >
                    Add
                  </Button>
                  <TableCell align="left">Skill Name</TableCell>
                  <TableCell align="left">Weighted Value</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map(row => (
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
                              onClick={() => onRevert(row.id)}
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
