function Nome({nome, mudaNome}) {
    return (
      <div className="App">
        <span style={{ color: "#ff0000" }}>Bem-vindo: {nome}</span>
        <br/><br/>
        <button onClick={() => mudaNome("SUJEITO PROGRAMADOR")}>Trocar Nome</button>
      </div>
    );
  }
  
  export default Nome;