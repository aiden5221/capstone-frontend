import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Pages/Homepage/Homepage'
import NavbarLayout from './components/Layouts/NavbarLayout'
import CreateApplicationForm from './components/CreateApplicationForm/CreateApplicationForm'

function App() {

  return (
    <Routes>
      <Route path='/' element={<NavbarLayout />}>
          <Route index path='home' element={<Homepage />}/>
          <Route path='postings' element={null} />
          <Route path='createAPosting' element={<CreateApplicationForm />} />
          <Route path='login' element={null} />
          <Route path='signup' element={null} />
      </Route>
    </Routes>

  )
}

export default App