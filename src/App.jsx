import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Pages/Homepage/Homepage'
import NavbarLayout from './components/Layouts/NavbarLayout'
import ApplicantForm from './components/Pages/applicantForm/ApplicantForm'
import SignIn from './components/Pages/SignInSignUp/Signin'
import Account from './components/Pages/Account'
import NavbarWithCarousel from './components/Layouts/NavbarFooterWithCarousel'
import JobPost from './components/Pages/JobPost'
import { JobPostings } from './components/Pages/JobPostings/JobPostings'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<NavbarWithCarousel />}>
          <Route index element={<Homepage />}/>
      </Route>
      <Route path='/' element={<NavbarLayout />}> 
        <Route path='postings' element={<JobPostings/>}>
          <Route path=':search' element={<JobPostings/>}/>
        </Route>
        <Route path='createAPosting' element={null} />
        <Route path='login' element={<SignIn />} />
        <Route path='signup' element={null} />
        <Route path='account' element={<Account />} />
        <Route path='apply/:id' element={<ApplicantForm />} />
        <Route path='jobPosting/:id' element={<JobPost/>} />
      </Route>
    </Routes>

  )
}

export default App
 
