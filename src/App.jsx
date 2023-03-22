import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Pages/Homepage/Homepage'
import NavbarLayout from './components/Layouts/NavbarLayout'
import ApplicantForm from './components/Pages/applicantForm/ApplicantForm'
import SignIn from './components/Pages/SignInSignUp/Signin'
import Account from './components/Pages/Account'
import NavbarWithCarousel from './components/Layouts/NavbarFooterWithCarousel'
import JobPost from './components/Pages/JobPost'
import SignUp from './components/Pages/SignInSignUp/Signup'
import { JobPostings } from './components/Pages/JobPostings/JobPostings'
import './App.css'
import CreateApplicationForm from './components/Pages/CreateApplicationForm/CreateApplicationForm'
import Shortlist from './components/Pages/Shortlist/Shortlist'
import AptitudeTest from './components/Aptitude/aptitudeTest'
import TakeAptitudeTest from './components/Pages/TakeAptitudeTest/TakeAptitudeTest'
import CreatedPostings from './components/Pages/CreatedPostings/CreatedPostings'
import { Alert, Snackbar } from '@mui/material'
import { useRecoilState } from 'recoil'
import { DEFAULT_SNACKBARSTATE, snackbarState } from './utils/recoil/atoms/snackbar/snackbar'
function App() {
  const [snackbar, setSnackBar] = useRecoilState(snackbarState)

  const resetSnackbar = () => {
    setSnackBar(DEFAULT_SNACKBARSTATE)
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<NavbarWithCarousel />}>
          <Route index element={<Homepage />}/>
      </Route>
      <Route path='/' element={<NavbarLayout />}> 
        <Route path='postings' element={<JobPostings/>}>
          <Route path=':search' element={<JobPostings/>}/>
        </Route>
        <Route path='createAPosting' element={<CreateApplicationForm/>} />
        <Route path='login' element={<SignIn />} />
        <Route path='signup' element={< SignUp/>} />
        <Route path='account' element={<Account />} />
        <Route path='apply/:id' element={<ApplicantForm />} />
        <Route path='jobPosting/:id' element={<JobPost/>} />
        <Route path='yourPostings' element={<CreatedPostings />} />
        <Route path='shortlist/:id' element={<Shortlist />} />
        <Route path='test' element={<AptitudeTest />} />
        <Route path='aptitudeTest/:id' element={<TakeAptitudeTest />} />
      </Route>
    </Routes>
      {
        snackbar &&
            <Snackbar open={snackbar.active} onClose={resetSnackbar} autoHideDuration={3000} >
                <Alert open={snackbar.active} onClose={resetSnackbar} severity={snackbar.isError ? 'error' : 'success'}> 
                    {snackbar.message}
                </Alert>
            </Snackbar>
      }
    </>
  )

}

export default App
 
