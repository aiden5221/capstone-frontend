import React from 'react'
import './applicationForm.css'

export default function ApplicationForm() {
  return (
    <section id = 'applicationForm'>
        <h2>Job Creation</h2>
        <br />
        <form action="">
            <label>Job Title
                <input type="text" id='jobTitle' name='jobTitle' />
            </label>
            <br />
            <label>Company Name
                <input type="text" id='companyName' name='companyName' />
            </label>
            <br />
            <label>Job Description
                <textarea id='jobDescription' name='jobDescription' rows='7'/>
            </label>
            <br />
            <label>Address Line
                <input type="text" id='addressLine' name='addressLine' />
            </label>
            <br />
            <label>Qualifications
                <textarea id='qualifications' name='qualifications' rows='7' />
            </label>
            <br />
            <label>Application Deadline
                <input type="date" id='applicationDeadline' name='applicationDeadline' />
            </label>
            <br />
            <input type="submit" name="submitCreateJob" id="submitCreateJob" value='Create Job'/>
            
        </form>
    </section>
  )
}
