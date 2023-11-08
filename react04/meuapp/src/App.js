import { useState } from "react";
import Alunos from "./components/Alunos";

function App() {
  const [nomeAluno, setNomeAluno] = useState("LUCAS OLIVEIRA");
  return (
    <div className="App">
      <br/>
      <h1>ESCOLA</h1>
      <br/><hr/><br/>
      <Titulo>
        <h1>BEM-VINDO À ESCOLA</h1>
      </Titulo>
      <br/><hr/><br/>
      <Alunos nome={nomeAluno} mudaNome={setNomeAluno}/>
    </div>
  );
}

export default App;

function Titulo({children}) {
  return(
    <div>
      {children}
    </div>
  )
}
