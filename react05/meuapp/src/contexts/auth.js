import { useState, createContext, useEffect} from "react";

const AuthContext = createContext({});

function AuthProvider( {children } ){
    const [user, setUser] = useState(null)
    return(
        <AuthContext.Provider 
            value={{
                signed: !!user, //false
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;