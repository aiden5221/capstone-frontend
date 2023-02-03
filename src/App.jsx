import { Box } from '@mui/system'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Pages/Homepage/Homepage'

function App() {

  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
