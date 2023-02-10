import { useContext, createContext, useState, useEffect } from 'react';
import { 
    GoogleAuthProvider, 
    signInWithPopup,  
    signInWithRedirect,
    signOut,
    onAuthStateChanged } 
    from 'firebase/auth';

import { auth } from '../utils/firebase/firebase'

const AuthContextG = createContext()

export const AuthContextGProvider = ({children}) => {

    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('User', user)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContextG.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContextG.Provider>
    )
}

export const UserAuthG = () => {
    return useContext(AuthContextG)
}