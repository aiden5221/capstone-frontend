import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Pages/Homepage/Homepage'
import NavbarLayout from './components/Layouts/NavbarLayout'
import CreateApplicationForm from './components/CreateApplicationForm/CreateApplicationForm'
import SignIn from './components/SignInSignUp/Signin'
import Account from './components/Account'
function App() {

  return (
    <Routes>
      <Route path='/' element={<NavbarLayout />}>
          <Route index path='home' element={<Homepage />}/>
          <Route path='postings' element={null} />
          <Route path='createAPosting' element={<CreateApplicationForm />} />
          <Route path='login' element={<SignIn />} />
          <Route path='signup' element={null} />
          <Route path='account' element={<Account />} />
      </Route>
    </Routes>

  )
}

export default App