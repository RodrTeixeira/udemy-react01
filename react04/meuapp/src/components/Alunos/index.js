import Nome from "../Nome";

function Alunos({ nome, mudaNome }) {
    return (
      <div className="App">
        <h2>Componente Alunos</h2><br/>
        <Nome nome={nome} mudaNome={mudaNome}/>
      </div>
    );
  }
  
  export default Alunos;