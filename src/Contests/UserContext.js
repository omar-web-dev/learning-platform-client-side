import { createContext, React, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";
import app from '../firebase/firebase.confic';


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [lording, setLording] = useState(true)
    const [users, setUser] = useState()


    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const userSingIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const userSignOut = () => signOut(auth)

    
    const userProfileUpdate = (profile) => {
        console.log(profile);
        setLording(true)
        return (auth.currentUser, profile)
    }

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log( currentUser);
            setUser(currentUser)
            setLording(false)
        })
        return ()=> unSubscribe();
    },[])

    const userInfo = { users, createUser, userSingIn, userSignOut, userProfileUpdate }

    return (
        <section className='user-context-section'>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </section>
    );
};

export default UserContext;