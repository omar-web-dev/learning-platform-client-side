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
    const [users, setUser] = useState()
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    


    const userInfo = { users, createUser,}

    return (
        <section className='user-context-section'>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </section>
    );
};

export default UserContext;