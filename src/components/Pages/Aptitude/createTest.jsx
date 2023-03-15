import { React, useState, useReducer } from 'react'
import aptitude from "/src/utils/aptitudeInfo.json"
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './createTestStyle.css'

//Temporary variable to hold answer
var answers = ""

//Array to display answers
var answersArray = []

var testInfo = {
  Questions : [
    
  ]
}

function createTest() {

  const [Question, setQuestion] = useState([])
  const [newQuestion, setNewQuestion] = useState('')
  const [choice, setChoice] = useState('')


  const addQuestion = () => {
    if(newQuestion) {
      let num = Question.length
      let newEntry = { id: num, title: newQuestion, status: false }
      setQuestion([...Question, newEntry])
      setNewQuestion('')
      setChoice('')
    
      testInfo.Questions.push(
        {
          id: num,
          question: newQuestion,
          answer: answers
        }
      )
    }
    console.log(testInfo)
  }


  const deleteQuestion = (id) => {
    let newQuestions = Question.filter( question => question.id !== id )
    setQuestion(newQuestions)
    testInfo.Questions.pop(id)
    delete answersArray[id]
    console.log(testInfo)
  }

  const handleList = (event) => {
    setChoice(event.target.value)
    let num = Question.length
    answersArray[num] = event.target.value
    answers = event.target.value
  }

  return(
    <div className="container" style={{overflowY:"hidden"}}>
      <br /><br />
      <Typography style={{fontSize:"5.5em"}} >Create Aptitude Test</Typography>
      <br /><br />

        <div style={{marginRight:"5vw"}}>
          <div classname="question-block">
            <TextField 
            style={{width:"50vw", marginRight:"20vw"}}
            value={newQuestion}
            onChange={ (e) => setNewQuestion(e.target.value) }
            >Enter Question</TextField>
          </div>

          <div classname="question-block" style={{marginTop:"-7.34vh", marginLeft:"45vw"}}>
          <InputLabel >Answer</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="Answer1"
              value={choice}
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

          
            <div style={{marginLeft:"67vw", marginTop:"-7.5vh"}}>
              <Button 
              variant="filled" 
              onClick={addQuestion}
              style={{marginTop:"2.3vh", backgroundColor:"#5f4c4c", color:"white", height:"5vh", width:"8vw", fontSize:"0.9em"}}
              >
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
                    <Typography className="taskText"> Question: {question.title}</Typography>
                    <Typography className='taskText'>Answer: {testInfo.Questions[index].answer}</Typography>
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
      <div>
        <Button variant="filled" 
        style={{
          backgroundColor:"#5f4c4c",
          color:"white", 
          height:"5vh", 
          position:"relative", 
          left:"23vw", 
          marginTop:"7vh",
          marginBottom:"7vh"}}
        >Submit Questions</Button>
      </div>
    </div>
  )
}
export default createTest