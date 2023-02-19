import { Box } from '@mui/system'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Signin from './components/SignInSignUp/Signin'
import Signup from './components/SignInSignUp/Signup'
import Account from './components/Account'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContextGProvider } from './context/AuthContextG'

function App() {

  return (
    
    <div>

      <Navbar />
      <Footer />

      <AuthContextGProvider>
        <AuthContextProvider>
          <Routes>
            <Route path='/Login' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route 
            path='/account' 
            element={
              <ProtectedRoute>
              <Account />
              </ProtectedRoute>
            } 
            />
          </Routes>
        </AuthContextProvider>
      </AuthContextGProvider>

    </div>

    
    

  );
}

export default App
