import { useState, createContext, useEffect} from "react";
import { auth, db } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc} from "firebase/firestore";

export const AuthContext = createContext({});

function AuthProvider( {children } ){
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false);

    function signIn(email, password){
        console.log(email)
        console.log(password);
        alert("LOGADO COM SUCESSO!")
    }

    async function signUp(email, password, name){
        setLoadingAuth(true);
        await createUserWithEmailAndPassword(auth, email, password)
        .then( async (value) => {
            let uid = value.user.uid
            await setDoc(doc(db, "users", uid))
        })
    }

    return(
        <AuthContext.Provider 
            value={{
                signed: !!user, //false
                user,
                signIn,
                signUp
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
