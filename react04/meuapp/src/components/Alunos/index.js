import Nome from "../Nome";

function Alunos({ nome }) {
    return (
      <div className="App">
        <h2>Componente Alunos</h2><br/>
        <Nome nome={nome}/>
      </div>
    );
  }
  
  export default Alunos;