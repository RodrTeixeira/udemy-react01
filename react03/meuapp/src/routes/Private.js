import { useState, useEffect } from "react";
import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from "firebase/auth"

export default function Private({ children }){
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    useEffect(() => {
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth, (user) => {
                // se tem usuário logado
                if(user){

                }else{
                    // não possui usuário logado
                    setLoading(false);
                    setSigned(false);   
                }
            })
        }
        checkLogin();
    }, [])
    return children;
}