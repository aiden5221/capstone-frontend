import { React, useState, useReducer } from 'react'
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createTestStyle.css'

var questions = []
var answers = []

function createTest() {

  const [Question, setQuestion] = useState([])
  const [newQuestion, setNewQuestion] = useState('')

  const addQuestion = () => {
    if(newQuestion) {
      let num = Question.length
      let newEntry = { id: num, title: newQuestion, status: false }
      questions[num] = newQuestion
      setQuestion([...Question, newEntry])
      setNewQuestion('')
    }
  }

  const deleteQuestion = (id) => {
    let newQuestions = Question.filter( question => question.id !== id )
    setQuestion(newQuestions)
  }

  const handleList = (event) => {
    let num = Question.length
    answers[num] = event.target.value
  }

  return(
    <div className="container App">

      <br /><br />
      <Typography variant="h2">Create Aptitude Test</Typography>
      <br /><br />
  
      <div className='row'>
        <div className='col' style={{marginTop:"2.1vh"}}>
          <TextField 
          value={newQuestion}
          onChange={ (e) => setNewQuestion(e.target.value) }
          className='form-control form-control-lg'
          >Enter Question</TextField>
        </div>

        <div className='col-auto'>
        <InputLabel id="demo-simple-select-label">Answer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="Answer1"
            onChange={handleList}
            style={{width:"10vw"}}
          >
            <MenuItem value={"Strongly Agree"}>Strongly Agree</MenuItem>
            <MenuItem value={"Agree"}>Agree</MenuItem>
            <MenuItem value={"Neutral"}>Neutral</MenuItem>
            <MenuItem value={"Disagree"}>Disagree</MenuItem>
            <MenuItem value={"Strongly Disagree"}>Strongly Disagree</MenuItem>
          </Select>
        </div>

        <div className='col-auto'>
          <Button 
          variant="filled" 
          className='btn'
          onClick={addQuestion}
          style={{marginTop:"2.3vh", backgroundColor:"black", color:"white", height:"5vh"}}>
            Add Question
          </Button>
        </div>
      </div>
      <br/>
        
      {Question && Question.length ? '' : 'No Questions...'}

      {Question && Question
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map ((question, index) => {
          return(
              <div key={question.id}>
                <div className="col taskBg">

                  <div className={question.status ? 'done' : ''}>
                    <Typography className="taskNumber">{index + 1}</Typography>
                    <Typography className="taskText"> Question: {question.title} {         } Answer: {answers[index]}</Typography>
                  </div> 

                  <div className='iconsWrap'>

                    {question.status ? null : (
                        <span title="Delete"
                        onClick={() => deleteQuestion(question.id)}>
                        <DeleteIcon />
                        </span>
                    )}

                  </div> 

                </div>
              </div>  

          )
        })
      }

      {/* <Typography variant="h1">{questions[0]}1{answers[0]}</Typography>
      <Typography variant="h1">{questions[1]}2</Typography>
      <Typography variant="h1">{questions[2]}3</Typography> */}


    </div>
  )
}

export default createTest

































































































// const boxStyle= {
//     width:"150vh",
//     marginBottom:"3vh",
//     backgroundColor:"white",
//     borderRadius:"6px"
// }

  
//   const formReducer = (state, event) => {
//     return {
//       ...state,
//       [event.name]: event.value
//     }
//   }

//    var questionArray = []
//    var answerArray = []
   
//    function createTest() {
//      const [formData, setFormData] = useReducer(formReducer, {});
//      const [submitting, setSubmitting] = useState(false);
   
//      const handleSubmit = event => {
//        event.preventDefault();
//        questionArray[0] = formData.Question1
//        questionArray[1] = formData.Question2
//        questionArray[2] = formData.Question3
//        questionArray[3] = formData.Question4
//        questionArray[4] = formData.Question5

//        answerArray[0] = formData.Answer1
//        setSubmitting(true);
//      }
   
//      const handleChange = event => {
//        setFormData({
//          name: event.target.name,
//          value: event.target.value,
//        });

//      }

//      const handleList = event => {
//       setFormData({
//         name: event.target.name,
//         value: event.target.value
//       })
//      }



   
//      return(
//         <div>
//         <Typography variant='h2' style={{marginLeft:"17vh", marginTop:"4vh"}}>Create Aptitude Test</Typography>

//          <form onSubmit={handleSubmit} style={{marginLeft:"22vh", marginTop:"4vh"}}>

//             <label>
//               <TextField id="outlined-basic" label="Question1" name="Question1" style={boxStyle} onChange={handleChange} value={formData.Question1 || ''} required/>
//               <FormControl fullWidth>
//               <InputLabel id="demo-simple-select-label">Answer</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   onChange = {handleList}
//                   name="Answer1"
                
//                 >
//                   <MenuItem value={1}>Strongly Agree</MenuItem>
//                   <MenuItem value={2}>Agree</MenuItem>
//                   <MenuItem value={3}>Neutral</MenuItem>
//                   <MenuItem value={3}>Disagree</MenuItem>
//                   <MenuItem value={3}>Strongly Disagree</MenuItem>
//                 </Select>
//             </FormControl>
//               <br/>
//             </label>

//             <label>
//               <TextField id="outlined-basic" name="Question2" label="Question2" style={boxStyle} onChange={handleChange} value={formData.Question2 || ''} required></TextField>
//               <br/>
//             </label>

//             <label>
//               <TextField id="outlined-basic" name="Question3" label="Question3" style={boxStyle} onChange={handleChange} value={formData.Question3 || ''} required></TextField>
//               <br/>
//             </label>

//             <label>
//               <TextField id="outlined-basic" name="Question4" label="Question4" style={boxStyle} onChange={handleChange} value={formData.Question4 || ''} required></TextField>
//               <br/>
//             </label>

//             <label>
//               <TextField id="outlined-basic" name="Question5" label="Question5" style={boxStyle} onChange={handleChange} value={formData.Question5 || ''} required></TextField>
//               <br/>
//             </label>

//             <Typography> {questionArray[0]} </Typography>
//             <Typography> {answerArray[0]} </Typography>


//            <Button variant="contained" type="submit">Submit</Button>
//          </form>
//        </div>
//      )
//    }

// export default createTest