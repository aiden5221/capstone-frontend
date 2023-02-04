import { Box } from '@mui/system'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import CreateApplicationForm from './components/CreateApplicationForm/CreateApplicationForm'

function App() {

  return (
    <div>
      <Navbar />
      <CreateApplicationForm />
      <Footer />
    </div>
  )
}

export default App