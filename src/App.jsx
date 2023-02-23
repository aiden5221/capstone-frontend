import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import JobPost from './components/Pages/JobPost'
import NavbarLayout from './components/Layouts/NavbarLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<NavbarLayout />}>
          <Route path='postings' element={<JobPost />}/>
          <Route path='createAPosting' element={null} />
          <Route path='login' element={null} />
          <Route path='signup' element={null} />
      </Route>
    </Routes>

  )
}

export default App
