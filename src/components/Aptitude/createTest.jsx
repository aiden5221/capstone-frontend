import { React, useState } from 'react'
import { Typography, TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import './createTestStyle.css'

//Temporary variable to hold answer
var answers = ""

//Array to  answers
var answersArray = []

var testInfo = {
  Questions : [
    
  ]
}

function CreateTest() {

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

          <div  style={{display:'flex',}}>
            <TextField 
            style={{width:"50vw",flexWrap:'wrap', marginLeft:"8vw", marginRight:"2vw" }}
            value={newQuestion}
            onChange={ (e) => setNewQuestion(e.target.value) }
            
            >Enter Question</TextField>

            <FormControl>
              <InputLabel>Answer</InputLabel>
                <Select
                  label='Answer'
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
              </FormControl>
              <Button 
              variant="filled" 
              onClick={addQuestion}
              style={{ backgroundColor:"#5f4c4c", color:"white", height:"5.3vh", width:"8vw", fontSize:"0.9em", marginLeft:"2vw", verticalAlign:"center"}}
              >
                Add Question
              </Button>
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
export default CreateTest