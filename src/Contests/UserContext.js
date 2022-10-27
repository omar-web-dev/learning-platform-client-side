import { createContext, React, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile
} from "firebase/auth";
import app from '../firebase/firebase.confic';


export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [lording, setLording] = useState(true)
    const [users, setUsers] = useState()


    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const userSingIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const userSignOut = () => signOut(auth)

    const googleLongIn = provider =>{
        setLording(true)
        return signInWithPopup(auth, provider)
    }


    
    const userProfileUpdate = (profile) => {
        setLording(true)
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLording(true)
        signOut(auth)
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser)
            setLording(false)
        })
        return ()=> unSubscribe();
    },[])

    const userInfo = { users, createUser, userSingIn, userSignOut, userProfileUpdate, logOut, googleLongIn,}

    return (
        <section className='user-context-section'>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </section>
    );
};

export default UserContext;