import { useContext } from "react";
import  { UserContext } from "../../contexts/user";

function Nome() {
    const { alunos, setAlunos } = useContext(UserContext)
    return (
      <div className="App">
        <span style={{ color: "#ff0000" }}>Bem-vindo: {alunos}</span>
        <br/><br/>
        <button onClick={() => setAlunos("Lucas Silva")}>Troca Nome</button>
      </div>
    );
  }
  
  export default Nome;