import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Pages/Homepage/Homepage'
import NavbarLayout from './components/Layouts/NavbarLayout'
import SignIn from './components/SignInSignUp/Signin'
import Account from './components/Account'
import Aptitude from './components/Pages/Aptitude/createTest'
import Test from './components/Pages/Test/test'

function App() {

  return (
    <Routes>
      <Route path='/' element={<NavbarLayout />}>
          <Route index path='home' element={<Homepage />}/>
          <Route path='aptitude' element={<Aptitude />} />
          <Route path='createAPosting' element={null} />
          <Route path='login' element={<SignIn />} />
          <Route path='signup' element={null} />
          <Route path='account' element={<Account />} />
          <Route path='test' element={<Test />} />
      </Route>
    </Routes>
  )

}

export default App
