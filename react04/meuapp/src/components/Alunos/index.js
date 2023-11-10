import {useContext} from "react";
import Nome from "../Nome";
import { UserContext } from "../../contexts/user";

function Alunos() {
    const { qtdAlunos } = useContext(UserContext)
    return (
      <div className="App">
        <h2>Quantidade Total de Alunos:  {qtdAlunos}</h2><br/>
        <Nome/>
      </div>
    );
  }
  
  export default Alunos;