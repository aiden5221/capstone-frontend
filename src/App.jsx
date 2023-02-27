import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Signin from './components/SignInSignUp/Signin'
import Signup from './components/SignInSignUp/Signup'
import Account from './components/Account'
import { Route, Routes } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from './utils/firebase/recoil/atoms/user/user'

function App() {
  const [user, setUser] = useRecoilState(userState); 
  // useEffect(() => {
      
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //         console.log(user)
  //         setUser(user)
  //     }) 
  //     return () => {
  //     unsubscribe();
  //     }
  // },[])
  return (
    
    <div>
      <Navbar />
      <Footer />
          <Routes>
            <Route path='/Login' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={<Account />} />
          </Routes>
    </div>
  );
}

export default App
