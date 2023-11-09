import { userState, createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const [alunos, setAlunos] = useState("Sujeito Programador");
    return(
        <UserContext.Provider value={{ alunos, setAlunos }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;