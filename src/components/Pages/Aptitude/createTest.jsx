import { React, useState, useReducer } from 'react'
import { Typography, TextField, Button } from '@mui/material'

const boxStyle= {
    width:"150vh",
    marginBottom:"3vh",
    backgroundColor:"white",
    borderRadius:"6px"
}

const formReducer = (state, event) => {

    return {
      ...state,
      [event.name]: event.value
    }
   }

   var questionArray = []
   
   function createTest() {
     const [formData, setFormData] = useReducer(formReducer, {});
     const [submitting, setSubmitting] = useState(false);
   
     const handleSubmit = event => {
       event.preventDefault();
       questionArray[0] = formData.Question1
       questionArray[1] = formData.Question2
       questionArray[2] = formData.Question3
       questionArray[3] = formData.Question4
       questionArray[4] = formData.Question5
       setSubmitting(true);
     }
   
     const handleChange = event => {
       setFormData({
         name: event.target.name,
         value: event.target.value,
       });
     }
   
     return(
        <div>
        <Typography variant='h2' style={{marginLeft:"17vh", marginTop:"4vh"}}>Create Aptitude Test</Typography>
        {submitting &&
         <div>
           You are submitting the following Questions:
           <ul>
             {Object.entries(formData).map(([name, value]) => (
               <li key={name}>{value.toString()}</li>
             ))}
           </ul>
         </div>
         }
         <form onSubmit={handleSubmit} style={{marginLeft:"22vh", marginTop:"4vh"}}>

            
             <label>
               <TextField id="outlined-basic" label="Question1" name="Question1" style={boxStyle} onChange={handleChange} value={formData.Question1 || ''} required/>
               <br/>
             </label>

             <label>
                <TextField id="outlined-basic" name="Question2" label="Question2" style={boxStyle} onChange={handleChange} value={formData.Question2 || ''} required></TextField>
                <br/>
             </label>

             <label>
                <TextField id="outlined-basic" name="Question3" label="Question3" style={boxStyle} onChange={handleChange} value={formData.Question3 || ''} required></TextField>
                <br/>
             </label>

             <label>
                <TextField id="outlined-basic" name="Question4" label="Question4" style={boxStyle} onChange={handleChange} value={formData.Question4 || ''} required></TextField>
                <br/>
             </label>

             <label>
                <TextField id="outlined-basic" name="Question5" label="Question5" style={boxStyle} onChange={handleChange} value={formData.Question5 || ''} required></TextField>
                <br/>
             </label>

             <Typography> {questionArray[0]} </Typography>

           <Button variant="contained" type="submit">Submit</Button>
         </form>
       </div>
     )
   }

export default createTest