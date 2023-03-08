import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Pages/Homepage/Homepage'
import NavbarLayout from './components/Layouts/NavbarLayout'
import ApplicantForm from './components/applicantForm/ApplicantForm'
import SignIn from './components/SignInSignUp/Signin'
import Account from './components/Account'

function App() {

  return (
    <Routes>
      <Route path='/' element={<NavbarLayout />}>
          <Route path='postings' element={<JobPost />}/>
          <Route path='createAPosting' element={null} />
          <Route path='login' element={<SignIn />} />
          <Route path='signup' element={null} />
          <Route path='applyForJob' element={<ApplicantForm/>} />
          <Route path='account' element={<Account />} />
      </Route>
    </Routes>

  )
}

export default App
