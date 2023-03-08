import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Pages/Homepage/Homepage'
import NavbarLayout from './components/Layouts/NavbarLayout'
import ApplicantForm from './components/applicantForm/ApplicantForm'
import SignIn from './components/SignInSignUp/Signin'
import Account from './components/Account'
import NavbarWithCarousel from './components/Layouts/NavbarFooterWithCarousel'
import './App.css'
import JobPost from './components/Pages/JobPost'

function App() {

  return (
    <Routes>
      <Route path='/' element={<NavbarWithCarousel />}>
          <Route index path='home' element={<Homepage />}/>
      </Route>
      <Route path='/' element={<NavbarLayout />}> 
        <Route path='postings' element={null} />
        <Route path='createAPosting' element={null} />
        <Route path='login' element={<SignIn />} />
        <Route path='signup' element={null} />
        <Route path='account' element={<Account />} />
        <Route path='apply' element={<ApplicantForm />} />
        <Route path='test' element={<JobPost/>} />
      </Route>
    </Routes>

  )
}

export default App
 