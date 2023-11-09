import {useContext} from "react";
import Nome from "../Nome";
import { UserContext } from "../../contexts/user";

function Alunos() {
    const { alunos } = useContext(UserContext)
    return (
      <div className="App">
        <h2>Componente Alunos</h2><br/>
        <Nome/>
      </div>
    );
  }
  
  export default Alunos;