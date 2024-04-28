import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
export const AuthContext = createContext(null)





const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const creatUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        
     }
     // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        loading,
        creatUser,
        user,
        setUser,
        loginUser,
        setLoading,
        googleLogin,
        logOut,
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
            setUser(null);
            }
          });
          return () => {
            unsubscribe();
          }
 
    }, [])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;