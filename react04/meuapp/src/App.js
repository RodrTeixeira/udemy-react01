import { useState } from "react";
import Alunos from "./components/Alunos";

import UserProvider from "./contexts/user";

function App() {
  
  return (
    <UserProvider>
        <div className="App">
        <br/>
        <h1>ESCOLA</h1>
        <br/><hr/><br/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;


